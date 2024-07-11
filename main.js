(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _core_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/auth-guard.service */ 73048);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);





const routes = [{
  path: 'tabs',
  canActivate: [_core_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService],
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_api_api_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_tabs_tabs_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/tabs/tabs.module */ 5557)).then(m => m.TabsPageModule)
}, {
  path: 'stopwatch',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_api_api_service_ts"), __webpack_require__.e("default-src_app_models_stopwatch_ts-src_app_pipes_pipes_module_ts-src_app_services_stopwatche-fddc23"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_stopwatch_stopwatch_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/stopwatch/stopwatch.module */ 82002)).then(m => m.CreateStopwatchPageModule)
}, {
  path: 'stopwatch/:stopwatch_id',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_api_api_service_ts"), __webpack_require__.e("default-src_app_models_stopwatch_ts-src_app_pipes_pipes_module_ts-src_app_services_stopwatche-fddc23"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_stopwatch_stopwatch_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/stopwatch/stopwatch.module */ 82002)).then(m => m.CreateStopwatchPageModule)
}, {
  path: 'create-time',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_api_api_service_ts"), __webpack_require__.e("default-src_app_models_stopwatch_ts-src_app_pipes_pipes_module_ts-src_app_services_stopwatche-fddc23"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_time_time_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/time/time.module */ 69299)).then(m => m.CreateTimePageModule)
}, {
  path: 'create-time/stopwatch/:stopwatch_id',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_api_api_service_ts"), __webpack_require__.e("default-src_app_models_stopwatch_ts-src_app_pipes_pipes_module_ts-src_app_services_stopwatche-fddc23"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_time_time_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/time/time.module */ 69299)).then(m => m.CreateTimePageModule)
}, {
  path: 'create-time/:project_id',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_api_api_service_ts"), __webpack_require__.e("default-src_app_models_stopwatch_ts-src_app_pipes_pipes_module_ts-src_app_services_stopwatche-fddc23"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_time_time_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/time/time.module */ 69299)).then(m => m.CreateTimePageModule)
}, {
  path: 'create-time/:project_id/:package_id',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_api_api_service_ts"), __webpack_require__.e("default-src_app_models_stopwatch_ts-src_app_pipes_pipes_module_ts-src_app_services_stopwatche-fddc23"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_time_time_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/time/time.module */ 69299)).then(m => m.CreateTimePageModule)
}, {
  path: 'display-time/:time_id',
  canActivate: [_core_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService],
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_api_api_service_ts"), __webpack_require__.e("default-src_app_models_stopwatch_ts-src_app_pipes_pipes_module_ts-src_app_services_stopwatche-fddc23"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_time_time_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/time/time.module */ 69299)).then(m => m.CreateTimePageModule)
}, {
  path: 'auth/callback',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_api_api_service_ts"), __webpack_require__.e("src_app_pages_auth-callback_auth-callback_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/auth-callback/auth-callback.module */ 99292)).then(m => m.AuthCallbackPageModule)
}, {
  path: 'auth/endsession',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_end-session_end-session_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/end-session/end-session.module */ 62936)).then(m => m.EndSessionPageModule)
}, {
  path: 'login',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login.module */ 21053)).then(m => m.LoginPageModule)
}, {
  path: 'loading',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_api_api_service_ts"), __webpack_require__.e("src_app_pages_loading_loading_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/loading/loading.module */ 47467)).then(m => m.LoadingPageModule)
}, {
  path: 'about',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_about_about_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/about/about.module */ 18114)).then(m => m.AboutPageModule)
}, {
  path: 'notification-settings',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_api_api_service_ts"), __webpack_require__.e("default-node_modules_lodash_lodash_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_notification-settings_notification-settings_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/notification-settings/notification-settings.module */ 31151)).then(m => m.NotificationSettingsPageModule)
}, {
  path: 'module-settings',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_api_api_service_ts"), __webpack_require__.e("default-node_modules_lodash_lodash_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_module-settings_module-settings_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/module-settings/module-settings.module */ 32902)).then(m => m.NotificationSettingsPageModule)
}, {
  path: '**',
  pathMatch: 'full',
  // canActivate: [AuthGuardService],
  redirectTo: 'loading'
}, {
  path: 'contacts',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_api_api_service_ts"), __webpack_require__.e("default-src_app_pages_contacts_contacts_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/contacts/contacts.module */ 50464)).then(m => m.ContactsPageModule)
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, {
    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__.PreloadAllModules,
    useHash: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.useHash
  }), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/core */ 26549);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 33935);





