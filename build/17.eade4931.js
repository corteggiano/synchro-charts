(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1035:function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return o}));var r=1.5,o=function(e){return e.map((function(e){return{id:e.id,name:e.name,detailedName:e.detailedName,color:e.color,unit:e.unit,dataType:e.dataType,streamType:e.streamType,associatedStreams:e.associatedStreams,isLoading:e.isLoading,isRefreshing:e.isRefreshing,error:e.error,resolution:e.resolution}}))}},1036:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return f})),t.d(n,"c",(function(){return h})),t.d(n,"d",(function(){return y})),t.d(n,"e",(function(){return u})),t.d(n,"f",(function(){return b}));var r=t(14),o=t(70),i=t(55),a=t(1029),s=t(1031),l=function(e){return"\nvarying vec3 vColor;\n"+(e?"varying float positionY;":"")+"\nattribute vec3 pointColor;\nuniform float pointDiameter;\nuniform float devicePixelRatio;\n\nvoid main() {\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x, position.y, 0.0, 1.0);\n  gl_PointSize = pointDiameter * devicePixelRatio;\n  vColor = pointColor;\n  "+(e?"positionY = position.y;":"")+"\n}\n"},c=13,u=function(e){if(0===e.length)return[];var n=Object(o.c)(e),t=Object(o.o)(n).reverse(),i=[],a=new Set;t.forEach((function(e,n){var l=e.value;if(t[n].comparisonOperator!==r.a.EQUAL)if(0!==n){var c=t[n-1],u=c.value,d=(u+l)/2,h=Object(o.a)(d,t);if(null!=h&&!a.has(c.value)){var p=Object(s.d)(h.color);x=p[0],w=p[1],P=p[2],c.comparisonOperator===r.a.EQUAL&&(c.value,t[n].value),i.push({upper:u,lower:l,color:[x,w,P]}),a.add(c.value)}if(n!==t.length-1){var f=t[n+1].value;if(d=(l+f)/2,null!=(h=Object(o.a)(d,t))&&!a.has(l)){var v=Object(s.d)(h.color);x=v[0],w=v[1],P=v[2],i.push({upper:l,lower:f,color:[x,w,P]}),a.add(e.value)}}else if(d=(l+Number.MIN_SAFE_INTEGER)/2,null!=(h=Object(o.a)(d,t))&&!a.has(l)){var m=Object(s.d)(h.color);x=m[0],w=m[1],P=m[2],i.push({lower:Number.MIN_SAFE_INTEGER,upper:l,color:[x,w,P]})}}else{var y=(Number.MAX_SAFE_INTEGER+l)/2,b=Object(o.a)(y,t);if(null!=b){var g=Object(s.d)(b.color),x=g[0],w=g[1],P=g[2];i.push({upper:Number.MAX_SAFE_INTEGER,lower:l,color:[x,w,P]})}}else{var S=Object(s.d)(t[n].color);x=S[0],w=S[1],P=S[2];i.push({upper:l,lower:l,color:[x,w,P]})}}));for(var l=i[i.length-1];i.length<c;){var u=t[t.length-1].value,d=Number.MIN_SAFE_INTEGER+u/2,h=Object(o.a)(d,t);if(null==h)i.push(l);else{var p=Object(s.d)(h.color),f=p[0],v=p[1],m=p[2];l={lower:Number.MIN_SAFE_INTEGER,upper:u,color:[f,v,m]},i.push(l)}}return i},d="\n#define MAX_NUM_TOTAL_THRESHOLD_BAND "+c+"\n\nstruct Band {\n  float upper;\n  float lower;\n  vec3 color;\n};\n\nvarying vec3 vColor;\nvarying float positionY;\n\nuniform Band thresholdBands[MAX_NUM_TOTAL_THRESHOLD_BAND];\nuniform float yPixelDensity;\n\nvoid main() {\n  // calculate position such that the center is (0, 0) in a region of [-1, 1] x [-1, 1]\n  vec2 pos = 2.0 * gl_PointCoord.xy - 1.0;\n  // r = distance squared from the origin of the point being rendered\n  float r = dot(pos, pos);\n  if (r > 1.0) {\n    discard;\n  }\n  float alpha = 1.0 - smoothstep(0.5, 1.0, sqrt(r));\n\n  for(int i = 0; i < MAX_NUM_TOTAL_THRESHOLD_BAND; i++) {\n    bool isRangeBreached = positionY >= thresholdBands[i].lower && positionY <= thresholdBands[i].upper;\n    bool isEqualsThreshold = thresholdBands[i].lower == thresholdBands[i].upper;\n    bool isEqualsThresholdBreached = positionY == thresholdBands[i].upper;\n\n    if (isRangeBreached || (isEqualsThreshold && isEqualsThresholdBreached)) {\n       gl_FragColor = vec4(thresholdBands[i].color /255.0, alpha);\n       break;\n    } else {\n       gl_FragColor = vec4(vColor, alpha);\n    }\n  }\n}\n",h=0,p=function(e){return 0===(null!=e[0]?e[0].resolution:null)?4:6.25},f=2,v=function(e,n,t){var r=n.filter(i.c).map((function(e){return Object(s.f)(e,e.resolution)})).flat(),o=e.attributes,a=o.position,l=o.pointColor;r.forEach((function(e,n){var r=e[0],o=e[1],i=e[2],s=e[3],c=e[4];a.array[n*f]=t(r),a.array[n*f+1]=o,l.array[3*n]=i,l.array[3*n+1]=s,l.array[3*n+2]=c})),e.setDrawRange(0,r.length),a.needsUpdate=!0,l.needsUpdate=!0},m=function(e,n){e.setAttribute("position",new a.a(new Float32Array(n*f),f)),e.setAttribute("pointColor",new a.a(new Uint8Array(3*n),3,!0))},y=function(e){var n=e.toClipSpace,t=e.dataStreams,r=e.minBufferSize,o=e.bufferFactor,i=e.thresholdOptions,c=e.thresholds,h=Math.max(r,Object(s.e)(t)*o),f=new a.k;m(f,h),v(f,t,n);var y=i.showColor,b=void 0===y||y,g=new a.l({vertexShader:l(b&&c.length>0),fragmentShader:b&&0!==c.length?d:"\nvarying vec3 vColor;\n\nvoid main() {\n  // calculate position such that the center is (0, 0) in a region of [-1, 1] x [-1, 1]\n  vec2 pos = 2.0 * gl_PointCoord.xy - 1.0;\n  // r = distance squared from the origin of the point being rendered\n  float r = dot(pos, pos);\n  if (r > 1.0) {\n    discard;\n  }\n  float alpha = 1.0 - smoothstep(0.5, 1.0, sqrt(r));\n  gl_FragColor = vec4(vColor, alpha);\n}\n",transparent:!0,uniforms:{pointDiameter:{value:p(t)},devicePixelRatio:{value:window.devicePixelRatio},thresholdBands:{value:u(c)}}}),x=new a.e(f,g);return x.frustumCulled=!1,x},b=function(e,n,t,r){void 0===r&&(r=!0),n.material.uniforms.pointDiameter.value=p(e),n.material.uniforms.devicePixelRatio.value=window.devicePixelRatio,r&&v(n.geometry,e,t)}},1039:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return g}));var r=t(70),o=t(55),i=t(1029),a=t(1031),s=t(1036),l=t(1035),c=function(e){return"\nprecision highp float;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float width;\nuniform float xPixelDensity;\nuniform float yPixelDensity;\nattribute vec2 currPoint;\nattribute vec2 nextPoint;\nattribute vec2 position;\nattribute vec3 segmentColor;\nvarying vec3 vColor;\n"+(e?"varying float yPositionPx;":"")+"\n\n// line shader using instanced lines\n// https://wwwtyro.net/2019/11/18/instanced-lines.html for information on this approach\nvoid main() {\n  // Convert the points to pixel coordinates - otherwise out basis vectors won't be perpendicular when\n  // rasterized to the screen.\n  vec2 currPointPx = vec2(currPoint.x / xPixelDensity, currPoint.y / yPixelDensity);\n  vec2 nextPointPx = vec2(nextPoint.x / xPixelDensity, nextPoint.y / yPixelDensity);\n\n  // create the basis vectors of a coordinate space where the x axis is parallel with\n  // the path between currPoint and nextPoint, and the y axis is perpendicular to the\n  // path between currPoint and nextPoint\n  vec2 xBasis = nextPointPx - currPointPx;\n  vec2 yBasis = normalize(vec2(-xBasis.y, xBasis.x));\n\n  // project the instance segment along the basis vectors\n  vec2 positionPx = currPointPx + xBasis * position.x + yBasis * width * position.y;\n\n  // Convert from pixel coordinates back to model space\n  vec2 positionModel = vec2(positionPx.x * xPixelDensity, positionPx.y * yPixelDensity);\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(positionModel, 0.0, 1.0);\n  vColor = segmentColor;\n  "+(e?"yPositionPx = positionPx.y;":"")+"\n}\n"},u="\n// This file is only being used when we have threshold bands\n// that will break the line segments into different color\n#define MAX_NUM_TOTAL_THRESHOLD_BAND "+s.a+"\n\nprecision highp float;\nstruct Band {\n  float upper;\n  float lower;\n  vec3 color;\n};\n\nvarying vec3 vColor;\nvarying float yPositionPx;\nuniform float yPixelDensity;\nuniform Band thresholdBands[MAX_NUM_TOTAL_THRESHOLD_BAND];\n\n// Fills in triangles which make up a line segment, with the corresponding color\nvoid main() {\n  for(int i = 0; i < MAX_NUM_TOTAL_THRESHOLD_BAND; i++) {\n    bool isRangeBreached = yPositionPx > thresholdBands[i].lower / yPixelDensity\n      && yPositionPx < thresholdBands[i].upper / yPixelDensity;\n    bool isEqualsThreshold = thresholdBands[i].lower == thresholdBands[i].upper;\n    bool isEqualsThresholdBreached = yPositionPx == thresholdBands[i].upper;\n\n    if (isRangeBreached || (isEqualsThreshold && isEqualsThresholdBreached)) {\n       gl_FragColor = vec4(thresholdBands[i].color / 255.0, 1.0);\n       break;\n    } else {\n       gl_FragColor = vec4(vColor, 1.0);\n    }\n  }\n}\n",d=function(e){var n=e.viewport,t=n.end,r=n.start,o=n.yMax,i=n.yMin,a=e.toClipSpace,s=e.size,l=s.width,c=s.height;return{x:Math.abs((a(t.getTime())-a(r.getTime()))/l),y:Math.abs((o-i)/c)}},h=l.a,p=function(e,n,t){var r=e.filter(o.c).map((function(e){return Object(a.f)(e,e.resolution)}));n.count=function(e){return e.reduce((function(e,n){return e+Math.max(n.length,0)}),0)}(r);var i=n.geometry.attributes,s=i.currPoint,l=i.nextPoint,c=i.segmentColor,u=0,d=0;r.forEach((function(e){e.forEach((function(n,r){var o=r===e.length-1?n:e[r+1],i=n[0],a=n[1],h=n[2],p=n[3],f=n[4],v=o[0],m=o[1];s.array[u]=t(i),s.array[u+1]=a,l.array[u]=t(v),l.array[u+1]=m,c.array[d]=h,c.array[d+1]=p,c.array[d+2]=f,d+=3,u+=2}))})),s.needsUpdate=!0,l.needsUpdate=!0,c.needsUpdate=!0},f=[[0,-.5],[1,-.5],[1,.5],[0,-.5],[1,.5],[0,.5]],v=function(e,n){e.setAttribute("position",new i.a(new Float32Array(f.flat()),2)),e.setAttribute("currPoint",new i.j(new Float32Array(2*n),2,!1)),e.setAttribute("nextPoint",new i.j(new Float32Array(2*n),2,!1)),e.setAttribute("segmentColor",new i.j(new Uint8Array(3*n),3,!0))},m=function(e){var n=e.viewport,t=e.dataStreams,r=e.chartSize,o=e.minBufferSize,l=e.bufferFactor,f=e.toClipSpace,m=e.thresholdOptions,y=e.thresholds,b=new i.c,g=Math.max(o,Object(a.e)(t)*l);v(b,g);var x=d({viewport:n,toClipSpace:f,size:r}),w=x.x,P=x.y,S=m.showColor,C=void 0===S||S,O=new i.f({vertexShader:c(C&&y.length>0),fragmentShader:C&&0!==y.length?u:"\nprecision highp float;\nvarying vec3 vColor;\n\n// Fills in triangles which make up a line segment, with the corresponding color\nvoid main() {\n  gl_FragColor = vec4(vColor, 1.0);\n}\n",side:i.b,transparent:!0,uniforms:{width:{value:h},xPixelDensity:{value:w},yPixelDensity:{value:P},thresholdBands:{value:Object(s.e)(y)}}}),B=new i.i(b,O,g);return B.frustumCulled=!1,p(t,B,f),B},y=function(e){var n=e.chartSize,t=e.toClipSpace,r=e.lines,o=e.dataStreams,i=e.viewport,a=e.hasDataChanged,s=d({viewport:i,toClipSpace:t,size:n}),l=s.x,c=s.y;r.material.uniforms.xPixelDensity.value=l,r.material.uniforms.yPixelDensity.value=c,a&&p(o,r,t)},b=function(e){var n=e.dataStreams,t=e.chartSize,o=e.container,l=e.viewport,c=e.minBufferSize,u=e.bufferFactor,d=e.onUpdate,h=e.thresholdOptions,p=e.thresholds,f=new i.g,v=Object(a.a)(l),y=Object(r.c)(p),b=[];return b[1]=m({toClipSpace:v,chartSize:t,dataStreams:n,viewport:l,minBufferSize:c,bufferFactor:u,thresholdOptions:h,thresholds:y}),b[s.c]=Object(s.d)({dataStreams:n,minBufferSize:c,bufferFactor:u,toClipSpace:v,thresholdOptions:h,thresholds:y}),b.forEach((function(e){return f.add(e)})),Object(a.c)({scene:f,viewport:l,container:o,toClipSpace:v,onUpdate:d})},g=function(e){var n=e.scene,t=e.dataStreams,r=e.chartSize,o=e.container,i=e.viewport,l=e.hasDataChanged,c=e.bufferFactor,u=e.minBufferSize,d=e.onUpdate,h=e.thresholdOptions,p=e.hasAnnotationChanged,f=e.thresholds,v=n.scene.children[1],m=n.scene.children[s.c];return function(e){return e.geometry.attributes.position.array.length/s.b}(m)<Object(a.e)(t)||Object(a.b)(i,n.toClipSpace)||p?b({dataStreams:t,chartSize:r,container:o,viewport:i,minBufferSize:u,bufferFactor:c,onUpdate:d,thresholdOptions:h,thresholds:f}):(y({lines:v,dataStreams:t,chartSize:r,viewport:i,hasDataChanged:l,toClipSpace:n.toClipSpace}),Object(s.f)(t,m,n.toClipSpace,l),n)}},930:function(e,n,t){"use strict";t.r(n),t.d(n,"sc_circle_point_shaders",(function(){return d}));var r=t(13),o=(t(14),t(39)),i=(t(141),t(65),t(70),t(55),t(77),t(142),t(1029),t(1038)),a=(t(1030),t(1033),t(1034),t(1031),t(1040)),s=(t(1036),t(1039)),l=(t(1035),new Date(2e3,0,0)),c=new Date(2e3,0,1),u={x:(l.getTime()+c.getTime())/2,y:50},d=function(){function e(e){Object(r.l)(this,e)}return e.prototype.componentDidLoad=function(){var e=this.el.querySelector("#test-container"),n=Object(s.a)({viewport:{start:l,end:c,yMin:0,yMax:100},dataStreams:[{id:"test-stream",name:"test-stream-name",color:"black",data:[u],resolution:0,dataType:o.b.NUMBER}],chartSize:a.a,container:e,minBufferSize:100,bufferFactor:2,thresholdOptions:{showColor:!1},thresholds:[]});i.b.addChartScene({manager:n});var t=e.getBoundingClientRect();i.b.setChartRect(n.id,Object.assign({density:1},t.toJSON()))},e.prototype.render=function(){return Object(r.j)("sc-webgl-context",null,Object(r.j)("div",{id:"test-container",style:{width:a.a.width+"px",height:a.a.height+"px"}}))},Object.defineProperty(e.prototype,"el",{get:function(){return Object(r.i)(this)},enumerable:!1,configurable:!0}),e}()}}]);