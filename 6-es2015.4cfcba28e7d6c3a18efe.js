(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{zNRH:function(e,t,n){"use strict";n.r(t),n.d(t,"CreateStopwatchPageModule",(function(){return y}));var a=n("ofXK"),i=n("3Pt+"),o=n("TEn/"),l=n("mrSG"),r=n("mYOz"),c=n("TCge"),s=n("fXoL"),p=n("oZWX"),d=n("tyNb"),h=n("SdGS"),m=n("E2f4"),g=n("HPR3"),u=n("sYmb");function S(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"ion-title"),s["\u0275\u0275text"](1),s["\u0275\u0275pipe"](2,"translate"),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate"](s["\u0275\u0275pipeBind1"](2,1,"Update stopwatch")))}function v(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"ion-title"),s["\u0275\u0275text"](1),s["\u0275\u0275pipe"](2,"translate"),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate"](s["\u0275\u0275pipeBind1"](2,1,"Create stopwatch")))}function w(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"ion-select-option",15),s["\u0275\u0275text"](1),s["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;s["\u0275\u0275property"]("value",e.id),s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate1"](" ",e.name," ")}}function I(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"ion-select-option",15),s["\u0275\u0275text"](1),s["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;s["\u0275\u0275propertyInterpolate"]("value",e.id),s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate1"]("",e.name," ")}}function _(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"ion-select-option",15),s["\u0275\u0275text"](1),s["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;s["\u0275\u0275propertyInterpolate"]("value",e.id),s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate1"]("",e.name," ")}}function x(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"ion-select-option",15),s["\u0275\u0275text"](1),s["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;s["\u0275\u0275property"]("value",e.id),s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate1"]("",e.name," ")}}let f=(()=>{class e{constructor(e,t,n,a,i,o,l){this.apiService=e,this.router=t,this.route=n,this.stopwatchesService=a,this.navController=i,this.storage=o,this.utils=l,this.isUpdate=!1,this.availablePackages=[],this.projects=[],this.clientServices=[],this.timesheetStatus=[],this.contact=null,this.stopwatch=new r.a,this.init()}init(){return Object(l.a)(this,void 0,void 0,(function*(){this.projects=yield this.apiService.getProjects(),this.clientServices=yield this.apiService.getClientService(),this.timesheetStatus=yield this.apiService.getTimesheetStatus(),(yield this.storage.getString(c.b.SETTINGS_LAST_SERVICE,c.a.SERVICE_ID))!=c.c.NONE&&(this.stopwatch.client_service_id=yield this.storage.getNumber(c.b.SETTINGS_LAST_SERVICE_ID),this.updateClientServices()),(yield this.storage.getString(c.b.SETTINGS_LAST_STATUS,c.a.STATUS_ID))!=c.c.NONE&&(this.stopwatch.status_id=yield this.storage.getNumber(c.b.SETTINGS_LAST_STATUS_ID),this.updateStatus()),(yield this.storage.getString(c.b.SETTINGS_LAST_PROJECT,c.a.PROJECT_ID))!=c.c.NONE&&(this.stopwatch.pr_project_id=yield this.storage.getNumber(c.b.SETTINGS_LAST_PROJECT_ID),this.availablePackages=yield this.apiService.getPackagesForProject(this.stopwatch.pr_project_id),this.updateSelectTexts()),this.route.params.subscribe(e=>Object(l.a)(this,void 0,void 0,(function*(){if(e.stopwatch_id){this.isUpdate=!0;let t=yield this.stopwatchesService.get(e.stopwatch_id);t&&(this.stopwatch=t,this.availablePackages=yield this.apiService.getPackagesForProject(this.stopwatch.pr_project_id))}this.updateSelectTexts()})))}))}updateClientServices(){return Object(l.a)(this,void 0,void 0,(function*(){const e=this.clientServices.filter(e=>e.id==this.stopwatch.client_service_id);e.length>0&&(this.stopwatch.selectedClientServiceText=e[0].name)}))}updateStatus(){return Object(l.a)(this,void 0,void 0,(function*(){const e=this.timesheetStatus.filter(e=>e.id==this.stopwatch.status_id);e.length>0&&(this.stopwatch.selectedStatusText=e[0].name)}))}updateSelectTexts(){return Object(l.a)(this,void 0,void 0,(function*(){const e=this.projects.filter(e=>e.id==this.stopwatch.pr_project_id);e.length>0&&(this.stopwatch.selectedProjectText=e[0].name,this.stopwatch.contact_id=e[0].contact_id,console.log("selectedProjectText",this.stopwatch.selectedProjectText),console.log("pr_package_id",this.stopwatch.pr_package_id),this.stopwatch.pr_package_id&&(this.stopwatch.selectedPackageText=(yield this.apiService.getPackageForProjectWithId(this.stopwatch.pr_project_id,this.stopwatch.pr_package_id)).name,console.log("selectedPackageText",this.stopwatch.selectedPackageText)))}))}onProjectSelected(){return Object(l.a)(this,void 0,void 0,(function*(){this.availablePackages=yield this.apiService.getPackagesForProject(this.stopwatch.pr_project_id),this.updateSelectTexts()}))}save(){return Object(l.a)(this,void 0,void 0,(function*(){if(!this.stopwatch.title||this.stopwatch.title.length<1||!this.stopwatch.text||this.stopwatch.text.length<1||!this.stopwatch.client_service_id||!this.stopwatch.status_id)return this.utils.showToast("Missing information"),!1;yield this.stopwatchesService.add(this.stopwatch),this.utils.showToast(this.isUpdate?"Updated":"Created"),this.navController.navigateRoot("/tabs/stopwatches")}))}contactChange(e){console.log("port:",e.value)}searchContact(e){return Object(l.a)(this,void 0,void 0,(function*(){let t=e.text.trim().toLowerCase();e.component.startSearch(),e.component.items=yield this.apiService.searchContact(t),e.component.endSearch()}))}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275directiveInject"](p.a),s["\u0275\u0275directiveInject"](d.g),s["\u0275\u0275directiveInject"](d.a),s["\u0275\u0275directiveInject"](h.a),s["\u0275\u0275directiveInject"](o.NavController),s["\u0275\u0275directiveInject"](m.a),s["\u0275\u0275directiveInject"](g.a))},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["app-stopwatch"]],decls:68,vars:66,consts:[["color","primary"],["slot","start"],["mode","md","defaultHref","/tabs/stopwatches"],["slot","end"],[3,"click"],["slot","icon-only","name","save"],[4,"ngIf"],["position","stacked"],["autoGrow","true","placeholder","Text",3,"ngModel","ngModelChange"],[3,"ngModel","ngModelChange"],[3,"placeholder","ngModel","selectedText","ionChange","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["position","floating"],["placeholder","Select",3,"ngModel","selectedText","ionChange","ngModelChange"],[3,"placeholder","ngModel","ngModelChange"],[3,"value"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"ion-header"),s["\u0275\u0275elementStart"](1,"ion-toolbar",0),s["\u0275\u0275elementStart"](2,"ion-buttons",1),s["\u0275\u0275element"](3,"ion-back-button",2),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](4,"ion-buttons",3),s["\u0275\u0275elementStart"](5,"ion-button",4),s["\u0275\u0275listener"]("click",(function(){return t.save()})),s["\u0275\u0275element"](6,"ion-icon",5),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275template"](7,S,3,3,"ion-title",6),s["\u0275\u0275template"](8,v,3,3,"ion-title",6),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](9,"ion-content"),s["\u0275\u0275elementStart"](10,"ion-list"),s["\u0275\u0275elementStart"](11,"ion-item"),s["\u0275\u0275elementStart"](12,"ion-label",7),s["\u0275\u0275text"](13),s["\u0275\u0275pipe"](14,"translate"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](15,"ion-textarea",8),s["\u0275\u0275listener"]("ngModelChange",(function(e){return t.stopwatch.title=e})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](16,"ion-item"),s["\u0275\u0275elementStart"](17,"ion-label"),s["\u0275\u0275text"](18),s["\u0275\u0275pipe"](19,"translate"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](20,"ion-toggle",9),s["\u0275\u0275listener"]("ngModelChange",(function(e){return t.stopwatch.allowable_bill=e})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](21,"ion-item"),s["\u0275\u0275elementStart"](22,"ion-label",7),s["\u0275\u0275text"](23),s["\u0275\u0275pipe"](24,"translate"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](25,"ion-select",10),s["\u0275\u0275listener"]("ionChange",(function(){return t.updateClientServices()}))("ngModelChange",(function(e){return t.stopwatch.client_service_id=e})),s["\u0275\u0275pipe"](26,"translate"),s["\u0275\u0275template"](27,w,2,2,"ion-select-option",11),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](28,"ion-item"),s["\u0275\u0275elementStart"](29,"ion-label",12),s["\u0275\u0275text"](30),s["\u0275\u0275pipe"](31,"translate"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](32,"ion-select",10),s["\u0275\u0275listener"]("ionChange",(function(){return t.onProjectSelected()}))("ngModelChange",(function(e){return t.stopwatch.pr_project_id=e})),s["\u0275\u0275pipe"](33,"translate"),s["\u0275\u0275template"](34,I,2,2,"ion-select-option",11),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](35,"ion-item"),s["\u0275\u0275elementStart"](36,"ion-label",12),s["\u0275\u0275text"](37),s["\u0275\u0275pipe"](38,"translate"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](39,"ion-select",10),s["\u0275\u0275listener"]("ionChange",(function(){return t.onProjectSelected()}))("ngModelChange",(function(e){return t.stopwatch.pr_package_id=e})),s["\u0275\u0275pipe"](40,"translate"),s["\u0275\u0275template"](41,_,2,2,"ion-select-option",11),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](42,"ion-item"),s["\u0275\u0275elementStart"](43,"ion-label",7),s["\u0275\u0275text"](44),s["\u0275\u0275pipe"](45,"translate"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](46,"ion-select",13),s["\u0275\u0275listener"]("ionChange",(function(){return t.updateStatus()}))("ngModelChange",(function(e){return t.stopwatch.status_id=e})),s["\u0275\u0275template"](47,x,2,2,"ion-select-option",11),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](48,"ion-item"),s["\u0275\u0275elementStart"](49,"ion-label",7),s["\u0275\u0275text"](50),s["\u0275\u0275pipe"](51,"translate"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](52,"ion-textarea",8),s["\u0275\u0275listener"]("ngModelChange",(function(e){return t.stopwatch.text=e})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](53,"ion-item"),s["\u0275\u0275elementStart"](54,"ion-label",12),s["\u0275\u0275text"](55),s["\u0275\u0275pipe"](56,"translate"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](57,"ion-select",14),s["\u0275\u0275listener"]("ngModelChange",(function(e){return t.stopwatch.strategy=e})),s["\u0275\u0275pipe"](58,"translate"),s["\u0275\u0275elementStart"](59,"ion-select-option",15),s["\u0275\u0275text"](60),s["\u0275\u0275pipe"](61,"translate"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](62,"ion-select-option",15),s["\u0275\u0275text"](63),s["\u0275\u0275pipe"](64,"translate"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](65,"ion-select-option",15),s["\u0275\u0275text"](66),s["\u0275\u0275pipe"](67,"translate"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275advance"](7),s["\u0275\u0275property"]("ngIf",t.isUpdate),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",!t.isUpdate),s["\u0275\u0275advance"](5),s["\u0275\u0275textInterpolate"](s["\u0275\u0275pipeBind1"](14,36,"Stopwatch title")),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngModel",t.stopwatch.title),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate"](s["\u0275\u0275pipeBind1"](19,38,"Chargeable")),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngModel",t.stopwatch.allowable_bill),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate1"]("",s["\u0275\u0275pipeBind1"](24,40,"Service"),"*"),s["\u0275\u0275advance"](2),s["\u0275\u0275propertyInterpolate"]("placeholder",s["\u0275\u0275pipeBind1"](26,42,"Service")),s["\u0275\u0275property"]("ngModel",t.stopwatch.client_service_id)("selectedText",t.stopwatch.selectedClientServiceText),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngForOf",t.clientServices),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate"](s["\u0275\u0275pipeBind1"](31,44,"Project")),s["\u0275\u0275advance"](2),s["\u0275\u0275propertyInterpolate"]("placeholder",s["\u0275\u0275pipeBind1"](33,46,"Project")),s["\u0275\u0275property"]("ngModel",t.stopwatch.pr_project_id)("selectedText",t.stopwatch.selectedProjectText),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngForOf",t.projects),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate"](s["\u0275\u0275pipeBind1"](38,48,"Package")),s["\u0275\u0275advance"](2),s["\u0275\u0275propertyInterpolate"]("placeholder",s["\u0275\u0275pipeBind1"](40,50,"Package")),s["\u0275\u0275property"]("ngModel",t.stopwatch.pr_package_id)("selectedText",t.stopwatch.selectedPackageText),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngForOf",t.availablePackages),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate1"]("",s["\u0275\u0275pipeBind1"](45,52,"Status"),"*"),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngModel",t.stopwatch.status_id)("selectedText",t.stopwatch.selectedStatusText),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngForOf",t.timesheetStatus),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate1"]("",s["\u0275\u0275pipeBind1"](51,54,"Description"),"*"),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngModel",t.stopwatch.text),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate"](s["\u0275\u0275pipeBind1"](56,56,"Strategy")),s["\u0275\u0275advance"](2),s["\u0275\u0275propertyInterpolate"]("placeholder",s["\u0275\u0275pipeBind1"](58,58,"Strategy")),s["\u0275\u0275property"]("ngModel",t.stopwatch.strategy),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("value",0),s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate"](s["\u0275\u0275pipeBind1"](61,60,"Always ask")),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("value",1),s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate"](s["\u0275\u0275pipeBind1"](64,62,"Automatically create")),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("value",2),s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate"](s["\u0275\u0275pipeBind1"](67,64,"Always edit")))},directives:[o.IonHeader,o.IonToolbar,o.IonButtons,o.IonBackButton,o.IonBackButtonDelegate,o.IonButton,o.IonIcon,a.NgIf,o.IonContent,o.IonList,o.IonItem,o.IonLabel,o.IonTextarea,o.TextValueAccessor,i.NgControlStatus,i.NgModel,o.IonToggle,o.BooleanValueAccessor,o.IonSelect,o.SelectValueAccessor,a.NgForOf,o.IonSelectOption,o.IonTitle],pipes:[u.c],styles:[""]}),e})();var T=n("iTUp"),E=n("CH/f");let y=(()=>{class e{}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.CommonModule,i.FormsModule,o.IonicModule,u.b,T.a,E.a,d.i.forChild([{path:"",component:f}])]]}),e})()}}]);