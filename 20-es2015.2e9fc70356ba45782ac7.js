(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{F4UR:function(e,t,n){"use strict";n.r(t),n.d(t,"LoginPageModule",(function(){return m}));var i=n("ofXK"),o=n("3Pt+"),r=n("TEn/"),c=n("mrSG"),s=n("zEhZ"),l=n("fXoL"),a=n("sYmb");let u=(()=>{class e{constructor(e,t,n){this.auth=e,this.navCtrl=t,this.authService=n}ngOnInit(){this.observer=this.auth.addActionListener(e=>this.onSignInSuccess(e))}ngOnDestroy(){this.auth.removeActionObserver(this.observer)}onSignInSuccess(e){this.action=e,e.action!==s.AuthActions.SignInSuccess&&e.action!==s.AuthActions.LoadTokenFromStorageSuccess||this.navCtrl.navigateRoot("loading")}signIn(){this.auth.signIn()}signOut(){return Object(c.a)(this,void 0,void 0,(function*(){yield this.authService.signOut()}))}}return e.\u0275fac=function(t){return new(t||e)(l["\u0275\u0275directiveInject"](s.AuthService),l["\u0275\u0275directiveInject"](r.NavController),l["\u0275\u0275directiveInject"](s.AuthService))},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["app-login"]],decls:15,vars:6,consts:[["color","primary"],[1,"fullheight","xc"],["size","12",1,"ion-text-center"],["src","assets/icon/icon.png",2,"width","200px"],["color","secondary",3,"click"],["fill","outline","color","secondary",3,"click"]],template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"ion-content",0),l["\u0275\u0275elementStart"](1,"div",1),l["\u0275\u0275elementStart"](2,"ion-grid"),l["\u0275\u0275elementStart"](3,"ion-row"),l["\u0275\u0275elementStart"](4,"ion-col",2),l["\u0275\u0275element"](5,"img",3),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](6,"ion-row"),l["\u0275\u0275elementStart"](7,"ion-col",2),l["\u0275\u0275elementStart"](8,"ion-button",4),l["\u0275\u0275listener"]("click",(function(){return t.signIn()})),l["\u0275\u0275text"](9),l["\u0275\u0275pipe"](10,"translate"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](11,"ion-col",2),l["\u0275\u0275elementStart"](12,"ion-button",5),l["\u0275\u0275listener"]("click",(function(){return t.signOut()})),l["\u0275\u0275text"](13),l["\u0275\u0275pipe"](14,"translate"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275advance"](9),l["\u0275\u0275textInterpolate"](l["\u0275\u0275pipeBind1"](10,2,"Sign in")),l["\u0275\u0275advance"](4),l["\u0275\u0275textInterpolate"](l["\u0275\u0275pipeBind1"](14,4,"Sign out")))},directives:[r.IonContent,r.IonGrid,r.IonRow,r.IonCol,r.IonButton],pipes:[a.c],styles:[".fullheight[_ngcontent-%COMP%]{height:100%}.xc[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}"]}),e})();var d=n("tyNb");let m=(()=>{class e{}return e.\u0275mod=l["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.CommonModule,o.FormsModule,r.IonicModule,a.b,d.i.forChild([{path:"",component:u}])]]}),e})()}}]);