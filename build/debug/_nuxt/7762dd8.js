(window.webpackJsonp=window.webpackJsonp||[]).push([[10,5,7,8],{385:function(e,t,n){var content=n(391);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(25).default)("30a617cb",content,!0,{sourceMap:!1})},386:function(e,t,n){var content=n(393);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(25).default)("3daf0577",content,!0,{sourceMap:!1})},388:function(e,t,n){var content=n(402);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(25).default)("31a7a086",content,!0,{sourceMap:!1})},389:function(e,t,n){e.exports=n.p+"img/gestures-icons.104494d.png"},390:function(e,t,n){"use strict";n(385)},391:function(e,t,n){var r=n(24)(!1);r.push([e.i,"@import url(https://fonts.googleapis.com/css?family=Helvetica&display=swap);"]),r.push([e.i,".baseModelControl[data-v-40007dd4]{width:100vw;height:120px;display:flex;flex-direction:row;justify-content:center;align-content:center}.baseModelControl .baseModelCB[data-v-40007dd4]{width:240px;height:70px;position:relative}.baseModelControl .baseModelCB-md[data-v-40007dd4]{width:280px;height:100px}.baseModelControl-md[data-v-40007dd4]{position:fixed;bottom:10px;padding-left:100px}.baseModelControl-sm[data-v-40007dd4]{order:-1;height:60px}.baseDom-md[data-v-40007dd4]{height:100vh}.baseDom-md[data-v-40007dd4],.baseDom-sm[data-v-40007dd4]{width:100vw;margin:0;padding:0}.baseDom-sm[data-v-40007dd4]{height:400px}.outer-model[data-v-40007dd4]{height:100%}.hidden-input[data-v-40007dd4]{width:1px;height:1px}",""]),e.exports=r},392:function(e,t,n){"use strict";n(386)},393:function(e,t,n){var r=n(24)(!1);r.push([e.i,"@import url(https://fonts.googleapis.com/css?family=Helvetica&display=swap);"]),r.push([e.i,"#ecgDescription[data-v-03c1bbf6],#lvpDescription[data-v-03c1bbf6]{width:90%}.item[data-v-03c1bbf6],.trace-box[data-v-03c1bbf6]{min-width:280px;max-width:25vw}.rightEGC-sm[data-v-03c1bbf6]{min-height:80px}.rightEGC-md[data-v-03c1bbf6]{min-height:100px}",""]),e.exports=r},394:function(e,t,n){"use strict";n.r(t);n(40),n(35),n(69);var r={data:function(){return{heartRate:2500,threeDControlsHeight:0,Copper:null,THREE:null,baseRenderer:null,oldCam:null,scene:null,modelToSceneArray:[],container:null,modelName:"",modelURLsArray:{NoInfarct_highres:["heartInfarct/noInfarct.glb","modelView/noInfarct_view_setmodel.json"],NormalElectricity_highres:["heartElectricity/normalActivity.glb","modelView/noInfarct_view_setmodel.json"],CompensatedFailure_highres:["heartFailure/compensated.glb","modelView/noInfarct_view_setmodel.json"],SmallInfarct_highres:["heartInfarct/smallInfarct.glb","modelView/noInfarct_view_setmodel.json"],LargeInfarct_highres:["heartInfarct/largeInfarct.glb","modelView/noInfarct_view_setmodel.json"],ArrythmiaElectricity_highres:["heartElectricity/arrythmiaActivity.glb","modelView/arrythmiaActivity_view.json"],DecompensatedFailure_highres:["heartFailure/decompensated.glb","modelView/noInfarct_view_setmodel.json"]}}},props:{totalHeight:{type:Number},availableHeight:{type:Number}},computed:{mdAndUp:function(){return this.$vuetify.breakpoint.mdAndUp}},mounted:function(){var e=this;this.THREE=this.$three(),this.modelName=this.$model().name,this.container=this.$refs.baseDomObject;var t=this.$baseContainer();setTimeout((function(){e.mdAndUp?t.style.height="100vh":t.style.height="400px"}),100),this.container.appendChild(t),this.start()},methods:{start:function(){this.Copper=this.$Copper(),this.baseRenderer=this.$baseRenderer(),this.modelToSceneArray=this.$modelToSceneArray(),"NoInfarct"!==this.modelName&&"SmallInfarct"!==this.modelName&&"LargeInfarct"!==this.modelName&&"CompensatedFailure"!==this.modelName&&"DecompensatedFailure"!==this.modelName&&"NormalElectricity"!==this.modelName||(this.oldCam=this.$perviousCamera()),"ArrythmiaElectricity"===this.$model().name?this.loadModel(this.modelName,.25):this.loadModel(this.modelName,1),this.heartRate=this.$heartBeat(),this.updateSlider(this.heartRate)},loadModel:function(e,t){var n=this,r="_highres",o=this.modelURLsArray[e+r][0],d=this.modelURLsArray[e+r][1];this.scene=this.baseRenderer.getSceneByName(e),void 0===this.scene?(this.scene=this.baseRenderer.createScene(e),this.scene.controls.staticMoving=!0,this.scene.controls.rotateSpeed=2,this.baseRenderer.setCurrentScene(this.scene),this.scene.loadGltf(o,(function(content){"ArrythmiaElectricity"===e?n.scene.setModelPosition(content,{x:5,y:2}):n.scene.setModelPosition(content,{y:3}),n.oldCam&&n.oldCam.near&&n.shareCameraSettings(n.oldCam)})),this.$store.commit("setModelToSceneArray",this.scene),this.scene.loadViewUrl(d),this.scene.updateBackground("#000","#000"),this.Copper.setHDRFilePath("environment/venice_sunset_1k.hdr"),this.baseRenderer.updateEnvironment(),this.addLabel(this.modelName)):(this.meshReady(this.oldCam),this.baseRenderer.setCurrentScene(this.scene))},meshReady:function(e){this.oldCam&&e.near&&this.shareCameraSettings(e)},shareCameraSettings:function(e){if(null!==e&&null!==e.near&&void 0!==e.near){var t=this.scene.setViewPoint(e,[-.9551143646240234,2.91867446899414,2.7563438415527344]);this.scene.updateCamera(t)}},onResetAllModelsView:function(){for(var e in this.heartRate=2500,$nuxt.$emit("beat-reset",2500),this.$store.commit("setHeartBeat",2500),this.$store.commit("setPreviousCamera",{}),this.modelToSceneArray)this.modelToSceneArray.hasOwnProperty(e)&&(this.modelToSceneArray[e].resetView(),this.modelToSceneArray[e].isHalfed&&this.showHalf(this.modelToSceneArray[e]))},convertHeartRate:function(e){return"ArrythmiaElectricity"===this.modelName?e/2e3:e/500},updateSlider:function(e){var t=this.convertHeartRate(e);this.scene.setPlayRate(t)},addLabel:function(e){"NoInfarct"===e||"NormalElectricity"===e?(this.Copper.addLabelToScene(this.scene,"right ventricle",-45.323991175632,44.1417335930078,10.421283,60),this.Copper.addLabelToScene(this.scene,"left ventricle",-55.056679,4.82123313284426,5.421283,60)):"SmallInfarct"===e?this.Copper.addLabelToScene(this.scene,"damaged tissue",30,-40,0,60):"LargeInfarct"===e&&this.Copper.addLabelToScene(this.scene,"damaged tissue",15,-45,0,60)},onHalfHeartPressed:function(){this.showHalf()},showHalf:function(e){var t;console.log("hala"),(t=e||this.baseRenderer.getSceneByName(this.modelName)).content.traverse((function(e){"Post_top"!==e.name&&"Post_inner"!==e.name&&"Post_NonInfarct"!==e.name&&"Post_top_1"!==e.name&&"Post_inner_1"!==e.name&&"Post_NonInfarct_1"!==e.name&&"Post"!==e.name||t.updateModelChildrenVisualisation(e)})),"NormalElectricity"===this.modelName&&t.content.traverse((function(e){"Ant"!==e.name&&"Post"!==e.name||t.updateModelChildrenVisualisation(e)}))}},watch:{heartRate:function(e){this.updateSlider(e)}},created:function(){var e=this;this.$nuxt.$on("beat-update-onTime",(function(t){e.updateSlider(t)})),this.$nuxt.$on("beat-change",(function(t){e.heartRate=t,e.$store.commit("setHeartBeat",t)}))},beforeDestroy:function(){if(this.oldCam){var e=this.baseRenderer.getCurrentScene().camera,t=new this.THREE.Vector3,n=new this.THREE.Vector3;t.copy(e.position),n.copy(e.up);var r={position:t,up:n,near:e.near,far:e.far};this.$store.commit("setPreviousCamera",r)}this.$nuxt.$off("beat-change")}},o=(n(390),n(42)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{},[r("div",{staticClass:"flex flex-col justify-center items-center"},[r("div",{ref:"baseDomObject",class:e.mdAndUp?"baseDom-md":"baseDom-sm",on:{dblclick:e.onHalfHeartPressed}}),e._v(" "),r("div",{ref:"threeDControls",staticClass:"baseModelControl",class:e.mdAndUp?"baseModelControl-md":"baseModelControl-sm"},[r("div",{staticClass:"baseModelCB",class:e.mdAndUp?"baseModelCB-md":""},[r("button",{staticClass:"absolute top-0 left-0 w-1/5 h-full hover:bg-gray-50/10",on:{click:e.onResetAllModelsView}}),e._v(" "),r("img",{staticClass:"h-full w-full md:object-contain",attrs:{src:n(389)}}),e._v(" "),r("button",{staticClass:"absolute top-0 right-0 w-1/4 h-full hover:bg-gray-50/10",on:{click:e.onHalfHeartPressed}})])])])])}),[],!1,null,"40007dd4",null);t.default=component.exports},395:function(e,t,n){"use strict";n.r(t);var r={data:function(){return{idleTime:0,idleTimeLimit:3e5,oldTime:new Date,render:void 0}},computed:{mdAndUp:function(){return this.$vuetify.breakpoint.mdAndUp}},mounted:function(){window.ecgDone=!1,window.lvpDone=!1,ecgName=null,lvpName=null,loadChart(this.$ecg(),this.$lvp(),this.$category(),1),this.updateEcg()},methods:{updateEcg:function(){var e=this;if(this.baseRenderer=this.$baseRenderer(),this.baseRenderer){this.baseRenderer.addPreRenderCallbackFunction((function(){var t=e.baseRenderer.getCurrentScene().getCurrentTime();updateIndicator(t)}))}}}},o=(n(392),n(42)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"d-flex",class:e.$vuetify.breakpoint.smAndUp||e.$vuetify.breakpoint.width<=430?"flex-column trace-box":""},[n("div",{staticClass:"mt-4 lg:mt-0 flex flex-col items-center space-y-10 lg:space-y-4"},[n("div",{staticClass:"font-weight-bold text-subtitle-2 text-xl-h6 text-sm-subtitle-2 text-md-body-1"},[e._v("\n      ECG\n    ")]),e._v(" "),n("div",{ref:"rightECG",staticClass:"w-full",class:e.mdAndUp?"rightEGC-md":"rightEGC-sm",attrs:{id:"rightECG"}}),e._v(" "),n("div",{staticClass:"text-caption text-xl-body-2",attrs:{id:"ecgDescription"}},[e._v("\n      "+e._s(e.$ecg().description)+"\n    ")])]),e._v(" "),n("div",{staticClass:"mt-4 lg:mt-0 flex flex-col items-center space-y-10 lg:space-y-4"},[n("div",{staticClass:"font-weight-bold text-subtitle-2 text-xl-h6 text-sm-subtitle-2 text-md-body-1"},[e._v("\n      Pressure (mmHg)\n    ")]),e._v(" "),n("div",{ref:"rightLVP",staticClass:"w-full",class:e.mdAndUp?"rightEGC-md":"rightEGC-sm",attrs:{id:"rightLVP"}}),e._v(" "),n("div",{staticClass:"text-caption text-xl-body-2",attrs:{id:"lvpDescription"}},[e._v("\n      "+e._s(e.$lvp().description)+"\n    ")])])])}),[],!1,null,"03c1bbf6",null);t.default=component.exports},401:function(e,t,n){"use strict";n(388)},402:function(e,t,n){var r=n(24)(!1);r.push([e.i,"@import url(https://fonts.googleapis.com/css?family=Helvetica&display=swap);"]),r.push([e.i,".model-panel[data-v-40223e1b]{width:100vw;height:auto}.model-rate[data-v-40223e1b]{position:relative;width:100%;text-align:center}.rate-mdAndUp[data-v-40223e1b]{display:flex;justify-content:center;align-items:center;width:100%;max-height:20%}.rate-mdAndUp .heart-rate[data-v-40223e1b]{margin-top:10px;width:60%;height:100px}.logo-mdAndUp[data-v-40223e1b]{width:50%}.logo-md[data-v-40223e1b]{display:block;height:10%}.trace-main[data-v-40223e1b]{display:flex;flex-direction:column;justify-content:space-around;align-items:center;padding:25px 3px}.tracePanel-md[data-v-40223e1b]{position:fixed;top:0;right:0;height:100%;min-width:280px;max-width:25vw}.tracePanel-sm[data-v-40223e1b]{width:100vw;height:auto}.trace-md[data-v-40223e1b]{min-height:60%}.trace-sm[data-v-40223e1b]{width:100%;margin-bottom:100px;padding-right:10px}",""]),e.exports=r},407:function(e,t,n){var content=n(427);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(25).default)("ab7fc0fc",content,!0,{sourceMap:!1})},416:function(e,t,n){"use strict";n.r(t);var r={data:function(){return{}},computed:{mdAndUp:function(){return this.$vuetify.breakpoint.mdAndUp}}},o=(n(401),n(42)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"model-panel"},[n("model"),e._v(" "),n("div",{staticClass:"mr-24 ml-4 d-flex d-sm-none"},[n("heart-rate")],1)],1),e._v(" "),n("div",{staticClass:"trace-main",class:e.mdAndUp?"tracePanel-md":"tracePanel-sm"},[n("div",{staticClass:"d-none d-sm-flex rate-mdAndUp"},[n("div",{staticClass:"heart-rate"},[n("heart-rate")],1)]),e._v(" "),n("div",{class:e.mdAndUp?"trace-md":"trace-sm"},[n("traces")],1),e._v(" "),n("div",{staticClass:"d-none d-md-flex justify-center",class:e.mdAndUp?"logo-md":"logo-sm"},[n("div",{staticClass:"logo-mdAndUp"},[n("logo")],1)])])])}),[],!1,null,"40223e1b",null);t.default=component.exports;installComponents(component,{Model:n(394).default,HeartRate:n(414).default,Traces:n(395).default,Logo:n(270).default})},426:function(e,t,n){"use strict";n(407)},427:function(e,t,n){var r=n(24)(!1);r.push([e.i,"@import url(https://fonts.googleapis.com/css?family=Helvetica&display=swap);"]),r.push([e.i,".right-pane[data-v-2d834998]{width:100%;color:#afafaf}",""]),e.exports=r},489:function(e,t,n){"use strict";n.r(t);var r=n(30),o=(n(102),{layout:"default",asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o,d,l,content;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=e.route,r=e.$getContentBySlug,o=e.error,d=e.store,l=n.params.slug,null===(content=r(l))&&o({statusCode:404,message:"Unexpected Error, Page not found"}),d.commit("setCurrentContent",content);case 5:case"end":return t.stop()}}),t)})))()}}),d=(n(426),n(42)),component=Object(d.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{ref:"outerDiv"},[t("div",{staticClass:"text-center"},[t("right-pane")],1)])}),[],!1,null,"2d834998",null);t.default=component.exports;installComponents(component,{RightPane:n(416).default})}}]);