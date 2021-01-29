(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{"75V0":function(t,s,e){t.exports=e("FW8M")},FW8M:function(t,s,e){"use strict";e.r(s);var a=e("eVuF"),r=e.n(a),n={data:function(){return{appearance:null,geometry:null,vertexFormat:null,polygonHierarchy:[{lng:102.1,lat:29.5},{lng:106.2,lat:29.5},{lng:106.2,lat:33.5},{lng:108.2,lat:35.5},{lng:102.1,lat:33.5}],height:1e5,polygonHierarchyOutline:[{lng:107.1,lat:29.5},{lng:111.2,lat:29.5},{lng:111.2,lat:33.5},{lng:113.2,lat:35.5},{lng:107.1,lat:33.5}],appearanceOutline:null,attributes:null}},mounted:function(){r.a.all([this.$refs.polygon.createPromise,this.$refs.polygonOutline.createPromise]).then((function(t){console.log("All geometries are loaded.");var s=t.reduce((function(t,s){var e=s.cesiumObject.constructor.createGeometry(s.cesiumObject),a=s.vm.$parent.modelMatrix?Cesium.BoundingSphere.transform(e.boundingSphere,s.vm.$parent.modelMatrix):e.boundingSphere;return null===t?a:Cesium.BoundingSphere.union(t,a)}),null);t[0].viewer.scene.camera.flyToBoundingSphere(s)}))},methods:{ready:function(t){var s=t.Cesium,e=t.viewer;this.viewer=e;var a=s.PerInstanceColorAppearance,r=s.ColorGeometryInstanceAttribute,n=s.EllipsoidSurfaceAppearance,l=s.Material;this.appearanceOutline=new a({flat:!0}),this.attributes={color:new r(Math.random(),Math.random(),Math.random(),.5)},this.vertexFormat=n.VERTEX_FORMAT,this.appearance=new n({material:new l({fabric:{type:"Water",uniforms:{normalMap:"./statics/SampleData/images/waterNormals.jpg",frequency:1e3,animationSpeed:.05,amplitude:10}}})})}}},l=e("JFUb"),v=Object(l.a)(n,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",[e("h1",[t._v("PolygonGeometry、PolygonOutlineGeometry")]),t._v(" "),t._m(0),t._v(" "),e("h2",[t._v("Example")]),t._v(" "),e("h3",[t._v("Load PolygonGeometry")]),t._v(" "),e("h4",[t._v("Preview")]),t._v(" "),e("doc-preview",[[e("div",{staticClass:"viewer"},[e("vc-viewer",{on:{ready:t.ready}},[e("vc-primitive",{attrs:{appearance:t.appearance}},[e("vc-instance-geometry",[e("vc-geometry-polygon",{ref:"polygon",attrs:{vertexFormat:t.vertexFormat,polygonHierarchy:t.polygonHierarchy,height:t.height,extrudedHeight:30}})],1)],1),t._v(" "),e("vc-primitive",{attrs:{appearance:t.appearanceOutline}},[e("vc-instance-geometry",{attrs:{attributes:t.attributes}},[e("vc-geometry-outline-polygon",{ref:"polygonOutline",attrs:{polygonHierarchy:t.polygonHierarchyOutline}})],1)],1)],1)],1)]],2),t._v(" "),e("h4",[t._v("Code")]),t._v(" "),t._m(1),t._v(" "),e("h2",[t._v("Instance Properties")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),e("hr"),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),e("hr"),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),e("h2",[t._v("Events")]),t._v(" "),t._m(9),t._v(" "),e("hr")],1)}),[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[t._v("The "),e("code",{pre:!0},[t._v("vc-geometry-polygon")]),t._v(" component is used to load a geometry that describes a polygon on the ellipsoid.")]),t._v(" "),e("li",[t._v("The "),e("code",{pre:!0},[t._v("vc-geometry-outline-polygon")]),t._v(" component is used to load a geometry that describes the outline of a polygon on the ellipsoid.")]),t._v(" "),e("li",[t._v("It needs to be used as a sub-component of "),e("code",{pre:!0},[t._v("vc-instance-geometry")]),t._v(", can be mounted on "),e("code",{pre:!0},[t._v("vc-primitive")]),t._v(" or "),e("code",{pre:!0},[t._v("vc-primitive-ground")]),t._v(".")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"viewer"')]),t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-viewer")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@ready")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"ready"')]),t._v(">")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-primitive")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":appearance")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"appearance"')]),t._v(">")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-instance-geometry")]),t._v(">")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-geometry-polygon")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("ref")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"polygon"')]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":vertexFormat")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"vertexFormat"')]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":polygonHierarchy")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"polygonHierarchy"')]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":height")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"height"')]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":extrudedHeight")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"30"')]),t._v("\n          >")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-geometry-polygon")]),t._v(">")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-instance-geometry")]),t._v(">")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-primitive")]),t._v(">")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-primitive")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":appearance")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"appearanceOutline"')]),t._v(">")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-instance-geometry")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":attributes")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"attributes"')]),t._v(">")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-geometry-outline-polygon")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("ref")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"polygonOutline"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":polygonHierarchy")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"polygonHierarchyOutline"')]),t._v(">")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-geometry-outline-polygon")]),t._v(">")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-instance-geometry")]),t._v(">")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-primitive")]),t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-viewer")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),e("span",{pre:!0,attrs:{class:"javascript"}},[t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    data() {\n      "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("appearance")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("null")]),t._v(",\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("geometry")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("null")]),t._v(",\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("vertexFormat")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("null")]),t._v(",\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("polygonHierarchy")]),t._v(": [\n          { "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lng")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("102.1")]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lat")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("29.5")]),t._v(" },\n          { "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lng")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("106.2")]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lat")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("29.5")]),t._v(" },\n          { "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lng")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("106.2")]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lat")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("33.5")]),t._v(" },\n          { "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lng")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("108.2")]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lat")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("35.5")]),t._v(" },\n          { "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lng")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("102.1")]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lat")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("33.5")]),t._v(" }\n        ],\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("height")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("100000")]),t._v(",\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("polygonHierarchyOutline")]),t._v(": [\n          { "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lng")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("107.1")]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lat")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("29.5")]),t._v(" },\n          { "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lng")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("111.2")]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lat")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("29.5")]),t._v(" },\n          { "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lng")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("111.2")]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lat")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("33.5")]),t._v(" },\n          { "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lng")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("113.2")]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lat")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("35.5")]),t._v(" },\n          { "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lng")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("107.1")]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lat")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("33.5")]),t._v(" }\n        ],\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("appearanceOutline")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("null")]),t._v(",\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("attributes")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("null")]),t._v("\n      }\n    },\n    mounted() {\n      "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("Promise")]),t._v(".all(["),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$refs.polygon.createPromise, "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$refs.polygonOutline.createPromise]).then("),e("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("instances")]),t._v(") =>")]),t._v(" {\n        "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'All geometries are loaded.'")]),t._v(")\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" boundingSphereUnion = instances.reduce("),e("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("prev, cur")]),t._v(") =>")]),t._v(" {\n          "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" geometry = cur.cesiumObject.constructor.createGeometry(cur.cesiumObject)\n          "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" boundingSphere = cur.vm.$parent.modelMatrix\n            ? Cesium.BoundingSphere.transform(geometry.boundingSphere, cur.vm.$parent.modelMatrix)\n            : geometry.boundingSphere\n          "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" prev === "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("null")]),t._v(" ? boundingSphere : Cesium.BoundingSphere.union(prev, boundingSphere)\n        }, "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("null")]),t._v(")\n        instances["),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0")]),t._v("].viewer.scene.camera.flyToBoundingSphere(boundingSphereUnion)\n      })\n    },\n    "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n      ready({ Cesium, viewer }) {\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".viewer = viewer\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" { PerInstanceColorAppearance, ColorGeometryInstanceAttribute, EllipsoidSurfaceAppearance, Material } = Cesium\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".appearanceOutline = "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("new")]),t._v(" PerInstanceColorAppearance({\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("flat")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("true")]),t._v("\n        })\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".attributes = {\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("color")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("new")]),t._v(" ColorGeometryInstanceAttribute("),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("Math")]),t._v(".random(), "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("Math")]),t._v(".random(), "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("Math")]),t._v(".random(), "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0.5")]),t._v(")\n        }\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".vertexFormat = EllipsoidSurfaceAppearance.VERTEX_FORMAT\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".appearance = "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("new")]),t._v(" EllipsoidSurfaceAppearance({\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("material")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("new")]),t._v(" Material({\n            "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("fabric")]),t._v(": {\n              "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Water'")]),t._v(",\n              "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("uniforms")]),t._v(": {\n                "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("normalMap")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'./statics/SampleData/images/waterNormals.jpg'")]),t._v(",\n                "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("frequency")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1000.0")]),t._v(",\n                "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("animationSpeed")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0.05")]),t._v(",\n                "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("amplitude")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("10.0")]),t._v("\n              }\n            }\n          })\n        })\n      }\n    }\n  }\n")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",[s("code",{pre:!0},[this._v("vc-geometry-polygon")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",[e("thead",[e("tr",[e("th",[t._v("name")]),t._v(" "),e("th",[t._v("type")]),t._v(" "),e("th",[t._v("default")]),t._v(" "),e("th",[t._v("description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("polygonHierarchy")]),t._v(" "),e("td",[t._v("Object|Array")]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("required")]),t._v(" A polygon hierarchy that can include holes.")])]),t._v(" "),e("tr",[e("td",[t._v("height")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("0")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" The distance in meters between the polygon and the ellipsoid surface.")])]),t._v(" "),e("tr",[e("td",[t._v("extrudedHeight")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" The distance in meters between the polygon's extruded face and the ellipsoid surface.")])]),t._v(" "),e("tr",[e("td",[t._v("vertexFormat")]),t._v(" "),e("td",[t._v("Object")]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" The vertex attributes to be computed.")])]),t._v(" "),e("tr",[e("td",[t._v("stRotation")]),t._v(" "),e("td",[t._v("Number|Object")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("0.0")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" The rotation of the texture coordinates, in radians. A positive rotation is counter-clockwise.")])]),t._v(" "),e("tr",[e("td",[t._v("ellipsoid")]),t._v(" "),e("td",[t._v("Object")]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" The ellipsoid to be used as a reference.")])]),t._v(" "),e("tr",[e("td",[t._v("granularity")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" The distance, in radians, between each latitude and longitude. Determines the number of positions in the buffer.")])]),t._v(" "),e("tr",[e("td",[t._v("perPositionHeight")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("false")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" Use the height of options.positions for each position instead of using options.height to determine the height.")])]),t._v(" "),e("tr",[e("td",[t._v("closeTop")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("true")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" When false, leaves off the top of an extruded polygon open.")])]),t._v(" "),e("tr",[e("td",[t._v("closeBottom")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("true")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" When false, leaves off the bottom of an extruded polygon open.")])]),t._v(" "),e("tr",[e("td",[t._v("arcType")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("1")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" The type of line the polygon edges must follow. Valid options are ArcType.GEODESIC and ArcType.RHUMB. "),e("strong",[t._v("NONE: 0, GEODESIC: 1, RHUMB: 2")])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",[s("code",{pre:!0},[this._v("vc-geometry-outline-polygon")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",[e("thead",[e("tr",[e("th",[t._v("name")]),t._v(" "),e("th",[t._v("type")]),t._v(" "),e("th",[t._v("default")]),t._v(" "),e("th",[t._v("description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("polygonHierarchy")]),t._v(" "),e("td",[t._v("Object|Array")]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("required")]),t._v(" A polygon hierarchy that can include holes.")])]),t._v(" "),e("tr",[e("td",[t._v("height")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("0")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" The distance in meters between the polygon and the ellipsoid surface.")])]),t._v(" "),e("tr",[e("td",[t._v("extrudedHeight")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" The distance in meters between the polygon's extruded face and the ellipsoid surface.")])]),t._v(" "),e("tr",[e("td",[t._v("vertexFormat")]),t._v(" "),e("td",[t._v("Object")]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" The vertex attributes to be computed.")])]),t._v(" "),e("tr",[e("td",[t._v("ellipsoid")]),t._v(" "),e("td",[t._v("Object")]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" The ellipsoid to be used as a reference.")])]),t._v(" "),e("tr",[e("td",[t._v("granularity")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" The distance, in radians, between each latitude and longitude. Determines the number of positions in the buffer.")])]),t._v(" "),e("tr",[e("td",[t._v("perPositionHeight")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("false")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" Use the height of options.positions for each position instead of using options.height to determine the height.")])]),t._v(" "),e("tr",[e("td",[t._v("arcType")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("1")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" The type of line the polygon edges must follow. Valid options are ArcType.GEODESIC and ArcType.RHUMB. "),e("strong",[t._v("NONE: 0, GEODESIC: 1, RHUMB: 2")])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("structure of hierarchy")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// Array")]),t._v("\n[{"),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lng")]),t._v(": number, "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lat")]),t._v(": number, "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("height")]),t._v(": number},...,{"),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lng")]),t._v(": number, "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lat")]),t._v(": number, "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("height")]),t._v(": number}]\n"),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// Object")]),t._v("\n{\n  "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("positions")]),t._v(": [{"),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lng")]),t._v(": number, "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lat")]),t._v(": number, "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("height")]),t._v(": number},...,{"),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lng")]),t._v(": number, "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lat")]),t._v(": number, "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("height")]),t._v(": number}],\n  "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("holes")]),t._v(": [\n    {\n      "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("positions")]),t._v(": [{"),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lng")]),t._v(": number, "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lat")]),t._v(": number, "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("height")]),t._v(": number},...,{"),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lng")]),t._v(": number, "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lat")]),t._v(": number, "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("height")]),t._v(": number}],\n      "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("holes")]),t._v(": [\n        positions: [{"),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lng")]),t._v(": number, "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lat")]),t._v(": number, "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("height")]),t._v(": number},...,{"),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lng")]),t._v(": number, "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lat")]),t._v(": number, "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("height")]),t._v(": number}]\n        "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// ...")]),t._v("\n      ]\n    }\n  ]\n}\n\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Refer to the official document: "),s("strong",[s("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/PolygonGeometry.html"}},[this._v("PolygonGeometry")])]),this._v(", "),s("strong",[s("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/PolygonOutlineGeometry.html"}},[this._v("PolygonOutlineGeometry")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",[e("thead",[e("tr",[e("th",[t._v("name")]),t._v(" "),e("th",[t._v("parameter")]),t._v(" "),e("th",[t._v("description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("ready")]),t._v(" "),e("td",[t._v("{Cesium, viewer, cesiumObject}")]),t._v(" "),e("td",[t._v("Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject.")])])])])}],!1,null,null,null);s.default=v.exports}}]);
//# sourceMappingURL=56.3227311a0cf7a4bb002d.js.map