(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{1006:function(t,e,n){"use strict";n.r(e),n.d(e,"single_status",(function(){return p}));var r=n(14),a=(n(8),n(39)),i=(n(141),n(65)),o=(n(70),n(55),n(77),n(142),n(1037),n(1044)),c=n(1052),s=(n(1035),n(1041),n(1042),n(1038),n(1046),n(1040)),u=new Date(2e3,0,0),d=new Date(2e3,0,1),h=d.getTime()-u.getTime(),l={x:u.getTime()+h/3,y:12},p=function(){function t(t){Object(r.l)(this,t)}return t.prototype.componentDidLoad=function(){var t,e=this.el.querySelector("#test-container"),n=Object(c.c)({alarms:{expires:i.a},viewport:{start:u,end:d,yMin:0,yMax:c.a},dataStreams:[{id:"test-stream",name:"test-stream-name",color:"black",resolution:i.a,aggregates:(t={},t[i.a]=[l],t),data:[],dataType:a.b.NUMBER}],container:e,chartSize:s.a,minBufferSize:100,bufferFactor:2,thresholdOptions:{showColor:!1},thresholds:[]});o.c.addChartScene({manager:n});var r=e.getBoundingClientRect();o.c.setChartRect(n.id,Object.assign({density:1},r.toJSON()))},t.prototype.render=function(){return Object(r.j)("sc-webgl-context",null,Object(r.j)("div",{id:"test-container",style:{width:s.a.width+"px",height:s.a.height+"px"}}))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(r.i)(this)},enumerable:!1,configurable:!0}),t}()},1040:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={width:100,height:100}}}]);