!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{zNRH:function(n,a,r){"use strict";r.r(a),r.d(a,"CreateStopwatchPageModule",(function(){return j}));var i=r("ofXK"),o=r("3Pt+"),c=r("TEn/"),s=r("mrSG"),l=r("mYOz"),p=r("TCge"),d=r("fXoL"),u=r("oZWX"),h=r("tyNb"),m=r("SdGS"),g=r("E2f4"),v=r("HPR3"),S=r("sYmb");function f(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"ion-title"),d["\u0275\u0275text"](1),d["\u0275\u0275pipe"](2,"translate"),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate"](d["\u0275\u0275pipeBind1"](2,1,"Update stopwatch")))}function x(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"ion-title"),d["\u0275\u0275text"](1),d["\u0275\u0275pipe"](2,"translate"),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate"](d["\u0275\u0275pipeBind1"](2,1,"Create stopwatch")))}function w(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"ion-select-option",15),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;d["\u0275\u0275property"]("value",n.id),d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate1"](" ",n.name," ")}}function I(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"ion-select-option",15),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;d["\u0275\u0275propertyInterpolate"]("value",n.id),d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate1"]("",n.name," ")}}function _(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"ion-select-option",15),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;d["\u0275\u0275propertyInterpolate"]("value",n.id),d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate1"]("",n.name," ")}}function b(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"ion-select-option",15),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;d["\u0275\u0275property"]("value",n.id),d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate1"]("",n.name," ")}}var T,E,k=((T=function(){function n(t,a,r,i,o,c,s){e(this,n),this.apiService=t,this.router=a,this.route=r,this.stopwatchesService=i,this.navController=o,this.storage=c,this.utils=s,this.isUpdate=!1,this.availablePackages=[],this.projects=[],this.clientServices=[],this.timesheetStatus=[],this.contact=null,this.stopwatch=new l.a,this.init()}var a,r,i;return a=n,(r=[{key:"init",value:function(){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.apiService.getProjects();case 2:return this.projects=e.sent,e.next=5,this.apiService.getClientService();case 5:return this.clientServices=e.sent,e.next=8,this.apiService.getTimesheetStatus();case 8:return this.timesheetStatus=e.sent,e.next=11,this.storage.getString(p.b.SETTINGS_LAST_SERVICE,p.a.SERVICE_ID);case 11:if(e.t0=e.sent,e.t1=p.c.NONE,e.t2=e.t0!=e.t1,!e.t2){e.next=19;break}return e.next=17,this.storage.getNumber(p.b.SETTINGS_LAST_SERVICE_ID);case 17:this.stopwatch.client_service_id=e.sent,this.updateClientServices();case 19:return e.next=21,this.storage.getString(p.b.SETTINGS_LAST_STATUS,p.a.STATUS_ID);case 21:if(e.t3=e.sent,e.t4=p.c.NONE,e.t5=e.t3!=e.t4,!e.t5){e.next=29;break}return e.next=27,this.storage.getNumber(p.b.SETTINGS_LAST_STATUS_ID);case 27:this.stopwatch.status_id=e.sent,this.updateStatus();case 29:return e.next=31,this.storage.getString(p.b.SETTINGS_LAST_PROJECT,p.a.PROJECT_ID);case 31:if(e.t6=e.sent,e.t7=p.c.NONE,e.t8=e.t6!=e.t7,!e.t8){e.next=42;break}return e.next=37,this.storage.getNumber(p.b.SETTINGS_LAST_PROJECT_ID);case 37:return this.stopwatch.pr_project_id=e.sent,e.next=40,this.apiService.getPackagesForProject(this.stopwatch.pr_project_id);case 40:this.availablePackages=e.sent,this.updateSelectTexts();case 42:this.route.params.subscribe((function(e){return Object(s.a)(t,void 0,void 0,regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.stopwatch_id){t.next=11;break}return this.isUpdate=!0,t.next=4,this.stopwatchesService.get(e.stopwatch_id);case 4:if(n=t.sent,t.t0=n,!t.t0){t.next=11;break}return this.stopwatch=n,t.next=10,this.apiService.getPackagesForProject(this.stopwatch.pr_project_id);case 10:this.availablePackages=t.sent;case 11:this.updateSelectTexts();case 12:case"end":return t.stop()}}),t,this)})))}));case 43:case"end":return e.stop()}}),e,this)})))}},{key:"updateClientServices",value:function(){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=this.clientServices.filter((function(e){return e.id==n.stopwatch.client_service_id}))).length>0&&(this.stopwatch.selectedClientServiceText=t[0].name);case 2:case"end":return e.stop()}}),e,this)})))}},{key:"updateStatus",value:function(){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=this.timesheetStatus.filter((function(e){return e.id==n.stopwatch.status_id}))).length>0&&(this.stopwatch.selectedStatusText=t[0].name);case 2:case"end":return e.stop()}}),e,this)})))}},{key:"updateSelectTexts",value:function(){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.projects.filter((function(e){return e.id==n.stopwatch.pr_project_id})),e.t0=t.length>0,!e.t0){e.next=13;break}if(this.stopwatch.selectedProjectText=t[0].name,this.stopwatch.contact_id=t[0].contact_id,console.log("selectedProjectText",this.stopwatch.selectedProjectText),console.log("pr_package_id",this.stopwatch.pr_package_id),e.t1=this.stopwatch.pr_package_id,!e.t1){e.next=13;break}return e.next=11,this.apiService.getPackageForProjectWithId(this.stopwatch.pr_project_id,this.stopwatch.pr_package_id);case 11:this.stopwatch.selectedPackageText=e.sent.name,console.log("selectedPackageText",this.stopwatch.selectedPackageText);case 13:case"end":return e.stop()}}),e,this)})))}},{key:"onProjectSelected",value:function(){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.apiService.getPackagesForProject(this.stopwatch.pr_project_id);case 2:this.availablePackages=e.sent,this.updateSelectTexts();case 4:case"end":return e.stop()}}),e,this)})))}},{key:"save",value:function(){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(!this.stopwatch.title||this.stopwatch.title.length<1||!this.stopwatch.text||this.stopwatch.text.length<1)&&this.stopwatch.client_service_id&&this.stopwatch.status_id){e.next=2;break}return e.abrupt("return",(this.utils.showToast("Missing information"),!1));case 2:return e.next=4,this.stopwatchesService.add(this.stopwatch);case 4:this.utils.showToast(this.isUpdate?"Updated":"Created"),this.navController.navigateRoot("/tabs/stopwatches");case 6:case"end":return e.stop()}}),e,this)})))}},{key:"contactChange",value:function(e){console.log("port:",e.value)}},{key:"searchContact",value:function(e){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.text.trim().toLowerCase(),e.component.startSearch(),t.next=4,this.apiService.searchContact(n);case 4:e.component.items=t.sent,e.component.endSearch();case 6:case"end":return t.stop()}}),t,this)})))}}])&&t(a.prototype,r),i&&t(a,i),n}()).\u0275fac=function(e){return new(e||T)(d["\u0275\u0275directiveInject"](u.a),d["\u0275\u0275directiveInject"](h.g),d["\u0275\u0275directiveInject"](h.a),d["\u0275\u0275directiveInject"](m.a),d["\u0275\u0275directiveInject"](c.NavController),d["\u0275\u0275directiveInject"](g.a),d["\u0275\u0275directiveInject"](v.a))},T.\u0275cmp=d["\u0275\u0275defineComponent"]({type:T,selectors:[["app-stopwatch"]],decls:68,vars:66,consts:[["color","primary"],["slot","start"],["mode","md","defaultHref","/tabs/stopwatches"],["slot","end"],[3,"click"],["slot","icon-only","name","save"],[4,"ngIf"],["position","stacked"],["autoGrow","true","placeholder","Text",3,"ngModel","ngModelChange"],[3,"ngModel","ngModelChange"],[3,"placeholder","ngModel","selectedText","ionChange","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["position","floating"],["placeholder","Select",3,"ngModel","selectedText","ionChange","ngModelChange"],[3,"placeholder","ngModel","ngModelChange"],[3,"value"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"ion-header"),d["\u0275\u0275elementStart"](1,"ion-toolbar",0),d["\u0275\u0275elementStart"](2,"ion-buttons",1),d["\u0275\u0275element"](3,"ion-back-button",2),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](4,"ion-buttons",3),d["\u0275\u0275elementStart"](5,"ion-button",4),d["\u0275\u0275listener"]("click",(function(){return t.save()})),d["\u0275\u0275element"](6,"ion-icon",5),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](7,f,3,3,"ion-title",6),d["\u0275\u0275template"](8,x,3,3,"ion-title",6),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](9,"ion-content"),d["\u0275\u0275elementStart"](10,"ion-list"),d["\u0275\u0275elementStart"](11,"ion-item"),d["\u0275\u0275elementStart"](12,"ion-label",7),d["\u0275\u0275text"](13),d["\u0275\u0275pipe"](14,"translate"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](15,"ion-textarea",8),d["\u0275\u0275listener"]("ngModelChange",(function(e){return t.stopwatch.title=e})),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](16,"ion-item"),d["\u0275\u0275elementStart"](17,"ion-label"),d["\u0275\u0275text"](18),d["\u0275\u0275pipe"](19,"translate"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](20,"ion-toggle",9),d["\u0275\u0275listener"]("ngModelChange",(function(e){return t.stopwatch.allowable_bill=e})),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](21,"ion-item"),d["\u0275\u0275elementStart"](22,"ion-label",7),d["\u0275\u0275text"](23),d["\u0275\u0275pipe"](24,"translate"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](25,"ion-select",10),d["\u0275\u0275listener"]("ionChange",(function(){return t.updateClientServices()}))("ngModelChange",(function(e){return t.stopwatch.client_service_id=e})),d["\u0275\u0275pipe"](26,"translate"),d["\u0275\u0275template"](27,w,2,2,"ion-select-option",11),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](28,"ion-item"),d["\u0275\u0275elementStart"](29,"ion-label",12),d["\u0275\u0275text"](30),d["\u0275\u0275pipe"](31,"translate"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](32,"ion-select",10),d["\u0275\u0275listener"]("ionChange",(function(){return t.onProjectSelected()}))("ngModelChange",(function(e){return t.stopwatch.pr_project_id=e})),d["\u0275\u0275pipe"](33,"translate"),d["\u0275\u0275template"](34,I,2,2,"ion-select-option",11),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](35,"ion-item"),d["\u0275\u0275elementStart"](36,"ion-label",12),d["\u0275\u0275text"](37),d["\u0275\u0275pipe"](38,"translate"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](39,"ion-select",10),d["\u0275\u0275listener"]("ionChange",(function(){return t.onProjectSelected()}))("ngModelChange",(function(e){return t.stopwatch.pr_package_id=e})),d["\u0275\u0275pipe"](40,"translate"),d["\u0275\u0275template"](41,_,2,2,"ion-select-option",11),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](42,"ion-item"),d["\u0275\u0275elementStart"](43,"ion-label",7),d["\u0275\u0275text"](44),d["\u0275\u0275pipe"](45,"translate"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](46,"ion-select",13),d["\u0275\u0275listener"]("ionChange",(function(){return t.updateStatus()}))("ngModelChange",(function(e){return t.stopwatch.status_id=e})),d["\u0275\u0275template"](47,b,2,2,"ion-select-option",11),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](48,"ion-item"),d["\u0275\u0275elementStart"](49,"ion-label",7),d["\u0275\u0275text"](50),d["\u0275\u0275pipe"](51,"translate"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](52,"ion-textarea",8),d["\u0275\u0275listener"]("ngModelChange",(function(e){return t.stopwatch.text=e})),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](53,"ion-item"),d["\u0275\u0275elementStart"](54,"ion-label",12),d["\u0275\u0275text"](55),d["\u0275\u0275pipe"](56,"translate"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](57,"ion-select",14),d["\u0275\u0275listener"]("ngModelChange",(function(e){return t.stopwatch.strategy=e})),d["\u0275\u0275pipe"](58,"translate"),d["\u0275\u0275elementStart"](59,"ion-select-option",15),d["\u0275\u0275text"](60),d["\u0275\u0275pipe"](61,"translate"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](62,"ion-select-option",15),d["\u0275\u0275text"](63),d["\u0275\u0275pipe"](64,"translate"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](65,"ion-select-option",15),d["\u0275\u0275text"](66),d["\u0275\u0275pipe"](67,"translate"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275advance"](7),d["\u0275\u0275property"]("ngIf",t.isUpdate),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",!t.isUpdate),d["\u0275\u0275advance"](5),d["\u0275\u0275textInterpolate"](d["\u0275\u0275pipeBind1"](14,36,"Stopwatch title")),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("ngModel",t.stopwatch.title),d["\u0275\u0275advance"](3),d["\u0275\u0275textInterpolate"](d["\u0275\u0275pipeBind1"](19,38,"Chargeable")),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("ngModel",t.stopwatch.allowable_bill),d["\u0275\u0275advance"](3),d["\u0275\u0275textInterpolate1"]("",d["\u0275\u0275pipeBind1"](24,40,"Service"),"*"),d["\u0275\u0275advance"](2),d["\u0275\u0275propertyInterpolate"]("placeholder",d["\u0275\u0275pipeBind1"](26,42,"Service")),d["\u0275\u0275property"]("ngModel",t.stopwatch.client_service_id)("selectedText",t.stopwatch.selectedClientServiceText),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("ngForOf",t.clientServices),d["\u0275\u0275advance"](3),d["\u0275\u0275textInterpolate"](d["\u0275\u0275pipeBind1"](31,44,"Project")),d["\u0275\u0275advance"](2),d["\u0275\u0275propertyInterpolate"]("placeholder",d["\u0275\u0275pipeBind1"](33,46,"Project")),d["\u0275\u0275property"]("ngModel",t.stopwatch.pr_project_id)("selectedText",t.stopwatch.selectedProjectText),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("ngForOf",t.projects),d["\u0275\u0275advance"](3),d["\u0275\u0275textInterpolate"](d["\u0275\u0275pipeBind1"](38,48,"Package")),d["\u0275\u0275advance"](2),d["\u0275\u0275propertyInterpolate"]("placeholder",d["\u0275\u0275pipeBind1"](40,50,"Package")),d["\u0275\u0275property"]("ngModel",t.stopwatch.pr_package_id)("selectedText",t.stopwatch.selectedPackageText),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("ngForOf",t.availablePackages),d["\u0275\u0275advance"](3),d["\u0275\u0275textInterpolate1"]("",d["\u0275\u0275pipeBind1"](45,52,"Status"),"*"),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("ngModel",t.stopwatch.status_id)("selectedText",t.stopwatch.selectedStatusText),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngForOf",t.timesheetStatus),d["\u0275\u0275advance"](3),d["\u0275\u0275textInterpolate1"]("",d["\u0275\u0275pipeBind1"](51,54,"Description"),"*"),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("ngModel",t.stopwatch.text),d["\u0275\u0275advance"](3),d["\u0275\u0275textInterpolate"](d["\u0275\u0275pipeBind1"](56,56,"Strategy")),d["\u0275\u0275advance"](2),d["\u0275\u0275propertyInterpolate"]("placeholder",d["\u0275\u0275pipeBind1"](58,58,"Strategy")),d["\u0275\u0275property"]("ngModel",t.stopwatch.strategy),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("value",0),d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate"](d["\u0275\u0275pipeBind1"](61,60,"Always ask")),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("value",1),d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate"](d["\u0275\u0275pipeBind1"](64,62,"Automatically create")),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("value",2),d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate"](d["\u0275\u0275pipeBind1"](67,64,"Always edit")))},directives:[c.IonHeader,c.IonToolbar,c.IonButtons,c.IonBackButton,c.IonBackButtonDelegate,c.IonButton,c.IonIcon,i.NgIf,c.IonContent,c.IonList,c.IonItem,c.IonLabel,c.IonTextarea,c.TextValueAccessor,o.NgControlStatus,o.NgModel,c.IonToggle,c.BooleanValueAccessor,c.IonSelect,c.SelectValueAccessor,i.NgForOf,c.IonSelectOption,c.IonTitle],pipes:[S.c],styles:[""]}),T),y=r("iTUp"),C=r("CH/f"),j=((E=function t(){e(this,t)}).\u0275mod=d["\u0275\u0275defineNgModule"]({type:E}),E.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(e){return new(e||E)},imports:[[i.CommonModule,o.FormsModule,c.IonicModule,S.b,y.a,C.a,h.i.forChild([{path:"",component:k}])]]}),E)}}])}();