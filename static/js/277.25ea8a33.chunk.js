"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[277],{884:function(e,r,t){t.d(r,{f:function(){return s}});t(791);var n=t(87),a="FilmList_list__C2ysn",c="FilmList_movie_link__JPa9D",u=t(184),s=function(e){var r=e.movies,t=e.location;return(0,u.jsx)("div",{children:(0,u.jsx)("ul",{className:a,children:r.map((function(e){return(0,u.jsx)("li",{children:(0,u.jsx)(n.rU,{to:"/movies/".concat(e.id),state:{from:t},className:c,children:e.title})},e.id)}))})})}},321:function(e,r,t){t.d(r,{a:function(){return c}});t(791);var n=t(154),a=t(184),c=function(){return(0,a.jsx)("div",{children:(0,a.jsx)(n.p2,{height:"80",width:"80",color:"#4fa94d",ariaLabel:"circles-loading",wrapperStyle:{},wrapperClass:"",visible:!0})})}},277:function(e,r,t){t.r(r),t.d(r,{default:function(){return x}});var n=t(861),a=t(439),c=t(757),u=t.n(c),s=t(791),i=t(87),o=t(390),l=t(321),f=t(884),p="SearchMowies_form__kZJ5z",h="SearchMowies_input__ZKdQ7",v="SearchMowies_button__Y7bDC",d=t(184),m=function(e){var r=e.HandleSubmit,t=e.inputValue,n=e.HandleInput;return(0,d.jsx)("div",{children:(0,d.jsxs)("form",{action:"",onSubmit:r,className:p,children:[(0,d.jsx)("input",{type:"text",value:t,onChange:n,name:"search",className:h}),(0,d.jsx)("button",{type:"submit",className:v,children:"Search"})]})})},x=function(){var e=(0,s.useState)(null),r=(0,a.Z)(e,2),t=r[0],c=r[1],p=(0,i.lr)(),h=(0,a.Z)(p,2),v=h[0],x=h[1],_=0!==v.size?v.get("searchValue"):"",b=(0,s.useState)(_||""),w=(0,a.Z)(b,2),k=w[0],g=w[1],j=(0,s.useState)(!0),S=(0,a.Z)(j,2),Z=S[0],y=S[1];(0,s.useEffect)((function(){var e=function(){var e=(0,n.Z)(u().mark((function e(){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,_){e.next=5;break}return y(!1),c(null),e.abrupt("return");case 5:return r="/search/movie?query=".concat(_,"&include_adult=false"),e.next=8,(0,o.q)(r);case 8:t=e.sent,c(t.results),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),console.error("Error:",e.t0.message),c([]);case 16:y(!1);case 17:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();e()}),[_]);return(0,d.jsxs)("div",{children:[(0,d.jsx)(m,{inputValue:k,HandleSubmit:function(e){e.preventDefault(),y(!0);var r=e.currentTarget.elements.search.value;x({searchValue:r})},HandleInput:function(e){var r=e.currentTarget.value;g(r)}}),Z&&(0,d.jsx)(l.a,{}),null!==t&&t.length>0&&(0,d.jsx)(f.f,{movies:t})]})}},390:function(e,r,t){t.d(r,{l:function(){return i},q:function(){return o}});var n=t(861),a=t(757),c=t.n(a),u=t(294),s="f0dfa7497e7951551870a1200c4b66ff",i=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("https://api.themoviedb.org/3".concat(r,"?api_key=").concat(s));case 3:return t=e.sent,n=t.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.error("Error:",e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("https://api.themoviedb.org/3".concat(r,"&api_key=").concat(s));case 3:return t=e.sent,n=t.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.error("Error:",e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=277.25ea8a33.chunk.js.map