const {
  SplashScreen,
  Device
} = _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Plugins;
class AppComponent {
  constructor(platform, translateService) {
    this.platform = platform;
    this.translateService = translateService;
    this.initializeApp();
  }
  initializeApp() {
    var _this = this;
    return (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.platform.ready();
      try {
        if (_capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.isNativePlatform()) {
          const language = yield Device.getLanguageCode();
          _this.translateService.use(language.value);
          // Hide the splash screen if the platform is native
          if (SplashScreen) {
            yield SplashScreen.hide();
          }
        } else {
          // Fallback for web or unsupported platforms
          const browserLang = _this.translateService.getBrowserLang();
          _this.translateService.use(browserLang.match(/en|fr|es|de/) ? browserLang : 'en');
        }
      } catch (error) {
        console.error('Error initializing app:', error);
        // Fallback to default language if there's an error
        _this.translateService.setDefaultLang('en');
      }
    })();
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 2,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-app");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ion-router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonApp, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonRouterOutlet],
  encapsulation: 2
});

/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/core.module */ 40294);
/* harmony import */ var _services_http_intercetor_http_interceptor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/http-intercetor/http-interceptor.service */ 47449);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/http-loader */ 32202);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @swimlane/ngx-charts */ 14142);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ 37146);
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ion2-calendar */ 8325);
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ionic-selectable */ 25073);
/* harmony import */ var _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/contacts/ngx */ 42633);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);


















function HttpLoaderFactory(http) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  providers: [_ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_5__.Contacts, {
    provide: _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouteReuseStrategy,
    useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicRouteStrategy
  }, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HTTP_INTERCEPTORS,
    useClass: _services_http_intercetor_http_interceptor_service__WEBPACK_IMPORTED_MODULE_3__.AuthInterceptor,
    multi: true
  }],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule.forRoot(), ion2_calendar__WEBPACK_IMPORTED_MODULE_4__.CalendarModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_12__.NgxChartsModule, ionic_selectable__WEBPACK_IMPORTED_MODULE_13__.IonicSelectableModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule, _core_core_module__WEBPACK_IMPORTED_MODULE_2__.CoreModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateModule.forRoot({
    loader: {
      provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient]
    }
  })]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, ion2_calendar__WEBPACK_IMPORTED_MODULE_4__.CalendarModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_12__.NgxChartsModule, ionic_selectable__WEBPACK_IMPORTED_MODULE_13__.IonicSelectableModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule, _core_core_module__WEBPACK_IMPORTED_MODULE_2__.CoreModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateModule]
  });
})();

/***/ }),

/***/ 73048:
/*!********************************************!*\
  !*** ./src/app/core/auth-guard.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuardService": () => (/* binding */ AuthGuardService)
/* harmony export */ });
/* harmony import */ var _workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ionic_appauth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ionic-appauth */ 77798);
/* harmony import */ var ionic_appauth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ionic_appauth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);




