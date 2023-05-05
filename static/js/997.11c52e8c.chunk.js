"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[997],{6659:function(n,e,t){t.r(e),t.d(e,{default:function(){return Y}});var i,r,o,a,s,p,c,d,l,x,h,u=t(5861),g=t(3433),m=t(9439),f=t(4687),b=t.n(f),v=t(2791),w=t(1087),j=t(7689),Z=t(8825),P=t(168),k=t(7691),_=k.ZP.div(i||(i=(0,P.Z)(["\n  padding-left: ","px;\n  padding-right: ","px;\n  font-size: ",";\n  text-align: center;\n\n  @media screen and (min-width: 480px) {\n    font-size: ",";\n  }\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.fontSizes.l})),y=t(1192),S=t(9593),z=t(601),B=t(1454),C=t(9914),E=t(367),F=t(794),O=(t(4676),t(6150),t(7606)),V=t(748),I=t(3729),M=k.ZP.li(r||(r=(0,P.Z)(["\n  position: relative;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n\n  margin: 0 auto;\n  padding: ","px;\n\n  max-width: 100%;\n  width: 260px;\n  height: 100%;\n\n  border: none;\n  transform: scale(1);\n  border-radius: 8px;\n\n  background-color: transparent;\n\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n\n  backdrop-filter: blur(3.5px);\n  transition: box-shadow 250ms linear;\n  cursor: pointer;\n\n  &:hover {\n    box-shadow: 0px 2px 24px -5px rgba(0, 0, 0, 0.74);\n  }\n\n  img {\n    display: block;\n    height: 100%;\n    width: 100%;\n\n    border-top-left-radius: 8px;\n    border-top-right-radius: 8px;\n    transition: transform 250ms linear;\n    transform: scale(1);\n\n    object-fit: cover;\n    object-position: center;\n\n    &:hover {\n      transform: scale(1.1);\n    }\n  }\n"])),(function(n){return n.theme.space[3]})),D=k.ZP.div(o||(o=(0,P.Z)(["\n  margin-bottom: 10px;\n  overflow: hidden;\n"]))),H=(k.ZP.h2(a||(a=(0,P.Z)(["\n  padding-top: ","px;\n  padding-bottom: ","px;\n  padding-left: ","px;\n  padding-right: ","px;\n  max-width: 100%;\n\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  color: ",";\n  text-shadow: ",";\n  text-align: center;\n\n  font-size: ",";\n  font-weight: 700;\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.cardsTextColor}),(function(n){return n.theme.textShadow}),(function(n){return n.theme.fontSizes.m})),k.ZP.div(s||(s=(0,P.Z)(["\n  position: absolute;\n  top: 10px;\n  right: 10px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 42px;\n  height: 42px;\n\n  text-shadow: 0 0.3px 0.3px #000;\n  border-radius: 50%;\n  padding: 4px;\n"])))),T=k.ZP.div(p||(p=(0,P.Z)(["\n  position: absolute;\n  bottom: 48px;\n  right: 10px;\n"]))),q=t(9382),G=t(7983),L=t(184),N=function(n){var e=n.movie,t=e.id,i=e.poster_path,r=e.original_title,o=e.vote_average,a=e.genre_ids,s=n.lng;return(0,L.jsx)(M,{children:(0,L.jsxs)(w.rU,{to:"/movies/".concat(t),children:[(0,L.jsx)(D,{children:(0,L.jsx)("img",{src:i?"https://image.tmdb.org/t/p/original".concat(i):I,alt:r,width:"200"})}),0!==o&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(H,{children:(0,L.jsx)(q.n,{rating:null===o||void 0===o?void 0:o.toFixed(1)})}),(0,L.jsx)(V.Z,{name:"read-only",defaultValue:o/10*5,precision:.5,size:"large",readOnly:!0})]}),(0,L.jsx)(T,{children:(0,L.jsx)(G.a,{data:null===a||void 0===a?void 0:a.slice(0,2),lng:s})})]})})},U=t(4386),$=k.ZP.div(c||(c=(0,P.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  flex: 1 0 auto;\n  //   flex-grow: 1;\n  //   flex-shrink: 1;\n  //   flex-basis: auto;\n\n  width: 100%;\n  height: 100%;\n\n  overflow: hidden;\n\n  img {\n    opacity: 0.5;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    object-position: top;\n  }\n"]))),A=k.ZP.div(d||(d=(0,P.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  width: 100%;\n  height: 100%;\n\n  background: ",";\n"])),(function(n){return n.theme.gradientBlock})),J=k.ZP.div(l||(l=(0,P.Z)(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 450px;\n\n  background: ",";\n"])),(function(n){return n.theme.gradientHeroBanner})),K=k.ZP.section(x||(x=(0,P.Z)(["\n  position: relative;\n  margin-top: -70px;\n  margin-bottom: 30px;\n  padding-top: 84px;\n  padding-bottom: 84px;\n  background-color: rgba(0, 0, 0, 1);\n\n  @media screen and (min-width: 768px) {\n    padding-top: 100px;\n    padding-bottom: 100px;\n  }\n  @media screen and (min-width: 1200px) {\n    padding-top: 120px;\n    padding-bottom: 120px;\n  }\n"]))),Q=k.ZP.section(h||(h=(0,P.Z)(["\n  display: flex;\n  align-items: center;\n  padding: 0;\n\n  padding-left: 15px;\n  padding-right: 15px;\n  margin-left: auto;\n  margin-right: auto;\n\n  width: 100%;\n  height: 450px;\n"]))),R=t(6088),W=function(n){var e,t=null===(e=n.movies[Math.floor(20*Math.random())])||void 0===e?void 0:e.poster_path;return(0,L.jsx)(L.Fragment,{children:(0,L.jsx)(K,{children:(0,L.jsxs)(Q,{children:[(0,L.jsx)(A,{}),t?(0,L.jsx)($,{children:(0,L.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(t),alt:"poster opacity",width:"1200"})}):(0,L.jsx)($,{children:(0,L.jsx)("img",{src:R,alt:"poster opacity",width:"1200"})}),(0,L.jsx)(J,{})]})})})},X=t(9230);Z.ZP.dir();var Y=function(n){var e=n.lng,t=(0,v.useState)([]),i=(0,m.Z)(t,2),r=i[0],o=i[1],a=(0,v.useState)([]),s=(0,m.Z)(a,2),p=s[0],c=s[1],d=(0,v.useState)(0),l=(0,m.Z)(d,2),x=l[0],h=l[1],f=(0,v.useState)(!1),Z=(0,m.Z)(f,2),P=Z[0],k=Z[1],V=(0,v.useState)(!1),I=(0,m.Z)(V,2),M=I[0],D=I[1],H=(0,w.lr)({page:1}),T=(0,m.Z)(H,2),q=T[0],G=T[1],$=(0,v.useMemo)((function(){return Object.fromEntries((0,g.Z)(q))}),[q]),A=Number($.page||1),J=(0,X.$G)().t,K=(0,j.TH)();return(0,v.useEffect)((function(){(0,u.Z)(b().mark((function n(){var t;return b().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,k(!0),D(!1),n.next=5,(0,E._L)(A,e);case 5:t=n.sent,o(t.results),h(t.total_pages),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0.message);case 13:return n.prev=13,k(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[0,10,13,16]])})))()}),[A,e,K.search]),(0,v.useEffect)((function(){(0,u.Z)(b().mark((function n(){var t;return b().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,k(!0),D(!1),n.next=5,(0,E.pp)(e);case 5:t=n.sent,c(t.results),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0.message);case 12:return n.prev=12,k(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})))()}),[A,e,K.search]),r?(0,L.jsxs)(_,{children:[P&&(0,L.jsx)(B.a,{}),M&&(0,L.jsx)(C.Z,{message:"Oops, mistake... Please try again"}),!M&&p.length>0&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(W,{movies:r}),(0,L.jsxs)(U.Z,{container:!0,spacing:1,rowSpacing:1,mb:6,component:"section",display:"flex",justifyContent:"center",alignItems:"center",children:[(0,L.jsx)(y.D,{title:J("homePage.top_title")}),(0,L.jsx)(U.Z,{container:!0,spacing:1,padding:"8px",mb:5,children:(0,L.jsx)(F.tq,{effect:"coverflow",grabCursor:!0,centeredSlides:!0,modules:[O.pt,O.lI],loop:!0,navigation:!0,autoplay:{delay:1900,disableOnInteraction:!1},coverflowEffect:{depth:50,modifier:1,rotate:35,stretch:0,slideShadows:!0},breakpoints:{320:{slidesPerView:1,spaceBetween:0},640:{slidesPerView:4,spaceBetween:20},1040:{slidesPerView:5,spaceBetween:50}},children:p.map((function(n){return(0,L.jsx)(F.o5,{children:(0,L.jsx)(N,{movie:n,lng:e})},n.id)}))})})]}),(0,L.jsx)(y.D,{title:J("homePage.trending_title")}),(0,L.jsx)(z.a,{movies:r,t:J,lng:e}),(0,L.jsx)(S.Z,{pageCount:x,setSearchParams:G,params:$,currentPage:A-1})]})]}):(0,L.jsx)(B.a,{})}},6088:function(n,e,t){n.exports=t.p+"static/media/heroBanner.6e739e5c59b5061e38db.jpg"}}]);
//# sourceMappingURL=997.11c52e8c.chunk.js.map