"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2769],{2769:(S,a,o)=>{o.r(a),o.d(a,{EndSessionPageModule:()=>h});var l=o(6895),c=o(4006),r=o(2835),s=o(8058),u=o(5861),t=o(8274),g=o(3790),m=o(3098);const v=[{path:"",component:(()=>{class n{constructor(e,d,f,p){this.auth=e,this.navCtrl=d,this.router=f,this.storageBackend=p}ngOnInit(){var e=this;return(0,u.Z)(function*(){e.auth.handleCallback(window.location.origin+e.router.url),yield e.storageBackend.clear(),e.navCtrl.navigateRoot("login")})()}}return n.\u0275fac=function(e){return new(e||n)(t.\u0275\u0275directiveInject(g.AuthService),t.\u0275\u0275directiveInject(s.NavController),t.\u0275\u0275directiveInject(r.F0),t.\u0275\u0275directiveInject(m.StorageBackend))},n.\u0275cmp=t.\u0275\u0275defineComponent({type:n,selectors:[["app-end-session"]],decls:2,vars:0,consts:[["color","primary"],["color","secondary",2,"position","absolute","left","40%","top","40%","width","20%","height","20%"]],template:function(e,d){1&e&&(t.\u0275\u0275elementStart(0,"ion-content",0),t.\u0275\u0275element(1,"ion-spinner",1),t.\u0275\u0275elementEnd())},dependencies:[s.IonContent,s.IonSpinner]}),n})()}];let h=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=t.\u0275\u0275defineInjector({imports:[l.CommonModule,c.FormsModule,s.IonicModule,r.Bz.forChild(v)]}),n})()}}]);