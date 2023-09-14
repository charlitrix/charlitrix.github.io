"use strict";(globalThis["webpackChunkaies"]=globalThis["webpackChunkaies"]||[]).push([[7877],{7877:(e,a,l)=>{l.r(a),l.d(a,{default:()=>R});var t=l(9835),d=l(6970);const s=e=>((0,t.dD)("data-v-07bdb5b2"),e=e(),(0,t.Cn)(),e),c={key:0},u={class:"row q-gutter-x-lg"},n={class:"col"},i={class:"col"},r={key:1},o={class:"row justify-center q-mb-xl"},m={class:"q-pa-lg text-h4"},f={class:"row justify-center q-my-md"},v={class:"col-12"},_={class:"q-pa-lg text-h5"},w={class:"row justify-end q-col-gutter-xl"},b={class:"text-green-8"},h={class:"text-red-8"},p={class:"row justify-center q-col-gutter-lg q-my-md"},g={class:"col-md-6"},x=s((()=>(0,t._)("div",{class:"text-h5 q-mb-md"},"Revenue",-1))),q={class:"text-h4"},Y={class:"col-md-6"},W=s((()=>(0,t._)("div",{class:"text-h5 q-mb-md"},"Expenses",-1))),y={class:"text-h4"};function k(e,a,l,s,k,D){const Z=(0,t.up)("q-skeleton"),F=(0,t.up)("q-card-section"),A=(0,t.up)("q-card"),P=(0,t.up)("q-page");return(0,t.wg)(),(0,t.j4)(P,{class:"q-pa-xl"},{default:(0,t.w5)((()=>[e.loadingData?((0,t.wg)(),(0,t.iD)("div",c,[(0,t.Wm)(Z,{bordered:"",height:"120px",class:"q-mb-xl"}),(0,t.Wm)(Z,{bordered:"",height:"150px",class:"q-mb-xl"}),(0,t._)("div",u,[(0,t._)("div",n,[(0,t.Wm)(Z,{bordered:"",height:"150px",class:"q-mb-xl"})]),(0,t._)("div",i,[(0,t.Wm)(Z,{bordered:"",height:"150px",class:"q-mb-xl"})])])])):((0,t.wg)(),(0,t.iD)("div",r,[(0,t._)("div",o,[(0,t.Wm)(A,{flat:"",bordered:"",class:"full-width"},{default:(0,t.w5)((()=>[(0,t.Wm)(F,null,{default:(0,t.w5)((()=>[(0,t._)("div",m,"Fiscal Year - "+(0,d.zw)(e.parsedFiscalYear),1)])),_:1})])),_:1})]),(0,t._)("div",f,[(0,t._)("div",v,[(0,t.Wm)(A,{flat:"",bordered:"",class:"full-width"},{default:(0,t.w5)((()=>[(0,t.Wm)(F,null,{default:(0,t.w5)((()=>[(0,t._)("div",_,(0,d.zw)(e.findValue("total"))+" - Accounts",1)])),_:1}),(0,t.Wm)(F,null,{default:(0,t.w5)((()=>[(0,t._)("div",w,[(0,t._)("div",b,(0,d.zw)(e.findValue("open_accounts"))+" - Open Accounts ",1),(0,t._)("div",h,(0,d.zw)(e.findValue("closed_accounts"))+" - Closed Accounts ",1)])])),_:1})])),_:1})])]),(0,t._)("div",p,[(0,t._)("div",g,[(0,t.Wm)(A,{flat:"",bordered:"",class:"full-width q-pa-md"},{default:(0,t.w5)((()=>[(0,t.Wm)(F,null,{default:(0,t.w5)((()=>[x,(0,t._)("div",q,(0,d.zw)(e.findAmount("Revenue")),1)])),_:1})])),_:1})]),(0,t._)("div",Y,[(0,t.Wm)(A,{flat:"",bordered:"",class:"full-width q-pa-md"},{default:(0,t.w5)((()=>[(0,t.Wm)(F,null,{default:(0,t.w5)((()=>[W,(0,t._)("div",y,(0,d.zw)(e.findAmount("Expenses")),1)])),_:1})])),_:1})])])]))])),_:1})}var D=l(499),Z=l(4019),F=l(9302),A=l(4170),P=l(1353),j=l(1809),z=l(8221);const C=(0,t.aZ)({name:"DashboardPage",setup(){(0,F.Z)();const e=(0,P.F)(),a=(0,D.iH)([]),l=(0,D.iH)(!1),{fiscalYear:d}=(0,j.Jk)(e),{saveFiscalYear:s}=e,c=(0,t.Fl)((()=>d.value&&d.value.end?A.ZP.formatDate(A.ZP.extractDate(d.value.end,"DD/MM/YYYY"),"YYYY"):"-"));function u(){a.value=[],l.value=!0,(0,Z.getFiscalYearAccountsSummary)(d.value.id).then((e=>{a.value=e.data})).catch((e=>{})).finally((()=>{l.value=!1}))}return(0,t.bv)((()=>{(0,Z.getFiscalYear)("?current=True").then((e=>{e.data&&e.data.id?s(e.data):s({})})).then((()=>{d.value.id&&u()}))})),{loadingData:l,parsedFiscalYear:c,findAmount(e){let l=a.value.find((a=>a.name==e));return l?l.amount<0?"("+(0,z.formatPrice)(l.amount)+")":(0,z.formatPrice)(l.amount):"-"},findValue(e){let l=a.value.find((a=>-1!=Object.keys(a).indexOf(e)));return l?l[e]:"-"}}}});var Q=l(1639),V=l(9885),O=l(7133),S=l(4458),T=l(3190),E=l(9984),H=l.n(E);const M=(0,Q.Z)(C,[["render",k],["__scopeId","data-v-07bdb5b2"]]),R=M;H()(C,"components",{QPage:V.Z,QSkeleton:O.ZP,QCard:S.Z,QCardSection:T.Z})}}]);