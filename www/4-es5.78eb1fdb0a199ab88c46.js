!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{EWb5:function(n,i,o){"use strict";o.r(i),o.d(i,"ContactsPageModule",(function(){return N}));var a=o("ofXK"),r=o("3Pt+"),l=o("TEn/"),c=o("tyNb"),s=o("mrSG"),m=o("TzAO"),d=o("fXoL"),p=o("oZWX"),u=o("HPR3"),f=o("sYmb");function v(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"div"),d["\u0275\u0275elementStart"](1,"ion-item"),d["\u0275\u0275elementStart"](2,"ion-avatar",6),d["\u0275\u0275element"](3,"ion-skeleton-text",7),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](4,"ion-label"),d["\u0275\u0275element"](5,"ion-skeleton-text",8),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]())}function h(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"ion-list"),d["\u0275\u0275template"](1,v,6,0,"div",5),d["\u0275\u0275elementEnd"]()),2&e){var n=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngForOf",n.skeletons)}}function x(e,t){1&e&&d["\u0275\u0275element"](0,"ion-icon",13)}function g(e,t){1&e&&d["\u0275\u0275element"](0,"ion-icon",14)}function b(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"span"),d["\u0275\u0275text"](1,","),d["\u0275\u0275elementEnd"]())}function I(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"p"),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"]()),2&e){var n=d["\u0275\u0275nextContext"]().$implicit;d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate"](n.phone_mobile)}}function w(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"p"),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"]()),2&e){var n=d["\u0275\u0275nextContext"]().$implicit;d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate"](n.phone_fixed)}}function y(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"p"),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"]()),2&e){var n=d["\u0275\u0275nextContext"]().$implicit;d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate"](n.mail)}}function S(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"p"),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"]()),2&e){var n=d["\u0275\u0275nextContext"]().$implicit;d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate"](n.address)}}function _(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"p"),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"]()),2&e){var n=d["\u0275\u0275nextContext"]().$implicit;d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate2"]("",n.postcode," ",n.city,"")}}function k(e,t){if(1&e){var n=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"ion-item-sliding"),d["\u0275\u0275elementStart"](1,"ion-item"),d["\u0275\u0275template"](2,x,1,0,"ion-icon",9),d["\u0275\u0275template"](3,g,1,0,"ion-icon",10),d["\u0275\u0275elementStart"](4,"ion-label"),d["\u0275\u0275elementStart"](5,"h2"),d["\u0275\u0275text"](6),d["\u0275\u0275template"](7,b,2,0,"span",2),d["\u0275\u0275text"](8),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](9,I,2,1,"p",2),d["\u0275\u0275template"](10,w,2,1,"p",2),d["\u0275\u0275template"](11,y,2,1,"p",2),d["\u0275\u0275template"](12,S,2,1,"p",2),d["\u0275\u0275template"](13,_,2,2,"p",2),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](14,"ion-item-options",11),d["\u0275\u0275elementStart"](15,"ion-item-option",12),d["\u0275\u0275listener"]("click",(function(){d["\u0275\u0275restoreView"](n);var e=t.$implicit;return d["\u0275\u0275nextContext"]().export(e)})),d["\u0275\u0275text"](16),d["\u0275\u0275pipe"](17,"translate"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()}if(2&e){var i=t.$implicit;d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("ngIf",1==i.contact_type_id),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",1!=i.contact_type_id),d["\u0275\u0275advance"](3),d["\u0275\u0275textInterpolate"](null==i?null:i.name_1),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",i.name_2),d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate1"](" ",null==i?null:i.name_2,""),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",i.phone_mobile),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",i.phone_fixed),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",i.mail),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",i.address),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",i.postcode||i.city),d["\u0275\u0275advance"](3),d["\u0275\u0275textInterpolate"](d["\u0275\u0275pipeBind1"](17,11,"Export"))}}var C,E,O,j=[{path:"",component:(C=function(){function n(t,i,o){e(this,n),this.nativeContacts=t,this.apiService=i,this.utils=o,this.skeletons=new Array(12),this.loading=!0,this.contacts=[],this.filteredContacts=[]}var i,o,a;return i=n,(o=[{key:"ngOnInit",value:function(){this.init()}},{key:"init",value:function(){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.doRefresh(),this.apiService.projectsUpdated.subscribe((function(){return t.doRefresh()}));case 1:case"end":return e.stop()}}),e,this)})))}},{key:"doRefresh",value:function(e){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,this.apiService.getContacts(!0);case 3:this.contacts=t.sent,this.filteredContacts=this.contacts,e&&e.target.complete(),this.loading=!1;case 7:case"end":return t.stop()}}),t,this)})))}},{key:"onSearch",value:function(e){var t=e.detail.value.toLowerCase();this.filteredContacts=""===t?this.contacts:this.contacts.filter((function(e){return-1!=e.name_1.toLowerCase().indexOf(t)||e.name_2&&-1!=e.name_2.toLowerCase().indexOf(t)}))}},{key:"getContact",value:function(e){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){return Object(s.a)(n,void 0,void 0,regeneratorRuntime.mark((function n(){var i,o,a,r,l,c,s,d;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:a=this.nativeContacts.create(),r=!1,l=[["emails","mail"],["phoneNumbers","phone_mobile"],["phoneNumbers","phone_fixed"],["displayName","calculated_name"]],c=0;case 2:if(!(c<l.length)){n.next=9;break}if("displayName"!==l[l[c][0]]){n.next=5;break}return n.abrupt("return",void t({isUpdate:r,contact:a}));case 5:null!==e[l[c][1]]&&e[l[c][1]].length>0&&(c=l.length+1);case 6:c++,n.next=2;break;case 9:s=new m.c,d=[],e.calculated_name=((null===(i=null==e?void 0:e.name_2)||void 0===i?void 0:i.trim())+" "+(null===(o=null==e?void 0:e.name_1)||void 0===o?void 0:o.trim())).trim(),c=0;case 11:if(!(c<l.length)){n.next=25;break}if(n.t0=null!==e[l[c][1]]&&e[l[c][1]].length>0,!n.t0){n.next=22;break}return console.log("set filter to "+e[l[c][1]]),s.filter=e[l[c][1]],s.multiple=!1,n.next=19,this.nativeContacts.find([l[c][0]],s);case 19:d=n.sent,console.log("result",d),1===d.length&&(r=!0,a=d[0],c=l.length+1);case 22:c++,n.next=11;break;case 25:t({isUpdate:r,contact:a});case 26:case"end":return n.stop()}}),n,this)})))})));case 1:case"end":return t.stop()}}),t)})))}},{key:"export",value:function(e){var t,n;return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function i(){var o,a,r,l,c=this;return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,this.getContact(e);case 2:o=i.sent,a=o.contact,console.log("name",e),a.name=new m.d(null,null===(t=null==e?void 0:e.name_1)||void 0===t?void 0:t.trim(),null===(n=null==e?void 0:e.name_2)||void 0===n?void 0:n.trim()),a.addresses=[new m.a(!0,"work",null,e.address,e.city,null,e.postcode+"")],a.note=e.remarks,a.birthday=e.birthday,r=[],e.phone_mobile&&r.push(new m.b("mobile",e.phone_mobile)),e.phone_fixed&&r.push(new m.b("work",e.phone_fixed)),e.phone_fixed_second&&r.push(new m.b("home",e.phone_fixed_second)),r.length>0&&(a.phoneNumbers=r),l=[],e.mail&&l.push(new m.b("work",e.mail)),e.mail_second&&l.push(new m.b("private",e.mail_second)),l.length>0&&(a.emails=l),a.save().then((function(){c.utils.showToast(o.isUpdate?"Updated":"Created")}),(function(e){c.utils.showToast("Export failed")}));case 9:case"end":return i.stop()}}),i,this)})))}}])&&t(i.prototype,o),a&&t(i,a),n}(),C.\u0275fac=function(e){return new(e||C)(d["\u0275\u0275directiveInject"](m.e),d["\u0275\u0275directiveInject"](p.a),d["\u0275\u0275directiveInject"](u.a))},C.\u0275cmp=d["\u0275\u0275defineComponent"]({type:C,selectors:[["app-contacts"]],decls:11,vars:5,consts:[["color","primary"],["debounce","500",3,"ionChange"],[4,"ngIf"],["approxItemHeight","40px",3,"items"],[4,"virtualItem"],[4,"ngFor","ngForOf"],["slot","start"],["animated",""],["animated","",2,"width","60%"],["slot","start","name","business-outline",4,"ngIf"],["slot","start","name","person-outline",4,"ngIf"],["side","end"],[3,"click"],["slot","start","name","business-outline"],["slot","start","name","person-outline"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"ion-header",0),d["\u0275\u0275elementStart"](1,"ion-toolbar",0),d["\u0275\u0275elementStart"](2,"ion-title"),d["\u0275\u0275text"](3),d["\u0275\u0275pipe"](4,"translate"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](5,"ion-content"),d["\u0275\u0275elementStart"](6,"ion-searchbar",1),d["\u0275\u0275listener"]("ionChange",(function(e){return t.onSearch(e)})),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](7,h,2,1,"ion-list",2),d["\u0275\u0275elementStart"](8,"ion-list"),d["\u0275\u0275elementStart"](9,"ion-virtual-scroll",3),d["\u0275\u0275template"](10,k,18,13,"ion-item-sliding",4),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275advance"](3),d["\u0275\u0275textInterpolate1"](" ",d["\u0275\u0275pipeBind1"](4,3,"Contacts")," "),d["\u0275\u0275advance"](4),d["\u0275\u0275property"]("ngIf",t.loading),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("items",t.filteredContacts))},directives:[l.IonHeader,l.IonToolbar,l.IonTitle,l.IonContent,l.IonSearchbar,l.TextValueAccessor,a.NgIf,l.IonList,l.IonVirtualScroll,l.VirtualItem,a.NgForOf,l.IonItem,l.IonAvatar,l.IonSkeletonText,l.IonLabel,l.IonItemSliding,l.IonItemOptions,l.IonItemOption,l.IonIcon],pipes:[f.c],styles:[""]}),C)}],R=((O=function t(){e(this,t)}).\u0275mod=d["\u0275\u0275defineNgModule"]({type:O}),O.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(e){return new(e||O)},imports:[[c.i.forChild(j)],c.i]}),O),N=((E=function t(){e(this,t)}).\u0275mod=d["\u0275\u0275defineNgModule"]({type:E}),E.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(e){return new(e||E)},imports:[[a.CommonModule,r.FormsModule,l.IonicModule,f.b,R]]}),E)}}])}();