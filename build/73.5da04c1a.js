(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{1035:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return r})),a.d(t,"d",(function(){return s})),a.d(t,"e",(function(){return i})),a.d(t,"f",(function(){return o}));var n={liveTimeFrameValueLabel:"Value",historicalTimeFrameValueLabel:"Value",noDataStreamsPresentHeader:"No properties or alarms",noDataStreamsPresentSubHeader:"This widget doesn't have any properties or alarms.",noDataPresentHeader:"No data",noDataPresentSubHeader:"There's no data to display for this time range.",liveModeOnly:"This visualization displays only live data. Choose a live time frame to display data in this visualization.",unsupportedDataTypeHeader:"Unable to render your data",unsupportedDataTypeSubHeader:"This chart only supports the following DataType(s):",supportedTypes:"Number, String, Boolean"},r="round",i=3,o="M 2 2 H 15",s="1, 5",d={AVERAGE:"AVERAGE",COUNT:"COUNT",MAXIMUM:"MAXIMUM",MINIMUM:"MINIMUM",STANDARD_DEVIATION:"STANDARD_DEVIATION",SUM:"SUM"}},951:function(e,t,a){"use strict";a.r(t),a.d(t,"sc_scatter_chart_trend_line_color_configuration",(function(){return c}));var n=a(14),r=a(8),i=a(39),o=(a(141),a(65)),s=a(1035),d=new Date(2018,0,0),u=new Date(2020,0,0),l=[{x:new Date(2018,6,0).getTime(),y:1e3},{x:new Date(2019,0,0).getTime(),y:4e3},{x:new Date(2019,6,0).getTime(),y:3e3}],c=function(){function e(e){Object(n.l)(this,e)}return e.prototype.render=function(){var e;return Object(n.j)("div",null,Object(n.j)("sc-line-chart",{widgetId:"widget-id",dataStreams:[{id:"test",color:"red",name:"test stream",aggregationType:s.a.AVERAGE,aggregates:(e={},e[o.d]=l,e),data:[],resolution:o.d,dataType:i.b.NUMBER}],size:{height:500,width:500},viewport:{start:d,end:u,yMin:0,yMax:5e3},legend:{position:r.c.BOTTOM,width:300},trends:[{dataStreamId:"test",type:i.d.LINEAR,color:"#123abc"}]}),Object(n.j)("sc-webgl-context",null))},e}()}}]);