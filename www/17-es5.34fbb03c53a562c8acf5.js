!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{BXpC:function(t,o,r){"use strict";r.r(o),r.d(o,"EndSessionPageModule",(function(){return m}));var i,c,a=r("ofXK"),s=r("3Pt+"),u=r("tyNb"),l=r("TEn/"),d=r("mrSG"),f=r("fXoL"),p=r("zEhZ"),h=r("wTvH"),v=[{path:"",component:(i=function(){function t(n,o,r,i){e(this,t),this.auth=n,this.navCtrl=o,this.router=r,this.storageBackend=i}var o,r,i;return o=t,(r=[{key:"ngOnInit",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.auth.handleCallback(window.location.origin+this.router.url),e.next=3,this.storageBackend.clear();case 3:this.navCtrl.navigateRoot("login");case 4:case"end":return e.stop()}}),e,this)})))}}])&&n(o.prototype,r),i&&n(o,i),t}(),i.\u0275fac=function(e){return new(e||i)(f["\u0275\u0275directiveInject"](p.AuthService),f["\u0275\u0275directiveInject"](l.NavController),f["\u0275\u0275directiveInject"](u.g),f["\u0275\u0275directiveInject"](h.StorageBackend))},i.\u0275cmp=f["\u0275\u0275defineComponent"]({type:i,selectors:[["app-end-session"]],decls:2,vars:0,consts:[["color","primary"],["color","secondary",2,"position","absolute","left","40%","top","40%","width","20%","height","20%"]],template:function(e,n){1&e&&(f["\u0275\u0275elementStart"](0,"ion-content",0),f["\u0275\u0275element"](1,"ion-spinner",1),f["\u0275\u0275elementEnd"]())},directives:[l.IonContent,l.IonSpinner],styles:[""]}),i)}],m=((c=function n(){e(this,n)}).\u0275mod=f["\u0275\u0275defineNgModule"]({type:c}),c.\u0275inj=f["\u0275\u0275defineInjector"]({factory:function(e){return new(e||c)},imports:[[a.CommonModule,s.FormsModule,l.IonicModule,u.i.forChild(v)]]}),c)}}])}();