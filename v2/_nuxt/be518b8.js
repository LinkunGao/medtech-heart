(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{261:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n(383),c=n(4),o=Object(c.g)("v-card__actions"),l=Object(c.g)("v-card__subtitle"),d=Object(c.g)("v-card__text"),v=Object(c.g)("v-card__title");r.a},416:function(t,e,n){var content=n(443);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("00f3a727",content,!0,{sourceMap:!1})},442:function(t,e,n){"use strict";n(416)},443:function(t,e,n){var r=n(24)(!1);r.push([t.i,"@import url(https://fonts.googleapis.com/css?family=Helvetica&display=swap);"]),r.push([t.i,".navigate[data-v-b122e97e]{padding-top:4rem;padding-bottom:2rem;align-items:center;grid-row-gap:1.5rem;row-gap:1.5rem}.navigate .button[data-v-b122e97e]{width:80%;max-width:16rem;padding:1.2rem;border-radius:1.25rem;text-align:center}.navigate .button span[data-v-b122e97e]{font-size:1.3rem;font-weight:600}.navigate .button.--active[data-v-b122e97e]{color:#fff;background-color:rgba(150,30,150,.6)}.navigate .button.--inactive[data-v-b122e97e]{color:#afafaf;background-color:hsla(0,0%,100%,.2)}.contributor[data-v-b122e97e]{background-color:rgba(150,30,150,.3)}.about-panel[data-v-b122e97e]{height:75vh;display:flex;flex-direction:column;justify-content:space-between}.feedback[data-v-b122e97e]{padding:1rem;line-height:2rem}.feedback a[data-v-b122e97e]{color:#ff0}",""]),t.exports=r},462:function(t,e,n){"use strict";n.r(e);var r={name:"AboutUs",data:function(){return{teamSelected:!1,researchSelected:!0}},methods:{toggleNavigation:function(t){this.teamSelected=!this.teamSelected,this.researchSelected=!this.researchSelected,$nuxt.$emit("about-navigation",t)}}},c=(n(442),n(45)),o=n(59),l=n.n(o),d=n(394),v=n(261),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pa-2"},[n("h1",{staticClass:"pt-2 main-heading"},[t._v("About Us")]),t._v(" "),n("div",{staticClass:"about-panel"},[n("div",{staticClass:"navigate flexbox --vertical lg:-mt-10"},[n("div",{staticClass:"button",class:t.researchSelected?"button --active":"button --inactive"},[n("v-btn",{attrs:{plain:""},on:{click:function(e){return t.toggleNavigation("research")}}},[t._v("\n          Our Research\n        ")])],1),t._v(" "),n("div",{staticClass:"button",class:t.teamSelected?"button --active":"button --inactive"},[n("v-btn",{attrs:{plain:""},on:{click:function(e){return t.toggleNavigation("team")}}},[t._v(" Our Team ")])],1)]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"mx-auto contributor lg:-mt-16",attrs:{"max-width":"344"}},[n("v-card-text",[n("div",{staticClass:"text-h6 text--darken-6"},[t._v("Website Design")]),t._v(" "),n("div",{staticClass:"text--darken-4 pl-6"},[t._v("\n          Dr Thiranja Prasad Babarenda Gamage "),n("br"),t._v("\n          Prof Martyn Nash "),n("br"),t._v("\n          Richard Christie "),n("br"),t._v("\n          Chinchien Lin "),n("br"),t._v("\n          Zhinuo Wang "),n("br"),t._v("\n          Linkun Gao "),n("br"),t._v("\n          Alan Wu "),n("br"),t._v("\n          Riffat"),n("br")])])],1)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"feedback font-weight-medium text--primary lg:-mt-16"},[t._v("\n      Visit our "),n("a",{attrs:{href:"#"}},[t._v("Online form")]),t._v(" to give us your valuable feedback\n      about this app.\n    ")])}],!1,null,"b122e97e",null);e.default=component.exports;l()(component,{VBtn:d.a,VCardText:v.a})}}]);