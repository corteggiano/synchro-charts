(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{1035:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return n})),a.d(t,"d",(function(){return s})),a.d(t,"e",(function(){return i})),a.d(t,"f",(function(){return o}));var r={liveTimeFrameValueLabel:"Value",historicalTimeFrameValueLabel:"Value",noDataStreamsPresentHeader:"No properties or alarms",noDataStreamsPresentSubHeader:"This widget doesn't have any properties or alarms.",noDataPresentHeader:"No data",noDataPresentSubHeader:"There's no data to display for this time range.",liveModeOnly:"This visualization displays only live data. Choose a live time frame to display data in this visualization.",unsupportedDataTypeHeader:"Unable to render your data",unsupportedDataTypeSubHeader:"This chart only supports the following DataType(s):",supportedTypes:"Number, String, Boolean"},n="round",i=3,o="M 2 2 H 15",s="1, 5",d={AVERAGE:"AVERAGE",COUNT:"COUNT",MAXIMUM:"MAXIMUM",MINIMUM:"MINIMUM",STANDARD_DEVIATION:"STANDARD_DEVIATION",SUM:"SUM"}},971:function(e,t,a){"use strict";a.r(t),a.d(t,"sc_webgl_bar_chart_margin",(function(){return g}));var r,n,i=a(14),o=a(39),s=(a(141),a(65)),d=a(1035),u=new Date(1998,1,0),l=new Date(1998,6,0),p={id:"test",color:"red",name:"test stream",resolution:s.f,aggregationType:d.a.AVERAGE,aggregates:(r={},r[s.f]=[{x:new Date(1998,3,0,0).getTime(),y:1e3},{x:new Date(1998,4,0,0).getTime(),y:3e3}],r),data:[],dataType:o.b.NUMBER},c={id:"test2",color:"orange",name:"test stream2",resolution:s.f,aggregationType:d.a.AVERAGE,aggregates:(n={},n[s.f]=[{x:new Date(1998,3,0,0).getTime(),y:2e3},{x:new Date(1998,4,0,0).getTime(),y:4e3}],n),data:[],dataType:o.b.NUMBER},g=function(){function e(e){Object(i.l)(this,e),this.data=[]}return e.prototype.render=function(){return Object(i.j)("div",{id:"chart-container",style:{height:"500px",width:"500px",marginTop:"20px"}},Object(i.j)("sc-bar-chart",{widgetId:"widget-id",dataStreams:[p,c],viewport:{yMin:0,yMax:5e3,start:u,end:l},bufferFactor:1,minBufferSize:1}),Object(i.j)("sc-webgl-context",null))},e}()}}]);