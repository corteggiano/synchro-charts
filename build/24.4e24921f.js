(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1030:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o}));var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{};function o(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function i(t,e,n){return t(n={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},n.exports),n.exports}}).call(this,n(40))},1041:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(141),o=n(55),i=n(1030),c=Object(i.b)((function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){if(!("string"==typeof t||t instanceof String)){var e=n(t);throw null===t?e="null":"object"===e&&(e=t.constructor.name),new TypeError("Expected a string but received a ".concat(e))}},t.exports=e.default,t.exports.default=e.default}));Object(i.c)(c);var a=Object(i.b)((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(0,n.default)(t);var c=e.strictSeparator?o.test(t):r.test(t);return c&&e.strict?i(t):c};var n=function(t){return t&&t.__esModule?t:{default:t}}(c),r=/^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/,o=/^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/,i=function(t){var e=t.match(/^(\d{4})-?(\d{3})([ T]{1}\.*|$)/);if(e){var n=Number(e[1]),r=Number(e[2]);return n%4==0&&n%100!=0||n%400==0?r<=366:r<=365}var o=t.match(/(\d{4})-?(\d{0,2})-?(\d*)/).map(Number),i=o[1],c=o[2],a=o[3],d=c?"0".concat(c).slice(-2):c,s=a?"0".concat(a).slice(-2):a,u=new Date("".concat(i,"-").concat(d||"01","-").concat(s||"01"));return!c||!a||u.getUTCFullYear()===i&&u.getUTCMonth()+1===c&&u.getUTCDate()===a};t.exports=e.default,t.exports.default=e.default})),d=Object(i.c)(a),s=function(t){return t instanceof Date||d(t)},u=function(t){var e=t.viewport;if(null!=e){if(Object(o.b)(e)&&null!=e.duration&&console.warn("Detected both static and live viewport type. Duration will be used"),Object(o.b)(e)&&(!s(e.start)||!s(e.end)))throw new Error("Unable to parse start date: '"+e.start+"' and/or end date: '"+e.end+"'");if(!Object(o.b)(e)&&"string"==typeof e.duration&&null==Object(r.a)(e.duration,"ms"))throw new Error("Unable to parse duration: '"+e.duration+"'")}}},935:function(t,e,n){"use strict";n.r(e),n.d(e,"sc_kpi",(function(){return c}));var r=n(13),o=(n(39),n(141),n(55),n(1030),n(1041)),i=function(t){return Object(r.j)("sc-kpi-base",Object.assign({},t))},c=function(){function t(t){Object(r.l)(this,t),this.isEditing=!1,this.messageOverrides={}}return t.prototype.componentWillRender=function(){Object(o.a)(this)},t.prototype.render=function(){var t=this,e=t.viewport,n=t.widgetId,o=t.dataStreams,c=t.annotations,a=t.isEditing,d=t.messageOverrides;return Object(r.j)("sc-widget-grid",{viewport:e,widgetId:n,dataStreams:o,annotations:c,isEditing:a,messageOverrides:d,renderCell:i})},t}();c.style="sc-kpi .align{display:-ms-flexbox;display:flex;-ms-flex-line-pack:center;align-content:center;-ms-flex-pack:center;justify-content:center}sc-kpi .container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:100%;overflow:auto;position:relative;-ms-overflow-style:none;scrollbar-width:none}sc-kpi .container::-webkit-scrollbar{display:none}sc-kpi sc-chart-icon .sc-chart-icon{top:-3px}sc-kpi .large sc-chart-icon{position:relative}sc-kpi .help-icon-container{z-index:100;position:absolute;right:0;top:0}"}}]);