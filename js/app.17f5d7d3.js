(function(e){function t(t){for(var a,o,s=t[0],u=t[1],b=t[2],d=0,r=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(l,o)&&l[o]&&r.push(l[o][0]),l[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);i&&i(t);while(r.length)r.shift()();return n.push.apply(n,b||[]),c()}function c(){for(var e,t=0;t<n.length;t++){for(var c=n[t],a=!0,s=1;s<c.length;s++){var u=c[s];0!==l[u]&&(a=!1)}a&&(n.splice(t--,1),e=o(o.s=c[0]))}return e}var a={},l={app:0},n=[];function o(t){if(a[t])return a[t].exports;var c=a[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,o),c.l=!0,c.exports}o.m=e,o.c=a,o.d=function(e,t,c){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(o.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(c,a,function(t){return e[t]}.bind(null,a));return c},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/aviaticket/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var b=0;b<s.length;b++)t(s[b]);var i=u;n.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("cd49")},"0857":function(e,t,c){},"0f47":function(e,t,c){},"286a":function(e,t,c){"use strict";c("f8a5")},"2a37":function(e,t,c){},"2ec5":function(e,t,c){},"381b":function(e,t,c){},"49a8":function(e,t,c){},"5be9":function(e,t,c){},"64a8":function(e,t,c){"use strict";c("b0ec")},"6c4b":function(e,t,c){"use strict";c("5be9")},"6d06":function(e,t,c){"use strict";c("0f47")},7372:function(e,t,c){},7488:function(e,t,c){"use strict";c("b4d1")},"890d":function(e,t,c){"use strict";c("7372")},"8dce":function(e,t,c){},"90e6":function(e,t,c){"use strict";c("0857")},9173:function(e,t,c){"use strict";c("49a8")},"9b19":function(e,t,c){e.exports=c.p+"img/logo.ee84f7c2.svg"},"9e0b":function(e,t,c){},af01:function(e,t,c){"use strict";c("dd4a")},b0ec:function(e,t,c){},b270:function(e,t,c){"use strict";c("2ec5")},b4d1:function(e,t,c){},c518:function(e,t,c){"use strict";c("381b")},c529:function(e,t,c){"use strict";c("8dce")},cbe1:function(e,t,c){},cd49:function(e,t,c){"use strict";c.r(t);var a=c("7a23");function l(e,t){const c=Object(a["C"])("router-view");return Object(a["t"])(),Object(a["d"])(c)}var n=c("6b0d"),o=c.n(n);const s={},u=o()(s,[["render",l]]);var b=u,i=c("6605"),d=c("9b19"),r=c.n(d);const j=e=>(Object(a["w"])("data-v-0a03cfe0"),e=e(),Object(a["u"])(),e),O={class:"base-layout"},p=j(()=>Object(a["g"])("div",{class:"center mt05 mb1"},[Object(a["g"])("img",{alt:"Vue logo",src:r.a})],-1)),v={class:"container"};function m(e,t){return Object(a["t"])(),Object(a["f"])("div",O,[p,Object(a["g"])("div",v,[Object(a["B"])(e.$slots,"default",{},void 0,!0)])])}c("f066");const f={},h=o()(f,[["render",m],["__scopeId","data-v-0a03cfe0"]]);var _=h;const g=["type"];var k=Object(a["j"])({__name:"AppButton",props:{type:null,color:null,label:null,outlined:{type:Boolean},stretch:{type:Boolean}},setup(e){const t=e,{type:c,color:l,label:n,outlined:o,stretch:s}=Object(a["G"])(t);return(e,t)=>(Object(a["t"])(),Object(a["f"])("button",{class:Object(a["p"])(["app-button","subheading",Object(a["H"])(l),{outlined:Object(a["H"])(o),stretch:Object(a["H"])(s)}]),type:Object(a["H"])(c)||"button"},[Object(a["B"])(e.$slots,"default",{},()=>[Object(a["h"])(Object(a["F"])(Object(a["H"])(n)),1)])],10,g))}});c("286a");const y=o()(k,[["__scopeId","data-v-11e1dff5"]]);var H=y,x=Object(a["j"])({__name:"AppButtonToggle",props:{options:null,stretch:{type:Boolean},modelValue:null},emits:["update:modelValue"],setup(e,{emit:t}){const c=e,{options:l}=Object(a["G"])(c);function n(e){t("update:modelValue",e)}return(t,c)=>(Object(a["t"])(),Object(a["f"])("div",{class:Object(a["p"])(["app-button-toggle",{stretch:e.stretch}])},[(Object(a["t"])(!0),Object(a["f"])(a["a"],null,Object(a["A"])(Object(a["H"])(l),(t,c)=>(Object(a["t"])(),Object(a["d"])(H,{class:"app-button-toggle__item",key:c,color:t.value===e.modelValue?"primary":void 0,outlined:t.value!==e.modelValue,onClick:e=>n(t.value)},{default:Object(a["M"])(()=>[Object(a["h"])(Object(a["F"])(t.text),1)]),_:2},1032,["color","outlined","onClick"]))),128))],2))}});c("64a8");const V=o()(x,[["__scopeId","data-v-49f7f22a"]]);var w=V;const M={class:"app-sheet p2 rounded"};function S(e,t){return Object(a["t"])(),Object(a["f"])("div",M,[Object(a["B"])(e.$slots,"default",{},void 0,!0)])}c("d09f");const T={},C=o()(T,[["render",S],["__scopeId","data-v-20104a10"]]);var I=C,$=c("bc3a"),B=c.n($);const A=B.a.create({baseURL:"https://api.npoint.io",headers:{"Content-Type":"application/json"}});var E=A;const F=()=>E.get("/a1b1c28b32d9785bb26c").then(e=>e.data);var P={fetchCompanies:F};const U=Object(a["z"])([]),N=Object(a["z"])(!1),z=()=>{const e=e=>{U.value=e},t=async()=>{if(!N.value){N.value=!0;try{const t=await P.fetchCompanies(),c=t.map(e=>({...e,logo:"/img/companies/"+e.logo}));e(c)}finally{N.value=!1}}},c=e=>{var t;const c=null===(t=U.value.find(t=>t.id===e))||void 0===t?void 0:t.logo;return c||""};return U.value.length||t(),{companies:Object(a["y"])(U),areCompaniesLoading:Object(a["y"])(N),loadCompanies:t,updateCompanies:e,getCompanyLogo:c}};var G=z;const L={mounted(e){const t=e.innerHTML;e.innerHTML=t.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")}};var D=L;const J=6e4,R=60,q=J*R,K=e=>{const t=Math.floor(e/q),c=Math.floor(e/J)%R;return`${t}ч ${c}м`},Q=e=>{const t=new Date(e);return`${t.getHours()}:${t.getMinutes()}`},W=e=>(Object(a["w"])("data-v-714b10dc"),e=e(),Object(a["u"])(),e),X={class:"ticket-card__top flex items-center justify-between mb2"},Y={class:"ticket-card__price h3 line-height-1"},Z={class:"ticket-card__price"},ee=["src"],te={class:"ticket-card__bottom flex items-center justify-between"},ce={class:"ticket-card__route col-4"},ae={class:"subheading text-muted"},le={class:"ticket-card__duration col-4"},ne=W(()=>Object(a["g"])("div",{class:"subheading text-muted"},"В пути",-1)),oe={class:"ticket-card__stops col-4"},se={class:"subheading text-muted"},ue={key:1,class:"subheading text-muted"};var be=Object(a["j"])({__name:"TicketCard",props:{ticketData:null},setup(e){const t=e,{ticketData:c}=Object(a["G"])(t),{getCompanyLogo:l}=G(),n=Object(a["b"])(()=>l(c.value.companyId)),o=Object(a["b"])(()=>K(c.value.info.duration)),s=Object(a["b"])(()=>`${Q(c.value.info.dateStart)} – ${Q(c.value.info.dateEnd)}`);return(e,t)=>(Object(a["t"])(),Object(a["d"])(I,{class:"ticket-card shadow-3"},{default:Object(a["M"])(()=>[Object(a["g"])("div",X,[Object(a["N"])((Object(a["t"])(),Object(a["f"])("div",Y,[Object(a["h"])(Object(a["F"])(Object(a["H"])(c).price)+" Р",1)])),[[Object(a["H"])(D)]]),Object(a["g"])("div",Z,[Object(a["g"])("img",{class:"block",src:Object(a["H"])(n)},null,8,ee)])]),Object(a["g"])("div",te,[Object(a["g"])("div",ce,[Object(a["g"])("div",ae,Object(a["F"])(Object(a["H"])(c).info.origin)+" – "+Object(a["F"])(Object(a["H"])(c).info.destination),1),Object(a["g"])("div",null,Object(a["F"])(Object(a["H"])(s)),1)]),Object(a["g"])("div",le,[ne,Object(a["g"])("div",null,Object(a["F"])(Object(a["H"])(o)),1)]),Object(a["g"])("div",oe,[Object(a["H"])(c).info.stops.length?(Object(a["t"])(),Object(a["f"])(a["a"],{key:0},[Object(a["g"])("div",se,Object(a["F"])(Object(a["H"])(c).info.stops.length)+" пересадки",1),Object(a["g"])("div",null,Object(a["F"])(Object(a["H"])(c).info.stops.join(", ")),1)],64)):(Object(a["t"])(),Object(a["f"])("div",ue,"Без пересадок"))])])]),_:1}))}});c("7488");const ie=o()(be,[["__scopeId","data-v-714b10dc"]]);var de=ie;const re=[{text:"Без пересадок",value:0},{text:"1 пересадка",value:1},{text:"2 пересадки",value:2},{text:"3 пересадки",value:3}],je=Object(a["z"])([]),Oe={id:"stopNumber",name:"stopNumber",title:"Количество пересадок",options:re},pe=()=>{function e(e){je.value=e}return{stopNumberParams:Object(a["y"])(Oe),stopNumberSelected:Object(a["y"])(je),updateStopNumber:e}};var ve=pe;const{companies:me}=G(),fe=Object(a["b"])(()=>{var e;return[{text:"Все",value:"all"},...null===(e=me.value)||void 0===e?void 0:e.map(e=>({text:e.name,value:e.id}))]}),he=Object(a["z"])("all"),_e=Object(a["b"])(()=>({id:"company",name:"company",title:"Компания",options:fe.value})),ge=()=>{function e(e){he.value=e}return{companyParams:Object(a["y"])(_e),companySelected:Object(a["y"])(he),updateCompany:e}};var ke=ge;const ye={class:"subheading mb1"};var He=Object(a["j"])({__name:"TicketFilterCard",props:{title:null},setup(e){const t=e,{title:c}=Object(a["G"])(t);return(e,t)=>(Object(a["t"])(),Object(a["d"])(I,{class:"ticket-filter-card"},{default:Object(a["M"])(()=>[Object(a["g"])("div",ye,Object(a["F"])(Object(a["H"])(c)),1),Object(a["B"])(e.$slots,"default")]),_:3}))}});c("6d06");const xe=o()(He,[["__scopeId","data-v-39cda7d9"]]);var Ve=xe;c("caad");const we=["for"],Me=["id","name","value","checked"],Se={class:"app-checkbox__label"};var Te=Object(a["j"])({__name:"AppCheckbox",props:{id:null,name:null,label:null,value:null,modelValue:{type:[Boolean,null,Array]}},emits:["update:modelValue"],setup(e,{emit:t}){const c=e,{id:l,name:n,label:o,value:s,modelValue:u}=Object(a["G"])(c),b=Object(a["b"])(()=>Array.isArray(u.value)?u.value.map(e=>String(e)).includes(String(null===s||void 0===s?void 0:s.value)):!!u.value);function i(e){const{target:c}=e,a=c.checked;let l;l=Array.isArray(u.value)?a?[...u.value,null===s||void 0===s?void 0:s.value]:[...u.value].filter(e=>String(e)!==String(null===s||void 0===s?void 0:s.value)):null===s||void 0===s?void 0:s.value,t("update:modelValue",l)}return(e,t)=>(Object(a["t"])(),Object(a["f"])("label",{for:Object(a["H"])(l),class:Object(a["p"])(["app-checkbox",{"app-checkbox--checked":Object(a["H"])(b)}])},[Object(a["g"])("input",{type:"checkbox",id:Object(a["H"])(l),name:Object(a["H"])(n),value:Object(a["H"])(s),checked:Object(a["H"])(b),onChange:i},null,40,Me),Object(a["g"])("span",{class:Object(a["p"])(["app-checkbox__control","mdi","mdi-checkbox-"+(Object(a["H"])(b)?"marked":"blank-outline")])},null,2),Object(a["g"])("span",Se,Object(a["F"])(Object(a["H"])(o)),1)],10,we))}});c("af01");const Ce=o()(Te,[["__scopeId","data-v-79f9b942"]]);var Ie=Ce;const $e=["for"],Be=["id","name","value","checked"],Ae={class:"app-radio__label"};var Ee=Object(a["j"])({__name:"AppRadio",props:{id:null,name:null,label:null,value:null,modelValue:null},emits:["update:modelValue"],setup(e,{emit:t}){const c=e,{id:l,name:n,label:o,value:s,modelValue:u}=Object(a["G"])(c),b=Object(a["b"])(()=>String(s.value)===String(u.value));function i(){t("update:modelValue",s.value)}return(e,t)=>(Object(a["t"])(),Object(a["f"])("label",{for:Object(a["H"])(l),class:Object(a["p"])(["app-radio",{"app-radio--checked":Object(a["H"])(b)}])},[Object(a["g"])("input",{type:"radio",id:Object(a["H"])(l),name:Object(a["H"])(n),value:Object(a["H"])(s),checked:Object(a["H"])(b),onChange:i},null,40,Be),Object(a["g"])("span",{class:Object(a["p"])(["app-radio__control","mdi","mdi-radiobox-"+(Object(a["H"])(b)?"marked":"blank")])},null,2),Object(a["g"])("span",Ae,Object(a["F"])(Object(a["H"])(o)),1)],10,$e))}});c("6c4b");const Fe=o()(Ee,[["__scopeId","data-v-e87525fc"]]);var Pe=Fe;const Ue={class:"app-list"};function Ne(e,t){return Object(a["t"])(),Object(a["f"])("div",Ue,[Object(a["B"])(e.$slots,"default")])}const ze={},Ge=o()(ze,[["render",Ne]]);var Le=Ge;const De={class:"app-list-item px2 py1"};function Je(e,t){return Object(a["t"])(),Object(a["f"])("div",De,[Object(a["B"])(e.$slots,"default",{},void 0,!0)])}c("890d");const Re={},qe=o()(Re,[["render",Je],["__scopeId","data-v-032bb1d4"]]);var Ke=qe;const Qe={class:"ticket-filter"};var We=Object(a["j"])({__name:"TicketFilter",setup(e){const{stopNumberParams:t,stopNumberSelected:c,updateStopNumber:l}=ve(),{companyParams:n,companySelected:o,updateCompany:s}=ke();return(e,u)=>(Object(a["t"])(),Object(a["f"])("div",Qe,[Object(a["i"])(Ve,{class:"mb2 shadow-3",title:Object(a["H"])(t).title},{default:Object(a["M"])(()=>[Object(a["i"])(Le,{class:"mxn2"},{default:Object(a["M"])(()=>[(Object(a["t"])(!0),Object(a["f"])(a["a"],null,Object(a["A"])(Object(a["H"])(t).options,(e,n)=>(Object(a["t"])(),Object(a["d"])(Ke,{key:n},{default:Object(a["M"])(()=>[Object(a["i"])(Ie,{class:"block mxn2 px2 myn1 py1",id:`${Object(a["H"])(t).id}-${n}`,value:e.value,label:e.text,name:Object(a["H"])(t).name,"model-value":Object(a["H"])(c),"onUpdate:modelValue":Object(a["H"])(l)},null,8,["id","value","label","name","model-value","onUpdate:modelValue"])]),_:2},1024))),128))]),_:1})]),_:1},8,["title"]),Object(a["i"])(Ve,{class:"mb2 shadow-3",title:Object(a["H"])(n).title},{default:Object(a["M"])(()=>[Object(a["i"])(Le,{class:"mxn2"},{default:Object(a["M"])(()=>[(Object(a["t"])(!0),Object(a["f"])(a["a"],null,Object(a["A"])(Object(a["H"])(n).options,(e,t)=>(Object(a["t"])(),Object(a["d"])(Ke,{key:t},{default:Object(a["M"])(()=>[Object(a["i"])(Pe,{class:"block mxn2 px2 myn1 py1",id:`${Object(a["H"])(n).id}-${t}`,value:e.value,label:e.text,name:"company","model-value":Object(a["H"])(o),"onUpdate:modelValue":Object(a["H"])(s)},null,8,["id","value","label","model-value","onUpdate:modelValue"])]),_:2},1024))),128))]),_:1})]),_:1},8,["title"])]))}});const Xe=We;var Ye=Xe;const Ze={class:"app-input"},et=["type","name","value","placeholder","disabled","maxlength"];var tt=Object(a["j"])({__name:"AppInput",props:{name:null,placeholder:null,type:null,disabled:{type:Boolean},modelValue:null,maxlength:null},emits:["update:modelValue"],setup(e,{emit:t}){const c=e,{name:l,placeholder:n,type:o,modelValue:s,disabled:u}=Object(a["G"])(c);function b(e){if(e instanceof Event){const{target:c}=e;t("update:modelValue",null===c||void 0===c?void 0:c.value)}else t("update:modelValue",e)}return(t,c)=>(Object(a["t"])(),Object(a["f"])("div",Ze,[Object(a["B"])(t.$slots,"default",{updateValue:b},()=>[Object(a["g"])("input",{type:Object(a["H"])(o)||"text",name:Object(a["H"])(l),value:Object(a["H"])(s),placeholder:Object(a["H"])(n),disabled:!!Object(a["H"])(u),maxlength:e.maxlength,onInput:b},null,40,et)])]))}});c("c529");const ct=o()(tt,[["__scopeId","data-v-668ebc42"]]);var at=ct;const lt=e=>(Object(a["w"])("data-v-07809437"),e=e(),Object(a["u"])(),e),nt={class:"ticket-search-direction"},ot=lt(()=>Object(a["g"])("span",{class:"mdi mdi-swap-horizontal"},null,-1));var st=Object(a["j"])({__name:"TicketSearchDirection",setup(e){const t=Object(a["x"])({from:void 0,to:void 0});function c(){const e=t.to;t.to=t.from,t.from=e}return(e,l)=>(Object(a["t"])(),Object(a["f"])("div",nt,[Object(a["i"])(at,{class:"ticket-search-direction__input shadow-3",maxlength:3,placeholder:"Откуда",modelValue:t.from,"onUpdate:modelValue":l[0]||(l[0]=e=>t.from=e)},null,8,["modelValue"]),Object(a["i"])(at,{class:"ticket-search-direction__input shadow-3",maxlength:3,placeholder:"Куда",modelValue:t.to,"onUpdate:modelValue":l[1]||(l[1]=e=>t.to=e)},null,8,["modelValue"]),Object(a["i"])(H,{class:"ticket-search-direction__swap shadow-3",onClick:c},{default:Object(a["M"])(()=>[ot]),_:1})]))}});c("fc77");const ut=o()(st,[["__scopeId","data-v-07809437"]]);var bt=ut,it=c("ad53"),dt=c("24e7");const rt=e=>(Object(a["w"])("data-v-5cf2e536"),e=e(),Object(a["u"])(),e),jt=rt(()=>Object(a["g"])("span",{class:"app-datepicker__icon mdi mdi-calendar-today"},null,-1));var Ot=Object(a["j"])({__name:"AppDatepicker",props:{name:null,placeholder:null,disabled:{type:Boolean},modelValue:null},setup(e){const t=e,{name:c,placeholder:l,modelValue:n,disabled:o}=Object(a["G"])(t);return(e,t)=>(Object(a["t"])(),Object(a["d"])(at,Object(a["n"])({class:"app-datepicker"},e.$attrs),{default:Object(a["M"])(({updateValue:e})=>[Object(a["i"])(Object(a["H"])(dt["a"]),{class:"app-datepicker__control",name:Object(a["H"])(c),placeholder:Object(a["H"])(l),locale:Object(a["H"])(it["a"]),"weekday-format":"EEEEEE","input-format":"d MMMM, EEEEEE","model-value":Object(a["H"])(n),"onUpdate:modelValue":e,disabled:Object(a["H"])(o)},null,8,["name","placeholder","locale","model-value","onUpdate:modelValue","disabled"]),jt]),_:1},16))}});c("c518");const pt=o()(Ot,[["__scopeId","data-v-5cf2e536"]]);var vt=pt;const mt={class:"ticket-search-dates"};var ft=Object(a["j"])({__name:"TicketSearchDates",setup(e){const t=Object(a["x"])({there:void 0,back:void 0});return(e,c)=>(Object(a["t"])(),Object(a["f"])("div",mt,[Object(a["i"])(vt,{class:"ticket-search-dates__control shadow-3",placeholder:"Когда",modelValue:t.there,"onUpdate:modelValue":c[0]||(c[0]=e=>t.there=e)},null,8,["modelValue"]),Object(a["i"])(vt,{class:"ticket-search-dates__control shadow-3",modelValue:t.back,"onUpdate:modelValue":c[1]||(c[1]=e=>t.back=e),placeholder:"Обратно"},null,8,["modelValue"])]))}});c("b270");const ht=o()(ft,[["__scopeId","data-v-93cf4896"]]);var _t=ht;const gt={class:"ticket-search"};var kt=Object(a["j"])({__name:"TicketSearch",setup(e){return(e,t)=>(Object(a["t"])(),Object(a["f"])("div",gt,[Object(a["i"])(bt,{class:"ticket-search__direction"}),Object(a["i"])(_t)]))}});c("9173");const yt=o()(kt,[["__scopeId","data-v-759586f4"]]);var Ht=yt;const xt=()=>E.get("/163b5e66df9f2741243e").then(e=>e.data);var Vt={fetchTickets:xt};const wt=Object(a["z"])(void 0),Mt=Object(a["z"])(!1),St=()=>{const e=e=>{wt.value=e},t=async()=>{if(!Mt.value){Mt.value=!0;try{const t=await Vt.fetchTickets();e(t)}finally{Mt.value=!1}}};return wt.value||t(),{tickets:Object(a["y"])(wt),areTicketsLoading:Object(a["y"])(Mt),updateTickets:e,loadTickets:t}};var Tt=St;const Ct=e=>(Object(a["w"])("data-v-08c21ad2"),e=e(),Object(a["u"])(),e),It=Ct(()=>Object(a["g"])("hr",null,null,-1)),$t={class:"clearfix mxn1"},Bt={class:"md-col md-col-4 px1"},At={class:"md-col md-col-8 px1"},Et=Object(a["h"])("loading..."),Ft=Object(a["h"])(" Что-то пошло не так. Попробуйте перезагрузить страницу "),Pt=Object(a["h"])(" Мы не нашли подходящих билетов. Попробуйте изменить условия поиска. "),Ut=Object(a["h"])(" Показать еще 5 билетов ");var Nt=Object(a["j"])({__name:"TicketPage",setup(e){const{tickets:t,areTicketsLoading:c}=Tt(),l=[{text:"Самый дешевый",value:"cheapest"},{text:"Самый быстрый",value:"fastest"},{text:"Оптимальный",value:"optimal"}],n=Object(a["z"])("cheapest");return(e,o)=>(Object(a["t"])(),Object(a["d"])(_,{class:"ticket-page"},{default:Object(a["M"])(()=>{var e;return[Object(a["i"])(Ht),It,Object(a["g"])("div",$t,[Object(a["g"])("div",Bt,[Object(a["i"])(Ye)]),Object(a["g"])("div",At,[Object(a["i"])(w,{class:"mb2",stretch:"",options:l,modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=e=>n.value=e)},null,8,["modelValue"]),Object(a["H"])(c)?(Object(a["t"])(),Object(a["f"])(a["a"],{key:0},[Et],64)):void 0===Object(a["H"])(t)?(Object(a["t"])(),Object(a["f"])(a["a"],{key:1},[Ft],64)):Object(a["H"])(t)&&0===Object(a["H"])(t).length?(Object(a["t"])(),Object(a["f"])(a["a"],{key:2},[Pt],64)):(Object(a["t"])(),Object(a["f"])(a["a"],{key:3},[(Object(a["t"])(!0),Object(a["f"])(a["a"],null,Object(a["A"])(null===(e=Object(a["H"])(t))||void 0===e?void 0:e.slice(0,5),e=>(Object(a["t"])(),Object(a["d"])(de,{key:e.id,"ticket-data":e,class:"mb2"},null,8,["ticket-data"]))),128)),Object(a["i"])(H,{class:"block",color:"primary",stretch:""},{default:Object(a["M"])(()=>[Ut]),_:1})],64))])])]}),_:1}))}});c("90e6");const zt=o()(Nt,[["__scopeId","data-v-08c21ad2"]]);var Gt=zt;const Lt=[{path:"/",name:"TicketPage",component:Gt}],Dt=Object(i["a"])({history:Object(i["b"])("/aviaticket/"),routes:Lt});var Jt=Dt,Rt=c("5502"),qt=Object(Rt["a"])({state:{},mutations:{},actions:{},modules:{}});c("208c"),c("b5cc"),c("fb98");Object(a["c"])(b).use(qt).use(Jt).mount("#app")},d09f:function(e,t,c){"use strict";c("cbe1")},dd4a:function(e,t,c){},f066:function(e,t,c){"use strict";c("9e0b")},f8a5:function(e,t,c){},fb98:function(e,t,c){},fc77:function(e,t,c){"use strict";c("2a37")}});
//# sourceMappingURL=app.17f5d7d3.js.map