class AuthGuardService {
  constructor(auth, navCtrl) {
    this.auth = auth;
    this.navCtrl = navCtrl;
  }
  canActivate(route, state) {
    var _this = this;
    return (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this.auth.session.isAuthenticated) {
        _this.navCtrl.navigateRoot('loading');
      }
      return _this.auth.session.isAuthenticated;
    })();
  }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) {
  return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ionic_appauth__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController));
};
AuthGuardService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: AuthGuardService,
  factory: AuthGuardService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 40294:
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _openid_appauth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openid/appauth */ 17154);
/* harmony import */ var _openid_appauth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openid_appauth__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ionic_appauth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ionic-appauth */ 77798);
/* harmony import */ var ionic_appauth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ionic_appauth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ionic_appauth_lib_capacitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ionic-appauth/lib/capacitor */ 5638);
/* harmony import */ var ionic_appauth_lib_capacitor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ionic_appauth_lib_capacitor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ng_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ng-http.service */ 96074);
/* harmony import */ var _factories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./factories */ 96088);









class CoreModule {}
CoreModule.ɵfac = function CoreModule_Factory(t) {
  return new (t || CoreModule)();
};
CoreModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: CoreModule
});
CoreModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  providers: [{
    provide: _openid_appauth__WEBPACK_IMPORTED_MODULE_0__.StorageBackend,
    useClass: ionic_appauth_lib_capacitor__WEBPACK_IMPORTED_MODULE_2__.CapacitorSecureStorage
  }, {
    provide: _openid_appauth__WEBPACK_IMPORTED_MODULE_0__.Requestor,
    useClass: _ng_http_service__WEBPACK_IMPORTED_MODULE_3__.NgHttpService
  }, {
    provide: ionic_appauth__WEBPACK_IMPORTED_MODULE_1__.Browser,
    useClass: ionic_appauth_lib_capacitor__WEBPACK_IMPORTED_MODULE_2__.CapacitorBrowser
  }, {
    provide: ionic_appauth__WEBPACK_IMPORTED_MODULE_1__.AuthService,
    useFactory: _factories__WEBPACK_IMPORTED_MODULE_4__.authFactory,
    deps: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform, _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgZone, _openid_appauth__WEBPACK_IMPORTED_MODULE_0__.Requestor, ionic_appauth__WEBPACK_IMPORTED_MODULE_1__.Browser, _openid_appauth__WEBPACK_IMPORTED_MODULE_0__.StorageBackend]
  }],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](CoreModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule]
  });
})();

/***/ }),

/***/ 41783:
/*!************************************************!*\
  !*** ./src/app/core/factories/auth.factory.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authFactory": () => (/* binding */ authFactory)
/* harmony export */ });
/* harmony import */ var ionic_appauth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ionic-appauth */ 77798);
/* harmony import */ var ionic_appauth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ionic_appauth__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/core */ 26549);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var src_app_services_custom_auth_custom_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/custom-auth/custom-auth.service */ 7128);




const {
  App
} = _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Plugins;
let authFactory = (platform, ngZone, requestor, browser, storage) => {
  const authService = new src_app_services_custom_auth_custom_auth_service__WEBPACK_IMPORTED_MODULE_3__.CustomAuthService(browser, storage, requestor);
  authService.authConfig = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.auth_config;
  if (!platform.is('cordova')) {
    authService.authConfig.redirect_url = window.location.origin + '/auth/callback';
    authService.authConfig.end_session_redirect_url = window.location.origin + '/auth/endsession';
  }
  if (platform.is('capacitor')) {
    authService.authConfig.redirect_url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.auth_config.redirect_url_native;
    authService.authConfig.end_session_redirect_url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.auth_config.end_session_redirect_url_native;
    App.addListener('appUrlOpen', data => {
      if (data.url !== undefined) {
        ngZone.run(() => {
          authService.handleCallback(data.url);
        });
      }
    });
  }
  authService.addActionObserver(new ionic_appauth__WEBPACK_IMPORTED_MODULE_0__.ConsoleLogObserver());
  return authService;
};

/***/ }),

/***/ 96088:
/*!*****************************************!*\
  !*** ./src/app/core/factories/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authFactory": () => (/* reexport safe */ _auth_factory__WEBPACK_IMPORTED_MODULE_0__.authFactory)
