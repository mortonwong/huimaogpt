import{M as C}from"./markdown-it-2fba393f.js";import{m as B}from"./@traptitech-9a3f8757.js";import{m as T}from"./markdown-it-link-attributes-7ecb0d9a.js";import{H as m}from"./highlight.js-42a3adc5.js";import{a as L,t as E}from"./index-f9655cb9.js";import{c as M}from"./index-7fe68cdb.js";import{d as R,r as S,c as f,b as A,a6 as H,A as $,R as o,S as n,X as v,P as l,V as x,F as q,_ as k,Z as V}from"./@vue-592ec505.js";import"./uc.micro-740ead6f.js";import"./mdurl-79eba04e.js";import"./linkify-it-191b779c.js";import"./punycode-091d9791.js";import"./katex-440aaa3c.js";import"./naive-ui-caff5099.js";import"./vooks-9f50f2ef.js";import"./evtd-b614532e.js";import"./vdirs-b0483831.js";import"./treemate-25c27bff.js";import"./seemly-411025cc.js";import"./vueuc-72877a4a.js";import"./@css-render-80c01661.js";import"./@juggle-41516555.js";import"./css-render-d3958e6a.js";import"./@emotion-8a8e73f6.js";import"./lodash-es-cabc0acd.js";import"./date-fns-975a2d8f.js";import"./pinia-af09d699.js";import"./vue-router-c5800335.js";import"./axios-760d4776.js";import"./@vueuse-2be4af1e.js";import"./vue-i18n-2e8fc103.js";import"./@intlify-7347860c.js";import"./@iconify-4e28c541.js";import"./html2canvas-18c4afc9.js";const z={key:0},F=["innerHTML"],N=["textContent"],U=["textContent"],j=v("span",{class:"dark:text-white w-[4px] h-[20px] block animate-blink",style:{color:"#f0a020",display:"inline-block"}},null,-1),D={key:0,style:{color:"rgb(180 180 180)","font-size":"0.9rem",position:"relative",top:"-5px",left:"5px"}},be=R({__name:"Text",props:{inversion:{type:Boolean},error:{type:Boolean},text:null,loading:{type:Boolean},asRawText:{type:Boolean},showTooLong:{type:Boolean}},emits:["load"],setup(a,{emit:g}){const r=a,{isMobile:_}=L(),s=S(),c=new C({html:!1,linkify:!0,highlight(t,e){if(!!(e&&m.getLanguage(e))){const i=e??"";return u(m.highlight(t,{language:i}).value,i)}return u(m.highlightAuto(t).value,"")}});c.use(T,{attrs:{target:"_blank",rel:"noopener"}}),c.use(B,{blockClass:"katexmath-block rounded-md p-[10px]",errorColor:" #cc0000"});const b=f(()=>["text-wrap","min-w-[20px]","rounded-md",_.value?"p-2":"px-3 py-2",r.inversion?"bg-[#d2f9d1]":"bg-[#f4f6f8]",r.inversion?"dark:bg-[#a1dc95]":"dark:bg-[#1e1e20]",r.inversion?"message-request":"message-reply",{"text-red-500":r.error}]),p=f(()=>{const t=r.text??"";return r.asRawText?t:c.render(t)});function u(t,e){return`<pre class="code-block-wrapper"><div class="code-block-header"><span class="code-block-header__lang">${e}</span><span class="code-block-header__copy">${E("chat.copyCode")}</span></div><code class="hljs code-block-body ${e}">${t}</code></pre>`}function h(){s.value&&s.value.querySelectorAll(".code-block-header__copy").forEach(e=>{e.addEventListener("click",()=>{var i,y;const d=(y=(i=e.parentElement)==null?void 0:i.nextElementSibling)==null?void 0:y.textContent;d&&M(d).then(()=>{e.textContent="复制成功",setTimeout(()=>{e.textContent="复制代码"},1e3)})})})}function w(){s.value&&s.value.querySelectorAll(".code-block-header__copy").forEach(e=>{e.removeEventListener("click",()=>{})})}return A(()=>{g("load"),h()}),H(()=>{h()}),$(()=>{w()}),(t,e)=>(o(),n("div",{class:V(["text-black",l(b)])},[v("div",{ref_key:"textRef",ref:s,class:"leading-relaxed break-words"},[a.inversion?(o(),n("div",{key:1,class:"whitespace-pre-wrap",textContent:x(l(p))},null,8,U)):(o(),n("div",z,[a.asRawText?(o(),n("div",{key:1,class:"whitespace-pre-wrap",textContent:x(l(p))},null,8,N)):(o(),n("div",{key:0,class:"markdown-body",innerHTML:l(p)},null,8,F))])),a.loading?(o(),n(q,{key:2},[j,a.showTooLong?(o(),n("span",D,"内容可能有点长，思考中……")):k("",!0)],64)):k("",!0)],512)],2))}});export{be as default};
