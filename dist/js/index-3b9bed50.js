import{c as M,u as O,a as F,_ as k,t as b,f as G,l as J}from"./index-335e590d.js";import{f as D,k as f,i as j,J as E,h as K,K as B,p as W,q as R,y as q}from"./naive-ui-1895f3d8.js";import{d as I,c as z,R as S,S as U,X as e,Z as H,P as t,V as o,N as s,U as a,e as v,F as Y,Y as X,r as N,W as A,_ as T,I as Z}from"./@vue-b675b877.js";import"./pinia-7b1e1edf.js";import"./vue-router-6dcef795.js";import"./axios-760d4776.js";import"./@vueuse-53b62710.js";import"./vue-i18n-91d1077d.js";import"./@intlify-7347860c.js";import"./@iconify-60e148d4.js";import"./vooks-2fdfc711.js";import"./evtd-b614532e.js";import"./katex-8f8f1adc.js";import"./@traptitech-1c07f09a.js";import"./vdirs-b0483831.js";import"./treemate-25c27bff.js";import"./seemly-411025cc.js";import"./vueuc-67ee9856.js";import"./@css-render-563acc61.js";import"./@juggle-41516555.js";import"./css-render-d3958e6a.js";import"./@emotion-8a8e73f6.js";import"./lodash-es-cabc0acd.js";import"./date-fns-975a2d8f.js";function Q(){const x=new Date,r=x.getDate(),_=x.getMonth()+1;return`${x.getFullYear()}-${_}-${r}`}const ee={class:"p-4 space-y-5 min-h-[200px]"},te={class:"space-y-6"},se={class:"flex-shrink-0 w-[100px]"},ae={class:"flex flex-wrap items-center gap-4"},oe={class:"flex items-center space-x-4"},ne={class:"flex-shrink-0 w-[100px]"},ie={class:"flex flex-wrap items-center gap-4"},le={class:"flex items-center space-x-4"},re={class:"flex-shrink-0 w-[100px]"},ce={class:"flex flex-wrap items-center gap-4"},pe={class:"flex items-center space-x-4"},ue={class:"flex-shrink-0 w-[100px]"},de=I({__name:"General",setup(x){const r=M(),_=O(),{isMobile:g}=F(),p=D(),d=z(()=>r.theme),m=z({get(){return r.language},set(i){r.setLanguage(i)}}),h=[{label:"Auto",key:"auto",icon:"ri:contrast-line"},{label:"Light",key:"light",icon:"ri:sun-foggy-line"},{label:"Dark",key:"dark",icon:"ri:moon-foggy-line"}],l=[{label:"简体中文",key:"zh-CN",value:"zh-CN"},{label:"繁體中文",key:"zh-TW",value:"zh-TW"},{label:"English",key:"en-US",value:"en-US"},{label:"한국어",key:"ko-KR",value:"ko-KR"},{label:"Русский язык",key:"ru-RU",value:"ru-RU"}];function n(){_.resetUserInfo(),p.success(b("common.success")),window.location.reload()}function u(){const i=Q(),y=localStorage.getItem("chatStorage")||"{}",c=JSON.stringify(JSON.parse(y),null,2),$=new Blob([c],{type:"application/json"}),C=URL.createObjectURL($),w=document.createElement("a");w.href=C,w.download=`chat-store_${i}.json`,document.body.appendChild(w),w.click(),document.body.removeChild(w)}function P(i){const y=i.target;if(!y||!y.files)return;const c=y.files[0];if(!c)return;const $=new FileReader;$.onload=()=>{try{const C=JSON.parse($.result);localStorage.setItem("chatStorage",JSON.stringify(C)),p.success(b("common.success")),location.reload()}catch{p.error(b("common.invalidFileFormat"))}},$.readAsText(c)}function V(){localStorage.removeItem("chatStorage"),location.reload()}function L(){const i=document.getElementById("fileInput");i&&i.click()}return(i,y)=>(S(),U("div",ee,[e("div",te,[e("div",{class:H(["flex items-center space-x-4",t(g)&&"items-start"])},[e("span",se,o(i.$t("setting.chatHistory")),1),e("div",ae,[s(t(f),{size:"small",onClick:u},{icon:a(()=>[s(t(k),{icon:"ri:download-2-fill"})]),default:a(()=>[v(" "+o(i.$t("common.export")),1)]),_:1}),e("input",{id:"fileInput",type:"file",style:{display:"none"},onChange:P},null,32),s(t(f),{size:"small",onClick:L},{icon:a(()=>[s(t(k),{icon:"ri:upload-2-fill"})]),default:a(()=>[v(" "+o(i.$t("common.import")),1)]),_:1}),s(t(j),{placement:"bottom",onPositiveClick:V},{trigger:a(()=>[s(t(f),{size:"small"},{icon:a(()=>[s(t(k),{icon:"ri:close-circle-line"})]),default:a(()=>[v(" "+o(i.$t("common.clear")),1)]),_:1})]),default:a(()=>[v(" "+o(i.$t("chat.clearHistoryConfirm")),1)]),_:1})])],2),e("div",oe,[e("span",ne,o(i.$t("setting.theme")),1),e("div",ie,[(S(),U(Y,null,X(h,c=>s(t(f),{key:c.key,size:"small",type:c.key===t(d)?"primary":void 0,onClick:$=>t(r).setTheme(c.key)},{icon:a(()=>[s(t(k),{icon:c.icon},null,8,["icon"])]),_:2},1032,["type","onClick"])),64))])]),e("div",le,[e("span",re,o(i.$t("setting.language")),1),e("div",ce,[s(t(E),{style:{width:"140px"},value:t(m),options:l,onUpdateValue:y[0]||(y[0]=c=>t(r).setLanguage(c))},null,8,["value"])])]),e("div",pe,[e("span",ue,o(i.$t("setting.resetUserInfo")),1),s(t(f),{size:"small",onClick:n},{default:a(()=>[v(o(i.$t("common.reset")),1)]),_:1})])])]))}}),me={class:"p-4 space-y-5 min-h-[200px]"},fe={class:"space-y-6"},ve={class:"flex items-center space-x-4"},_e={class:"flex-shrink-0 w-[120px]"},ge={class:"flex-1"},he={class:"flex items-center space-x-4"},ye={class:"flex-shrink-0 w-[120px]"},xe={class:"flex-1"},$e={class:"flex items-center space-x-4"},ke={class:"flex-shrink-0 w-[120px]"},we={class:"flex-1"},be={class:"flex items-center space-x-4"},Se=e("span",{class:"flex-shrink-0 w-[120px]"}," ",-1),Ce=I({__name:"Advanced",setup(x){const r=G(),_=D(),g=N(r.systemMessage??""),p=N(r.temperature??.5),d=N(r.top_p??1);function m(l){r.updateSetting(l),_.success(b("common.success"))}function h(){r.resetSetting(),_.success(b("common.success")),window.location.reload()}return(l,n)=>(S(),U("div",me,[e("div",fe,[e("div",ve,[e("span",_e,o(l.$t("setting.role")),1),e("div",ge,[s(t(K),{value:g.value,"onUpdate:value":n[0]||(n[0]=u=>g.value=u),type:"textarea",autosize:{minRows:1,maxRows:4}},null,8,["value"])]),s(t(f),{size:"tiny",text:"",type:"primary",onClick:n[1]||(n[1]=u=>m({systemMessage:g.value}))},{default:a(()=>[v(o(l.$t("common.save")),1)]),_:1})]),e("div",he,[e("span",ye,o(l.$t("setting.temperature")),1),e("div",xe,[s(t(B),{value:p.value,"onUpdate:value":n[2]||(n[2]=u=>p.value=u),max:1,min:0,step:.1},null,8,["value","step"])]),e("span",null,o(p.value),1),s(t(f),{size:"tiny",text:"",type:"primary",onClick:n[3]||(n[3]=u=>m({temperature:p.value}))},{default:a(()=>[v(o(l.$t("common.save")),1)]),_:1})]),e("div",$e,[e("span",ke,o(l.$t("setting.top_p")),1),e("div",we,[s(t(B),{value:d.value,"onUpdate:value":n[4]||(n[4]=u=>d.value=u),max:1,min:0,step:.1},null,8,["value","step"])]),e("span",null,o(d.value),1),s(t(f),{size:"tiny",text:"",type:"primary",onClick:n[5]||(n[5]=u=>m({top_p:d.value}))},{default:a(()=>[v(o(l.$t("common.save")),1)]),_:1})]),e("div",be,[Se,s(t(f),{size:"small",onClick:h},{default:a(()=>[v(o(l.$t("common.reset")),1)]),_:1})])])]))}}),Ne={class:"ml-2"},ze={class:"min-h-[100px]"},Ue={class:"ml-2"},Ie={class:"min-h-[100px]"};const tt=I({__name:"index",props:{visible:{type:Boolean}},emits:["update:visible"],setup(x,{emit:r}){const _=x,g=J(),p=z(()=>!!g.isChatGPTAPI),d=N("General"),m=z({get(){return _.visible},set(h){r("update:visible",h)}});return(h,l)=>(S(),A(t(q),{show:t(m),"onUpdate:show":l[1]||(l[1]=n=>Z(m)?m.value=n:null),"auto-focus":!1,title:"设置",preset:"card",style:{width:"95%","max-width":"500px"}},{default:a(()=>[e("div",null,[s(t(W),{value:d.value,"onUpdate:value":l[0]||(l[0]=n=>d.value=n),type:"line",animated:""},{default:a(()=>[s(t(R),{name:"General",tab:"General"},{tab:a(()=>[s(t(k),{class:"text-lg",icon:"ri:file-user-line"}),e("span",Ne,o(h.$t("setting.general")),1)]),default:a(()=>[e("div",ze,[s(de)])]),_:1}),t(p)?(S(),A(t(R),{key:0,name:"Advanced",tab:"Advanced"},{tab:a(()=>[s(t(k),{class:"text-lg",icon:"ri:equalizer-line"}),e("span",Ue,o(h.$t("setting.advanced")),1)]),default:a(()=>[e("div",Ie,[s(Ce)])]),_:1})):T("",!0),T("",!0)]),_:1},8,["value"])])]),_:1},8,["show"]))}});export{tt as default};
