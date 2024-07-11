"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_services_api_api_service_ts"],{

/***/ 45146:
/*!*********************************************!*\
  !*** ./src/app/services/api/api.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var _workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ionic_appauth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ionic-appauth */ 77798);
/* harmony import */ var ionic_appauth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ionic_appauth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _utils_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/utils.service */ 89265);








class ApiService {
  constructor(http, authService, utilsService) {
    this.http = http;
    this.authService = authService;
    this.utilsService = utilsService;
    this.timesUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.projectsUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.contactsUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.limit = 1000;
    this.corsProxy = 'https://cors.bextrack.com/';
    this.baseUrl = this.corsProxy + 'https://api.bexio.com/';
    this.users = [];
    this.usersMap = {};
    this.projects = [];
    this.contacts = [];
    this.projectMap = {};
    this.timesheets = [];
    this.timesheetStatus = [];
    this.clientServicees = [];
    this.packages = [];
    this.cachedPackagesProjectId = {};
    this.cachedPackagesPackageId = {};
  }
  init() {
    var _this = this;
    return (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise((resolve, reject) => {
        let observer = _this.authService.addActionListener( /*#__PURE__*/function () {
          var _ref = (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (action) {
            if (action.action === ionic_appauth__WEBPACK_IMPORTED_MODULE_1__.AuthActions.LoadUserInfoSuccess) {
              _this.users = yield _this.http.get(_this.baseUrl + '3.0/users').toPromise();
              for (var i = 0; i < _this.users.length; i++) {
                _this.usersMap[_this.users[i].id] = _this.users[i];
              }
              try {
                yield Promise.all([_this.getTimesheetStatus(true), _this.getClientService(true), _this.getProjects(true)
                // this.getContacts(true)
                ]);
                // this.getPackages()
                for (var i = 0; i < _this.users.length; i++) {
                  if (_this.users[i].email === action.user.email) {
                    _this.currentUser = _this.users[i];
                    _this.authService.removeActionObserver(observer);
                    resolve();
                  }
                }
              } catch (error) {
                reject(error);
              }
            }
          });
          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
        _this.authService.loadUserInfo();
      });
    })();
  }
  getContacts(force = false) {
    var _this2 = this;
    return (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise( /*#__PURE__*/function () {
        var _ref2 = (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
          if (force || _this2.projects.length === 0) {
            const contacts = yield _this2.http.get(_this2.baseUrl + '2.0/contact/?order_by=name_1_asc').toPromise();
            _this2.contacts = contacts;
            _this2.contactsUpdated.next(null);
          }
          resolve(_this2.contacts);
        });
        return function (_x2, _x3) {
          return _ref2.apply(this, arguments);
        };
      }());
    })();
  }
  getProjects(force = false) {
    var _this3 = this;
    return (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise( /*#__PURE__*/function () {
        var _ref3 = (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
          try {
            if (force || _this3.projects.length === 0) {
              const projects = yield _this3.http.post(_this3.baseUrl + '2.0/pr_project/search?order_by=name&limit=' + _this3.limit, [{
                "field": "pr_state_id",
                "value": "2",
                "criteria": "="
              }]).toPromise();
              _this3.projects = projects;
              for (var i = 0; i < _this3.projects.length; i++) {
                _this3.projects[i].packages = _this3.cachedPackagesProjectId[_this3.projects[i].id];
                if (_this3.projects[i].packages) {
                  _this3.projects[i].spent_time_in_hours = 0;
                  _this3.projects[i].estimated_time_in_hours = 0;
                  for (var j = 0; j < _this3.projects[i].packages.length; j++) {
                    if (_this3.projects[i].packages[j].estimated_time_in_hours) _this3.projects[i].estimated_time_in_hours += _this3.projects[i].packages[j].estimated_time_in_hours;
                    if (_this3.projects[i].packages[j]) _this3.projects[i].spent_time_in_hours += _this3.projects[i].packages[j].spent_time_in_hours;
                  }
                }
                _this3.projectMap[_this3.projects[i].id] = _this3.projects[i];
              }
              _this3.projectsUpdated.next(null);
            }
            resolve(_this3.projects);
          } catch (error) {
            reject(error);
          }
        });
        return function (_x4, _x5) {
          return _ref3.apply(this, arguments);
        };
      }());
    })();
  }
  prepareTimesheetForApi(timesheet) {
    delete timesheet.travel_time;
    delete timesheet.travel_charge;
    delete timesheet.travel_distance;
    delete timesheet.date;
    delete timesheet.duration;
    delete timesheet.running;
    delete timesheet.user;
    delete timesheet.project;
    delete timesheet.package;
    if (timesheet.tracking.type === 'duration') {
      delete timesheet.tracking.start;
      delete timesheet.tracking.end;
    } else {
      timesheet.tracking.start = new _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe('en-US').transform(timesheet.tracking.start, 'yyyy-MM-dd HH:mm');
      timesheet.tracking.end = new _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe('en-US').transform(timesheet.tracking.end, 'yyyy-MM-dd HH:mm');
      delete timesheet.tracking.date;
      delete timesheet.tracking.duration;
    }
    return timesheet;
  }
  putTimesheet(timesheet) {
    var _this4 = this;
    return (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let preparedTimesheet = _this4.prepareTimesheetForApi(timesheet);
      delete preparedTimesheet.tracking.type;
      return new Promise( /*#__PURE__*/function () {
        var _ref4 = (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
          let newTimesheet = yield _this4.http.post(_this4.baseUrl + '2.0/timesheet/' + timesheet.id, preparedTimesheet).toPromise();
          _this4.getMyTimesheets(true);
          resolve(newTimesheet);
        });
        return function (_x6, _x7) {
          return _ref4.apply(this, arguments);
        };
      }());
    })();
  }
  postTimesheet(timesheet) {
    var _this5 = this;
    return (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let preparedTimesheet = _this5.prepareTimesheetForApi(timesheet);
      delete preparedTimesheet.id;
      return new Promise( /*#__PURE__*/function () {
        var _ref5 = (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
          let newTimesheet = yield _this5.http.post(_this5.baseUrl + '2.0/timesheet', preparedTimesheet).toPromise();
          _this5.getMyTimesheets(true);
          resolve(newTimesheet);
        });
        return function (_x8, _x9) {
          return _ref5.apply(this, arguments);
        };
      }());
    })();
  }
  deleteTimesheet(id) {
    var _this6 = this;
    return (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise( /*#__PURE__*/function () {
        var _ref6 = (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
          yield _this6.http.delete(_this6.baseUrl + '2.0/timesheet/' + id).toPromise();
          _this6.getMyTimesheets(true);
          resolve();
        });
        return function (_x10, _x11) {
          return _ref6.apply(this, arguments);
        };
      }());
    })();
  }
  getTimesheetStatus(force = false) {
    var _this7 = this;
    return (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise( /*#__PURE__*/function () {
        var _ref7 = (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
          if (force || _this7.timesheetStatus.length === 0) {
            try {
              _this7.timesheetStatus = yield _this7.http.get(_this7.baseUrl + '2.0/timesheet_status').toPromise();
              resolve(_this7.timesheetStatus);
            } catch (error) {
              reject(error);
            }
          } else {
            resolve(_this7.timesheetStatus);
          }
        });
        return function (_x12, _x13) {
          return _ref7.apply(this, arguments);
        };
      }());
    })();
  }
  getClientService(force = false) {
    var _this8 = this;
    return (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise( /*#__PURE__*/function () {
        var _ref8 = (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
          try {
            if (force || _this8.clientServicees.length === 0) {
              _this8.clientServicees = yield _this8.http.get(_this8.baseUrl + '2.0/client_service').toPromise();
            }
            console.log('this.clientServicees', _this8.clientServicees);
            resolve(_this8.clientServicees);
          } catch (error) {
            reject(error);
          }
        });
        return function (_x14, _x15) {
          return _ref8.apply(this, arguments);
        };
      }());
    })();
  }
  getTimesheet(time_id, force = false) {
    var _this9 = this;
    return (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise( /*#__PURE__*/function () {
        var _ref9 = (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
          if (!force) {
            let filteredTimesheets = _this9.timesheets.filter(timesheet => timesheet.id === time_id);
            if (filteredTimesheets.length === 1) {
              resolve(filteredTimesheets[0]);
              return;
            }
          }
          const timesheet = yield _this9.http.get(_this9.baseUrl + '2.0/timesheet/' + time_id).toPromise();
          timesheet.user = _this9.usersMap[timesheet.user_id];
          timesheet.project = _this9.projectMap[timesheet.pr_project_id];
          timesheet.package = _this9.cachedPackagesPackageId[timesheet.pr_package_id];
          timesheet.tracking = _this9.utilsService.prepareTracking(timesheet.tracking);
          timesheet.text = new DOMParser().parseFromString(timesheet.text, 'text/html').documentElement.textContent;
          resolve(timesheet);
        });
        return function (_x16, _x17) {
          return _ref9.apply(this, arguments);
        };
      }());
    })();
  }
  getMyTimesheets(force = false) {
    var _this10 = this;
    return new Promise( /*#__PURE__*/function () {
      var _ref10 = (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
        let user = yield _this10.getUser();
        let timesheets = yield _this10.getTimesheets(user.id, force);
        if (force) {
          _this10.timesUpdated.next(null);
        }
        resolve(timesheets);
      });
      return function (_x18, _x19) {
        return _ref10.apply(this, arguments);
      };
    }());
  }
  searchContact(value) {
    var _this11 = this;
    return new Promise( /*#__PURE__*/function () {
      var _ref11 = (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
        try {
          let firstname = _this11.http.post(_this11.baseUrl + '2.0/contact/search?limit=20', [{
            "field": "name_1",
            "value": value,
            "criteria": "like"
          }]).toPromise();
          let lastname = _this11.http.post(_this11.baseUrl + '2.0/contact/search?limit=20', [{
            "field": "name_2",
            "value": value,
            "criteria": "like"
          }]).toPromise();
          resolve([...(yield firstname), ...(yield lastname)]);
        } catch (error) {
          reject(error);
        }
      });
      return function (_x20, _x21) {
        return _ref11.apply(this, arguments);
      };
    }());
  }
  getTimesheets(user_id = -1, force = false) {
    var _this12 = this;
    return (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise( /*#__PURE__*/function () {
        var _ref12 = (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
          if (force || _this12.timesheets.length === 0) {
            const timesheets = [];
            if (user_id > -1) {
              const filter = [{
                "field": "user_id",
                "value": user_id,
                "criteria": "="
              }];
              timesheets.push(...(yield yield _this12.http.post(_this12.baseUrl + '2.0/timesheet/search?order_by=date_desc,id_desc&limit=500', filter).toPromise()));
              // timesheets.map(timesheet => {
              //   timesheet.tracking = {
              //     duration: timesheet.duration,
              //     date: timesheet.date,
              //     type: 'duration'
              //   }
              //   return timesheet
              // })
            } else {
              timesheets.push(...(yield _this12.http.get(_this12.baseUrl + '2.0/timesheet?order_by=date_desc,id_desc').toPromise()));
            }
            for (var i = 0; i < timesheets.length; i++) {
              timesheets[i].user = _this12.usersMap[timesheets[i].user_id];
              timesheets[i].project = _this12.projectMap[timesheets[i].pr_project_id];
              timesheets[i].package = _this12.cachedPackagesPackageId[timesheets[i].pr_package_id];
              timesheets[i].tracking = _this12.utilsService.prepareTracking(timesheets[i].tracking);
              timesheets[i].text = new DOMParser().parseFromString(timesheets[i].text, 'text/html').documentElement.textContent;
            }
            _this12.timesheets = timesheets;
          }
          resolve(_this12.timesheets);
        });
        return function (_x22, _x23) {
          return _ref12.apply(this, arguments);
        };
      }());
    })();
  }
  // public async getTimesheetsWithPackages(): Promise<Timesheet[]> {
  //   return new Promise(async (resolve, reject) => {
  //     const timesheets = await this.http.get<Timesheet[]>(this.baseUrl + '2.0/timesheet?order_by=date_desc').toPromise()
  //     for (var i = 0; i < timesheets.length; i++) {
  //       timesheets[i].user = this.usersMap[timesheets[i].user_id]
  //       timesheets[i].project = this.projectMap[timesheets[i].pr_project_id]
  //       timesheets[i].package = this.cachedPackagesPackageId[timesheets[i].pr_package_id]
  //     }
  //     resolve(timesheets)
  //   })
  // }
  getUsers() {
    var _this13 = this;
    return new Promise( /*#__PURE__*/function () {
      var _ref13 = (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
        resolve(_this13.users);
      });
      return function (_x24, _x25) {
        return _ref13.apply(this, arguments);
      };
    }());
  }
  getPackages(force = false) {
    var _this14 = this;
    return (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this14.getProjects(force);
      let promises = [];
      for (var i = 0; i < _this14.projects.length; i++) {
        const projectid = _this14.projects[i].id;
        let promise = _this14.getPackagesForProject(projectid).then(packagesForProject => {
          _this14.cachedPackagesProjectId[projectid] = packagesForProject;
          for (var j = 0; j < packagesForProject.length; j++) {
            _this14.cachedPackagesPackageId[packagesForProject[j].id] = packagesForProject;
          }
          _this14.packages.push(...packagesForProject);
        });
        promises.push(promise);
      }
      yield Promise.all(promises);
      yield _this14.getProjects(true);
      _this14.projectsUpdated.next(null);
    })();
  }
  getPackageForProjectWithId(project_id, package_id) {
    return this.http.get(this.baseUrl + '3.0/projects/' + project_id + '/packages/' + package_id).toPromise();
  }
  getPackagesForProject(project_id) {
    return this.http.get(this.baseUrl + '3.0/projects/' + project_id + '/packages').toPromise();
  }
  getUser() {
    var _this15 = this;
    return (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise( /*#__PURE__*/function () {
        var _ref14 = (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          resolve(_this15.currentUser);
        });
        return function (_x26) {
          return _ref14.apply(this, arguments);
        };
      }());
    })();
  }
}
ApiService.ɵfac = function ApiService_Factory(t) {
  return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](ionic_appauth__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__.UtilsService));
};
ApiService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: ApiService,
  factory: ApiService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 89265:
