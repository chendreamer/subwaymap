(function(e){function t(t){for(var o,a,i=t[0],u=t[1],s=t[2],b=0,p=[];b<i.length;b++)a=i[b],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);l&&l(t);while(p.length)p.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(o=!1)}o&&(c.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={index:0},c=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/subwaymap/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var l=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1563:function(e,t,n){},"34c4":function(e,t,n){},"44f0":function(e,t,n){"use strict";n("34c4")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");function r(e,t,n,r,c,a){var i=Object(o["resolveComponent"])("Home");return Object(o["openBlock"])(),Object(o["createBlock"])(i)}var c=function(e){return Object(o["pushScopeId"])("data-v-4002c897"),e=e(),Object(o["popScopeId"])(),e},a={key:0},i=c((function(){return Object(o["createElementVNode"])("div",{id:"mapContainer"},[Object(o["createElementVNode"])("div",{id:"mysubway"})],-1)})),u={key:1,id:"container"};function s(e,t,n,r,c,s){var l=Object(o["resolveComponent"])("el-option"),b=Object(o["resolveComponent"])("el-select"),p=Object(o["resolveComponent"])("el-button");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,["subway"==e.currentMapMode?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",a,[Object(o["createVNode"])(b,{modelValue:e.currentCityCode,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.currentCityCode=t}),filterable:"",placeholder:"全国地铁城市列表"},{default:Object(o["withCtx"])((function(){return[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.cityList,(function(e){return Object(o["openBlock"])(),Object(o["createBlock"])(l,{label:e.cityname,key:e.adcode,value:e.adcode},{default:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.cityname)+" ("+Object(o["toDisplayString"])(e.spell)+")",1)]})),_:2},1032,["label","value"])})),128))]})),_:1},8,["modelValue"]),i])):(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",u)),Object(o["createVNode"])(p,{id:"modeSwitcher",onClick:s.switchMode},{default:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(s.ModeText),1)]})),_:1},8,["onClick"])],64)}n("ac1f"),n("1276"),n("b680"),n("b0c0");var l={name:"Home",props:{msg:String},data:function(){return{currentMapMode:"map",cityList:[],currentCityCode:"",subwayObj:{},currentRectangle:[]}},mounted:function(){var e=this;window.AMap.plugin("AMap.CitySearch",(function(){var t=new window.AMap.CitySearch;t.getLocalCity((function(t,n){if("complete"===t&&"OK"===n.info){console.log(n);var o=n.rectangle.split(";"),r=(parseFloat(o[0].split(",")[0])+parseFloat(o[1].split(",")[0]))/2,c=(parseFloat(o[0].split(",")[1])+parseFloat(o[1].split(",")[1]))/2;e.currentRectangle=[parseFloat(r.toFixed(7)),parseFloat(c.toFixed(8))]}}))}))},computed:{ModeText:function(){return"map"==this.currentMapMode?"地铁模式":"地图模式"}},methods:{mapInit:function(){var e=this;new window.AMap.Map("container",{resizeEnable:!0,zoom:11,center:e.currentRectangle})},subwayMapInit:function(){var e=this;e.subwayObj=window.subway("mysubway",{adcode:e.currentCityCode||"1100",theme:"colorful",easy:1}),e.subwayObj.getCityList((function(t){for(var n in t)e.cityList.push({adcode:n,spell:t[n]["city"],cityname:t[n]["name"]})})),e.subwayObj.event.on("subway.complete",(function(){e.subwayMapHasInit=!0})),e.subwayObj.event.on("station.touch",(function(t,n){console.log("station.touch");var o=n.id;e.subwayObj.stopAnimation(),e.subwayObj.addInfoWindow(o,{});var r=e.subwayObj.getStCenter(o);e.subwayObj.setCenter(r)})),e.subwayObj.event.on("startStation.touch",(function(n,r){e.subwayObj.stopAnimation(),e.subwayObj.clearInfoWindow(),e.subwayObj.setStart(r.id,{}),t=r,o()})),e.subwayObj.event.on("endStation.touch",(function(t,r){e.subwayObj.stopAnimation(),e.subwayObj.clearInfoWindow(),e.subwayObj.setEnd(r.id,{}),n=r,o()}));var t={},n={};function o(){t.id&&n.id&&(e.subwayObj.route(t.id,n.id,{}),t={},n={})}},switchMode:function(){var e=this;return"map"==e.currentMapMode?(setTimeout((function(){e.subwayMapInit()}),150),this.currentMapMode="subway",Object(o["nextTick"])()):(setTimeout((function(){e.mapInit()}),150),this.currentMapMode="map",Object(o["nextTick"])()),this.currentMapMode}},watch:{currentCityCode:function(){this.subwayObj.setAdcode(this.currentCityCode)},currentRectangle:function(){this.mapInit()}}},b=(n("69a3"),n("be5b"),n("6b0d")),p=n.n(b);const d=p()(l,[["render",s],["__scopeId","data-v-4002c897"]]);var f=d,y={name:"App",components:{Home:f}};n("44f0");const O=p()(y,[["render",r]]);var j=O,w=(n("f5df1"),n("c3a1")),m=(n("7437"),Object(o["createApp"])(j));m.use(w["a"]),m.mount("#app")},"69a3":function(e,t,n){"use strict";n("ff45")},be5b:function(e,t,n){"use strict";n("1563")},ff45:function(e,t,n){}});
//# sourceMappingURL=index.87c8af12.js.map