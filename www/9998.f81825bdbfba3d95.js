"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9998],{9998:(K,v,g)=>{g.r(v),g.d(v,{CreateTimePageModule:()=>Q});var u=g(177),T=g(9417),f=g(3871),r=g(4742),S=g(3955),I=g(8548),j=g(1683),_=g(467),k=g(8723),l=g(8),P=g(7316),E=g(8694),p=g(7792),e=g(6996),C=g(6929),b=g(5217),M=g(9893),R=g(7897);function D(n,c){if(1&n){const a=e.RV6();e.j41(0,"ion-button",19),e.bIt("click",function(){e.eBV(a);const i=e.XpG(2);return e.Njj(i.delete())}),e.nrm(1,"ion-icon",21),e.k0s()}}function y(n,c){if(1&n){const a=e.RV6();e.j41(0,"ion-buttons",18),e.DNE(1,D,2,0,"ion-button",8),e.j41(2,"ion-button",19),e.bIt("click",function(){e.eBV(a);const i=e.XpG();return e.Njj(i.save())}),e.nrm(3,"ion-icon",20),e.k0s()()}if(2&n){const a=e.XpG();e.R7$(1),e.Y8G("ngIf",a.isUpdate)}}function F(n,c){1&n&&e.nrm(0,"ion-spinner",22)}function G(n,c){1&n&&(e.j41(0,"ion-title"),e.EFF(1),e.nI1(2,"translate"),e.k0s()),2&n&&(e.R7$(1),e.JRh(e.bMT(2,1,"Create effort")))}function N(n,c){1&n&&(e.j41(0,"ion-title"),e.EFF(1),e.nI1(2,"translate"),e.k0s()),2&n&&(e.R7$(1),e.JRh(e.bMT(2,1,"Update effort")))}function $(n,c){if(1&n){const a=e.RV6();e.j41(0,"ion-segment",23),e.bIt("ionChange",function(i){e.eBV(a);const o=e.XpG();return e.Njj(o.segmentChanged(i))}),e.j41(1,"ion-segment-button",24)(2,"ion-label"),e.EFF(3),e.nI1(4,"translate"),e.k0s()(),e.j41(5,"ion-segment-button",25)(6,"ion-label"),e.EFF(7),e.nI1(8,"translate"),e.k0s()()()}if(2&n){const a=e.XpG();e.Y8G("value",null==a.timesheet||null==a.timesheet.tracking?null:a.timesheet.tracking.type),e.R7$(3),e.JRh(e.bMT(4,3,"Duration")),e.R7$(4),e.JRh(e.bMT(8,5,"Range"))}}function Y(n,c){1&n&&(e.j41(0,"ion-label",11),e.EFF(1),e.nI1(2,"translate"),e.k0s()),2&n&&(e.R7$(1),e.JRh(e.bMT(2,1,"Date(s)")))}function U(n,c){1&n&&(e.j41(0,"ion-label",11),e.EFF(1),e.nI1(2,"translate"),e.k0s()),2&n&&(e.R7$(1),e.JRh(e.bMT(2,1,"Date")))}function O(n,c){if(1&n&&(e.j41(0,"p"),e.EFF(1),e.nI1(2,"date"),e.k0s()),2&n){const a=c.$implicit;e.R7$(1),e.JRh(e.i5U(2,1,a,"EEEE dd.MM.yyyy"))}}function A(n,c){if(1&n){const a=e.RV6();e.j41(0,"ion-item",19),e.bIt("click",function(){e.eBV(a);const i=e.XpG();return e.Njj(i.openCalendar())}),e.DNE(1,Y,3,3,"ion-label",26),e.DNE(2,U,3,3,"ion-label",26),e.DNE(3,O,3,4,"p",27),e.k0s()}if(2&n){const a=e.XpG();e.R7$(1),e.Y8G("ngIf",!a.isUpdate),e.R7$(1),e.Y8G("ngIf",a.isUpdate),e.R7$(1),e.Y8G("ngForOf",a.selectedDates)}}function w(n,c){if(1&n){const a=e.RV6();e.j41(0,"ion-row")(1,"ion-col")(2,"ion-item")(3,"ion-label",11),e.EFF(4),e.nI1(5,"translate"),e.k0s(),e.j41(6,"ion-datetime",28),e.bIt("ngModelChange",function(i){e.eBV(a);const o=e.XpG();return e.Njj(o.timesheet.tracking.start=i)})("ionChange",function(){e.eBV(a);const i=e.XpG();return e.Njj(i.onTimeChanged())}),e.k0s()()(),e.j41(7,"ion-col")(8,"ion-item")(9,"ion-label",11),e.EFF(10),e.nI1(11,"translate"),e.k0s(),e.j41(12,"ion-datetime",29),e.bIt("ngModelChange",function(i){e.eBV(a);const o=e.XpG();return e.Njj(o.timesheet.tracking.start=i)})("ionChange",function(){e.eBV(a);const i=e.XpG();return e.Njj(i.onTimeChanged())}),e.k0s()()()()}if(2&n){const a=e.XpG();e.R7$(4),e.JRh(e.bMT(5,4,"Start")),e.R7$(2),e.Y8G("ngModel",a.timesheet.tracking.start),e.R7$(4),e.JRh(e.bMT(11,6,"Time")),e.R7$(2),e.Y8G("ngModel",a.timesheet.tracking.start)}}function x(n,c){if(1&n){const a=e.RV6();e.j41(0,"ion-row")(1,"ion-col")(2,"ion-item",30)(3,"ion-label",11),e.EFF(4),e.nI1(5,"translate"),e.k0s(),e.j41(6,"ion-datetime",28),e.bIt("ngModelChange",function(i){e.eBV(a);const o=e.XpG();return e.Njj(o.timesheet.tracking.end=i)})("ionChange",function(){e.eBV(a);const i=e.XpG();return e.Njj(i.onTimeChanged())}),e.k0s()()(),e.j41(7,"ion-col")(8,"ion-item",30)(9,"ion-label",11),e.EFF(10),e.nI1(11,"translate"),e.k0s(),e.j41(12,"ion-datetime",29),e.bIt("ngModelChange",function(i){e.eBV(a);const o=e.XpG();return e.Njj(o.timesheet.tracking.end=i)})("ionChange",function(){e.eBV(a);const i=e.XpG();return e.Njj(i.onTimeChanged())}),e.k0s()()()()}if(2&n){const a=e.XpG();e.R7$(4),e.JRh(e.bMT(5,4,"End")),e.R7$(2),e.Y8G("ngModel",a.timesheet.tracking.end),e.R7$(4),e.JRh(e.bMT(11,6,"Time")),e.R7$(2),e.Y8G("ngModel",a.timesheet.tracking.end)}}function X(n,c){if(1&n){const a=e.RV6();e.j41(0,"ion-item",30)(1,"ion-label",11),e.EFF(2),e.nI1(3,"translate"),e.k0s(),e.j41(4,"span",31),e.EFF(5),e.nI1(6,"toDuration"),e.nI1(7,"translate"),e.k0s(),e.j41(8,"ion-range",32),e.bIt("ngModelChange",function(i){e.eBV(a);const o=e.XpG();return e.Njj(o.selectedDuration=i)}),e.k0s()()}if(2&n){const a=e.XpG();e.R7$(2),e.JRh(e.bMT(3,6,"Duration")),e.R7$(3),e.Lme("",e.bMT(6,8,a.selectedDuration)," ",e.bMT(7,10,"hour(s)"),""),e.R7$(3),e.Y8G("min",a.steps)("step",a.steps)("ngModel",a.selectedDuration)}}function V(n,c){if(1&n&&(e.j41(0,"ion-item",30)(1,"ion-label",11),e.EFF(2),e.nI1(3,"translate"),e.k0s(),e.j41(4,"span",33),e.EFF(5),e.nI1(6,"translate"),e.k0s()()),2&n){const a=e.XpG();e.R7$(2),e.JRh(e.bMT(3,3,"Duration")),e.R7$(3),e.Lme("",null==a.timesheet||null==a.timesheet.tracking?null:a.timesheet.tracking.duration," ",e.bMT(6,5,"hour(s)"),"")}}function J(n,c){if(1&n&&(e.j41(0,"ion-select-option",34),e.EFF(1),e.k0s()),2&n){const a=c.$implicit;e.Y8G("value",a.id),e.R7$(1),e.SpI(" ",a.name," ")}}function L(n,c){if(1&n&&(e.j41(0,"ion-select-option",34),e.EFF(1),e.j41(2,"span",35),e.EFF(3,"\u2605"),e.k0s()()),2&n){const a=c.$implicit;e.FS9("value",a.id),e.R7$(1),e.SpI("",a.name," ")}}function B(n,c){if(1&n&&(e.j41(0,"ion-select-option",34),e.EFF(1),e.k0s()),2&n){const a=c.$implicit;e.FS9("value",a.id),e.R7$(1),e.SpI("",a.name," ")}}function z(n,c){if(1&n&&(e.j41(0,"ion-select-option",34),e.EFF(1),e.k0s()),2&n){const a=c.$implicit;e.Y8G("value",a.id),e.R7$(1),e.SpI("",a.name," ")}}let W=(()=>{var n;class c{constructor(t,i,o,s,h,m,d,H){this.apiService=t,this.router=i,this.route=o,this.storage=s,this.utils=h,this.translateService=m,this.modalContoller=d,this.stopwatchesService=H,this.datePipe=new u.vh("en-US"),this.isUpdate=!1,this.isSaving=!1,this.selectedDates=[new Date],this.selectedProjectText=null,this.selectedPackageText=null,this.selectedDuration=1,this.availablePackages=[],this.timesheet=new E.d,this.projects=[],this.clientServices=[],this.timesheetStatus=[],this.steps=1,this.contact=null,this.init()}init(){var t=this;return(0,_.A)(function*(){const i=yield t.apiService.getUser();t.timesheet.user_id=i.id,t.timesheet.allowable_bill=!1,t.projects=yield t.apiService.getProjects(),t.clientServices=yield t.apiService.getClientService(),t.timesheetStatus=yield t.apiService.getTimesheetStatus(),t.timesheet.tracking=t.utils.prepareTracking(t.timesheet.tracking);const o=yield t.storage.getNumber(l.O3.SETTINGS_DURATION,l.zY.DURATION);t.selectedDuration=o;const s=new Date(t.timesheet.tracking.start);s.setMinutes(s.getMinutes()+60*o),t.timesheet.tracking.end=s.toISOString(),t.timesheet.tracking.duration=(new p.W).transform(o),t.steps=(yield t.storage.getNumber(l.O3.SETTINGS_STEPS,l.zY.STEPS))/60,(yield t.storage.getString(l.O3.SETTINGS_LAST_SERVICE,l.zY.SERVICE_ID))!==l.QE.NONE&&(t.timesheet.client_service_id=yield t.storage.getNumber(l.O3.SETTINGS_LAST_SERVICE_ID)),(yield t.storage.getString(l.O3.SETTINGS_LAST_STATUS,l.zY.STATUS_ID))!==l.QE.NONE&&(t.timesheet.status_id=yield t.storage.getNumber(l.O3.SETTINGS_LAST_STATUS_ID)),(yield t.storage.getString(l.O3.SETTINGS_LAST_PROJECT,l.zY.PROJECT_ID))!==l.QE.NONE&&(t.timesheet.pr_project_id=yield t.storage.getNumber(l.O3.SETTINGS_LAST_PROJECT_ID),t.availablePackages=yield t.apiService.getPackagesForProject(t.timesheet.pr_project_id)),t.route.params.subscribe(function(){var h=(0,_.A)(function*(m){if(m.stopwatch_id){let d=yield t.stopwatchesService.get(m.stopwatch_id);d=Object.assign(new P.e,d),t.timesheet=d.toTimesheet((yield t.apiService.getUser()).id),t.selectedDuration=t.utils.parseDuration(t.timesheet.tracking.duration)}if(m.project_id&&(t.timesheet.pr_project_id=parseInt(m.project_id,10),t.availablePackages=yield t.apiService.getPackagesForProject(t.timesheet.pr_project_id)),m.package_id&&(t.timesheet.pr_package_id=parseInt(m.package_id,10)),m.time_id){t.isUpdate=!0;try{t.timesheet=yield t.apiService.getTimesheet(parseInt(m.time_id,10),!0),t.selectedDates=[new Date(t.timesheet.date)],t.selectedDuration=t.utils.parseDuration(t.timesheet.duration),t.availablePackages=yield t.apiService.getPackagesForProject(t.timesheet.pr_project_id)}catch(d){console.error("error",d)}}t.updateSelectTexts()});return function(m){return h.apply(this,arguments)}}())})()}updateSelectTexts(){var t=this;return(0,_.A)(function*(){const i=t.projects.filter(o=>o.id===t.timesheet.pr_project_id);i.length>0&&(t.selectedProjectText=i[0].name,t.timesheet.contact_id=i[0].contact_id,t.timesheet.pr_package_id&&(t.selectedPackageText=(yield t.apiService.getPackageForProjectWithId(t.timesheet.pr_project_id,t.timesheet.pr_package_id)).name))})()}onProjectSelected(){var t=this;return(0,_.A)(function*(){t.availablePackages=yield t.apiService.getPackagesForProject(t.timesheet.pr_project_id),t.updateSelectTexts()})()}save(){var t=this;return(0,_.A)(function*(){console.log("timesheet",t.timesheet),t.isSaving=!0,null!==t.contact&&(t.timesheet.contact_id=t.contact.id),t.isUpdate?yield t.update():yield t.create(),t.isSaving=!1})()}contactChange(t){console.log("port:",t.value)}searchContact(t){var i=this;return(0,_.A)(function*(){const o=t.text.trim().toLowerCase();t.component.startSearch(),t.component.items=yield i.apiService.searchContact(o),t.component.endSearch()})()}validateTime(){return!this.timesheet.client_service_id||!this.timesheet.status_id||!this.timesheet.text||this.timesheet.text.length<1?(this.utils.showToast("Missing information"),!1):(this.timesheet.tracking.duration=(new p.W).transform(this.selectedDuration),!0)}onTimeChanged(){if("range"===this.timesheet.tracking.type){const t=(Date.parse(this.timesheet.tracking.end)-Date.parse(this.timesheet.tracking.start))/36e5;this.timesheet.tracking.duration=(new p.W).transform(t),this.selectedDuration=(new p.W).transform(t)}}segmentChanged(t){var i=this;return(0,_.A)(function*(){i.timesheet.tracking.type="duration"===t.detail.value?"duration":"range",console.log("changed type to "+t.detail.value),console.log("timesheet",i.timesheet)})()}storeLastUsed(t){var i=this;return(0,_.A)(function*(){(yield i.storage.getString(l.O3.SETTINGS_LAST_PROJECT,l.zY.PROJECT_ID))===l.QE.LAST_USED&&i.storage.setItem(l.O3.SETTINGS_LAST_PROJECT_ID,t.pr_project_id),(yield i.storage.getString(l.O3.SETTINGS_LAST_STATUS,l.zY.STATUS_ID))===l.QE.LAST_USED&&i.storage.setItem(l.O3.SETTINGS_LAST_STATUS_ID,t.status_id),(yield i.storage.getString(l.O3.SETTINGS_LAST_SERVICE,l.zY.SERVICE_ID))===l.QE.LAST_USED&&i.storage.setItem(l.O3.SETTINGS_LAST_SERVICE_ID,t.client_service_id)})()}update(){var t=this;return(0,_.A)(function*(){return new Promise(i=>{t.validateTime()?(t.timesheet.tracking.date=t.datePipe.transform(t.selectedDates[0],"yyyy-MM-dd"),t.apiService.putTimesheet(t.timesheet).then(function(){var o=(0,_.A)(function*(s){t.storeLastUsed(s),t.utils.showToast("Updated"),t.router.navigateByUrl("tabs",{skipLocationChange:!0}),i()});return function(s){return o.apply(this,arguments)}}()).catch(function(){var o=(0,_.A)(function*(s){t.utils.showToast("Failed: "+s.message),i()});return function(s){return o.apply(this,arguments)}}())):i()})})()}openCalendar(){var t=this;return(0,_.A)(function*(){const i={pickMode:"multi",title:yield t.translateService.get("Select date(s)").toPromise(),weekStart:1,defaultScrollTo:t.selectedDates[0]||new Date,defaultDate:t.selectedDates[0],defaultDates:t.selectedDates};t.isUpdate&&(i.pickMode="single",i.defaultDate=t.selectedDates[0],i.title=yield t.translateService.get("Date").toPromise());const o=yield t.modalContoller.create({component:k.Ho,componentProps:{options:i}});o.present();const s=yield o.onDidDismiss();if(t.isUpdate){var h;t.selectedDates=[null===(h=s.data)||void 0===h?void 0:h.dateObj]}else{const m=[];for(let d=0;d<s.data.length;d++)s.data[d]&&m.push(s.data[d].dateObj);t.selectedDates=m}})()}create(){var t=this;return(0,_.A)(function*(){return new Promise(function(){var i=(0,_.A)(function*(o){if(t.validateTime()){for(let s=0;s<t.selectedDates.length;s++){const h=JSON.parse(JSON.stringify(t.timesheet));h.tracking.date=t.datePipe.transform(t.selectedDates[s],"yyyy-MM-dd"),yield t.apiService.postTimesheet(h)}t.storeLastUsed(t.timesheet),t.utils.showToast("Created"),t.router.navigateByUrl("tabs",{skipLocationChange:!0})}o()});return function(o){return i.apply(this,arguments)}}())})()}delete(){var t=this;return(0,_.A)(function*(){(yield t.utils.confirm("Delete time entry","Are you sure?"))&&(yield t.apiService.deleteTimesheet(t.timesheet.id),t.utils.showToast("Deleted"),t.router.navigateByUrl("/tabs/times"))})()}}return(n=c).\u0275fac=function(t){return new(t||n)(e.rXU(C.G),e.rXU(f.Ix),e.rXU(f.nX),e.rXU(b.n),e.rXU(M.T),e.rXU(S.c$),e.rXU(r.W3),e.rXU(R.x))},n.\u0275cmp=e.VBU({type:n,selectors:[["app-time"]],decls:51,vars:40,consts:[["color","primary"],["slot","start"],["mode","md","defaultHref","/tabs/projects"],["slot","end",4,"ngIf"],["slot","end","color","light",4,"ngIf"],[4,"ngIf"],[1,"type"],["mode","ios",3,"value","ionChange",4,"ngIf"],[3,"click",4,"ngIf"],["lines","none",4,"ngIf"],[3,"ngModel","ngModelChange"],["position","stacked"],["placeholder","Select","interface","popover",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["position","floating"],["placeholder","Project",3,"ngModel","selectedText","ionChange","ngModelChange"],["placeholder","Package",3,"ngModel","selectedText","ngModelChange"],["autoGrow","true","placeholder","Text",3,"ngModel","ngModelChange"],["slot","end"],[3,"click"],["slot","icon-only","name","save"],["slot","icon-only","name","trash-outline"],["slot","end","color","light"],["mode","ios",3,"value","ionChange"],["value","duration"],["value","range"],["position","stacked",4,"ngIf"],[4,"ngFor","ngForOf"],["displayFormat","DDDD MMM D, YYYY",3,"ngModel","ngModelChange","ionChange"],["displayFormat","HH:mm",3,"ngModel","ngModelChange","ionChange"],["lines","none"],[2,"width","100%","text-align","center","padding","16px"],["max","12","snaps","true","ticks","false",3,"min","step","ngModel","ngModelChange"],[2,"width","100%","text-align","center"],[3,"value"],[2,"text-align","right"]],template:function(t,i){1&t&&(e.j41(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),e.nrm(3,"ion-back-button",2),e.k0s(),e.DNE(4,y,4,1,"ion-buttons",3),e.DNE(5,F,1,0,"ion-spinner",4),e.DNE(6,G,3,3,"ion-title",5),e.DNE(7,N,3,3,"ion-title",5),e.k0s()(),e.j41(8,"ion-content")(9,"ion-list")(10,"div",6),e.DNE(11,$,9,7,"ion-segment",7),e.DNE(12,A,4,3,"ion-item",8),e.DNE(13,w,13,8,"ion-row",5),e.DNE(14,x,13,8,"ion-row",5),e.DNE(15,X,9,12,"ion-item",9),e.DNE(16,V,7,7,"ion-item",9),e.k0s(),e.j41(17,"ion-item")(18,"ion-label"),e.EFF(19),e.nI1(20,"translate"),e.k0s(),e.j41(21,"ion-toggle",10),e.bIt("ngModelChange",function(s){return i.timesheet.allowable_bill=s}),e.k0s()(),e.j41(22,"ion-item")(23,"ion-label",11),e.EFF(24),e.nI1(25,"translate"),e.k0s(),e.j41(26,"ion-select",12),e.bIt("ngModelChange",function(s){return i.timesheet.client_service_id=s}),e.DNE(27,J,2,2,"ion-select-option",13),e.k0s()(),e.j41(28,"ion-item")(29,"ion-label",14),e.EFF(30),e.nI1(31,"translate"),e.k0s(),e.j41(32,"ion-select",15),e.bIt("ionChange",function(){return i.onProjectSelected()})("ngModelChange",function(s){return i.timesheet.pr_project_id=s}),e.DNE(33,L,4,2,"ion-select-option",13),e.k0s()(),e.j41(34,"ion-item")(35,"ion-label",14),e.EFF(36),e.nI1(37,"translate"),e.k0s(),e.j41(38,"ion-select",16),e.bIt("ngModelChange",function(s){return i.timesheet.pr_package_id=s}),e.DNE(39,B,2,2,"ion-select-option",13),e.k0s()(),e.j41(40,"ion-item")(41,"ion-label",11),e.EFF(42),e.nI1(43,"translate"),e.k0s(),e.j41(44,"ion-select",12),e.bIt("ngModelChange",function(s){return i.timesheet.status_id=s}),e.DNE(45,z,2,2,"ion-select-option",13),e.k0s()(),e.j41(46,"ion-item")(47,"ion-label",11),e.EFF(48),e.nI1(49,"translate"),e.k0s(),e.j41(50,"ion-textarea",17),e.bIt("ngModelChange",function(s){return i.timesheet.text=s}),e.k0s()()()()),2&t&&(e.R7$(4),e.Y8G("ngIf",!i.isSaving),e.R7$(1),e.Y8G("ngIf",i.isSaving),e.R7$(1),e.Y8G("ngIf",!i.isUpdate),e.R7$(1),e.Y8G("ngIf",i.isUpdate),e.R7$(4),e.Y8G("ngIf",!i.isUpdate),e.R7$(1),e.Y8G("ngIf","duration"==(null==i.timesheet||null==i.timesheet.tracking?null:i.timesheet.tracking.type)),e.R7$(1),e.Y8G("ngIf","range"==(null==i.timesheet||null==i.timesheet.tracking?null:i.timesheet.tracking.type)),e.R7$(1),e.Y8G("ngIf","range"==(null==i.timesheet||null==i.timesheet.tracking?null:i.timesheet.tracking.type)),e.R7$(1),e.Y8G("ngIf","duration"==(null==i.timesheet||null==i.timesheet.tracking?null:i.timesheet.tracking.type)),e.R7$(1),e.Y8G("ngIf","range"==(null==i.timesheet||null==i.timesheet.tracking?null:i.timesheet.tracking.type)),e.R7$(3),e.JRh(e.bMT(20,28,"Chargeable")),e.R7$(2),e.Y8G("ngModel",i.timesheet.allowable_bill),e.R7$(3),e.SpI("",e.bMT(25,30,"Service"),"*"),e.R7$(2),e.Y8G("ngModel",i.timesheet.client_service_id),e.R7$(1),e.Y8G("ngForOf",i.clientServices),e.R7$(3),e.JRh(e.bMT(31,32,"Project")),e.R7$(2),e.Y8G("ngModel",i.timesheet.pr_project_id)("selectedText",i.selectedProjectText),e.R7$(1),e.Y8G("ngForOf",i.projects),e.R7$(3),e.JRh(e.bMT(37,34,"Package")),e.R7$(2),e.Y8G("ngModel",i.timesheet.pr_package_id)("selectedText",i.selectedPackageText),e.R7$(1),e.Y8G("ngForOf",i.availablePackages),e.R7$(3),e.SpI("",e.bMT(43,36,"Status"),"*"),e.R7$(2),e.Y8G("ngModel",i.timesheet.status_id),e.R7$(1),e.Y8G("ngForOf",i.timesheetStatus),e.R7$(3),e.SpI("",e.bMT(49,38,"Description"),"*"),e.R7$(2),e.Y8G("ngModel",i.timesheet.text))},dependencies:[u.Sq,u.bT,T.BC,T.vS,r.Jm,r.QW,r.hU,r.W9,r.A9,r.eU,r.iq,r.uz,r.he,r.nf,r.Ob,r.ln,r.Gp,r.eP,r.Nm,r.Ip,r.w2,r.nc,r.BC,r.BY,r.ai,r.hB,r.su,r.Je,r.Gw,r.el,u.vh,S.D9,p.W],styles:["ion-spinner[_ngcontent-%COMP%]{margin-right:12px}ion-item[_ngcontent-%COMP%]{--ion-background-color: rgba(0, 0, 0, 0)}.type[_ngcontent-%COMP%]{margin:8px;padding:8px;border-radius:7px;background-color:#eee}"]}),c})(),Q=(()=>{var n;class c{}return(n=c).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.$C({type:n}),n.\u0275inj=e.G2t({providers:[I.rz],imports:[u.MD,T.YN,r.bv,S.h,j.Y,f.iI.forChild([{path:"",component:W}])]}),c})()}}]);