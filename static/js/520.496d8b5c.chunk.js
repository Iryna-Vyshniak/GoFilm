"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[520],{6520:function(e,t,o){o.d(t,{Z:function(){return dt}});var n=o(9439),r=o(4942),i=o(3366),a=o(7462),s=o(2791),p=o(8182),c=o(4419),l=o(183),u=o(2065),f=o(6934),d=o(3967),m=o(1402),v=o(4036),h=o(3208),g=o(7563),y=o(5721),b=o(9723);function w(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function x(e){return e instanceof w(e).Element||e instanceof Element}function O(e){return e instanceof w(e).HTMLElement||e instanceof HTMLElement}function Z(e){return"undefined"!==typeof ShadowRoot&&(e instanceof w(e).ShadowRoot||e instanceof ShadowRoot)}var T=Math.max,P=Math.min,R=Math.round;function E(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function M(){return!/^((?!chrome|android).)*safari/i.test(E())}function j(e,t,o){void 0===t&&(t=!1),void 0===o&&(o=!1);var n=e.getBoundingClientRect(),r=1,i=1;t&&O(e)&&(r=e.offsetWidth>0&&R(n.width)/e.offsetWidth||1,i=e.offsetHeight>0&&R(n.height)/e.offsetHeight||1);var a=(x(e)?w(e):window).visualViewport,s=!M()&&o,p=(n.left+(s&&a?a.offsetLeft:0))/r,c=(n.top+(s&&a?a.offsetTop:0))/i,l=n.width/r,u=n.height/i;return{width:l,height:u,top:c,right:p+l,bottom:c+u,left:p,x:p,y:c}}function k(e){var t=w(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function D(e){return e?(e.nodeName||"").toLowerCase():null}function L(e){return((x(e)?e.ownerDocument:e.document)||window.document).documentElement}function A(e){return j(L(e)).left+k(e).scrollLeft}function S(e){return w(e).getComputedStyle(e)}function W(e){var t=S(e),o=t.overflow,n=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(o+r+n)}function C(e,t,o){void 0===o&&(o=!1);var n=O(t),r=O(t)&&function(e){var t=e.getBoundingClientRect(),o=R(t.width)/e.offsetWidth||1,n=R(t.height)/e.offsetHeight||1;return 1!==o||1!==n}(t),i=L(t),a=j(e,r,o),s={scrollLeft:0,scrollTop:0},p={x:0,y:0};return(n||!n&&!o)&&(("body"!==D(t)||W(i))&&(s=function(e){return e!==w(e)&&O(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:k(e);var t}(t)),O(t)?((p=j(t,!0)).x+=t.clientLeft,p.y+=t.clientTop):i&&(p.x=A(i))),{x:a.left+s.scrollLeft-p.x,y:a.top+s.scrollTop-p.y,width:a.width,height:a.height}}function B(e){var t=j(e),o=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-o)<=1&&(o=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:o,height:n}}function H(e){return"html"===D(e)?e:e.assignedSlot||e.parentNode||(Z(e)?e.host:null)||L(e)}function N(e){return["html","body","#document"].indexOf(D(e))>=0?e.ownerDocument.body:O(e)&&W(e)?e:N(H(e))}function F(e,t){var o;void 0===t&&(t=[]);var n=N(e),r=n===(null==(o=e.ownerDocument)?void 0:o.body),i=w(n),a=r?[i].concat(i.visualViewport||[],W(n)?n:[]):n,s=t.concat(a);return r?s:s.concat(F(H(a)))}function I(e){return["table","td","th"].indexOf(D(e))>=0}function q(e){return O(e)&&"fixed"!==S(e).position?e.offsetParent:null}function V(e){for(var t=w(e),o=q(e);o&&I(o)&&"static"===S(o).position;)o=q(o);return o&&("html"===D(o)||"body"===D(o)&&"static"===S(o).position)?t:o||function(e){var t=/firefox/i.test(E());if(/Trident/i.test(E())&&O(e)&&"fixed"===S(e).position)return null;var o=H(e);for(Z(o)&&(o=o.host);O(o)&&["html","body"].indexOf(D(o))<0;){var n=S(o);if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||t&&"filter"===n.willChange||t&&n.filter&&"none"!==n.filter)return o;o=o.parentNode}return null}(e)||t}var _="top",U="bottom",z="right",X="left",Y="auto",G=[_,U,z,X],J="start",K="end",Q="viewport",$="popper",ee=G.reduce((function(e,t){return e.concat([t+"-"+J,t+"-"+K])}),[]),te=[].concat(G,[Y]).reduce((function(e,t){return e.concat([t,t+"-"+J,t+"-"+K])}),[]),oe=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function ne(e){var t=new Map,o=new Set,n=[];function r(e){o.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!o.has(e)){var n=t.get(e);n&&r(n)}})),n.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){o.has(e.name)||r(e)})),n}function re(e){var t;return function(){return t||(t=new Promise((function(o){Promise.resolve().then((function(){t=void 0,o(e())}))}))),t}}var ie={placement:"bottom",modifiers:[],strategy:"absolute"};function ae(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function se(e){void 0===e&&(e={});var t=e,o=t.defaultModifiers,n=void 0===o?[]:o,r=t.defaultOptions,i=void 0===r?ie:r;return function(e,t,o){void 0===o&&(o=i);var r={placement:"bottom",orderedModifiers:[],options:Object.assign({},ie,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],s=!1,p={state:r,setOptions:function(o){var s="function"===typeof o?o(r.options):o;c(),r.options=Object.assign({},i,r.options,s),r.scrollParents={reference:x(e)?F(e):e.contextElement?F(e.contextElement):[],popper:F(t)};var l=function(e){var t=ne(e);return oe.reduce((function(e,o){return e.concat(t.filter((function(e){return e.phase===o})))}),[])}(function(e){var t=e.reduce((function(e,t){var o=e[t.name];return e[t.name]=o?Object.assign({},o,t,{options:Object.assign({},o.options,t.options),data:Object.assign({},o.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(n,r.options.modifiers)));return r.orderedModifiers=l.filter((function(e){return e.enabled})),r.orderedModifiers.forEach((function(e){var t=e.name,o=e.options,n=void 0===o?{}:o,i=e.effect;if("function"===typeof i){var s=i({state:r,name:t,instance:p,options:n}),c=function(){};a.push(s||c)}})),p.update()},forceUpdate:function(){if(!s){var e=r.elements,t=e.reference,o=e.popper;if(ae(t,o)){r.rects={reference:C(t,V(o),"fixed"===r.options.strategy),popper:B(o)},r.reset=!1,r.placement=r.options.placement,r.orderedModifiers.forEach((function(e){return r.modifiersData[e.name]=Object.assign({},e.data)}));for(var n=0;n<r.orderedModifiers.length;n++)if(!0!==r.reset){var i=r.orderedModifiers[n],a=i.fn,c=i.options,l=void 0===c?{}:c,u=i.name;"function"===typeof a&&(r=a({state:r,options:l,name:u,instance:p})||r)}else r.reset=!1,n=-1}}},update:re((function(){return new Promise((function(e){p.forceUpdate(),e(r)}))})),destroy:function(){c(),s=!0}};if(!ae(e,t))return p;function c(){a.forEach((function(e){return e()})),a=[]}return p.setOptions(o).then((function(e){!s&&o.onFirstUpdate&&o.onFirstUpdate(e)})),p}}var pe={passive:!0};function ce(e){return e.split("-")[0]}function le(e){return e.split("-")[1]}function ue(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function fe(e){var t,o=e.reference,n=e.element,r=e.placement,i=r?ce(r):null,a=r?le(r):null,s=o.x+o.width/2-n.width/2,p=o.y+o.height/2-n.height/2;switch(i){case _:t={x:s,y:o.y-n.height};break;case U:t={x:s,y:o.y+o.height};break;case z:t={x:o.x+o.width,y:p};break;case X:t={x:o.x-n.width,y:p};break;default:t={x:o.x,y:o.y}}var c=i?ue(i):null;if(null!=c){var l="y"===c?"height":"width";switch(a){case J:t[c]=t[c]-(o[l]/2-n[l]/2);break;case K:t[c]=t[c]+(o[l]/2-n[l]/2)}}return t}var de={top:"auto",right:"auto",bottom:"auto",left:"auto"};function me(e){var t,o=e.popper,n=e.popperRect,r=e.placement,i=e.variation,a=e.offsets,s=e.position,p=e.gpuAcceleration,c=e.adaptive,l=e.roundOffsets,u=e.isFixed,f=a.x,d=void 0===f?0:f,m=a.y,v=void 0===m?0:m,h="function"===typeof l?l({x:d,y:v}):{x:d,y:v};d=h.x,v=h.y;var g=a.hasOwnProperty("x"),y=a.hasOwnProperty("y"),b=X,x=_,O=window;if(c){var Z=V(o),T="clientHeight",P="clientWidth";if(Z===w(o)&&"static"!==S(Z=L(o)).position&&"absolute"===s&&(T="scrollHeight",P="scrollWidth"),r===_||(r===X||r===z)&&i===K)x=U,v-=(u&&Z===O&&O.visualViewport?O.visualViewport.height:Z[T])-n.height,v*=p?1:-1;if(r===X||(r===_||r===U)&&i===K)b=z,d-=(u&&Z===O&&O.visualViewport?O.visualViewport.width:Z[P])-n.width,d*=p?1:-1}var E,M=Object.assign({position:s},c&&de),j=!0===l?function(e,t){var o=e.x,n=e.y,r=t.devicePixelRatio||1;return{x:R(o*r)/r||0,y:R(n*r)/r||0}}({x:d,y:v},w(o)):{x:d,y:v};return d=j.x,v=j.y,p?Object.assign({},M,((E={})[x]=y?"0":"",E[b]=g?"0":"",E.transform=(O.devicePixelRatio||1)<=1?"translate("+d+"px, "+v+"px)":"translate3d("+d+"px, "+v+"px, 0)",E)):Object.assign({},M,((t={})[x]=y?v+"px":"",t[b]=g?d+"px":"",t.transform="",t))}var ve={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,o=e.options,n=e.name,r=o.offset,i=void 0===r?[0,0]:r,a=te.reduce((function(e,o){return e[o]=function(e,t,o){var n=ce(e),r=[X,_].indexOf(n)>=0?-1:1,i="function"===typeof o?o(Object.assign({},t,{placement:e})):o,a=i[0],s=i[1];return a=a||0,s=(s||0)*r,[X,z].indexOf(n)>=0?{x:s,y:a}:{x:a,y:s}}(o,t.rects,i),e}),{}),s=a[t.placement],p=s.x,c=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=p,t.modifiersData.popperOffsets.y+=c),t.modifiersData[n]=a}},he={left:"right",right:"left",bottom:"top",top:"bottom"};function ge(e){return e.replace(/left|right|bottom|top/g,(function(e){return he[e]}))}var ye={start:"end",end:"start"};function be(e){return e.replace(/start|end/g,(function(e){return ye[e]}))}function we(e,t){var o=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(o&&Z(o)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function xe(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Oe(e,t,o){return t===Q?xe(function(e,t){var o=w(e),n=L(e),r=o.visualViewport,i=n.clientWidth,a=n.clientHeight,s=0,p=0;if(r){i=r.width,a=r.height;var c=M();(c||!c&&"fixed"===t)&&(s=r.offsetLeft,p=r.offsetTop)}return{width:i,height:a,x:s+A(e),y:p}}(e,o)):x(t)?function(e,t){var o=j(e,!1,"fixed"===t);return o.top=o.top+e.clientTop,o.left=o.left+e.clientLeft,o.bottom=o.top+e.clientHeight,o.right=o.left+e.clientWidth,o.width=e.clientWidth,o.height=e.clientHeight,o.x=o.left,o.y=o.top,o}(t,o):xe(function(e){var t,o=L(e),n=k(e),r=null==(t=e.ownerDocument)?void 0:t.body,i=T(o.scrollWidth,o.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),a=T(o.scrollHeight,o.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),s=-n.scrollLeft+A(e),p=-n.scrollTop;return"rtl"===S(r||o).direction&&(s+=T(o.clientWidth,r?r.clientWidth:0)-i),{width:i,height:a,x:s,y:p}}(L(e)))}function Ze(e,t,o,n){var r="clippingParents"===t?function(e){var t=F(H(e)),o=["absolute","fixed"].indexOf(S(e).position)>=0&&O(e)?V(e):e;return x(o)?t.filter((function(e){return x(e)&&we(e,o)&&"body"!==D(e)})):[]}(e):[].concat(t),i=[].concat(r,[o]),a=i[0],s=i.reduce((function(t,o){var r=Oe(e,o,n);return t.top=T(r.top,t.top),t.right=P(r.right,t.right),t.bottom=P(r.bottom,t.bottom),t.left=T(r.left,t.left),t}),Oe(e,a,n));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function Te(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function Pe(e,t){return t.reduce((function(t,o){return t[o]=e,t}),{})}function Re(e,t){void 0===t&&(t={});var o=t,n=o.placement,r=void 0===n?e.placement:n,i=o.strategy,a=void 0===i?e.strategy:i,s=o.boundary,p=void 0===s?"clippingParents":s,c=o.rootBoundary,l=void 0===c?Q:c,u=o.elementContext,f=void 0===u?$:u,d=o.altBoundary,m=void 0!==d&&d,v=o.padding,h=void 0===v?0:v,g=Te("number"!==typeof h?h:Pe(h,G)),y=f===$?"reference":$,b=e.rects.popper,w=e.elements[m?y:f],O=Ze(x(w)?w:w.contextElement||L(e.elements.popper),p,l,a),Z=j(e.elements.reference),T=fe({reference:Z,element:b,strategy:"absolute",placement:r}),P=xe(Object.assign({},b,T)),R=f===$?P:Z,E={top:O.top-R.top+g.top,bottom:R.bottom-O.bottom+g.bottom,left:O.left-R.left+g.left,right:R.right-O.right+g.right},M=e.modifiersData.offset;if(f===$&&M){var k=M[r];Object.keys(E).forEach((function(e){var t=[z,U].indexOf(e)>=0?1:-1,o=[_,U].indexOf(e)>=0?"y":"x";E[e]+=k[o]*t}))}return E}function Ee(e,t,o){return T(e,P(t,o))}var Me={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,o=e.options,n=e.name,r=o.mainAxis,i=void 0===r||r,a=o.altAxis,s=void 0!==a&&a,p=o.boundary,c=o.rootBoundary,l=o.altBoundary,u=o.padding,f=o.tether,d=void 0===f||f,m=o.tetherOffset,v=void 0===m?0:m,h=Re(t,{boundary:p,rootBoundary:c,padding:u,altBoundary:l}),g=ce(t.placement),y=le(t.placement),b=!y,w=ue(g),x="x"===w?"y":"x",O=t.modifiersData.popperOffsets,Z=t.rects.reference,R=t.rects.popper,E="function"===typeof v?v(Object.assign({},t.rects,{placement:t.placement})):v,M="number"===typeof E?{mainAxis:E,altAxis:E}:Object.assign({mainAxis:0,altAxis:0},E),j=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,k={x:0,y:0};if(O){if(i){var D,L="y"===w?_:X,A="y"===w?U:z,S="y"===w?"height":"width",W=O[w],C=W+h[L],H=W-h[A],N=d?-R[S]/2:0,F=y===J?Z[S]:R[S],I=y===J?-R[S]:-Z[S],q=t.elements.arrow,Y=d&&q?B(q):{width:0,height:0},G=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},K=G[L],Q=G[A],$=Ee(0,Z[S],Y[S]),ee=b?Z[S]/2-N-$-K-M.mainAxis:F-$-K-M.mainAxis,te=b?-Z[S]/2+N+$+Q+M.mainAxis:I+$+Q+M.mainAxis,oe=t.elements.arrow&&V(t.elements.arrow),ne=oe?"y"===w?oe.clientTop||0:oe.clientLeft||0:0,re=null!=(D=null==j?void 0:j[w])?D:0,ie=W+te-re,ae=Ee(d?P(C,W+ee-re-ne):C,W,d?T(H,ie):H);O[w]=ae,k[w]=ae-W}if(s){var se,pe="x"===w?_:X,fe="x"===w?U:z,de=O[x],me="y"===x?"height":"width",ve=de+h[pe],he=de-h[fe],ge=-1!==[_,X].indexOf(g),ye=null!=(se=null==j?void 0:j[x])?se:0,be=ge?ve:de-Z[me]-R[me]-ye+M.altAxis,we=ge?de+Z[me]+R[me]-ye-M.altAxis:he,xe=d&&ge?function(e,t,o){var n=Ee(e,t,o);return n>o?o:n}(be,de,we):Ee(d?be:ve,de,d?we:he);O[x]=xe,k[x]=xe-de}t.modifiersData[n]=k}},requiresIfExists:["offset"]};var je={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,o=e.state,n=e.name,r=e.options,i=o.elements.arrow,a=o.modifiersData.popperOffsets,s=ce(o.placement),p=ue(s),c=[X,z].indexOf(s)>=0?"height":"width";if(i&&a){var l=function(e,t){return Te("number"!==typeof(e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:Pe(e,G))}(r.padding,o),u=B(i),f="y"===p?_:X,d="y"===p?U:z,m=o.rects.reference[c]+o.rects.reference[p]-a[p]-o.rects.popper[c],v=a[p]-o.rects.reference[p],h=V(i),g=h?"y"===p?h.clientHeight||0:h.clientWidth||0:0,y=m/2-v/2,b=l[f],w=g-u[c]-l[d],x=g/2-u[c]/2+y,O=Ee(b,x,w),Z=p;o.modifiersData[n]=((t={})[Z]=O,t.centerOffset=O-x,t)}},effect:function(e){var t=e.state,o=e.options.element,n=void 0===o?"[data-popper-arrow]":o;null!=n&&("string"!==typeof n||(n=t.elements.popper.querySelector(n)))&&we(t.elements.popper,n)&&(t.elements.arrow=n)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ke(e,t,o){return void 0===o&&(o={x:0,y:0}),{top:e.top-t.height-o.y,right:e.right-t.width+o.x,bottom:e.bottom-t.height+o.y,left:e.left-t.width-o.x}}function De(e){return[_,z,U,X].some((function(t){return e[t]>=0}))}var Le=se({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,o=e.instance,n=e.options,r=n.scroll,i=void 0===r||r,a=n.resize,s=void 0===a||a,p=w(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&c.forEach((function(e){e.addEventListener("scroll",o.update,pe)})),s&&p.addEventListener("resize",o.update,pe),function(){i&&c.forEach((function(e){e.removeEventListener("scroll",o.update,pe)})),s&&p.removeEventListener("resize",o.update,pe)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,o=e.name;t.modifiersData[o]=fe({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,o=e.options,n=o.gpuAcceleration,r=void 0===n||n,i=o.adaptive,a=void 0===i||i,s=o.roundOffsets,p=void 0===s||s,c={placement:ce(t.placement),variation:le(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,me(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:p})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,me(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:p})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var o=t.styles[e]||{},n=t.attributes[e]||{},r=t.elements[e];O(r)&&D(r)&&(Object.assign(r.style,o),Object.keys(n).forEach((function(e){var t=n[e];!1===t?r.removeAttribute(e):r.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,o={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,o.popper),t.styles=o,t.elements.arrow&&Object.assign(t.elements.arrow.style,o.arrow),function(){Object.keys(t.elements).forEach((function(e){var n=t.elements[e],r=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:o[e]).reduce((function(e,t){return e[t]="",e}),{});O(n)&&D(n)&&(Object.assign(n.style,i),Object.keys(r).forEach((function(e){n.removeAttribute(e)})))}))}},requires:["computeStyles"]},ve,{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,o=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var r=o.mainAxis,i=void 0===r||r,a=o.altAxis,s=void 0===a||a,p=o.fallbackPlacements,c=o.padding,l=o.boundary,u=o.rootBoundary,f=o.altBoundary,d=o.flipVariations,m=void 0===d||d,v=o.allowedAutoPlacements,h=t.options.placement,g=ce(h),y=p||(g===h||!m?[ge(h)]:function(e){if(ce(e)===Y)return[];var t=ge(e);return[be(e),t,be(t)]}(h)),b=[h].concat(y).reduce((function(e,o){return e.concat(ce(o)===Y?function(e,t){void 0===t&&(t={});var o=t,n=o.placement,r=o.boundary,i=o.rootBoundary,a=o.padding,s=o.flipVariations,p=o.allowedAutoPlacements,c=void 0===p?te:p,l=le(n),u=l?s?ee:ee.filter((function(e){return le(e)===l})):G,f=u.filter((function(e){return c.indexOf(e)>=0}));0===f.length&&(f=u);var d=f.reduce((function(t,o){return t[o]=Re(e,{placement:o,boundary:r,rootBoundary:i,padding:a})[ce(o)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:o,boundary:l,rootBoundary:u,padding:c,flipVariations:m,allowedAutoPlacements:v}):o)}),[]),w=t.rects.reference,x=t.rects.popper,O=new Map,Z=!0,T=b[0],P=0;P<b.length;P++){var R=b[P],E=ce(R),M=le(R)===J,j=[_,U].indexOf(E)>=0,k=j?"width":"height",D=Re(t,{placement:R,boundary:l,rootBoundary:u,altBoundary:f,padding:c}),L=j?M?z:X:M?U:_;w[k]>x[k]&&(L=ge(L));var A=ge(L),S=[];if(i&&S.push(D[E]<=0),s&&S.push(D[L]<=0,D[A]<=0),S.every((function(e){return e}))){T=R,Z=!1;break}O.set(R,S)}if(Z)for(var W=function(e){var t=b.find((function(t){var o=O.get(t);if(o)return o.slice(0,e).every((function(e){return e}))}));if(t)return T=t,"break"},C=m?3:1;C>0;C--){if("break"===W(C))break}t.placement!==T&&(t.modifiersData[n]._skip=!0,t.placement=T,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},Me,je,{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,o=e.name,n=t.rects.reference,r=t.rects.popper,i=t.modifiersData.preventOverflow,a=Re(t,{elementContext:"reference"}),s=Re(t,{altBoundary:!0}),p=ke(a,n),c=ke(s,r,i),l=De(p),u=De(c);t.modifiersData[o]={referenceClippingOffsets:p,popperEscapeOffsets:c,isReferenceHidden:l,hasPopperEscaped:u},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":u})}}]}),Ae=o(6174),Se=o(1217),We=o(5878);function Ce(e){return(0,Se.Z)("MuiPopper",e)}(0,We.Z)("MuiPopper",["root"]);var Be=o(7271),He=o(6826),Ne=o(184),Fe=["anchorEl","children","component","direction","disablePortal","modifiers","open","placement","popperOptions","popperRef","slotProps","slots","TransitionProps","ownerState"],Ie=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition","slotProps","slots"];function qe(e){return"function"===typeof e?e():e}function Ve(e){return void 0!==e.nodeType}var _e={},Ue=s.forwardRef((function(e,t){var o,r=e.anchorEl,p=e.children,l=e.component,u=e.direction,f=e.disablePortal,d=e.modifiers,m=e.open,v=e.placement,h=e.popperOptions,b=e.popperRef,w=e.slotProps,x=void 0===w?{}:w,O=e.slots,Z=void 0===O?{}:O,T=e.TransitionProps,P=(0,i.Z)(e,Fe),R=s.useRef(null),E=(0,g.Z)(R,t),M=s.useRef(null),j=(0,g.Z)(M,b),k=s.useRef(j);(0,y.Z)((function(){k.current=j}),[j]),s.useImperativeHandle(b,(function(){return M.current}),[]);var D=function(e,t){if("ltr"===t)return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}(v,u),L=s.useState(D),A=(0,n.Z)(L,2),S=A[0],W=A[1],C=s.useState(qe(r)),B=(0,n.Z)(C,2),H=B[0],N=B[1];s.useEffect((function(){M.current&&M.current.forceUpdate()})),s.useEffect((function(){r&&N(qe(r))}),[r]),(0,y.Z)((function(){if(H&&m){var e=[{name:"preventOverflow",options:{altBoundary:f}},{name:"flip",options:{altBoundary:f}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:function(e){var t=e.state;W(t.placement)}}];null!=d&&(e=e.concat(d)),h&&null!=h.modifiers&&(e=e.concat(h.modifiers));var t=Le(H,R.current,(0,a.Z)({placement:D},h,{modifiers:e}));return k.current(t),function(){t.destroy(),k.current(null)}}}),[H,f,d,m,h,D]);var F={placement:S};null!==T&&(F.TransitionProps=T);var I=(0,c.Z)({root:["root"]},(0,He.T)(Ce)),q=null!=(o=null!=l?l:Z.root)?o:"div",V=(0,Be.Z)({elementType:q,externalSlotProps:x.root,externalForwardedProps:P,additionalProps:{role:"tooltip",ref:E},ownerState:e,className:I.root});return(0,Ne.jsx)(q,(0,a.Z)({},V,{children:"function"===typeof p?p(F):p}))})),ze=s.forwardRef((function(e,t){var o,r=e.anchorEl,p=e.children,c=e.container,l=e.direction,u=void 0===l?"ltr":l,f=e.disablePortal,d=void 0!==f&&f,m=e.keepMounted,v=void 0!==m&&m,h=e.modifiers,g=e.open,y=e.placement,w=void 0===y?"bottom":y,x=e.popperOptions,O=void 0===x?_e:x,Z=e.popperRef,T=e.style,P=e.transition,R=void 0!==P&&P,E=e.slotProps,M=void 0===E?{}:E,j=e.slots,k=void 0===j?{}:j,D=(0,i.Z)(e,Ie),L=s.useState(!0),A=(0,n.Z)(L,2),S=A[0],W=A[1];if(!v&&!g&&(!R||S))return null;if(c)o=c;else if(r){var C=qe(r);o=C&&Ve(C)?(0,b.Z)(C).body:(0,b.Z)(null).body}var B=g||!v||R&&!S?void 0:"none",H=R?{in:g,onEnter:function(){W(!1)},onExited:function(){W(!0)}}:void 0;return(0,Ne.jsx)(Ae.Z,{disablePortal:d,container:o,children:(0,Ne.jsx)(Ue,(0,a.Z)({anchorEl:r,direction:u,disablePortal:d,modifiers:h,ref:t,open:R?!S:g,placement:w,popperOptions:O,popperRef:Z,slotProps:M,slots:k},D,{style:(0,a.Z)({position:"fixed",top:0,left:0,display:B},T),TransitionProps:H,children:p}))})})),Xe=o(9120),Ye=["components","componentsProps","slots","slotProps"],Ge=(0,f.ZP)(ze,{name:"MuiPopper",slot:"Root",overridesResolver:function(e,t){return t.root}})({}),Je=s.forwardRef((function(e,t){var o,n=(0,Xe.Z)(),r=(0,m.Z)({props:e,name:"MuiPopper"}),s=r.components,p=r.componentsProps,c=r.slots,l=r.slotProps,u=(0,i.Z)(r,Ye),f=null!=(o=null==c?void 0:c.root)?o:null==s?void 0:s.Root;return(0,Ne.jsx)(Ge,(0,a.Z)({direction:null==n?void 0:n.direction,slots:{root:f},slotProps:null!=l?l:p},u,{ref:t}))})),Ke=o(9683),Qe=o(2071),$e=o(7384),et=o(3031),tt=o(8744);function ot(e){return(0,Se.Z)("MuiTooltip",e)}var nt=(0,We.Z)("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),rt=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","slotProps","slots","title","TransitionComponent","TransitionProps"];var it=(0,f.ZP)(Je,{name:"MuiTooltip",slot:"Popper",overridesResolver:function(e,t){var o=e.ownerState;return[t.popper,!o.disableInteractive&&t.popperInteractive,o.arrow&&t.popperArrow,!o.open&&t.popperClose]}})((function(e){var t,o=e.theme,n=e.ownerState,i=e.open;return(0,a.Z)({zIndex:(o.vars||o).zIndex.tooltip,pointerEvents:"none"},!n.disableInteractive&&{pointerEvents:"auto"},!i&&{pointerEvents:"none"},n.arrow&&(t={},(0,r.Z)(t,'&[data-popper-placement*="bottom"] .'.concat(nt.arrow),{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}}),(0,r.Z)(t,'&[data-popper-placement*="top"] .'.concat(nt.arrow),{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}}),(0,r.Z)(t,'&[data-popper-placement*="right"] .'.concat(nt.arrow),(0,a.Z)({},n.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}})),(0,r.Z)(t,'&[data-popper-placement*="left"] .'.concat(nt.arrow),(0,a.Z)({},n.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})),t))})),at=(0,f.ZP)("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:function(e,t){var o=e.ownerState;return[t.tooltip,o.touch&&t.touch,o.arrow&&t.tooltipArrow,t["tooltipPlacement".concat((0,v.Z)(o.placement.split("-")[0]))]]}})((function(e){var t,o,n=e.theme,i=e.ownerState;return(0,a.Z)({backgroundColor:n.vars?n.vars.palette.Tooltip.bg:(0,u.Fq)(n.palette.grey[700],.92),borderRadius:(n.vars||n).shape.borderRadius,color:(n.vars||n).palette.common.white,fontFamily:n.typography.fontFamily,padding:"4px 8px",fontSize:n.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:n.typography.fontWeightMedium},i.arrow&&{position:"relative",margin:0},i.touch&&{padding:"8px 16px",fontSize:n.typography.pxToRem(14),lineHeight:"".concat((o=16/14,Math.round(1e5*o)/1e5),"em"),fontWeight:n.typography.fontWeightRegular},(t={},(0,r.Z)(t,".".concat(nt.popper,'[data-popper-placement*="left"] &'),(0,a.Z)({transformOrigin:"right center"},i.isRtl?(0,a.Z)({marginLeft:"14px"},i.touch&&{marginLeft:"24px"}):(0,a.Z)({marginRight:"14px"},i.touch&&{marginRight:"24px"}))),(0,r.Z)(t,".".concat(nt.popper,'[data-popper-placement*="right"] &'),(0,a.Z)({transformOrigin:"left center"},i.isRtl?(0,a.Z)({marginRight:"14px"},i.touch&&{marginRight:"24px"}):(0,a.Z)({marginLeft:"14px"},i.touch&&{marginLeft:"24px"}))),(0,r.Z)(t,".".concat(nt.popper,'[data-popper-placement*="top"] &'),(0,a.Z)({transformOrigin:"center bottom",marginBottom:"14px"},i.touch&&{marginBottom:"24px"})),(0,r.Z)(t,".".concat(nt.popper,'[data-popper-placement*="bottom"] &'),(0,a.Z)({transformOrigin:"center top",marginTop:"14px"},i.touch&&{marginTop:"24px"})),t))})),st=(0,f.ZP)("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:function(e,t){return t.arrow}})((function(e){var t=e.theme;return{overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:t.vars?t.vars.palette.Tooltip.bg:(0,u.Fq)(t.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}})),pt=!1,ct=null,lt={x:0,y:0};function ut(e,t){return function(o){t&&t(o),e(o)}}var ft=s.forwardRef((function(e,t){var o,r,u,f,g,y,b,w,x,O,Z,T,P,R,E,M,j,k,D,L=(0,m.Z)({props:e,name:"MuiTooltip"}),A=L.arrow,S=void 0!==A&&A,W=L.children,C=L.components,B=void 0===C?{}:C,H=L.componentsProps,N=void 0===H?{}:H,F=L.describeChild,I=void 0!==F&&F,q=L.disableFocusListener,V=void 0!==q&&q,_=L.disableHoverListener,U=void 0!==_&&_,z=L.disableInteractive,X=void 0!==z&&z,Y=L.disableTouchListener,G=void 0!==Y&&Y,J=L.enterDelay,K=void 0===J?100:J,Q=L.enterNextDelay,$=void 0===Q?0:Q,ee=L.enterTouchDelay,te=void 0===ee?700:ee,oe=L.followCursor,ne=void 0!==oe&&oe,re=L.id,ie=L.leaveDelay,ae=void 0===ie?0:ie,se=L.leaveTouchDelay,pe=void 0===se?1500:se,ce=L.onClose,le=L.onOpen,ue=L.open,fe=L.placement,de=void 0===fe?"bottom":fe,me=L.PopperComponent,ve=L.PopperProps,he=void 0===ve?{}:ve,ge=L.slotProps,ye=void 0===ge?{}:ge,be=L.slots,we=void 0===be?{}:be,xe=L.title,Oe=L.TransitionComponent,Ze=void 0===Oe?h.Z:Oe,Te=L.TransitionProps,Pe=(0,i.Z)(L,rt),Re=(0,d.Z)(),Ee="rtl"===Re.direction,Me=s.useState(),je=(0,n.Z)(Me,2),ke=je[0],De=je[1],Le=s.useState(null),Ae=(0,n.Z)(Le,2),Se=Ae[0],We=Ae[1],Ce=s.useRef(!1),Be=X||ne,He=s.useRef(),Fe=s.useRef(),Ie=s.useRef(),qe=s.useRef(),Ve=(0,tt.Z)({controlled:ue,default:!1,name:"Tooltip",state:"open"}),_e=(0,n.Z)(Ve,2),Ue=_e[0],ze=_e[1],Xe=Ue,Ye=(0,$e.Z)(re),Ge=s.useRef(),nt=s.useCallback((function(){void 0!==Ge.current&&(document.body.style.WebkitUserSelect=Ge.current,Ge.current=void 0),clearTimeout(qe.current)}),[]);s.useEffect((function(){return function(){clearTimeout(He.current),clearTimeout(Fe.current),clearTimeout(Ie.current),nt()}}),[nt]);var ft=function(e){clearTimeout(ct),pt=!0,ze(!0),le&&!Xe&&le(e)},dt=(0,Ke.Z)((function(e){clearTimeout(ct),ct=setTimeout((function(){pt=!1}),800+ae),ze(!1),ce&&Xe&&ce(e),clearTimeout(He.current),He.current=setTimeout((function(){Ce.current=!1}),Re.transitions.duration.shortest)})),mt=function(e){Ce.current&&"touchstart"!==e.type||(ke&&ke.removeAttribute("title"),clearTimeout(Fe.current),clearTimeout(Ie.current),K||pt&&$?Fe.current=setTimeout((function(){ft(e)}),pt?$:K):ft(e))},vt=function(e){clearTimeout(Fe.current),clearTimeout(Ie.current),Ie.current=setTimeout((function(){dt(e)}),ae)},ht=(0,et.Z)(),gt=ht.isFocusVisibleRef,yt=ht.onBlur,bt=ht.onFocus,wt=ht.ref,xt=s.useState(!1),Ot=(0,n.Z)(xt,2)[1],Zt=function(e){yt(e),!1===gt.current&&(Ot(!1),vt(e))},Tt=function(e){ke||De(e.currentTarget),bt(e),!0===gt.current&&(Ot(!0),mt(e))},Pt=function(e){Ce.current=!0;var t=W.props;t.onTouchStart&&t.onTouchStart(e)},Rt=mt,Et=vt;s.useEffect((function(){if(Xe)return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)};function e(e){"Escape"!==e.key&&"Esc"!==e.key||dt(e)}}),[dt,Xe]);var Mt=(0,Qe.Z)(W.ref,wt,De,t);xe||0===xe||(Xe=!1);var jt=s.useRef(),kt={},Dt="string"===typeof xe;I?(kt.title=Xe||!Dt||U?null:xe,kt["aria-describedby"]=Xe?Ye:null):(kt["aria-label"]=Dt?xe:null,kt["aria-labelledby"]=Xe&&!Dt?Ye:null);var Lt=(0,a.Z)({},kt,Pe,W.props,{className:(0,p.Z)(Pe.className,W.props.className),onTouchStart:Pt,ref:Mt},ne?{onMouseMove:function(e){var t=W.props;t.onMouseMove&&t.onMouseMove(e),lt={x:e.clientX,y:e.clientY},jt.current&&jt.current.update()}}:{});var At={};G||(Lt.onTouchStart=function(e){Pt(e),clearTimeout(Ie.current),clearTimeout(He.current),nt(),Ge.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",qe.current=setTimeout((function(){document.body.style.WebkitUserSelect=Ge.current,mt(e)}),te)},Lt.onTouchEnd=function(e){W.props.onTouchEnd&&W.props.onTouchEnd(e),nt(),clearTimeout(Ie.current),Ie.current=setTimeout((function(){dt(e)}),pe)}),U||(Lt.onMouseOver=ut(Rt,Lt.onMouseOver),Lt.onMouseLeave=ut(Et,Lt.onMouseLeave),Be||(At.onMouseOver=Rt,At.onMouseLeave=Et)),V||(Lt.onFocus=ut(Tt,Lt.onFocus),Lt.onBlur=ut(Zt,Lt.onBlur),Be||(At.onFocus=Tt,At.onBlur=Zt));var St=s.useMemo((function(){var e,t=[{name:"arrow",enabled:Boolean(Se),options:{element:Se,padding:4}}];return null!=(e=he.popperOptions)&&e.modifiers&&(t=t.concat(he.popperOptions.modifiers)),(0,a.Z)({},he.popperOptions,{modifiers:t})}),[Se,he]),Wt=(0,a.Z)({},L,{isRtl:Ee,arrow:S,disableInteractive:Be,placement:de,PopperComponentProp:me,touch:Ce.current}),Ct=function(e){var t=e.classes,o=e.disableInteractive,n=e.arrow,r=e.touch,i=e.placement,a={popper:["popper",!o&&"popperInteractive",n&&"popperArrow"],tooltip:["tooltip",n&&"tooltipArrow",r&&"touch","tooltipPlacement".concat((0,v.Z)(i.split("-")[0]))],arrow:["arrow"]};return(0,c.Z)(a,ot,t)}(Wt),Bt=null!=(o=null!=(r=we.popper)?r:B.Popper)?o:it,Ht=null!=(u=null!=(f=null!=(g=we.transition)?g:B.Transition)?f:Ze)?u:h.Z,Nt=null!=(y=null!=(b=we.tooltip)?b:B.Tooltip)?y:at,Ft=null!=(w=null!=(x=we.arrow)?x:B.Arrow)?w:st,It=(0,l.Z)(Bt,(0,a.Z)({},he,null!=(O=ye.popper)?O:N.popper,{className:(0,p.Z)(Ct.popper,null==he?void 0:he.className,null==(Z=null!=(T=ye.popper)?T:N.popper)?void 0:Z.className)}),Wt),qt=(0,l.Z)(Ht,(0,a.Z)({},Te,null!=(P=ye.transition)?P:N.transition),Wt),Vt=(0,l.Z)(Nt,(0,a.Z)({},null!=(R=ye.tooltip)?R:N.tooltip,{className:(0,p.Z)(Ct.tooltip,null==(E=null!=(M=ye.tooltip)?M:N.tooltip)?void 0:E.className)}),Wt),_t=(0,l.Z)(Ft,(0,a.Z)({},null!=(j=ye.arrow)?j:N.arrow,{className:(0,p.Z)(Ct.arrow,null==(k=null!=(D=ye.arrow)?D:N.arrow)?void 0:k.className)}),Wt);return(0,Ne.jsxs)(s.Fragment,{children:[s.cloneElement(W,Lt),(0,Ne.jsx)(Bt,(0,a.Z)({as:null!=me?me:Je,placement:de,anchorEl:ne?{getBoundingClientRect:function(){return{top:lt.y,left:lt.x,right:lt.x,bottom:lt.y,width:0,height:0}}}:ke,popperRef:jt,open:!!ke&&Xe,id:Ye,transition:!0},At,It,{popperOptions:St,children:function(e){var t=e.TransitionProps;return(0,Ne.jsx)(Ht,(0,a.Z)({timeout:Re.transitions.duration.shorter},t,qt,{children:(0,Ne.jsxs)(Nt,(0,a.Z)({},Vt,{children:[xe,S?(0,Ne.jsx)(Ft,(0,a.Z)({},_t,{ref:We})):null]}))}))}}))]})})),dt=ft}}]);
//# sourceMappingURL=520.496d8b5c.chunk.js.map