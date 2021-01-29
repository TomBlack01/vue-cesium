(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"4VM1":function(s,t,a){s.exports=a("BSCy")},BSCy:function(s,t,a){"use strict";a.r(t);var e=a("eVuF"),r=a.n(e),n={data:function(){return{cesiumInstance:{},description:"Hello Vue Cesium",model1:{},path1:{},material1:{},availability:{},position1:{},terrainProvider:{},orientation:{},uri1:"./statics/SampleData/models/CesiumAir/Cesium_Air.gltf",start:{},stop:{},positions:[]}},mounted:function(){r.a.all([this.$refs.path.createPromise,this.$refs.model.createPromise]).then((function(s){s[0].viewer.zoomTo(s[0].viewer.entities)}))},methods:{ready:function(s){var t=s.Cesium,a=s.viewer;this.cesiumInstance=s,this.terrainProvider=t.createWorldTerrain(),this.position1=t.Cartesian3.fromDegrees(114,40,1),a.scene.globe.enableLighting=!0,a.scene.globe.depthTestAgainstTerrain=!0,t.Math.setRandomNumberSeed(3),this.start=t.JulianDate.fromDate(new Date(2015,2,25,16)),this.stop=t.JulianDate.addSeconds(this.start,360,new t.JulianDate),a.clock.startTime=this.start.clone(),a.clock.stopTime=this.stop.clone(),a.clock.currentTime=this.start.clone(),a.clock.clockRange=t.ClockRange.LOOP_STOP,a.clock.multiplier=10,a.timeline.zoomTo(this.start,this.stop),this.position1=this.computeCirclularFlight(-112.110693,36.0994841,.03),this.availability=new t.TimeIntervalCollection([new t.TimeInterval({start:this.start,stop:this.stop})]),this.orientation=new t.VelocityOrientationProperty(this.position1),this.material1=new t.PolylineGlowMaterialProperty({glowPower:.1,color:t.Color.YELLOW})},computeCirclularFlight:function(s,t,a){for(var e=this.cesiumInstance,r=e.Cesium,n=(e.viewer,new r.SampledPositionProperty),l=0;l<=360;l+=45){var v=r.Math.toRadians(l),i=r.JulianDate.addSeconds(this.start,l,new r.JulianDate),p=r.Cartesian3.fromDegrees(s+1.5*a*Math.cos(v),t+a*Math.sin(v),500*r.Math.nextRandomNumber()+1750);n.addSample(i,p),this.positions.push(p)}return n},viewTopDown:function(){var s=this.cesiumInstance,t=s.Cesium,a=s.viewer;a.trackedEntity=void 0,a.zoomTo(a.entities,new t.HeadingPitchRange(0,t.Math.toRadians(-90)))},viewSide:function(){var s=this.cesiumInstance,t=s.Cesium,a=s.viewer;a.trackedEntity=void 0,a.zoomTo(a.entities,new t.HeadingPitchRange(t.Math.toRadians(-90),t.Math.toRadians(-15),7500))},viewAircraft:function(){var s=this.cesiumInstance;s.Cesium;s.viewer.trackedEntity=this.$refs.entity.cesiumObject}}},l=a("JFUb"),v=Object(l.a)(n,(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("PathGraphics")]),s._v(" "),s._m(0),s._v(" "),a("h2",[s._v("Example")]),s._v(" "),s._m(1),s._v(" "),a("h4",[s._v("Preview")]),s._v(" "),a("doc-preview",[[a("div",{staticClass:"viewer"},[a("vc-viewer",{attrs:{shouldAnimate:!0,animation:!0,timeline:!0,terrainProvider:s.terrainProvider},on:{ready:s.ready}},[a("vc-entity",{ref:"entity",attrs:{availability:s.availability,position:s.position1,orientation:s.orientation,description:s.description,model:s.model1,path:s.path1},on:{"update:model":function(t){s.model1=t},"update:path":function(t){s.path1=t}}},[a("vc-graphics-path",{ref:"path",attrs:{resolution:1,material:s.material1,width:10}}),s._v(" "),a("vc-graphics-model",{ref:"model",attrs:{uri:s.uri1,minimumPixelSize:64}})],1),s._v(" "),s._l(s.positions,(function(s,t){return a("vc-entity",{key:"entity"+t,attrs:{position:s}},[a("vc-graphics-point",{attrs:{pixelSize:8,color:"TRANSPARENT",outlineColor:"YELLOW",outlineWidth:3}})],1)})),s._v(" "),a("vc-layer-imagery",[a("vc-provider-imagery-arcgis-mapserver",{attrs:{url:"https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer"}})],1)],2),s._v(" "),a("div",{staticClass:"demo-tool"},[a("md-button",{staticClass:"md-raised md-accent",on:{click:s.viewTopDown}},[s._v("View Top Down")]),s._v(" "),a("md-button",{staticClass:"md-raised md-accent",on:{click:s.viewSide}},[s._v("View Side")]),s._v(" "),a("md-button",{staticClass:"md-raised md-accent",on:{click:s.viewAircraft}},[s._v("View Aircraft")])],1)],1)]],2),s._v(" "),a("h4",[s._v("Code")]),s._v(" "),s._m(2),s._v(" "),a("h2",[s._v("Instance Properties")]),s._v(" "),s._m(3),s._v(" "),a("hr"),s._v(" "),s._m(4),s._v(" "),a("h2",[s._v("Events")]),s._v(" "),s._m(5),s._v(" "),a("hr")],1)}),[function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("The "),t("code",{pre:!0},[this._v("vc-graphics-path")]),this._v(" component is used to load a path that moves over time. Need to be used as a subcomponent of "),t("code",{pre:!0},[this._v("vc-entity")]),this._v(".")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",[this._v("Load PathGraphics with "),t("code",{pre:!0},[this._v("vc-graphics-path")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":shouldAnimate")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":animation")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":timeline")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":terrainProvider")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"terrainProvider"')]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-entity")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"entity"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":availability")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"availability"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":position")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"position1"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":orientation")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"orientation"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":description")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"description"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":model.sync")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"model1"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":path.sync")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"path1"')]),s._v("\n      >")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-graphics-path")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"path"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":resolution")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"1"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":material")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"material1"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":width")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"10"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-graphics-path")]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-graphics-model")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"model"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":uri")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"uri1"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":minimumPixelSize")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"64"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-graphics-model")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-entity")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-entity")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":key")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"'entity' + index\"")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":position")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"position"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-for")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"(position, index) of positions"')]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-graphics-point")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":pixelSize")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"8"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"TRANSPARENT"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("outlineColor")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"YELLOW"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":outlineWidth")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"3"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-graphics-point")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-entity")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-layer-imagery")]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-imagery-arcgis-mapserver")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("url")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-imagery-arcgis-mapserver")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-layer-imagery")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"demo-tool"')]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-button")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"md-raised md-accent"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewTopDown"')]),s._v(">")]),s._v("View Top Down"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-button")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-button")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"md-raised md-accent"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewSide"')]),s._v(">")]),s._v("View Side"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-button")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-button")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"md-raised md-accent"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewAircraft"')]),s._v(">")]),s._v("View Aircraft"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-button")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("cesiumInstance")]),s._v(": {},\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("description")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Hello Vue Cesium'")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("model1")]),s._v(": {},\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("path1")]),s._v(": {},\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("material1")]),s._v(": {},\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("availability")]),s._v(": {},\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("position1")]),s._v(": {},\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("terrainProvider")]),s._v(": {},\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("orientation")]),s._v(": {},\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("uri1")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'./statics/SampleData/models/CesiumAir/Cesium_Air.gltf'")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("start")]),s._v(": {},\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("stop")]),s._v(": {},\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("positions")]),s._v(": []\n      }\n    },\n    mounted() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Promise")]),s._v(".all(["),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.path.createPromise, "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.model.createPromise]).then("),a("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("instances")]),s._v(") =>")]),s._v(" {\n        instances["),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("].viewer.zoomTo(instances["),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("].viewer.entities)\n      })\n    },\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      ready(cesiumInstance) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Cesium, viewer } = cesiumInstance\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".cesiumInstance = cesiumInstance\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".terrainProvider = Cesium.createWorldTerrain()\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".position1 = Cesium.Cartesian3.fromDegrees("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("114.0")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("40.0")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1.0")]),s._v(")\n        "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//Enable lighting based on sun/moon positions")]),s._v("\n        viewer.scene.globe.enableLighting = "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//Enable depth testing so things behind the terrain disappear.")]),s._v("\n        viewer.scene.globe.depthTestAgainstTerrain = "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//Set the random number seed for consistent results.")]),s._v("\n        Cesium.Math.setRandomNumberSeed("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3")]),s._v(")\n        "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//Set bounds of our simulation time")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".start = Cesium.JulianDate.fromDate("),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Date")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2015")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("25")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("16")]),s._v("))\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".stop = Cesium.JulianDate.addSeconds("),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".start, "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("360")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.JulianDate())\n        viewer.clock.startTime = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".start.clone()\n        viewer.clock.stopTime = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".stop.clone()\n        viewer.clock.currentTime = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".start.clone()\n        viewer.clock.clockRange = Cesium.ClockRange.LOOP_STOP "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//Loop at the end")]),s._v("\n        viewer.clock.multiplier = "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v("\n        viewer.timeline.zoomTo("),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".start, "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".stop)\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".position1 = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".computeCirclularFlight("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("-112.110693")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("36.0994841")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.03")]),s._v(")\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".availability = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.TimeIntervalCollection([\n          "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.TimeInterval({\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("start")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".start,\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("stop")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".stop\n          })\n        ])\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".orientation = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.VelocityOrientationProperty("),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".position1)\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".material1 = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.PolylineGlowMaterialProperty({\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("glowPower")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.1")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": Cesium.Color.YELLOW\n        })\n      },\n      computeCirclularFlight(lon, lat, radius) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Cesium, viewer } = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".cesiumInstance\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" property = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.SampledPositionProperty()\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("for")]),s._v(" ("),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" i = "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("; i <= "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("360")]),s._v("; i += "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("45")]),s._v(") {\n          "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" radians = Cesium.Math.toRadians(i)\n          "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" time = Cesium.JulianDate.addSeconds("),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".start, i, "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.JulianDate())\n          "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" position = Cesium.Cartesian3.fromDegrees(\n            lon + radius * "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1.5")]),s._v(" * "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".cos(radians),\n            lat + radius * "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".sin(radians),\n            Cesium.Math.nextRandomNumber() * "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("500")]),s._v(" + "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1750")]),s._v("\n          )\n          property.addSample(time, position)\n          "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".positions.push(position)\n        }\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" property\n      },\n      viewTopDown() {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Cesium, viewer } = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".cesiumInstance\n        viewer.trackedEntity = "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("undefined")]),s._v("\n        viewer.zoomTo(viewer.entities, "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.HeadingPitchRange("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", Cesium.Math.toRadians("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("-90")]),s._v(")))\n      },\n      viewSide() {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Cesium, viewer } = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".cesiumInstance\n        viewer.trackedEntity = "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("undefined")]),s._v("\n        viewer.zoomTo(viewer.entities, "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.HeadingPitchRange(Cesium.Math.toRadians("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("-90")]),s._v("), Cesium.Math.toRadians("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("-15")]),s._v("), "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("7500")]),s._v("))\n      },\n      viewAircraft() {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Cesium, viewer } = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".cesiumInstance\n        viewer.trackedEntity = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.entity.cesiumObject\n      }\n    }\n  }\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("name")]),s._v(" "),a("th",[s._v("type")]),s._v(" "),a("th",[s._v("default")]),s._v(" "),a("th",[s._v("description")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("show")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("true")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" A boolean Property specifying the visibility of the path.")])]),s._v(" "),a("tr",[a("td",[s._v("leadTime")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" A Property specifying the number of seconds behind the object to show.")])]),s._v(" "),a("tr",[a("td",[s._v("trailTime")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" A Property specifying the number of seconds in front of the object to show.")])]),s._v(" "),a("tr",[a("td",[s._v("width")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("1.0")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" A numeric Property specifying the width in pixels.")])]),s._v(" "),a("tr",[a("td",[s._v("resolution")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("60")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" A numeric Property specifying the maximum number of seconds to step when sampling the position.")])]),s._v(" "),a("tr",[a("td",[s._v("material")]),s._v(" "),a("td",[s._v("Object|String|Array")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("'WHITE'")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" A Property specifying the material used to draw the path.")])]),s._v(" "),a("tr",[a("td",[s._v("distanceDisplayCondition")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" A Property specifying at what distance from the camera that this path will be displayed. "),a("strong",[s._v("structure: { near: number, far: number }")])])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("ul",[t("li",[this._v("Refer to the official document: "),t("strong",[t("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/PathGraphics.html"}},[this._v("PathGraphics")])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("name")]),s._v(" "),a("th",[s._v("parameter")]),s._v(" "),a("th",[s._v("description")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("ready")]),s._v(" "),a("td",[s._v("{Cesium, viewer, cesiumObject}")]),s._v(" "),a("td",[s._v("Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject.")])]),s._v(" "),a("tr",[a("td",[s._v("definitionChanged")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("Triggers whenever a property or sub-property is changed or modified.")])])])])}],!1,null,null,null);t.default=v.exports}}]);
//# sourceMappingURL=27.d69e3bd86d88158e67cd.js.map