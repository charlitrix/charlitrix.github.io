"use strict";(globalThis["webpackChunkaies"]=globalThis["webpackChunkaies"]||[]).push([[5059],{5059:(e,l,t)=>{t.r(l),t.d(l,{default:()=>M});var a=t(9835),u=t(6970),i=t(1957);const n={class:"row justify-end q-gutter-x-lg"},o={class:"q-ma-lg q-column q-col-gutter-y-lg q-mb-xl"},s=(0,a._)("div",{class:"row justify-center text-h4"},"Requisition Form",-1),r={class:"row"},d={class:"col-md-4"},m=(0,a._)("div",{class:"text-h5 q-mb-md"},"Supplier",-1),p={class:"full-width"},c=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",null,"#"),(0,a._)("th",null,"Name"),(0,a._)("th",null,"Specifications"),(0,a._)("th",null,"Quantity"),(0,a._)("th",null,"Units"),(0,a._)("th",null,"Rate"),(0,a._)("th",null,"Total (Ugx)")])],-1),w={class:"text-weight-bold"},q=(0,a._)("td",{colspan:"6",class:"text-right"},"Total",-1),_={class:"q-py-xl"},v={class:"column q-col-gutter-y-lg q-mx-lg q-mb-lg q-mt-sm"},f={class:"row q-gutter-x-lg"},g={class:"q-mx-lg q-mb-lg q-mt-sm"},b={class:"row q-my-lg q-gutter-x-lg items-center"},y={class:"q-column q-col-gutter-y-md q-mx-lg q-mb-lg"},W=(0,a._)("div",{class:"text-h5"},"Add Supplier",-1);function V(e,l,t,V,S,h){const D=(0,a.up)("q-btn"),I=(0,a.up)("q-item-section"),x=(0,a.up)("q-item"),k=(0,a.up)("q-list"),R=(0,a.up)("q-markup-table"),U=(0,a.up)("q-field"),z=(0,a.up)("q-form"),C=(0,a.up)("q-page"),F=(0,a.up)("q-toolbar-title"),H=(0,a.up)("q-toolbar"),Z=(0,a.up)("q-input"),Q=(0,a.up)("q-card"),L=(0,a.up)("q-dialog"),A=(0,a.up)("q-item-label"),N=(0,a.up)("q-select"),O=(0,a.up)("q-slide-transition"),T=(0,a.Q2)("close-popup");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(C,{class:"q-pa-xl"},{default:(0,a.w5)((()=>[(0,a._)("div",n,[(0,a.Wm)(D,{"no-caps":"",rounded:"",label:"Add Supplier",color:"primary",onClick:l[0]||(l[0]=l=>e.addSupplierDialog=!e.addSupplierDialog)}),(0,a.Wm)(D,{"no-caps":"",rounded:"",label:"Add Item",color:"primary",onClick:l[1]||(l[1]=l=>e.newItemDialog=!e.newItemDialog)})]),(0,a.Wm)(z,{ref:"requisitionForm",onSubmit:e.submitNewRequisition},{default:(0,a.w5)((()=>[(0,a._)("div",o,[s,(0,a._)("div",null,[(0,a._)("div",r,[(0,a._)("div",d,[m,(0,a.Wm)(k,{dense:""},{default:(0,a.w5)((()=>[(0,a.Wm)(x,null,{default:(0,a.w5)((()=>[(0,a.Wm)(I,null,{default:(0,a.w5)((()=>[(0,a.Uk)("Name:")])),_:1}),(0,a.Wm)(I,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,u.zw)(e.requisitionSupplierData.name),1)])),_:1})])),_:1}),(0,a.Wm)(x,null,{default:(0,a.w5)((()=>[(0,a.Wm)(I,null,{default:(0,a.w5)((()=>[(0,a.Uk)("Contact:")])),_:1}),(0,a.Wm)(I,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,u.zw)(e.requisitionSupplierData.contact),1)])),_:1})])),_:1}),(0,a.Wm)(x,null,{default:(0,a.w5)((()=>[(0,a.Wm)(I,null,{default:(0,a.w5)((()=>[(0,a.Uk)("Address:")])),_:1}),(0,a.Wm)(I,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,u.zw)(e.requisitionSupplierData.address),1)])),_:1})])),_:1})])),_:1})])])]),(0,a._)("div",null,[(0,a.Wm)(U,{outlined:"",modelValue:e.itemsList,"onUpdate:modelValue":l[2]||(l[2]=l=>e.itemsList=l),"lazy-rules":"ondemand",rules:e.nonEmptyRequiredRules("Cannot submit an empty requisition form")},{control:(0,a.w5)((()=>[(0,a._)("div",p,[(0,a.Wm)(R,{bordered:"",flat:"",square:"",separator:"cell"},{default:(0,a.w5)((()=>[c,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.itemsList,((l,t)=>((0,a.wg)(),(0,a.iD)("tr",{key:t},[(0,a._)("td",null,(0,u.zw)(l.code),1),(0,a._)("td",null,(0,u.zw)(l.name),1),(0,a._)("td",null,(0,u.zw)(l.specifications),1),(0,a._)("td",null,(0,u.zw)(l.quantity),1),(0,a._)("td",null,(0,u.zw)(l.unit),1),(0,a._)("td",null,(0,u.zw)(e.formatPrice(l.unit_price)),1),(0,a._)("td",null,(0,u.zw)(e.formatPrice(l.unit_price*l.quantity)),1)])))),128))]),(0,a._)("tfoot",null,[(0,a._)("tr",w,[q,(0,a._)("td",null,(0,u.zw)(e.formatPrice(e.total)),1)])])])),_:1})])])),_:1},8,["modelValue","rules"]),(0,a._)("div",_,[e.permissionRequired("procurement","add_requisition")?((0,a.wg)(),(0,a.j4)(D,{key:0,"no-caps":"",rounded:"",class:"full-width",color:"primary",label:"Create Requisition",type:"submit",loading:e.submittingData},null,8,["loading"])):(0,a.kq)("",!0)])])])])),_:1},8,["onSubmit"])])),_:1}),(0,a.Wm)(L,{modelValue:e.newItemDialog,"onUpdate:modelValue":l[9]||(l[9]=l=>e.newItemDialog=l)},{default:(0,a.w5)((()=>[(0,a.Wm)(Q,{style:{width:"650px",maxWidth:"650px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(z,{ref:"newItemForm",onSubmit:e.addRequisitionItem},{default:(0,a.w5)((()=>[(0,a.Wm)(H,{class:"bg-primary text-white"},{default:(0,a.w5)((()=>[(0,a.Wm)(F,null,{default:(0,a.w5)((()=>[(0,a.Uk)("New Item")])),_:1}),(0,a.wy)((0,a.Wm)(D,{flat:"",round:"",size:"md",icon:"close",onClick:e.clearForm},null,8,["onClick"]),[[T]])])),_:1}),(0,a._)("div",v,[(0,a.Wm)(Z,{label:"Code",modelValue:e.requisitionItemData.code,"onUpdate:modelValue":l[3]||(l[3]=l=>e.requisitionItemData.code=l)},null,8,["modelValue"]),(0,a.Wm)(Z,{label:"Name",modelValue:e.requisitionItemData.name,"onUpdate:modelValue":l[4]||(l[4]=l=>e.requisitionItemData.name=l),"lazy-rules":"ondemand",rules:e.textInputRequiredRules()},null,8,["modelValue","rules"]),(0,a.Wm)(Z,{label:"Specifications",modelValue:e.requisitionItemData.specifications,"onUpdate:modelValue":l[5]||(l[5]=l=>e.requisitionItemData.specifications=l),type:"textarea",rows:"3","lazy-rules":"ondemand",rules:e.textInputRequiredRules()},null,8,["modelValue","rules"]),(0,a._)("div",f,[(0,a.Wm)(Z,{label:"Quantity",type:"number",modelValue:e.requisitionItemData.quantity,"onUpdate:modelValue":l[6]||(l[6]=l=>e.requisitionItemData.quantity=l),"lazy-rules":"ondemand",rules:e.numberInputRequiredRules()},null,8,["modelValue","rules"]),(0,a.Wm)(Z,{label:"Price",type:"number",modelValue:e.requisitionItemData.unit_price,"onUpdate:modelValue":l[7]||(l[7]=l=>e.requisitionItemData.unit_price=l),"lazy-rules":"ondemand",rules:e.numberInputRequiredRules()},null,8,["modelValue","rules"]),(0,a.Wm)(Z,{label:"Unit",modelValue:e.requisitionItemData.unit,"onUpdate:modelValue":l[8]||(l[8]=l=>e.requisitionItemData.unit=l),"lazy-rules":"ondemand",rules:e.textInputRequiredRules()},null,8,["modelValue","rules"])]),(0,a._)("div",null,[(0,a.Wm)(D,{rounded:"","no-caps":"",type:"submit",class:"full-width",label:"Add",color:"primary"})])])])),_:1},8,["onSubmit"])])),_:1})])),_:1},8,["modelValue"]),(0,a.Wm)(L,{modelValue:e.addSupplierDialog,"onUpdate:modelValue":l[15]||(l[15]=l=>e.addSupplierDialog=l)},{default:(0,a.w5)((()=>[(0,a.Wm)(Q,{style:{width:"650px",maxWidth:"650px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(H,{class:"bg-primary text-white"},{default:(0,a.w5)((()=>[(0,a.Wm)(F,null,{default:(0,a.w5)((()=>[(0,a.Uk)("Suppliers")])),_:1}),(0,a.wy)((0,a.Wm)(D,{flat:"",round:"",size:"md",icon:"close"},null,512),[[T]])])),_:1}),(0,a._)("div",g,[(0,a._)("div",b,[(0,a._)("div",null,[(0,a.Wm)(N,{clearable:"","map-options":"","emit-value":"","use-input":"","fill-input":"","hide-selected":"","input-debounce":"0",label:"Suppliers","option-label":"name",options:e.suppliersFilterOptions,style:{minWidth:"250px"},modelValue:e.selectedSupplier,"onUpdate:modelValue":l[10]||(l[10]=l=>e.selectedSupplier=l),"lazy-rules":"ondemand",rules:e.selectInputRequiredRules(e.suppliersFilterOptions),loading:e.loadingSuppliersData,ref:"supplierSelected",onFilter:e.filterSuppliersOptions},{option:(0,a.w5)((e=>[(0,a.Wm)(x,(0,u.vs)((0,a.F4)(e.itemProps)),{default:(0,a.w5)((()=>[(0,a.Wm)(I,null,{default:(0,a.w5)((()=>[(0,a.Wm)(A,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,u.zw)(e.opt.name),1)])),_:2},1024),(0,a.Wm)(A,{caption:""},{default:(0,a.w5)((()=>[(0,a.Uk)((0,u.zw)(e.opt.contact),1)])),_:2},1024),(0,a.Wm)(A,{caption:"",lines:1},{default:(0,a.w5)((()=>[(0,a.Uk)((0,u.zw)(e.opt.address),1)])),_:2},1024)])),_:2},1024)])),_:2},1040)])),_:1},8,["options","modelValue","rules","loading","onFilter"])]),(0,a._)("div",null,[e.permissionRequired("procurement","add_supplier")?((0,a.wg)(),(0,a.j4)(D,{key:0,round:"",color:e.showSupplierForm?"red":"primary",icon:"add",class:(0,u.C_)([e.showSupplierForm?"rotate-45":""]),onClick:l[11]||(l[11]=l=>e.showSupplierForm=!e.showSupplierForm)},null,8,["color","class"])):(0,a.kq)("",!0)])]),(0,a.Wm)(O,null,{default:(0,a.w5)((()=>[(0,a.wy)((0,a._)("div",null,[(0,a._)("div",y,[W,(0,a.Wm)(Z,{autofocus:"",modelValue:e.supplierData.name,"onUpdate:modelValue":l[12]||(l[12]=l=>e.supplierData.name=l),label:"Name","lazy-rules":"ondemand",rules:e.textInputRequiredRules(),ref:"supplierName"},null,8,["modelValue","rules"]),(0,a.Wm)(Z,{modelValue:e.supplierData.contact,"onUpdate:modelValue":l[13]||(l[13]=l=>e.supplierData.contact=l),label:"Contact","lazy-rules":"ondemand",rules:e.textInputRequiredRules(),ref:"supplierContact",mask:"phone","unmasked-value":""},null,8,["modelValue","rules"]),(0,a.Wm)(Z,{modelValue:e.supplierData.address,"onUpdate:modelValue":l[14]||(l[14]=l=>e.supplierData.address=l),label:"Address","lazy-rules":"ondemand",rules:e.textInputRequiredRules(),ref:"supplierAddress"},null,8,["modelValue","rules"])])],512),[[i.F8,e.showSupplierForm]])])),_:1}),(0,a._)("div",null,[(0,a.Wm)(D,{rounded:"","no-caps":"",type:"submit",class:"full-width",label:"Add",color:"primary",onClick:e.setSupplier},null,8,["onClick"])])])])),_:1})])),_:1},8,["modelValue"])],64)}t(9665);var S=t(4019),h=t(9302),D=t(499);const I=(0,a.aZ)({name:"CreateRequisition",setup(){const e=(0,h.Z)(),l=(0,D.iH)(!1),t=(0,D.iH)(null),u=(0,D.iH)({}),i=(0,D.iH)({}),n=(0,D.iH)([]),o=(0,a.Fl)((()=>n.value.reduce(((e,l)=>e+l.quantity*l.unit_price),0))),s=(0,D.iH)(!1),r=(0,D.iH)({name:"",contact:"",address:""}),d=(0,D.iH)(null),m=(0,D.iH)(null),p=(0,D.iH)(!1),c=(0,D.iH)(!1),w=(0,D.iH)([]),q=(0,D.iH)([]),_=(0,D.iH)(null),v=(0,D.iH)(null),f=(0,D.iH)(null),g=(0,D.iH)(null),b=(0,D.iH)(null),y=(0,D.iH)(!1);function W(){u.value={}}function V(){c.value=!0,(0,S.getSuppliers)().then((e=>{w.value=e.data,q.value=e.data})).finally((()=>{c.value=!1}))}return(0,a.bv)((()=>{V()})),{newItemDialog:l,newItemForm:t,requisitionItemData:u,requisitionSupplierData:i,itemsList:n,total:o,showSupplierForm:s,supplierData:r,selectedSupplier:d,clearForm:W,addSupplierDialog:p,addSupplierForm:m,loadingSuppliersData:c,suppliersFilterOptions:q,supplierName:_,supplierContact:v,supplierAddress:f,supplierSelected:g,requisitionForm:b,submittingData:y,filterSuppliersOptions(e,l){l((()=>{q.value=w.value.filter((l=>l.name.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1||l.address.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1||l.contact.indexOf(e)>-1))}))},addRequisitionItem(){t.value.validate()&&(n.value.push({...u.value}),u.value={},t.value.resetValidation(),b.value.resetValidation(),l.value=!1)},setSupplier(){s.value?_.value.validate()&&v.value.validate()&&f.value.validate()&&(i.value={...r.value},r.value={name:"",contact:"",address:""},_.value.resetValidation(),v.value.resetValidation(),f.value.resetValidation(),p.value=!1):g.value.validate()&&(i.value={...d.value},g.value.resetValidation(),p.value=!1)},submitNewRequisition(){b.value.validate()&&e.dialog({title:"Confirm",message:"Please confirm new requisition",cancel:!0}).onOk((()=>{y.value=!0,(0,S.createRequisition)({supplier:i.value,items:n.value}).then((l=>{i.value={},n.value=[],e.notify({type:"positive",message:l.data})})).catch((l=>{e.notify({type:"negative",message:l.response.data.length<1e3?l.response.data:"Server error please contact system administrator"})})).finally((()=>{y.value=!1}))}))}}}});var x=t(1639),k=t(9885),R=t(8879),U=t(8326),z=t(3246),C=t(490),F=t(1233),H=t(8149),Z=t(6933),Q=t(2074),L=t(4458),A=t(1663),N=t(1973),O=t(6611),T=t(4581),P=t(3115),j=t(9003),Y=t(2146),B=t(9984),E=t.n(B);const K=(0,x.Z)(I,[["render",V]]),M=K;E()(I,"components",{QPage:k.Z,QBtn:R.Z,QForm:U.Z,QList:z.Z,QItem:C.Z,QItemSection:F.Z,QField:H.Z,QMarkupTable:Z.Z,QDialog:Q.Z,QCard:L.Z,QToolbar:A.Z,QToolbarTitle:N.Z,QInput:O.Z,QSelect:T.Z,QItemLabel:P.Z,QSlideTransition:j.Z}),E()(I,"directives",{ClosePopup:Y.Z})}}]);