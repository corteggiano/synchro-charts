(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{1035:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return n})),a.d(t,"d",(function(){return s})),a.d(t,"e",(function(){return o})),a.d(t,"f",(function(){return i}));var r={liveTimeFrameValueLabel:"Value",historicalTimeFrameValueLabel:"Value",noDataStreamsPresentHeader:"No properties or alarms",noDataStreamsPresentSubHeader:"This widget doesn't have any properties or alarms.",noDataPresentHeader:"No data",noDataPresentSubHeader:"There's no data to display for this time range.",liveModeOnly:"This visualization displays only live data. Choose a live time frame to display data in this visualization.",unsupportedDataTypeHeader:"Unable to render your data",unsupportedDataTypeSubHeader:"This chart only supports the following DataType(s):",supportedTypes:"Number, String, Boolean"},n="round",o=3,i="M 2 2 H 15",s="1, 5",l={AVERAGE:"AVERAGE",COUNT:"COUNT",MAXIMUM:"MAXIMUM",MINIMUM:"MINIMUM",STANDARD_DEVIATION:"STANDARD_DEVIATION",SUM:"SUM"}},944:function(e,t,a){"use strict";a.r(t),a.d(t,"sc_scatter_chart_threshold_coloration_band",(function(){return h}));var r=a(14),n=a(8),o=a(39),i=(a(141),a(65)),s=a(1035),l=new Date(1998,0,0),u=new Date(2001,0,1),d={x:new Date(1999,0,0).getTime(),y:2e3},c={x:new Date(2e3,0,0).getTime(),y:4e3},p={x:new Date(1999,6,0).getTime(),y:3e3},T={x:new Date(1999,0,0).getTime(),y:4e3},y={x:new Date(2e3,0,0).getTime(),y:2e3},h=function(){function e(e){Object(r.l)(this,e)}return e.prototype.render=function(){var e,t;return Object(r.j)("div",null,Object(r.j)("sc-scatter-chart",{widgetId:"widget-id",dataStreams:[{id:"test",data:[],aggregationType:s.a.AVERAGE,aggregates:(e={},e[i.f]=[d,c,p],e),resolution:i.f,color:"black",name:"test stream",dataType:o.b.NUMBER},{id:"test2",color:"red",name:"test stream2",data:[],aggregationType:s.a.AVERAGE,aggregates:(t={},t[i.f]=[T,y],t),resolution:i.f,dataType:o.b.NUMBER}],annotations:{y:[{value:3500,label:{text:"y label",show:!0},showValue:!0,color:"blue",comparisonOperator:n.a.LESS_THAN},{value:2500,label:{text:"y label",show:!0},showValue:!0,color:"purple",comparisonOperator:n.a.GREATER_THAN_EQUAL}],thresholdOptions:{}},size:{height:500,width:500},viewport:{start:l,end:u,yMin:0,yMax:5e3}}),Object(r.j)("sc-webgl-context",null))},e}()}}]);