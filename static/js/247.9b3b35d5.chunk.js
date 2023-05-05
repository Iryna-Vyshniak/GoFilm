"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[247],{9914:function(n,e,t){t.d(e,{Z:function(){return y}});var r,a,o,i,c,u,s,p,h=t(5551),l=t(168),v=t(7691),f=v.ZP.div(r||(r=(0,l.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  gap: 32px;\n  margin: 1vh auto;\n"]))),d=v.ZP.p(a||(a=(0,l.Z)(["\n  max-width: 80%;\n  color: ",";\n  text-shadow: ",";\n\n  text-align: center;\n  \n  font-family: ","\n  font-size: ","\n"])),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.shadows.textShadow}),(function(n){return n.theme.fonts.heading}),(function(n){return n.theme.fontSizes.s})),g=v.ZP.img(o||(o=(0,l.Z)(["\n  width: 50vw;\n  height: auto;\n  object-fit: contain;\n  object-position: center;\n  margin: 0 auto;\n"]))),m=(v.ZP.div(i||(i=(0,l.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n\n  overflow: hidden;\n  flex: 1 0 auto;\n\n  img {\n    opacity: 0.8;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    object-position: top;\n  }\n"]))),v.ZP.div(c||(c=(0,l.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  width: 100%;\n  height: 100%;\n\n  background: ",";\n"])),(function(n){return n.theme.gradientBlock}))),w=v.ZP.div(u||(u=(0,l.Z)(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 45vw;\n\n  background: ",";\n"])),(function(n){return n.theme.gradientHeroBanner})),x=v.ZP.div(s||(s=(0,l.Z)(["\n  position: relative;\n  margin-top: -30px;\n  margin-bottom: 30px;\n"]))),Z=v.ZP.div(p||(p=(0,l.Z)(["\n  display: flex;\n  align-items: center;\n  padding: 0;\n  width: 100%;\n\n  padding-left: 15px;\n  padding-right: 15px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),b=t(184);function y(n){var e=n.message;return(0,b.jsxs)(f,{role:"alert",children:[(0,b.jsx)(d,{children:e}),(0,b.jsx)(x,{children:(0,b.jsxs)(Z,{children:[(0,b.jsx)(m,{}),(0,b.jsx)(g,{src:h,alt:"Actor",width:"240"}),(0,b.jsx)(w,{})]})})]})}},3247:function(n,e,t){t.r(e),t.d(e,{Reviews:function(){return z}});var r,a,o,i,c,u,s,p=t(5861),h=t(9439),l=t(4687),v=t.n(l),f=t(7689),d=t(2791),g=t(9914),m=t(1454),w=t(367),x=t(8308),Z=t(168),b=t(7691),y=b.ZP.ul(r||(r=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding-top: ","px;\n  padding-bottom: ","px;\n"])),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[5]})),j=b.ZP.li(a||(a=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 12px;\n"]))),k=b.ZP.div(o||(o=(0,Z.Z)(["\n  display: flex;\n  align-items: flex-end;\n  gap: 8px;\n"]))),P=b.ZP.div(i||(i=(0,Z.Z)(["\n  position: relative;\n"]))),_=b.ZP.img(c||(c=(0,Z.Z)(["\n  display: block;\n\n  height: 60px;\n  width: auto;\n\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n\n  object-fit: cover;\n  object-position: center;\n"]))),E=b.ZP.p(u||(u=(0,Z.Z)(["\n  color: ",";\n  font-weight: 700;\n"])),(function(n){return n.theme.colors.accent})),O=b.ZP.p(s||(s=(0,Z.Z)(["\n  font-weight: 400;\n"]))),q=t(9230),S=t(184),z=function(){var n=(0,f.UO)().movieId,e=(0,d.useState)([]),t=(0,h.Z)(e,2),r=t[0],a=t[1],o=(0,d.useState)(!1),i=(0,h.Z)(o,2),c=i[0],u=i[1],s=(0,d.useState)(!1),l=(0,h.Z)(s,2),Z=l[0],b=l[1],z=(0,q.$G)().t,A=(0,q.$G)().i18n.language;return(0,d.useEffect)((function(){(0,p.Z)(v().mark((function e(){var t;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u(!0),b(!1),e.next=5,(0,w.q5)(n,A);case 5:t=e.sent,a(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),b("{t('moviesPage.set_error')}");case 12:return e.prev=12,u(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})))()}),[n,A]),r?(0,S.jsxs)(S.Fragment,{children:[c&&(0,S.jsx)(m.a,{}),Z&&(0,S.jsx)(g.Z,{message:z("moviesPage.mistake")}),r.length>0?(0,S.jsx)(y,{children:r.map((function(n){return(0,S.jsxs)(j,{children:[(0,S.jsxs)(k,{children:[(0,S.jsx)(P,{children:(0,S.jsx)(_,{src:n.avatar_path?"https://image.tmdb.org/t/p/original".concat(n.avatar_path):x,alt:n.author})}),(0,S.jsxs)(E,{children:[z("moviesPage.author"),n.author]})]}),(0,S.jsx)(O,{children:n.content})]},n.id)}))}):(0,S.jsx)("div",{style:{padding:"26px",textAlign:"center"},children:z("moviesPage.reviews_desription")})]}):(0,S.jsx)("div",{children:z("loading")})}},367:function(n,e,t){t.d(e,{MI:function(){return p},Wf:function(){return s},Yq:function(){return g},_L:function(){return c},b0:function(){return f},bp:function(){return w},lK:function(){return d},mA:function(){return m},p9:function(){return v},pp:function(){return u},q5:function(){return l},y:function(){return x},yo:function(){return h}});var r=t(5861),a=t(4687),o=t.n(a),i=t(1243);i.Z.defaults.baseURL="https://api.themoviedb.org/3",i.Z.defaults.params={api_key:"80849c20aa63241eb028c4e7b7d0f3a8",include_adult:!1};var c=function(){var n=(0,r.Z)(o().mark((function n(){var e,t,r,a,c=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=c.length>0&&void 0!==c[0]?c[0]:1,t=c.length>1?c[1]:void 0,n.prev=2,n.next=5,i.Z.get("/trending/movie/day",{params:{page:e,language:t}});case 5:return r=n.sent,a=r.data,n.abrupt("return",a);case 10:throw n.prev=10,n.t0=n.catch(2),new Error("Oops, there is no movies");case 13:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("/movie/top_rated",{params:{language:e}});case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 8:throw n.prev=8,n.t0=n.catch(0),new Error("Oops, there is no movies");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(o().mark((function n(){var e,t,r,a,c,u,s=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=s.length>0&&void 0!==s[0]?s[0]:1,t=s.length>1&&void 0!==s[1]?s[1]:"",r=s.length>2?s[2]:void 0,n.prev=3,a=t?"/search/movie?page=".concat(e,"&query=").concat(t,"&language=").concat(r):"/movie/upcoming?page=".concat(e,"&language=").concat(r),n.next=7,i.Z.get(a);case 7:return c=n.sent,u=c.data,n.abrupt("return",u);case 12:throw n.prev=12,n.t0=n.catch(3),new Error("Oops, there is no movie");case 15:case"end":return n.stop()}}),n,null,[[3,12]])})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(e,t){var r,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("movie/".concat(e),{params:{id:e,language:t}});case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 8:throw n.prev=8,n.t0=n.catch(0),new Error("Oops, there is no movie with that name");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e,t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(o().mark((function n(e,t){var r,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("movie/".concat(e,"/credits"),{params:{id:e,language:t}});case 3:return r=n.sent,a=r.data,n.abrupt("return",a.cast);case 8:throw n.prev=8,n.t0=n.catch(0),new Error("Oops, there is no cast movie");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e,t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(e,t){var r,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("movie/".concat(e,"/reviews"),{params:{id:e,language:t}});case 3:return r=n.sent,a=r.data,n.abrupt("return",a.results);case 8:throw n.prev=8,n.t0=n.catch(0),new Error("Oops, we don`t have any reviews");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e,t){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("movie/".concat(e,"/videos"),{params:{id:e}});case 3:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 8:throw n.prev=8,n.t0=n.catch(0),new Error("Oops, there is no movie`s videos");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("genre/movie/list",{params:{language:e}});case 3:return t=n.sent,r=t.data,n.abrupt("return",r.genres);case 8:throw n.prev=8,n.t0=n.catch(0),new Error("Oops, there is no movie");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(o().mark((function n(e,t){var r,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("/discover/movie?with_genres=".concat(e,"&sort_by=popularity.desc&page=1&language=").concat(t));case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 8:throw n.prev=8,n.t0=n.catch(0),new Error("Oops, there is no movie");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e,t){return n.apply(this,arguments)}}(),g=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("person/popular",{params:{language:e}});case 3:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 8:throw n.prev=8,n.t0=n.catch(0),new Error("Oops, there is no movie");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),m=function(){var n=(0,r.Z)(o().mark((function n(e,t){var r,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("/person/".concat(e),{params:{id:e,language:t}});case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 8:throw n.prev=8,n.t0=n.catch(0),new Error("Oops, there is no movie");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e,t){return n.apply(this,arguments)}}(),w=function(){var n=(0,r.Z)(o().mark((function n(){var e,t,r,a,c,u,s=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=s.length>0&&void 0!==s[0]?s[0]:1,t=s.length>1&&void 0!==s[1]?s[1]:"",r=s.length>2?s[2]:void 0,n.prev=3,a=t?"/search/person?page=".concat(e,"&query=").concat(t,"&language=").concat(r):"/person/popular?page=".concat(e,"&language=").concat(r),n.next=7,i.Z.get(a);case 7:return c=n.sent,u=c.data,n.abrupt("return",u);case 12:throw n.prev=12,n.t0=n.catch(3),new Error("Oops, there is no movie");case 15:case"end":return n.stop()}}),n,null,[[3,12]])})));return function(){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(o().mark((function n(e,t){var r,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("/person/".concat(e,"/movie_credits"),{params:{page:1,language:t}});case 3:return r=n.sent,a=r.data,n.abrupt("return",a.cast);case 8:throw n.prev=8,n.t0=n.catch(0),new Error("Oops, there is no movie");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e,t){return n.apply(this,arguments)}}()},8308:function(n,e,t){n.exports=t.p+"static/media/avatar.0affc1eeb2b145c80bd1.png"},5551:function(n,e,t){n.exports=t.p+"static/media/error.441a537cb4cb558224b8.png"}}]);
//# sourceMappingURL=247.9b3b35d5.chunk.js.map