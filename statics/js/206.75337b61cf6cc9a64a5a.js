(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{AN9I:function(s,a,r){s.exports=r("z22d")},z22d:function(s,a,r){"use strict";r.r(a);var t=r("JFUb"),e=Object(t.a)(null,(function(){var s=this.$createElement;this._self._c;return this._m(0)}),[function(){var s=this,a=s.$createElement,r=s._self._c||a;return r("section",[r("h1",[s._v("基础")]),s._v(" "),r("h2",[s._v("全局组件事件")]),s._v(" "),r("table",[r("thead",[r("tr",[r("th",[s._v("事件名")]),s._v(" "),r("th",[s._v("参数")]),s._v(" "),r("th",[s._v("描述")])])]),s._v(" "),r("tbody",[r("tr",[r("td",[s._v("ready")]),s._v(" "),r("td",[s._v("{ Cesium, viewer, cesiumObject }")]),s._v(" "),r("td",[s._v("viewer 组件渲染完毕时触发，返回一个 Cesium 的核心类和 viewer 实例。该项目组件是异步加载，请"),r("strong",[s._v("不要")]),s._v("尝试在组件的生命周期中访问 Cesium 核心类和 viewer 实例，如有需要，请在所需组件的 "),r("code",{pre:!0},[s._v("ready")]),s._v(" 事件回调函数的参数中获取。")])])])]),s._v(" "),r("h2",[s._v("全局组件实例方法")]),s._v(" "),r("table",[r("thead",[r("tr",[r("th",[s._v("方法名")]),s._v(" "),r("th",[s._v("参数")]),s._v(" "),r("th",[s._v("描述")])])]),s._v(" "),r("tbody",[r("tr",[r("td",[s._v("load")]),s._v(" "),r("td"),s._v(" "),r("td",[s._v("组件加载时执行的抽象方法。")])]),s._v(" "),r("tr",[r("td",[s._v("unload")]),s._v(" "),r("td"),s._v(" "),r("td",[s._v("组件卸载时执行的抽象方法。")])]),s._v(" "),r("tr",[r("td",[s._v("reload")]),s._v(" "),r("td"),s._v(" "),r("td",[s._v("完成一次组件卸载 / 重新加载的方法。")])])])]),s._v(" "),r("h2",[s._v("常量")]),s._v(" "),r("ul",[r("li",[s._v("待完善")])]),s._v(" "),r("h2",[s._v("类型")]),s._v(" "),r("h3",[s._v("Cartesian2")]),s._v(" "),r("ul",[r("li",[s._v("描述表达二维结构分量的 point、padding 等。如组件"),r("code",{pre:!0},[s._v("vc-graphics-box")]),s._v("的"),r("code",{pre:!0},[s._v("dimensions")]),s._v("属性。")])]),s._v(" "),r("pre",{pre:!0},[r("code",{pre:!0,attrs:{"v-pre":"",class:"language-JavaScript"}},[s._v("{\n  "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("x")]),s._v(": number,\n  "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("y")]),s._v(": number\n}\n\n[x, y]\n")])]),s._v(" "),r("h3",[s._v("Cartesian2 Array")]),s._v(" "),r("ul",[r("li",[s._v("描述二维点集合。如组件"),r("code",{pre:!0},[s._v("vc-graphics-polyline-volume")]),s._v("的"),r("code",{pre:!0},[s._v("shape")]),s._v("属性。")])]),s._v(" "),r("pre",{pre:!0},[r("code",{pre:!0,attrs:{"v-pre":"",class:"language-JavaScript"}},[s._v("[{ "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("x")]),s._v(": number, "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("y")]),s._v(": number },...,{ "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("x")]),s._v(": number, "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("y")]),s._v(": number }]\n\n[x, y, ..., x, y]\n")])]),s._v(" "),r("h3",[s._v("Cartesian3")]),s._v(" "),r("ul",[r("li",[s._v("描述三维点。如组件"),r("code",{pre:!0},[s._v("vc-entity")]),s._v("的"),r("code",{pre:!0},[s._v("position")]),s._v("属性。")])]),s._v(" "),r("pre",{pre:!0},[r("code",{pre:!0,attrs:{"v-pre":"",class:"language-JavaScript"}},[s._v("{\n  "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": number,\n  "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": number,\n  "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": number\n}\n\n{\n  "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("x")]),s._v(": number\n  "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("y")]),s._v(": number\n  "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("z")]),s._v(": number\n}\n\n[x, y, z]\n")])]),s._v(" "),r("h3",[s._v("Cartesian3 Array")]),s._v(" "),r("ul",[r("li",[s._v("描述三维点集。如组件"),r("code",{pre:!0},[s._v("vc-graphics-polyline")]),s._v("的"),r("code",{pre:!0},[s._v("positions")]),s._v("属性。")])]),s._v(" "),r("pre",{pre:!0},[r("code",{pre:!0,attrs:{"v-pre":"",class:"language-JavaScript"}},[s._v("[{ "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": number, "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": number, "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": number },...,{ "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": number, "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": number, "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": number }]\n\n[x1, y1, z1, ..., xn, yn, zn]\n")])]),s._v(" "),r("h3",[s._v("Rectangle")]),s._v(" "),r("ul",[r("li",[s._v("描述矩形。如组件"),r("code",{pre:!0},[s._v("vc-graphics-rectangle")]),s._v("的"),r("code",{pre:!0},[s._v("coordinates")]),s._v("属性。")])]),s._v(" "),r("pre",{pre:!0},[r("code",{pre:!0,attrs:{"v-pre":"",class:"language-JavaScript"}},[s._v("{ "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("west")]),s._v(": number, "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("south")]),s._v(": number, "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("east")]),s._v(": number, "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("north")]),s._v(": number }\n\n[west, south, east, north]\n")])]),s._v(" "),r("h3",[s._v("DistanceDisplayCondition")]),s._v(" "),r("ul",[r("li",[s._v("描述随相机距离改变对象是否显示的参数。")])]),s._v(" "),r("pre",{pre:!0},[r("code",{pre:!0,attrs:{"v-pre":"",class:"language-JavaScript"}},[s._v("{\n  "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("near")]),s._v(": number,\n  "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("far")]),s._v(": number\n}\n\n[near , far]\n")])]),s._v(" "),r("h3",[s._v("NearFarScalar")]),s._v(" "),r("ul",[r("li",[s._v("描述随相机距离改变对象在近距离和远距离的缩放、偏移等的上下限。")])]),s._v(" "),r("pre",{pre:!0},[r("code",{pre:!0,attrs:{"v-pre":"",class:"language-JavaScript"}},[s._v("{\n  "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("near")]),s._v(": number,\n  "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("nearValue")]),s._v(": number,\n  "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("far")]),s._v(": number,\n  "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("farValue")]),s._v(": number\n}\n\n[near, nearValue, far, farValue]\n")])]),s._v(" "),r("h3",[s._v("Color")]),s._v(" "),r("pre",{pre:!0},[r("code",{pre:!0,attrs:{"v-pre":"",class:"language-JavaScript"}},[s._v("\n"),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// String：可以是 #rgb, #rrggbb, rgb(), rgba(), hsl(), or hsla()格式。")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'WHITE'")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'rgb(255,255,255)'")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#67ADDF'")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// Array 取值范围0-1")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": ["),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1.0")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1.0")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1.0")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1.0")]),s._v("]\n"),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// Object 直接传Cesium.Color对象 需要在组件ready之后传。")]),s._v("\n")])]),s._v(" "),r("h3",[s._v("PolygonHierarchy")]),s._v(" "),r("pre",{pre:!0},[r("code",{pre:!0,attrs:{"v-pre":"",class:"language-JavaScript"}},[r("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// Array")]),s._v("\n[{"),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": number, "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": number, "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": number},...,{"),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": number, "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": number, "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": number}]\n"),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// Object")]),s._v("\n{\n  "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("positions")]),s._v(": [{"),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": number, "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": number, "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": number},...,{"),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": number, "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": number, "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": number}],\n  "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("holes")]),s._v(": [\n    {\n      "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("positions")]),s._v(": [{"),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": number, "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": number, "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": number},...,{"),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": number, "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": number, "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": number}],\n      "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("holes")]),s._v(": [\n        positions: [{"),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": number, "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": number, "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": number},...,{"),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": number, "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": number, "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": number}]\n        "),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// ...")]),s._v("\n      ]\n    }\n  ]\n}\n\n")])]),s._v(" "),r("h2",[s._v("参考")]),s._v(" "),r("blockquote",[r("p",[r("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/index.html"}},[s._v("Cesium 官方文档")])])])])}],!1,null,null,null);a.default=e.exports}}]);
//# sourceMappingURL=206.75337b61cf6cc9a64a5a.js.map