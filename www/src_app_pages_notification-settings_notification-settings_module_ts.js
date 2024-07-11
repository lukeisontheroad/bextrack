"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_notification-settings_notification-settings_module_ts"],{

/***/ 57285:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/notification-settings/notification-settings-routing.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationSettingsPageRoutingModule": () => (/* binding */ NotificationSettingsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _notification_settings_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification-settings.page */ 44285);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _notification_settings_page__WEBPACK_IMPORTED_MODULE_0__.NotificationSettingsPage
}];
class NotificationSettingsPageRoutingModule {}
NotificationSettingsPageRoutingModule.ɵfac = function NotificationSettingsPageRoutingModule_Factory(t) {
  return new (t || NotificationSettingsPageRoutingModule)();
};
NotificationSettingsPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: NotificationSettingsPageRoutingModule
});
NotificationSettingsPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NotificationSettingsPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 31151:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/notification-settings/notification-settings.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationSettingsPageModule": () => (/* binding */ NotificationSettingsPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _notification_settings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification-settings-routing.module */ 57285);
/* harmony import */ var _notification_settings_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification-settings.page */ 44285);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);







class NotificationSettingsPageModule {}
NotificationSettingsPageModule.ɵfac = function NotificationSettingsPageModule_Factory(t) {
  return new (t || NotificationSettingsPageModule)();
};
NotificationSettingsPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: NotificationSettingsPageModule
});
NotificationSettingsPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _notification_settings_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotificationSettingsPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NotificationSettingsPageModule, {
    declarations: [_notification_settings_page__WEBPACK_IMPORTED_MODULE_1__.NotificationSettingsPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _notification_settings_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotificationSettingsPageRoutingModule]
  });
})();

/***/ }),

/***/ 44285:
/*!***************************************************************************!*\
  !*** ./src/app/pages/notification-settings/notification-settings.page.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationSettingsPage": () => (/* binding */ NotificationSettingsPage)
/* harmony export */ });
/* harmony import */ var _workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/core */ 26549);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ 92938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_models_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/constants */ 47432);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/utils/utils.service */ 89265);
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/storage/storage.service */ 86578);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);