/*!*************************************************!*\
  !*** ./src/app/services/utils/utils.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UtilsService": () => (/* binding */ UtilsService)
/* harmony export */ });
/* harmony import */ var _workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/core */ 26549);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 33935);





const {
  LocalNotifications
} = _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Plugins;
class UtilsService {
  constructor(toastCtroller, alertController, translateService) {
    this.toastCtroller = toastCtroller;
    this.alertController = alertController;
    this.translateService = translateService;
  }
  static pad(num, size = 2) {
    let s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
  }
  parseBexioDate(date) {
    if (date && date.indexOf(' ') === -1) return new Date(date);
    let dateOnly = date.split(' ')[0];
    let timeOnly = date.split(' ')[1].split(':').map(i => parseInt(i));
    let newDate = new Date(dateOnly);
    newDate.setHours(timeOnly[0], timeOnly[1], timeOnly[2]);
    return newDate;
  }
  prepareTracking(tracking) {
    let today = new Date().toISOString();
    ['date', 'start', 'end'].forEach(field => {
      if (!tracking[field]) {
        tracking[field] = today;
      } else {
        tracking[field] = this.parseBexioDate(tracking[field]).toISOString();
      }
    });
    return tracking;
  }
  requestNotificationPermission() {
    return new Promise( /*#__PURE__*/function () {
      var _ref = (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
        if (!(yield LocalNotifications.requestPermission())) {
          resolve();
        } else {
          reject();
        }
      });
      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());
  }
  parseDuration(duration) {
    if (duration === null) return 0;
    return parseFloat(duration) + parseFloat(duration.split(':')[1]) / 60;
  }
  showToast(message, duration = 3000) {
    var _this = this;
    return (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let toast = yield _this.toastCtroller.create({
        message: yield _this.translateService.get(message).toPromise(),
        duration: duration,
        position: 'top'
      });
      toast.present();
    })();
  }
  confirm(header, message, confirm = 'Delete', cancel = 'Cancel') {
    var _this2 = this;
    return new Promise( /*#__PURE__*/function () {
      var _ref2 = (0,_workspaces_bextrack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
        const alert = yield _this2.alertController.create({
          header: yield _this2.translateService.get(header).toPromise(),
          message: yield _this2.translateService.get(message).toPromise(),
          buttons: [{
            text: yield _this2.translateService.get(cancel).toPromise(),
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              resolve(false);
            }
          }, {
            text: yield _this2.translateService.get(confirm).toPromise(),
            cssClass: 'danger',
            handler: () => {
              resolve(true);
            }
          }]
        });
        alert.present();
      });
      return function (_x3, _x4) {
        return _ref2.apply(this, arguments);
      };
    }());
  }
}
UtilsService.ɵfac = function UtilsService_Factory(t) {
  return new (t || UtilsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService));
};
UtilsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: UtilsService,
  factory: UtilsService.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);
//# sourceMappingURL=default-src_app_services_api_api_service_ts.js.map