"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[710],{913:function(e,t,n){n.d(t,{Fb:function(){return a},d0:function(){return i},jP:function(){return u},z1:function(){return c},zv:function(){return s}});var r=n(294).Z.create({baseURL:"https://api.themoviedb.org/3",headers:{Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzIzYWFhMzc3MWU3N2E0NjlkNGEzYThkMTQxZGZmZSIsInN1YiI6IjY1YjRkMjFkNjBjNTFkMDE4NGQwYmIyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XISfEw51jqEFhQV2E2EtFhEmH58uU8lMg5HWvJk3DDE")}}),a=function(){return r.get("/trending/movie/day")},c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return r.get("/search/movie",{params:{query:e,page:t}})},i=function(e){return r.get("/movie/".concat(e))},s=function(e){return r.get("/movie/".concat(e,"/credits"))},u=function(e){return r.get("/movie/".concat(e,"/reviews"))}},710:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(861),a=n(439),c=n(757),i=n.n(c),s=n(689),u=n(791),o=n(913),h=n(119),f="movies-cast-page_li__VG61t",l="movies-cast-page_castWrap__NnDVz",p=n(184),v=function(){var e=(0,u.useState)([]),t=(0,a.Z)(e,2),n=t[0],c=t[1],v=(0,u.useState)(!1),m=(0,a.Z)(v,2),d=m[0],g=m[1],j=(0,u.useState)(null),k=(0,a.Z)(j,2),x=k[0],I=k[1],z=(0,s.UO)().id;if((0,u.useEffect)((function(){if(z){var e=function(){var e=(0,r.Z)(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,g(!0),e.next=4,(0,o.zv)(z);case 4:t=e.sent,n=t.data,c(n.cast?n.cast:[]),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),I(e.t0.message);case 12:return e.prev=12,g(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}}),[z]),0===n.length)return(0,p.jsx)("p",{children:"Sorry we don't have any cast for this movie!"});var N=n.map((function(e){var t=e.id,n=e.profile_path,r=e.name,a=e.character;return(0,p.jsxs)("li",{className:f,children:[n&&(0,p.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w200").concat(n),alt:r,loading:"lazy"}),(0,p.jsx)("p",{children:r}),(0,p.jsx)("p",{children:a})]},t)})),w=Boolean(n.length);return(0,p.jsxs)(p.Fragment,{children:[x&&(0,p.jsx)("p",{children:x}),d&&(0,p.jsx)(h.a,{}),w&&(0,p.jsx)("div",{className:l,children:N})]})}}}]);
//# sourceMappingURL=710.601b74de.chunk.js.map