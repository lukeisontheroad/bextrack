"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_contacts_contacts_module_ts"],{

/***/ 99493:
/*!***********************************************************!*\
  !*** ./src/app/pages/contacts/contacts-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactsPageRoutingModule": () => (/* binding */ ContactsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _contacts_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contacts.page */ 77419);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _contacts_page__WEBPACK_IMPORTED_MODULE_0__.ContactsPage
}];
class ContactsPageRoutingModule {}
ContactsPageRoutingModule.ɵfac = function ContactsPageRoutingModule_Factory(t) {
  return new (t || ContactsPageRoutingModule)();
};
ContactsPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: ContactsPageRoutingModule
});
ContactsPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ContactsPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 50464:
/*!***************************************************!*\
  !*** ./src/app/pages/contacts/contacts.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactsPageModule": () => (/* binding */ ContactsPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _contacts_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contacts-routing.module */ 99493);
/* harmony import */ var _contacts_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contacts.page */ 77419);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);







class ContactsPageModule {}
ContactsPageModule.ɵfac = function ContactsPageModule_Factory(t) {
  return new (t || ContactsPageModule)();
};
ContactsPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: ContactsPageModule
});
ContactsPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _contacts_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactsPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ContactsPageModule, {
    declarations: [_contacts_page__WEBPACK_IMPORTED_MODULE_1__.ContactsPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _contacts_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactsPageRoutingModule]
  });
})();

/***/ }),

/***/ 77419:
/*!*************************************************!*\
  !*** ./src/app/pages/contacts/contacts.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactsPage": () => (/* binding */ ContactsPage)
/* harmony export */ });
/* harmony import */ var _workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/contacts/ngx */ 42633);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api/api.service */ 45146);
/* harmony import */ var src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/utils/utils.service */ 89265);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 33935);









