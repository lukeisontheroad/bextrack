"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5189],{5189:(S,g,i)=>{i.r(g),i.d(g,{LoginPageModule:()=>P});var h=i(177),v=i(9417),d=i(3871),e=i(4742),u=i(3955),m=i(467),c=i(5154),n=i(6996),f=i(2872);let L=(()=>{var o;class s{constructor(t,r,l){this.auth=t,this.navCtrl=r,this.authService=l}ngOnInit(){this.observer=this.auth.addActionListener(t=>this.onSignInSuccess(t))}ngOnDestroy(){this.auth.removeActionObserver(this.observer)}onSignInSuccess(t){this.action=t,(t.action===c.AuthActions.SignInSuccess||t.action===c.AuthActions.LoadTokenFromStorageSuccess)&&this.navCtrl.navigateRoot("loading")}signIn(){this.auth.signIn()}signOut(){var t=this;return(0,m.A)(function*(){yield t.authService.signOut()})()}}return(o=s).\u0275fac=function(t){return new(t||o)(n.rXU(c.AuthService),n.rXU(f.q9),n.rXU(c.AuthService))},o.\u0275cmp=n.VBU({type:o,selectors:[["app-login"]],decls:15,vars:6,consts:[["color","primary"],[1,"fullheight","xc"],["size","12",1,"ion-text-center"],["src","assets/icon/icon.png",2,"width","200px"],["color","secondary",3,"click"],["fill","outline","color","secondary",3,"click"]],template:function(t,r){1&t&&(n.j41(0,"ion-content",0)(1,"div",1)(2,"ion-grid")(3,"ion-row")(4,"ion-col",2),n.nrm(5,"img",3),n.k0s()(),n.j41(6,"ion-row")(7,"ion-col",2)(8,"ion-button",4),n.bIt("click",function(){return r.signIn()}),n.EFF(9),n.nI1(10,"translate"),n.k0s()(),n.j41(11,"ion-col",2)(12,"ion-button",5),n.bIt("click",function(){return r.signOut()}),n.EFF(13),n.nI1(14,"translate"),n.k0s()()()()()()),2&t&&(n.R7$(9),n.JRh(n.bMT(10,2,"Sign in")),n.R7$(4),n.JRh(n.bMT(14,4,"Sign out")))},dependencies:[e.Jm,e.hU,e.W9,e.lO,e.ln,u.D9],styles:[".fullheight[_ngcontent-%COMP%]{height:100%}.xc[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}"]}),s})(),P=(()=>{var o;class s{}return(o=s).\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.$C({type:o}),o.\u0275inj=n.G2t({imports:[h.MD,v.YN,e.bv,u.h,d.iI.forChild([{path:"",component:L}])]}),s})()}}]);