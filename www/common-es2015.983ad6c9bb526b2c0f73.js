(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2c9M":function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return c})),n.d(e,"e",(function(){return a}));const i={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:n})},notification(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:n})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},r=()=>{i.selection()},s=()=>{i.selectionStart()},o=()=>{i.selectionChanged()},a=()=>{i.selectionEnd()},c=t=>{i.impact(t)}},"4fRq":function(t,e){var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var i=new Uint8Array(16);t.exports=function(){return n(i),i}}else{var r=new Array(16);t.exports=function(){for(var t,e=0;e<16;e++)0==(3&e)&&(t=4294967296*Math.random()),r[e]=t>>>((3&e)<<3)&255;return r}}},"6i10":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));const i={bubbles:{dur:1e3,circles:9,fn:(t,e,n)=>{const i=t*e/n-t+"ms",r=2*Math.PI*e/n;return{r:5,style:{top:9*Math.sin(r)+"px",left:9*Math.cos(r)+"px","animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:(t,e,n)=>{const i=e/n,r=t*i-t+"ms",s=2*Math.PI*i;return{r:5,style:{top:9*Math.sin(s)+"px",left:9*Math.cos(s)+"px","animation-delay":r}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,e)=>({r:6,style:{left:9-9*e+"px","animation-delay":-110*e+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,e,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(t,e,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})}}},E2f4:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n("mrSG"),r=n("fXoL"),s=n("oZWX");let o=(()=>{class t{constructor(t){this.apiService=t,this.isInit=!1,this.prefix="_storage_"}init(){return Object(i.a)(this,void 0,void 0,(function*(){this.isInit||(this.prefix=(yield this.apiService.getUser()).id+this.prefix,this.isInit=!0)}))}removeItem(t){return new Promise((e,n)=>Object(i.a)(this,void 0,void 0,(function*(){yield this.init(),localStorage.removeItem(this.prefix+t),e()})))}setItem(t,e){return new Promise((n,r)=>Object(i.a)(this,void 0,void 0,(function*(){yield this.init(),localStorage.setItem(this.prefix+t,e),n()})))}getString(t,e=null){return new Promise((n,r)=>Object(i.a)(this,void 0,void 0,(function*(){yield this.init();let i=yield localStorage.getItem(this.prefix+t);n(null!=e&&null==i?e:i)})))}getDate(t,e=null){return new Promise((n,r)=>Object(i.a)(this,void 0,void 0,(function*(){yield this.init();let i=yield this.getString(t);n(null==i?e:new Date(i))})))}getNumber(t,e=null){return new Promise((n,r)=>Object(i.a)(this,void 0,void 0,(function*(){yield this.init();let i=yield this.getString(t);n(null!=e&&null==i?e:parseFloat(i))})))}getBoolean(t,e=null){return new Promise((n,r)=>Object(i.a)(this,void 0,void 0,(function*(){yield this.init();let i=yield this.getString(t);n(null!=e&&null==i?e:"true"===i)})))}}return t.\u0275fac=function(e){return new(e||t)(r["\u0275\u0275inject"](s.a))},t.\u0275prov=r["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},EcEN:function(t,e,n){var i=n("xDdU"),r=n("xk4V"),s=r;s.v1=i,s.v4=r,t.exports=s},I2ZF:function(t,e){for(var n=[],i=0;i<256;++i)n[i]=(i+256).toString(16).substr(1);t.exports=function(t,e){var i=e||0;return[n[t[i++]],n[t[i++]],n[t[i++]],n[t[i++]],"-",n[t[i++]],n[t[i++]],"-",n[t[i++]],n[t[i++]],"-",n[t[i++]],n[t[i++]],"-",n[t[i++]],n[t[i++]],n[t[i++]],n[t[i++]],n[t[i++]],n[t[i++]]].join("")}},NqGI:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return r}));const i=async(t,e,n,i,r)=>{if(t)return t.attachViewToDom(e,n,r,i);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const s="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n;return i&&i.forEach(t=>s.classList.add(t)),r&&Object.assign(s,r),e.appendChild(s),s.componentOnReady&&await s.componentOnReady(),s},r=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},SdGS:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var i=n("mrSG"),r=n("jtHE"),s=n("XNiG"),o=n("TCge"),a=n("fXoL"),c=n("E2f4");let u=(()=>{class t{constructor(t){this.storage=t,this.internalStopwatches=[],this.stopwatches=new r.a,this.currentStopwatch=new s.a,this.init()}init(){return Object(i.a)(this,void 0,void 0,(function*(){this.internalStopwatches=JSON.parse(yield this.storage.getString(o.b.STOPWATCHES,o.a.STOPWATCHES)),this.sendUpdate()}))}setCurrentStopwatch(t){this.currentStopwatch.next(t)}getCurrentStopwatch(){return this.currentStopwatch}sendUpdate(){this.internalStopwatches=this.internalStopwatches.sort((t,e)=>t.title>e.title?1:-1),this.stopwatches.next(this.internalStopwatches)}add(t){return Object(i.a)(this,void 0,void 0,(function*(){return new Promise(e=>Object(i.a)(this,void 0,void 0,(function*(){yield this.delete(t,!1),this.internalStopwatches.push(t),yield this.storage.setItem(o.b.STOPWATCHES,JSON.stringify(this.internalStopwatches)),this.sendUpdate(),e()})))}))}get(t){return Object(i.a)(this,void 0,void 0,(function*(){return new Promise(e=>Object(i.a)(this,void 0,void 0,(function*(){let n=this.internalStopwatches.filter(e=>e.id===t);if(1===n.length){let t=n[0];for(var i=0;i<o.b.STOPWATCHES_FIELDS.length;i++)t[o.b.STOPWATCHES_FIELDS[i]]=yield this.storage.getString(t.id+"_"+o.b.STOPWATCHES_FIELDS[i]);e(t)}else e(null)})))}))}delete(t,e=!0){return Object(i.a)(this,void 0,void 0,(function*(){return new Promise(n=>Object(i.a)(this,void 0,void 0,(function*(){if(this.internalStopwatches=this.internalStopwatches.filter(e=>e.id!==t.id),yield this.storage.setItem(o.b.STOPWATCHES,JSON.stringify(this.internalStopwatches)),e)for(var i=0;i<o.b.STOPWATCHES_FIELDS.length;i++)this.storage.removeItem(t.id+"_"+o.b.STOPWATCHES_FIELDS[i]);this.sendUpdate(),n()})))}))}}return t.\u0275fac=function(e){return new(e||t)(a["\u0275\u0275inject"](c.a))},t.\u0275prov=a["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},TCge:function(t,e,n){"use strict";n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return s}));const i={LAST_USED:"-1",NONE:"-2"},r={STOPWATCHES:"[]",STOPWATCH_SINGULAR:!1,SERVICE_ID:i.LAST_USED,STATUS_ID:i.LAST_USED,PROJECT_ID:i.NONE,NOTIFICATION_TIME:"17:00",NOTIFICATION_WEEKDAYS:{d0:!1,d1:!0,d2:!0,d3:!0,d4:!0,d5:!0,d6:!1},MODULES:{dashboard:!0,times:!0,projects:!0,stopwatches:!0,contacts:!0},STEPS:15,DURATION:1,HOURS_PER_DAY:8,SHOW_FAVORITES:!1,CURRENT_FILTER:"",FAVORITES:[]},s={STOPWATCHES:"stopwatches",STOPWATCHES_FIELDS:["startTime","savedTime","difference","paused","running","timerDisplay"],PROJECTS_SHOW_FAVORITES:"projects_show_favorites",PROJECTS_CURRENT_FILTER:"projects_current_filter",PROJECTS_FAVORITES:"projects_favorites",SETTINGS_LAST_SERVICE:"settings_last_service",SETTINGS_LAST_SERVICE_ID:"settings_last_service_id",SETTINGS_LAST_STATUS:"settings_last_status",SETTINGS_LAST_STATUS_ID:"settings_last_status_id",SETTINGS_LAST_PROJECT:"settings_last_project",SETTINGS_LAST_PROJECT_ID:"settings_last_project_id",SETTINGS_STOPWATCH_SINGULAR:"settings_stopwatch_singular",SETTINGS_STEPS:"settings_steps",SETTINGS_HOURS_PER_DAY:"settings_hours_per_day",SETTINGS_DURATION:"settings_duration",SETTINGS_NOTIFICATIONS_TIME:"settings_notifications_time",SETTINGS_NOTIFICATIONS_WEEKDAYS:"settings_notifications_weekdays",SETTINGS_MODULES:"settings_modules"}},"U/uv":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n("sxy2"),r=n("ItpF"),s=n("2c9M");const o=(t,e)=>{let n,o;const a=(t,i,r)=>{if("undefined"==typeof document)return;const s=document.elementFromPoint(t,i);s&&e(s)?s!==n&&(u(),c(s,r)):u()},c=(t,e)=>{n=t,o||(o=n);const r=n;Object(i.g)(()=>r.classList.add("ion-activated")),e()},u=(t=!1)=>{if(!n)return;const e=n;Object(i.g)(()=>e.classList.remove("ion-activated")),t&&o!==n&&n.click(),n=void 0};return Object(r.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>a(t.currentX,t.currentY,s.a),onMove:t=>a(t.currentX,t.currentY,s.b),onEnd:()=>{u(!0),Object(s.e)(),o=void 0}})}},ZiJJ:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));class i{constructor(){this.type="duration";let t=new Date;t.setSeconds(0,0),this.start=t.toISOString(),this.date=t.toISOString()}}class r{constructor(){this.tracking=new i}}},iTUp:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("fXoL");let r=(()=>{class t{}return t.\u0275mod=i["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)},imports:[[]]}),t})()},j1ZV:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var i=n("ofXK"),r=n("3Pt+"),s=n("TEn/"),o=n("sYmb"),a=n("iTUp"),c=n("fXoL");let u=(()=>{class t{}return t.\u0275mod=c["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)},imports:[[i.CommonModule,r.FormsModule,a.a,s.IonicModule,o.b]]}),t})()},mYOz:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n("ofXK"),r=n("EcEN"),s=n("ZiJJ");class o{constructor(){this.allowable_bill=!1,this.strategy=0,this.id=Object(r.v4)()}toTimesheet(t){let e=new s.a;e.user_id=t,e.status_id=this.status_id,e.client_service_id=this.client_service_id,e.text=this.text,e.allowable_bill=this.allowable_bill,e.contact_id=this.contact_id,e.pr_project_id=this.pr_project_id,e.pr_package_id=this.pr_package_id;let n=this.timerDisplay.substring(0,5);return e.tracking={type:"duration",date:new i.DatePipe("en-US").transform(new Date,"yyyy-MM-dd"),duration:n},e}}},sPtc:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return a}));const i=(t,e)=>null!==e.closest(t),r=(t,e)=>"string"==typeof t&&t.length>0?Object.assign({"ion-color":!0,["ion-color-"+t]:!0},e):e,s=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},o=/^[a-z][a-z0-9+\-.]*:/,a=async(t,e,n,i)=>{if(null!=t&&"#"!==t[0]&&!o.test(t)){const r=document.querySelector("ion-router");if(r)return null!=e&&e.preventDefault(),r.push(t,n,i)}return!1}},u1pB:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n("HPR3"),r=n("fXoL");let s=(()=>{class t{transform(t,...e){const n=(t+"").split("."),r=parseInt(n[0]),s=Math.round(60*parseFloat("0."+n[1]));return i.a.pad(r)+":"+i.a.pad(s)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=r["\u0275\u0275definePipe"]({name:"toDuration",type:t,pure:!0}),t})()},xDdU:function(t,e,n){var i,r,s=n("4fRq"),o=n("I2ZF"),a=0,c=0;t.exports=function(t,e,n){var u=e&&n||0,l=e||[],d=(t=t||{}).node||i,f=void 0!==t.clockseq?t.clockseq:r;if(null==d||null==f){var S=s();null==d&&(d=i=[1|S[0],S[1],S[2],S[3],S[4],S[5]]),null==f&&(f=r=16383&(S[6]<<8|S[7]))}var p=void 0!==t.msecs?t.msecs:(new Date).getTime(),h=void 0!==t.nsecs?t.nsecs:c+1,T=p-a+(h-c)/1e4;if(T<0&&void 0===t.clockseq&&(f=f+1&16383),(T<0||p>a)&&void 0===t.nsecs&&(h=0),h>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");a=p,c=h,r=f;var g=(1e4*(268435455&(p+=122192928e5))+h)%4294967296;l[u++]=g>>>24&255,l[u++]=g>>>16&255,l[u++]=g>>>8&255,l[u++]=255&g;var _=p/4294967296*1e4&268435455;l[u++]=_>>>8&255,l[u++]=255&_,l[u++]=_>>>24&15|16,l[u++]=_>>>16&255,l[u++]=f>>>8|128,l[u++]=255&f;for(var m=0;m<6;++m)l[u+m]=d[m];return e||o(l)}},xk4V:function(t,e,n){var i=n("4fRq"),r=n("I2ZF");t.exports=function(t,e,n){var s=e&&n||0;"string"==typeof t&&(e="binary"===t?new Array(16):null,t=null);var o=(t=t||{}).random||(t.rng||i)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,e)for(var a=0;a<16;++a)e[s+a]=o[a];return e||r(o)}}}]);