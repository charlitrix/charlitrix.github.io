"use strict";(globalThis["webpackChunkaies"]=globalThis["webpackChunkaies"]||[]).push([[7425],{7425:(e,a,t)=>{t.r(a),t.d(a,{default:()=>v});var l=t(9835),s=t(6970);const r={key:0},n=(0,l._)("span",{class:"text-weight-bold"},"Reason:",-1);function i(e,a,t,i,o,u){const d=(0,l.up)("q-td"),p=(0,l.up)("q-btn"),c=(0,l.up)("q-table"),b=(0,l.up)("q-page");return(0,l.wg)(),(0,l.j4)(b,{class:"q-pa-xl"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{flat:"",loading:e.loadingData,columns:e.tableColumns,rows:e.tableRows,pagination:{rowsPerPage:0},title:"Purchase Orders","row-key":"id","table-header-class":"bg-primary text-white","no-data-label":"No purchase orders available"},{"body-cell-status":(0,l.w5)((e=>[(0,l.Wm)(d,{props:e},{default:(0,l.w5)((()=>[(0,l._)("div",null,(0,s.zw)(e.row.status),1),"DECLINED"==e.row.status?((0,l.wg)(),(0,l.iD)("div",r,[n,(0,l._)("span",null,(0,s.zw)(e.row.declined_reason),1)])):(0,l.kq)("",!0)])),_:2},1032,["props"])])),"body-cell-actions":(0,l.w5)((a=>[(0,l.Wm)(d,{props:a},{default:(0,l.w5)((()=>[e.permissionRequired("procurement","view_purchaseorder")?((0,l.wg)(),(0,l.j4)(p,{key:0,round:"",color:"primary",icon:"keyboard_arrow_right",size:"sm",to:{name:"PurchaseOrdersDetails",params:{id:a.row.id}}},null,8,["to"])):(0,l.kq)("",!0)])),_:2},1032,["props"])])),_:1},8,["loading","columns","rows"])])),_:1})}var o=t(4019),u=t(499);const d=(0,l.aZ)({name:"PurchaseOrdersDetails",setup(){const e=(0,u.iH)(!1),a=(0,u.iH)([]);function t(){e.value=!0,(0,o.getPurchaseOrder)().then((e=>{a.value=e.data})).finally((()=>{e.value=!1}))}return(0,l.bv)((()=>{t()})),{loadingData:e,tableRows:a,tableColumns:[{name:"id",label:"#",field:"id",align:"left"},{name:"date",label:"Date",field:"request_date",align:"left"},{name:"status",label:"Status",align:"left",classes:e=>"PENDING"==e.status?"text-grey-7":"DECLINED"==e.status?"text-red":"APPROVED"==e.status?"text-green":"CLEARED"==e.status?"text-primary":""},{name:"supplier",label:"Supplier",field:"supplier",align:"left"},{name:"requester",label:"Requested By",field:"requester",align:"left"},{name:"approver",label:"Approved By",field:"approver",align:"left"},{name:"actions",label:"Actions",align:"left"}]}}});var p=t(1639),c=t(9885),b=t(7355),g=t(7220),w=t(8879),m=t(9984),f=t.n(m);const h=(0,p.Z)(d,[["render",i]]),v=h;f()(d,"components",{QPage:c.Z,QTable:b.Z,QTd:g.Z,QBtn:w.Z})}}]);