/* harmony export */ });
/* harmony import */ var _auth_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.factory */ 41783);


/***/ }),

/***/ 96074:
/*!*****************************************!*\
  !*** ./src/app/core/ng-http.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgHttpService": () => (/* binding */ NgHttpService)
/* harmony export */ });
/* harmony import */ var _workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




class NgHttpService {
  constructor(http) {
    this.http = http;
  }
  xhr(settings) {
    var _this = this;
    return (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!settings.method) {
        settings.method = 'GET';
      }
      switch (settings.method) {
        case 'GET':
          return _this.http.get(settings.url, {
            headers: _this.getHeaders(settings.headers)
          }).toPromise();
        case 'POST':
          return _this.http.post(settings.url, settings.data, {
            headers: _this.getHeaders(settings.headers)
          }).toPromise();
        case 'PUT':
          return _this.http.put(settings.url, settings.data, {
            headers: _this.getHeaders(settings.headers)
          }).toPromise();
        case 'DELETE':
          return _this.http.delete(settings.url, {
            headers: _this.getHeaders(settings.headers)
          }).toPromise();
      }
    })();
  }
  getHeaders(headers) {
    let httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
    if (headers !== undefined) {
      Object.keys(headers).forEach(key => {
        httpHeaders = httpHeaders.append(key, headers[key]);
      });
    }
    return httpHeaders;
  }
}
NgHttpService.ɵfac = function NgHttpService_Factory(t) {
  return new (t || NgHttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
};
NgHttpService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: NgHttpService,
  factory: NgHttpService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 7128:
/*!*************************************************************!*\
  !*** ./src/app/services/custom-auth/custom-auth.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomAuthService": () => (/* binding */ CustomAuthService),
/* harmony export */   "CustomBaseTokenRequestHandler": () => (/* binding */ CustomBaseTokenRequestHandler)
/* harmony export */ });
/* harmony import */ var _openid_appauth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openid/appauth */ 17154);
/* harmony import */ var _openid_appauth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openid_appauth__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ionic_appauth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ionic-appauth */ 77798);
/* harmony import */ var ionic_appauth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ionic_appauth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




class CustomBaseTokenRequestHandler {
  constructor(requestor = new _openid_appauth__WEBPACK_IMPORTED_MODULE_0__.JQueryRequestor()) {
    this.requestor = requestor;
    this.utils = new _openid_appauth__WEBPACK_IMPORTED_MODULE_0__.BasicQueryStringUtils();
  }
  isTokenResponse(response) {
    return response.error === undefined;
  }
  performRevokeTokenRequest(configuration, request) {
    let revokeTokenResponse = this.requestor.xhr({
      url: configuration.revocationEndpoint,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: this.utils.stringify(request.toStringMap())
    });
    return revokeTokenResponse.then(response => {
      return true;
    });
  }
  performTokenRequest(configuration, request) {
    let data = this.utils.stringify(request.toStringMap()) + '&client_secret=AKwyBsI3aYWz2wAiKilVl8c6Xm4P1iV7sD-jeucXte2L5GmK6OwISbt3kSNw7PySr2_5KLkPkiJMlaI9_SILIC0';
    let tokenResponse = this.requestor.xhr({
      url: configuration.tokenEndpoint,
      method: 'POST',
      dataType: 'json',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: data
    });
    return tokenResponse.then(response => {
      if (this.isTokenResponse(response)) {
        return new _openid_appauth__WEBPACK_IMPORTED_MODULE_0__.TokenResponse(response);
      } else {
        return Promise.reject(new _openid_appauth__WEBPACK_IMPORTED_MODULE_0__.AppAuthError(response.error, new _openid_appauth__WEBPACK_IMPORTED_MODULE_0__.TokenError(response)));
      }
    });
  }
}
CustomBaseTokenRequestHandler.ɵfac = function CustomBaseTokenRequestHandler_Factory(t) {
  return new (t || CustomBaseTokenRequestHandler)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_openid_appauth__WEBPACK_IMPORTED_MODULE_0__.Requestor));
};
CustomBaseTokenRequestHandler.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: CustomBaseTokenRequestHandler,
  factory: CustomBaseTokenRequestHandler.ɵfac,
  providedIn: 'root'
});
class CustomAuthService extends ionic_appauth__WEBPACK_IMPORTED_MODULE_1__.AuthService {
  constructor(browser, storage, requestor) {
    super(browser, storage, requestor);
    this.tokenHandler = new CustomBaseTokenRequestHandler(new _openid_appauth__WEBPACK_IMPORTED_MODULE_0__.FetchRequestor());
  }
}

