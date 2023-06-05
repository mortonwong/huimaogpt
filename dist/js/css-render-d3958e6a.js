import{m as b}from"./@emotion-8a8e73f6.js";function _(n){let e=0;for(let t=0;t<n.length;++t)n[t]==="&"&&++e;return e}const $=/\s*,(?![^(]*\))\s*/g,j=/\s+/g;function R(n,e){const t=[];return e.split($).forEach(r=>{let u=_(r);if(u){if(u===1){n.forEach(f=>{t.push(r.replace("&",f))});return}}else{n.forEach(f=>{t.push((f&&f+" ")+r)});return}let i=[r];for(;u--;){const f=[];i.forEach(o=>{n.forEach(l=>{f.push(o.replace("&",l))})}),i=f}i.forEach(f=>t.push(f))}),t}function q(n,e){const t=[];return e.split($).forEach(r=>{n.forEach(u=>{t.push((u&&u+" ")+r)})}),t}function v(n){let e=[""];return n.forEach(t=>{t=t&&t.trim(),t&&(t.includes("&")?e=R(e,t):e=q(e,t))}),e.join(", ").replace(j," ")}function x(n){if(!n)return;const e=n.parentElement;e&&e.removeChild(n)}function m(n){return document.querySelector(`style[cssr-id="${n}"]`)}function k(n){const e=document.createElement("style");return e.setAttribute("cssr-id",n),e}function h(n){return n?/^\s*@(s|m)/.test(n):!1}const S=/[A-Z]/g;function C(n){return n.replace(S,e=>"-"+e.toLowerCase())}function B(n,e="  "){return typeof n=="object"&&n!==null?` {
`+Object.entries(n).map(t=>e+`  ${C(t[0])}: ${t[1]};`).join(`
`)+`
`+e+"}":`: ${n};`}function L(n,e,t){return typeof n=="function"?n({context:e.context,props:t}):n}function E(n,e,t,r){if(!e)return"";const u=L(e,t,r);if(!u)return"";if(typeof u=="string")return`${n} {
${u}
}`;const i=Object.keys(u);if(i.length===0)return t.config.keepEmptyBlock?n+` {
}`:"";const f=n?[n+" {"]:[];return i.forEach(o=>{const l=u[o];if(o==="raw"){f.push(`
`+l+`
`);return}o=C(o),l!=null&&f.push(`  ${o}${B(l)}`)}),n&&f.push("}"),f.join(`
`)}function y(n,e,t){n&&n.forEach(r=>{if(Array.isArray(r))y(r,e,t);else if(typeof r=="function"){const u=r(e);Array.isArray(u)?y(u,e,t):u&&t(u)}else r&&t(r)})}function w(n,e,t,r,u,i){const f=n.$;let o="";if(!f||typeof f=="string")h(f)?o=f:e.push(f);else if(typeof f=="function"){const s=f({context:r.context,props:u});h(s)?o=s:e.push(s)}else if(f.before&&f.before(r.context),!f.$||typeof f.$=="string")h(f.$)?o=f.$:e.push(f.$);else if(f.$){const s=f.$({context:r.context,props:u});h(s)?o=s:e.push(s)}const l=v(e),c=E(l,n.props,r,u);o?(t.push(`${o} {`),i&&c&&i.insertRule(`${o} {
${c}
}
`)):(i&&c&&i.insertRule(c),!i&&c.length&&t.push(c)),n.children&&y(n.children,{context:r.context,props:u},s=>{if(typeof s=="string"){const a=E(l,{raw:s},r,u);i?i.insertRule(a):t.push(a)}else w(s,e,t,r,u,i)}),e.pop(),o&&t.push("}"),f&&f.after&&f.after(r.context)}function A(n,e,t,r=!1){const u=[];return w(n,[],u,e,t,r?n.instance.__styleSheet:void 0),r?"":u.join(`

`)}typeof window<"u"&&(window.__cssrContext={});function M(n,e,t){const{els:r}=e;if(t===void 0)r.forEach(x),e.els=[];else{const u=m(t);u&&r.includes(u)&&(x(u),e.els=r.filter(i=>i!==u))}}function g(n,e){n.push(e)}function O(n,e,t,r,u,i,f,o,l){if(i&&!l){if(t===void 0){console.error("[css-render/mount]: `id` is required in `silent` mode.");return}const d=window.__cssrContext;d[t]||(d[t]=!0,A(e,n,r,i));return}let c;if(t===void 0&&(c=e.render(r),t=b(c)),l){l.adapter(t,c??e.render(r));return}const s=m(t);if(s!==null&&!f)return s;const a=s??k(t);if(c===void 0&&(c=e.render(r)),a.textContent=c,s!==null)return s;if(o){const d=document.head.querySelector(`meta[name="${o}"]`);if(d)return document.head.insertBefore(a,d),g(e.els,a),a}return u?document.head.insertBefore(a,document.head.querySelector("style, link")):document.head.appendChild(a),g(e.els,a),a}function T(n){return A(this,this.instance,n)}function W(n={}){const{id:e,ssr:t,props:r,head:u=!1,silent:i=!1,force:f=!1,anchorMetaName:o}=n;return O(this.instance,this,e,r,u,i,f,o,t)}function U(n={}){const{id:e}=n;M(this.instance,this,e)}const p=function(n,e,t,r){return{instance:n,$:e,props:t,children:r,els:[],render:T,mount:W,unmount:U}},Z=function(n,e,t,r){return Array.isArray(e)?p(n,{$:null},null,e):Array.isArray(t)?p(n,e,null,t):Array.isArray(r)?p(n,e,t,r):p(n,e,t,null)};function D(n={}){let e=null;const t={c:(...r)=>Z(t,...r),use:(r,...u)=>r.install(t,...u),find:m,context:{},config:n,get __styleSheet(){if(!e){const r=document.createElement("style");return document.head.appendChild(r),e=document.styleSheets[document.styleSheets.length-1],e}return e}};return t}function F(n,e){if(n===void 0)return!1;if(e){const{context:{ids:t}}=e;return t.has(n)}return m(n)!==null}export{D as C,F as e};
