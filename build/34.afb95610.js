(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{1052:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return i}));var a=n(65),r=n(55),i=function(t){return Object(r.b)(t)?new Date(t.start):new Date(Date.now()-Object(a.i)(t.duration))},o=function(t){return Object(r.b)(t)?new Date(t.end):new Date(Date.now())}},1053:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return s}));var a=n(180),r=n(142),i=function(t,e,n,i){var o=n.find((function(t){return t.id===i})),s=o?Object(r.a)(o,o.resolution):[],u=s[s.length-1]&&s[s.length-1].y,c=o&&Object(a.b)({value:u,date:e,dataStreams:n,dataStream:o,thresholds:t})||{};return{dataStream:o,color:c.color,icon:c.icon}},o=function(t){for(var e=t.tableColumns,n=t.dataStreams,a=t.thresholds,r=t.date,o=Math.max.apply(Math,e.map((function(t){return t.rows.length}))),s=[],u=function(t){var o={};e.forEach((function(e){var s=e.rows[t]||void 0;o[e.header]=i(a,r,n,s)})),s.push(o)},c=0;c<o;c++)u(c);return s},s=function(t){var e=t.indexOf(". ");return e<0?{msgHeader:t,msgSubHeader:""}:{msgHeader:t.slice(0,e),msgSubHeader:t.slice(e+2)}}},964:function(t,e,n){"use strict";n.r(e),n.d(e,"sc_table",(function(){return h}));var a=n(13),r=(n(14),n(39),n(141),n(65)),i=n(70),o=n(55),s=(n(77),n(102),n(180),n(142),n(1029),n(1038)),u=(n(1030),n(1050)),c=n(1053),d=n(1052),h=function(){function t(t){var e=this;Object(a.l)(this,t),this.dateRangeChange=Object(a.h)(this,"dateRangeChange",7),this.messageOverrides={},this.start=Object(d.b)(this.viewport),this.end=Object(d.a)(this.viewport),this.duration=Object(o.b)(this.viewport)?void 0:Object(r.i)(this.viewport.duration),this.onUpdate=function(t){var n=t.start,a=t.end,r=t.duration;(Object(d.b)(e.viewport).getTime()!==n.getTime()||Object(d.a)(e.viewport).getTime()!==a.getTime())&&e.onDateRangeChange([n,a,e.viewport.group]),e.start=n,e.end=a,e.duration=r},this.onDateRangeChange=Object(u.b)((function(t){var n=t[0],a=t[1],r=t[2];e.dateRangeChange.emit([n,a,r])}),u.a,{leading:!0,trailing:!0}),this.getThresholds=function(){return e.annotations&&e.annotations.y?e.annotations.y.filter(i.i):[]}}return t.prototype.onViewPortChange=function(t){this.onUpdate(Object.assign(Object.assign({},t),{duration:Object(o.b)(t)?void 0:Object(r.i)(t.duration),start:Object(d.b)(this.viewport),end:Object(d.a)(this.viewport)}))},t.prototype.componentDidLoad=function(){s.b.addChartScene({manager:{id:this.widgetId,viewportGroup:this.viewport.group,updateViewPort:this.onUpdate},duration:this.duration})},t.prototype.disconnectedCallback=function(){s.b.removeChartScene(this.widgetId)},t.prototype.render=function(){var t=Object(c.a)({tableColumns:this.tableColumns,dataStreams:this.dataStreams,thresholds:this.getThresholds(),date:this.end}),e=null!=this.duration;return Object(a.j)("sc-table-base",{columns:this.tableColumns,rows:t,isEnabled:e,messageOverrides:this.messageOverrides})},Object.defineProperty(t,"watchers",{get:function(){return{viewport:["onViewPortChange"]}},enumerable:!1,configurable:!0}),t}()}}]);