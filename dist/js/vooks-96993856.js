import{r as l,K as o,j as E,c as _,a as S,b as R,k as y,l as P,B as U}from"./@vue-8ef811c2.js";import{o as c,a as d}from"./evtd-b614532e.js";function Q(e){const n=l(!!e.value);if(n.value)return o(n);const t=E(e,i=>{i&&(n.value=!0,t())});return o(n)}function W(e){const n=_(e),t=l(n.value);return E(n,i=>{t.value=i}),typeof e=="function"?t:{__v_isRef:!0,get value(){return t.value},set value(i){e.set(i)}}}function I(){return S()!==null}const $=typeof window<"u";let h,p;const X=()=>{var e,n;h=$?(n=(e=document)===null||e===void 0?void 0:e.fonts)===null||n===void 0?void 0:n.ready:void 0,p=!1,h!==void 0?h.then(()=>{p=!0}):p=!0};X();function Z(e){if(p)return;let n=!1;R(()=>{p||h==null||h.then(()=>{n||e()})}),y(()=>{n=!0})}const w=l(null);function D(e){if(e.clientX>0||e.clientY>0)w.value={x:e.clientX,y:e.clientY};else{const{target:n}=e;if(n instanceof Element){const{left:t,top:i,width:f,height:s}=n.getBoundingClientRect();t>0||i>0?w.value={x:t+f/2,y:i+s/2}:w.value={x:0,y:0}}else w.value=null}}let M=0,H=!0;function O(){if(!$)return o(l(null));M===0&&c("click",document,D,!0);const e=()=>{M+=1};return H&&(H=I())?(P(e),y(()=>{M-=1,M===0&&d("click",document,D,!0)})):e(),o(w)}const Y=l(void 0);let b=0;function j(){Y.value=Date.now()}let F=!0;function ee(e){if(!$)return o(l(!1));const n=l(!1);let t=null;function i(){t!==null&&window.clearTimeout(t)}function f(){i(),n.value=!0,t=window.setTimeout(()=>{n.value=!1},e)}b===0&&c("click",window,j,!0);const s=()=>{b+=1,c("click",window,f,!0)};return F&&(F=I())?(P(s),y(()=>{b-=1,b===0&&d("click",window,j,!0),d("click",window,f,!0),i()})):s(),o(n)}let C=0;const V=typeof window<"u"&&window.matchMedia!==void 0,v=l(null);let u,m;function L(e){e.matches&&(v.value="dark")}function T(e){e.matches&&(v.value="light")}function z(){u=window.matchMedia("(prefers-color-scheme: dark)"),m=window.matchMedia("(prefers-color-scheme: light)"),u.matches?v.value="dark":m.matches?v.value="light":v.value=null,u.addEventListener?(u.addEventListener("change",L),m.addEventListener("change",T)):u.addListener&&(u.addListener(L),m.addListener(T))}function A(){"removeEventListener"in u?(u.removeEventListener("change",L),m.removeEventListener("change",T)):"removeListener"in u&&(u.removeListener(L),m.removeListener(T)),u=void 0,m=void 0}let K=!0;function ne(){return V?(C===0&&z(),K&&(K=I())&&(P(()=>{C+=1}),y(()=>{C-=1,C===0&&A()})),o(v)):o(v)}function te(e,n){return E(e,t=>{t!==void 0&&(n.value=t)}),_(()=>e.value===void 0?n.value:e.value)}function ie(){const e=l(!1);return R(()=>{e.value=!0}),o(e)}function ae(e,n){return _(()=>{for(const t of n)if(e[t]!==void 0)return e[t];return e[n[n.length-1]]})}const G=(typeof window>"u"?!1:/iPad|iPhone|iPod/.test(navigator.platform)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!window.MSStream;function ue(){return G}function oe(e={},n){const t=U({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:i,keyup:f}=e,s=a=>{switch(a.key){case"Control":t.ctrl=!0;break;case"Meta":t.command=!0,t.win=!0;break;case"Shift":t.shift=!0;break;case"Tab":t.tab=!0;break}i!==void 0&&Object.keys(i).forEach(k=>{if(k!==a.key)return;const r=i[k];if(typeof r=="function")r(a);else{const{stop:x=!1,prevent:B=!1}=r;x&&a.stopPropagation(),B&&a.preventDefault(),r.handler(a)}})},g=a=>{switch(a.key){case"Control":t.ctrl=!1;break;case"Meta":t.command=!1,t.win=!1;break;case"Shift":t.shift=!1;break;case"Tab":t.tab=!1;break}f!==void 0&&Object.keys(f).forEach(k=>{if(k!==a.key)return;const r=f[k];if(typeof r=="function")r(a);else{const{stop:x=!1,prevent:B=!1}=r;x&&a.stopPropagation(),B&&a.preventDefault(),r.handler(a)}})},q=()=>{(n===void 0||n.value)&&(c("keydown",document,s),c("keyup",document,g)),n!==void 0&&E(n,a=>{a?(c("keydown",document,s),c("keyup",document,g)):(d("keydown",document,s),d("keyup",document,g))})};return I()?(P(q),y(()=>{(n===void 0||n.value)&&(d("keydown",document,s),d("keyup",document,g))})):q(),o(t)}export{ue as a,te as b,ae as c,oe as d,ee as e,O as f,Q as g,ne as h,ie as i,Z as o,W as u};