(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{aI1u:function(e,t,n){"use strict";n.r(t),n.d(t,"NotificationSettingsPageModule",(function(){return f}));var o=n("ofXK"),i=n("3Pt+"),a=n("TEn/"),r=n("tyNb"),l=n("mrSG"),s=(n("gcOT"),n("LvDl")),d=n("TCge"),c=n("fXoL"),m=n("HPR3"),u=n("E2f4"),p=n("sYmb");const h=[{path:"",component:(()=>{class e{constructor(e,t,n){this.utils=e,this.storage=t,this.translateService=n,this.time=d.a.NOTIFICATION_TIME,this.modules=d.a.MODULES,this.notificationsChanged=s.debounce(()=>Object(l.a)(this,void 0,void 0,(function*(){this.utils.requestNotificationPermission(),yield this.storeConfiguration()})),2e3),this.init()}init(){return Object(l.a)(this,void 0,void 0,(function*(){this.time=yield this.storage.getString(d.b.SETTINGS_NOTIFICATIONS_TIME,d.a.NOTIFICATION_TIME),this.modules=JSON.parse(yield this.storage.getString(d.b.SETTINGS_MODULES,JSON.stringify(d.a.MODULES)))}))}storeConfiguration(){return Object(l.a)(this,void 0,void 0,(function*(){yield this.storage.setItem(d.b.SETTINGS_MODULES,JSON.stringify(this.modules)),location.reload(),this.utils.showToast("Updated")}))}}return e.\u0275fac=function(t){return new(t||e)(c["\u0275\u0275directiveInject"](m.a),c["\u0275\u0275directiveInject"](u.a),c["\u0275\u0275directiveInject"](p.d))},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["app-module-settings"]],decls:32,vars:22,consts:[["color","primary"],["slot","start"],["mode","md","defaultHref","/tabs/settings"],["slot","end",3,"ngModel","ngModelChange","ionChange"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"ion-header"),c["\u0275\u0275elementStart"](1,"ion-toolbar",0),c["\u0275\u0275elementStart"](2,"ion-buttons",1),c["\u0275\u0275element"](3,"ion-back-button",2),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](4,"ion-title"),c["\u0275\u0275text"](5),c["\u0275\u0275pipe"](6,"translate"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](7,"ion-content"),c["\u0275\u0275elementStart"](8,"ion-list"),c["\u0275\u0275elementStart"](9,"ion-list-header"),c["\u0275\u0275text"](10),c["\u0275\u0275pipe"](11,"translate"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](12,"ion-item"),c["\u0275\u0275elementStart"](13,"ion-label"),c["\u0275\u0275text"](14),c["\u0275\u0275pipe"](15,"translate"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](16,"ion-checkbox",3),c["\u0275\u0275listener"]("ngModelChange",(function(e){return t.modules.dashboard=e}))("ionChange",(function(){return t.notificationsChanged()})),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](17,"ion-item"),c["\u0275\u0275elementStart"](18,"ion-label"),c["\u0275\u0275text"](19),c["\u0275\u0275pipe"](20,"translate"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](21,"ion-checkbox",3),c["\u0275\u0275listener"]("ngModelChange",(function(e){return t.modules.stopwatches=e}))("ionChange",(function(){return t.notificationsChanged()})),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](22,"ion-item"),c["\u0275\u0275elementStart"](23,"ion-label"),c["\u0275\u0275text"](24),c["\u0275\u0275pipe"](25,"translate"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](26,"ion-checkbox",3),c["\u0275\u0275listener"]("ngModelChange",(function(e){return t.modules.times=e}))("ionChange",(function(){return t.notificationsChanged()})),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](27,"ion-item"),c["\u0275\u0275elementStart"](28,"ion-label"),c["\u0275\u0275text"](29),c["\u0275\u0275pipe"](30,"translate"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](31,"ion-checkbox",3),c["\u0275\u0275listener"]("ngModelChange",(function(e){return t.modules.projects=e}))("ionChange",(function(){return t.notificationsChanged()})),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275advance"](5),c["\u0275\u0275textInterpolate1"](" ",c["\u0275\u0275pipeBind1"](6,10,"Module settings")," "),c["\u0275\u0275advance"](5),c["\u0275\u0275textInterpolate"](c["\u0275\u0275pipeBind1"](11,12,"Activate or deactivate modules")),c["\u0275\u0275advance"](4),c["\u0275\u0275textInterpolate"](c["\u0275\u0275pipeBind1"](15,14,"Dashboard")),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("ngModel",t.modules.dashboard),c["\u0275\u0275advance"](3),c["\u0275\u0275textInterpolate"](c["\u0275\u0275pipeBind1"](20,16,"Stopwatches")),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("ngModel",t.modules.stopwatches),c["\u0275\u0275advance"](3),c["\u0275\u0275textInterpolate"](c["\u0275\u0275pipeBind1"](25,18,"Times")),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("ngModel",t.modules.times),c["\u0275\u0275advance"](3),c["\u0275\u0275textInterpolate"](c["\u0275\u0275pipeBind1"](30,20,"Projects")),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("ngModel",t.modules.projects))},directives:[a.IonHeader,a.IonToolbar,a.IonButtons,a.IonBackButton,a.IonBackButtonDelegate,a.IonTitle,a.IonContent,a.IonList,a.IonListHeader,a.IonItem,a.IonLabel,a.IonCheckbox,a.BooleanValueAccessor,i.NgControlStatus,i.NgModel],pipes:[p.c],styles:[""]}),e})()}];let g=(()=>{class e{}return e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.i.forChild(h)],r.i]}),e})(),f=(()=>{class e{}return e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.CommonModule,i.FormsModule,a.IonicModule,p.b,g]]}),e})()}}]);