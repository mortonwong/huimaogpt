import{g as I,o as b,c as E,r as d,a as P,b as $,n as x,w as S}from"./@vue-592ec505.js";var f;const y=typeof window<"u";y&&((f=window==null?void 0:window.navigator)!=null&&f.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function N(e){return e}function Q(e,n){var t;if(typeof e=="number")return e+n;const u=((t=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:t[0])||"",a=e.slice(u.length),s=parseFloat(u)+n;return Number.isNaN(s)?e:s+a}function C(e){return I()?(b(e),!0):!1}function T(e){return typeof e=="function"?E(e):d(e)}function L(e,n=!0){P()?$(e):n?e():x(e)}const g=y?window:void 0;function M(e,n=!1){const t=d(),u=()=>t.value=!!e();return u(),L(u,n),t}function l(e,n={}){const{window:t=g}=n,u=M(()=>t&&"matchMedia"in t&&typeof t.matchMedia=="function");let a;const s=d(!1),c=()=>{a&&("removeEventListener"in a?a.removeEventListener("change",r):a.removeListener(r))},r=()=>{u.value&&(c(),a=t.matchMedia(T(e).value),s.value=a.matches,"addEventListener"in a?a.addEventListener("change",r):a.addListener(r))};return S(r),C(()=>c()),s}const H={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var j=Object.defineProperty,m=Object.getOwnPropertySymbols,B=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable,p=(e,n,t)=>n in e?j(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,G=(e,n)=>{for(var t in n||(n={}))B.call(n,t)&&p(e,t,n[t]);if(m)for(var t of m(n))q.call(n,t)&&p(e,t,n[t]);return e};function k(e,n={}){function t(r,i){let o=e[r];return i!=null&&(o=Q(o,i)),typeof o=="number"&&(o=`${o}px`),o}const{window:u=g}=n;function a(r){return u?u.matchMedia(r).matches:!1}const s=r=>l(`(min-width: ${t(r)})`,n),c=Object.keys(e).reduce((r,i)=>(Object.defineProperty(r,i,{get:()=>s(i),enumerable:!0,configurable:!0}),r),{});return G({greater(r){return l(`(min-width: ${t(r,.1)})`,n)},greaterOrEqual:s,smaller(r){return l(`(max-width: ${t(r,-.1)})`,n)},smallerOrEqual(r){return l(`(max-width: ${t(r)})`,n)},between(r,i){return l(`(min-width: ${t(r)}) and (max-width: ${t(i,-.1)})`,n)},isGreater(r){return a(`(min-width: ${t(r,.1)})`)},isGreaterOrEqual(r){return a(`(min-width: ${t(r)})`)},isSmaller(r){return a(`(max-width: ${t(r,-.1)})`)},isSmallerOrEqual(r){return a(`(max-width: ${t(r)})`)},isInBetween(r,i){return a(`(min-width: ${t(r)}) and (max-width: ${t(i,-.1)})`)}},c)}const O=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},w="__vueuse_ssr_handlers__";O[w]=O[w]||{};var v;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(v||(v={}));var W=Object.defineProperty,h=Object.getOwnPropertySymbols,F=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable,_=(e,n,t)=>n in e?W(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,U=(e,n)=>{for(var t in n||(n={}))F.call(n,t)&&_(e,t,n[t]);if(h)for(var t of h(n))R.call(n,t)&&_(e,t,n[t]);return e};const V={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};U({linear:N},V);export{H as b,k as u};