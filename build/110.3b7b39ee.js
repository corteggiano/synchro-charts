(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{1008:function(e,t,a){"use strict";a.r(t),a.d(t,"status_timeline_raw_data",(function(){return m}));var n=a(13),r=a(14),o=a(39),i=(a(141),a(65)),c=new Date(2e3,0,0),s=new Date(2e3,0,0,0,10),l="STATUS_ZERO",u="STATUS_ONE",d="STATUS_TWO",p=[{x:c.getTime(),y:l},{x:c.getTime()+5*i.c,y:u},{x:c.getTime()+6*i.c,y:d},{x:c.getTime()+6.5*i.c,y:"STATUS_THREE"}],T={y:[{value:l,color:"red",comparisonOperator:r.a.EQUAL},{value:u,color:"blue",comparisonOperator:r.a.EQUAL},{value:d,color:"green",comparisonOperator:r.a.EQUAL}]},m=function(){function e(e){Object(n.l)(this,e)}return e.prototype.render=function(){return Object(n.j)("div",null,Object(n.j)("sc-status-timeline",{alarms:{expires:i.c},dataStreams:[{id:"test",data:p,color:"black",name:"test stream 1",resolution:0,dataType:o.b.STRING}],widgetId:"test-id",size:{width:500,height:500},annotations:T,viewport:{yMin:0,yMax:100,start:c,end:s}}),Object(n.j)("sc-webgl-context",null))},e}()}}]);