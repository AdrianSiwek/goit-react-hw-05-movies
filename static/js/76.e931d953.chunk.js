"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[76],{76:function(e,t,r){r.r(t),r.d(t,{default:function(){return g}});var n=r(861),a=r(439),c=r(311),u=r.n(c),s=r(689),i=r(791),o=r(222),p=r(639),f="Cast_castList__ARoWn",l="Cast_castItem__-Jcfe",d="Cast_actorDescr__RNmqh",v="Cast_personName__y5ayY",h="Cast_character__tKDlA",_=r(184),g=function(){var e=(0,s.UO)().movieId,t=(0,i.useState)([]),r=(0,a.Z)(t,2),c=r[0],g=r[1],m=(0,i.useState)(!1),w=(0,a.Z)(m,2),x=w[0],b=w[1];return(0,i.useEffect)((function(){var t=function(){var t=(0,n.Z)(u().mark((function t(){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return b(!0),t.prev=1,t.next=4,(0,o.wL)(e);case 4:r=t.sent,g(r),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:return t.prev=11,b(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),(0,_.jsxs)("div",{children:[x&&(0,_.jsx)(p.Z,{}),(0,_.jsx)("ul",{className:f,children:c.map((function(e){return(0,_.jsxs)("li",{className:l,children:[(0,_.jsx)("img",{width:"200px",src:"https://image.tmdb.org/t/p/w500"+e.profile_path,alt:e.original_name}),(0,_.jsxs)("div",{className:d,children:[(0,_.jsx)("p",{className:v,children:e.name}),(0,_.jsxs)("p",{className:h,children:["Character: ",e.character]})]})]},e.id)}))})]})}},639:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(643),a="Loader_grid__69Pix",c=r(184);var u=function(){return(0,c.jsx)(n.rj,{height:"80",width:"80",color:"rgb(255,165,0)",ariaLabel:"grid-loading",radius:"12.5",wrapperStyle:{},wrapperClass:a,visible:!0})}},222:function(e,t,r){r.d(t,{Bt:function(){return l},Mc:function(){return p},k8:function(){return i},uw:function(){return o},wL:function(){return f}});var n=r(861),a=r(311),c=r.n(a),u=r(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="f55fd89359b4e389c455cb757e994b30",i=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("trending/movie/day?api_key=".concat(s));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("search/movie?api_key=".concat(s,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=76.e931d953.chunk.js.map