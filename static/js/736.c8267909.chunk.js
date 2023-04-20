"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[736],{9736:function(n,e,t){t.r(e),t.d(e,{default:function(){return z}});var r,a,o,i,c,s,u=t(5861),l=t(9439),p=t(4687),f=t.n(p),d=t(9914),h=t(1454),v=t(1192),m=t(2791),x=t(7689),g=t(367),w=t(168),b=t(6444),y=b.ZP.ul(r||(r=(0,w.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 16px;\n  text-align: center;\n"]))),j=b.ZP.li(a||(a=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n\n  max-width: 100%;\n  width: 120px;\n  height: 100%;\n\n  border-radius: 8px;\n  border: none;\n  outline: none;\n\n  box-shadow: 9px 7px 19px 7px rgba(42, 79, 42, 0.17);\n  -webkit-box-shadow: 9px 7px 19px 7px rgba(42, 79, 42, 0.17);\n  -moz-box-shadow: 9px 7px 19px 7px rgba(42, 79, 42, 0.17);\n\n  font-size: 12px;\n  font-weight: 700;\n  overflow: hidden;\n"]))),Z=b.ZP.div(o||(o=(0,w.Z)(["\n  position: relative;\n  overflow: hidden;\n  margin-bottom: 10px;\n"]))),O=b.ZP.img(i||(i=(0,w.Z)(["\n  display: block;\n  min-height: 100%;\n  height: 160px;\n  width: 100%;\n\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  transition: transform 250ms linear;\n  transform: scale(1);\n\n  object-fit: cover;\n  object-position: center;\n\n  &:hover {\n    transform: scale(1.1);\n  }\n"]))),_=b.ZP.div(c||(c=(0,w.Z)(["\n  flex-direction: column;\n  align-items: center;\n  flex: 1 0 auto;\n  padding: 4px;\n"]))),P=b.ZP.span(s||(s=(0,w.Z)(["\n  color: ",";\n"])),(function(n){return n.theme.colors.accent})),k=t(8308),S=t(184),z=function(){var n=(0,x.UO)().movieId,e=(0,m.useState)([]),t=(0,l.Z)(e,2),r=t[0],a=t[1],o=(0,m.useState)(!1),i=(0,l.Z)(o,2),c=i[0],s=i[1],p=(0,m.useState)(!1),w=(0,l.Z)(p,2),b=w[0],z=w[1];return(0,m.useEffect)((function(){(0,u.Z)(f().mark((function e(){var t;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s(!0),z(!1),e.next=5,(0,g.yo)(n);case 5:t=e.sent,a(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.message);case 12:return e.prev=12,s(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})))()}),[n]),r?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(v.D,{title:"Cast"}),c&&(0,S.jsx)(h.a,{}),b&&(0,S.jsx)(d.Z,{message:"Oops, mistake! Please try again"}),b&&!c&&(0,S.jsx)("span",{style:{color:"red"},children:"Actor info not found"}),!b&&(0,S.jsx)(y,{children:r.map((function(n){return(0,S.jsxs)(j,{children:[(0,S.jsx)(Z,{children:(0,S.jsx)(O,{src:n.profile_path?"https://image.tmdb.org/t/p/w500".concat(n.profile_path):k,alt:n.name,width:"120"})}),(0,S.jsxs)(_,{children:[(0,S.jsx)("p",{children:n.name}),(0,S.jsxs)("p",{children:["Character: ",(0,S.jsx)(P,{children:n.character})]})]})]},n.id)}))})]}):(0,S.jsx)("div",{children:"Loading..."})}},9914:function(n,e,t){t.d(e,{Z:function(){return f}});var r,a,o,i=t(168),c=t(6444),s=c.ZP.div(r||(r=(0,i.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  gap: 32px;\n  margin: 1vh auto;\n"]))),u=c.ZP.p(a||(a=(0,i.Z)(["\n  max-width: 80%;\n  color: ",";\n  text-shadow: ",";\n\n  text-align: center;\n  \n  font-family: ","\n  font-size: ","\n"])),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.shadows.textShadow}),(function(n){return n.theme.fonts.heading}),(function(n){return n.theme.fontSizes.xl})),l=c.ZP.img(o||(o=(0,i.Z)(["\n  width: 25vw;\n  height: auto;\n  object-fit: contain;\n  object-position: center;\n  margin-bottom: 24px;\n"]))),p=t(184);function f(n){var e=n.message;return(0,p.jsxs)(s,{role:"alert",children:[(0,p.jsx)(l,{src:"",width:"240",alt:""}),(0,p.jsx)(u,{children:e})]})}},1454:function(n,e,t){t.d(e,{a:function(){return f}});t(2791);var r,a,o=t(168),i=t(6444),c=i.ZP.div(r||(r=(0,o.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(185, 228, 201, 0.7);\n"]))),s=i.ZP.img(a||(a=(0,o.Z)(["\n  position: absolute;\n  top: 35%;\n  left: 45%;\n  margin: 0 auto;\n  width: 15vw;\n  height: auto;\n  object-fit: contain;\n  object-position: center;\n"]))),u=t(9716),l=t.n(u),p=t(184),f=function(){return(0,p.jsxs)(c,{children:[(0,p.jsx)(l(),{color:"#f68000",size:150,cssOverride:{position:"absolute",top:"25%",left:"45%"}}),(0,p.jsx)(s,{src:"",alt:""})]})}},1192:function(n,e,t){t.d(e,{D:function(){return c}});t(2791);var r,a=t(168),o=t(6444).ZP.h1(r||(r=(0,a.Z)(["\n  margin-bottom: ","px;\n  text-align: center;\n  color: ",";\n  text-shadow: 0 1px 1px #fff, 1px 1px 1px #4b1414;\n  font-size: ",";\n  font-family: ",";\n  font-weight: 400;\n\n  @media screen and (min-width: 480px) {\n    font-size: ",";\n  }\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.fonts.heading}),(function(n){return n.theme.fontSizes.xl})),i=t(184),c=function(n){var e=n.title;return(0,i.jsx)(o,{children:e})}},367:function(n,e,t){t.d(e,{MI:function(){return u},Wf:function(){return s},_L:function(){return c},p9:function(){return f},q5:function(){return p},yo:function(){return l}});var r=t(5861),a=t(4687),o=t.n(a),i=t(1243);i.Z.defaults.baseURL="https://api.themoviedb.org/3",i.Z.defaults.params={api_key:"80849c20aa63241eb028c4e7b7d0f3a8"};var c=function(){var n=(0,r.Z)(o().mark((function n(){var e,t,r,a=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:1,n.prev=1,n.next=4,i.Z.get("/trending/movie/day",{params:{page:e}});case 4:return t=n.sent,r=t.data,n.abrupt("return",r);case 9:throw n.prev=9,n.t0=n.catch(1),new Error("Oops, there is no movies");case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r,a,c=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=c.length>1&&void 0!==c[1]?c[1]:1,n.prev=1,n.next=4,i.Z.get("/search/movie",{params:{query:e,page:t,include_adult:!1,language:"en-US"}});case 4:return r=n.sent,a=r.data,n.abrupt("return",a);case 9:throw n.prev=9,n.t0=n.catch(1),new Error("Oops, there is no movie with that name");case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("movie/".concat(e),{params:{language:"en-US"}});case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 8:throw n.prev=8,n.t0=n.catch(0),new Error("Oops, there is no movie with that name");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("movie/".concat(e,"/credits"),{params:{language:"en-US"}});case 3:return t=n.sent,r=t.data,n.abrupt("return",r.cast);case 8:throw n.prev=8,n.t0=n.catch(0),new Error("Oops, there is no cast movie");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("movie/".concat(e,"/reviews"));case 3:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 8:throw n.prev=8,n.t0=n.catch(0),new Error("Oops, we don`t have any reviews");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("movie/".concat(e,"/videos"));case 3:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 8:throw n.prev=8,n.t0=n.catch(0),new Error("Oops, there is no movie`s videos");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()},9716:function(n,e,t){var r=this&&this.__assign||function(){return r=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var a in e=arguments[t])Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n},r.apply(this,arguments)},a=this&&this.__createBinding||(Object.create?function(n,e,t,r){void 0===r&&(r=t);var a=Object.getOwnPropertyDescriptor(e,t);a&&!("get"in a?!e.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(n,r,a)}:function(n,e,t,r){void 0===r&&(r=t),n[r]=e[t]}),o=this&&this.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),i=this&&this.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(null!=n)for(var t in n)"default"!==t&&Object.prototype.hasOwnProperty.call(n,t)&&a(e,n,t);return o(e,n),e},c=this&&this.__rest||function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(n);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(t[r[a]]=n[r[a]])}return t};Object.defineProperty(e,"__esModule",{value:!0});var s=i(t(2791)),u=t(8945),l=t(7074),p=(0,l.createAnimation)("DotLoader","100% {transform: rotate(360deg)}","rotate"),f=(0,l.createAnimation)("DotLoader","0%, 100% {transform: scale(0)} 50% {transform: scale(1.0)}","bounce");e.default=function(n){var e=n.loading,t=void 0===e||e,a=n.color,o=void 0===a?"#000000":a,i=n.speedMultiplier,l=void 0===i?1:i,d=n.cssOverride,h=void 0===d?{}:d,v=n.size,m=void 0===v?60:v,x=c(n,["loading","color","speedMultiplier","cssOverride","size"]),g=r({display:"inherit",position:"relative",width:(0,u.cssValue)(m),height:(0,u.cssValue)(m),animationFillMode:"forwards",animation:"".concat(p," ").concat(2/l,"s 0s infinite linear")},h),w=function(n){var e=(0,u.parseLengthAndUnit)(m),t=e.value,r=e.unit;return{position:"absolute",top:n%2?"0":"auto",bottom:n%2?"auto":"0",height:"".concat(t/2).concat(r),width:"".concat(t/2).concat(r),backgroundColor:o,borderRadius:"100%",animationFillMode:"forwards",animation:"".concat(f," ").concat(2/l,"s ").concat(2===n?"1s":"0s"," infinite linear")}};return t?s.createElement("span",r({style:g},x),s.createElement("span",{style:w(1)}),s.createElement("span",{style:w(2)})):null}},7074:function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.createAnimation=void 0;e.createAnimation=function(n,e,t){var r="react-spinners-".concat(n,"-").concat(t);if("undefined"==typeof window||!window.document)return r;var a=document.createElement("style");document.head.appendChild(a);var o=a.sheet,i="\n    @keyframes ".concat(r," {\n      ").concat(e,"\n    }\n  ");return o&&o.insertRule(i,0),r}},8945:function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.cssValue=e.parseLengthAndUnit=void 0;var t={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function r(n){if("number"===typeof n)return{value:n,unit:"px"};var e,r=(n.match(/^[0-9.]*/)||"").toString();e=r.includes(".")?parseFloat(r):parseInt(r,10);var a=(n.match(/[^0-9]*$/)||"").toString();return t[a]?{value:e,unit:a}:(console.warn("React Spinners: ".concat(n," is not a valid css value. Defaulting to ").concat(e,"px.")),{value:e,unit:"px"})}e.parseLengthAndUnit=r,e.cssValue=function(n){var e=r(n);return"".concat(e.value).concat(e.unit)}},8308:function(n,e,t){n.exports=t.p+"static/media/avatar.0affc1eeb2b145c80bd1.png"}}]);
//# sourceMappingURL=736.c8267909.chunk.js.map