function ContactsPage_ion_list_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "ion-item")(2, "ion-avatar", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "ion-skeleton-text", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "ion-skeleton-text", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function ContactsPage_ion_list_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ContactsPage_ion_list_7_div_1_Template, 6, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.skeletons);
  }
}
function ContactsPage_ion_item_sliding_10_ion_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ion-icon", 13);
  }
}
function ContactsPage_ion_item_sliding_10_ion_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ion-icon", 14);
  }
}
function ContactsPage_ion_item_sliding_10_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ContactsPage_ion_item_sliding_10_p_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const contact_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](contact_r4.phone_mobile);
  }
}
function ContactsPage_ion_item_sliding_10_p_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const contact_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](contact_r4.phone_fixed);
  }
}
function ContactsPage_ion_item_sliding_10_p_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const contact_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](contact_r4.mail);
  }
}
function ContactsPage_ion_item_sliding_10_p_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const contact_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](contact_r4.address);
  }
}
function ContactsPage_ion_item_sliding_10_p_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const contact_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", contact_r4.postcode, " ", contact_r4.city, "");
  }
}
function ContactsPage_ion_item_sliding_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-item-sliding")(1, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ContactsPage_ion_item_sliding_10_ion_icon_2_Template, 1, 0, "ion-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ContactsPage_ion_item_sliding_10_ion_icon_3_Template, 1, 0, "ion-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-label")(5, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ContactsPage_ion_item_sliding_10_span_7_Template, 2, 0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, ContactsPage_ion_item_sliding_10_p_9_Template, 2, 1, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, ContactsPage_ion_item_sliding_10_p_10_Template, 2, 1, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, ContactsPage_ion_item_sliding_10_p_11_Template, 2, 1, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, ContactsPage_ion_item_sliding_10_p_12_Template, 2, 1, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, ContactsPage_ion_item_sliding_10_p_13_Template, 2, 2, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "ion-item-options", 11)(15, "ion-item-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ContactsPage_ion_item_sliding_10_Template_ion_item_option_click_15_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const contact_r4 = restoredCtx.$implicit;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r18.export(contact_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const contact_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", contact_r4.contact_type_id == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", contact_r4.contact_type_id != 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](contact_r4 == null ? null : contact_r4.name_1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", contact_r4.name_2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", contact_r4 == null ? null : contact_r4.name_2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", contact_r4.phone_mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", contact_r4.phone_fixed);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", contact_r4.mail);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", contact_r4.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", contact_r4.postcode || contact_r4.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](17, 11, "Export"));
  }
}
class ContactsPage {
  constructor(nativeContacts, apiService, utils) {
    this.nativeContacts = nativeContacts;
    this.apiService = apiService;
    this.utils = utils;
    this.skeletons = new Array(12);
    this.loading = true;
    this.contacts = [];
    this.filteredContacts = [];
  }
  ngOnInit() {
    this.init();
  }
  init() {
    var _this = this;
    return (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.doRefresh();
      _this.apiService.projectsUpdated.subscribe(() => _this.doRefresh());
    })();
  }
  doRefresh(event) {
    var _this2 = this;
    return (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.loading = true;
      _this2.contacts = yield _this2.apiService.getContacts(true);
      _this2.filteredContacts = _this2.contacts;
      if (event) {
        event.target.complete();
      }
      _this2.loading = false;
    })();
  }
  onSearch($event) {
    let value = $event.detail.value.toLowerCase();
    if (value === '') {
      this.filteredContacts = this.contacts;
    } else {
      this.filteredContacts = this.contacts.filter(contact => {
        return contact.name_1.toLowerCase().indexOf(value) != -1 || contact.name_2 && contact.name_2.toLowerCase().indexOf(value) != -1;
      });
    }
  }
  getContact(contact) {
    var _this3 = this;
    return (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise( /*#__PURE__*/function () {
        var _ref = (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          let nativeContact = _this3.nativeContacts.create();
          let isUpdate = false;
          let fields = [['emails', 'mail'], ['phoneNumbers', 'phone_mobile'], ['phoneNumbers', 'phone_fixed'], ['displayName', 'calculated_name']];
          for (var i = 0; i < fields.length; i++) {
            if (fields[fields[i][0]] === 'displayName') {
              // abort
              resolve({
                isUpdate: isUpdate,
                contact: nativeContact
              });
              return;
            } else if (contact[fields[i][1]] !== null && contact[fields[i][1]].length > 0) {
              i = fields.length + 1;
            }
          }
          let options = new _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_1__.ContactFindOptions();
          let results = [];
          contact.calculated_name = (contact?.name_2?.trim() + ' ' + contact?.name_1?.trim()).trim();
          for (var i = 0; i < fields.length; i++) {
            if (contact[fields[i][1]] !== null && contact[fields[i][1]].length > 0) {
              console.log('set filter to ' + contact[fields[i][1]]);
              options.filter = contact[fields[i][1]];
              options.multiple = false;
              results = yield _this3.nativeContacts.find([fields[i][0]], options);
              console.log('result', results);
              if (results.length === 1) {
                isUpdate = true;
                nativeContact = results[0];
                i = fields.length + 1;
              }
            }
          }
          resolve({
            isUpdate: isUpdate,
            contact: nativeContact
          });
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }
  export(contact) {
    var _this4 = this;
    return (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let contactResult = yield _this4.getContact(contact);
      let nativeContact = contactResult.contact;
      // let nativeContact: NativeContact = this.nativeContacts.create();
      console.log('name', contact);
      // let formattedName = (contact.name_2) ? contact.name_2 + ' ' + contact.name_1 : contact.name_1
      nativeContact.name = new _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_1__.ContactName(null, contact?.name_1?.trim(), contact?.name_2?.trim());
      nativeContact.addresses = [new _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_1__.ContactAddress(true, 'work', null, contact.address, contact.city, null, contact.postcode + '')];
      nativeContact.note = contact.remarks;
      nativeContact.birthday = contact.birthday;
      // Emails
      let phoneNumbers = [];
      if (contact.phone_mobile) phoneNumbers.push(new _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_1__.ContactField('mobile', contact.phone_mobile));
      if (contact.phone_fixed) phoneNumbers.push(new _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_1__.ContactField('work', contact.phone_fixed));
      if (contact.phone_fixed_second) phoneNumbers.push(new _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_1__.ContactField('home', contact.phone_fixed_second));
      if (phoneNumbers.length > 0) nativeContact.phoneNumbers = phoneNumbers;
      // Emails
      let emails = [];
      if (contact.mail) emails.push(new _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_1__.ContactField('work', contact.mail));
      if (contact.mail_second) emails.push(new _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_1__.ContactField('private', contact.mail_second));
      if (emails.length > 0) nativeContact.emails = emails;
      nativeContact.save().then(() => {
        if (contactResult.isUpdate) {
          _this4.utils.showToast('Updated');
        } else {
          _this4.utils.showToast('Created');
        }
      }, error => {
        _this4.utils.showToast('Export failed');
      });
    })();
  }
}
ContactsPage.ɵfac = function ContactsPage_Factory(t) {
  return new (t || ContactsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_1__.Contacts), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__.UtilsService));
};
ContactsPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ContactsPage,
  selectors: [["app-contacts"]],
  decls: 11,
  vars: 5,
  consts: [["color", "primary"], ["debounce", "500", 3, "ionChange"], [4, "ngIf"], ["approxItemHeight", "40px", 3, "items"], [4, "virtualItem"], [4, "ngFor", "ngForOf"], ["slot", "start"], ["animated", ""], ["animated", "", 2, "width", "60%"], ["slot", "start", "name", "business-outline", 4, "ngIf"], ["slot", "start", "name", "person-outline", 4, "ngIf"], ["side", "end"], [3, "click"], ["slot", "start", "name", "business-outline"], ["slot", "start", "name", "person-outline"]],
  template: function ContactsPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar", 0)(2, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ion-content")(6, "ion-searchbar", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ionChange", function ContactsPage_Template_ion_searchbar_ionChange_6_listener($event) {
        return ctx.onSearch($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ContactsPage_ion_list_7_Template, 2, 1, "ion-list", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ion-list")(9, "ion-virtual-scroll", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, ContactsPage_ion_item_sliding_10_Template, 18, 13, "ion-item-sliding", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 3, "Contacts"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("items", ctx.filteredContacts);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonAvatar, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonItemOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonItemOptions, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonItemSliding, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonSearchbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonSkeletonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.VirtualItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonVirtualScroll, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_contacts_contacts_module_ts.js.map