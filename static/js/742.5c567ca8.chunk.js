"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[742],{913:function(e,n,t){t.d(n,{Fb:function(){return i},d0:function(){return c},jP:function(){return s},z1:function(){return a},zv:function(){return u}});var r=t(294).Z.create({baseURL:"https://api.themoviedb.org/3",headers:{Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzIzYWFhMzc3MWU3N2E0NjlkNGEzYThkMTQxZGZmZSIsInN1YiI6IjY1YjRkMjFkNjBjNTFkMDE4NGQwYmIyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XISfEw51jqEFhQV2E2EtFhEmH58uU8lMg5HWvJk3DDE")}}),i=function(){return r.get("/trending/movie/day")},a=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return r.get("/search/movie",{params:{query:e,page:n}})},c=function(e){return r.get("/movie/".concat(e))},u=function(e){return r.get("/movie/".concat(e,"/credits"))},s=function(e){return r.get("/movie/".concat(e,"/reviews"))}},742:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});var r=t(861),i=t(439),a=t(757),c=t.n(a),u=t(689),s=t(791),o=t(913),h=t(119),l="movies-reviews-page_li__o4x4M",v="movies-reviews-page_reviewsWrap__3dbzD",f=t(184),d=function(){var e=(0,s.useState)([]),n=(0,i.Z)(e,2),t=n[0],a=n[1],d=(0,s.useState)(!1),m=(0,i.Z)(d,2),p=m[0],j=m[1],g=(0,s.useState)(null),k=(0,i.Z)(g,2),w=k[0],x=k[1],I=(0,u.UO)().id;if((0,s.useEffect)((function(){if(I){var e=function(){var e=(0,r.Z)(c().mark((function e(){var n,t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(!0),e.next=4,(0,o.jP)(I);case 4:t=e.sent,r=t.data,a(0!==(null===(n=r.results)||void 0===n?void 0:n.length)?r.results:[]),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),x(e.t0.message);case 12:return e.prev=12,j(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}}),[I]),0===t.length)return(0,f.jsx)("p",{children:"Sorry we don't have any reviews for this movie!"});var N=t.map((function(e){var n=e.id,t=e.author,r=e.content;return(0,f.jsxs)("li",{className:l,children:[(0,f.jsxs)("h3",{children:["Author: ",t]}),(0,f.jsx)("p",{children:r})]},n)})),y=Boolean(t.length);return(0,f.jsxs)(f.Fragment,{children:[w&&(0,f.jsx)("p",{children:w}),p&&(0,f.jsx)(h.a,{}),y&&(0,f.jsx)("div",{className:v,children:N})]})}}}]);
//# sourceMappingURL=742.5c567ca8.chunk.js.map