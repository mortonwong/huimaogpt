import{r as M,af as vt,c as W,a as s,ag as V,ah as ie,f as Ve,ai as pt,aj as mt,d as J,u as Ne,g as de,ak as gt,b as bt,h as _,t as yt,e as wt,al as Me,Z as pe,am as xt,i as ge,j as kt,k as be,l as w,V as $t,m as _t,an as St,o as Ct,T as Ae,ao as le,ap as re,z as Ie,aq as zt,ar as Rt,as as Tt,at as Vt,au as Mt,av as It,a0 as Dt,A as Bt,K as Pt,U as Ue,B as E,C as Z,J as i,S as Nt,D as d,Q as f,W as p,X as x,_ as K,a3 as B,a4 as U,aw as At,I as Ut,aa as Ht,ax as Et,L as q,ay as Ft,N as jt,a2 as He,M as Ot,F as ye,R as we,az as Lt,aA as Gt,aB as me,aC as Wt,a5 as Kt}from"./index-d7e78549.js";function De(n){return window.TouchEvent&&n instanceof window.TouchEvent}function Be(){const n=M(new Map),a=v=>l=>{n.value.set(v,l)};return vt(()=>n.value.clear()),[n,a]}const Yt=W([s("slider",`
 display: block;
 padding: calc((var(--n-handle-size) - var(--n-rail-height)) / 2) 0;
 position: relative;
 z-index: 0;
 width: 100%;
 cursor: pointer;
 user-select: none;
 -webkit-user-select: none;
 `,[V("reverse",[s("slider-handles",[s("slider-handle-wrapper",`
 transform: translate(50%, -50%);
 `)]),s("slider-dots",[s("slider-dot",`
 transform: translateX(50%, -50%);
 `)]),V("vertical",[s("slider-handles",[s("slider-handle-wrapper",`
 transform: translate(-50%, -50%);
 `)]),s("slider-marks",[s("slider-mark",`
 transform: translateY(calc(-50% + var(--n-dot-height) / 2));
 `)]),s("slider-dots",[s("slider-dot",`
 transform: translateX(-50%) translateY(0);
 `)])])]),V("vertical",`
 padding: 0 calc((var(--n-handle-size) - var(--n-rail-height)) / 2);
 width: var(--n-rail-width-vertical);
 height: 100%;
 `,[s("slider-handles",`
 top: calc(var(--n-handle-size) / 2);
 right: 0;
 bottom: calc(var(--n-handle-size) / 2);
 left: 0;
 `,[s("slider-handle-wrapper",`
 top: unset;
 left: 50%;
 transform: translate(-50%, 50%);
 `)]),s("slider-rail",`
 height: 100%;
 `,[ie("fill",`
 top: unset;
 right: 0;
 bottom: unset;
 left: 0;
 `)]),V("with-mark",`
 width: var(--n-rail-width-vertical);
 margin: 0 32px 0 8px;
 `),s("slider-marks",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 22px;
 font-size: var(--n-mark-font-size);
 `,[s("slider-mark",`
 transform: translateY(50%);
 white-space: nowrap;
 `)]),s("slider-dots",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 50%;
 `,[s("slider-dot",`
 transform: translateX(-50%) translateY(50%);
 `)])]),V("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `,[s("slider-handle",`
 cursor: not-allowed;
 `)]),V("with-mark",`
 width: 100%;
 margin: 8px 0 32px 0;
 `),W("&:hover",[s("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[ie("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),s("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),V("active",[s("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[ie("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),s("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),s("slider-marks",`
 position: absolute;
 top: 18px;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[s("slider-mark",`
 position: absolute;
 transform: translateX(-50%);
 white-space: nowrap;
 `)]),s("slider-rail",`
 width: 100%;
 position: relative;
 height: var(--n-rail-height);
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 border-radius: calc(var(--n-rail-height) / 2);
 `,[ie("fill",`
 position: absolute;
 top: 0;
 bottom: 0;
 border-radius: calc(var(--n-rail-height) / 2);
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-fill-color);
 `)]),s("slider-handles",`
 position: absolute;
 top: 0;
 right: calc(var(--n-handle-size) / 2);
 bottom: 0;
 left: calc(var(--n-handle-size) / 2);
 `,[s("slider-handle-wrapper",`
 outline: none;
 position: absolute;
 top: 50%;
 transform: translate(-50%, -50%);
 cursor: pointer;
 display: flex;
 `,[s("slider-handle",`
 height: var(--n-handle-size);
 width: var(--n-handle-size);
 border-radius: 50%;
 overflow: hidden;
 transition: box-shadow .2s var(--n-bezier), background-color .3s var(--n-bezier);
 background-color: var(--n-handle-color);
 box-shadow: var(--n-handle-box-shadow);
 `,[W("&:hover",`
 box-shadow: var(--n-handle-box-shadow-hover);
 `)]),W("&:focus",[s("slider-handle",`
 box-shadow: var(--n-handle-box-shadow-focus);
 `,[W("&:hover",`
 box-shadow: var(--n-handle-box-shadow-active);
 `)])])])]),s("slider-dots",`
 position: absolute;
 top: 50%;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[V("transition-disabled",[s("slider-dot","transition: none;")]),s("slider-dot",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 transform: translate(-50%, -50%);
 height: var(--n-dot-height);
 width: var(--n-dot-width);
 border-radius: var(--n-dot-border-radius);
 overflow: hidden;
 box-sizing: border-box;
 border: var(--n-dot-border);
 background-color: var(--n-dot-color);
 `,[V("active","border: var(--n-dot-border-active);")])])]),s("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[Ve()]),s("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[V("top",`
 margin-bottom: 12px;
 `),V("right",`
 margin-left: 12px;
 `),V("bottom",`
 margin-top: 12px;
 `),V("left",`
 margin-right: 12px;
 `),Ve()]),pt(s("slider",[s("slider-dot","background-color: var(--n-dot-color-modal);")])),mt(s("slider",[s("slider-dot","background-color: var(--n-dot-color-popover);")]))]),Xt=0,Jt=Object.assign(Object.assign({},de.props),{to:be.propTo,defaultValue:{type:[Number,Array],default:0},marks:Object,disabled:{type:Boolean,default:void 0},formatTooltip:Function,keyboard:{type:Boolean,default:!0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:[Number,String],default:1},range:Boolean,value:[Number,Array],placement:String,showTooltip:{type:Boolean,default:void 0},tooltip:{type:Boolean,default:!0},vertical:Boolean,reverse:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),Pe=J({name:"Slider",props:Jt,setup(n){const{mergedClsPrefixRef:a,namespaceRef:v,inlineThemeDisabled:l}=Ne(n),h=de("Slider","-slider",Yt,gt,n,a),c=M(null),[r,b]=Be(),[y,g]=Be(),S=M(new Set),A=bt(n),{mergedDisabledRef:I}=A,F=_(()=>{const{step:e}=n;if(e<=0||e==="mark")return 0;const t=e.toString();let o=0;return t.includes(".")&&(o=t.length-t.indexOf(".")-1),o}),k=M(n.defaultValue),P=yt(n,"value"),z=wt(P,k),$=_(()=>{const{value:e}=z;return(n.range?e:[e]).map(Ce)}),j=_(()=>$.value.length>2),O=_(()=>n.placement===void 0?n.vertical?"right":"top":n.placement),xe=_(()=>{const{marks:e}=n;return e?Object.keys(e).map(parseFloat):null}),D=M(-1),ke=M(-1),L=M(-1),G=M(!1),Q=M(!1),ce=_(()=>{const{vertical:e,reverse:t}=n;return e?t?"top":"bottom":t?"right":"left"}),Ee=_(()=>{if(j.value)return;const e=$.value,t=ee(n.range?Math.min(...e):n.min),o=ee(n.range?Math.max(...e):e[0]),{value:u}=ce;return n.vertical?{[u]:`${t}%`,height:`${o-t}%`}:{[u]:`${t}%`,width:`${o-t}%`}}),Fe=_(()=>{const e=[],{marks:t}=n;if(t){const o=$.value.slice();o.sort((R,T)=>R-T);const{value:u}=ce,{value:m}=j,{range:C}=n,N=m?()=>!1:R=>C?R>=o[0]&&R<=o[o.length-1]:R<=o[0];for(const R of Object.keys(t)){const T=Number(R);e.push({active:N(T),label:t[R],style:{[u]:`${ee(T)}%`}})}}return e});function je(e,t){const o=ee(e),{value:u}=ce;return{[u]:`${o}%`,zIndex:t===D.value?1:0}}function $e(e){return n.showTooltip||L.value===e||D.value===e&&G.value}function Oe(e){return G.value?!(D.value===e&&ke.value===e):!0}function Le(e){var t;~e&&(D.value=e,(t=r.value.get(e))===null||t===void 0||t.focus())}function Ge(){y.value.forEach((e,t)=>{$e(t)&&e.syncPosition()})}function _e(e){const{"onUpdate:value":t,onUpdateValue:o}=n,{nTriggerFormInput:u,nTriggerFormChange:m}=A;o&&Ie(o,e),t&&Ie(t,e),k.value=e,u(),m()}function Se(e){const{range:t}=n;if(t){if(Array.isArray(e)){const{value:o}=$;e.join()!==o.join()&&_e(e)}}else Array.isArray(e)||$.value[0]!==e&&_e(e)}function ue(e,t){if(n.range){const o=$.value.slice();o.splice(t,1,e),Se(o)}else Se(e)}function he(e,t,o){const u=o!==void 0;o||(o=e-t>0?1:-1);const m=xe.value||[],{step:C}=n;if(C==="mark"){const T=te(e,m.concat(t),u?o:void 0);return T?T.value:t}if(C<=0)return t;const{value:N}=F;let R;if(u){const T=Number((t/C).toFixed(N)),H=Math.floor(T),fe=T>H?H:H-1,ve=T<H?H:H+1;R=te(t,[Number((fe*C).toFixed(N)),Number((ve*C).toFixed(N)),...m],o)}else{const T=Ke(e);R=te(e,[...m,T])}return R?Ce(R.value):t}function Ce(e){return Math.min(n.max,Math.max(n.min,e))}function ee(e){const{max:t,min:o}=n;return(e-o)/(t-o)*100}function We(e){const{max:t,min:o}=n;return o+(t-o)*e}function Ke(e){const{step:t,min:o}=n;if(t<=0||t==="mark")return e;const u=Math.round((e-o)/t)*t+o;return Number(u.toFixed(F.value))}function te(e,t=xe.value,o){if(!(t!=null&&t.length))return null;let u=null,m=-1;for(;++m<t.length;){const C=t[m]-e,N=Math.abs(C);(o===void 0||C*o>0)&&(u===null||N<u.distance)&&(u={index:m,distance:N,value:t[m]})}return u}function ze(e){const t=c.value;if(!t)return;const o=De(e)?e.touches[0]:e,u=t.getBoundingClientRect();let m;return n.vertical?m=(u.bottom-o.clientY)/u.height:m=(o.clientX-u.left)/u.width,n.reverse&&(m=1-m),We(m)}function Ye(e){if(I.value||!n.keyboard)return;const{vertical:t,reverse:o}=n;switch(e.key){case"ArrowUp":e.preventDefault(),ne(t&&o?-1:1);break;case"ArrowRight":e.preventDefault(),ne(!t&&o?-1:1);break;case"ArrowDown":e.preventDefault(),ne(t&&o?1:-1);break;case"ArrowLeft":e.preventDefault(),ne(!t&&o?1:-1);break}}function ne(e){const t=D.value;if(t===-1)return;const{step:o}=n,u=$.value[t],m=o<=0||o==="mark"?u:u+o*e;ue(he(m,u,e>0?1:-1),t)}function Xe(e){var t,o;if(I.value||!De(e)&&e.button!==Xt)return;const u=ze(e);if(u===void 0)return;const m=$.value.slice(),C=n.range?(o=(t=te(u,m))===null||t===void 0?void 0:t.index)!==null&&o!==void 0?o:-1:0;C!==-1&&(e.preventDefault(),Le(C),Je(),ue(he(u,$.value[C]),C))}function Je(){G.value||(G.value=!0,le("touchend",document,se),le("mouseup",document,se),le("touchmove",document,ae),le("mousemove",document,ae))}function oe(){G.value&&(G.value=!1,re("touchend",document,se),re("mouseup",document,se),re("touchmove",document,ae),re("mousemove",document,ae))}function ae(e){const{value:t}=D;if(!G.value||t===-1){oe();return}const o=ze(e);ue(he(o,$.value[t]),t)}function se(){oe()}function qe(e){D.value=e,I.value||(L.value=e)}function Ze(e){D.value===e&&(D.value=-1,oe()),L.value===e&&(L.value=-1)}function Qe(e){L.value=e}function et(e){L.value===e&&(L.value=-1)}Me(D,(e,t)=>void pe(()=>ke.value=t)),Me(z,()=>{if(n.marks){if(Q.value)return;Q.value=!0,pe(()=>{Q.value=!1})}pe(Ge)}),xt(()=>{oe()});const Re=_(()=>{const{self:{markFontSize:e,railColor:t,railColorHover:o,fillColor:u,fillColorHover:m,handleColor:C,opacityDisabled:N,dotColor:R,dotColorModal:T,handleBoxShadow:H,handleBoxShadowHover:fe,handleBoxShadowActive:ve,handleBoxShadowFocus:tt,dotBorder:nt,dotBoxShadow:ot,railHeight:at,railWidthVertical:st,handleSize:it,dotHeight:lt,dotWidth:rt,dotBorderRadius:dt,fontSize:ct,dotBorderActive:ut,dotColorPopover:ht},common:{cubicBezierEaseInOut:ft}}=h.value;return{"--n-bezier":ft,"--n-dot-border":nt,"--n-dot-border-active":ut,"--n-dot-border-radius":dt,"--n-dot-box-shadow":ot,"--n-dot-color":R,"--n-dot-color-modal":T,"--n-dot-color-popover":ht,"--n-dot-height":lt,"--n-dot-width":rt,"--n-fill-color":u,"--n-fill-color-hover":m,"--n-font-size":ct,"--n-handle-box-shadow":H,"--n-handle-box-shadow-active":ve,"--n-handle-box-shadow-focus":tt,"--n-handle-box-shadow-hover":fe,"--n-handle-color":C,"--n-handle-size":it,"--n-opacity-disabled":N,"--n-rail-color":t,"--n-rail-color-hover":o,"--n-rail-height":at,"--n-rail-width-vertical":st,"--n-mark-font-size":e}}),Y=l?ge("slider",void 0,Re,n):void 0,Te=_(()=>{const{self:{fontSize:e,indicatorColor:t,indicatorBoxShadow:o,indicatorTextColor:u,indicatorBorderRadius:m}}=h.value;return{"--n-font-size":e,"--n-indicator-border-radius":m,"--n-indicator-box-shadow":o,"--n-indicator-color":t,"--n-indicator-text-color":u}}),X=l?ge("slider-indicator",void 0,Te,n):void 0;return{mergedClsPrefix:a,namespace:v,uncontrolledValue:k,mergedValue:z,mergedDisabled:I,mergedPlacement:O,isMounted:kt(),adjustedTo:be(n),dotTransitionDisabled:Q,markInfos:Fe,isShowTooltip:$e,shouldKeepTooltipTransition:Oe,handleRailRef:c,setHandleRefs:b,setFollowerRefs:g,fillStyle:Ee,getHandleStyle:je,activeIndex:D,arrifiedValues:$,followerEnabledIndexSet:S,handleRailMouseDown:Xe,handleHandleFocus:qe,handleHandleBlur:Ze,handleHandleMouseEnter:Qe,handleHandleMouseLeave:et,handleRailKeyDown:Ye,indicatorCssVars:l?void 0:Te,indicatorThemeClass:X==null?void 0:X.themeClass,indicatorOnRender:X==null?void 0:X.onRender,cssVars:l?void 0:Re,themeClass:Y==null?void 0:Y.themeClass,onRender:Y==null?void 0:Y.onRender}},render(){var n;const{mergedClsPrefix:a,themeClass:v,formatTooltip:l}=this;return(n=this.onRender)===null||n===void 0||n.call(this),w("div",{class:[`${a}-slider`,v,{[`${a}-slider--disabled`]:this.mergedDisabled,[`${a}-slider--active`]:this.activeIndex!==-1,[`${a}-slider--with-mark`]:this.marks,[`${a}-slider--vertical`]:this.vertical,[`${a}-slider--reverse`]:this.reverse}],style:this.cssVars,onKeydown:this.handleRailKeyDown,onMousedown:this.handleRailMouseDown,onTouchstart:this.handleRailMouseDown},w("div",{class:`${a}-slider-rail`},w("div",{class:`${a}-slider-rail__fill`,style:this.fillStyle}),this.marks?w("div",{class:[`${a}-slider-dots`,this.dotTransitionDisabled&&`${a}-slider-dots--transition-disabled`]},this.markInfos.map(h=>w("div",{key:h.label,class:[`${a}-slider-dot`,{[`${a}-slider-dot--active`]:h.active}],style:h.style}))):null,w("div",{ref:"handleRailRef",class:`${a}-slider-handles`},this.arrifiedValues.map((h,c)=>{const r=this.isShowTooltip(c);return w($t,null,{default:()=>[w(_t,null,{default:()=>w("div",{ref:this.setHandleRefs(c),class:`${a}-slider-handle-wrapper`,tabindex:this.mergedDisabled?-1:0,style:this.getHandleStyle(h,c),onFocus:()=>this.handleHandleFocus(c),onBlur:()=>this.handleHandleBlur(c),onMouseenter:()=>this.handleHandleMouseEnter(c),onMouseleave:()=>this.handleHandleMouseLeave(c)},St(this.$slots.thumb,()=>[w("div",{class:`${a}-slider-handle`})]))}),this.tooltip&&w(Ct,{ref:this.setFollowerRefs(c),show:r,to:this.adjustedTo,enabled:this.showTooltip&&!this.range||this.followerEnabledIndexSet.has(c),teleportDisabled:this.adjustedTo===be.tdkey,placement:this.mergedPlacement,containerClass:this.namespace},{default:()=>w(Ae,{name:"fade-in-scale-up-transition",appear:this.isMounted,css:this.shouldKeepTooltipTransition(c),onEnter:()=>{this.followerEnabledIndexSet.add(c)},onAfterLeave:()=>{this.followerEnabledIndexSet.delete(c)}},{default:()=>{var b;return r?((b=this.indicatorOnRender)===null||b===void 0||b.call(this),w("div",{class:[`${a}-slider-handle-indicator`,this.indicatorThemeClass,`${a}-slider-handle-indicator--${this.mergedPlacement}`],style:this.indicatorCssVars},typeof l=="function"?l(h):h)):null}})})]})})),this.marks?w("div",{class:`${a}-slider-marks`},this.markInfos.map(h=>w("div",{key:h.label,class:`${a}-slider-mark`,style:h.style},h.label))):null))}}),qt=W([W("@keyframes spin-rotate",`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),s("spin-container",{position:"relative"},[s("spin-body",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[zt()])]),s("spin-body",`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),s("spin",`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[V("rotate",`
 animation: spin-rotate 2s linear infinite;
 `)]),s("spin-description",`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),s("spin-content",`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[V("spinning",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),Zt={small:20,medium:18,large:16},Qt=Object.assign(Object.assign({},de.props),{description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0}}),en=J({name:"Spin",props:Qt,setup(n){const{mergedClsPrefixRef:a,inlineThemeDisabled:v}=Ne(n),l=de("Spin","-spin",qt,Rt,n,a),h=_(()=>{const{size:r}=n,{common:{cubicBezierEaseInOut:b},self:y}=l.value,{opacitySpinning:g,color:S,textColor:A}=y,I=typeof r=="number"?Tt(r):y[Vt("size",r)];return{"--n-bezier":b,"--n-opacity-spinning":g,"--n-size":I,"--n-color":S,"--n-text-color":A}}),c=v?ge("spin",_(()=>{const{size:r}=n;return typeof r=="number"?String(r):r[0]}),h,n):void 0;return{mergedClsPrefix:a,compitableShow:Mt(n,["spinning","show"]),mergedStrokeWidth:_(()=>{const{strokeWidth:r}=n;if(r!==void 0)return r;const{size:b}=n;return Zt[typeof b=="number"?"medium":b]}),cssVars:v?void 0:h,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender}},render(){var n,a;const{$slots:v,mergedClsPrefix:l,description:h}=this,c=v.icon&&this.rotate,r=(h||v.description)&&w("div",{class:`${l}-spin-description`},h||((n=v.description)===null||n===void 0?void 0:n.call(v))),b=v.icon?w("div",{class:[`${l}-spin-body`,this.themeClass]},w("div",{class:[`${l}-spin`,c&&`${l}-spin--rotate`],style:v.default?"":this.cssVars},v.icon()),r):w("div",{class:[`${l}-spin-body`,this.themeClass]},w(It,{clsPrefix:l,style:v.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${l}-spin`}),r);return(a=this.onRender)===null||a===void 0||a.call(this),v.default?w("div",{class:[`${l}-spin-container`,this.themeClass],style:this.cssVars},w("div",{class:[`${l}-spin-content`,this.compitableShow&&`${l}-spin-content--spinning`]},v),w(Ae,{name:"fade-in-transition"},{default:()=>this.compitableShow?b:null})):b}});function tn(){const n=new Date,a=n.getDate(),v=n.getMonth()+1;return`${n.getFullYear()}-${v}-${a}`}const nn={class:"p-4 space-y-5 min-h-[200px]"},on={class:"space-y-6"},an={class:"flex-shrink-0 w-[100px]"},sn={class:"flex flex-wrap items-center gap-4"},ln={class:"flex items-center space-x-4"},rn={class:"flex-shrink-0 w-[100px]"},dn={class:"flex flex-wrap items-center gap-4"},cn={class:"flex items-center space-x-4"},un={class:"flex-shrink-0 w-[100px]"},hn={class:"flex flex-wrap items-center gap-4"},fn={class:"flex items-center space-x-4"},vn={class:"flex-shrink-0 w-[100px]"},pn=J({__name:"General",setup(n){const a=Dt(),v=Bt(),{isMobile:l}=Pt(),h=Ue(),c=_(()=>a.theme),r=_({get(){return a.language},set(k){a.setLanguage(k)}}),b=[{label:"Auto",key:"auto",icon:"ri:contrast-line"},{label:"Light",key:"light",icon:"ri:sun-foggy-line"},{label:"Dark",key:"dark",icon:"ri:moon-foggy-line"}],y=[{label:"简体中文",key:"zh-CN",value:"zh-CN"},{label:"繁體中文",key:"zh-TW",value:"zh-TW"},{label:"English",key:"en-US",value:"en-US"},{label:"한국어",key:"ko-KR",value:"ko-KR"},{label:"Русский язык",key:"ru-RU",value:"ru-RU"}];function g(){v.resetUserInfo(),h.success(q("common.success")),window.location.reload()}function S(){const k=tn(),P=localStorage.getItem("chatStorage")||"{}",z=JSON.stringify(JSON.parse(P),null,2),$=new Blob([z],{type:"application/json"}),j=URL.createObjectURL($),O=document.createElement("a");O.href=j,O.download=`chat-store_${k}.json`,document.body.appendChild(O),O.click(),document.body.removeChild(O)}function A(k){const P=k.target;if(!P||!P.files)return;const z=P.files[0];if(!z)return;const $=new FileReader;$.onload=()=>{try{const j=JSON.parse($.result);localStorage.setItem("chatStorage",JSON.stringify(j)),h.success(q("common.success")),location.reload()}catch{h.error(q("common.invalidFileFormat"))}},$.readAsText(z)}function I(){localStorage.removeItem("chatStorage"),location.reload()}function F(){const k=document.getElementById("fileInput");k&&k.click()}return(k,P)=>(E(),Z("div",nn,[i("div",on,[i("div",{class:Nt(["flex items-center space-x-4",d(l)&&"items-start"])},[i("span",an,f(k.$t("setting.chatHistory")),1),i("div",sn,[p(d(U),{size:"small",onClick:S},{icon:x(()=>[p(d(K),{icon:"ri:download-2-fill"})]),default:x(()=>[B(" "+f(k.$t("common.export")),1)]),_:1}),i("input",{id:"fileInput",type:"file",style:{display:"none"},onChange:A},null,32),p(d(U),{size:"small",onClick:F},{icon:x(()=>[p(d(K),{icon:"ri:upload-2-fill"})]),default:x(()=>[B(" "+f(k.$t("common.import")),1)]),_:1}),p(d(At),{placement:"bottom",onPositiveClick:I},{trigger:x(()=>[p(d(U),{size:"small"},{icon:x(()=>[p(d(K),{icon:"ri:close-circle-line"})]),default:x(()=>[B(" "+f(k.$t("common.clear")),1)]),_:1})]),default:x(()=>[B(" "+f(k.$t("chat.clearHistoryConfirm")),1)]),_:1})])],2),i("div",ln,[i("span",rn,f(k.$t("setting.theme")),1),i("div",dn,[(E(),Z(Ut,null,Ht(b,z=>p(d(U),{key:z.key,size:"small",type:z.key===d(c)?"primary":void 0,onClick:$=>d(a).setTheme(z.key)},{icon:x(()=>[p(d(K),{icon:z.icon},null,8,["icon"])]),_:2},1032,["type","onClick"])),64))])]),i("div",cn,[i("span",un,f(k.$t("setting.language")),1),i("div",hn,[p(d(Et),{style:{width:"140px"},value:d(r),options:y,onUpdateValue:P[0]||(P[0]=z=>d(a).setLanguage(z))},null,8,["value"])])]),i("div",fn,[i("span",vn,f(k.$t("setting.resetUserInfo")),1),p(d(U),{size:"small",onClick:g},{default:x(()=>[B(f(k.$t("common.reset")),1)]),_:1})])])]))}}),mn={class:"p-4 space-y-5 min-h-[200px]"},gn={class:"space-y-6"},bn={class:"flex items-center space-x-4"},yn={class:"flex-shrink-0 w-[120px]"},wn={class:"flex-1"},xn={class:"flex items-center space-x-4"},kn={class:"flex-shrink-0 w-[120px]"},$n={class:"flex-1"},_n={class:"flex items-center space-x-4"},Sn={class:"flex-shrink-0 w-[120px]"},Cn={class:"flex-1"},zn={class:"flex items-center space-x-4"},Rn=i("span",{class:"flex-shrink-0 w-[120px]"}," ",-1),Tn=J({__name:"Advanced",setup(n){const a=Ft(),v=Ue(),l=M(a.systemMessage??""),h=M(a.temperature??.5),c=M(a.top_p??1);function r(y){a.updateSetting(y),v.success(q("common.success"))}function b(){a.resetSetting(),v.success(q("common.success")),window.location.reload()}return(y,g)=>(E(),Z("div",mn,[i("div",gn,[i("div",bn,[i("span",yn,f(y.$t("setting.role")),1),i("div",wn,[p(d(jt),{value:l.value,"onUpdate:value":g[0]||(g[0]=S=>l.value=S),type:"textarea",autosize:{minRows:1,maxRows:4}},null,8,["value"])]),p(d(U),{size:"tiny",text:"",type:"primary",onClick:g[1]||(g[1]=S=>r({systemMessage:l.value}))},{default:x(()=>[B(f(y.$t("common.save")),1)]),_:1})]),i("div",xn,[i("span",kn,f(y.$t("setting.temperature")),1),i("div",$n,[p(d(Pe),{value:h.value,"onUpdate:value":g[2]||(g[2]=S=>h.value=S),max:1,min:0,step:.1},null,8,["value","step"])]),i("span",null,f(h.value),1),p(d(U),{size:"tiny",text:"",type:"primary",onClick:g[3]||(g[3]=S=>r({temperature:h.value}))},{default:x(()=>[B(f(y.$t("common.save")),1)]),_:1})]),i("div",_n,[i("span",Sn,f(y.$t("setting.top_p")),1),i("div",Cn,[p(d(Pe),{value:c.value,"onUpdate:value":g[4]||(g[4]=S=>c.value=S),max:1,min:0,step:.1},null,8,["value","step"])]),i("span",null,f(c.value),1),p(d(U),{size:"tiny",text:"",type:"primary",onClick:g[5]||(g[5]=S=>r({top_p:c.value}))},{default:x(()=>[B(f(y.$t("common.save")),1)]),_:1})]),i("div",zn,[Rn,p(d(U),{size:"small",onClick:b},{default:x(()=>[B(f(y.$t("common.reset")),1)]),_:1})])])]))}}),Vn="chatgpt-web",Mn="2.11.0",In="ChatGPT Web",Dn="ChenZhaoYu <chenzhaoyu1994@gmail.com>",Bn=["chatgpt-web","chatgpt","chatbot","vue"],Pn={dev:"vite",build:"run-p type-check build-only",preview:"vite preview","build-only":"vite build","type-check":"vue-tsc --noEmit",lint:"eslint .","lint:fix":"eslint . --fix",bootstrap:"pnpm install && pnpm run common:prepare","common:cleanup":"rimraf node_modules && rimraf pnpm-lock.yaml","common:prepare":"husky install"},Nn={"@traptitech/markdown-it-katex":"^3.6.0","@vueuse/core":"^9.13.0","highlight.js":"^11.7.0",html2canvas:"^1.4.1",katex:"^0.16.4","markdown-it":"^13.0.1","naive-ui":"^2.34.3",pinia:"^2.0.33",vue:"^3.2.47","vue-i18n":"^9.2.2","vue-router":"^4.1.6"},An={"@antfu/eslint-config":"^0.35.3","@commitlint/cli":"^17.4.4","@commitlint/config-conventional":"^17.4.4","@iconify/vue":"^4.1.0","@types/crypto-js":"^4.1.1","@types/katex":"^0.16.0","@types/markdown-it":"^12.2.3","@types/markdown-it-link-attributes":"^3.0.1","@types/node":"^18.14.6","@vitejs/plugin-vue":"^4.0.0",autoprefixer:"^10.4.13",axios:"^1.3.4","crypto-js":"^4.1.1",eslint:"^8.35.0",husky:"^8.0.3",less:"^4.1.3","lint-staged":"^13.1.2","markdown-it-link-attributes":"^4.0.1","npm-run-all":"^4.1.5",postcss:"^8.4.21",rimraf:"^4.2.0",tailwindcss:"^3.2.7",typescript:"~4.9.5",vite:"^4.2.0","vite-plugin-pwa":"^0.14.4","vue-tsc":"^1.2.0"},Un={name:Vn,version:Mn,private:!1,description:In,author:Dn,keywords:Bn,scripts:Pn,dependencies:Nn,devDependencies:An,"lint-staged":{"*.{ts,tsx,vue}":["pnpm lint:fix"]}},Hn={class:"p-4 space-y-4"},En={class:"text-xl font-bold"},Fn=i("div",{class:"p-2 space-y-2 rounded-md bg-neutral-100 dark:bg-neutral-700"},[i("p",null,[B(" 此项目开源于 "),i("a",{class:"text-blue-600 dark:text-blue-500",href:"https://github.com/Chanzhaoyu/chatgpt-web",target:"_blank"}," GitHub "),B(" ，免费且基于 MIT 协议，没有任何形式的付费行为！ ")]),i("p",null," 如果你觉得此项目对你有帮助，请在 GitHub 帮我点个 Star 或者给予一点赞助，谢谢！ ")],-1),jn={key:0},On={key:1},Ln=J({__name:"About",setup(n){const a=He(),v=M(!1),l=M(),h=_(()=>!!a.isChatGPTAPI);async function c(){try{v.value=!0;const{data:r}=await Lt();l.value=r}finally{v.value=!1}}return Ot(()=>{c()}),(r,b)=>(E(),ye(d(en),{show:v.value},{default:x(()=>{var y,g,S,A,I,F;return[i("div",Hn,[i("h2",En," Version - "+f(d(Un).version),1),Fn,i("p",null,f(r.$t("setting.api"))+"："+f(((y=l.value)==null?void 0:y.apiModel)??"-"),1),d(h)?(E(),Z("p",jn,f(r.$t("setting.monthlyUsage"))+"："+f(((g=l.value)==null?void 0:g.usage)??"-"),1)):we("",!0),d(h)?we("",!0):(E(),Z("p",On,f(r.$t("setting.reverseProxy"))+"："+f(((S=l.value)==null?void 0:S.reverseProxy)??"-"),1)),i("p",null,f(r.$t("setting.timeout"))+"："+f(((A=l.value)==null?void 0:A.timeoutMs)??"-"),1),i("p",null,f(r.$t("setting.socks"))+"："+f(((I=l.value)==null?void 0:I.socksProxy)??"-"),1),i("p",null,f(r.$t("setting.httpsProxy"))+"："+f(((F=l.value)==null?void 0:F.httpsProxy)??"-"),1)])]}),_:1},8,["show"]))}}),Gn={class:"ml-2"},Wn={class:"min-h-[100px]"},Kn={class:"ml-2"},Yn={class:"min-h-[100px]"},Xn={class:"ml-2"},qn=J({__name:"index",props:{visible:{type:Boolean}},emits:["update:visible"],setup(n,{emit:a}){const v=n,l=He(),h=_(()=>!!l.isChatGPTAPI),c=M("General"),r=_({get(){return v.visible},set(b){a("update:visible",b)}});return(b,y)=>(E(),ye(d(Kt),{show:d(r),"onUpdate:show":y[1]||(y[1]=g=>Wt(r)?r.value=g:null),"auto-focus":!1,title:"设置",preset:"card",style:{width:"95%","max-width":"500px"}},{default:x(()=>[i("div",null,[p(d(Gt),{value:c.value,"onUpdate:value":y[0]||(y[0]=g=>c.value=g),type:"line",animated:""},{default:x(()=>[p(d(me),{name:"General",tab:"General"},{tab:x(()=>[p(d(K),{class:"text-lg",icon:"ri:file-user-line"}),i("span",Gn,f(b.$t("setting.general")),1)]),default:x(()=>[i("div",Wn,[p(pn)])]),_:1}),d(h)?(E(),ye(d(me),{key:0,name:"Advanced",tab:"Advanced"},{tab:x(()=>[p(d(K),{class:"text-lg",icon:"ri:equalizer-line"}),i("span",Kn,f(b.$t("setting.advanced")),1)]),default:x(()=>[i("div",Yn,[p(Tn)])]),_:1})):we("",!0),p(d(me),{name:"Config",tab:"Config"},{tab:x(()=>[p(d(K),{class:"text-lg",icon:"ri:list-settings-line"}),i("span",Xn,f(b.$t("setting.config")),1)]),default:x(()=>[p(Ln)]),_:1})]),_:1},8,["value"])])]),_:1},8,["show"]))}});export{qn as default};
