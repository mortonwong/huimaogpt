import{r as R,af as pt,c as G,a as i,ag as M,ah as le,f as Ie,ai as mt,aj as gt,d as J,u as Ne,g as ce,ak as bt,b as yt,h as $,t as wt,e as xt,al as Ve,Z as ge,am as kt,i as ye,j as $t,k as we,l as k,V as _t,m as St,an as Ct,o as zt,T as Ae,ao as re,ap as de,z as Me,aq as Rt,ar as Tt,as as It,at as Vt,au as Mt,av as Dt,a0 as Bt,A as Pt,K as Nt,U as Ue,B as F,C as Q,J as s,Q as h,W as m,D as r,N as He,X as x,a3 as D,a4 as N,S as At,_ as W,aw as Ut,I as Ht,aa as Et,ax as Ft,L as X,ay as jt,a2 as Ee,M as Ot,F as xe,R as ke,az as Lt,aA as Gt,aB as be,aC as Wt,a5 as Kt}from"./index-2d7ef155.js";function De(n){return window.TouchEvent&&n instanceof window.TouchEvent}function Be(){const n=R(new Map),o=f=>l=>{n.value.set(f,l)};return pt(()=>n.value.clear()),[n,o]}const Yt=G([i("slider",`
 display: block;
 padding: calc((var(--n-handle-size) - var(--n-rail-height)) / 2) 0;
 position: relative;
 z-index: 0;
 width: 100%;
 cursor: pointer;
 user-select: none;
 -webkit-user-select: none;
 `,[M("reverse",[i("slider-handles",[i("slider-handle-wrapper",`
 transform: translate(50%, -50%);
 `)]),i("slider-dots",[i("slider-dot",`
 transform: translateX(50%, -50%);
 `)]),M("vertical",[i("slider-handles",[i("slider-handle-wrapper",`
 transform: translate(-50%, -50%);
 `)]),i("slider-marks",[i("slider-mark",`
 transform: translateY(calc(-50% + var(--n-dot-height) / 2));
 `)]),i("slider-dots",[i("slider-dot",`
 transform: translateX(-50%) translateY(0);
 `)])])]),M("vertical",`
 padding: 0 calc((var(--n-handle-size) - var(--n-rail-height)) / 2);
 width: var(--n-rail-width-vertical);
 height: 100%;
 `,[i("slider-handles",`
 top: calc(var(--n-handle-size) / 2);
 right: 0;
 bottom: calc(var(--n-handle-size) / 2);
 left: 0;
 `,[i("slider-handle-wrapper",`
 top: unset;
 left: 50%;
 transform: translate(-50%, 50%);
 `)]),i("slider-rail",`
 height: 100%;
 `,[le("fill",`
 top: unset;
 right: 0;
 bottom: unset;
 left: 0;
 `)]),M("with-mark",`
 width: var(--n-rail-width-vertical);
 margin: 0 32px 0 8px;
 `),i("slider-marks",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 22px;
 font-size: var(--n-mark-font-size);
 `,[i("slider-mark",`
 transform: translateY(50%);
 white-space: nowrap;
 `)]),i("slider-dots",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 50%;
 `,[i("slider-dot",`
 transform: translateX(-50%) translateY(50%);
 `)])]),M("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `,[i("slider-handle",`
 cursor: not-allowed;
 `)]),M("with-mark",`
 width: 100%;
 margin: 8px 0 32px 0;
 `),G("&:hover",[i("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[le("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),i("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),M("active",[i("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[le("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),i("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),i("slider-marks",`
 position: absolute;
 top: 18px;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[i("slider-mark",`
 position: absolute;
 transform: translateX(-50%);
 white-space: nowrap;
 `)]),i("slider-rail",`
 width: 100%;
 position: relative;
 height: var(--n-rail-height);
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 border-radius: calc(var(--n-rail-height) / 2);
 `,[le("fill",`
 position: absolute;
 top: 0;
 bottom: 0;
 border-radius: calc(var(--n-rail-height) / 2);
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-fill-color);
 `)]),i("slider-handles",`
 position: absolute;
 top: 0;
 right: calc(var(--n-handle-size) / 2);
 bottom: 0;
 left: calc(var(--n-handle-size) / 2);
 `,[i("slider-handle-wrapper",`
 outline: none;
 position: absolute;
 top: 50%;
 transform: translate(-50%, -50%);
 cursor: pointer;
 display: flex;
 `,[i("slider-handle",`
 height: var(--n-handle-size);
 width: var(--n-handle-size);
 border-radius: 50%;
 overflow: hidden;
 transition: box-shadow .2s var(--n-bezier), background-color .3s var(--n-bezier);
 background-color: var(--n-handle-color);
 box-shadow: var(--n-handle-box-shadow);
 `,[G("&:hover",`
 box-shadow: var(--n-handle-box-shadow-hover);
 `)]),G("&:focus",[i("slider-handle",`
 box-shadow: var(--n-handle-box-shadow-focus);
 `,[G("&:hover",`
 box-shadow: var(--n-handle-box-shadow-active);
 `)])])])]),i("slider-dots",`
 position: absolute;
 top: 50%;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[M("transition-disabled",[i("slider-dot","transition: none;")]),i("slider-dot",`
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
 `,[M("active","border: var(--n-dot-border-active);")])])]),i("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[Ie()]),i("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[M("top",`
 margin-bottom: 12px;
 `),M("right",`
 margin-left: 12px;
 `),M("bottom",`
 margin-top: 12px;
 `),M("left",`
 margin-right: 12px;
 `),Ie()]),mt(i("slider",[i("slider-dot","background-color: var(--n-dot-color-modal);")])),gt(i("slider",[i("slider-dot","background-color: var(--n-dot-color-popover);")]))]),Xt=0,Jt=Object.assign(Object.assign({},ce.props),{to:we.propTo,defaultValue:{type:[Number,Array],default:0},marks:Object,disabled:{type:Boolean,default:void 0},formatTooltip:Function,keyboard:{type:Boolean,default:!0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:[Number,String],default:1},range:Boolean,value:[Number,Array],placement:String,showTooltip:{type:Boolean,default:void 0},tooltip:{type:Boolean,default:!0},vertical:Boolean,reverse:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),Pe=J({name:"Slider",props:Jt,setup(n){const{mergedClsPrefixRef:o,namespaceRef:f,inlineThemeDisabled:l}=Ne(n),v=ce("Slider","-slider",Yt,bt,n,o),c=R(null),[d,g]=Be(),[w,y]=Be(),_=R(new Set),A=yt(n),{mergedDisabledRef:B}=A,j=$(()=>{const{step:e}=n;if(e<=0||e==="mark")return 0;const t=e.toString();let a=0;return t.includes(".")&&(a=t.length-t.indexOf(".")-1),a}),q=R(n.defaultValue),ue=wt(n,"value"),Z=xt(ue,q),p=$(()=>{const{value:e}=Z;return(n.range?e:[e]).map(Ce)}),T=$(()=>p.value.length>2),C=$(()=>n.placement===void 0?n.vertical?"right":"top":n.placement),U=$(()=>{const{marks:e}=n;return e?Object.keys(e).map(parseFloat):null}),z=R(-1),H=R(-1),O=R(-1),L=R(!1),ee=R(!1),he=$(()=>{const{vertical:e,reverse:t}=n;return e?t?"top":"bottom":t?"right":"left"}),Fe=$(()=>{if(T.value)return;const e=p.value,t=te(n.range?Math.min(...e):n.min),a=te(n.range?Math.max(...e):e[0]),{value:u}=he;return n.vertical?{[u]:`${t}%`,height:`${a-t}%`}:{[u]:`${t}%`,width:`${a-t}%`}}),je=$(()=>{const e=[],{marks:t}=n;if(t){const a=p.value.slice();a.sort((I,V)=>I-V);const{value:u}=he,{value:b}=T,{range:S}=n,P=b?()=>!1:I=>S?I>=a[0]&&I<=a[a.length-1]:I<=a[0];for(const I of Object.keys(t)){const V=Number(I);e.push({active:P(V),label:t[I],style:{[u]:`${te(V)}%`}})}}return e});function Oe(e,t){const a=te(e),{value:u}=he;return{[u]:`${a}%`,zIndex:t===z.value?1:0}}function $e(e){return n.showTooltip||O.value===e||z.value===e&&L.value}function Le(e){return L.value?!(z.value===e&&H.value===e):!0}function Ge(e){var t;~e&&(z.value=e,(t=d.value.get(e))===null||t===void 0||t.focus())}function We(){w.value.forEach((e,t)=>{$e(t)&&e.syncPosition()})}function _e(e){const{"onUpdate:value":t,onUpdateValue:a}=n,{nTriggerFormInput:u,nTriggerFormChange:b}=A;a&&Me(a,e),t&&Me(t,e),q.value=e,u(),b()}function Se(e){const{range:t}=n;if(t){if(Array.isArray(e)){const{value:a}=p;e.join()!==a.join()&&_e(e)}}else Array.isArray(e)||p.value[0]!==e&&_e(e)}function ve(e,t){if(n.range){const a=p.value.slice();a.splice(t,1,e),Se(a)}else Se(e)}function fe(e,t,a){const u=a!==void 0;a||(a=e-t>0?1:-1);const b=U.value||[],{step:S}=n;if(S==="mark"){const V=ne(e,b.concat(t),u?a:void 0);return V?V.value:t}if(S<=0)return t;const{value:P}=j;let I;if(u){const V=Number((t/S).toFixed(P)),E=Math.floor(V),pe=V>E?E:E-1,me=V<E?E:E+1;I=ne(t,[Number((pe*S).toFixed(P)),Number((me*S).toFixed(P)),...b],a)}else{const V=Ye(e);I=ne(e,[...b,V])}return I?Ce(I.value):t}function Ce(e){return Math.min(n.max,Math.max(n.min,e))}function te(e){const{max:t,min:a}=n;return(e-a)/(t-a)*100}function Ke(e){const{max:t,min:a}=n;return a+(t-a)*e}function Ye(e){const{step:t,min:a}=n;if(t<=0||t==="mark")return e;const u=Math.round((e-a)/t)*t+a;return Number(u.toFixed(j.value))}function ne(e,t=U.value,a){if(!(t!=null&&t.length))return null;let u=null,b=-1;for(;++b<t.length;){const S=t[b]-e,P=Math.abs(S);(a===void 0||S*a>0)&&(u===null||P<u.distance)&&(u={index:b,distance:P,value:t[b]})}return u}function ze(e){const t=c.value;if(!t)return;const a=De(e)?e.touches[0]:e,u=t.getBoundingClientRect();let b;return n.vertical?b=(u.bottom-a.clientY)/u.height:b=(a.clientX-u.left)/u.width,n.reverse&&(b=1-b),Ke(b)}function Xe(e){if(B.value||!n.keyboard)return;const{vertical:t,reverse:a}=n;switch(e.key){case"ArrowUp":e.preventDefault(),ae(t&&a?-1:1);break;case"ArrowRight":e.preventDefault(),ae(!t&&a?-1:1);break;case"ArrowDown":e.preventDefault(),ae(t&&a?1:-1);break;case"ArrowLeft":e.preventDefault(),ae(!t&&a?1:-1);break}}function ae(e){const t=z.value;if(t===-1)return;const{step:a}=n,u=p.value[t],b=a<=0||a==="mark"?u:u+a*e;ve(fe(b,u,e>0?1:-1),t)}function Je(e){var t,a;if(B.value||!De(e)&&e.button!==Xt)return;const u=ze(e);if(u===void 0)return;const b=p.value.slice(),S=n.range?(a=(t=ne(u,b))===null||t===void 0?void 0:t.index)!==null&&a!==void 0?a:-1:0;S!==-1&&(e.preventDefault(),Ge(S),qe(),ve(fe(u,p.value[S]),S))}function qe(){L.value||(L.value=!0,re("touchend",document,ie),re("mouseup",document,ie),re("touchmove",document,se),re("mousemove",document,se))}function oe(){L.value&&(L.value=!1,de("touchend",document,ie),de("mouseup",document,ie),de("touchmove",document,se),de("mousemove",document,se))}function se(e){const{value:t}=z;if(!L.value||t===-1){oe();return}const a=ze(e);ve(fe(a,p.value[t]),t)}function ie(){oe()}function Ze(e){z.value=e,B.value||(O.value=e)}function Qe(e){z.value===e&&(z.value=-1,oe()),O.value===e&&(O.value=-1)}function et(e){O.value=e}function tt(e){O.value===e&&(O.value=-1)}Ve(z,(e,t)=>void ge(()=>H.value=t)),Ve(Z,()=>{if(n.marks){if(ee.value)return;ee.value=!0,ge(()=>{ee.value=!1})}ge(We)}),kt(()=>{oe()});const Re=$(()=>{const{self:{markFontSize:e,railColor:t,railColorHover:a,fillColor:u,fillColorHover:b,handleColor:S,opacityDisabled:P,dotColor:I,dotColorModal:V,handleBoxShadow:E,handleBoxShadowHover:pe,handleBoxShadowActive:me,handleBoxShadowFocus:nt,dotBorder:at,dotBoxShadow:ot,railHeight:st,railWidthVertical:it,handleSize:lt,dotHeight:rt,dotWidth:dt,dotBorderRadius:ct,fontSize:ut,dotBorderActive:ht,dotColorPopover:vt},common:{cubicBezierEaseInOut:ft}}=v.value;return{"--n-bezier":ft,"--n-dot-border":at,"--n-dot-border-active":ht,"--n-dot-border-radius":ct,"--n-dot-box-shadow":ot,"--n-dot-color":I,"--n-dot-color-modal":V,"--n-dot-color-popover":vt,"--n-dot-height":rt,"--n-dot-width":dt,"--n-fill-color":u,"--n-fill-color-hover":b,"--n-font-size":ut,"--n-handle-box-shadow":E,"--n-handle-box-shadow-active":me,"--n-handle-box-shadow-focus":nt,"--n-handle-box-shadow-hover":pe,"--n-handle-color":S,"--n-handle-size":lt,"--n-opacity-disabled":P,"--n-rail-color":t,"--n-rail-color-hover":a,"--n-rail-height":st,"--n-rail-width-vertical":it,"--n-mark-font-size":e}}),K=l?ye("slider",void 0,Re,n):void 0,Te=$(()=>{const{self:{fontSize:e,indicatorColor:t,indicatorBoxShadow:a,indicatorTextColor:u,indicatorBorderRadius:b}}=v.value;return{"--n-font-size":e,"--n-indicator-border-radius":b,"--n-indicator-box-shadow":a,"--n-indicator-color":t,"--n-indicator-text-color":u}}),Y=l?ye("slider-indicator",void 0,Te,n):void 0;return{mergedClsPrefix:o,namespace:f,uncontrolledValue:q,mergedValue:Z,mergedDisabled:B,mergedPlacement:C,isMounted:$t(),adjustedTo:we(n),dotTransitionDisabled:ee,markInfos:je,isShowTooltip:$e,shouldKeepTooltipTransition:Le,handleRailRef:c,setHandleRefs:g,setFollowerRefs:y,fillStyle:Fe,getHandleStyle:Oe,activeIndex:z,arrifiedValues:p,followerEnabledIndexSet:_,handleRailMouseDown:Je,handleHandleFocus:Ze,handleHandleBlur:Qe,handleHandleMouseEnter:et,handleHandleMouseLeave:tt,handleRailKeyDown:Xe,indicatorCssVars:l?void 0:Te,indicatorThemeClass:Y==null?void 0:Y.themeClass,indicatorOnRender:Y==null?void 0:Y.onRender,cssVars:l?void 0:Re,themeClass:K==null?void 0:K.themeClass,onRender:K==null?void 0:K.onRender}},render(){var n;const{mergedClsPrefix:o,themeClass:f,formatTooltip:l}=this;return(n=this.onRender)===null||n===void 0||n.call(this),k("div",{class:[`${o}-slider`,f,{[`${o}-slider--disabled`]:this.mergedDisabled,[`${o}-slider--active`]:this.activeIndex!==-1,[`${o}-slider--with-mark`]:this.marks,[`${o}-slider--vertical`]:this.vertical,[`${o}-slider--reverse`]:this.reverse}],style:this.cssVars,onKeydown:this.handleRailKeyDown,onMousedown:this.handleRailMouseDown,onTouchstart:this.handleRailMouseDown},k("div",{class:`${o}-slider-rail`},k("div",{class:`${o}-slider-rail__fill`,style:this.fillStyle}),this.marks?k("div",{class:[`${o}-slider-dots`,this.dotTransitionDisabled&&`${o}-slider-dots--transition-disabled`]},this.markInfos.map(v=>k("div",{key:v.label,class:[`${o}-slider-dot`,{[`${o}-slider-dot--active`]:v.active}],style:v.style}))):null,k("div",{ref:"handleRailRef",class:`${o}-slider-handles`},this.arrifiedValues.map((v,c)=>{const d=this.isShowTooltip(c);return k(_t,null,{default:()=>[k(St,null,{default:()=>k("div",{ref:this.setHandleRefs(c),class:`${o}-slider-handle-wrapper`,tabindex:this.mergedDisabled?-1:0,style:this.getHandleStyle(v,c),onFocus:()=>this.handleHandleFocus(c),onBlur:()=>this.handleHandleBlur(c),onMouseenter:()=>this.handleHandleMouseEnter(c),onMouseleave:()=>this.handleHandleMouseLeave(c)},Ct(this.$slots.thumb,()=>[k("div",{class:`${o}-slider-handle`})]))}),this.tooltip&&k(zt,{ref:this.setFollowerRefs(c),show:d,to:this.adjustedTo,enabled:this.showTooltip&&!this.range||this.followerEnabledIndexSet.has(c),teleportDisabled:this.adjustedTo===we.tdkey,placement:this.mergedPlacement,containerClass:this.namespace},{default:()=>k(Ae,{name:"fade-in-scale-up-transition",appear:this.isMounted,css:this.shouldKeepTooltipTransition(c),onEnter:()=>{this.followerEnabledIndexSet.add(c)},onAfterLeave:()=>{this.followerEnabledIndexSet.delete(c)}},{default:()=>{var g;return d?((g=this.indicatorOnRender)===null||g===void 0||g.call(this),k("div",{class:[`${o}-slider-handle-indicator`,this.indicatorThemeClass,`${o}-slider-handle-indicator--${this.mergedPlacement}`],style:this.indicatorCssVars},typeof l=="function"?l(v):v)):null}})})]})})),this.marks?k("div",{class:`${o}-slider-marks`},this.markInfos.map(v=>k("div",{key:v.label,class:`${o}-slider-mark`,style:v.style},v.label))):null))}}),qt=G([G("@keyframes spin-rotate",`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),i("spin-container",{position:"relative"},[i("spin-body",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[Rt()])]),i("spin-body",`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),i("spin",`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[M("rotate",`
 animation: spin-rotate 2s linear infinite;
 `)]),i("spin-description",`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),i("spin-content",`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[M("spinning",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),Zt={small:20,medium:18,large:16},Qt=Object.assign(Object.assign({},ce.props),{description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0}}),en=J({name:"Spin",props:Qt,setup(n){const{mergedClsPrefixRef:o,inlineThemeDisabled:f}=Ne(n),l=ce("Spin","-spin",qt,Tt,n,o),v=$(()=>{const{size:d}=n,{common:{cubicBezierEaseInOut:g},self:w}=l.value,{opacitySpinning:y,color:_,textColor:A}=w,B=typeof d=="number"?It(d):w[Vt("size",d)];return{"--n-bezier":g,"--n-opacity-spinning":y,"--n-size":B,"--n-color":_,"--n-text-color":A}}),c=f?ye("spin",$(()=>{const{size:d}=n;return typeof d=="number"?String(d):d[0]}),v,n):void 0;return{mergedClsPrefix:o,compitableShow:Mt(n,["spinning","show"]),mergedStrokeWidth:$(()=>{const{strokeWidth:d}=n;if(d!==void 0)return d;const{size:g}=n;return Zt[typeof g=="number"?"medium":g]}),cssVars:f?void 0:v,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender}},render(){var n,o;const{$slots:f,mergedClsPrefix:l,description:v}=this,c=f.icon&&this.rotate,d=(v||f.description)&&k("div",{class:`${l}-spin-description`},v||((n=f.description)===null||n===void 0?void 0:n.call(f))),g=f.icon?k("div",{class:[`${l}-spin-body`,this.themeClass]},k("div",{class:[`${l}-spin`,c&&`${l}-spin--rotate`],style:f.default?"":this.cssVars},f.icon()),d):k("div",{class:[`${l}-spin-body`,this.themeClass]},k(Dt,{clsPrefix:l,style:f.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${l}-spin`}),d);return(o=this.onRender)===null||o===void 0||o.call(this),f.default?k("div",{class:[`${l}-spin-container`,this.themeClass],style:this.cssVars},k("div",{class:[`${l}-spin-content`,this.compitableShow&&`${l}-spin-content--spinning`]},f),k(Ae,{name:"fade-in-transition"},{default:()=>this.compitableShow?g:null})):g}});function tn(){const n=new Date,o=n.getDate(),f=n.getMonth()+1;return`${n.getFullYear()}-${f}-${o}`}const nn={class:"p-4 space-y-5 min-h-[200px]"},an={class:"space-y-6"},on={class:"flex items-center space-x-4"},sn={class:"flex-shrink-0 w-[100px]"},ln={class:"flex-1"},rn={class:"flex-shrink-0 w-[100px]"},dn={class:"flex flex-wrap items-center gap-4"},cn={class:"flex items-center space-x-4"},un={class:"flex-shrink-0 w-[100px]"},hn={class:"flex flex-wrap items-center gap-4"},vn={class:"flex items-center space-x-4"},fn={class:"flex-shrink-0 w-[100px]"},pn={class:"flex flex-wrap items-center gap-4"},mn={class:"flex items-center space-x-4"},gn={class:"flex-shrink-0 w-[100px]"},bn=J({__name:"General",setup(n){const o=Bt(),f=Pt(),{isMobile:l}=Nt(),v=Ue(),c=$(()=>o.theme),d=$(()=>f.userInfo),g=R(d.value.avatar??""),w=$({get(){return o.language},set(p){o.setLanguage(p)}}),y=[{label:"Auto",key:"auto",icon:"ri:contrast-line"},{label:"Light",key:"light",icon:"ri:sun-foggy-line"},{label:"Dark",key:"dark",icon:"ri:moon-foggy-line"}],_=[{label:"简体中文",key:"zh-CN",value:"zh-CN"},{label:"繁體中文",key:"zh-TW",value:"zh-TW"},{label:"English",key:"en-US",value:"en-US"},{label:"한국어",key:"ko-KR",value:"ko-KR"},{label:"Русский язык",key:"ru-RU",value:"ru-RU"}];function A(p){f.updateUserInfo(p),v.success(X("common.success"))}function B(){f.resetUserInfo(),v.success(X("common.success")),window.location.reload()}function j(){const p=tn(),T=localStorage.getItem("chatStorage")||"{}",C=JSON.stringify(JSON.parse(T),null,2),U=new Blob([C],{type:"application/json"}),z=URL.createObjectURL(U),H=document.createElement("a");H.href=z,H.download=`chat-store_${p}.json`,document.body.appendChild(H),H.click(),document.body.removeChild(H)}function q(p){const T=p.target;if(!T||!T.files)return;const C=T.files[0];if(!C)return;const U=new FileReader;U.onload=()=>{try{const z=JSON.parse(U.result);localStorage.setItem("chatStorage",JSON.stringify(z)),v.success(X("common.success")),location.reload()}catch{v.error(X("common.invalidFileFormat"))}},U.readAsText(C)}function ue(){localStorage.removeItem("chatStorage"),location.reload()}function Z(){const p=document.getElementById("fileInput");p&&p.click()}return(p,T)=>(F(),Q("div",nn,[s("div",an,[s("div",on,[s("span",sn,h(p.$t("setting.avatarLink")),1),s("div",ln,[m(r(He),{value:g.value,"onUpdate:value":T[0]||(T[0]=C=>g.value=C),placeholder:""},null,8,["value"])]),m(r(N),{size:"tiny",text:"",type:"primary",onClick:T[1]||(T[1]=C=>A({avatar:g.value}))},{default:x(()=>[D(h(p.$t("common.save")),1)]),_:1})]),s("div",{class:At(["flex items-center space-x-4",r(l)&&"items-start"])},[s("span",rn,h(p.$t("setting.chatHistory")),1),s("div",dn,[m(r(N),{size:"small",onClick:j},{icon:x(()=>[m(r(W),{icon:"ri:download-2-fill"})]),default:x(()=>[D(" "+h(p.$t("common.export")),1)]),_:1}),s("input",{id:"fileInput",type:"file",style:{display:"none"},onChange:q},null,32),m(r(N),{size:"small",onClick:Z},{icon:x(()=>[m(r(W),{icon:"ri:upload-2-fill"})]),default:x(()=>[D(" "+h(p.$t("common.import")),1)]),_:1}),m(r(Ut),{placement:"bottom",onPositiveClick:ue},{trigger:x(()=>[m(r(N),{size:"small"},{icon:x(()=>[m(r(W),{icon:"ri:close-circle-line"})]),default:x(()=>[D(" "+h(p.$t("common.clear")),1)]),_:1})]),default:x(()=>[D(" "+h(p.$t("chat.clearHistoryConfirm")),1)]),_:1})])],2),s("div",cn,[s("span",un,h(p.$t("setting.theme")),1),s("div",hn,[(F(),Q(Ht,null,Et(y,C=>m(r(N),{key:C.key,size:"small",type:C.key===r(c)?"primary":void 0,onClick:U=>r(o).setTheme(C.key)},{icon:x(()=>[m(r(W),{icon:C.icon},null,8,["icon"])]),_:2},1032,["type","onClick"])),64))])]),s("div",vn,[s("span",fn,h(p.$t("setting.language")),1),s("div",pn,[m(r(Ft),{style:{width:"140px"},value:r(w),options:_,onUpdateValue:T[2]||(T[2]=C=>r(o).setLanguage(C))},null,8,["value"])])]),s("div",mn,[s("span",gn,h(p.$t("setting.resetUserInfo")),1),m(r(N),{size:"small",onClick:B},{default:x(()=>[D(h(p.$t("common.reset")),1)]),_:1})])])]))}}),yn={class:"p-4 space-y-5 min-h-[200px]"},wn={class:"space-y-6"},xn={class:"flex items-center space-x-4"},kn={class:"flex-shrink-0 w-[120px]"},$n={class:"flex-1"},_n={class:"flex items-center space-x-4"},Sn={class:"flex-shrink-0 w-[120px]"},Cn={class:"flex-1"},zn={class:"flex items-center space-x-4"},Rn={class:"flex-shrink-0 w-[120px]"},Tn={class:"flex-1"},In={class:"flex items-center space-x-4"},Vn=s("span",{class:"flex-shrink-0 w-[120px]"}," ",-1),Mn=J({__name:"Advanced",setup(n){const o=jt(),f=Ue(),l=R(o.systemMessage??""),v=R(o.temperature??.5),c=R(o.top_p??1);function d(w){o.updateSetting(w),f.success(X("common.success"))}function g(){o.resetSetting(),f.success(X("common.success")),window.location.reload()}return(w,y)=>(F(),Q("div",yn,[s("div",wn,[s("div",xn,[s("span",kn,h(w.$t("setting.role")),1),s("div",$n,[m(r(He),{value:l.value,"onUpdate:value":y[0]||(y[0]=_=>l.value=_),type:"textarea",autosize:{minRows:1,maxRows:4}},null,8,["value"])]),m(r(N),{size:"tiny",text:"",type:"primary",onClick:y[1]||(y[1]=_=>d({systemMessage:l.value}))},{default:x(()=>[D(h(w.$t("common.save")),1)]),_:1})]),s("div",_n,[s("span",Sn,h(w.$t("setting.temperature")),1),s("div",Cn,[m(r(Pe),{value:v.value,"onUpdate:value":y[2]||(y[2]=_=>v.value=_),max:1,min:0,step:.1},null,8,["value","step"])]),s("span",null,h(v.value),1),m(r(N),{size:"tiny",text:"",type:"primary",onClick:y[3]||(y[3]=_=>d({temperature:v.value}))},{default:x(()=>[D(h(w.$t("common.save")),1)]),_:1})]),s("div",zn,[s("span",Rn,h(w.$t("setting.top_p")),1),s("div",Tn,[m(r(Pe),{value:c.value,"onUpdate:value":y[4]||(y[4]=_=>c.value=_),max:1,min:0,step:.1},null,8,["value","step"])]),s("span",null,h(c.value),1),m(r(N),{size:"tiny",text:"",type:"primary",onClick:y[5]||(y[5]=_=>d({top_p:c.value}))},{default:x(()=>[D(h(w.$t("common.save")),1)]),_:1})]),s("div",In,[Vn,m(r(N),{size:"small",onClick:g},{default:x(()=>[D(h(w.$t("common.reset")),1)]),_:1})])])]))}}),Dn="chatgpt-web",Bn="2.11.0",Pn="ChatGPT Web",Nn="ChenZhaoYu <chenzhaoyu1994@gmail.com>",An=["chatgpt-web","chatgpt","chatbot","vue"],Un={dev:"vite",build:"run-p type-check build-only",preview:"vite preview","build-only":"vite build","type-check":"vue-tsc --noEmit",lint:"eslint .","lint:fix":"eslint . --fix",bootstrap:"pnpm install && pnpm run common:prepare","common:cleanup":"rimraf node_modules && rimraf pnpm-lock.yaml","common:prepare":"husky install"},Hn={"@traptitech/markdown-it-katex":"^3.6.0","@vueuse/core":"^9.13.0","highlight.js":"^11.7.0",html2canvas:"^1.4.1",katex:"^0.16.4","markdown-it":"^13.0.1","naive-ui":"^2.34.3",pinia:"^2.0.33",vue:"^3.2.47","vue-i18n":"^9.2.2","vue-router":"^4.1.6"},En={"@antfu/eslint-config":"^0.35.3","@commitlint/cli":"^17.4.4","@commitlint/config-conventional":"^17.4.4","@iconify/vue":"^4.1.0","@types/crypto-js":"^4.1.1","@types/katex":"^0.16.0","@types/markdown-it":"^12.2.3","@types/markdown-it-link-attributes":"^3.0.1","@types/node":"^18.14.6","@vitejs/plugin-vue":"^4.0.0",autoprefixer:"^10.4.13",axios:"^1.3.4","crypto-js":"^4.1.1",eslint:"^8.35.0",husky:"^8.0.3",less:"^4.1.3","lint-staged":"^13.1.2","markdown-it-link-attributes":"^4.0.1","npm-run-all":"^4.1.5",postcss:"^8.4.21",rimraf:"^4.2.0",tailwindcss:"^3.2.7",typescript:"~4.9.5",vite:"^4.2.0","vite-plugin-pwa":"^0.14.4","vue-tsc":"^1.2.0"},Fn={name:Dn,version:Bn,private:!1,description:Pn,author:Nn,keywords:An,scripts:Un,dependencies:Hn,devDependencies:En,"lint-staged":{"*.{ts,tsx,vue}":["pnpm lint:fix"]}},jn={class:"p-4 space-y-4"},On={class:"text-xl font-bold"},Ln=s("div",{class:"p-2 space-y-2 rounded-md bg-neutral-100 dark:bg-neutral-700"},[s("p",null,[D(" 此项目开源于 "),s("a",{class:"text-blue-600 dark:text-blue-500",href:"https://github.com/Chanzhaoyu/chatgpt-web",target:"_blank"}," GitHub "),D(" ，免费且基于 MIT 协议，没有任何形式的付费行为！ ")]),s("p",null," 如果你觉得此项目对你有帮助，请在 GitHub 帮我点个 Star 或者给予一点赞助，谢谢！ ")],-1),Gn={key:0},Wn={key:1},Kn=J({__name:"About",setup(n){const o=Ee(),f=R(!1),l=R(),v=$(()=>!!o.isChatGPTAPI);async function c(){try{f.value=!0;const{data:d}=await Lt();l.value=d}finally{f.value=!1}}return Ot(()=>{c()}),(d,g)=>(F(),xe(r(en),{show:f.value},{default:x(()=>{var w,y,_,A,B,j;return[s("div",jn,[s("h2",On," Version - "+h(r(Fn).version),1),Ln,s("p",null,h(d.$t("setting.api"))+"："+h(((w=l.value)==null?void 0:w.apiModel)??"-"),1),r(v)?(F(),Q("p",Gn,h(d.$t("setting.monthlyUsage"))+"："+h(((y=l.value)==null?void 0:y.usage)??"-"),1)):ke("",!0),r(v)?ke("",!0):(F(),Q("p",Wn,h(d.$t("setting.reverseProxy"))+"："+h(((_=l.value)==null?void 0:_.reverseProxy)??"-"),1)),s("p",null,h(d.$t("setting.timeout"))+"："+h(((A=l.value)==null?void 0:A.timeoutMs)??"-"),1),s("p",null,h(d.$t("setting.socks"))+"："+h(((B=l.value)==null?void 0:B.socksProxy)??"-"),1),s("p",null,h(d.$t("setting.httpsProxy"))+"："+h(((j=l.value)==null?void 0:j.httpsProxy)??"-"),1)])]}),_:1},8,["show"]))}}),Yn={class:"ml-2"},Xn={class:"min-h-[100px]"},Jn={class:"ml-2"},qn={class:"min-h-[100px]"},Zn={class:"ml-2"},ea=J({__name:"index",props:{visible:{type:Boolean}},emits:["update:visible"],setup(n,{emit:o}){const f=n,l=Ee(),v=$(()=>!!l.isChatGPTAPI),c=R("General"),d=$({get(){return f.visible},set(g){o("update:visible",g)}});return(g,w)=>(F(),xe(r(Kt),{show:r(d),"onUpdate:show":w[1]||(w[1]=y=>Wt(d)?d.value=y:null),"auto-focus":!1,preset:"card",style:{width:"95%","max-width":"640px"}},{default:x(()=>[s("div",null,[m(r(Gt),{value:c.value,"onUpdate:value":w[0]||(w[0]=y=>c.value=y),type:"line",animated:""},{default:x(()=>[m(r(be),{name:"General",tab:"General"},{tab:x(()=>[m(r(W),{class:"text-lg",icon:"ri:file-user-line"}),s("span",Yn,h(g.$t("setting.general")),1)]),default:x(()=>[s("div",Xn,[m(bn)])]),_:1}),r(v)?(F(),xe(r(be),{key:0,name:"Advanced",tab:"Advanced"},{tab:x(()=>[m(r(W),{class:"text-lg",icon:"ri:equalizer-line"}),s("span",Jn,h(g.$t("setting.advanced")),1)]),default:x(()=>[s("div",qn,[m(Mn)])]),_:1})):ke("",!0),m(r(be),{name:"Config",tab:"Config"},{tab:x(()=>[m(r(W),{class:"text-lg",icon:"ri:list-settings-line"}),s("span",Zn,h(g.$t("setting.config")),1)]),default:x(()=>[m(Kn)]),_:1})]),_:1},8,["value"])])]),_:1},8,["show"]))}});export{ea as default};
