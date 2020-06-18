(function(t){function e(e){for(var r,s,c=e[0],u=e[1],o=e[2],h=0,d=[];h<c.length;h++)s=c[h],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&d.push(n[s][0]),n[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(d.length)d.shift()();return i.push.apply(i,o||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,c=1;c<a.length;c++){var u=a[c];0!==n[u]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},n={app:0},i=[];function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var o=0;o<c.length;o++)e(c[o]);var l=u;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},3424:function(t,e,a){"use strict";var r=a("4c23"),n=a.n(r);n.a},"4c23":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("aside",[a("router-link",{attrs:{to:"/bar-graph"}},[t._v("Bar Graph")]),a("router-link",{attrs:{to:"/pie-chart"}},[t._v("Pie Chart")])],1),a("main",[a("router-view")],1)])},i=[],s={name:"app",components:{}},c=s,u=(a("5c0b"),a("2877")),o=Object(u["a"])(c,n,i,!1,null,null,null),l=o.exports,h=a("8c4f"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"barChartWrapper",staticClass:"svg-container",attrs:{align:"center"}},[a("h2",[t._v("Bar Chart")]),t.redraw?a("svg",{attrs:{width:t.width,height:t.height}},[t._l(t.barsData,(function(e,r){return a("g",{key:"bar_group_"+e[t.xKey],attrs:{transform:"translate("+t.margins.left+", "+t.margins.top+")"}},[a("rect",{staticClass:"bg__bar__chart",attrs:{x:t.xScale(e[t.xKey]),y:0,width:t.xScale.bandwidth(),height:t.actual.height,fill:"rgba(217, 217, 217, 0.3)",rx:"2",ry:"2"}}),a("rect",{key:"barChart_"+t.xKey+"_"+r,ref:"bar",refInFor:!0,staticClass:"bar__chart",attrs:{x:t.xScale(e[t.xKey]),y:t.yScale(e[t.yKey]),width:t.xScale.bandwidth(),fill:"rgba(79, 177, 116, 1)",height:t.actual.height-t.yScale(e[t.yKey]),rx:"2",ry:"2"}})])})),a("g",{staticClass:"axis-group",attrs:{transform:"translate("+t.margins.left+", "+t.margins.top+")"}},[a("g",{ref:"xAxis",staticClass:"bottom-axis",attrs:{transform:"translate(0, "+t.actual.height+")"}}),a("g",{ref:"yAxis",staticClass:"left-axis"})])],2):t._e()])},f=[],p=(a("d81d"),a("a9e3"),a("bc17")),b=a("4611"),m=a("ce24"),g=a("127c"),y=a("00a5"),v=(a("b108"),{name:"BarGraph",props:{xKey:{type:String,required:!1,default:"name"},yKey:{type:String,required:!1,default:"value"},initialWidth:{type:Number,required:!1,default:500},margins:{type:Object,default:function(){return{top:30,left:20,bottom:30,right:20}}}},data:function(){return{barsData:[{name:"male",value:"44"},{name:"female",value:"38"},{name:"other",value:"11"}],width:0,redraw:!0}},created:function(){this.width=this.initialWidth},mounted:function(){this.width=.75*this.$refs.barChartWrapper.offsetWidth,this.addResizeListener(),this.animateLoad(),this.renderAxes()},methods:{animateLoad:function(){var t=this;Object(g["a"])(this.$refs.bar).data(this.barsData).transition().delay(0).duration(1e3).attr("y",(function(e){return t.yScale(e[t.yKey])})).attr("height",(function(e){return t.actual.height-t.yScale(e[t.yKey])}))},addResizeListener:function(){var t=this;window.addEventListener("resize",(function(){t.$data.redraw=!1,setTimeout((function(){t.$data.redraw=!0,t.$data.width=.75*t.$refs.barChartWrapper.offsetWidth,t.animateLoad(),t.renderAxes()}),300)}))},renderAxes:function(){var t=Object(b["a"])().scale(this.xScale),e=Object(b["b"])().scale(this.yScale).ticks(4).tickFormat((function(t){return t}));Object(y["a"])(this.$refs.xAxis).call(t),Object(y["a"])(this.$refs.yAxis).call(e)}},computed:{dataMax:function(){var t=this;return Object(p["d"])(this.barsData,(function(e){return e[t.yKey]||1}))},dataMin:function(){var t=this;return Object(p["e"])(this.barsData,(function(e){return e[t.yKey]}))},xScale:function(){var t=this;return Object(m["a"])().rangeRound([0,this.actual.width]).padding(.1).domain(this.barsData.map((function(e){return e[t.xKey]})))},yScale:function(){return Object(m["b"])().rangeRound([this.actual.height,0]).domain([this.dataMin>0?0:this.dataMin,this.dataMax])},height:function(){return this.width/1.61803398875},actual:function(){return{width:this.width-this.margins.left-this.margins.right,height:this.height-this.margins.top-this.margins.bottom}}}}),x=v,w=(a("72ab"),Object(u["a"])(x,d,f,!1,null,null,null)),_=w.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"pieChartWrapper",staticClass:"svg-container",attrs:{align:"center"}},[a("h2",[t._v("Pie Chart")]),a("svg",{attrs:{width:t.diameter,height:t.diameter,viewBox:"0 0 "+t.diameter+" "+t.diameter}},[a("g",{attrs:{transform:"translate("+t.radius+", "+t.radius+")"}},t._l(t.pieData,(function(e,r){return a("Slice",{key:r,attrs:{value:e,label:t.getLabel(r),color:t.colors[r],radius:t.radius}})})),1)])])},j=[],S=(a("99af"),a("13d5"),a("b680"),a("b64b"),a("07ac"),a("88f1")),C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("g",{staticClass:"arc"},[a("path",{staticClass:"arc",attrs:{d:t.arc,fill:t.color}}),a("text",{attrs:{transform:"translate("+t.centroid+")","text-anchor":"middle","alignment-baseline":"middle"}},[a("tspan",{attrs:{x:"0",dy:"0"}},[t._v(t._s(t.label))])])])},D=[],K=a("650c"),P={name:"Slice",props:{value:{type:Object,required:!0,default:function(){return{}}},label:{type:String,required:!0,default:""},color:{type:String,required:!1,default:"#ECC417"},radius:{type:Number,required:!0,default:5}},data:function(){return{innerRadius:0}},computed:{arc:function(){return this.createArc()(this.value)},centroid:function(){return this.createArc().centroid(this.value)}},methods:{createArc:function(){return Object(K["a"])().innerRadius(this.innerRadius).outerRadius(this.radius)}}},$=P,k=(a("3424"),Object(u["a"])($,C,D,!1,null,null,null)),A=k.exports,R={name:"PieChart",components:{Slice:A},props:{radius:{type:Number,required:!1,default:100}},data:function(){return{diameter:0,outerRadius:0,innerRadius:0,colors:["#3B4555","#0e5d9e","#408a4b"],chartData:{male:45,female:43,others:12}}},computed:{pieData:function(){return 0===Object.values(this.chartData).length?this.createPie()([100]):this.createPie()(Object.values(this.chartData))}},mounted:function(){this.diameter=2*this.radius},methods:{createPie:function(){return Object(S["a"])().sort(null)},getLabel:function(t){if("undefined"===this.chartData||this.chartData==={})return"";var e=Object.keys(this.chartData)[t],a=Object.values(this.chartData).reduce((function(t,e){return t+e}),0),r=(this.chartData[e]/parseFloat(a)*100).toFixed(1);return"".concat(e," ").concat(r,"%")}}},M=R,q=Object(u["a"])(M,O,j,!1,null,null,null),L=q.exports,W=[{path:"/bar-graph",component:_},{path:"/pie-chart",component:L}];r["a"].use(h["a"]),r["a"].config.productionTip=!1;var E=new h["a"]({routes:W});new r["a"]({router:E,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var r=a("9c0c"),n=a.n(r);n.a},"72ab":function(t,e,a){"use strict";var r=a("ba68"),n=a.n(r);n.a},"9c0c":function(t,e,a){},ba68:function(t,e,a){}});
//# sourceMappingURL=app.6083094f.js.map