(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{111:function(e,t,a){"use strict";a.r(t);var r=a(1),c=a(0),n=a.n(c),s=a(16),i=a.n(s),o=(a(85),a(28)),d=a(23),l=a(29),h=a.n(l),j=a(30),u=a.n(j),p=a(38),b=a(14),O=a(65).create({baseURL:"https://api.openweathermap.org/data/2.5/"}),m=function(e){return O.get("weather?q=".concat(e,"&units=metric&lang=ru&appid=b81543affaecbb62ec96a57263178ff4"))},x=function(e){return O.get("forecast?q=".concat(e,"&lang=ru&units=metric&appid=b81543affaecbb62ec96a57263178ff4")).then((function(e){return e.data.list}))},_="SET_WEATHER",v="IS_FEATCHING",w="IS_ERROR",f={isFetching:null,weather:[],isError:null},g=function(e){return{type:v,isFetching:e}},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(b.a)(Object(b.a)({},e),{},{weather:t.weather});case v:return Object(b.a)(Object(b.a)({},e),{},{isFetching:t.isFetching});case w:return Object(b.a)(Object(b.a)({},e),{},{isError:t.error});default:return e}},y=a(36),W=(a(110),a(37)),F=a.n(W),N=a(113).a.Search,I=function(e){var t=Object(c.useState)(!1),a=Object(y.a)(t,2),n=a[0],s=a[1];return Object(r.jsxs)("div",{children:[!n&&Object(r.jsxs)("span",{className:F.a.inputik,onClick:function(){return s(!0)},children:[!!e.isFetching&&Object(r.jsx)("span",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}),!e.isFetching&&Object(r.jsx)("span",{className:F.a.city,children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0433\u043e\u0440\u043e\u0434"})]}),!!n&&Object(r.jsx)("div",{className:F.a.Input,children:Object(r.jsx)(N,{className:F.a.search,autoFocus:!0,loading:!!e.isFetching,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0433\u043e\u0440\u043e\u0434",onSearch:function(t){e.SetWeatherThunk(t),console.log("weather",e.weather),s(!1)},enterButton:!0})})]})},S=a.p+"static/media/preloader.709ad798.svg",C=a(75),E=a.n(C),T=function(){return Object(r.jsx)("div",{className:E.a.preloader,children:Object(r.jsx)("img",{src:S,alt:"preloader"})})},R=a.p+"static/media/cloudy-day.7fb7ecfc.svg",M=a.p+"static/media/day.c33ef664.svg",B=a.p+"static/media/snowy.dce3f5e7.svg",z=a.p+"static/media/rainy.130d6250.svg",A=a(32),J=a.n(A),L=a(78),K=a(24),P=a.n(K),Z=function(e){return Object(r.jsx)("div",{className:P.a.modal,children:i.a.createPortal(Object(r.jsx)("div",{className:P.a.modal,children:Object(r.jsx)("div",{className:P.a.flex,children:Object(r.jsxs)("div",{className:P.a.modalWindow,children:["\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043e \u043f\u043e\u0433\u043e\u0434\u0435:",Object(r.jsxs)("div",{className:P.a.center,children:[Object(r.jsxs)("div",{className:P.a.name,children:[" ",e.weather.data.name,", ",e.weather.data.sys.country]}),Object(r.jsxs)("div",{children:["\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0442\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430: ",e.weather.data.main.temp_max," \xb0C"]}),Object(r.jsx)("div",{children:Object(r.jsx)("hr",{})}),Object(r.jsxs)("div",{children:["\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0442\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430: ",e.weather.data.main.temp_min," \xb0C"]}),Object(r.jsx)("div",{children:Object(r.jsx)("hr",{})}),Object(r.jsxs)("div",{children:["\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0432\u0435\u0442\u0440\u0430: ",e.weather.data.wind.speed," \u043a\u043c/\u0447\u0430\u0441"]}),Object(r.jsx)("div",{children:Object(r.jsx)("hr",{})}),Object(r.jsxs)("div",{children:["\u0428\u0438\u0440\u043e\u0442\u0430: ",e.weather.data.coord.lon]}),Object(r.jsx)("div",{children:Object(r.jsx)("hr",{})}),Object(r.jsxs)("div",{children:["\u0414\u043e\u043b\u0433\u043e\u0442\u0430: ",e.weather.data.coord.lat]}),Object(r.jsx)("div",{children:Object(r.jsx)("hr",{})}),Object(r.jsxs)("div",{children:["\u0412\u0438\u0434\u0438\u043c\u043e\u0441\u0442\u044c: ",e.weather.data.visibility]}),Object(r.jsx)(L.a,{className:P.a.btn,onClick:function(){return e.setMore(!1)},type:"primary",size:"large",children:"\u041d\u0430\u0437\u0430\u0434"})]})]})})}),document.getElementById("modalMore"))})},q=a(52),H=a.n(q),D=a(42),G=a(43),U=a(45),Y=a(44),Q=a(46),V=a.n(Q),X=a(53),$=a.n(X),ee=function(){return Object(r.jsx)("div",{className:$.a.wrapper,children:Object(r.jsxs)("div",{className:$.a.lds_ellipsis,children:[Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{})]})})},te="SET_WEATHER_WEEK",ae="IS_FEATCHING_WEEK",re={weatherWeek:[],isFetching:null,error:null},ce=function(e){return{type:ae,isFetching:e}},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case te:return Object(b.a)(Object(b.a)({},e),{},{weatherWeek:t.weatherWeek});case ae:return Object(b.a)(Object(b.a)({},e),{},{isFetching:t.isFetching});default:return e}},se=function(e){Object(U.a)(a,e);var t=Object(Y.a)(a);function a(){return Object(D.a)(this,a),t.apply(this,arguments)}return Object(G.a)(a,[{key:"componentDidMount",value:function(){this.props.SetWeatherWeekThunk(this.props.name)}},{key:"render",value:function(){var e=this;return Object(r.jsx)("div",{children:i.a.createPortal(Object(r.jsx)("div",{className:V.a.modal,children:Object(r.jsxs)("div",{className:V.a.wrap,children:[!!this.props.isFetching&&Object(r.jsx)(ee,{}),!this.props.isFetching&&Object(r.jsxs)("div",{children:[Object(r.jsx)(L.a,{className:V.a.btn,onClick:function(){return e.props.setWeek(!1)},type:"primary",size:"large",children:"\u041d\u0430\u0437\u0430\u0434"}),Object(r.jsx)("div",{children:Object(r.jsx)("span",{})})]})]})}),document.getElementById("modalWeek"))})}}]),a}(n.a.Component),ie=Object(o.b)((function(e){return{weatherWeek:e.ForecastWeekReducer.weatherWeek,isFetching:e.ForecastWeekReducer.isFetching}}),{SetWeatherWeekThunk:function(e){return function(){var t=Object(p.a)(u.a.mark((function t(a){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(ce(!0)),t.next=3,x(e);case 3:r=t.sent,a({type:te,weatherWeek:r}),a(ce(!1));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(se);var oe=function(e){var t=Object(c.useState)(!1),a=Object(y.a)(t,2),n=a[0],s=a[1],i=Object(c.useState)(!1),o=Object(y.a)(i,2),d=o[0],l=o[1];return Object(r.jsxs)("div",{className:H.a.flex,children:[Object(r.jsx)(L.a,{onClick:function(){return l(!0)},type:"default",size:"large",children:"\u0420\u0430\u0441\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),Object(r.jsx)(L.a,{className:H.a.btnleft,onClick:function(){return s(!0)},type:"primary",size:"large",children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"}),!!n&&Object(r.jsx)(Z,{setMore:s,weather:e.weather}),!!d&&Object(r.jsx)(ie,{name:e.weather.data.name,setWeek:l})]})},de=function(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:J.a.city,children:e.weather.data.name}),Object(r.jsxs)("div",{className:J.a.temp,children:["Clouds"===e.weather.data.weather[0].main&&Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:R,alt:"cloudy"})}),"Clear"===e.weather.data.weather[0].main&&Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:M,alt:"clear"})}),"Snow"===e.weather.data.weather[0].main&&Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:B,alt:"snowy"})}),"Mist"===e.weather.data.weather[0].main&&Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:M,alt:"clear"})}),"Rain"===e.weather.data.weather[0].main&&Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:z,alt:"rain"})}),Object(r.jsxs)("div",{className:J.a.temperatura,children:[Math.round(e.weather.data.main.temp)," \xb0C"]})]}),Object(r.jsxs)("div",{className:J.a.desc,children:[Object(r.jsxs)("div",{children:["\u041e\u0449\u0443\u0449\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a: ",Math.round(e.weather.data.main.feels_like)]}),Object(r.jsx)("div",{className:J.a.description,children:e.weather.data.weather[0].description})]}),Object(r.jsx)(oe,{weather:e.weather})]})},le=function(e){Object(U.a)(a,e);var t=Object(Y.a)(a);function a(){return Object(D.a)(this,a),t.apply(this,arguments)}return Object(G.a)(a,[{key:"componentDidMount",value:function(){this.props.SetWeatherThunk(localStorage.getItem("weatherslavalobikov"))}},{key:"render",value:function(){return Object(r.jsx)("div",{className:h.a.app,children:Object(r.jsxs)("div",{className:h.a.wrap,children:[Object(r.jsx)(I,{weather:this.props.weather,isFetching:this.props.isFetching,SetWeatherThunk:this.props.SetWeatherThunk}),!!this.props.isFetching&&Object(r.jsx)(T,{}),200===this.props.weather.status&&Object(r.jsx)(de,{weather:this.props.weather})]})})}}]),a}(n.a.Component);var he=Object(d.d)(Object(o.b)((function(e){return{isFetching:e.ForecastReducer.isFetching,isError:e.ForecastReducer.isError,weather:e.ForecastReducer.weather}}),{SetWeatherThunk:function(e){return function(){var t=Object(p.a)(u.a.mark((function t(a){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(g(!0)),t.next=3,m(e);case 3:200===(r=t.sent).status?(a({type:_,weather:r}),localStorage.setItem("weatherslavalobikov",r.data.name)):a({type:w,error:!0}),a(g(!1));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}))((function(e){return localStorage.getItem("weatherslavalobikov")||localStorage.setItem("weatherslavalobikov",""),localStorage.getItem("weatherslavalobikov")&&""!==localStorage.getItem("weatherslavalobikov")?Object(r.jsx)(le,{weather:e.weather,isFetching:e.isFetching,SetWeatherThunk:e.SetWeatherThunk}):Object(r.jsx)("div",{className:h.a.app,children:Object(r.jsxs)("div",{className:h.a.wrap,children:[Object(r.jsx)(I,{weather:e.weather,isFetching:e.isFetching,SetWeatherThunk:e.SetWeatherThunk}),!!e.isFetching&&Object(r.jsx)(T,{}),200===e.weather.status&&Object(r.jsx)(de,{weather:e.weather})]})})})),je=a(76),ue=Object(d.c)({ForecastReducer:k,ForecastWeekReducer:ne}),pe=Object(d.e)(ue,Object(d.a)(je.a));i.a.render(Object(r.jsx)(o.a,{store:pe,children:Object(r.jsx)(he,{})}),document.getElementById("root"))},24:function(e,t,a){e.exports={modal:"MoreInfo_modal__2js55",modalWindow:"MoreInfo_modalWindow__2g_9p",flex:"MoreInfo_flex__3ZsZ4",name:"MoreInfo_name__31CzZ",center:"MoreInfo_center__1ed4T",btn:"MoreInfo_btn__2v-dy"}},29:function(e,t,a){e.exports={wrap:"App_wrap__1Ye3P",app:"App_app__2muJh",dima:"App_dima__1Qo4z"}},32:function(e,t,a){e.exports={city:"WeatherCity_city__VdtRL",temp:"WeatherCity_temp__1w0n1",temperatura:"WeatherCity_temperatura__24Jz9",desc:"WeatherCity_desc__2nOvY",description:"WeatherCity_description__1JdhM"}},37:function(e,t,a){e.exports={inputik:"InputCity_inputik__fJuSP",Input:"InputCity_Input__1KqBx",search:"InputCity_search__2ne31",city:"InputCity_city__297Tk"}},46:function(e,t,a){e.exports={modal:"WeekInfo_modal__221wZ",wrap:"WeekInfo_wrap__KOKUq"}},52:function(e,t,a){e.exports={flex:"ButtonComponent_flex__2KBJb",btnleft:"ButtonComponent_btnleft__1aeu_"}},53:function(e,t,a){e.exports={wrapper:"Loader_wrapper__1jRXa",lds_ellipsis:"Loader_lds_ellipsis__2t86o","lds-ellipsis1":"Loader_lds-ellipsis1__3-p7a","lds-ellipsis2":"Loader_lds-ellipsis2__2e-Ef","lds-ellipsis3":"Loader_lds-ellipsis3__ZgF5P"}},75:function(e,t,a){e.exports={preloader:"Preloader_preloader__wxDg6"}},85:function(e,t,a){}},[[111,1,2]]]);
//# sourceMappingURL=main.3e4d251b.chunk.js.map