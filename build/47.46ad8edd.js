(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{1035:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return i})),n.d(t,"f",(function(){return o}));var a={liveTimeFrameValueLabel:"Value",historicalTimeFrameValueLabel:"Value",noDataStreamsPresentHeader:"No properties or alarms",noDataStreamsPresentSubHeader:"This widget doesn't have any properties or alarms.",noDataPresentHeader:"No data",noDataPresentSubHeader:"There's no data to display for this time range.",liveModeOnly:"This visualization displays only live data. Choose a live time frame to display data in this visualization.",unsupportedDataTypeHeader:"Unable to render your data",unsupportedDataTypeSubHeader:"This chart only supports the following DataType(s):",supportedTypes:"Number, String, Boolean"},r="round",i=3,o="M 2 2 H 15",u="1, 5",s={AVERAGE:"AVERAGE",COUNT:"COUNT",MAXIMUM:"MAXIMUM",MINIMUM:"MINIMUM",STANDARD_DEVIATION:"STANDARD_DEVIATION",SUM:"SUM"}},1037:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return a})),n.d(t,"f",(function(){return r})),n.d(t,"g",(function(){return o})),n(8);var a=0,r=5e3,i=new Date(2e3,0,0,0,0),o=new Date(2e3,0,0,0,10),u=2500,s="Warning",d=(new Date(i.getTime()+1/3*(o.getTime()-i.getTime())),{x:(i.getTime()+o.getTime())/2,y:u})},982:function(e,t,n){"use strict";n.r(t),n.d(t,"sc_webgl_bar_chart_unsupported_data_types",(function(){return T}));var a=n(14),r=(n(8),n(39)),i=(n(141),n(65)),o=n(1037),u=n(1035),s=new Date(2e3,0),d=new Date(2001,3),c=new Date(2e3,3).getTime(),p=new Date(2e3,6).getTime(),l=new Date(2e3,9).getTime(),T=function(){function e(e){Object(a.l)(this,e)}return e.prototype.render=function(){return Object(a.j)("div",{class:"synchro-chart-tests"},Object(a.j)("div",{id:"chart-container",style:{marginTop:"20px",width:"500px",height:"500px"}},Object(a.j)("sc-bar-chart",{dataStreams:[{id:"test",color:"black",name:"test-name",aggregationType:u.a.AVERAGE,aggregates:{},data:[{x:c,y:o.c},{x:p,y:o.c},{x:l,y:o.c}],resolution:i.f,dataType:r.b.STRING}],size:{width:500,height:500},widgetId:"widget-id",viewport:{yMin:0,yMax:5e3,start:s,end:d}})),Object(a.j)("sc-webgl-context",null))},e}()}}]);