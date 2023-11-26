(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{50:function(e,r,n){Promise.resolve().then(n.bind(n,712))},712:function(e,r,n){"use strict";let l,d;n.r(r),n.d(r,{default:function(){return page}});var c=n(7437),f=n(1396),h=n.n(f),g=n(2265);let b={data:""},t=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||b,y=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,x=/\/\*[^]*?\*\/|  +/g,w=/\n+/g,o=(e,r)=>{let n="",l="",d="";for(let c in e){let f=e[c];"@"==c[0]?"i"==c[1]?n=c+" "+f+";":l+="f"==c[1]?o(f,c):c+"{"+o(f,"k"==c[1]?"":r)+"}":"object"==typeof f?l+=o(f,r?r.replace(/([^,])+/g,e=>c.replace(/(^:.*)|([^,])+/g,r=>/&/.test(r)?r.replace(/&/g,e):e?e+" "+r:r)):c):null!=f&&(c=/^--/.test(c)?c:c.replace(/[A-Z]/g,"-$&").toLowerCase(),d+=o.p?o.p(c,f):c+":"+f+";")}return n+(r&&d?r+"{"+d+"}":d)+l},_={},s=e=>{if("object"==typeof e){let r="";for(let n in e)r+=n+s(e[n]);return r}return e},i=(e,r,n,l,d)=>{var c;let f=s(e),h=_[f]||(_[f]=(e=>{let r=0,n=11;for(;r<e.length;)n=101*n+e.charCodeAt(r++)>>>0;return"go"+n})(f));if(!_[h]){let r=f!==e?e:(e=>{let r,n,l=[{}];for(;r=y.exec(e.replace(x,""));)r[4]?l.shift():r[3]?(n=r[3].replace(w," ").trim(),l.unshift(l[0][n]=l[0][n]||{})):l[0][r[1]]=r[2].replace(w," ").trim();return l[0]})(e);_[h]=o(d?{["@keyframes "+h]:r}:r,n?"":"."+h)}let g=n&&_.g?_.g:null;return n&&(_.g=_[h]),c=_[h],g?r.data=r.data.replace(g,c):-1===r.data.indexOf(c)&&(r.data=l?c+r.data:r.data+c),h},p=(e,r,n)=>e.reduce((e,l,d)=>{let c=r[d];if(c&&c.call){let e=c(n),r=e&&e.props&&e.props.className||/^go/.test(e)&&e;c=r?"."+r:e&&"object"==typeof e?e.props?"":o(e,""):!1===e?"":e}return e+l+(null==c?"":c)},"");function u(e){let r=this||{},n=e.call?e(r.p):e;return i(n.unshift?n.raw?p(n,[].slice.call(arguments,1),r.p):n.reduce((e,n)=>Object.assign(e,n&&n.call?n(r.p):n),{}):n,t(r.target),r.g,r.o,r.k)}u.bind({g:1});let k,E,N,C=u.bind({k:1});function m(e,r,n,l){o.p=r,k=e,E=n,N=l}function j(e,r){let n=this||{};return function(){let l=arguments;function a(d,c){let f=Object.assign({},d),h=f.className||a.className;n.p=Object.assign({theme:E&&E()},f),n.o=/ *go\d+/.test(h),f.className=u.apply(n,l)+(h?" "+h:""),r&&(f.ref=c);let g=e;return e[0]&&(g=f.as||e,delete f.as),N&&g[0]&&N(f),k(g,f)}return r?r(a):a}}var W=e=>"function"==typeof e,T=(e,r)=>W(e)?e(r):e,O=(l=0,()=>(++l).toString()),dist_b=()=>{if(void 0===d&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");d=!e||e.matches}return d},z=new Map,$=e=>{if(z.has(e))return;let r=setTimeout(()=>{z.delete(e),dist_u({type:4,toastId:e})},1e3);z.set(e,r)},J=e=>{let r=z.get(e);r&&clearTimeout(r)},v=(e,r)=>{switch(r.type){case 0:return{...e,toasts:[r.toast,...e.toasts].slice(0,20)};case 1:return r.toast.id&&J(r.toast.id),{...e,toasts:e.toasts.map(e=>e.id===r.toast.id?{...e,...r.toast}:e)};case 2:let{toast:n}=r;return e.toasts.find(e=>e.id===n.id)?v(e,{type:1,toast:n}):v(e,{type:0,toast:n});case 3:let{toastId:l}=r;return l?$(l):e.toasts.forEach(e=>{$(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===l||void 0===l?{...e,visible:!1}:e)};case 4:return void 0===r.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==r.toastId)};case 5:return{...e,pausedAt:r.time};case 6:let d=r.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+d}))}}},A=[],P={toasts:[],pausedAt:void 0},dist_u=e=>{P=v(P,e),A.forEach(e=>{e(P)})},R={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},I=(e={})=>{let[r,n]=(0,g.useState)(P);(0,g.useEffect)(()=>(A.push(n),()=>{let e=A.indexOf(n);e>-1&&A.splice(e,1)}),[r]);let l=r.toasts.map(r=>{var n,l;return{...e,...e[r.type],...r,duration:r.duration||(null==(n=e[r.type])?void 0:n.duration)||(null==e?void 0:e.duration)||R[r.type],style:{...e.style,...null==(l=e[r.type])?void 0:l.style,...r.style}}});return{...r,toasts:l}},G=(e,r="blank",n)=>({createdAt:Date.now(),visible:!0,type:r,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...n,id:(null==n?void 0:n.id)||O()}),dist_h=e=>(r,n)=>{let l=G(r,e,n);return dist_u({type:2,toast:l}),l.id},dist_n=(e,r)=>dist_h("blank")(e,r);dist_n.error=dist_h("error"),dist_n.success=dist_h("success"),dist_n.loading=dist_h("loading"),dist_n.custom=dist_h("custom"),dist_n.dismiss=e=>{dist_u({type:3,toastId:e})},dist_n.remove=e=>dist_u({type:4,toastId:e}),dist_n.promise=(e,r,n)=>{let l=dist_n.loading(r.loading,{...n,...null==n?void 0:n.loading});return e.then(e=>(dist_n.success(T(r.success,e),{id:l,...n,...null==n?void 0:n.success}),e)).catch(e=>{dist_n.error(T(r.error,e),{id:l,...n,...null==n?void 0:n.error})}),e};var Z=(e,r)=>{dist_u({type:1,toast:{id:e,height:r}})},ee=()=>{dist_u({type:5,time:Date.now()})},D=e=>{let{toasts:r,pausedAt:n}=I(e);(0,g.useEffect)(()=>{if(n)return;let e=Date.now(),l=r.map(r=>{if(r.duration===1/0)return;let n=(r.duration||0)+r.pauseDuration-(e-r.createdAt);if(n<0){r.visible&&dist_n.dismiss(r.id);return}return setTimeout(()=>dist_n.dismiss(r.id),n)});return()=>{l.forEach(e=>e&&clearTimeout(e))}},[r,n]);let l=(0,g.useCallback)(()=>{n&&dist_u({type:6,time:Date.now()})},[n]),d=(0,g.useCallback)((e,n)=>{let{reverseOrder:l=!1,gutter:d=8,defaultPosition:c}=n||{},f=r.filter(r=>(r.position||c)===(e.position||c)&&r.height),h=f.findIndex(r=>r.id===e.id),g=f.filter((e,r)=>r<h&&e.visible).length;return f.filter(e=>e.visible).slice(...l?[g+1]:[0,g]).reduce((e,r)=>e+(r.height||0)+d,0)},[r]);return{toasts:r,handlers:{updateHeight:Z,startPause:ee,endPause:l,calculateOffset:d}}},S=C`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,F=C`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,L=C`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,H=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${S} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${F} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${L} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,B=C`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,V=j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${B} 1s linear infinite;
`,U=C`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Y=C`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,K=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${U} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Y} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Q=j("div")`
  position: absolute;
`,X=j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,et=C`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,er=j("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${et} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,M=({toast:e})=>{let{icon:r,type:n,iconTheme:l}=e;return void 0!==r?"string"==typeof r?g.createElement(er,null,r):r:"blank"===n?null:g.createElement(X,null,g.createElement(V,{...l}),"loading"!==n&&g.createElement(Q,null,"error"===n?g.createElement(H,{...l}):g.createElement(K,{...l})))},ye=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ge=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,ei=j("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,es=j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Ae=(e,r)=>{let n=e.includes("top")?1:-1,[l,d]=dist_b()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[ye(n),ge(n)];return{animation:r?`${C(l)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${C(d)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ea=g.memo(({toast:e,position:r,style:n,children:l})=>{let d=e.height?Ae(e.position||r||"top-center",e.visible):{opacity:0},c=g.createElement(M,{toast:e}),f=g.createElement(es,{...e.ariaProps},T(e.message,e));return g.createElement(ei,{className:e.className,style:{...d,...n,...e.style}},"function"==typeof l?l({icon:c,message:f}):g.createElement(g.Fragment,null,c,f))});m(g.createElement);var Ee=({id:e,className:r,style:n,onHeightUpdate:l,children:d})=>{let c=g.useCallback(r=>{if(r){let i=()=>{l(e,r.getBoundingClientRect().height)};i(),new MutationObserver(i).observe(r,{subtree:!0,childList:!0,characterData:!0})}},[e,l]);return g.createElement("div",{ref:c,className:r,style:n},d)},Re=(e,r)=>{let n=e.includes("top"),l=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:dist_b()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${r*(n?1:-1)}px)`,...n?{top:0}:{bottom:0},...l}},eo=u`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Ie=({reverseOrder:e,position:r="top-center",toastOptions:n,gutter:l,children:d,containerStyle:c,containerClassName:f})=>{let{toasts:h,handlers:b}=D(n);return g.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...c},className:f,onMouseEnter:b.startPause,onMouseLeave:b.endPause},h.map(n=>{let c=n.position||r,f=Re(c,b.calculateOffset(n,{reverseOrder:e,gutter:l,defaultPosition:r}));return g.createElement(Ee,{id:n.id,key:n.id,onHeightUpdate:b.updateHeight,className:n.visible?eo:"",style:f},"custom"===n.type?T(n.message,n):d?d(n):g.createElement(ea,{toast:n,position:c}))}))},page=()=>{let copyEmail=()=>{navigator.clipboard.writeText("choi.kurt3@gmail.com"),dist_n.success("Copied to clipboard!",{id:"clipboard"})};return(0,c.jsxs)("div",{className:"flex-col mt-48 text-white h-screen backdrop-blur-0 bg-black/0",children:[(0,c.jsx)(Ie,{}),(0,c.jsx)("div",{className:"relative z-0 -mb-36 rounded-full blur-[128px] opacity-100 w-48 h-48 bg-blue-500 top-20 left-40"}),(0,c.jsx)("div",{className:"relative z-0 -mb-36 rounded-full blur-[96px] opacity-75 w-36 h-48 bg-purple-300 top-20 -left-10"}),(0,c.jsxs)("div",{className:"flex flex-col items-center space-y-2",children:[(0,c.jsx)("div",{className:"flex mx-auto z-10",children:(0,c.jsx)(h(),{href:"https://www.linkedin.com/in/kurtchoi/",target:"_blank",children:(0,c.jsxs)("button",{type:"button",className:"text-white bg-[#0077b5] hover:bg-[#0077b5]/90 focus:ring-4 focus:outline-none focus:ring-[#0077b5]/50 font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#0077b5]/30 me-2",children:[(0,c.jsx)("svg",{className:"w-6 h-6 me-1",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",children:(0,c.jsx)("path",{d:"M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"})}),(0,c.jsx)("span",{className:"font-semibold tracking-tight",children:"LinkedIn"})]})})}),(0,c.jsx)("div",{className:"flex mx-auto z-10",children:(0,c.jsx)(h(),{href:"https://www.github.com/Hintful",target:"_blank",children:(0,c.jsxs)("button",{type:"button",className:"text-white z-10 bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-4 py-3 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2",children:[(0,c.jsx)("svg",{className:"w-4 h-4 me-2","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20",children:(0,c.jsx)("path",{fillRule:"evenodd",d:"M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z",clipRule:"evenodd"})}),(0,c.jsx)("span",{className:"font-semibold tracking-tight",children:"GitHub"})]})})}),(0,c.jsxs)("div",{className:"flex pt-4",children:[(0,c.jsx)("div",{className:"flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-e-0 border-gray-300 dark:border-gray-700 dark:text-white rounded-s-lg focus:ring-4 dark:bg-gray-600 dark:focus:ring-gray-800",type:"button",children:(0,c.jsx)("svg",{className:"w-5 h-5",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",children:(0,c.jsx)("path",{strokeLinecap:"round",d:"M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"})})}),(0,c.jsxs)("div",{className:"relative w-full",children:[(0,c.jsx)("input",{className:"block p-2.5 w-56 z-20 text-sm text-white border-gray-600 bg-gray-700 rounded-e-lg rounded-s-gray-100 border outline-none focus:outline-none",value:"choi.kurt3@gmail.com",readOnly:!0}),(0,c.jsx)("button",{onClick:()=>copyEmail(),className:"absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:outline-none",children:"Copy"})]})]})]})]})}},622:function(e,r,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l=n(2265),d=Symbol.for("react.element"),c=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),f=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function q(e,r,n){var l,g={},b=null,y=null;for(l in void 0!==n&&(b=""+n),void 0!==r.key&&(b=""+r.key),void 0!==r.ref&&(y=r.ref),r)c.call(r,l)&&!h.hasOwnProperty(l)&&(g[l]=r[l]);if(e&&e.defaultProps)for(l in r=e.defaultProps)void 0===g[l]&&(g[l]=r[l]);return{$$typeof:d,type:e,key:b,ref:y,props:g,_owner:f.current}}r.jsx=q,r.jsxs=q},7437:function(e,r,n){"use strict";e.exports=n(622)},1396:function(e,r,n){e.exports=n(8326)}},function(e){e.O(0,[326,971,472,744],function(){return e(e.s=50)}),_N_E=e.O()}]);