(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{398:function(t,e,n){var content=n(411);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("6686ba38",content,!0,{sourceMap:!1})},410:function(t,e,n){"use strict";n(398)},411:function(t,e,n){var d=n(24)(!1);d.push([t.i,"@import url(https://fonts.googleapis.com/css?family=Helvetica&display=swap);"]),d.push([t.i,"#ecgDescription[data-v-183c08c8],#lvpDescription[data-v-183c08c8]{width:90%}.item[data-v-183c08c8],.trace-box[data-v-183c08c8]{min-width:280px;max-width:25vw}.rightEGC-sm[data-v-183c08c8]{min-height:80px}.rightEGC-md[data-v-183c08c8]{min-height:100px}",""]),t.exports=d},420:function(t,e,n){"use strict";n.r(e);var d={data:function(){return{idleTime:0,idleTimeLimit:3e5,oldTime:new Date,render:void 0}},computed:{mdAndUp:function(){return this.$vuetify.breakpoint.mdAndUp}},mounted:function(){window.ecgDone=!1,window.lvpDone=!1,ecgName=null,lvpName=null,loadChart(this.$ecg(),this.$lvp(),this.$category(),1),this.updateEcg()},methods:{updateEcg:function(){var t=this;if(this.render=this.$currentRender(),this.render){this.render.addPreRenderCallbackFunction((function(){var e=new Date;t.idleTime=t.idleTime+e.getTime()-t.oldTime.getTime(),t.oldTime=e;var n=t.render.getCurrentTime()/3e3;updateIndicator(n)}))}}}},c=(n(410),n(45)),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex trace-box",class:t.$vuetify.breakpoint.smAndUp||t.$vuetify.breakpoint.width<=430?"flex-column":""},[n("div",{staticClass:"mt-4 lg:mt-0 flex flex-col items-center space-y-10 lg:space-y-4"},[n("div",{staticClass:"font-weight-bold text-subtitle-2 text-xl-h6 text-sm-subtitle-2 text-md-body-1"},[t._v("\n      ECG\n    ")]),t._v(" "),n("div",{ref:"rightECG",staticClass:"w-full",class:t.mdAndUp?"rightEGC-md":"rightEGC-sm",attrs:{id:"rightECG"}}),t._v(" "),n("div",{staticClass:"text-caption text-xl-body-2",attrs:{id:"ecgDescription"}},[t._v("\n      "+t._s(t.$ecg().description)+"\n    ")])]),t._v(" "),n("div",{staticClass:"pt-4 pb-1 d-flex flex-column align-center item"},[n("div",{staticClass:"font-weight-bold text-subtitle-2 text-xl-h6 text-sm-subtitle-2 text-md-body-1"},[t._v("\n      Pressure (mmHg)\n    ")]),t._v(" "),n("div",{ref:"rightLVP",staticClass:"w-full",class:t.mdAndUp?"rightEGC-md":"rightEGC-sm",attrs:{id:"rightLVP"}}),t._v(" "),n("div",{staticClass:"text-caption text-xl-body-2",attrs:{id:"lvpDescription"}},[t._v("\n      "+t._s(t.$lvp().description)+"\n    ")])])])}),[],!1,null,"183c08c8",null);e.default=component.exports}}]);