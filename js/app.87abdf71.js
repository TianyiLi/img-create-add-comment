(function(t){function e(e){for(var i,s,c=e[0],r=e[1],l=e[2],d=0,f=[];d<c.length;d++)s=c[d],o[s]&&f.push(o[s][0]),o[s]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,c=1;c<n.length;c++){var r=n[c];0!==o[r]&&(i=!1)}i&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},o={app:0},a=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=r;a.push([1,"chunk-vendors"]),n()})({0:function(t,e){},1:function(t,e,n){t.exports=n("56d7")},2:function(t,e){},"294e":function(t,e,n){},3:function(t,e){},"321c":function(t,e,n){"use strict";var i=n("294e"),o=n.n(i);o.a},"39fa":function(t,e,n){"use strict";var i=n("e599"),o=n.n(i);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t.hasImg?n("div",{staticClass:"ctn"},[t.hasImg?n("img",{attrs:{src:t.imgUrl,alt:""},on:{dblclick:function(e){return t.createElement(e)}}}):t._e(),t._l(t.eles,function(e,i){return n("div",{directives:[{name:"interact",rawName:"v-interact"}],key:i,staticClass:"drag-drop-ele",style:e.style,attrs:{"data-id":e.id},on:{dblclick:function(n){e.show&&t.textBlockTrigger(e.id)}}},[e.show?n("button",{staticStyle:{top:"0",right:"0",position:"absolute"},on:{click:function(t){t.stopPropagation(),e.style.opacity="0.2",e.show=!1}}},[t._v("X")]):n("button",{staticStyle:{top:"0",right:"0",position:"absolute"},on:{click:function(t){t.stopPropagation(),e.style.opacity="1",e.show=!0}}},[t._v("O")]),t._v("\n      "+t._s(e.text)+"\n    ")])}),t.inputIsShow?n("text-input",{attrs:{id:t.textBlock.id,text:t.textBlock.content,isEnd:t.textBlock.id===t.eles.length,value:t.textBlock.content},on:{confirm:t.textBlockOnConfirm,cancel:function(e){t.inputIsShow=!1},changeTo:t.changeTo}}):t._e()],2):t._e(),t.hasImg?t._e():n("div",{staticClass:"start"},[n("label",{staticClass:"fileInput",attrs:{for:"imgInput"}},[t._v("\n      "+t._s(""!==t.fileName?t.fileName:"點此檔案上傳")+"\n      "),n("input",{attrs:{type:"file",name:"",id:"imgInput"},on:{change:function(e){return t.fileChange(e)}}})]),n("button",{on:{click:function(e){t.hasImg=!0}}},[t._v("confirm")])]),t.hasImg?n("sidebar",{on:{addBlock:function(e){return t.createElement()},toExcel:function(e){return t.exportToExcel()}}}):t._e()],1)},a=[],s=(n("ac6a"),n("7f7f"),n("7514"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"background",on:{click:function(e){return t.$emit("cancel")}}},[n("div",{staticClass:"modal"},[n("div",{staticClass:"text-wrap",attrs:{"data-id":t.id},on:{click:function(t){t.stopPropagation()}}},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"bottom-text",domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}})]),n("button",{staticClass:"bottom-text-btn",on:{click:function(e){return e.stopPropagation(),t.confirm(e)}}},[t._v("confirm")]),n("button",{staticClass:"bottom-text-btn",attrs:{disabled:1===t.id},on:{click:function(e){return e.stopPropagation(),t.change(!0)}}},[t._v("prev")]),n("button",{staticClass:"bottom-text-btn",attrs:{disabled:t.isEnd},on:{click:function(e){return e.stopPropagation(),t.change(!1)}}},[t._v("next")])])])}),c=[],r={props:["text","id","isEnd"],data:function(){return{content:this.text}},watch:{id:function(){this.content=this.text}},methods:{confirm:function(){this.$emit("confirm",this.content)},change:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.$emit("changeTo",t)}}},l=r,u=(n("321c"),n("2877")),d=Object(u["a"])(l,s,c,!1,null,"999479dc",null),f=d.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"left-side-menu"},[n("div",{staticClass:"background",class:!t.isOpen&&"hide",on:{click:t.closeSideMenu}}),n("div",{staticClass:"side-menu-ctn",class:!t.isOpen&&"hide"},[n("ul",{staticClass:"side-menu-list",class:!t.isOpen&&"hide"},[n("li",{on:{click:function(e){return t.emitCommend("toExcel")}}},[t._v("export to excel")])])]),n("div",{staticClass:"menu-ctn",on:{click:function(e){t.isOpen=!t.isOpen}}},[n("menu-icon",{attrs:{show:t.isOpen}})],1)])},h=[],m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"menu-icon",class:t.show&&"active"},[n("div",{staticClass:"line"})])},g=[],x={props:["show"]},v=x,b=(n("39fa"),Object(u["a"])(v,m,g,!1,null,"0af5a2a1",null)),k=b.exports,y={data:function(){return{isOpen:!1}},components:{menuIcon:k},methods:{closeSideMenu:function(){this.isOpen=!1},emitCommend:function(t){this.isOpen=!1,this.$emit(t)}}},w=y,_=(n("ce75"),Object(u["a"])(w,p,h,!1,null,"01464799",null)),O=_.exports,C=n("1146"),E=n.n(C),B={name:"app",components:{TextInput:f,sidebar:O},data:function(){return{eles:[],inputIsShow:!1,fileName:"",imgUrl:"",hasImg:!1,textBlock:{id:-1,content:""}}},methods:{changeTo:function(t){this.textBlock.id<=this.eles.length&&(t?this.textBlock.id-=1:this.textBlock.id+=1,this.textBlock.content=this.eles[this.textBlock.id-1].text)},createElement:function(t){var e={};t&&(console.log(t),e={top:"".concat(t.layerY,"px"),left:"".concat(t.layerX,"px")},console.log(e)),this.eles=this.eles.concat([{id:this.eles.length+1,text:"",style:e,show:!0}])},textBlockTrigger:function(t){console.log(t),this.textBlock.id=t,this.textBlock.content=this.eles.find(function(e){return e.id===t}).text,this.inputIsShow=!this.inputIsShow},textBlockOnConfirm:function(t){var e=this;this.eles.find(function(t){return t.id===e.textBlock.id}).text=t,console.log(this.eles),this.textBlock.id===this.eles[this.eles.length-1].id?this.inputIsShow=!1:this.textBlock.id=this.eles.find(function(t){return t.id>=e.textBlock.id+1}).id},fileChange:function(t){var e=t.target.files[0];console.log(e.name),this.fileName=e.name;var n=new FileReader,i=this;n.onload=function(t){i.imgUrl=t.target.result},n.readAsDataURL(e)},exportToExcel:function(){var t=document.createElement("table"),e=function(){return document.createElement("tr")},n=function(t){var e=document.createElement("th");return e.innerText=t,e},i=function(t){var e=document.createElement("td");return e.innerText=t,e},o=document.createElement("thead"),a=document.createElement("tbody"),s=e();s.append(n("No")),s.append(n("text")),o.append(s),t.append(o),this.eles.forEach(function(t){if(console.log(t.id),console.log(t.text),t.show){var n=t.id,o=t.text,s=e();s.append(i(n)),s.append(i(o)),a.append(s)}}),t.append(a),console.log(t);var c=E.a.utils.book_new();E.a.utils.book_append_sheet(c,E.a.utils.table_to_sheet(t),"tes"),E.a.writeFile(c,"test.xlsx")}}},I=B,S=(n("7faf"),Object(u["a"])(I,o,a,!1,null,null,null)),T=S.exports,P=n("59ad"),j=n.n(P),A=n("fb3a"),$=n.n(A),N={bind:function(t){$()(t).draggable({onmove:function(t){var e=t.target,n=(j()(e.getAttribute("data-x"))||0)+t.dx,i=(j()(e.getAttribute("data-y"))||0)+t.dy;e.style.webkitTransform=e.style.transform="translate("+n+"px, "+i+"px)",e.setAttribute("data-x",n),e.setAttribute("data-y",i)},restrict:{restriction:"parent",elementRect:{top:0,left:0,bottom:1,right:1}}}).resizable({edges:{left:!0,right:!0,bottom:!0,top:!0},restrictEdges:{outer:"parent",endOnly:!0},restrictSize:{min:{width:50,height:50}}}).on("resizemove",function(t){var e=t.target,n=j()(e.getAttribute("data-x"))||0,i=j()(e.getAttribute("data-y"))||0;e.style.width=t.rect.width+"px",e.style.height=t.rect.height+"px",n+=t.deltaRect.left,i+=t.deltaRect.top,e.style.webkitTransform=e.style.transform="translate("+n+"px,"+i+"px)",e.setAttribute("data-x",n),e.setAttribute("data-y",i)})}},M=function(t){t.directive("interact",N)};N.install=M,i["a"].config.productionTip=!1,i["a"].use(N),new i["a"]({render:function(t){return t(T)}}).$mount("#app")},"7faf":function(t,e,n){"use strict";var i=n("8fba"),o=n.n(i);o.a},"8fba":function(t,e,n){},ce75:function(t,e,n){"use strict";var i=n("d078"),o=n.n(i);o.a},d078:function(t,e,n){},e599:function(t,e,n){}});
//# sourceMappingURL=app.87abdf71.js.map