"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6658],{6658:($,c,h)=>{h.r(c),h.d(c,{DashboardPageModule:()=>w});var d=h(177),m=h(9417),l=h(4742),u=h(3955),g=h(8518),p=h(3871),f=h(467),t=h(6996),b=h(6929),D=h(9893);const k=["width"];function R(a,r){if(1&a&&(t.j41(0,"h1"),t.EFF(1),t.nI1(2,"number"),t.k0s()),2&a){const s=t.XpG();t.R7$(1),t.JRh(t.i5U(2,1,s.totalHoursLastWeek,"1.0-2"))}}function M(a,r){1&a&&t.nrm(0,"ion-skeleton-text",9)}function j(a,r){if(1&a&&(t.j41(0,"h1"),t.EFF(1),t.nI1(2,"number"),t.k0s()),2&a){const s=t.XpG();t.R7$(1),t.SpI("",t.i5U(2,1,s.chargeabilityLastWeek,"1.0-0"),"%")}}function P(a,r){1&a&&t.nrm(0,"ion-skeleton-text",9)}function F(a,r){if(1&a&&(t.j41(0,"h1"),t.EFF(1),t.nI1(2,"number"),t.k0s()),2&a){const s=t.XpG();t.R7$(1),t.JRh(t.i5U(2,1,s.totalHoursLastMonth,"1.0-2"))}}function I(a,r){1&a&&t.nrm(0,"ion-skeleton-text",9)}function y(a,r){if(1&a&&(t.j41(0,"h1"),t.EFF(1),t.nI1(2,"number"),t.k0s()),2&a){const s=t.XpG();t.R7$(1),t.SpI("",t.i5U(2,1,s.chargeabilityLastMonth,"1.0-0"),"%")}}function L(a,r){1&a&&t.nrm(0,"ion-skeleton-text",9)}function v(a,r){if(1&a&&(t.j41(0,"div",10),t.nrm(1,"ngx-charts-pie-chart",11),t.k0s()),2&a){const s=t.XpG();t.R7$(1),t.Y8G("view",s.view)("scheme",s.colorScheme)("results",s.data)("gradient",s.gradient)("legend",s.showLegend)("legendPosition",s.legendPosition)("labels",s.showLabels)("doughnut",s.isDoughnut)}}function x(a,r){1&a&&(t.j41(0,"h2"),t.EFF(1),t.nI1(2,"translate"),t.k0s()),2&a&&(t.R7$(1),t.JRh(t.bMT(2,1,"No data available")))}const E=[{path:"",component:(()=>{var a;class r{constructor(e,o){this.apiService=e,this.utils=o,this.view=null,this.timesheets=[],this.timesheetsLastWeek=[],this.timesheetsLastMonth=[],this.lastWeek=new Date(Date.now()-6048e5),this.lastMonth=new Date(Date.now()-2592e6),this.totalHoursLastWeek=0,this.payedHoursLastWeek=0,this.chargeabilityLastWeek=0,this.totalHoursLastMonth=0,this.payedHoursLastMonth=0,this.chargeabilityLastMonth=0,this.data=[],this.loading=!1,this.gradient=!1,this.showLegend=!0,this.showLabels=!1,this.isDoughnut=!1,this.legendPosition="left",this.colorScheme={domain:["#093948","#A2C003","#0085BA","#DCC521","#DB7C00","#C81919"]},this.projects={},this.doRefresh(),this.apiService.timesUpdated.subscribe(()=>this.doRefresh())}ionViewDidEnter(){const e=this.widthElement.el.scrollWidth;this.view=[e,e]}doRefresh(e){var o=this;return(0,f.A)(function*(){o.loading=!0,o.data=[],setTimeout(()=>{o.calculateStatistics(),e&&e.target.complete(),o.loading=!1},1e3)})()}calculateStatistics(){var e=this;return(0,f.A)(function*(){e.timesheets=yield e.apiService.getMyTimesheets(),e.timesheetsLastWeek=e.timesheets.filter(n=>new Date(n.date)>=e.lastWeek),e.timesheetsLastMonth=e.timesheets.filter(n=>new Date(n.date)>=e.lastMonth),e.totalHoursLastWeek=e.timesheetsLastWeek.map(n=>e.utils.parseDuration(n.duration)).reduce((n,i)=>n+i,0),e.payedHoursLastWeek=e.timesheetsLastWeek.filter(n=>n.allowable_bill).map(n=>e.utils.parseDuration(n.duration)).reduce((n,i)=>n+i,0),e.chargeabilityLastWeek=e.payedHoursLastWeek>0?e.payedHoursLastWeek/e.totalHoursLastWeek*100:0,e.totalHoursLastMonth=e.timesheetsLastMonth.map(n=>e.utils.parseDuration(n.duration)).reduce((n,i)=>n+i,0),e.payedHoursLastMonth=e.timesheetsLastMonth.filter(n=>n.allowable_bill).map(n=>e.utils.parseDuration(n.duration)).reduce((n,i)=>n+i,0),e.chargeabilityLastMonth=e.payedHoursLastMonth>0?e.payedHoursLastMonth/e.totalHoursLastMonth*100:0;for(let n=0;n<e.timesheetsLastMonth.length;n++){const i=e.timesheetsLastMonth[n];i.project?i.project.name in e.projects?e.projects[i.project.name]+=e.utils.parseDuration(i.duration):e.projects[i.project.name]=e.utils.parseDuration(i.duration):"Unknown"in e.projects?e.projects.Unknown+=e.utils.parseDuration(i.duration):e.projects.Unknown=e.utils.parseDuration(i.duration)}const o=[];for(const[n,i]of Object.entries(e.projects))o.push({name:n,value:i});e.data=o})()}}return(a=r).\u0275fac=function(e){return new(e||a)(t.rXU(b.G),t.rXU(D.T))},a.\u0275cmp=t.VBU({type:a,selectors:[["app-dashboard"]],viewQuery:function(e,o){if(1&e&&t.GBs(k,7),2&e){let n;t.mGM(n=t.lsd())&&(o.widthElement=n.first)}},decls:79,vars:46,consts:[["color","primary"],["slot","fixed",3,"ionRefresh"],["size","6","size-md","3"],[4,"ngIf"],["animated","",4,"ngIf"],["size","12","size-md","6","size-lg","3"],["width",""],["id","pie-chart-parent",4,"ngIf"],["expand","full","onclick","window.open('https://feedback.bextrack.com', '_system', 'location=yes'); return false;"],["animated",""],["id","pie-chart-parent"],[3,"view","scheme","results","gradient","legend","legendPosition","labels","doughnut"]],template:function(e,o){1&e&&(t.j41(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-title"),t.EFF(3),t.nI1(4,"translate"),t.k0s()()(),t.j41(5,"ion-content")(6,"ion-refresher",1),t.bIt("ionRefresh",function(i){return o.doRefresh(i)}),t.nrm(7,"ion-refresher-content"),t.k0s(),t.j41(8,"ion-grid")(9,"ion-row")(10,"ion-col",2)(11,"ion-card")(12,"ion-card-header")(13,"ion-card-subtitle"),t.EFF(14),t.nI1(15,"translate"),t.k0s(),t.j41(16,"ion-card-title"),t.EFF(17),t.nI1(18,"translate"),t.k0s()(),t.j41(19,"ion-card-content"),t.DNE(20,R,3,4,"h1",3),t.DNE(21,M,1,0,"ion-skeleton-text",4),t.k0s()()(),t.j41(22,"ion-col",2)(23,"ion-card")(24,"ion-card-header")(25,"ion-card-subtitle"),t.EFF(26),t.nI1(27,"translate"),t.k0s(),t.j41(28,"ion-card-title"),t.EFF(29),t.nI1(30,"translate"),t.k0s()(),t.j41(31,"ion-card-content"),t.DNE(32,j,3,4,"h1",3),t.DNE(33,P,1,0,"ion-skeleton-text",4),t.k0s()()(),t.j41(34,"ion-col",2)(35,"ion-card")(36,"ion-card-header")(37,"ion-card-subtitle"),t.EFF(38),t.nI1(39,"translate"),t.k0s(),t.j41(40,"ion-card-title"),t.EFF(41),t.nI1(42,"translate"),t.k0s()(),t.j41(43,"ion-card-content"),t.DNE(44,F,3,4,"h1",3),t.DNE(45,I,1,0,"ion-skeleton-text",4),t.k0s()()(),t.j41(46,"ion-col",2)(47,"ion-card")(48,"ion-card-header")(49,"ion-card-subtitle"),t.EFF(50),t.nI1(51,"translate"),t.k0s(),t.j41(52,"ion-card-title"),t.EFF(53),t.nI1(54,"translate"),t.k0s()(),t.j41(55,"ion-card-content"),t.DNE(56,y,3,4,"h1",3),t.DNE(57,L,1,0,"ion-skeleton-text",4),t.k0s()()(),t.j41(58,"ion-col",5)(59,"ion-card")(60,"ion-card-header")(61,"ion-card-title",null,6),t.EFF(63),t.nI1(64,"translate"),t.k0s()(),t.j41(65,"ion-card-content"),t.DNE(66,v,2,8,"div",7),t.DNE(67,x,3,3,"h2",3),t.k0s()()(),t.j41(68,"ion-col",5)(69,"ion-card")(70,"ion-card-header")(71,"ion-card-title",null,6),t.EFF(73),t.nI1(74,"translate"),t.k0s()(),t.j41(75,"ion-card-content")(76,"ion-button",8),t.EFF(77),t.nI1(78,"translate"),t.k0s()()()()()()()),2&e&&(t.R7$(3),t.SpI(" ",t.bMT(4,22,"Dashboard")," "),t.R7$(11),t.JRh(t.bMT(15,24,"7 days")),t.R7$(3),t.JRh(t.bMT(18,26,"Hours")),t.R7$(3),t.Y8G("ngIf",!o.loading),t.R7$(1),t.Y8G("ngIf",o.loading),t.R7$(5),t.JRh(t.bMT(27,28,"7 days")),t.R7$(3),t.JRh(t.bMT(30,30,"Billable")),t.R7$(3),t.Y8G("ngIf",!o.loading),t.R7$(1),t.Y8G("ngIf",o.loading),t.R7$(5),t.JRh(t.bMT(39,32,"30 days")),t.R7$(3),t.JRh(t.bMT(42,34,"Hours")),t.R7$(3),t.Y8G("ngIf",!o.loading),t.R7$(1),t.Y8G("ngIf",o.loading),t.R7$(5),t.JRh(t.bMT(51,36,"30 days")),t.R7$(3),t.JRh(t.bMT(54,38,"Billable")),t.R7$(3),t.Y8G("ngIf",!o.loading),t.R7$(1),t.Y8G("ngIf",o.loading),t.R7$(6),t.JRh(t.bMT(64,40,"Hours by Project")),t.R7$(3),t.Y8G("ngIf",o.view&&o.data.length>0),t.R7$(1),t.Y8G("ngIf",0===o.data.length),t.R7$(6),t.JRh(t.bMT(74,42,"missing-a-report")),t.R7$(4),t.JRh(t.bMT(78,44,"Provide Feedback")))},dependencies:[d.bT,l.Jm,l.b_,l.I9,l.ME,l.HW,l.tN,l.hU,l.W9,l.lO,l.eU,l.To,l.Ki,l.ln,l.ds,l.BC,l.ai,g.km,d.QX,u.D9],styles:["h1[_ngcontent-%COMP%]{text-align:center;font-size:xx-large;color:#000;font-weight:700}#pie-chart-parent[_ngcontent-%COMP%]{display:grid;min-height:400px}@media (min-width: 820px){ion-grid[_ngcontent-%COMP%]{flex-direction:row-reverse}}ion-skeleton-text[_ngcontent-%COMP%]{width:50px;height:25px;margin:auto}ion-content[_ngcontent-%COMP%]{--padding-bottom: 0;--padding-end: 0;--padding-start: 0;--padding-top: 0}ion-card-title[_ngcontent-%COMP%]{font-size:24px;min-height:62px}"]}),r})()}];let T=(()=>{var a;class r{}return(a=r).\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.$C({type:a}),a.\u0275inj=t.G2t({imports:[p.iI.forChild(E),p.iI]}),r})(),w=(()=>{var a;class r{}return(a=r).\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.$C({type:a}),a.\u0275inj=t.G2t({imports:[d.MD,m.YN,l.bv,u.h,g.dV,T]}),r})()}}]);