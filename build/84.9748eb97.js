(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{1007:function(t,e,a){"use strict";a.r(e),a.d(e,"status_timeline_dynamic_buffer",(function(){return l}));var r=a(14),n=a(39),i=(a(141),a(65)),o=a(1035),s=new Date(1998,0,0),d=new Date(2e3,0,1),u=d.getTime()-s.getTime(),l=function(){function t(t){var e=this;Object(r.l)(this,t),this.data=[],this.addDataPoint=function(){var t={x:s.getTime()+u/(2+e.data.length),y:2.5};e.data=function(){for(var t=0,e=0,a=arguments.length;e<a;e++)t+=arguments[e].length;var r=Array(t),n=0;for(e=0;e<a;e++)for(var i=arguments[e],o=0,s=i.length;o<s;o++,n++)r[n]=i[o];return r}([t],e.data)}}return t.prototype.render=function(){var t;return Object(r.j)("div",{class:"synchro-chart-tests"},Object(r.j)("button",{id:"add-data-point",onClick:this.addDataPoint},"Add Data Point"),Object(r.j)("div",{id:"chart-container",style:{height:"500px",width:"500px",marginTop:"20px"}},Object(r.j)("sc-status-timeline",{widgetId:"widget-id",alarms:{expires:i.f},dataStreams:[{id:"test",color:"red",name:"test stream",aggregationType:o.a.AVERAGE,aggregates:(t={},t[i.f]=this.data,t),data:[],resolution:i.f,dataType:n.b.NUMBER}],viewport:{yMin:0,yMax:5e3,start:s,end:d},bufferFactor:1,minBufferSize:1}),Object(r.j)("sc-webgl-context",null)))},t}()},1035:function(t,e,a){"use strict";a.d(e,"a",(function(){return d})),a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return n})),a.d(e,"d",(function(){return s})),a.d(e,"e",(function(){return i})),a.d(e,"f",(function(){return o}));var r={liveTimeFrameValueLabel:"Value",historicalTimeFrameValueLabel:"Value",noDataStreamsPresentHeader:"No properties or alarms",noDataStreamsPresentSubHeader:"This widget doesn't have any properties or alarms.",noDataPresentHeader:"No data",noDataPresentSubHeader:"There's no data to display for this time range.",liveModeOnly:"This visualization displays only live data. Choose a live time frame to display data in this visualization.",unsupportedDataTypeHeader:"Unable to render your data",unsupportedDataTypeSubHeader:"This chart only supports the following DataType(s):",supportedTypes:"Number, String, Boolean"},n="round",i=3,o="M 2 2 H 15",s="1, 5",d={AVERAGE:"AVERAGE",COUNT:"COUNT",MAXIMUM:"MAXIMUM",MINIMUM:"MINIMUM",STANDARD_DEVIATION:"STANDARD_DEVIATION",SUM:"SUM"}}}]);