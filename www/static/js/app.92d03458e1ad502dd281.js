webpackJsonp([1],{"24oV":function(t,e){},"5J/D":function(t,e){},"5b01":function(t,e){},E51W:function(t,e){},FKiG:function(t,e){},"IZP+":function(t,e){},MnK2:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var o=i("VU/8")({name:"App"},a,!1,function(t){i("nbQl")},null,null).exports,r=i("/ocq"),s=(i("MnK2"),{data:function(){return{usernameRules:[{validate:function(t){return!!t},message:"必须填写用户名"},{validate:function(t){return t.length>=3},message:"用户名长度大于3"}],passwordRules:[{validate:function(t){return!!t},message:"必须填写密码"},{validate:function(t){return t.length>=3&&t.length<=10},message:"密码长度大于3小于10"}],validateForm:{username:"",password:""}}},mounted:function(){this.test()},methods:{submit:function(){var t=this;this.$refs.form.validate().then(function(e){console.log("form valid: ",e),e&&t.$router.push("./map")})},clear:function(){this.$refs.form.clear(),this.validateForm={username:"",password:"",isAgree:!1}},forget:function(){alert(11111)},test:function(){function t(t,e){e=e||{},this.Element=t,this.cvs=t.getContext("2d"),this.off_cvs=document.createElement("canvas"),this.off_cvs.width=t.width,this.off_cvs.height=t.height,this.Dom=this.off_cvs.getContext("2d"),this.width=t.width,this.height=t.height,this.length=e.length||100,this.RoundColor=e.RoundColor||"#ffffffca",this.RoundDiameter=e.RoundDiameter||2,this.LineColor=e.LineColor||"#ffffffa4",this.LineWeight=e.LineWeight||1,this.clicked=e.clicked||!0,this.moveon=e.moveon||!0,this.list=[],this.paused=!0}t.prototype.Run=function(){this.clicked&&this.Element.addEventListener("click",this.Clicked.bind(this)),this.moveon&&(this.Element.addEventListener("mousemove",this.moveXY.bind(this)),this.Element.addEventListener("mouseout",this.moveoutXY.bind(this))),this.Draw(this.getLength())},t.prototype.getLength=function(){for(var t=[],e=0;e<this.length;e++){var i={};i.x=parseInt(Math.random()*this.width),i.y=parseInt(Math.random()*this.height),i.r=parseInt(10*Math.random()),i.controlX=parseInt(10*Math.random())>5?"left":"right",i.controlY=parseInt(10*Math.random())>5?"bottom":"top",t.push(i)}return t},t.prototype.Draw=function(t){var e=this,i=[],n=[];t.map(function(t,n){var a=e.ControlXY(t),o=e.ControlRound(a);i.push(o)}),i.map(function(t,e){i.map(function(e,i){if(t!==e){var a=t.x-e.x,o=t.y-e.y;if(Math.abs(a)<100&&Math.abs(o)<100){var r={x1:t.x,y1:t.y,x2:e.x,y2:e.y};n.push(r)}}})}),this.drawLine(n),i.map(function(t){e.drawRound(t)}),this.list=i,this.cvs.drawImage(this.off_cvs,0,0,this.width,this.height),setTimeout(function(){e.paused&&e.next()},50)},t.prototype.next=function(){this.cvs.clearRect(0,0,this.width,this.height),this.Dom.clearRect(0,0,this.width,this.height),this.Draw(this.list)},t.prototype.drawRound=function(t){var e=t.x,i=t.y,n=t.r;this.Dom.beginPath(),this.Dom.arc(e,i,n,0,2*Math.PI),this.Dom.fillStyle=this.RoundColor,this.Dom.fill(),this.Dom.closePath()},t.prototype.drawLine=function(t){var e=this;t.map(function(t){e.Dom.beginPath(),e.Dom.moveTo(t.x1,t.y1),e.Dom.lineTo(t.x2,t.y2),e.Dom.lineWidth=e.LineWeight,e.Dom.strokeStyle=e.LineColor,e.Dom.stroke(),e.Dom.closePath()})},t.prototype.ControlXY=function(t){return t.x>=this.width-t.r?t.controlX="left":t.x<=parseInt(t.r/2)&&(t.controlX="right"),t.y>=this.height-t.r?t.controlY="bottom":t.y<=parseInt(t.r/2)&&(t.controlY="top"),t},t.prototype.ControlRound=function(t){switch(t.controlX){case"right":t.x++;break;case"left":t.x--}switch(t.controlY){case"top":t.y++;break;case"bottom":t.y--}return t},t.prototype.Clicked=function(t){var e={};e.x=t.clientX,e.y=t.clientY,e.r=parseInt(10*Math.random()),e.controlX=parseInt(10*Math.random())>5?"left":"right",e.controlY=parseInt(10*Math.random())>5?"bottom":"top",this.list.push(e)},t.prototype.moveXY=function(t){var e={};e.x=t.clientX,e.y=t.clientY,e.r=0,e.move=!0,this.list[0].move?(this.list[0].x=e.x,this.list[0].y=e.y,this.list[0].r=1):this.list.unshift(e)},t.prototype.moveoutXY=function(t){this.list.shift()},t.prototype.pause=function(){this.paused=!this.paused,this.paused&&this.Draw(this.list)};var e=document.querySelector("#root");console.log(e),new t(e,{length:50,clicked:!0,moveon:!0}).Run()}}}),c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("canvas",{attrs:{id:"root",width:"375",height:"812"}}),t._v(" "),i("mu-card",{staticClass:"login_card",staticStyle:{"max-width":"375px",margin:"0 auto"}},[i("mu-form",{ref:"form",staticClass:"mu-demo-form",attrs:{model:t.validateForm,"label-position":"left"}},[i("mu-form-item",{attrs:{color:"white",label:"用户名",prop:"username",rules:t.usernameRules}},[i("mu-text-field",{attrs:{"underline-color":"white",prop:"username"},model:{value:t.validateForm.username,callback:function(e){t.$set(t.validateForm,"username",e)},expression:"validateForm.username"}})],1),t._v(" "),i("mu-form-item",{attrs:{label:"密  码",prop:"password",rules:t.passwordRules}},[i("mu-text-field",{attrs:{"underline-color":"white",type:"password",prop:"password"},model:{value:t.validateForm.password,callback:function(e){t.$set(t.validateForm,"password",e)},expression:"validateForm.password"}})],1),t._v(" "),i("span",{staticStyle:{"font-size":"8px",position:"absolute",right:"10vw"},on:{click:t.forget}},[t._v("忘记密码？")]),t._v(" "),i("mu-form-item",{staticStyle:{"margin-top":"26px"}},[i("mu-button",{attrs:{color:"#009688"},on:{click:t.submit}},[t._v("登录")]),t._v(" "),i("mu-button",{on:{click:t.clear}},[t._v("重置")])],1)],1)],1)],1)},staticRenderFns:[]};var l=i("VU/8")(s,c,!1,function(t){i("FKiG")},"data-v-14325aa3",null).exports,u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("router-view"),t._v(" "),i("mu-container",{staticClass:"footer"},[i("mu-bottom-nav",{staticClass:"footer-nav",attrs:{value:t.shift,shift:"",color:"#004d40e3"},on:{"update:value":function(e){t.shift=e}}},[i("mu-bottom-nav-item",{attrs:{to:"/map",value:"nav_map",title:"地图",icon:"beenhere"}}),t._v(" "),i("mu-bottom-nav-item",{attrs:{to:"/weather",value:"nav_weather",title:"天气",icon:"cloud"}}),t._v(" "),i("mu-bottom-nav-item",{attrs:{to:"/history",value:"nav_history",title:"历史",icon:"restore"}}),t._v(" "),i("mu-bottom-nav-item",{attrs:{to:"/setting",value:"nav_setting",title:"设置",icon:"settings"}})],1)],1)],1)},staticRenderFns:[]};var m=i("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App",shift:"movies"}},methods:{}},u,!1,function(t){i("5b01")},"data-v-b10de4d8",null).exports,p={data:function(){return{zoom:12,center:[120.014027,30.292638],currentPosition:[]}},mounted:function(){setTimeout(this.initMap,500)},methods:{initMap:function(){var t=new AMap.Map("container",{resizeEnable:!0,zoom:this.zoom});(new AMap.CitySearch).getLocalCity(function(e,i){if("complete"===e&&"OK"===i.info){if(i&&i.city&&i.bounds){var n=i.city,a=i.bounds;t.setBounds(a),(new AMap.Weather).getLive("杭州市",function(t,e){document.getElementById("info").innerHTML="当前城市："+n+"</br>实时："+e.reportTime+"</br>天气："+e.weather+"&nbsp;&nbsp;气温："+e.temperature+"℃</br>风向："+e.windDirection+"&#9;&#9;风力："+e.windPower})}}else document.getElementById("info").innerHTML=i.info});var e=new AMap.Marker({position:this.center});t.add(e),t.plugin(["AMap.ControlBar"],function(){var e=new AMap.ControlBar({position:{top:"20vh",right:"5vw"},showZoomBar:!0,showControlButton:!1});t.addControl(e)})}}},d={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{attrs:{id:"container"}}),this._v(" "),e("div",{staticClass:"info"},[e("p",{attrs:{id:"info"}})])])}]};var h=i("VU/8")(p,d,!1,function(t){i("IZP+")},"data-v-73fc69a9",null).exports,v={data:function(){return{active:0,validateForm:{cityname:""},one:"",two:"",three:"",four:"",pic_url1:"",pic_cpr1:"",pic_url2:"",pic_cpr2:"",pic_url3:"",pic_cpr3:"",pic_url4:"",pic_cpr4:"",sort:{name:"",order:"asc"},columns:[{title:"日期",width:120,name:"date",align:"center"},{title:"最高温(℃)",name:"high",width:120,align:"center"},{title:"最低温(℃)",name:"low",width:120,align:"center"},{title:"天气",name:"type",width:120,align:"center"}],list:[]}},mounted:function(){this.getPicture()},methods:{submit:function(){var t=this,e="http://wthrcdn.etouch.cn/weather_mini?city="+this.validateForm.cityname;this.$axios({method:"get",url:e}).then(function(e){e=e.data,t.list=e.data.forecast,console.log(t.list)}).catch(function(t){console.log(t)})},getPicture:function(){var t=this;this.$axios({method:"post",url:"http://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=5&mkt=zh-CN"}).then(function(e){e=e.data,t.pic_url1="http://www.bing.com"+e.images[4].url,t.pic_cpr1=e.images[4].copyright,t.pic_url2="http://www.bing.com"+e.images[3].url,t.pic_cpr2=e.images[3].copyright,t.pic_url3="http://www.bing.com"+e.images[2].url,t.pic_cpr3=e.images[2].copyright,t.pic_url4="http://www.bing.com"+e.images[1].url,t.pic_cpr4=e.images[1].copyright,console.log(e)}).catch(function(t){console.log(t)})}}},f={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("mu-tabs",{attrs:{value:t.active,center:"",color:"#e0f2f1","indicator-color":"#004d40","full-width":""},on:{"update:value":function(e){t.active=e}}},[i("mu-tab",[i("mu-icon",{attrs:{value:"cloud",color:"#004d40"}})],1),t._v(" "),i("mu-tab",[i("mu-icon",{attrs:{value:"favorite",color:"#004d40"}})],1),t._v(" "),i("mu-tab",[i("mu-icon",{attrs:{value:"person_pin",color:"#004d40"}})],1)],1),t._v(" "),0===t.active?i("div",{staticClass:"demo-text"},[i("p",[t._v("天气页面")])]):t._e(),t._v(" "),1===t.active?i("div",{staticClass:"demo-text"},[i("mu-carousel",{attrs:{"hide-indicators":"true"}},[i("mu-carousel-item",[i("mu-card-media",{staticClass:"everypic",attrs:{title:"每日一图","sub-title":t.pic_cpr1}},[i("img",{attrs:{src:t.pic_url1}})])],1),t._v(" "),i("mu-carousel-item",[i("mu-card-media",{staticClass:"everypic",attrs:{title:"每日一图","sub-title":t.pic_cpr2}},[i("img",{attrs:{src:t.pic_url2}})])],1),t._v(" "),i("mu-carousel-item",[i("mu-card-media",{staticClass:"everypic",attrs:{title:"每日一图","sub-title":t.pic_cpr3}},[i("img",{attrs:{src:t.pic_url3}})])],1),t._v(" "),i("mu-carousel-item",[i("mu-card-media",{staticClass:"everypic",attrs:{title:"每日一图","sub-title":t.pic_cpr4}},[i("img",{attrs:{src:t.pic_url4}})])],1)],1),t._v(" "),i("div",{staticStyle:{"background-color":"#e0f2f1",height:"800px",width:"100%"}})],1):t._e(),t._v(" "),2===t.active?i("div",{staticClass:"demo-text"},[i("div",{staticClass:"searchBar"},[i("mu-form",{ref:"form",attrs:{model:t.validateForm,inline:""}},[i("mu-text-field",{staticStyle:{"margin-top":"20px","margin-left":"20px"},model:{value:t.validateForm.cityname,callback:function(e){t.$set(t.validateForm,"cityname",e)},expression:"validateForm.cityname"}}),t._v(" "),i("mu-button",{staticStyle:{"margin-top":"20px"},attrs:{color:"#004d40"},on:{click:t.submit}},[t._v("查询")])],1)],1),t._v(" "),i("mu-paper",{staticStyle:{margin:"8px"},attrs:{"z-depth":1}},[i("mu-data-table",{attrs:{columns:t.columns,data:t.list},scopedSlots:t._u([{key:"default",fn:function(e){return[i("td",[t._v(t._s(e.row.date))]),t._v(" "),i("td",[t._v(t._s(e.row.high))]),t._v(" "),i("td",[t._v(t._s(e.row.low))]),t._v(" "),i("td",[t._v(t._s(e.row.type))])]}}],null,!1,3794482566)})],1)],1):t._e()],1)},staticRenderFns:[]};var _=i("VU/8")(v,f,!1,function(t){i("5J/D")},"data-v-866032f2",null).exports,g=i("1bPL"),y=i.n(g),w={data:function(){return{pic_id:"",pic_code:"",pic_decode:""}},mounted:function(){this.initChart(),this.getServer()},methods:{getServer:function(){var t=this;this.$axios({method:"get",url:"http://www.travelstar.top:8888/api/user/json?username=ch&password=HappyNewYear"}).then(function(e){e=e.data,t.pic_id=e.pictureId,t.pic_code=e.data,t.pic_decode="data:image/gif;base64,"+t.pic_code}).catch(function(t){console.log(t)})},initChart:function(){var t=new y.a.Chart({id:"container",pixelRatio:window.devicePixelRatio});t.source([{time:"12-15",value:10,type:"高温"},{time:"12-16",value:22,type:"高温"},{time:"12-17",value:16,type:"高温"},{time:"12-18",value:26,type:"高温"},{time:"12-19",value:12,type:"高温"},{time:"12-20",value:26,type:"高温"},{time:"12-21",value:18,type:"高温"},{time:"12-15",value:2,type:"低温"},{time:"12-16",value:15,type:"低温"},{time:"12-17",value:3,type:"低温"},{time:"12-18",value:18,type:"低温"},{time:"12-19",value:14,type:"低温"},{time:"12-20",value:12,type:"低温"},{time:"12-21",value:15,type:"低温"}],{time:{range:[0,1]},value:{tickCount:3,formatter:function(t){return t+"℃"}}}),t.axis("time",{line:null,label:function(t,e,i){var n={fill:"#fff"};return 0===e?n.textAlign="left":e===i-1&&(n.textAlign="right"),n}}),t.axis("value",{line:null,label:function(t,e,i){return{fill:"#fff"}}}),t.axis("tem",{grid:function(t){if("0%"===t)return{lineDash:null,lineWidth:1}}}),t.legend({position:"bottom",offsetY:-5}),t.line().position("time*value").color("white").shape("type",function(t){return"高温"===t?"line":"低温"===t?"dash":void 0}),t.render()}}},b={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"app"},[e("canvas",{staticClass:"background",staticStyle:{width:"100%"},attrs:{id:"container"}}),this._v(" "),e("div",[this._v("pictureID:"+this._s(this.pic_id))]),this._v(" "),e("img",{staticStyle:{width:"100%"},attrs:{src:this.pic_decode}})])},staticRenderFns:[]};var x=i("VU/8")(w,b,!1,function(t){i("i/Hj")},"data-v-055754a1",null).exports,C={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("mu-list",[i("mu-list-item",{attrs:{button:"",ripple:!1,to:"./setting/userinfo"}},[i("mu-list-item-action",[i("mu-icon",{attrs:{value:"修"}})],1),t._v(" "),i("mu-list-item-title",[t._v("用户信息")])],1),t._v(" "),i("mu-list-item",{attrs:{button:"",ripple:!1,to:"./setting/cityinfo"}},[i("mu-list-item-action",[i("mu-icon",{attrs:{value:"城"}})],1),t._v(" "),i("mu-list-item-title",[t._v("城市信息")])],1),t._v(" "),i("mu-list-item",{attrs:{button:"",ripple:!1}},[i("mu-list-item-action",[i("mu-icon",{attrs:{value:"史"}})],1),t._v(" "),i("mu-list-item-title",[t._v("历史设置")])],1),t._v(" "),i("mu-list-item",{attrs:{button:"",ripple:!1},on:{click:function(e){t.events=!t.events}}},[i("mu-list-item-action",[i("mu-icon",{attrs:{value:"登"}})],1),t._v(" "),i("mu-list-item-title",[t._v("自动登录")]),t._v(" "),i("mu-list-item-action",[i("mu-switch",{attrs:{readonly:""},model:{value:t.events,callback:function(e){t.events=e},expression:"events"}})],1)],1)],1)],1)},staticRenderFns:[]};var M=i("VU/8")({data:function(){return{events:!1}}},C,!1,function(t){i("24oV")},"data-v-88204078",null).exports,R={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("userinfo")])},staticRenderFns:[]};var A=i("VU/8")({},R,!1,function(t){i("zBv0")},"data-v-7d1421f3",null).exports,k={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("set cityinfo")])},staticRenderFns:[]};var E=i("VU/8")({},k,!1,function(t){i("UGy+")},"data-v-1589a7b2",null).exports,F={render:function(){var t=this.$createElement;return(this._self._c||t)("iframe",{attrs:{id:"iframeContain",name:"iframeContain",seamless:"",scrolling:"yes",src:this.iframeURL}},[this._v("\n  您当前的浏览器不支持页面上的功能，请升级您当前的浏览器版本或使用谷歌浏览器访问当前页面\n")])},staticRenderFns:[]};var D=i("VU/8")({data:function(){return{iframeURL:"https://widget-page.qweather.net/h5/index.html?bg=1&md=0123456&lc=accu&key=41ae3e60c769469d9d872ec5a3074ff4"}}},F,!1,function(t){i("Ry7B")},"data-v-3d8872fd",null).exports;n.default.use(r.a);var I=new r.a({routes:[{path:"/",redirect:"/login"},{path:"/login",name:"Login",component:l},{path:"/",name:"Index",component:m,children:[{path:"/map",name:"MAP",component:h},{path:"/weather",name:"WEATHER",component:_,children:[{path:"/plugin",name:"WeatherPlugin",component:D}]},{path:"/history",name:"HISTORY",component:x},{path:"/setting",name:"SETTING",component:M},{path:"/setting/userinfo",name:"UserInfo",component:A},{path:"/setting/cityinfo",name:"CityInfo",component:E}]}]}),$=i("aFc6"),S=(i("E51W"),i("mtWM")),L=i.n(S),P=i("/IwO"),Y=i.n(P);n.default.config.productionTip=!1,n.default.use($.a),n.default.prototype.$axios=L.a,n.default.use(Y.a),Y.a.initAMapApiLoader({key:"bfbd904d2952fbfb2ca7ba7ae102431a",plugin:["AMap.Weather","AMap.CitySearch","AMap.Geolocation","AMap.Autocomplete","AMap.PlaceSearch","AMap.Scale","AMap.OverView","AMap.ControlBar","AMap.MapType","AMap.PolyEditor","AMap.CircleEditor"],uiVersion:"1.1.1"}),n.default.component("remote-script",{render:function(t){var e=this;return t("script",{attrs:{type:"text/javascript",src:this.src},on:{load:function(t){e.$emit("load",t)},error:function(t){e.$emit("error",t)},readystatechange:function(t){"complete"==this.readyState&&e.$emit("load",t)}}})},props:{src:{type:String,required:!0}}}),new n.default({el:"#app",router:I,components:{App:o},template:"<App/>"})},Ry7B:function(t,e){},"UGy+":function(t,e){},"i/Hj":function(t,e){},nbQl:function(t,e){},zBv0:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.92d03458e1ad502dd281.js.map