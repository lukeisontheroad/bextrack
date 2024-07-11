"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_end-session_end-session_module_ts"],{

/***/ 62936:
/*!*********************************************************!*\
  !*** ./src/app/pages/end-session/end-session.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EndSessionPageModule": () => (/* binding */ EndSessionPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _end_session_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./end-session.page */ 73005);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);







const routes = [{
  path: '',
  component: _end_session_page__WEBPACK_IMPORTED_MODULE_0__.EndSessionPage
}];
class EndSessionPageModule {}
EndSessionPageModule.ɵfac = function EndSessionPageModule_Factory(t) {
  return new (t || EndSessionPageModule)();
};
EndSessionPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: EndSessionPageModule
});
EndSessionPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](EndSessionPageModule, {
    declarations: [_end_session_page__WEBPACK_IMPORTED_MODULE_0__.EndSessionPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 73005:
/*!*******************************************************!*\
  !*** ./src/app/pages/end-session/end-session.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EndSessionPage": () => (/* binding */ EndSessionPage)
/* harmony export */ });
/* harmony import */ var _workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ionic_appauth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ionic-appauth */ 77798);
/* harmony import */ var ionic_appauth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ionic_appauth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _openid_appauth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @openid/appauth */ 17154);
/* harmony import */ var _openid_appauth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_openid_appauth__WEBPACK_IMPORTED_MODULE_2__);






class EndSessionPage {
  constructor(auth, navCtrl, router, storageBackend) {
    this.auth = auth;
    this.navCtrl = navCtrl;
    this.router = router;
    this.storageBackend = storageBackend;
  }
  ngOnInit() {
    var _this = this;
    return (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.auth.handleCallback(window.location.origin + _this.router.url);
      yield _this.storageBackend.clear();
      _this.navCtrl.navigateRoot('login');
    })();
  }
}
EndSessionPage.ɵfac = function EndSessionPage_Factory(t) {
  return new (t || EndSessionPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_appauth__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_openid_appauth__WEBPACK_IMPORTED_MODULE_2__.StorageBackend));
};
EndSessionPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: EndSessionPage,
  selectors: [["app-end-session"]],
  decls: 2,
  vars: 0,
  consts: [["color", "primary"], ["color", "secondary", 2, "position", "absolute", "left", "40%", "top", "40%", "width", "20%", "height", "20%"]],
  template: function EndSessionPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-content", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ion-spinner", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonSpinner],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_end-session_end-session_module_ts.js.map