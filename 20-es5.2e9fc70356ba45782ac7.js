!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{F4UR:function(t,i,o){"use strict";o.r(i),o.d(i,"LoginPageModule",(function(){return v}));var r,c,a=o("ofXK"),l=o("3Pt+"),s=o("TEn/"),u=o("mrSG"),d=o("zEhZ"),m=o("fXoL"),f=o("sYmb"),h=((r=function(){function t(n,i,o){e(this,t),this.auth=n,this.navCtrl=i,this.authService=o}var i,o,r;return i=t,(o=[{key:"ngOnInit",value:function(){var e=this;this.observer=this.auth.addActionListener((function(n){return e.onSignInSuccess(n)}))}},{key:"ngOnDestroy",value:function(){this.auth.removeActionObserver(this.observer)}},{key:"onSignInSuccess",value:function(e){this.action=e,e.action!==d.AuthActions.SignInSuccess&&e.action!==d.AuthActions.LoadTokenFromStorageSuccess||this.navCtrl.navigateRoot("loading")}},{key:"signIn",value:function(){this.auth.signIn()}},{key:"signOut",value:function(){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.authService.signOut();case 2:case"end":return e.stop()}}),e,this)})))}}])&&n(i.prototype,o),r&&n(i,r),t}()).\u0275fac=function(e){return new(e||r)(m["\u0275\u0275directiveInject"](d.AuthService),m["\u0275\u0275directiveInject"](s.NavController),m["\u0275\u0275directiveInject"](d.AuthService))},r.\u0275cmp=m["\u0275\u0275defineComponent"]({type:r,selectors:[["app-login"]],decls:15,vars:6,consts:[["color","primary"],[1,"fullheight","xc"],["size","12",1,"ion-text-center"],["src","assets/icon/icon.png",2,"width","200px"],["color","secondary",3,"click"],["fill","outline","color","secondary",3,"click"]],template:function(e,n){1&e&&(m["\u0275\u0275elementStart"](0,"ion-content",0),m["\u0275\u0275elementStart"](1,"div",1),m["\u0275\u0275elementStart"](2,"ion-grid"),m["\u0275\u0275elementStart"](3,"ion-row"),m["\u0275\u0275elementStart"](4,"ion-col",2),m["\u0275\u0275element"](5,"img",3),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](6,"ion-row"),m["\u0275\u0275elementStart"](7,"ion-col",2),m["\u0275\u0275elementStart"](8,"ion-button",4),m["\u0275\u0275listener"]("click",(function(){return n.signIn()})),m["\u0275\u0275text"](9),m["\u0275\u0275pipe"](10,"translate"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](11,"ion-col",2),m["\u0275\u0275elementStart"](12,"ion-button",5),m["\u0275\u0275listener"]("click",(function(){return n.signOut()})),m["\u0275\u0275text"](13),m["\u0275\u0275pipe"](14,"translate"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275advance"](9),m["\u0275\u0275textInterpolate"](m["\u0275\u0275pipeBind1"](10,2,"Sign in")),m["\u0275\u0275advance"](4),m["\u0275\u0275textInterpolate"](m["\u0275\u0275pipeBind1"](14,4,"Sign out")))},directives:[s.IonContent,s.IonGrid,s.IonRow,s.IonCol,s.IonButton],pipes:[f.c],styles:[".fullheight[_ngcontent-%COMP%]{height:100%}.xc[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}"]}),r),p=o("tyNb"),v=((c=function n(){e(this,n)}).\u0275mod=m["\u0275\u0275defineNgModule"]({type:c}),c.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(e){return new(e||c)},imports:[[a.CommonModule,l.FormsModule,s.IonicModule,f.b,p.i.forChild([{path:"",component:h}])]]}),c)}}])}();