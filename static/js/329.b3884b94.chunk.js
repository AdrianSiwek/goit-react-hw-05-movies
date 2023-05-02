"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[329],{639:function(e,r,t){t.d(r,{Z:function(){return i}});var n=t(643),a="Loader_grid__69Pix",s=t(184);var i=function(){return(0,s.jsx)(n.rj,{height:"80",width:"80",color:"rgb(255,165,0)",ariaLabel:"grid-loading",radius:"12.5",wrapperStyle:{},wrapperClass:a,visible:!0})}},329:function(e,r,t){t.r(r),t.d(r,{default:function(){return x}});var n=t(861),a=t(439),s=t(757),i=t.n(s),c=t(791),u=t(689),o=t(87),l=t(222),d=t(639),p="MoveDetalPage_movieDetalis__v9DEc",v="MoveDetalPage_genreList__3Hieo",f="MoveDetalPage_buttonBack__I+I2-",h=t(184),x=function(e){e.searchMovie,e.to;var r,t,s,x,g=(0,u.UO)().movieId,m=(0,c.useState)(null),_=(0,a.Z)(m,2),w=_[0],j=_[1],b=(0,c.useState)(!1),k=(0,a.Z)(b,2),y=k[0],Z=k[1],U=(0,u.TH)();return console.log(U),(0,c.useEffect)((function(){var e=function(){var e=(0,n.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Z(!0),e.prev=1,e.next=4,(0,l.Mc)(g);case 4:r=e.sent,j(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:return e.prev=11,Z(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[g]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(o.rU,{to:null!==(r=null===U||void 0===U||null===(t=U.state)||void 0===t?void 0:t.from)&&void 0!==r?r:"/movies",children:(0,h.jsx)("button",{type:"button",className:f,children:"Go Back"})}),y&&(0,h.jsx)(d.Z,{}),w&&(0,h.jsxs)("div",{className:p,children:[(0,h.jsx)("img",{width:"300px",src:"https://image.tmdb.org/t/p/w500"+w.poster_path,alt:w.original_title}),(0,h.jsxs)("div",{className:v,children:[(0,h.jsxs)("h1",{children:[w.title," (",w.release_date.slice(0,4),")"]}),(0,h.jsxs)("p",{children:["User score: ",w.popularity]}),(0,h.jsx)("h2",{children:"Overview"}),(0,h.jsx)("p",{children:w.overview}),(0,h.jsx)("h2",{children:"Genres"}),(0,h.jsx)("ul",{className:v,children:w.genres.map((function(e){return(0,h.jsx)("li",{className:v,children:e.name},e.id)}))})]})]}),(0,h.jsx)("hr",{}),(0,h.jsxs)("div",{children:[(0,h.jsx)("h3",{children:"Additional information"}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:(0,h.jsx)(o.rU,{to:"cast",state:{from:null===(s=U.state)||void 0===s?void 0:s.from},children:"Cast"})}),(0,h.jsx)("li",{children:(0,h.jsx)(o.rU,{to:"reviews",state:{from:null===(x=U.state)||void 0===x?void 0:x.from},children:"Reviews"})})]}),(0,h.jsx)("hr",{}),(0,h.jsx)(u.j3,{})]})]})}},222:function(e,r,t){t.d(r,{Bt:function(){return p},Mc:function(){return l},k8:function(){return u},uw:function(){return o},wL:function(){return d}});var n=t(861),a=t(757),s=t.n(a),i=t(243);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c="f55fd89359b4e389c455cb757e994b30",u=function(){var e=(0,n.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("trending/movie/day?api_key=".concat(c));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("search/movie?api_key=".concat(c,"&language=en-US&page=1&include_adult=false&query=").concat(r));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(r,"?api_key=").concat(c,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(r,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(r,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=329.b3884b94.chunk.js.map