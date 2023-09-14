(globalThis["webpackChunkaies"]=globalThis["webpackChunkaies"]||[]).push([[3064],{1353:(e,a,l)=>{"use strict";l.d(a,{F:()=>r});var o=l(1809),s=l(3833),n=l(499),t=l(9835);const r=(0,o.Q_)("accounting-settings",(()=>{const e=(0,n.iH)(null),a=(0,t.Fl)((()=>e.value&&e.value.id?e.value:l()&&l().fiscalYearData?l().fiscalYearData:{}));function l(){return JSON.parse(s.Z.getItem("accounts"))||{}}function o(e,a){let o=l();o[e]=a,s.Z.set("accounts",JSON.stringify(o))}function r(a){e.value=null,e.value=a,o("fiscalYearData",a)}return{fiscalYear:a,saveFiscalYear:r}}))},9258:(e,a,l)=>{"use strict";l.d(a,{Z:()=>h});var o=l(9835),s=l(6970);const n=(0,o._)("div",{class:"q-py-sm"},null,-1),t=(0,o._)("div",{class:"text-h6 q-ml-md"},"Amount:",-1),r=(0,o._)("div",{class:"q-py-sm"},null,-1),i=(0,o._)("span",{class:"text-h6"},"Balance: ",-1),u={class:"text-h6"};function c(e,a,l,c,m,d){const p=(0,o.up)("money-input-component"),w=(0,o.up)("q-field"),b=(0,o.up)("q-card-section"),g=(0,o.up)("q-card");return(0,o.wg)(),(0,o.j4)(g,null,{default:(0,o.w5)((()=>[(0,o.Wm)(b,null,{default:(0,o.w5)((()=>[(0,o.Wm)(p,{label:"Cash",modelValue:e.cash,"onUpdate:modelValue":a[0]||(a[0]=a=>e.cash=a),"input-class":"text-h6",required:!1},null,8,["modelValue"]),n,(0,o.Wm)(p,{modelValue:e.amount,"onUpdate:modelValue":a[1]||(a[1]=a=>e.amount=a),"input-class":"text-h6",required:!1},{before:(0,o.w5)((()=>[t])),_:1},8,["modelValue"]),r,(0,o.Wm)(w,{outlined:""},{before:(0,o.w5)((()=>[i])),control:(0,o.w5)((()=>[(0,o._)("span",u,(0,s.zw)(e.formatPrice(e.balance,{currency:""})),1)])),_:1})])),_:1})])),_:1})}var m=l(499),d=l(2580);const p=(0,o.aZ)({name:"BalanceCalculatorComponent",components:{MoneyInputComponent:d.Z},props:{defaultAmount:{type:Number,default:0}},setup(e){const a=(0,m.iH)(),l=(0,m.iH)(e.defaultAmount),s=(0,o.Fl)((()=>{if(!l.value||!a.value)return 0;let e=a.value-l.value;return e>0?e:0}));return{cash:a,balance:s,amount:l}}});var w=l(1639),b=l(4458),g=l(3190),_=l(8149),f=l(9984),v=l.n(f);const q=(0,w.Z)(p,[["render",c]]),h=q;v()(p,"components",{QCard:b.Z,QCardSection:g.Z,QField:_.Z})},387:(e,a,l)=>{"use strict";l.d(a,{Z:()=>Z});var o=l(9835);const s=(0,o._)("span",{class:"shadow-20"},"Menu",-1),n=(0,o._)("span",{class:"shadow-20"},"Point Of Sale",-1),t=(0,o._)("span",{class:"shadow-20"},"Other Items",-1),r=(0,o._)("span",{class:"shadow-20"},"Inventory",-1),i=(0,o._)("span",{class:"shadow-20"},"Store",-1),u=(0,o._)("span",{class:"shadow-20"},"Procurement",-1),c=(0,o._)("span",{class:"shadow-20"},"Expenses",-1),m=(0,o._)("span",{class:"shadow-20"},"Invoices",-1),d=(0,o._)("span",{class:"shadow-20"},"Accounting",-1),p=(0,o._)("span",{class:"shadow-20"},"Reports",-1);function w(e,a,l,w,b,g){const _=(0,o.up)("q-icon"),f=(0,o.up)("q-fab-action"),v=(0,o.up)("q-fab"),q=(0,o.up)("q-page-sticky");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(q,{position:"bottom-right",offset:[18,18]},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{direction:"up",color:"accent",icon:"keyboard_arrow_up",class:"shadow-20","vertical-actions-align":"left"},{default:(0,o.w5)((()=>[(0,o.Wm)(f,{"external-label":"","label-position":"left",color:"orange",to:{name:"IndexPage"},"label-class":"bg-dark"},{icon:(0,o.w5)((()=>[(0,o.Wm)(_,{name:"grid_view",size:"xs",class:"shadow-20"})])),label:(0,o.w5)((()=>[s])),_:1}),e.permissionRequired("auth","view_point_of_sale_summary")||e.permissionRequired("rooms","view_sale")||e.permissionRequired("restaurant","view_itemsale")||e.permissionRequired("bar","view_brandsale")||e.permissionRequired("otherservices","view_order")?((0,o.wg)(),(0,o.j4)(f,{key:0,"external-label":"","label-position":"left",color:"orange","label-class":"bg-dark",to:{name:"PointOfSaleDashboardPage"}},{icon:(0,o.w5)((()=>[(0,o.Wm)(_,{name:"point_of_sale",size:"xs",class:"shadow-20"})])),label:(0,o.w5)((()=>[n])),_:1})):(0,o.kq)("",!0),e.permissionRequired("rooms","view_room")||e.permissionRequired("rooms","view_roomtype")||e.permissionRequired("rooms","view_expense")||e.permissionRequired("otherservices","view_service")||e.permissionRequired("otherservices","view_category")||e.permissionRequired("otherservices","view_expense")?((0,o.wg)(),(0,o.j4)(f,{key:1,"external-label":"","label-position":"left",color:"orange","label-class":"bg-dark",to:{name:"BedRooms"}},{icon:(0,o.w5)((()=>[(0,o.Wm)(_,{name:"view_list",size:"xs",class:"shadow-20"})])),label:(0,o.w5)((()=>[t])),_:1})):(0,o.kq)("",!0),e.permissionRequired("auth","view_inventory_summary")||e.permissionRequired("kitchen","view_stock")||e.permissionRequired("restaurant","view_item")||e.permissionRequired("restaurant","view_category")||e.permissionRequired("bar","view_brand")||e.permissionRequired("bar","view_category")?((0,o.wg)(),(0,o.j4)(f,{key:2,"external-label":"","label-position":"left",color:"orange","label-class":"bg-dark",to:{name:"InventoryDashboardPage"}},{icon:(0,o.w5)((()=>[(0,o.Wm)(_,{name:"inventory",size:"xs",class:"shadow-20"})])),label:(0,o.w5)((()=>[r])),_:1})):(0,o.kq)("",!0),e.permissionRequired("auth","view_store_summary")||e.permissionRequired("store","view_category")||e.permissionRequired("store","view_item")||e.permissionRequired("store","view_incomingstock")||e.permissionRequired("store","view_outgoingstock")?((0,o.wg)(),(0,o.j4)(f,{key:3,"external-label":"","label-position":"left",color:"orange","label-class":"bg-dark",to:{name:"StoreDashboard"}},{icon:(0,o.w5)((()=>[(0,o.Wm)(_,{name:"store",size:"xs",class:"shadow-20"})])),label:(0,o.w5)((()=>[i])),_:1})):(0,o.kq)("",!0),e.permissionRequired("auth","view_procurement_summary")||e.permissionRequired("procurement","view_requisition")||e.permissionRequired("procurement","view_purchaseorder")?((0,o.wg)(),(0,o.j4)(f,{key:4,"external-label":"","label-position":"left",color:"orange","label-class":"bg-dark",to:{name:"ProcurementDashboard"}},{icon:(0,o.w5)((()=>[(0,o.Wm)(_,{name:"payments",size:"xs",class:"shadow-20"})])),label:(0,o.w5)((()=>[u])),_:1})):(0,o.kq)("",!0),e.permissionRequired("expenses","view_expense")||e.permissionRequired("expenses","view_expensetrack")?((0,o.wg)(),(0,o.j4)(f,{key:5,"external-label":"","label-position":"left",color:"orange","label-class":"bg-dark",to:{name:"ExpensesIndex"}},{icon:(0,o.w5)((()=>[(0,o.Wm)(_,{name:"credit_card",size:"xs",class:"shadow-20"})])),label:(0,o.w5)((()=>[c])),_:1})):(0,o.kq)("",!0),(0,o.Wm)(f,{"external-label":"","label-position":"left",color:"orange","label-class":"bg-dark",to:{name:"InvoiceSummary"}},{icon:(0,o.w5)((()=>[(0,o.Wm)(_,{name:"description",size:"xs",class:"shadow-20"})])),label:(0,o.w5)((()=>[m])),_:1}),e.permissionRequired("accounts","view_account")?((0,o.wg)(),(0,o.j4)(f,{key:6,"external-label":"","label-position":"left",color:"orange","label-class":"bg-dark",to:{name:"AccountsDashboard"}},{icon:(0,o.w5)((()=>[(0,o.Wm)(_,{name:"request_quote",size:"xs",class:"shadow-20"})])),label:(0,o.w5)((()=>[d])),_:1})):(0,o.kq)("",!0),e.permissionRequired("auth","view_reports")?((0,o.wg)(),(0,o.j4)(f,{key:7,"external-label":"","label-position":"left",color:"orange","label-class":"bg-dark",to:{name:"ReportsIndex"}},{icon:(0,o.w5)((()=>[(0,o.Wm)(_,{name:"analytics",size:"xs",class:"shadow-20"})])),label:(0,o.w5)((()=>[p])),_:1})):(0,o.kq)("",!0)])),_:1})])),_:1}),(0,o.Wm)(q,{position:"bottom-left",offset:[0,0]})],64)}const b=(0,o.aZ)({name:"FloatingMenuComponent",setup(){const{toggleOnScreenKeyboard:e}=(0,o.f3)("onScreenKeyboard");return{toggleOnScreenKeyboard:e}}});var g=l(1639),_=l(627),f=l(9361),v=l(935),q=l(2857),h=l(8879),k=l(9984),y=l.n(k);const x=(0,g.Z)(b,[["render",w]]),Z=x;y()(b,"components",{QPageSticky:_.Z,QFab:f.Z,QFabAction:v.Z,QIcon:q.Z,QBtn:h.Z})},1383:(e,a,l)=>{"use strict";l.d(a,{Z:()=>z});l(9665);var o=l(9835);function s(e,a,s,n,t,r){const i=(0,o.up)("title-bar-component"),u=(0,o.up)("q-btn"),c=(0,o.up)("q-img"),m=(0,o.up)("q-avatar"),d=(0,o.up)("q-toolbar-title"),p=(0,o.up)("q-toolbar"),w=(0,o.up)("q-header"),b=(0,o.up)("q-input"),g=(0,o.up)("q-card-section"),_=(0,o.up)("q-card-actions"),f=(0,o.up)("q-form"),v=(0,o.up)("q-card"),q=(0,o.up)("q-dialog"),h=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(w,null,{default:(0,o.w5)((()=>[(0,o.Wm)(i),(0,o.Wm)(p,{class:"bg-blue-9"},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:a[0]||(a[0]=a=>e.$emit("toggledLeftDrawer",!e.leftDrawerOpen))}),(0,o.Wm)(m,{size:"40px",class:"q-ml-md cursor-pointer",onClick:a[1]||(a[1]=a=>e.$router.push({name:"IndexPage"}))},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{src:l(7737)},null,8,["src"])])),_:1}),(0,o.Wm)(d,{class:"cursor-pointer",onClick:a[2]||(a[2]=a=>e.$router.push({name:"IndexPage"}))},{default:(0,o.w5)((()=>[(0,o.Uk)(" Track Sente ")])),_:1}),(0,o.Wm)(u,{flat:"",dense:"","no-caps":"",label:e.fullName,to:{name:"AccountInfo"},class:"q-mr-md q-px-lg",icon:"account_circle"},null,8,["label"]),(0,o.Wm)(u,{flat:"",round:"",icon:"power_settings_new",onClick:e.logOutUser},null,8,["onClick"])])),_:1})])),_:1}),(0,o.Wm)(q,{modelValue:e.logoutDialog,"onUpdate:modelValue":a[6]||(a[6]=a=>e.logoutDialog=a)},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{style:{minWidth:"500px"}},{default:(0,o.w5)((()=>[(0,o.Wm)(f,{ref:"logoutForm",onSubmit:e.submitSales},{default:(0,o.w5)((()=>[(0,o.Wm)(p,{class:"bg-primary text-white"},{default:(0,o.w5)((()=>[(0,o.Wm)(d,null,{default:(0,o.w5)((()=>[(0,o.Uk)("Today Sales")])),_:1}),(0,o.wy)((0,o.Wm)(u,{round:"",flat:"",icon:"close"},null,512),[[h]])])),_:1}),(0,o.Wm)(g,null,{default:(0,o.w5)((()=>[(0,o.Wm)(b,{modelValue:e.trackData.password,"onUpdate:modelValue":a[4]||(a[4]=a=>e.trackData.password=a),label:"Password","lazy-rules":"ondemand",rules:e.textInputRequiredRules(),type:e.passwordToggle?"password":"text"},{append:(0,o.w5)((()=>[(0,o.Wm)(u,{flat:"",round:"",icon:e.passwordToggle?"visibility_off":"visibility",onClick:a[3]||(a[3]=a=>e.passwordToggle=!e.passwordToggle)},null,8,["icon"])])),_:1},8,["modelValue","rules","type"]),(0,o.Wm)(b,{modelValue:e.trackData.cash,"onUpdate:modelValue":a[5]||(a[5]=a=>e.trackData.cash=a),label:"Cash",type:"number","lazy-rules":"ondemand",rules:e.numberInputRequiredRules()},null,8,["modelValue","rules"])])),_:1}),(0,o.Wm)(_,null,{default:(0,o.w5)((()=>[(0,o.Wm)(u,{rounded:"",type:"submit",color:"primary",label:"submit",class:"full-width",loading:e.submitting},null,8,["loading"])])),_:1})])),_:1},8,["onSubmit"])])),_:1})])),_:1},8,["modelValue"])],64)}var n=l(499),t=l(1809),r=l(9302),i=l(6144),u=l(8221),c=l(4019),m=l(8339),d=l(6037);const p=(0,o.aZ)({name:"HeaderComponent",props:["leftDrawerOpen"],emits:["toggledLeftDrawer"],components:{TitleBarComponent:d.Z},setup(){const e=(0,r.Z)(),a=(0,i.L)(),l=(0,m.tv)(),o=(0,n.iH)({}),s=(0,n.iH)(!1),d=(0,n.iH)(!1),p=(0,n.iH)(null),w=(0,n.iH)(!0),{fullName:b,userName:g}=(0,t.Jk)(a),{logOut:_}=a;function f(){l.push({name:"Login"}),_()}return{fullName:b,userName:g,trackData:o,logoutDialog:s,submitting:d,logoutForm:p,passwordToggle:w,submitSales(){p.value.validate()&&(d.value=!0,(0,c.createLogoutSalesTracking)(o.value).then((e=>{s.value=!1,f()})).catch((e=>{(0,u.displayNotification)(e.response.data,"negative")})).finally((()=>{d.value=!1})))},logOutUser(){e.dialog({title:"Confirm",message:"Are you sure you want to log out?",cancel:"No",ok:"Yes"}).onOk((()=>{(0,u.permissionRequired)("auth","track_sales")?s.value=!0:f()}))}}}});var w=l(1639),b=l(6602),g=l(1663),_=l(8879),f=l(1357),v=l(335),q=l(1973),h=l(2074),k=l(4458),y=l(8326),x=l(3190),Z=l(6611),W=l(1821),R=l(2146),C=l(9984),I=l.n(C);const Q=(0,w.Z)(p,[["render",s]]),z=Q;I()(p,"components",{QHeader:b.Z,QToolbar:g.Z,QBtn:_.Z,QAvatar:f.Z,QImg:v.Z,QToolbarTitle:q.Z,QDialog:h.Z,QCard:k.Z,QForm:y.Z,QCardSection:x.Z,QInput:Z.Z,QCardActions:W.Z}),I()(p,"directives",{ClosePopup:R.Z})},6388:(e,a,l)=>{"use strict";l.d(a,{Z:()=>b});var o=l(9835),s=l(6970);function n(e,a,l,n,t,r){const i=(0,o.up)("q-item-label"),u=(0,o.up)("q-item-section"),c=(0,o.up)("q-item"),m=(0,o.Q2)("ripple");return(0,o.wy)(((0,o.wg)(),(0,o.j4)(c,(0,o.dG)({exact:"","active-class":"text-white bg-primary rounded-right",clickable:""},e.$props),{default:(0,o.w5)((()=>[(0,o.Wm)(u,null,{default:(0,o.w5)((()=>[(0,o.Wm)(i,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(e.title),1)])),_:1})])),_:1})])),_:1},16)),[[m]])}const t=(0,o.aZ)({name:"ItemLink",props:{to:{type:Object,required:!0},title:{type:String,required:!0},insetLevel:{default:.8}}});var r=l(1639),i=l(490),u=l(1233),c=l(3115),m=l(1136),d=l(9984),p=l.n(d);const w=(0,r.Z)(t,[["render",n]]),b=w;p()(t,"components",{QItem:i.Z,QItemSection:u.Z,QItemLabel:c.Z}),p()(t,"directives",{Ripple:m.Z})},2580:(e,a,l)=>{"use strict";l.d(a,{Z:()=>p});var o=l(9835),s=l(6970);const n=["id","value"];function t(e,a,l,t,r,i){const u=(0,o.up)("q-field");return(0,o.wg)(),(0,o.j4)(u,{outlined:"","model-value":e.modelValue,label:e.label,"lazy-rules":"ondemand",rules:e.required?e.numberInputRequiredRules():[],style:{marginLeft:"-13px !important"}},{control:(0,o.w5)((({id:l,modelValue:t})=>[(0,o._)("input",{id:l,class:(0,s.C_)(["q-field__input",e.inputClass]),value:e.convertToThousand(t),onInput:a[0]||(a[0]=a=>e.$emit("update:modelValue",e.convertToNumber(a.target.value)))},null,42,n)])),before:(0,o.w5)((()=>[(0,o.WI)(e.$slots,"before")])),_:3},8,["model-value","label","rules"])}const r=(0,o.aZ)({name:"MoneyInputComponent",inheritAttrs:!1,props:{modelValue:{default:""},label:{default:""},inputClass:{default:""},required:{default:!0}},emits:["update:modelValue"],setup(){return{convertToThousand(e){let a=String(e);return a=a.split(","),a=a.join(""),a.replace(/\B(?=(\d{3})+(?!\d))/g,",")},convertToNumber(e){let a=e;if(a=a.split(","),a=a.join(""),""===a)return"";if(isNaN(a[a.length-1])){let e=a.slice(0,a.length-1);return""==e||isNaN(e)?"":parseInt(e)}return parseInt(a)}}}});var i=l(1639),u=l(8149),c=l(9984),m=l.n(c);const d=(0,i.Z)(r,[["render",t]]),p=d;m()(r,"components",{QField:u.Z})},6037:(e,a,l)=>{"use strict";l.d(a,{Z:()=>_});var o=l(9835);const s=(0,o._)("div",{class:"col text-center text-weight-bold non-selectable"},"AIES",-1),n={key:1,class:"q-pa-xs q-px-md row items-center bg-blue-9"},t=(0,o._)("div",{class:"cursor-pointer non-selectable"},"Help",-1),r=[t];function i(e,a,l,t,i,u){const c=(0,o.up)("q-space"),m=(0,o.up)("q-btn"),d=(0,o.up)("q-bar");return(0,o.wg)(),(0,o.iD)(o.HY,null,[e.$q.platform.is.electron?((0,o.wg)(),(0,o.j4)(d,{key:0,class:"q-electron-drag bg-grey-10"},{default:(0,o.w5)((()=>[s,(0,o.Wm)(c),(0,o.Wm)(m,{dense:"",flat:"",icon:"minimize",onClick:e.minimizeApp},null,8,["onClick"]),(0,o.Wm)(m,{dense:"",flat:"",icon:"crop_square",onClick:e.toggleMaximizeApp},null,8,["onClick"]),(0,o.Wm)(m,{dense:"",flat:"",icon:"close",onClick:e.closeApp},null,8,["onClick"])])),_:1})):(0,o.kq)("",!0),e.$q.platform.is.electron?((0,o.wg)(),(0,o.iD)("div",n,r)):(0,o.kq)("",!0)],64)}const u=(0,o.aZ)({name:"TitleBarComponent",setup(){return{minimizeApp(){window.electronAPI.minimize()},toggleMaximizeApp(){window.electronAPI.toggleMaximize()},closeApp(){window.electronAPI.close()},isMaximized(){return window.electronAPI.isMaximized()||!1}}}});var c=l(1639),m=l(4526),d=l(136),p=l(8879),w=l(9984),b=l.n(w);const g=(0,c.Z)(u,[["render",i]]),_=g;b()(u,"components",{QBar:m.Z,QSpace:d.Z,QBtn:p.Z})},7737:(e,a,l)=>{e.exports=l.p+"img/track-sente.c2e47bb6.png"}}]);