/***/ }),

/***/ 47449:
/*!**********************************************************************!*\
  !*** ./src/app/services/http-intercetor/http-interceptor.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptor": () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var _workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 59346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ionic_appauth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ionic-appauth */ 77798);
/* harmony import */ var ionic_appauth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ionic_appauth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);






class AuthInterceptor {
  constructor(auth, navCtrl) {
    this.auth = auth;
    this.navCtrl = navCtrl;
  }
  intercept(req, next) {
    if (req.url.startsWith(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.auth_config.server_host) || req.url.startsWith('./assets/')) {
      return next.handle(req);
    } else {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)(this.handle(req, next));
    }
  }
  handle(req, next) {
    var _this = this;
    return (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this.auth.session.isAuthenticated) {
        _this.navCtrl.navigateRoot('login');
        return;
      }
      const token = yield _this.auth.getValidToken();
      const authReq = req.clone({
        setHeaders: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token.accessToken
        }
      });
      return next.handle(authReq).toPromise();
    })();
  }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) {
  return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](ionic_appauth__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController));
};
AuthInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: AuthInterceptor,
  factory: AuthInterceptor.ɵfac
});

/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: true,
  useHash: false,
  auth_config: {
    client_id: '2ac5b8a5-9795-4c8c-a09b-fb3c32e93cc7',
    server_host: 'https://idp.bexio.com',
    redirect_url: 'https://app.bextrack.com/auth/callback',
    redirect_url_native: 'xyz.lukeisontheroad.bexio://callback',
    response_type: 'token',
    end_session_redirect_url: 'https://app.bextrack.com/auth/end-session',
    end_session_redirect_url_native: 'xyz.lukeisontheroad.bexio://endsession',
    scopes: 'openid profile email monitoring_edit project_show offline_access',
    pkce: false
  }
};

/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.log(err));

