"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_projects_projects_module_ts"],{

/***/ 43206:
/*!***************************************************!*\
  !*** ./src/app/pages/projects/projects.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsPageModule": () => (/* binding */ ProjectsPageModule)
/* harmony export */ });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _projects_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.page */ 95913);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/pipes/pipes.module */ 35503);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 45642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);










class ProjectsPageModule {}
ProjectsPageModule.ɵfac = function ProjectsPageModule_Factory(t) {
  return new (t || ProjectsPageModule)();
};
ProjectsPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: ProjectsPageModule
});
ProjectsPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{
    path: '',
    component: _projects_page__WEBPACK_IMPORTED_MODULE_0__.ProjectsPage
  }])]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ProjectsPageModule, {
    declarations: [_projects_page__WEBPACK_IMPORTED_MODULE_0__.ProjectsPage],
    imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
  });
})();

/***/ }),

/***/ 95913:
/*!*************************************************!*\
  !*** ./src/app/pages/projects/projects.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsPage": () => (/* binding */ ProjectsPage)
/* harmony export */ });
/* harmony import */ var _workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/constants */ 47432);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api/api.service */ 45146);
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/storage/storage.service */ 86578);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _components_time_display_time_display_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/time-display/time-display.component */ 89910);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 33935);












const _c0 = ["sectionSelect"];
function ProjectsPage_ion_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsPage_ion_icon_3_Template_ion_icon_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r8.toggleFilters($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ProjectsPage_ion_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsPage_ion_icon_4_Template_ion_icon_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r10.toggleFilters($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ProjectsPage_ion_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsPage_ion_button_16_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r12.toggleFavorites());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ProjectsPage_ion_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsPage_ion_button_17_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r14.toggleFavorites());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ProjectsPage_ion_list_27_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "ion-item")(2, "ion-avatar", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "ion-skeleton-text", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "ion-skeleton-text", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function ProjectsPage_ion_list_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ProjectsPage_ion_list_27_div_1_Template, 6, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r5.skeletons);
  }
}
function ProjectsPage_div_28_ion_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ion-icon", 26);
  }
}
function ProjectsPage_div_28_ion_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ion-icon", 27);
  }
}
function ProjectsPage_div_28_h1_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "No projects found"));
  }
}
function ProjectsPage_div_28_h1_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "No favorite project found"));
  }
}
function ProjectsPage_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 23)(1, "ion-grid")(2, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ProjectsPage_div_28_ion_icon_3_Template, 1, 0, "ion-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ProjectsPage_div_28_ion_icon_4_Template, 1, 0, "ion-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, ProjectsPage_div_28_h1_6_Template, 3, 3, "h1", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, ProjectsPage_div_28_h1_7_Template, 3, 3, "h1", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r6.showOnlyFavorites);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.showOnlyFavorites);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r6.showOnlyFavorites);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.showOnlyFavorites);
  }
}
function ProjectsPage_div_30_ion_item_option_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsPage_div_30_ion_item_option_8_Template_ion_item_option_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r28);
      const project_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r26.favorite(project_r22.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Favorite"), "");
  }
}
function ProjectsPage_div_30_ion_item_option_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsPage_div_30_ion_item_option_9_Template_ion_item_option_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r31);
      const project_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r29.favorite(project_r22.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Unfavorite"), "");
  }
}
function ProjectsPage_div_30_ion_item_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item", 28)(1, "ion-avatar", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ion-label")(4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "app-time-display", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const package_r32 = ctx.$implicit;
    const project_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate2"]("routerLink", "/create-time/", project_r22.id, "/", package_r32.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](package_r32.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("object", package_r32);
  }
}
function ProjectsPage_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "ion-item-sliding")(2, "ion-item", 28)(3, "ion-label")(4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "app-time-display", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-item-options", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, ProjectsPage_div_30_ion_item_option_8_Template, 3, 3, "ion-item-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, ProjectsPage_div_30_ion_item_option_9_Template, 3, 3, "ion-item-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, ProjectsPage_div_30_ion_item_10_Template, 7, 4, "ion-item", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const project_r22 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("routerLink", "/create-time/", project_r22.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](project_r22.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("object", project_r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r7.favorites.indexOf(project_r22.id) == -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r7.favorites.indexOf(project_r22.id) > -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", project_r22.packages);
  }
}
class ProjectsPage {
  constructor(apiService, storage) {
    this.apiService = apiService;
    this.storage = storage;
    this.loading = true;
    this.skeletons = new Array(30);
    this.projects = [];
    this.allProjects = [];
    this.showOnlyFavorites = false;
    this.currentFilter = '';
    this.searchString = '';
    this.favorites = [];
    this.init();
  }
  init() {
    var _this = this;
    return (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.currentFilter = yield _this.storage.getString(src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__.STORAGE.PROJECTS_CURRENT_FILTER, src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__.DEFAULTS.CURRENT_FILTER);
      _this.showOnlyFavorites = yield _this.storage.getBoolean(src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__.STORAGE.PROJECTS_SHOW_FAVORITES, src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__.DEFAULTS.SHOW_FAVORITES);
      _this.favorites = JSON.parse(yield _this.storage.getString(src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__.STORAGE.PROJECTS_FAVORITES, JSON.stringify(src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__.DEFAULTS.FAVORITES)));
      _this.doRefresh();
      _this.apiService.projectsUpdated.subscribe( /*#__PURE__*/(0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this.allProjects = yield _this.apiService.getProjects();
        _this.setActiveList();
      }));
    })();
  }
  doRefresh(event) {
    var _this2 = this;
    return (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.loading = true;
      yield _this2.apiService.getPackages(true);
      if (event) {
        event.target.complete();
      }
      _this2.loading = false;
    })();
  }
  toggleFavorites() {
    var _this3 = this;
    return (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.showOnlyFavorites = !_this3.showOnlyFavorites;
      yield _this3.storage.setItem(src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__.STORAGE.PROJECTS_SHOW_FAVORITES, _this3.showOnlyFavorites);
      _this3.setActiveList();
    })();
  }
  setActiveList() {
    if (this.showOnlyFavorites) {
      this.projects = this.allProjects.filter(i => this.favorites.indexOf(i.id) > -1);
    } else {
      this.projects = this.allProjects;
    }
    if (this.currentFilter === '1') {
      this.projects = this.projects.filter(i => i.packages.length > 0);
    } else if (this.currentFilter === '2') {
      this.projects = this.projects.filter(i => i.spent_time_in_hours > 0);
    }
    if (this.searchString.length > 0) {
      this.projects = this.projects.filter(i => i.name.toLocaleLowerCase().indexOf(this.searchString.toLocaleLowerCase()) > -1);
    }
  }
  favorite(id) {
    if (this.favorites.indexOf(id) === -1) {
      this.favorites.push(id);
    } else {
      this.favorites = this.favorites.filter(obj => obj !== id);
    }
    this.storage.setItem(src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__.STORAGE.PROJECTS_FAVORITES, JSON.stringify(this.favorites));
    this.list.closeSlidingItems();
    this.doRefresh();
  }
  toggleFilters(event) {
    this.sectionSelect.open(event);
  }
  filterSet(event) {
    this.currentFilter = event.detail.value;
    this.setActiveList();
    this.storage.setItem(src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__.STORAGE.PROJECTS_CURRENT_FILTER, this.currentFilter);
  }
}
ProjectsPage.ɵfac = function ProjectsPage_Factory(t) {
  return new (t || ProjectsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService));
};
ProjectsPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: ProjectsPage,
  selectors: [["app-projects"]],
  viewQuery: function ProjectsPage_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonList, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.list = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.sectionSelect = _t.first);
    }
  },
  decls: 31,
  vars: 24,
  consts: [["color", "primary"], ["slot", "end"], ["slot", "icon-only", "name", "funnel-outline", 3, "click", 4, "ngIf"], ["slot", "icon-only", "name", "funnel", 3, "click", 4, "ngIf"], ["interface", "popover", 2, "display", "none", 3, "ngModel", "ionChange", "ngModelChange"], ["sectionSelect", ""], ["value", ""], ["value", "1"], ["value", "2"], [3, "click", 4, "ngIf"], ["mode", "ios", "debounce", "500", 3, "placeholder", "ngModel", "ngModelChange", "ionChange"], ["slot", "fixed", 3, "ionRefresh"], [4, "ngIf"], ["class", "no-items", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["slot", "icon-only", "name", "funnel-outline", 3, "click"], ["slot", "icon-only", "name", "funnel", 3, "click"], [3, "click"], ["slot", "icon-only", "name", "star"], ["slot", "icon-only", "name", "star-outline"], ["slot", "start"], ["animated", ""], ["animated", "", 2, "width", "60%"], [1, "no-items"], ["name", "briefcase-outline", 4, "ngIf"], ["name", "star-outline", 4, "ngIf"], ["name", "briefcase-outline"], ["name", "star-outline"], [3, "routerLink"], [3, "object"], ["side", "end"], ["color", "warning", 3, "click", 4, "ngIf"], [3, "routerLink", 4, "ngFor", "ngForOf"], ["color", "warning", 3, "click"], ["src", "/assets/package.png"]],
  template: function ProjectsPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-buttons", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ProjectsPage_ion_icon_3_Template, 1, 0, "ion-icon", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ProjectsPage_ion_icon_4_Template, 1, 0, "ion-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-select", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionChange", function ProjectsPage_Template_ion_select_ionChange_5_listener($event) {
        return ctx.filterSet($event);
      })("ngModelChange", function ProjectsPage_Template_ion_select_ngModelChange_5_listener($event) {
        return ctx.currentFilter = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-select-option", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "ion-select-option", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "ion-select-option", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](15, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, ProjectsPage_ion_button_16_Template, 2, 0, "ion-button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, ProjectsPage_ion_button_17_Template, 2, 0, "ion-button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](20, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "ion-toolbar")(22, "ion-searchbar", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsPage_Template_ion_searchbar_ngModelChange_22_listener($event) {
        return ctx.searchString = $event;
      })("ionChange", function ProjectsPage_Template_ion_searchbar_ionChange_22_listener() {
        return ctx.setActiveList();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](23, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "ion-content")(25, "ion-refresher", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionRefresh", function ProjectsPage_Template_ion_refresher_ionRefresh_25_listener($event) {
        return ctx.doRefresh($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "ion-refresher-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, ProjectsPage_ion_list_27_Template, 2, 1, "ion-list", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, ProjectsPage_div_28_Template, 8, 4, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "ion-list");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, ProjectsPage_div_30_Template, 11, 6, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.currentFilter == "");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.currentFilter != "");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.currentFilter);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 14, "All"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](12, 16, "With Packages"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](15, 18, "With time spend"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showOnlyFavorites);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.showOnlyFavorites);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](20, 20, "Projects"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](23, 22, "Projectname"))("ngModel", ctx.searchString);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.projects.length === 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.projects);
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonAvatar, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonItemOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonItemOptions, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonItemSliding, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonRefresher, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonRefresherContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonSearchbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonSelectOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonSkeletonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.RouterLinkDelegate, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _components_time_display_time_display_component__WEBPACK_IMPORTED_MODULE_4__.TimeDisplayComponent, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe],
  styles: ["ion-searchbar[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\nion-popover[_ngcontent-%COMP%] {\n  --width: 300px;\n}\n\n.no-items[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcHJvamVjdHMvcHJvamVjdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zZWFyY2hiYXJ7XG4gICAgcGFkZGluZzogMTZweDtcbn1cblxuaW9uLXBvcG92ZXJ7XG4gICAgLS13aWR0aDogMzAwcHg7XG59XG5cbi5uby1pdGVtc3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_projects_projects_module_ts.js.map