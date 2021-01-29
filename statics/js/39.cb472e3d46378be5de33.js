(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{nx1l:function(s,t,e){"use strict";e.r(t);var a=e("JFUb"),r=Object(a.a)({data:function(){return{position:{lng:117.217124,lat:31.809777},positions:[{lng:117.217124,lat:31.809777,height:0},{lng:117.217124,lat:31.809777,height:3e3}],material:{fabric:{type:"PolylineGlow",uniforms:{color:"red",glowPower:.5}}}}},methods:{ready:function(s){this.cesiumInstance=s},subReady:function(){var s=this.cesiumInstance,t=(s.Cesium,s.viewer);t.scene.globe.depthTestAgainstTerrain=!0,t.zoomTo(t.entities)}}},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("section",[e("h1",[s._v("VcDoubleCircleRipple")]),s._v(" "),s._m(0),s._v(" "),e("h2",[s._v("Example")]),s._v(" "),e("h3",[s._v("Load a VcDoubleCircleRipple")]),s._v(" "),e("h4",[s._v("Preview")]),s._v(" "),e("doc-preview",[[e("div",{staticClass:"viewer"},[e("vc-viewer",{on:{ready:s.ready}},[s.flag?e("vc-ripple-circle-double",{ref:"circle",attrs:{imageUrl:"./statics/SampleData/images/redCircle2.png",position:s.position},on:{ready:s.subReady}}):s._e(),s._v(" "),s.flag?e("vc-ripple-circle-double",{ref:"circle",attrs:{imageUrl:"./statics/SampleData/images/redCircle2.png",position:s.position,height:3e3},on:{ready:s.subReady}}):s._e(),s._v(" "),e("vc-entity",[e("vc-graphics-polyline",{attrs:{positions:s.positions,width:5,material:s.material}})],1),s._v(" "),e("vc-layer-imagery",[e("vc-provider-imagery-tianditu",{attrs:{mapStyle:"img_c",token:"436ce7e50d27eede2f2929307e6b33c0"}})],1)],1)],1)]],2),s._v(" "),e("h4",[s._v("Code")]),s._v(" "),s._m(1),s._v(" "),e("h2",[s._v("Instance Properties")]),s._v(" "),s._m(2),s._v(" "),e("hr"),s._v(" "),e("h2",[s._v("Events")]),s._v(" "),s._m(3)],1)}),[function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("The "),t("code",{pre:!0},[this._v("vc-ripple-circle-double")]),this._v(" component is used to load the double circle ripple effect. Refer to "),t("a",{attrs:{href:"https://www.wellyyss.cn/ysCesium/main/app.html"}},[this._v("ysCesium|跃焱邵隼")]),this._v(".")])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(">")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-ripple-circle-double")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"subReady"')]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("imageUrl")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"./statics/SampleData/images/redCircle2.png"')]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":position")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"position"')]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"circle"')]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-if")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"flag"')]),s._v("\n      >")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-ripple-circle-double")]),s._v(">")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-ripple-circle-double")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"subReady"')]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("imageUrl")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"./statics/SampleData/images/redCircle2.png"')]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":position")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"position"')]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"circle"')]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-if")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"flag"')]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":height")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"3000"')]),s._v("\n      >")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-ripple-circle-double")]),s._v(">")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-entity")]),s._v(">")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-graphics-polyline")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":positions")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"positions"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":width")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"5"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":material")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"material"')]),s._v(">")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-graphics-polyline")]),s._v(">")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-entity")]),s._v(">")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-layer-imagery")]),s._v(">")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-imagery-tianditu")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("mapStyle")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"img_c"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("token")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"436ce7e50d27eede2f2929307e6b33c0"')]),s._v(">")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-imagery-tianditu")]),s._v(">")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-layer-imagery")]),s._v(">")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(">")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),e("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("position")]),s._v(": { "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("117.217124")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("31.809777")]),s._v(" },\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("positions")]),s._v(": [{ "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("117.217124")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("31.809777")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(" }, { "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("117.217124")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("31.809777")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3000")]),s._v(" }],\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("material")]),s._v(": {\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fabric")]),s._v(": {\n            "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'PolylineGlow'")]),s._v(",\n            "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("uniforms")]),s._v(": { "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'red'")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("glowPower")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.5")]),s._v(" }\n          }\n        }\n      }\n    },\n    "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      ready(cesiumInstance) {\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".cesiumInstance = cesiumInstance\n      },\n      subReady() {\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Cesium, viewer } = "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".cesiumInstance\n        viewer.scene.globe.depthTestAgainstTerrain = "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n        viewer.zoomTo(viewer.entities)\n      }\n    }\n  }\n")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("table",[e("thead",[e("tr",[e("th",[s._v("name")]),s._v(" "),e("th",[s._v("type")]),s._v(" "),e("th",[s._v("default")]),s._v(" "),e("th",[s._v("description")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("position")]),s._v(" "),e("td",[s._v("Object")]),s._v(" "),e("td"),s._v(" "),e("td",[e("code",{pre:!0},[s._v("required")]),s._v(" Specify the location where the double circle ripple effect entity is added. structure: { lng: number, lat: number, height: number } or Cesium.Cartesian3")])]),s._v(" "),e("tr",[e("td",[s._v("show")]),s._v(" "),e("td",[s._v("Boolean")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("true")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" Specifies whether the double circle ripple effect is visible.")])]),s._v(" "),e("tr",[e("td",[s._v("height")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("undefined")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" Specify the height of the double circle ripple effect ellipse. Unit: Meter.")])]),s._v(" "),e("tr",[e("td",[s._v("minRadius")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("0")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" Specify the minimum radius of the double circle ripple effect. Unit: Meter.")])]),s._v(" "),e("tr",[e("td",[s._v("maxRadius")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("3000")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" Specify the maximum radius of the double circle ripple effect. Unit: Meter.")])]),s._v(" "),e("tr",[e("td",[s._v("deviationRadius")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("20")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" Specify the difference between the radius of the double circle. The larger the value, the faster the speed.")])]),s._v(" "),e("tr",[e("td",[s._v("interval")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("3000")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" The time interval between two circles, in milliseconds.")])]),s._v(" "),e("tr",[e("td",[s._v("imageUrl")]),s._v(" "),e("td",[s._v("String")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("''")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" Specify the picture used to express the double-circle ripple effect.")])]),s._v(" "),e("tr",[e("td",[s._v("color")]),s._v(" "),e("td",[s._v("Object|String|Array")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("'white'")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" Specify the color of the double circle ripple effect.")])])])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("table",[e("thead",[e("tr",[e("th",[s._v("name")]),s._v(" "),e("th",[s._v("parameter")]),s._v(" "),e("th",[s._v("description")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("ready")]),s._v(" "),e("td",[s._v("{Cesium, viewer, cesiumObject}")]),s._v(" "),e("td",[s._v("Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and an Entity array.")])])])])}],!1,null,null,null);t.default=r.exports},wxKz:function(s,t,e){s.exports=e("nx1l")}}]);
//# sourceMappingURL=39.cb472e3d46378be5de33.js.map