/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		70079,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		25593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		13225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		86655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		44856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		13059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		58648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		98308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		44690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		64090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		36214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		69447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		17950,
		"default-node_modules_ionic_core_dist_esm_data-caf38df0_js-node_modules_ionic_core_dist_esm_th-d3ab8e",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		79689,
		"default-node_modules_ionic_core_dist_esm_data-caf38df0_js-node_modules_ionic_core_dist_esm_th-d3ab8e",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		18840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		40749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		69667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		83288,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		35473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		53634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		22855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		58737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		99632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		54446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		32275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		48050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		18994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		23592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		35454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		92666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		64816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		94902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		91938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		78179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		90668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		61624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		19989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		28902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		70199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		48395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		96357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		38268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		15269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		32875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 46700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 58685,
	"./af.js": 58685,
	"./ar": 254,
	"./ar-dz": 4312,
	"./ar-dz.js": 4312,
	"./ar-kw": 32614,
	"./ar-kw.js": 32614,
	"./ar-ly": 18630,
	"./ar-ly.js": 18630,
	"./ar-ma": 28674,
	"./ar-ma.js": 28674,
	"./ar-sa": 49032,
	"./ar-sa.js": 49032,
	"./ar-tn": 24730,
	"./ar-tn.js": 24730,
	"./ar.js": 254,
	"./az": 53052,
	"./az.js": 53052,
	"./be": 60150,
	"./be.js": 60150,
	"./bg": 63069,
	"./bg.js": 63069,
	"./bm": 13466,
	"./bm.js": 13466,
	"./bn": 18516,
	"./bn-bd": 90557,
	"./bn-bd.js": 90557,
	"./bn.js": 18516,
	"./bo": 26273,
	"./bo.js": 26273,
	"./br": 9588,
	"./br.js": 9588,
	"./bs": 19815,
	"./bs.js": 19815,
	"./ca": 83331,
	"./ca.js": 83331,
	"./cs": 21320,
	"./cs.js": 21320,
	"./cv": 72219,
	"./cv.js": 72219,
	"./cy": 68266,
	"./cy.js": 68266,
	"./da": 66427,
	"./da.js": 66427,
	"./de": 67435,
	"./de-at": 52871,
	"./de-at.js": 52871,
	"./de-ch": 12994,
	"./de-ch.js": 12994,
	"./de.js": 67435,
	"./dv": 82357,
	"./dv.js": 82357,
	"./el": 95649,
	"./el.js": 95649,
	"./en-au": 59961,
	"./en-au.js": 59961,
	"./en-ca": 19878,
	"./en-ca.js": 19878,
	"./en-gb": 3924,
	"./en-gb.js": 3924,
	"./en-ie": 70864,
	"./en-ie.js": 70864,
	"./en-il": 91579,
	"./en-il.js": 91579,
	"./en-in": 30940,
	"./en-in.js": 30940,
	"./en-nz": 16181,
	"./en-nz.js": 16181,
	"./en-sg": 44301,
	"./en-sg.js": 44301,
	"./eo": 85291,
	"./eo.js": 85291,
	"./es": 54529,
	"./es-do": 53764,
	"./es-do.js": 53764,
	"./es-mx": 12584,
	"./es-mx.js": 12584,
	"./es-us": 63425,
	"./es-us.js": 63425,
	"./es.js": 54529,
	"./et": 35203,
	"./et.js": 35203,
	"./eu": 70678,
	"./eu.js": 70678,
	"./fa": 83483,
	"./fa.js": 83483,
	"./fi": 96262,
	"./fi.js": 96262,
	"./fil": 52521,
	"./fil.js": 52521,
	"./fo": 34555,
	"./fo.js": 34555,
	"./fr": 63131,
	"./fr-ca": 88239,
	"./fr-ca.js": 88239,
	"./fr-ch": 21702,
	"./fr-ch.js": 21702,
	"./fr.js": 63131,
	"./fy": 267,
	"./fy.js": 267,
	"./ga": 23821,
	"./ga.js": 23821,
	"./gd": 71753,
	"./gd.js": 71753,
	"./gl": 4074,
	"./gl.js": 4074,
	"./gom-deva": 92762,
	"./gom-deva.js": 92762,
	"./gom-latn": 5969,
	"./gom-latn.js": 5969,
	"./gu": 82809,
	"./gu.js": 82809,
	"./he": 45402,
	"./he.js": 45402,
	"./hi": 315,
	"./hi.js": 315,
	"./hr": 10410,
	"./hr.js": 10410,
	"./hu": 38288,
	"./hu.js": 38288,
	"./hy-am": 67928,
	"./hy-am.js": 67928,
	"./id": 71334,
	"./id.js": 71334,
	"./is": 86959,
	"./is.js": 86959,
	"./it": 34864,
	"./it-ch": 51124,
	"./it-ch.js": 51124,
	"./it.js": 34864,
	"./ja": 36141,
	"./ja.js": 36141,
	"./jv": 29187,
	"./jv.js": 29187,
	"./ka": 42136,
	"./ka.js": 42136,
	"./kk": 94332,
	"./kk.js": 94332,
	"./km": 18607,
	"./km.js": 18607,
	"./kn": 84305,
	"./kn.js": 84305,
	"./ko": 70234,
	"./ko.js": 70234,
	"./ku": 16003,
	"./ku.js": 16003,
	"./ky": 75061,
	"./ky.js": 75061,
	"./lb": 32786,
	"./lb.js": 32786,
	"./lo": 66183,
	"./lo.js": 66183,
	"./lt": 50029,
	"./lt.js": 50029,
	"./lv": 24169,
	"./lv.js": 24169,
	"./me": 68577,
	"./me.js": 68577,
	"./mi": 68177,
	"./mi.js": 68177,
	"./mk": 50337,
	"./mk.js": 50337,
	"./ml": 65260,
	"./ml.js": 65260,
	"./mn": 52325,
	"./mn.js": 52325,
	"./mr": 14695,
	"./mr.js": 14695,
	"./ms": 75334,
	"./ms-my": 37151,
	"./ms-my.js": 37151,
	"./ms.js": 75334,
	"./mt": 63570,
	"./mt.js": 63570,
	"./my": 97963,
	"./my.js": 97963,
	"./nb": 88028,
	"./nb.js": 88028,
	"./ne": 86638,
	"./ne.js": 86638,
	"./nl": 50302,
	"./nl-be": 66782,
	"./nl-be.js": 66782,
	"./nl.js": 50302,
	"./nn": 33501,
	"./nn.js": 33501,
	"./oc-lnc": 50563,
	"./oc-lnc.js": 50563,
	"./pa-in": 50869,
	"./pa-in.js": 50869,
	"./pl": 65302,
	"./pl.js": 65302,
	"./pt": 49687,
	"./pt-br": 74884,
	"./pt-br.js": 74884,
	"./pt.js": 49687,
	"./ro": 79107,
	"./ro.js": 79107,
	"./ru": 33627,
	"./ru.js": 33627,
	"./sd": 30355,
	"./sd.js": 30355,
	"./se": 83427,
	"./se.js": 83427,
	"./si": 11848,
	"./si.js": 11848,
	"./sk": 54590,
	"./sk.js": 54590,
	"./sl": 20184,
	"./sl.js": 20184,
	"./sq": 56361,
	"./sq.js": 56361,
	"./sr": 78965,
	"./sr-cyrl": 81287,
	"./sr-cyrl.js": 81287,
	"./sr.js": 78965,
	"./ss": 25456,
	"./ss.js": 25456,
	"./sv": 70451,
	"./sv.js": 70451,
	"./sw": 77558,
	"./sw.js": 77558,
	"./ta": 51356,
	"./ta.js": 51356,
	"./te": 73693,
	"./te.js": 73693,
	"./tet": 21243,
	"./tet.js": 21243,
	"./tg": 42500,
	"./tg.js": 42500,
	"./th": 55768,
	"./th.js": 55768,
	"./tk": 77761,
	"./tk.js": 77761,
	"./tl-ph": 35780,
	"./tl-ph.js": 35780,
	"./tlh": 29590,
	"./tlh.js": 29590,
	"./tr": 33807,
	"./tr.js": 33807,
	"./tzl": 93857,
	"./tzl.js": 93857,
	"./tzm": 60654,
	"./tzm-latn": 8806,
	"./tzm-latn.js": 8806,
	"./tzm.js": 60654,
	"./ug-cn": 30845,
	"./ug-cn.js": 30845,
	"./uk": 19232,
	"./uk.js": 19232,
	"./ur": 47052,
	"./ur.js": 47052,
	"./uz": 77967,
	"./uz-latn": 32233,
	"./uz-latn.js": 32233,
	"./uz.js": 77967,
	"./vi": 98615,
	"./vi.js": 98615,
	"./x-pseudo": 12320,
	"./x-pseudo.js": 12320,
	"./yo": 31313,
	"./yo.js": 31313,
	"./zh-cn": 64490,
	"./zh-cn.js": 64490,
	"./zh-hk": 55910,
	"./zh-hk.js": 55910,
	"./zh-mo": 98262,
	"./zh-mo.js": 98262,
	"./zh-tw": 44223,
	"./zh-tw.js": 44223
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 46700;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map