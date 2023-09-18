"use strict";(globalThis["webpackChunkaies"]=globalThis["webpackChunkaies"]||[]).push([[3674],{3674:(e,a,l)=>{l.r(a),l.d(a,{default:()=>R});var t=l(9835),s=l(6970);const r={class:"row justify-around text-weight-bold q-mt-md items-center"},i={class:"row q-gutter-x-md"},n=(0,t._)("div",null,"Total Sales:",-1),o={key:0},d={key:1},u={class:"row q-gutter-x-md"},m=(0,t._)("div",null,"Paid Sales:",-1),c={key:0},p={key:1},g={class:"row q-gutter-x-md"},b=(0,t._)("div",null,"Credit Sales:",-1),w={key:0},v={key:1},f={class:"row no-wrap q-col-gutter-x-md"};function y(e,a,l,y,S,_){const h=(0,t.up)("q-skeleton"),q=(0,t.up)("q-separator"),k=(0,t.up)("q-icon"),x=(0,t.up)("q-input"),D=(0,t.up)("q-btn"),P=(0,t.up)("q-td"),Z=(0,t.up)("q-table"),C=(0,t.up)("q-page");return(0,t.wg)(),(0,t.j4)(C,{class:"q-ma-xl"},{default:(0,t.w5)((()=>[(0,t._)("div",r,[(0,t._)("div",i,[n,(0,t._)("div",null,[e.loadingSalesSummary?((0,t.wg)(),(0,t.iD)("span",o,[(0,t.Wm)(h,{type:"rect",width:"120px"})])):((0,t.wg)(),(0,t.iD)("span",d,(0,s.zw)(e.formatPrice(e.salesSummaryData.total_sales)),1))])]),(0,t._)("div",u,[m,(0,t._)("div",null,[e.loadingSalesSummary?((0,t.wg)(),(0,t.iD)("span",c,[(0,t.Wm)(h,{type:"rect",width:"120px"})])):((0,t.wg)(),(0,t.iD)("span",p,(0,s.zw)(e.formatPrice(e.salesSummaryData.paid_sales)),1))])]),(0,t._)("div",g,[b,(0,t._)("div",null,[e.loadingSalesSummary?((0,t.wg)(),(0,t.iD)("span",w,[(0,t.Wm)(h,{type:"rect",width:"120px"})])):((0,t.wg)(),(0,t.iD)("span",v,(0,s.zw)(e.formatPrice(e.salesSummaryData.credit_sales)),1))])])]),(0,t.Wm)(q,{class:"q-my-sm bg-grey"}),(0,t.Wm)(Z,{flat:"",loading:e.loadingData,columns:e.tableColumns,rows:e.tableRows,pagination:{rowsPerPage:0},filter:e.tableFilter,title:"Sales","row-key":"id","table-header-class":"bg-primary text-white","no-data-label":"No sales available","loading-label":"Loading sales..."},{"top-right":(0,t.w5)((()=>[(0,t._)("div",f,[(0,t._)("div",null,[(0,t.Wm)(x,{dense:"",outlined:"",rounded:"",clearable:"",modelValue:e.tableFilter,"onUpdate:modelValue":a[0]||(a[0]=a=>e.tableFilter=a),label:"Search here ..."},{prepend:(0,t.w5)((()=>[(0,t.Wm)(k,{name:"search"})])),_:1},8,["modelValue"])]),(0,t._)("div",null,[e.permissionRequired("otherservices","add_sale")?((0,t.wg)(),(0,t.j4)(D,{key:0,"no-caps":"",rounded:"",color:"primary",label:"Add Sale",class:"q-px-xl",to:{name:"createOtherServicesSales"}})):(0,t.kq)("",!0)])])])),"body-cell-actions":(0,t.w5)((a=>[(0,t.Wm)(P,{props:a},{default:(0,t.w5)((()=>[e.permissionRequired("otherservices","view_sale")?((0,t.wg)(),(0,t.j4)(D,{key:0,round:"",color:"primary",icon:"arrow_forward",to:{name:"OtherServicesOrderDetails",params:{Id:a.row.id}}},null,8,["to"])):(0,t.kq)("",!0)])),_:2},1032,["props"])])),_:1},8,["loading","columns","rows","filter"])])),_:1})}var S=l(9302),_=l(499),h=l(4019),q=l(8221);const k=[{name:"id",label:"#",field:"id",sortable:!0,align:"left"},{name:"name",label:"Customer Name",field:e=>e.customer[0].name,sortable:!0,align:"left"},{name:"date",label:"Date",field:"date",sortable:!0,align:"left"},{name:"bill",label:"Bill",field:e=>(0,q.formatPrice)(e.bill),sortable:!0,align:"left"},{name:"paid",label:"Paid",field:e=>(0,q.formatPrice)(e.paid),sortable:!0,align:"left"},{name:"status",label:"Status",field:"status",classes:e=>"OPEN"==e.status?"text-red-10":"CANCELLED"==e.status?"text-grey-10":"text-green-10",sortable:!0,align:"left"},{name:"actions",label:"Actions",align:"left"}],x=(0,t.aZ)({name:"OtherServicesOrders",setup(){(0,S.Z)();const e=(0,_.iH)([]),a=(0,_.iH)(!1),l=(0,_.iH)(""),s=(0,_.iH)(!0),r=(0,_.iH)({total_sales:0,paid_sales:0,credit_sales:0});function i(){return a.value=!0,(0,h.getOtherServicesSales)().then((a=>{e.value=a.data})).finally((()=>{a.value=!1}))}function n(){s.value=!0,(0,h.getOtherServicesSalesSummary)().then((e=>{r.value=e.data})).finally((()=>{s.value=!1}))}return(0,t.bv)((()=>{i().then((()=>{n()}))})),{tableRows:e,loadingData:a,tableFilter:l,tableColumns:k,loadingSalesSummary:s,salesSummaryData:r}}});var D=l(1639),P=l(9885),Z=l(7133),C=l(926),O=l(7355),Q=l(6611),W=l(2857),H=l(8879),T=l(7220),j=l(9984),F=l.n(j);const N=(0,D.Z)(x,[["render",y]]),R=N;F()(x,"components",{QPage:P.Z,QSkeleton:Z.ZP,QSeparator:C.Z,QTable:O.Z,QInput:Q.Z,QIcon:W.Z,QBtn:H.Z,QTd:T.Z})}}]);