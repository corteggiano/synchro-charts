(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1039:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));var r=1.5,o=function(t){return t.map((function(t){return{id:t.id,name:t.name,detailedName:t.detailedName,color:t.color,unit:t.unit,dataType:t.dataType,streamType:t.streamType,associatedStreams:t.associatedStreams,isLoading:t.isLoading,isRefreshing:t.isRefreshing,error:t.error,resolution:t.resolution}}))}},1047:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(141),o=n(55),i=n(1035),a=Object(i.b)((function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){if(!("string"==typeof t||t instanceof String)){var e=n(t);throw null===t?e="null":"object"===e&&(e=t.constructor.name),new TypeError("Expected a string but received a ".concat(e))}},t.exports=e.default,t.exports.default=e.default}));Object(i.c)(a);var u=Object(i.b)((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(0,n.default)(t);var a=e.strictSeparator?o.test(t):r.test(t);return a&&e.strict?i(t):a};var n=function(t){return t&&t.__esModule?t:{default:t}}(a),r=/^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/,o=/^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/,i=function(t){var e=t.match(/^(\d{4})-?(\d{3})([ T]{1}\.*|$)/);if(e){var n=Number(e[1]),r=Number(e[2]);return n%4==0&&n%100!=0||n%400==0?r<=366:r<=365}var o=t.match(/(\d{4})-?(\d{0,2})-?(\d*)/).map(Number),i=o[1],a=o[2],u=o[3],c=a?"0".concat(a).slice(-2):a,s=u?"0".concat(u).slice(-2):u,l=new Date("".concat(i,"-").concat(c||"01","-").concat(s||"01"));return!a||!u||l.getUTCFullYear()===i&&l.getUTCMonth()+1===a&&l.getUTCDate()===u};t.exports=e.default,t.exports.default=e.default})),c=Object(i.c)(u),s=function(t){return t instanceof Date||c(t)},l=function(t){var e=t.viewport;if(null!=e){if(Object(o.b)(e)&&null!=e.duration&&console.warn("Detected both static and live viewport type. Duration will be used"),Object(o.b)(e)&&(!s(e.start)||!s(e.end)))throw new Error("Unable to parse start date: '"+e.start+"' and/or end date: '"+e.end+"'");if(!Object(o.b)(e)&&"string"==typeof e.duration&&null==Object(r.a)(e.duration,"ms"))throw new Error("Unable to parse duration: '"+e.duration+"'")}}},1048:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(14),o=n(78),i=n(77),a=function(t){var e=t.isEnabled,n=void 0===e||e,a=t.value,u=t.unit;return n&&null!=a?"number"==typeof a?[Object(i.b)(a),u&&Object(r.j)("span",{class:"unit"}," ",u)]:[String(a),u&&Object(r.j)("span",{class:"unit"}," ",u)]:Object(r.j)("span",{"data-testid":"no-value-present"},o.a)}},1050:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a}));var r=n(8),o={widgetId:"fake-id",viewport:{start:new Date(1995,0,0,0),end:new Date(2020,1,0,0),yMin:0,yMax:1e4},size:{width:475,height:350,marginLeft:50,marginRight:50,marginTop:24,marginBottom:30},movement:{enableXScroll:!0,enableYScroll:!1,zoomMax:1/0,zoomMin:1e-5},layout:{xGridVisible:!1,yGridVisible:!0,xTicksVisible:!0,yTicksVisible:!0},scale:{xScaleType:r.d.TimeSeries,yScaleType:r.d.Linear,xScaleSide:"bottom",yScaleSide:"left"},dataStreams:[],legend:{position:r.c.BOTTOM,width:170}},i={showColor:!0},a={showColor:!1}},1055:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return c}));var r=n(65),o=n(1035),i=Object(o.b)((function(e,n){function r(t){return"object"!=typeof t||"toString"in t?t:Object.prototype.toString.call(t).slice(8,-1)}Object.defineProperty(n,"__esModule",{value:!0});var o="object"==typeof t&&!0;function i(t,e){if(!t){if(o)throw new Error("Invariant failed");throw new Error(e())}}n.invariant=i;var a=Object.prototype.hasOwnProperty,u=Array.prototype.splice,c=Object.prototype.toString;function s(t){return c.call(t).slice(8,-1)}var l=Object.assign||function(t,e){return f(e).forEach((function(n){a.call(e,n)&&(t[n]=e[n])})),t},f="function"==typeof Object.getOwnPropertySymbols?function(t){return Object.keys(t).concat(Object.getOwnPropertySymbols(t))}:function(t){return Object.keys(t)};function d(t){return Array.isArray(t)?l(t.constructor(t.length),t):"Map"===s(t)?new Map(t):"Set"===s(t)?new Set(t):t&&"object"==typeof t?l(Object.create(Object.getPrototypeOf(t)),t):t}var p=function(){function t(){this.commands=l({},h),this.update=this.update.bind(this),this.update.extend=this.extend=this.extend.bind(this),this.update.isEquals=function(t,e){return t===e},this.update.newContext=function(){return(new t).update}}return Object.defineProperty(t.prototype,"isEquals",{get:function(){return this.update.isEquals},set:function(t){this.update.isEquals=t},enumerable:!0,configurable:!0}),t.prototype.extend=function(t,e){this.commands[t]=e},t.prototype.update=function(t,e){var n=this,r="function"==typeof e?{$apply:e}:e;Array.isArray(t)&&Array.isArray(r)||i(!Array.isArray(r),(function(){return"update(): You provided an invalid spec to update(). The spec may not contain an array except as the value of $set, $push, $unshift, $splice or any custom command allowing an array value."})),i("object"==typeof r&&null!==r,(function(){return"update(): You provided an invalid spec to update(). The spec and every included key path must be plain objects containing one of the following commands: "+Object.keys(n.commands).join(", ")+"."}));var o=t;return f(r).forEach((function(e){if(a.call(n.commands,e)){var i=t===o;o=n.commands[e](r[e],o,r,t),i&&n.isEquals(o,t)&&(o=t)}else{var u="Map"===s(t)?n.update(t.get(e),r[e]):n.update(t[e],r[e]),c="Map"===s(o)?o.get(e):o[e];n.isEquals(u,c)&&(void 0!==u||a.call(t,e))||(o===t&&(o=d(t)),"Map"===s(o)?o.set(e,u):o[e]=u)}})),o},t}();n.Context=p;var h={$push:function(t,e,n){return y(e,n,"$push"),t.length?e.concat(t):e},$unshift:function(t,e,n){return y(e,n,"$unshift"),t.length?t.concat(e):e},$splice:function(t,e,n,o){return function(t,e){i(Array.isArray(t),(function(){return"Expected $splice target to be an array; got "+r(t)})),g(e.$splice)}(e,n),t.forEach((function(t){g(t),e===o&&t.length&&(e=d(o)),u.apply(e,t)})),e},$set:function(t,e,n){return function(t){i(1===Object.keys(t).length,(function(){return"Cannot have more than one key in an object with $set"}))}(n),t},$toggle:function(t,e){b(t,"$toggle");var n=t.length?d(e):e;return t.forEach((function(t){n[t]=!e[t]})),n},$unset:function(t,e,n,r){return b(t,"$unset"),t.forEach((function(t){Object.hasOwnProperty.call(e,t)&&(e===r&&(e=d(r)),delete e[t])})),e},$add:function(t,e,n,r){return m(e,"$add"),b(t,"$add"),"Map"===s(e)?t.forEach((function(t){var n=t[0],o=t[1];e===r&&e.get(n)!==o&&(e=d(r)),e.set(n,o)})):t.forEach((function(t){e!==r||e.has(t)||(e=d(r)),e.add(t)})),e},$remove:function(t,e,n,r){return m(e,"$remove"),b(t,"$remove"),t.forEach((function(t){e===r&&e.has(t)&&(e=d(r)),e.delete(t)})),e},$merge:function(t,e,n,o){return function(t,e){i(e&&"object"==typeof e,(function(){return"update(): $merge expects a spec of type 'object'; got "+r(e)})),i(t&&"object"==typeof t,(function(){return"update(): $merge expects a target of type 'object'; got "+r(t)}))}(e,t),f(t).forEach((function(n){t[n]!==e[n]&&(e===o&&(e=d(o)),e[n]=t[n])})),e},$apply:function(t,e){var n;return i("function"==typeof(n=t),(function(){return"update(): expected spec of $apply to be a function; got "+r(n)+"."})),t(e)}},v=new p;function y(t,e,n){i(Array.isArray(t),(function(){return"update(): expected target of "+r(n)+" to be an array; got "+r(t)+"."})),b(e[n],n)}function b(t,e){i(Array.isArray(t),(function(){return"update(): expected spec of "+r(e)+" to be an array; got "+r(t)+". Did you forget to wrap your parameter in an array?"}))}function g(t){i(Array.isArray(t),(function(){return"update(): expected spec of $splice to be an array of arrays; got "+r(t)+". Did you forget to wrap your parameters in an array?"}))}function m(t,e){var n=s(t);i("Map"===n||"Set"===n,(function(){return"update(): "+r(e)+" expects a target of type Set or Map; got "+r(n)}))}n.isEquals=v.update.isEquals,n.extend=v.extend,n.default=v.update,n.default.default=e.exports=l(n.default,n)})),a=Object(o.c)(i),u=function(t,e){if(0===t)return"raw data";var n=Object(r.g)(t),o=n.day,i=n.hour,a=n.minute,u=n.seconds,c=function(t){return t>1?"s":""};return 0!==o?o+" day"+c(o)+" "+e:0!==i?i+" hour"+c(i)+" "+e:0!==a?a+" minute"+c(a)+" "+e:0!==u?u+" second"+c(u)+" "+e:"N/A"},c=function(t,e,n){var r,o=t.findIndex((function(t){return t.id===n}));return o>=0?a(t,((r={})[o]={$set:{id:n,name:e}},r)):function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),o=0;for(e=0;e<n;e++)for(var i=arguments[e],a=0,u=i.length;a<u;a++,o++)r[o]=i[a];return r}(t,[{name:e,id:n}])}}).call(this,n(103))},961:function(t,e,n){"use strict";n.r(e),n.d(e,"sc_status_timeline",(function(){return w})),n.d(e,"sc_status_timeline_overlay",(function(){return _})),n.d(e,"sc_status_timeline_overlay_row",(function(){return O})),n.d(e,"sc_threshold_legend",(function(){return $})),n.d(e,"sc_threshold_legend_row",(function(){return T}));var r,o=n(14),i=n(8),a=n(39),u=(n(78),n(141),n(65),n(70)),c=n(55),s=(n(77),n(102),n(180)),l=n(142),f=(n(1037),n(1052)),d=n(1035),p=(n(1041),n(1042),n(1038),n(1046),n(1039)),h=n(1047),v=n(1048),y=n(1055),b=n(1050),g={marginLeft:10,marginTop:0,marginBottom:b.a.size.marginBottom,marginRight:5},m=function(t){return function(e){var n=e.size;return Object(o.j)("sc-tooltip",Object.assign({},e,{dataAlignment:i.b.LEFT,top:-n.height+f.b+4,sortPoints:!1,maxDurationFromDate:t?t.expires:void 0,showDataStreamColor:!1,showBlankTooltipRows:!0,visualizesAlarms:!0,supportString:!0}))}},j=function(t){return Object.assign(Object.assign({},t),{yMin:0,yMax:f.a})},w=function(){function t(t){var e=this;Object(o.l)(this,t),this.gestures=!0,this.isEditing=!1,this.bufferFactor=4,this.minBufferSize=1e3,this.thresholds=function(){return null==e.annotations||null==e.annotations.y?[]:e.annotations.y.filter(u.i)}}return t.prototype.componentWillRender=function(){Object(h.a)(this)},t.prototype.componentWillLoad=function(){this.componentViewport=j(this.viewport)},t.prototype.onViewportChange=function(){this.componentViewport=j(this.viewport)},t.prototype.render=function(){var t=this;return Object(o.j)("sc-size-provider",{size:this.size,renderFunc:function(e){var n=Object.assign(Object.assign(Object.assign(Object.assign({},b.a.size),g),t.size),e),r=n.height-50,i=Object.assign(Object.assign({},n),{height:r});return[Object(o.j)("div",{class:"status-timeline",style:{height:i.height+"px"}},Object(o.j)("sc-webgl-base-chart",{axis:Object.assign(Object.assign({},t.axis),{showY:!1}),gestures:t.gestures,configId:t.widgetId,annotations:Object.assign(Object.assign({},t.annotations),{show:!1,thresholdOptions:{showColor:!0}}),supportedDataTypes:[a.b.NUMBER,a.b.STRING,a.b.BOOLEAN],updateChartScene:f.d,createChartScene:f.c,size:i,dataStreams:t.dataStreams,alarms:t.alarms,viewport:t.componentViewport,minBufferSize:t.minBufferSize,bufferFactor:t.bufferFactor,isEditing:t.isEditing,renderTooltip:m(t.alarms),displaysError:!1,supportString:!0,visualizesAlarms:!0,displaysNoDataPresentMsg:!1,messageOverrides:t.messageOverrides}),Object(o.j)("sc-status-timeline-overlay",{isEditing:t.isEditing,thresholds:t.thresholds(),date:Object(c.b)(t.viewport)?new Date(t.viewport.end):new Date,dataStreams:t.dataStreams,size:i,widgetId:t.widgetId})),Object(o.j)("div",{class:"threshold-legend-container",style:{maxHeight:"50px"}},Object(o.j)("sc-threshold-legend",{thresholds:t.thresholds()}))]}})},Object.defineProperty(t,"watchers",{get:function(){return{viewport:["onViewportChange"]}},enumerable:!1,configurable:!0}),t}();w.style="sc-status-timeline .status-timeline{position:relative}sc-threahold-legend{overflow-y:scroll;overflow-x:hidden;-ms-overflow-style:none;scrollbar-width:none}sc-threshold-legend::-webkit-scrollbar{display:none}";var _=function(){function t(t){var e=this;Object(o.l)(this,t),this.widgetUpdated=Object(o.h)(this,"widgetUpdated",7),this.names=[],this.emitUpdatedWidgetConfiguration=function(t){var n={movement:void 0,scale:void 0,layout:void 0,legend:void 0,annotations:void 0,axis:void 0,widgetId:e.widgetId,dataStreams:t?Object(p.b)(t):e.dataStreams};e.widgetUpdated.emit(n)},this.onChangeLabel=function(t){var n=t.streamId,r=t.name;e.names=Object(y.b)(e.names,r,n),e.onWidgetUpdated()}}return t.prototype.onWidgetUpdated=function(){var t=this,e=this.dataStreams.map((function(e){var n=t.names.find((function(t){var n=t.id;return e.id===n})),r=null!=n?n.name:e.name;return Object.assign(Object.assign({},e),{name:r})}));this.emitUpdatedWidgetConfiguration(e)},t.prototype.render=function(){var t=this,e=this.size,n=e.width,r=e.height,a=e.marginLeft,u=e.marginRight,c=e.marginTop,f=e.marginBottom;return Object(o.j)("div",{class:"overlay-container",style:{width:n-u-a-1+"px",height:r-c-f+"px",left:a+"px",top:c+"px"}},this.dataStreams.map((function(e){var n=Object(s.c)(Object(l.a)(e,e.resolution),t.date,i.b.LEFT),r=n?n.y:void 0,a=Object(s.b)({value:r,date:t.date,dataStreams:t.dataStreams,dataStream:e,thresholds:t.thresholds}),u=e.error,c=null==u?r:u,f=null==u?e.unit:void 0,d=null==u&&null!=a?a.color:void 0;return Object(o.j)("sc-status-timeline-overlay-row",{key:e.id,label:e.name,detailedLabel:e.detailedName,value:c,unit:f,isEditing:t.isEditing,valueColor:d,icon:null==u?a&&a.icon:i.f.ERROR,onNameChange:function(n){return t.onChangeLabel({streamId:e.id,name:n})}})})))},t}();_.style="sc-status-timeline-overlay .expando{-ms-flex-positive:1;flex-grow:1}sc-status-timeline-overlay .overlay-container{position:absolute;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between}";var O=function(){function t(t){Object(o.l)(this,t)}return t.prototype.render=function(){return[Object(o.j)("div",{class:"stream-info"},Object(o.j)("sc-data-stream-name",{label:this.label,detailedLabel:this.detailedLabel,onNameChange:this.onNameChange,isEditing:this.isEditing}),Object(o.j)("div",{class:"expando"}),Object(o.j)("span",{class:"value",style:{color:this.valueColor||"unset",display:"flex",alignItems:"center"}},this.icon&&Object(o.j)("sc-chart-icon",{name:this.icon}),Object(o.j)(v.a,{value:this.value,unit:this.unit}))),Object(o.j)("div",{class:"no-data-visualization"})]},t}();O.style=":root{--timeline-row-margin-top:34px}sc-status-timeline-overlay-row{-ms-flex-positive:1;flex-grow:1;width:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between}sc-status-timeline-overlay-row sc-data-stream-name{max-height:var(--timeline-row-margin-top);overflow:hidden}sc-status-timeline-overlay-row .value{max-width:200px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding-bottom:2px}sc-status-timeline-overlay-row .unit{padding-left:2px}sc-status-timeline-overlay-row .stream-info{text-overflow:ellipsis;overflow:hidden;height:var(--timeline-row-margin-top);display:-ms-flexbox;display:flex;font-size:14px;padding:0.1em;-ms-flex-align:end;align-items:flex-end}sc-status-timeline-overlay-row .no-data-visualization{-ms-flex-positive:1;flex-grow:1;background:repeating-linear-gradient(45deg, #efefef, #efefef 10px, #acacac 10px, #acacac 20px)}";var x=Object(d.b)((function(t,e){var n="__lodash_hash_undefined__",r=9007199254740991,o="[object Arguments]",i="[object Array]",a="[object Boolean]",u="[object Date]",c="[object Error]",s="[object Function]",l="[object Map]",f="[object Number]",p="[object Object]",h="[object Promise]",v="[object RegExp]",y="[object Set]",b="[object String]",g="[object Symbol]",m="[object WeakMap]",j="[object ArrayBuffer]",w="[object DataView]",_=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,O=/^\w*$/,x=/^\./,S=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,E=/\\(\\)?/g,A=/^\[object .+?Constructor\]$/,$=/^(?:0|[1-9]\d*)$/,T={};T["[object Float32Array]"]=T["[object Float64Array]"]=T["[object Int8Array]"]=T["[object Int16Array]"]=T["[object Int32Array]"]=T["[object Uint8Array]"]=T["[object Uint8ClampedArray]"]=T["[object Uint16Array]"]=T["[object Uint32Array]"]=!0,T[o]=T[i]=T[j]=T[a]=T[w]=T[u]=T[c]=T[s]=T[l]=T[f]=T[p]=T[v]=T[y]=T[b]=T[m]=!1;var z="object"==typeof d.a&&d.a&&d.a.Object===Object&&d.a,k="object"==typeof self&&self&&self.Object===Object&&self,C=z||k||Function("return this")(),M=e&&!e.nodeType&&e,L=M&&t&&!t.nodeType&&t,U=L&&L.exports===M&&z.process,D=function(){try{return U&&U.binding("util")}catch(t){}}(),N=D&&D.isTypedArray;function R(t,e){return!(!t||!t.length)&&function(t,e,n){if(e!=e)return function(t,e,n,r){for(var o=t.length,i=n+(r?1:-1);r?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,B,n);for(var r=n-1,o=t.length;++r<o;)if(t[r]===e)return r;return-1}(t,e,0)>-1}function I(t,e,n){for(var r=-1,o=t?t.length:0;++r<o;)if(n(e,t[r]))return!0;return!1}function P(t,e){for(var n=-1,r=t?t.length:0;++n<r;)if(e(t[n],n,t))return!0;return!1}function B(t){return t!=t}function F(t,e){return t.has(e)}function V(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function q(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n}function W(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}var G,H=Array.prototype,Y=Function.prototype,Q=Object.prototype,J=C["__core-js_shared__"],Z=(G=/[^.]+$/.exec(J&&J.keys&&J.keys.IE_PROTO||""))?"Symbol(src)_1."+G:"",X=Y.toString,K=Q.hasOwnProperty,tt=Q.toString,et=RegExp("^"+X.call(K).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),nt=C.Symbol,rt=C.Uint8Array,ot=Q.propertyIsEnumerable,it=H.splice,at=function(t,e){return function(n){return t(e(n))}}(Object.keys,Object),ut=Nt(C,"DataView"),ct=Nt(C,"Map"),st=Nt(C,"Promise"),lt=Nt(C,"Set"),ft=Nt(C,"WeakMap"),dt=Nt(Object,"create"),pt=Wt(ut),ht=Wt(ct),vt=Wt(st),yt=Wt(lt),bt=Wt(ft),gt=nt?nt.prototype:void 0,mt=gt?gt.valueOf:void 0,jt=gt?gt.toString:void 0;function wt(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function _t(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Ot(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function xt(t){var e=-1,n=t?t.length:0;for(this.__data__=new Ot;++e<n;)this.add(t[e])}function St(t){this.__data__=new _t(t)}function Et(t,e){var n=Qt(t)||Yt(t)?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],r=n.length,o=!!r;for(var i in t)!e&&!K.call(t,i)||o&&("length"==i||It(i,r))||n.push(i);return n}function At(t,e){for(var n=t.length;n--;)if(Ht(t[n][0],e))return n;return-1}function $t(t,e){for(var n=0,r=(e=Pt(e,t)?[e]:Ct(e)).length;null!=t&&n<r;)t=t[qt(e[n++])];return n&&n==r?t:void 0}function Tt(t,e){return null!=t&&e in Object(t)}function zt(t,e,n,r,a){return t===e||(null==t||null==e||!Kt(t)&&!te(e)?t!=t&&e!=e:function(t,e,n,r,a,u){var c=Qt(t),s=Qt(e),l=i,f=i;c||(l=(l=Rt(t))==o?p:l),s||(f=(f=Rt(e))==o?p:f);var d=l==p&&!V(t),h=f==p&&!V(e),v=l==f;if(v&&!d)return u||(u=new St),c||ne(t)?Lt(t,e,n,r,a,u):Ut(t,e,l,n,r,a,u);if(!(2&a)){var y=d&&K.call(t,"__wrapped__"),b=h&&K.call(e,"__wrapped__");if(y||b){var g=y?t.value():t,m=b?e.value():e;return u||(u=new St),n(g,m,r,a,u)}}return!!v&&(u||(u=new St),function(t,e,n,r,o,i){var a=2&o,u=re(t),c=u.length;if(c!=re(e).length&&!a)return!1;for(var s=c;s--;){var l=u[s];if(!(a?l in e:K.call(e,l)))return!1}var f=i.get(t);if(f&&i.get(e))return f==e;var d=!0;i.set(t,e),i.set(e,t);for(var p=a;++s<c;){var h=t[l=u[s]],v=e[l];if(r)var y=a?r(v,h,l,e,t,i):r(h,v,l,t,e,i);if(!(void 0===y?h===v||n(h,v,r,o,i):y)){d=!1;break}p||(p="constructor"==l)}if(d&&!p){var b=t.constructor,g=e.constructor;b==g||!("constructor"in t)||!("constructor"in e)||"function"==typeof b&&b instanceof b&&"function"==typeof g&&g instanceof g||(d=!1)}return i.delete(t),i.delete(e),d}(t,e,n,r,a,u))}(t,e,zt,n,r,a))}function kt(t,e){return Pt(t)&&Bt(e)?Ft(qt(t),e):function(n){var r=function(t,e,n){var r=null==t?void 0:$t(t,e);return void 0===r?n:r}(n,t);return void 0===r&&r===e?function(t,e){return null!=t&&function(t,e,n){for(var r,o=-1,i=(e=Pt(e,t)?[e]:Ct(e)).length;++o<i;){var a=qt(e[o]);if(!(r=null!=t&&n(t,a)))break;t=t[a]}return r||!!(i=t?t.length:0)&&Xt(i)&&It(a,i)&&(Qt(t)||Yt(t))}(t,e,Tt)}(n,t):zt(e,r,void 0,3)}}function Ct(t){return Qt(t)?t:Vt(t)}wt.prototype.clear=function(){this.__data__=dt?dt(null):{}},wt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},wt.prototype.get=function(t){var e=this.__data__;if(dt){var r=e[t];return r===n?void 0:r}return K.call(e,t)?e[t]:void 0},wt.prototype.has=function(t){var e=this.__data__;return dt?void 0!==e[t]:K.call(e,t)},wt.prototype.set=function(t,e){return this.__data__[t]=dt&&void 0===e?n:e,this},_t.prototype.clear=function(){this.__data__=[]},_t.prototype.delete=function(t){var e=this.__data__,n=At(e,t);return!(n<0)&&(n==e.length-1?e.pop():it.call(e,n,1),!0)},_t.prototype.get=function(t){var e=this.__data__,n=At(e,t);return n<0?void 0:e[n][1]},_t.prototype.has=function(t){return At(this.__data__,t)>-1},_t.prototype.set=function(t,e){var n=this.__data__,r=At(n,t);return r<0?n.push([t,e]):n[r][1]=e,this},Ot.prototype.clear=function(){this.__data__={hash:new wt,map:new(ct||_t),string:new wt}},Ot.prototype.delete=function(t){return Dt(this,t).delete(t)},Ot.prototype.get=function(t){return Dt(this,t).get(t)},Ot.prototype.has=function(t){return Dt(this,t).has(t)},Ot.prototype.set=function(t,e){return Dt(this,t).set(t,e),this},xt.prototype.add=xt.prototype.push=function(t){return this.__data__.set(t,n),this},xt.prototype.has=function(t){return this.__data__.has(t)},St.prototype.clear=function(){this.__data__=new _t},St.prototype.delete=function(t){return this.__data__.delete(t)},St.prototype.get=function(t){return this.__data__.get(t)},St.prototype.has=function(t){return this.__data__.has(t)},St.prototype.set=function(t,e){var n=this.__data__;if(n instanceof _t){var r=n.__data__;if(!ct||r.length<199)return r.push([t,e]),this;n=this.__data__=new Ot(r)}return n.set(t,e),this};var Mt=lt&&1/W(new lt([,-0]))[1]==1/0?function(t){return new lt(t)}:function(){};function Lt(t,e,n,r,o,i){var a=2&o,u=t.length,c=e.length;if(u!=c&&!(a&&c>u))return!1;var s=i.get(t);if(s&&i.get(e))return s==e;var l=-1,f=!0,d=1&o?new xt:void 0;for(i.set(t,e),i.set(e,t);++l<u;){var p=t[l],h=e[l];if(r)var v=a?r(h,p,l,e,t,i):r(p,h,l,t,e,i);if(void 0!==v){if(v)continue;f=!1;break}if(d){if(!P(e,(function(t,e){if(!d.has(e)&&(p===t||n(p,t,r,o,i)))return d.add(e)}))){f=!1;break}}else if(p!==h&&!n(p,h,r,o,i)){f=!1;break}}return i.delete(t),i.delete(e),f}function Ut(t,e,n,r,o,i,s){switch(n){case w:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case j:return!(t.byteLength!=e.byteLength||!r(new rt(t),new rt(e)));case a:case u:case f:return Ht(+t,+e);case c:return t.name==e.name&&t.message==e.message;case v:case b:return t==e+"";case l:var d=q;case y:var p=2&i;if(d||(d=W),t.size!=e.size&&!p)return!1;var h=s.get(t);if(h)return h==e;i|=1,s.set(t,e);var m=Lt(d(t),d(e),r,o,i,s);return s.delete(t),m;case g:if(mt)return mt.call(t)==mt.call(e)}return!1}function Dt(t,e){var n,r,o=t.__data__;return("string"==(r=typeof(n=e))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?o["string"==typeof e?"string":"hash"]:o.map}function Nt(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return function(t){return!(!Kt(t)||(e=t,Z&&Z in e))&&(Zt(t)||V(t)?et:A).test(Wt(t));var e}(n)?n:void 0}var Rt=function(t){return tt.call(t)};function It(t,e){return!!(e=null==e?r:e)&&("number"==typeof t||$.test(t))&&t>-1&&t%1==0&&t<e}function Pt(t,e){if(Qt(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!ee(t))||O.test(t)||!_.test(t)||null!=e&&t in Object(e)}function Bt(t){return t==t&&!Kt(t)}function Ft(t,e){return function(n){return null!=n&&n[t]===e&&(void 0!==e||t in Object(n))}}(ut&&Rt(new ut(new ArrayBuffer(1)))!=w||ct&&Rt(new ct)!=l||st&&Rt(st.resolve())!=h||lt&&Rt(new lt)!=y||ft&&Rt(new ft)!=m)&&(Rt=function(t){var e=tt.call(t),n=e==p?t.constructor:void 0,r=n?Wt(n):void 0;if(r)switch(r){case pt:return w;case ht:return l;case vt:return h;case yt:return y;case bt:return m}return e});var Vt=Gt((function(t){var e;t=null==(e=t)?"":function(t){if("string"==typeof t)return t;if(ee(t))return jt?jt.call(t):"";var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}(e);var n=[];return x.test(t)&&n.push(""),t.replace(S,(function(t,e,r,o){n.push(r?o.replace(E,"$1"):e||t)})),n}));function qt(t){if("string"==typeof t||ee(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}function Wt(t){if(null!=t){try{return X.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Gt(t,e){if("function"!=typeof t||e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function n(){var r=arguments,o=e?e.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=t.apply(this,r);return n.cache=i.set(o,a),a};return n.cache=new(Gt.Cache||Ot),n}function Ht(t,e){return t===e||t!=t&&e!=e}function Yt(t){return function(t){return te(t)&&Jt(t)}(t)&&K.call(t,"callee")&&(!ot.call(t,"callee")||tt.call(t)==o)}Gt.Cache=Ot;var Qt=Array.isArray;function Jt(t){return null!=t&&Xt(t.length)&&!Zt(t)}function Zt(t){var e=Kt(t)?tt.call(t):"";return e==s||"[object GeneratorFunction]"==e}function Xt(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=r}function Kt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function te(t){return!!t&&"object"==typeof t}function ee(t){return"symbol"==typeof t||te(t)&&tt.call(t)==g}var ne=N?function(t){return function(e){return t(e)}}(N):function(t){return te(t)&&Xt(t.length)&&!!T[tt.call(t)]};function re(t){return Jt(t)?Et(t):function(t){if(n=(e=t)&&e.constructor,e!==("function"==typeof n&&n.prototype||Q))return at(t);var e,n,r=[];for(var o in Object(t))K.call(t,o)&&"constructor"!=o&&r.push(o);return r}(t)}function oe(t){return t}t.exports=function(t,e){return t&&t.length?function(t,e,n){var r=-1,o=R,i=t.length,a=!0,u=[],c=u;if(n)a=!1,o=I;else if(i>=200){var s=e?null:Mt(t);if(s)return W(s);a=!1,o=F,c=new xt}else c=e?[]:u;t:for(;++r<i;){var l=t[r],f=e?e(l):l;if(l=n||0!==l?l:0,a&&f==f){for(var d=c.length;d--;)if(c[d]===f)continue t;e&&c.push(f),u.push(l)}else o(c,f,n)||(c!==u&&c.push(f),u.push(l))}return u}(t,"function"==typeof(o=e)?o:null==o?oe:"object"==typeof o?Qt(o)?kt(o[0],o[1]):1==(r=function(t){for(var e=re(t),n=e.length;n--;){var r=e[n],o=t[r];e[n]=[r,o,Bt(o)]}return e}(n=o)).length&&r[0][2]?Ft(r[0][0],r[0][1]):function(t){return t===n||function(t,e,n,r){var o=n.length,i=o,a=!r;if(null==t)return!i;for(t=Object(t);o--;){var u=n[o];if(a&&u[2]?u[1]!==t[u[0]]:!(u[0]in t))return!1}for(;++o<i;){var c=(u=n[o])[0],s=t[c],l=u[1];if(a&&u[2]){if(void 0===s&&!(c in t))return!1}else{var f=new St;if(r)var d=r(s,l,c,t,e,f);if(!(void 0===d?zt(l,s,r,3,f):d))return!1}}return!0}(t,n,r)}:Pt(i=o)?function(t){return function(e){return null==e?void 0:e[t]}}(qt(i)):function(t){return function(e){return $t(e,t)}}(i)):[];var n,r,o,i}})),S=((r={})[i.a.EQUAL]="=",r[i.a.LESS_THAN]="<",r[i.a.LESS_THAN_EQUAL]="<=",r[i.a.GREATER_THAN]=">",r[i.a.GREATER_THAN_EQUAL]=">=",r),E=function(t){return t.comparisonOperator===i.a.EQUAL?String(t.value):"y "+S[t.comparisonOperator]+" "+t.value},A=function(t){return t.value+"-"+t.comparisonOperator+"-"+t.color},$=function(){function t(t){Object(o.l)(this,t)}return t.prototype.uniqueThresholds=function(){return x(this.thresholds,A)},t.prototype.render=function(){return this.uniqueThresholds().map((function(t){return Object(o.j)("sc-threshold-legend-row",{key:A(t),color:t.color,label:E(t)})}))},t}();$.style="sc-threshold-legend{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;overflow-y:scroll;font-size:14px;line-height:22px}sc-threshold-legend-row{padding:0.1em 1em}sc-threshold-legend-row .box{display:inline-block;border-radius:2px;margin-right:8px;--box-size:12px;width:var(--box-size);height:var(--box-size)}";var T=function(){function t(t){Object(o.l)(this,t)}return t.prototype.render=function(){return Object(o.j)("div",null,Object(o.j)("div",{class:"box",style:{backgroundColor:this.color}})," ",this.label)},t}()}}]);