(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{196:function(e,t,n){"use strict";n(10),n(17),n(6),n(21),n(14),n(22);var r=n(1),o=n(11),c=(n(19),n(69),n(15),n(197));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}function h(e){return null==e.title||null==e.heading||null==e.icon||null==e.dataFile||null==e.category||null==e.ecg||null==e.lvp||null==e.model}t.a=function(e,t){t("getTopics",(function(){return c})),t("isTopicDisabled",(function(e){return function(e){if(null==e.title||null==e.heading||null==e.icon||null==e.subTopics)return!0;if(Object.keys(e.subTopics).length<1)return!0;var t=Object.keys(e.subTopics)[0];return h(e.subTopics[t])}(e)})),t("isSubTopicDisabled",(function(e){return h(e)})),t("getContentBySlug",(function(e){return function(e){var t=e.toLowerCase().split("-"),n=Object(o.a)(t,2),r=n[0],l=n[1],content=null;if(null!=r&&null!=l){var h=c[r];if(null!=h){var f=h.subTopics[l];null!=f&&(content=d(d({},f),{},{parentTopic:{slug:r,heading:h.heading,title:h.title}}))}}return content}(e)}))}},197:function(e){e.exports=JSON.parse('{"model":{"title":"Home","heading":"Te Manawa","icon":"mdi-home","subTopics":{"heart":{"title":"Heart","heading":"The Heart","icon":"mdi-home-heart","dataFile":"heart-main","category":"success","subTitle":"subSuccess","ecg":{"name":"Normal","path":"ECG/NormalECG.json","description":"Electrical pulses make the heart muscle contract"},"lvp":{"name":"Normal","path":"LVP/NormalLVP.json","description":"Muscle contraction generates pump pressure"},"model":{"name":"NoInfarct"}}}},"attack":{"title":"Attack","heading":"Heart Attack","icon":"mdi-heart-broken","subTopics":{"healthy":{"title":"Healthy","heading":"Coronary Arteries","icon":"mdi-heart-pulse","dataFile":"attack-healthy","category":"success","subTitle":"subSuccess","ecg":{"name":"NoInfarct","path":"ECG/NormalECG.json","description":"Electrical pulses make the heart muscle contract"},"lvp":{"name":"NoInfarct","path":"LVP/NormalLVP.json","description":"Muscle contraction generates pump pressure"},"model":{"name":"NoInfarct"}},"minor":{"slug":"minor","title":"Minor","heading":"Minor","icon":"mdi-heart-half-full","dataFile":"attack-minor","category":"warning","subTitle":"subWarning","ecg":{"name":"SmallInfarct","path":"ECG/MildInfarctECG_shifted.json","description":"Minor heart tissue damage can show up as subtle changes to the ECG"},"lvp":{"name":"SmallInfarct","path":"LVP/smallInfarctLVP.json","description":"Damaged tissue leads to less contraction force and less pressure"},"model":{"name":"SmallInfarct"}},"severe":{"slug":"severe","title":"Severe","heading":"Severe","icon":"mdi-heart-minus","dataFile":"attack-severe","category":"error","subTitle":"subError","ecg":{"name":"LargeInfarct","path":"ECG/LargeInfarctECG_shifted.json","description":"Severe heart tissue damage can show up as large changes to the ECG"},"lvp":{"name":"LargeInfarct","path":"LVP/largeInfarctLVP_shifted.json","description":"Damaged tissue leads to less contraction force and less pressure"},"model":{"name":"LargeInfarct"}}}},"electricity":{"title":"Electricity","heading":"Heart Electricity","icon":"mdi-lightning-bolt","subTopics":{"healthy":{"title":"Healthy","heading":"Electrocardiograms","icon":"mdi-battery-heart","dataFile":"electricity-healthy","category":"success","subTitle":"subSuccess","ecg":{"name":"NormalElectricity","path":"ECG/NormalECG.json","description":"Electrical pulses make the heart muscle contract"},"lvp":{"name":"NormalElectricity","path":"LVP/NormalLVP.json","description":"Muscle contraction generates pump pressure"},"model":{"name":"NormalElectricity"}},"fibrillation":{"slug":"fibrillation","title":"Fibrillation","heading":"Fibrillation","icon":"mdi-heart-flash","dataFile":"electricity-fibrillation","category":"error","subTitle":"subError","ecg":{"name":"Arrhythmia","path":"ECG/ArrhythmiaECG.json","description":"Abnormal electricity"},"lvp":{"name":"Arrhythmia","path":"LVP/ArrhythmiaLVP.json","description":"Poor pump pressure"},"model":{"name":"ArrythmiaElectricity"}}}},"failure":{"title":"Failure","heading":"Heart Failure","icon":"mdi-heart-off","subTopics":{"healthy":{"title":"Healthy","heading":"Chronic Problems","icon":"mdi-account-heart","dataFile":"failure-healthy","category":"success","subTitle":"subSuccess","ecg":{"name":"NoFailure","path":"ECG/NormalECG.json","description":"Electrical pulses make the heart muscle contract"},"lvp":{"name":"NoFailure","path":"LVP/NormalLVP.json","description":"Muscle contraction generates pump pressure"},"model":{"name":"NoInfarct"}},"compensated":{"title":"Compensated","heading":"Compensated","icon":"mdi-heart-cog","dataFile":"failure-compensated","category":"warning","subTitle":"subWarning","ecg":{"name":"CompensatedFailure","path":"ECG/DiastolicECG_shifted.json","description":"Electrical pulses make the heart muscle contract"},"lvp":{"name":"CompensatedFailure","path":"LVP/DiastolicLVP_shifted.json","description":"Muscle contraction generates pump pressure"},"model":{"name":"CompensatedFailure"}},"decompensated":{"title":"Decompensated","heading":"Decompensated","icon":"mdi-heart-remove","dataFile":"failure-decompensated","category":"error","subTitle":"subError","ecg":{"name":"DecompensatedFailure","path":"ECG/SystolicECG_shifted.json","description":"Electrical pulses make the heart muscle contract"},"lvp":{"name":"DecompensatedFailure","path":"LVP/SystolicLVP_shifted.json","description":"Thin-walled hearts struggle to maintain pump pressure"},"model":{"name":"DecompensatedFailure"}}}}}')},198:function(e,t,n){"use strict";t.a=function(e,t){t("parentTopic",(function(){return e.store.getters.getCurrentContent.parentTopic})),t("heading",(function(){return e.store.getters.getCurrentContent.heading})),t("title",(function(){return e.store.getters.getCurrentContent.title})),t("category",(function(){return e.store.getters.getCurrentContent.category})),t("subTitle",(function(){return e.store.getters.getCurrentContent.subTitle})),t("dataFile",(function(){return e.store.getters.getCurrentContent.dataFile})),t("demoIcon",(function(){return e.store.getters.getCurrentContent.demoIcon})),t("ecg",(function(){return e.store.getters.getCurrentContent.ecg})),t("lvp",(function(){return e.store.getters.getCurrentContent.lvp})),t("model",(function(){return e.store.getters.getCurrentContent.model}))}},199:function(e,t,n){"use strict";t.a=function(e,t){t("currentRender",(function(){return e.store.getters.getBaseRender})),t("modelToSceneArray",(function(){return e.store.getters.getModelToSceneArray})),t("perviousCamera",(function(){return e.store.getters.getPreviousCamera})),t("isHalfModel",(function(){return e.store.getters.getIsHalfModel})),t("heartBeat",(function(){return e.store.getters.getHeartBeat}))}},200:function(e,t,n){"use strict";var r=n(201),o=n(287),c=document.createElement("div");c.style.width="100vw",c.style.height="100vh",c.style.margin=0,c.style.padding=0;var l=new r.copperRenderer(c,{guiOpen:false,camera:!0,performance:!0,light:!1,controls:"copper3d"});l.animate(),t.a=function(e,t){t("baseRenderer",(function(){return l})),t("baseContainer",(function(){return c})),t("three",(function(){return o})),t("Copper",(function(){return r}))}},202:function(e,t,n){"use strict";var i,s,r,o,a,c;i=window,s=document,r="script",o="ga",i.GoogleAnalyticsObject=o,i.ga=i.ga||function(){(i.ga.q=i.ga.q||[]).push(arguments)},i.ga.l=1*new Date,a=s.createElement(r),c=s.getElementsByTagName(r)[0],a.async=1,a.src="https://www.google-analytics.com/analytics.js",c.parentNode.insertBefore(a,c),ga("create","UA-107203086-4","auto"),t.a=function(e){var t=e.app.router;e.store;t.afterEach((function(e,t){ga("set","page",e.fullPath),ga("send","pageview")}))}},203:function(e,t,n){var r=function(){dataLayer.push(arguments)};window.dataLayer=window.dataLayer||[],r("js",new Date),r("config","G-LXD5LJXP2Y"),console.log("ga4 worked")},257:function(e,t,n){var content=n(335);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(26).default)("68472c7e",content,!0,{sourceMap:!1})},259:function(e,t,n){var content=n(345);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(26).default)("f96c5cd2",content,!0,{sourceMap:!1})},260:function(e,t,n){var content=n(347);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(26).default)("b135594c",content,!0,{sourceMap:!1})},264:function(e,t,n){var content=n(349);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(26).default)("ae7159e2",content,!0,{sourceMap:!1})},265:function(e,t,n){var content=n(352);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(26).default)("4119fb21",content,!0,{sourceMap:!1})},269:function(e,t,n){var content=n(379);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(26).default)("42e58f9e",content,!0,{sourceMap:!1})},290:function(e,t,n){"use strict";n(64);var r={name:"DefaultLayout",data:function(){return{multiplier:1,panelHeight:0,isVideo:!0,load_app:!0}},computed:{mdAndUp:function(){return this.load_app=!1,this.$vuetify.breakpoint.mdAndUp}},mounted:function(){var e=this,t=this.$refs.base_background.$el,n=this.$Copper();document.addEventListener("fullscreenchange",(function(){setTimeout((function(){e.panelHeight=e.$refs.panel.clientHeight}),200)})),document.addEventListener("keydown",(function(e){"KeyF"===e.code&&n.fullScreenListenner(t)}))},watch:{panelHeight:function(e){}},updated:function(){this.panelHeight=this.$refs.panel.clientHeight},created:function(){var e=this;console.log("%cMedtech Heart Vue App %cBeta:v3.1.1","padding: 3px;color:white; background:#023047","padding: 3px;color:white; background:#219EBC"),this.$nuxt.$on("menu-height-changed",(function(t){e.multiplier=t}))},beforeDestroy:function(){this.$nuxt.$off("menu-height-changed")}},o=(n(344),n(36)),c=n(63),l=n.n(c),d=n(437),h=n(429),f=n(438),m=n(439),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{ref:"base_background",staticClass:"root"},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.load_app,expression:"load_app"}],staticClass:"loading"},[n("loading-bar")],1),e._v(" "),n("div",{staticClass:"rightPanel"},[n("div",[n("div",{staticClass:"pa-0 black"},[n("Nuxt")],1)])]),e._v(" "),n("div",{ref:"leftPanel",staticClass:"firefox",class:e.mdAndUp?"outer-large":"outer-small"},[n("div",{staticClass:"pa-0"},[n("v-row",{staticClass:"d-flex",attrs:{"no-gutters":""}},[n("v-col",[n("div",{staticClass:"pa-0",class:e.mdAndUp?"full-height":"auto-height"},[n("v-row",{staticClass:"d-flex flex-column",attrs:{"no-gutters":""}},[n("v-col",{ref:"panel",staticClass:"out-card"},[n("v-card",{staticClass:"pa-0 overflow-y-auto transparent",class:e.mdAndUp?"panel-height"+e.multiplier:"",attrs:{outlined:"",tile:""}},[n("left-pane",{attrs:{"panel-height":e.panelHeight}})],1)],1),e._v(" "),n("v-col",{staticClass:"d-none d-md-block fix-it"},[n("navigation")],1)],1)],1)])],1),e._v(" "),n("div",{staticClass:"d-md-none fixed left-0 bottom-0"},[n("navigation")],1)],1)])])}),[],!1,null,"14ac0c46",null);t.a=component.exports;l()(component,{LoadingBar:n(424).default,LeftPane:n(425).default,Navigation:n(426).default}),l()(component,{VApp:d.a,VCard:h.a,VCol:f.a,VRow:m.a})},291:function(e,t,n){"use strict";var r=n(36),component=Object(r.a)({},(function(){var e=this.$createElement;return(this._self._c||e)("Nuxt")}),[],!1,null,null,null);t.a=component.exports},296:function(e,t,n){"use strict";n.r(t);var r=[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"logo"},[t("img",{attrs:{src:n(350)}})])}],o=(n(351),n(36)),component=Object(o.a)({},(function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),r,!1,null,"4cbf8af7",null);t.default=component.exports},302:function(e,t,n){n(303),e.exports=n(304)},334:function(e,t,n){"use strict";n(257)},335:function(e,t,n){var r=n(25)(!1);r.push([e.i,".show-error[data-v-0662bbe4]{margin:auto;text-align:center;width:80%}h1[data-v-0662bbe4]{font-size:1.5rem;padding-bottom:4px}",""]),e.exports=r},340:function(e,t,n){var content=n(341);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(26).default)("70f48cac",content,!0,{sourceMap:!1})},341:function(e,t,n){var r=n(25)(!1);r.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Bad+Script&family=Raleway:wght@100;300&display=swap);"]),r.push([e.i,"canvas{width:100%;height:100%}.flexbox{display:flex}.flexbox.--vertical{flex-direction:column}.full-height{min-height:100vh;max-height:100vh;margin:0;padding:0}.auto-height{height:auto}.container-default{padding:1.5rem .5rem .2rem 1.5rem}@media only screen and (max-width:959.98px){.container-default{padding:.5rem}}.main-heading{margin:0;font-size:2rem}@media only screen and (max-width:599.98px){.main-heading{font-size:1.8rem}}@media only screen and (min-width:1904px){.main-heading{font-size:2.4rem}}.sub-heading{margin:0;font-size:1.2rem}@media only screen and (min-width:1904px){.sub-heading{font-size:1.6rem}}.error-message{font-size:1.5rem;font-weight:700;padding:3rem}::-webkit-scrollbar{width:3px}::-webkit-scrollbar-track{background:inherit}::-webkit-scrollbar-thumb{background-color:transparent;border-radius:20px;border:1px solid transparent}",""]),e.exports=r},342:function(e,t,n){var content=n(343);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(26).default)("7b1b6764",content,!0,{sourceMap:!1})},343:function(e,t,n){var r=n(25)(!1);r.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Bad+Script&family=Raleway:wght@100;300&display=swap);"]),r.push([e.i,"body{background-color:#000}@media only screen and (max-width:1903.98px){body{font-size:.9rem}}@media only screen and (min-width:1904px){body{font-size:1.3rem}}a{text-decoration:none;color:inherit}hr{margin-top:.2rem;margin-bottom:.2rem}",""]),e.exports=r},344:function(e,t,n){"use strict";n(259)},345:function(e,t,n){var r=n(25)(!1);r.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Bad+Script&family=Raleway:wght@100;300&display=swap);"]),r.push([e.i,".root[data-v-14ac0c46]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.loading[data-v-14ac0c46]{z-index:9999;width:100vw;height:100vh;background:#000;display:flex;justify-content:center;align-items:center}.loading[data-v-14ac0c46],.outer-large[data-v-14ac0c46]{position:fixed;top:0;left:0}.outer-large[data-v-14ac0c46]{min-width:409px;width:30vw}.outer-small[data-v-14ac0c46]{width:100vw}.firefox[data-v-14ac0c46]{z-index:1}.fix-it[data-v-14ac0c46]{position:-webkit-sticky;position:sticky;bottom:0}.panel-height1[data-v-14ac0c46]{height:calc(100vh - 56px)}.panel-height2[data-v-14ac0c46]{height:calc(100vh - 112px)}.transparent[data-v-14ac0c46]{margin:0;padding:0;opacity:.8}.out-card[data-v-14ac0c46]{border-left:1px solid #000;margin:0;padding:0}.rightPanel[data-v-14ac0c46]{order:2}",""]),e.exports=r},346:function(e,t,n){"use strict";n(260)},347:function(e,t,n){var r=n(25)(!1);r.push([e.i,"@-webkit-keyframes ldio-azcc3oyhns7-data-v-d8b77cee{0%{opacity:1;-webkit-backface-visibility:hidden;backface-visibility:hidden;transform:translateZ(0) scale(1.5)}to{opacity:0;-webkit-backface-visibility:hidden;backface-visibility:hidden;transform:translateZ(0) scale(1)}}@keyframes ldio-azcc3oyhns7-data-v-d8b77cee{0%{opacity:1;-webkit-backface-visibility:hidden;backface-visibility:hidden;transform:translateZ(0) scale(1.5)}to{opacity:0;-webkit-backface-visibility:hidden;backface-visibility:hidden;transform:translateZ(0) scale(1)}}.ldio-azcc3oyhns7 div>div[data-v-d8b77cee]{position:absolute;width:24px;height:24px;border-radius:50%;background:#05c178;-webkit-animation:ldio-azcc3oyhns7-data-v-d8b77cee 1s linear infinite;animation:ldio-azcc3oyhns7-data-v-d8b77cee 1s linear infinite}.ldio-azcc3oyhns7 div:first-child>div[data-v-d8b77cee]{left:148px;top:88px;-webkit-animation-delay:-.875s;animation-delay:-.875s}.ldio-azcc3oyhns7>div[data-v-d8b77cee]:first-child{transform:rotate(0deg);transform-origin:160px 100px}.ldio-azcc3oyhns7 div:nth-child(2)>div[data-v-d8b77cee]{left:130px;top:130px;-webkit-animation-delay:-.75s;animation-delay:-.75s}.ldio-azcc3oyhns7>div[data-v-d8b77cee]:nth-child(2){transform:rotate(45deg);transform-origin:142px 142px}.ldio-azcc3oyhns7 div:nth-child(3)>div[data-v-d8b77cee]{left:88px;top:148px;-webkit-animation-delay:-.625s;animation-delay:-.625s}.ldio-azcc3oyhns7>div[data-v-d8b77cee]:nth-child(3){transform:rotate(90deg);transform-origin:100px 160px}.ldio-azcc3oyhns7 div:nth-child(4)>div[data-v-d8b77cee]{left:46px;top:130px;-webkit-animation-delay:-.5s;animation-delay:-.5s}.ldio-azcc3oyhns7>div[data-v-d8b77cee]:nth-child(4){transform:rotate(135deg);transform-origin:58px 142px}.ldio-azcc3oyhns7 div:nth-child(5)>div[data-v-d8b77cee]{left:28px;top:88px;-webkit-animation-delay:-.375s;animation-delay:-.375s}.ldio-azcc3oyhns7>div[data-v-d8b77cee]:nth-child(5){transform:rotate(180deg);transform-origin:40px 100px}.ldio-azcc3oyhns7 div:nth-child(6)>div[data-v-d8b77cee]{left:46px;top:46px;-webkit-animation-delay:-.25s;animation-delay:-.25s}.ldio-azcc3oyhns7>div[data-v-d8b77cee]:nth-child(6){transform:rotate(225deg);transform-origin:58px 58px}.ldio-azcc3oyhns7 div:nth-child(7)>div[data-v-d8b77cee]{left:88px;top:28px;-webkit-animation-delay:-.125s;animation-delay:-.125s}.ldio-azcc3oyhns7>div[data-v-d8b77cee]:nth-child(7){transform:rotate(270deg);transform-origin:100px 40px}.ldio-azcc3oyhns7 div:nth-child(8)>div[data-v-d8b77cee]{left:130px;top:46px;-webkit-animation-delay:0s;animation-delay:0s}.ldio-azcc3oyhns7>div[data-v-d8b77cee]:nth-child(8){transform:rotate(315deg);transform-origin:142px 58px}.loadingio-spinner-spin-wbac566mwj[data-v-d8b77cee]{width:200px;height:200px;display:inline-block;overflow:hidden;background:#020202}.ldio-azcc3oyhns7[data-v-d8b77cee]{width:100%;height:100%;position:relative;transform:translateZ(0) scale(1);-webkit-backface-visibility:hidden;backface-visibility:hidden;transform-origin:0 0}.ldio-azcc3oyhns7 div[data-v-d8b77cee]{box-sizing:content-box}",""]),e.exports=r},348:function(e,t,n){"use strict";n(264)},349:function(e,t,n){var r=n(25)(!1);r.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Bad+Script&family=Raleway:wght@100;300&display=swap);"]),r.push([e.i,".bg-success{background:linear-gradient(170deg,var(--v-success-base),#32cd32)}.bg-warning{background:linear-gradient(170deg,var(--v-warning-base),rgba(255,255,0,.7))}.bg-error{background:linear-gradient(170deg,var(--v-error-base),rgba(255,50,0,.9))}.bg-secondary{background:linear-gradient(170deg,rgba(150,30,150,0),var(--v-secondary-base))}.left-pane{position:relative}p{display:flex;flex-direction:row;align-items:center}.md-notice{font-style:italic;font-size:13px}.md-video{cursor:pointer}.md-mt{float:right}.text-container{overflow:hidden}.text-container p{text-align:justify}.topic-img,.topic-img-big{display:flex;flex-direction:row;align-items:center}.topic-img-big{justify-content:space-around}.topic-fibrillation-aed{display:flex;flex-direction:row;justify-content:center;align-items:center}.topic-fibrillation-aed:hover{cursor:pointer}.sm-logo{position:absolute;width:8rem;top:2px;right:6px;z-index:999;height:auto}@media only screen and (max-width:599.98px){.sm-logo{width:7rem}}.video-icon{height:75px;width:70px}@media only screen and (min-width:1904px){.video-icon{height:85px;width:80px}}.video-icon-tall{height:85px;width:70px}@media only screen and (min-width:1904px){.video-icon-tall{height:95px;width:80px}}img{margin:0}",""]),e.exports=r},350:function(e,t,n){e.exports=n.p+"img/medtechcore-abi-logo.30ec4c7.png"},351:function(e,t,n){"use strict";n(265)},352:function(e,t,n){var r=n(25)(!1);r.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Bad+Script&family=Raleway:wght@100;300&display=swap);"]),r.push([e.i,".logo img[data-v-4cbf8af7]{width:100%;height:auto}",""]),e.exports=r},378:function(e,t,n){"use strict";n(269)},379:function(e,t,n){var r=n(25)(!1);r.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Bad+Script&family=Raleway:wght@100;300&display=swap);"]),r.push([e.i,".navi[data-v-286f8e70]{position:relative;width:100%}.sub-menu[data-v-286f8e70]{position:fixed;bottom:56px;width:100%}.v-btn.button-default[data-v-286f8e70]{height:56px!important;background:linear-gradient(#050505,#1e1e1e 4%,#050505);border-left:2px solid #050505}",""]),e.exports=r},395:function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return r})),n.d(t,"getters",(function(){return o})),n.d(t,"mutations",(function(){return c}));var r=function(){return{currentContent:{},chartLoaded:"",previousCamera:{},baseRenderer:void 0,modelToSceneArray:[],isHalfmodel:!1,heartBeat:2500}},o={getCurrentContent:function(e){return e.currentContent},getChartLoaded:function(e){return e.chartLoaded},getBaseRender:function(e){return e.baseRenderer},getModelToSceneArray:function(e){return e.modelToSceneArray},getPreviousCamera:function(e){return e.previousCamera},getIsHalfModel:function(e){return e.isHalfmodel},getHeartBeat:function(e){return e.heartBeat}},c={setCurrentContent:function(e,t){e.currentContent=t},setChartLoaded:function(e,t){e.chartLoaded=t},setBaseRender:function(e,t){e.baseRenderer=t},setModelToSceneArray:function(e,t){e.modelToSceneArray[t.sceneName]=t},setPreviousCamera:function(e,t){e.previousCamera=t},setIsHalfModel:function(e,t){e.isHalfmodel=t},setHeartBeat:function(e,t){e.heartBeat=t}}},401:function(e,t){},403:function(e,t){},424:function(e,t,n){"use strict";n.r(t);var r={name:"LoadingBar",data:function(){return{}}},o=(n(346),n(36)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("img",{attrs:{src:"loading/loading.gif",alt:""}})])}],!1,null,"d8b77cee",null);t.default=component.exports},425:function(e,t,n){"use strict";n.r(t);n(41);var r={name:"LeftPane",props:{panelHeight:{type:Number}},computed:{currentBg:function(){return this.$category()?"bg-"+this.$category():"bg-success"},panelHeightStyle:function(){return this.$vuetify.breakpoint.mdAndUp?{"min-height":this.panelHeight-2+"px"}:{height:"auto"}}}},o=(n(348),n(36)),c=n(63),l=n.n(c),d=n(429),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"left-pane"},[n("div",{staticClass:"sm-logo d-md-none"},[n("logo")],1),e._v(" "),"slug"==e.$route.name?n("div",[n("div",{staticClass:"pa-4",class:e.currentBg,style:e.panelHeightStyle,attrs:{tile:""}},[n("lazy-panel")],1)]):e._e(),e._v(" "),"about"==e.$route.name?n("div",[n("v-card",{staticClass:"pa-4 bg-secondary",style:e.panelHeightStyle},[n("lazy-about-us")],1)],1):e._e()])}),[],!1,null,null,null);t.default=component.exports;l()(component,{Logo:n(296).default}),l()(component,{VCard:d.a})},426:function(e,t,n){"use strict";n.r(t);n(15),n(34);var r={data:function(){return{selectedTopic:{},topics:{},subMenuActive:!1}},methods:{updateAbout:function(){this.subMenuActive=!1},getDefaultSlug:function(e){return null!=e.subTopics?Object.keys(e.subTopics)[0]:""},handTopicClick:function(e){this.selectedTopic=e,"Home"!==e.title&&(this.subMenuActive=!0)}},computed:{activeColor:function(){return"about"===this.$route.name?this.$vuetify.theme.themes.dark.secondary:this.$subTitle()},menuCaption:function(){return"slug"===this.$route.name?this.$parentTopic().slug:"about"}},watch:{selectedTopic:function(e){this.subMenuActive=Object.keys(e.subTopics).length>1},subMenuActive:function(e){$nuxt.$emit("menu-height-changed",e?"2":"1")}},created:function(){if(this.topics=this.$getTopics(),"slug"===this.$route.name){var e=this.$parentTopic().slug.toLowerCase();this.selectedTopic=this.topics[e]}}},o=(n(378),n(36)),c=n(63),l=n.n(c),d=n(440),h=n(441),f=n(430),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"navi"},[e.subMenuActive?n("div",{class:e.$vuetify.breakpoint.smAndDown?"sub-menu":""},[n("v-bottom-navigation",{attrs:{grow:"","input-value":e.subMenuActive,color:e.activeColor}},e._l(e.selectedTopic.subTopics,(function(t,r){return n("v-btn",{key:r,staticClass:"button-default",attrs:{disabled:e.$isSubTopicDisabled(t),to:{name:"slug",params:{slug:e.menuCaption+"-"+r}}}},[n("span",[e._v(e._s(t.title))]),e._v(" "),n("v-icon",[e._v(e._s(t.icon))])],1)})),1)],1):e._e(),e._v(" "),n("v-bottom-navigation",{attrs:{grow:"",fixed:!!e.$vuetify.breakpoint.smAndDown,color:e.activeColor},model:{value:e.menuCaption,callback:function(t){e.menuCaption=t},expression:"menuCaption"}},[e._l(e.topics,(function(t,r){return n("v-btn",{key:r,staticClass:"button-default",attrs:{value:r,disabled:e.$isTopicDisabled(t),to:{name:"slug",params:{slug:r+"-"+e.getDefaultSlug(t)}}},on:{click:function(n){return e.handTopicClick(t)}}},[n("span",[e._v(e._s(t.title))]),e._v(" "),n("v-icon",[e._v(e._s(t.icon))])],1)})),e._v(" "),n("v-btn",{staticClass:"button-default",attrs:{to:{name:"about"},value:"about"},on:{click:function(t){return e.updateAbout()}}},[n("span",[e._v("About")]),e._v(" "),n("v-icon",[e._v("mdi-account-group")])],1)],2)],1)}),[],!1,null,"286f8e70",null);t.default=component.exports;l()(component,{VBottomNavigation:d.a,VBtn:h.a,VIcon:f.a})},80:function(e,t,n){"use strict";var r={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"Error 404 - Page not found",otherError:"An unexpected error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(n(334),n(36)),c=n(63),l=n.n(c),d=n(437),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{dark:""}},[n("div",{staticClass:"show-error secondary pa-10"},[404===e.error.statusCode?n("h1",[e._v("\n      "+e._s(e.pageNotFound)+"\n    ")]):n("h1",[e._v("\n      "+e._s(e.otherError)+"\n    ")]),e._v(" "),n("span",[e._v("\n      Please visit \n      "),n("NuxtLink",{attrs:{to:"/"}},[e._v("Home page")])],1)])])}),[],!1,null,"0662bbe4",null);t.a=component.exports;l()(component,{VApp:d.a})}},[[302,14,3,15]]]);