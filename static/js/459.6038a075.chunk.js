"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[459],{459:function(e,r,n){n.r(r),n.d(r,{default:function(){return _}});var t=n(861),s=n(439),c=n(757),i=n.n(c),a=n(791),o=n(689),u=n(390),l=n(87),p="MovieInfo_discription__zozrC",d="MovieInfo_additional__gPN+G",h="MovieInfo_details_container__cL6Gx",v=n(184),f=function(e){var r=e.movie;return(0,v.jsxs)("div",{children:[(0,v.jsxs)("div",{className:h,children:[(0,v.jsx)("img",{src:r.poster_path?["https://image.tmdb.org/t/p/w200/".concat(r.poster_path)]:"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:r.title,width:250}),(0,v.jsxs)("div",{className:p,children:[(0,v.jsx)("h2",{children:r.title}),(0,v.jsxs)("p",{children:["User Score: ",String(r.popularity).slice(0,2),"%"]}),(0,v.jsx)("h3",{children:"Overview"}),(0,v.jsx)("p",{children:r.overview}),(0,v.jsx)("h3",{children:"Genres"}),(0,v.jsx)("p",{children:r.genres.map((function(e){return e.name})).join(", ")})]})]}),(0,v.jsxs)("div",{className:d,children:[(0,v.jsx)("p",{children:"Additional information"}),(0,v.jsxs)("ul",{children:[(0,v.jsx)("li",{children:(0,v.jsx)(l.rU,{to:"cast",children:"Cast"})}),(0,v.jsx)("li",{children:(0,v.jsx)(l.rU,{to:"reviews",children:"Rewievs"})})]})]})]})},x="GoBackBtn_backBtn__0SSs4",m=function(e){var r,n,t=e.location,s=(0,a.useRef)(null!==(r=null===(n=t.state)||void 0===n?void 0:n.from)&&void 0!==r?r:"/");return(0,v.jsx)("div",{children:(0,v.jsx)(l.rU,{to:s.current,children:(0,v.jsx)("button",{type:"button",className:x,children:"Go Back"})})})},j="MovieDetailsPage_container__nB6xp",_=function(){var e=(0,o.UO)().movieId,r=(0,a.useState)(null),n=(0,s.Z)(r,2),c=n[0],l=n[1];return(0,a.useEffect)((function(){var r=function(){var r=(0,t.Z)(i().mark((function r(){var n,t;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,n="/movie/".concat(e),r.next=4,(0,u.l)(n);case 4:t=r.sent,l(t),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),console.error("Error:",r.t0.message);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(){return r.apply(this,arguments)}}();r()}),[e]),(0,v.jsxs)("div",{className:j,children:[(0,v.jsx)(m,{}),c&&(0,v.jsx)(f,{movie:c}),(0,v.jsx)(a.Suspense,{children:(0,v.jsx)(o.j3,{})})]})}},390:function(e,r,n){n.d(r,{l:function(){return o},q:function(){return u}});var t=n(861),s=n(757),c=n.n(s),i=n(294),a="f0dfa7497e7951551870a1200c4b66ff",o=function(){var e=(0,t.Z)(c().mark((function e(r){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("https://api.themoviedb.org/3".concat(r,"?api_key=").concat(a));case 3:return n=e.sent,t=n.data,e.abrupt("return",t);case 8:e.prev=8,e.t0=e.catch(0),console.error("Error:",e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}(),u=function(){var e=(0,t.Z)(c().mark((function e(r){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("https://api.themoviedb.org/3".concat(r,"&api_key=").concat(a));case 3:return n=e.sent,t=n.data,e.abrupt("return",t);case 8:e.prev=8,e.t0=e.catch(0),console.error("Error:",e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=459.6038a075.chunk.js.map