const {
  LocalNotifications
} = _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Plugins;
class NotificationSettingsPage {
  constructor(utils, storage, translateService) {
    var _this = this;
    this.utils = utils;
    this.storage = storage;
    this.translateService = translateService;
    this.time = src_app_models_constants__WEBPACK_IMPORTED_MODULE_3__.DEFAULTS.NOTIFICATION_TIME;
    this.weekdays = src_app_models_constants__WEBPACK_IMPORTED_MODULE_3__.DEFAULTS.NOTIFICATION_WEEKDAYS;
    this.notificationsChanged = lodash__WEBPACK_IMPORTED_MODULE_2__.debounce( /*#__PURE__*/(0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.utils.requestNotificationPermission();
      yield _this.storeConfiguration();
      yield _this.cancelNotifications();
      _this.scheduleNotifications();
    }), 2000);
    this.init();
  }
  init() {
    var _this2 = this;
    return (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.time = yield _this2.storage.getString(src_app_models_constants__WEBPACK_IMPORTED_MODULE_3__.STORAGE.SETTINGS_NOTIFICATIONS_TIME, src_app_models_constants__WEBPACK_IMPORTED_MODULE_3__.DEFAULTS.NOTIFICATION_TIME);
      _this2.weekdays = JSON.parse(yield _this2.storage.getString(src_app_models_constants__WEBPACK_IMPORTED_MODULE_3__.STORAGE.SETTINGS_NOTIFICATIONS_WEEKDAYS, JSON.stringify(src_app_models_constants__WEBPACK_IMPORTED_MODULE_3__.DEFAULTS.NOTIFICATION_WEEKDAYS)));
    })();
  }
  storeConfiguration() {
    var _this3 = this;
    return (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this3.storage.setItem(src_app_models_constants__WEBPACK_IMPORTED_MODULE_3__.STORAGE.SETTINGS_NOTIFICATIONS_TIME, _this3.time);
      yield _this3.storage.setItem(src_app_models_constants__WEBPACK_IMPORTED_MODULE_3__.STORAGE.SETTINGS_NOTIFICATIONS_WEEKDAYS, JSON.stringify(_this3.weekdays));
      _this3.utils.showToast('Updated');
    })();
  }
  cancelNotifications() {
    return (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let pending = yield LocalNotifications.getPending();
      LocalNotifications.cancel(pending);
    })();
  }
  scheduleNotifications() {
    var _this4 = this;
    return (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let hour = parseInt(_this4.time.split(':')[0]);
      let minute = parseInt(_this4.time.split(':')[1]);
      let notifications = [];
      var counter = 1;
      const title = yield _this4.translateService.get('BexTrack').toPromise();
      const text = yield _this4.translateService.get('Did you track your time for today?').toPromise();
      for (let key of Object.keys(_this4.weekdays)) {
        if (_this4.weekdays[key]) {
          let weekday = parseInt(key.substring(1));
          notifications.push({
            id: counter,
            title: title,
            text: text,
            foreground: true,
            trigger: {
              every: {
                weekday: weekday,
                hour: hour,
                minute: minute
              }
            }
          });
          counter++;
        }
      }
      if (notifications.length > 0) {
        try {
          cordova.plugins.notification.local.schedule(notifications);
        } catch (e) {
          console.error('Schedule Notifications', e);
        }
      }
    })();
  }
}
NotificationSettingsPage.ɵfac = function NotificationSettingsPage_Factory(t) {
  return new (t || NotificationSettingsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_4__.UtilsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService));
};
NotificationSettingsPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: NotificationSettingsPage,
  selectors: [["app-notification-settings"]],
  decls: 52,
  vars: 38,
  consts: [["color", "primary"], ["slot", "start"], ["mode", "md", "defaultHref", "/tabs/settings"], ["displayFormat", "HH:mm", 3, "ngModel", "ngModelChange", "ionChange"], ["slot", "end", 3, "ngModel", "ngModelChange", "ionChange"]],
  template: function NotificationSettingsPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-buttons", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "ion-back-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "ion-content")(8, "ion-list")(9, "ion-list-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "ion-item")(13, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](15, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "ion-datetime", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function NotificationSettingsPage_Template_ion_datetime_ngModelChange_16_listener($event) {
        return ctx.time = $event;
      })("ionChange", function NotificationSettingsPage_Template_ion_datetime_ionChange_16_listener() {
        return ctx.notificationsChanged();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "ion-item")(18, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](20, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "ion-checkbox", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function NotificationSettingsPage_Template_ion_checkbox_ngModelChange_21_listener($event) {
        return ctx.weekdays.d1 = $event;
      })("ionChange", function NotificationSettingsPage_Template_ion_checkbox_ionChange_21_listener() {
        return ctx.notificationsChanged();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "ion-item")(23, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](25, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "ion-checkbox", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function NotificationSettingsPage_Template_ion_checkbox_ngModelChange_26_listener($event) {
        return ctx.weekdays.d2 = $event;
      })("ionChange", function NotificationSettingsPage_Template_ion_checkbox_ionChange_26_listener() {
        return ctx.notificationsChanged();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "ion-item")(28, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](30, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "ion-checkbox", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function NotificationSettingsPage_Template_ion_checkbox_ngModelChange_31_listener($event) {
        return ctx.weekdays.d3 = $event;
      })("ionChange", function NotificationSettingsPage_Template_ion_checkbox_ionChange_31_listener() {
        return ctx.notificationsChanged();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "ion-item")(33, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](35, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "ion-checkbox", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function NotificationSettingsPage_Template_ion_checkbox_ngModelChange_36_listener($event) {
        return ctx.weekdays.d4 = $event;
      })("ionChange", function NotificationSettingsPage_Template_ion_checkbox_ionChange_36_listener() {
        return ctx.notificationsChanged();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "ion-item")(38, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](40, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "ion-checkbox", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function NotificationSettingsPage_Template_ion_checkbox_ngModelChange_41_listener($event) {
        return ctx.weekdays.d5 = $event;
      })("ionChange", function NotificationSettingsPage_Template_ion_checkbox_ionChange_41_listener() {
        return ctx.notificationsChanged();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "ion-item")(43, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](45, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "ion-checkbox", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function NotificationSettingsPage_Template_ion_checkbox_ngModelChange_46_listener($event) {
        return ctx.weekdays.d6 = $event;
      })("ionChange", function NotificationSettingsPage_Template_ion_checkbox_ionChange_46_listener() {
        return ctx.notificationsChanged();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "ion-item")(48, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](50, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "ion-checkbox", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function NotificationSettingsPage_Template_ion_checkbox_ngModelChange_51_listener($event) {
        return ctx.weekdays.d0 = $event;
      })("ionChange", function NotificationSettingsPage_Template_ion_checkbox_ionChange_51_listener() {
        return ctx.notificationsChanged();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 18, "Notification settings"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](11, 20, "Time tracking reminder"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](15, 22, "Reminder time"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.time);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](20, 24, "Monday"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.weekdays.d1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](25, 26, "Tuesday"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.weekdays.d2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](30, 28, "Wednesday"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.weekdays.d3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](35, 30, "Thursday"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.weekdays.d4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](40, 32, "Friday"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.weekdays.d5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](45, 34, "Saturday"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.weekdays.d6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](50, 36, "Sunday"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.weekdays.d0);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonCheckbox, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonDatetime, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonListHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.BooleanValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonBackButtonDelegate, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_notification-settings_notification-settings_module_ts.js.map