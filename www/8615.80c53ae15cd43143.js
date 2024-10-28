"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8615],{8615:(j,m,s)=>{s.r(m),s.d(m,{NotificationSettingsPageModule:()=>P});var T=s(177),f=s(9417),g=s(4742),u=s(3955),N=s(3871),d=s(467),I=s(5083),k=s(1413),y=s(152),r=s(8),e=s(6996),_=s(9893),M=s(5217);const{LocalNotifications:C}=I.ry,b=[{path:"",component:(()=>{var i;class c{constructor(n,t,o){this.utils=n,this.storage=t,this.translateService=o,this.time=r.zY.NOTIFICATION_TIME,this.weekdays=r.zY.NOTIFICATION_WEEKDAYS,this.notificationSubject=new k.B,this.init(),this.notificationSubject.pipe((0,y.B)(2e3)).subscribe(()=>this.handleNotificationChanges())}init(){var n=this;return(0,d.A)(function*(){n.time=yield n.storage.getString(r.O3.SETTINGS_NOTIFICATIONS_TIME,r.zY.NOTIFICATION_TIME),n.weekdays=JSON.parse(yield n.storage.getString(r.O3.SETTINGS_NOTIFICATIONS_WEEKDAYS,JSON.stringify(r.zY.NOTIFICATION_WEEKDAYS)))})()}storeConfiguration(){var n=this;return(0,d.A)(function*(){yield n.storage.setItem(r.O3.SETTINGS_NOTIFICATIONS_TIME,n.time),yield n.storage.setItem(r.O3.SETTINGS_NOTIFICATIONS_WEEKDAYS,JSON.stringify(n.weekdays)),n.utils.showToast("Updated")})()}cancelNotifications(){return(0,d.A)(function*(){const n=yield C.getPending();C.cancel(n)})()}scheduleNotifications(){var n=this;return(0,d.A)(function*(){const t=parseInt(n.time.split(":")[0],10),o=parseInt(n.time.split(":")[1],10),a=[];let S=1;const F=yield n.translateService.get("BexTrack").toPromise(),R=yield n.translateService.get("Did you track your time for today?").toPromise();for(const h of Object.keys(n.weekdays))if(n.weekdays[h]){const v=parseInt(h.substring(1),10);a.push({id:S,title:F,text:R,foreground:!0,trigger:{every:{weekday:v,hour:t,minute:o}}}),S++}if(a.length>0)try{cordova.plugins.notification.local.schedule(a)}catch(h){console.error("Schedule Notifications",h)}})()}notificationsChanged(){this.notificationSubject.next()}handleNotificationChanges(){var n=this;return(0,d.A)(function*(){n.utils.requestNotificationPermission(),yield n.storeConfiguration(),yield n.cancelNotifications(),n.scheduleNotifications()})()}}return(i=c).\u0275fac=function(n){return new(n||i)(e.rXU(_.T),e.rXU(M.n),e.rXU(u.c$))},i.\u0275cmp=e.VBU({type:i,selectors:[["app-notification-settings"]],decls:52,vars:38,consts:[["color","primary"],["slot","start"],["mode","md","defaultHref","/tabs/settings"],["displayFormat","HH:mm",3,"ngModel","ngModelChange","ionChange"],["slot","end",3,"ngModel","ngModelChange","ionChange"]],template:function(n,t){1&n&&(e.j41(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),e.nrm(3,"ion-back-button",2),e.k0s(),e.j41(4,"ion-title"),e.EFF(5),e.nI1(6,"translate"),e.k0s()()(),e.j41(7,"ion-content")(8,"ion-list")(9,"ion-list-header"),e.EFF(10),e.nI1(11,"translate"),e.k0s(),e.j41(12,"ion-item")(13,"ion-label"),e.EFF(14),e.nI1(15,"translate"),e.k0s(),e.j41(16,"ion-datetime",3),e.bIt("ngModelChange",function(a){return t.time=a})("ionChange",function(){return t.notificationsChanged()}),e.k0s()(),e.j41(17,"ion-item")(18,"ion-label"),e.EFF(19),e.nI1(20,"translate"),e.k0s(),e.j41(21,"ion-checkbox",4),e.bIt("ngModelChange",function(a){return t.weekdays.d1=a})("ionChange",function(){return t.notificationsChanged()}),e.k0s()(),e.j41(22,"ion-item")(23,"ion-label"),e.EFF(24),e.nI1(25,"translate"),e.k0s(),e.j41(26,"ion-checkbox",4),e.bIt("ngModelChange",function(a){return t.weekdays.d2=a})("ionChange",function(){return t.notificationsChanged()}),e.k0s()(),e.j41(27,"ion-item")(28,"ion-label"),e.EFF(29),e.nI1(30,"translate"),e.k0s(),e.j41(31,"ion-checkbox",4),e.bIt("ngModelChange",function(a){return t.weekdays.d3=a})("ionChange",function(){return t.notificationsChanged()}),e.k0s()(),e.j41(32,"ion-item")(33,"ion-label"),e.EFF(34),e.nI1(35,"translate"),e.k0s(),e.j41(36,"ion-checkbox",4),e.bIt("ngModelChange",function(a){return t.weekdays.d4=a})("ionChange",function(){return t.notificationsChanged()}),e.k0s()(),e.j41(37,"ion-item")(38,"ion-label"),e.EFF(39),e.nI1(40,"translate"),e.k0s(),e.j41(41,"ion-checkbox",4),e.bIt("ngModelChange",function(a){return t.weekdays.d5=a})("ionChange",function(){return t.notificationsChanged()}),e.k0s()(),e.j41(42,"ion-item")(43,"ion-label"),e.EFF(44),e.nI1(45,"translate"),e.k0s(),e.j41(46,"ion-checkbox",4),e.bIt("ngModelChange",function(a){return t.weekdays.d6=a})("ionChange",function(){return t.notificationsChanged()}),e.k0s()(),e.j41(47,"ion-item")(48,"ion-label"),e.EFF(49),e.nI1(50,"translate"),e.k0s(),e.j41(51,"ion-checkbox",4),e.bIt("ngModelChange",function(a){return t.weekdays.d0=a})("ionChange",function(){return t.notificationsChanged()}),e.k0s()()()()),2&n&&(e.R7$(5),e.SpI(" ",e.bMT(6,18,"Notification settings")," "),e.R7$(5),e.JRh(e.bMT(11,20,"Time tracking reminder")),e.R7$(4),e.JRh(e.bMT(15,22,"Reminder time")),e.R7$(2),e.Y8G("ngModel",t.time),e.R7$(3),e.JRh(e.bMT(20,24,"Monday")),e.R7$(2),e.Y8G("ngModel",t.weekdays.d1),e.R7$(3),e.JRh(e.bMT(25,26,"Tuesday")),e.R7$(2),e.Y8G("ngModel",t.weekdays.d2),e.R7$(3),e.JRh(e.bMT(30,28,"Wednesday")),e.R7$(2),e.Y8G("ngModel",t.weekdays.d3),e.R7$(3),e.JRh(e.bMT(35,30,"Thursday")),e.R7$(2),e.Y8G("ngModel",t.weekdays.d4),e.R7$(3),e.JRh(e.bMT(40,32,"Friday")),e.R7$(2),e.Y8G("ngModel",t.weekdays.d5),e.R7$(3),e.JRh(e.bMT(45,34,"Saturday")),e.R7$(2),e.Y8G("ngModel",t.weekdays.d6),e.R7$(3),e.JRh(e.bMT(50,36,"Sunday")),e.R7$(2),e.Y8G("ngModel",t.weekdays.d0))},dependencies:[f.BC,f.vS,g.QW,g.eY,g.W9,g.A9,g.eU,g.uz,g.he,g.nf,g.AF,g.BC,g.ai,g.hB,g.Je,g.el,u.D9]}),c})()}];let p=(()=>{var i;class c{}return(i=c).\u0275fac=function(n){return new(n||i)},i.\u0275mod=e.$C({type:i}),i.\u0275inj=e.G2t({imports:[N.iI.forChild(b),N.iI]}),c})(),P=(()=>{var i;class c{}return(i=c).\u0275fac=function(n){return new(n||i)},i.\u0275mod=e.$C({type:i}),i.\u0275inj=e.G2t({imports:[T.MD,f.YN,g.bv,u.h,p]}),c})()}}]);