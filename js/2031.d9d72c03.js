"use strict";(globalThis["webpackChunkaies"]=globalThis["webpackChunkaies"]||[]).push([[2031],{2031:(e,a,l)=>{l.r(a),l.d(a,{default:()=>I});var t=l(9835);const n={class:"row justify-end"},o={class:"row no-wrap q-gutter-x-md"},i={class:"column q-col-gutter-y-lg q-mx-lg q-mb-lg"},s={class:"column q-col-gutter-y-lg q-mx-lg q-mb-lg"};function d(e,a,l,d,u,r){const m=(0,t.up)("q-btn"),p=(0,t.up)("q-td"),c=(0,t.up)("q-table"),g=(0,t.up)("q-page"),b=(0,t.up)("q-toolbar-title"),x=(0,t.up)("q-toolbar"),f=(0,t.up)("q-separator"),v=(0,t.up)("q-input"),w=(0,t.up)("q-form"),y=(0,t.up)("q-card"),D=(0,t.up)("q-dialog"),q=(0,t.Q2)("close-popup");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)(g,{class:"q-ma-xl"},{default:(0,t.w5)((()=>[(0,t._)("div",n,[e.permissionRequired("expenses","add_expense")?((0,t.wg)(),(0,t.j4)(m,{key:0,"no-caps":"",rounded:"",color:"primary",label:"Add Expense",onClick:a[0]||(a[0]=a=>e.addExpenseDialog=!e.addExpenseDialog)})):(0,t.kq)("",!0)]),(0,t.Wm)(c,{flat:"",loading:e.loadingData,columns:e.tableColumns,rows:e.tableRows,pagination:{rowsPerPage:0},title:"Expenses","row-key":"id","table-header-class":"bg-primary text-white","no-data-label":"No expenses available","loading-label":"Loading expenses..."},{"body-cell-actions":(0,t.w5)((a=>[(0,t.Wm)(p,{props:a},{default:(0,t.w5)((()=>[(0,t._)("div",o,[e.permissionRequired("expenses","add_expense")?((0,t.wg)(),(0,t.j4)(m,{key:0,round:"",size:"sm",color:"primary",icon:"add",onClick:l=>e.addExpense(a.rowIndex)},null,8,["onClick"])):(0,t.kq)("",!0),e.permissionRequired("expenses","change_expense")?((0,t.wg)(),(0,t.j4)(m,{key:1,round:"",size:"sm",color:"primary",icon:"edit",onClick:l=>e.selectEditItem(a.rowIndex)},null,8,["onClick"])):(0,t.kq)("",!0),e.permissionRequired("expenses","delete_expense")?((0,t.wg)(),(0,t.j4)(m,{key:2,round:"",size:"sm",color:"red",icon:"delete",onClick:l=>e.showDeleteDialog(a.row.id)},null,8,["onClick"])):(0,t.kq)("",!0)])])),_:2},1032,["props"])])),_:1},8,["loading","columns","rows"])])),_:1}),(0,t.Wm)(D,{modelValue:e.addExpenseDialog,"onUpdate:modelValue":a[3]||(a[3]=a=>e.addExpenseDialog=a)},{default:(0,t.w5)((()=>[(0,t.Wm)(y,{style:{width:"350px"}},{default:(0,t.w5)((()=>[(0,t.Wm)(w,{ref:"addExpenseDialogForm",onSubmit:e.submitExpenseData},{default:(0,t.w5)((()=>[(0,t.Wm)(x,{class:"bg-primary text-white"},{default:(0,t.w5)((()=>[(0,t.Wm)(b,null,{default:(0,t.w5)((()=>[(0,t.Uk)("Expense")])),_:1}),(0,t.wy)((0,t.Wm)(m,{flat:"",round:"",size:"md",icon:"close"},null,512),[[q]])])),_:1}),(0,t.Wm)(f),(0,t._)("div",i,[(0,t.Wm)(v,{modelValue:e.expenseData.name,"onUpdate:modelValue":a[1]||(a[1]=a=>e.expenseData.name=a),modelModifiers:{trim:!0},label:"Name","lazy-rules":"ondemand",rules:e.textInputRequiredRules()},null,8,["modelValue","rules"]),(0,t.Wm)(v,{modelValue:e.expenseData.amount,"onUpdate:modelValue":a[2]||(a[2]=a=>e.expenseData.amount=a),modelModifiers:{number:!0},type:"number",label:"Amount","lazy-rules":"ondemand",rules:e.numberInputRequiredRules()},null,8,["modelValue","rules"]),(0,t._)("div",null,[(0,t.Wm)(m,{rounded:"","no-caps":"",loading:e.submittedExpenseData,color:"primary",label:"Add",class:"full-width",type:"submit"},null,8,["loading"])])])])),_:1},8,["onSubmit"])])),_:1})])),_:1},8,["modelValue"]),(0,t.Wm)(D,{modelValue:e.updateDialog,"onUpdate:modelValue":a[5]||(a[5]=a=>e.updateDialog=a)},{default:(0,t.w5)((()=>[(0,t.Wm)(y,{style:{width:"350px"}},{default:(0,t.w5)((()=>[(0,t.Wm)(w,{ref:"updateDialogForm",onSubmit:e.updateExpenseData},{default:(0,t.w5)((()=>[(0,t.Wm)(x,{class:"bg-primary text-white"},{default:(0,t.w5)((()=>[(0,t.Wm)(b,null,{default:(0,t.w5)((()=>[(0,t.Uk)("Update Expense")])),_:1}),(0,t.wy)((0,t.Wm)(m,{flat:"",round:"",size:"md",icon:"close"},null,512),[[q]])])),_:1}),(0,t.Wm)(f),(0,t._)("div",s,[(0,t.Wm)(v,{modelValue:e.editItemData.name,"onUpdate:modelValue":a[4]||(a[4]=a=>e.editItemData.name=a),modelModifiers:{trim:!0},label:"Name","lazy-rules":"ondemand",rules:e.textInputRequiredRules()},null,8,["modelValue","rules"]),(0,t._)("div",null,[(0,t.Wm)(m,{rounded:"","no-caps":"",loading:e.submittedExpenseData,color:"primary",label:"Update",class:"full-width",type:"submit"},null,8,["loading"])])])])),_:1},8,["onSubmit"])])),_:1})])),_:1},8,["modelValue"])],64)}var u=l(9302),r=l(499),m=l(4019),p=l(8221);const c=[{name:"id",label:"#",field:"id",sortable:!0,align:"left"},{name:"name",label:"Name",field:"name",sortable:!0,align:"left"},{name:"amount",label:"Amount",field:e=>(0,p.formatPrice)(e.amount),sortable:!0,align:"left"},{name:"date",label:"Date",field:"created",sortable:!0,align:"left"},{name:"actions",label:"Actions",align:"left"}],g=(0,t.aZ)({name:"ExpensesIndex",setup(){const e=(0,u.Z)(),a=(0,r.iH)([]),l=(0,r.iH)(!1),n=(0,r.iH)(!1),o=(0,r.iH)(null),i=(0,r.iH)(!1),s=(0,r.iH)({}),d=(0,r.iH)(!1),g=(0,r.iH)(null),b=(0,r.iH)({});function x(){l.value=!0,(0,m.getExpenses)().then((e=>{a.value=e.data})).catch((e=>{})).finally((()=>{l.value=!1}))}return(0,t.bv)((()=>{x()})),{loadingData:l,tableRows:a,tableColumns:c,expenseData:s,addExpenseDialog:n,addExpenseDialogForm:o,submittedExpenseData:i,updateDialog:d,updateDialogForm:g,editItemData:b,selectEditItem(e){let l=a.value[e];b.value={name:l.name,id:l.id},d.value=!0},updateExpenseData(){if(g.value.validate()){i.value=!0;let a=b.value.id;delete b.value.id,(0,m.editExpense)(a,{...b.value}).then((a=>{e.notify({type:"positive",message:a.data}),b.value={},x(),d.value=!1,g.value.resetValidation()})).catch((a=>{e.notify({type:"negative",message:a.response.data.length<1e3?a.response.data:"Server error please contact system administrator"})})).finally((()=>{i.value=!1}))}},submitExpenseData(){o.value.validate()&&(i.value=!0,(0,m.createExpense)({...s.value}).then((a=>{e.notify({type:"positive",message:a.data}),s.value={},x(),n.value=!1,o.value.resetValidation()})).catch((a=>{e.notify({type:"negative",message:a.response.data.length<1e3?a.response.data:"Server error please contact system administrator"})})).finally((()=>{i.value=!1})))},addExpense(e){s.value={...a.value[e],amount:null},n.value=!0},showDeleteDialog(a){e.dialog({title:"Confirm",message:"Please confirm delete?",cancel:!0}).onOk((()=>{i.value=!0,(0,m.deleteExpense)(a).then((e=>{(0,p.displayNotification)(e.data,"positive"),x()})).catch((e=>{(0,p.displayNotification)(e.response.data,"negative")})).finally((()=>{i.value=!1}))}))}}}});var b=l(1639),x=l(9885),f=l(8879),v=l(7355),w=l(7220),y=l(2074),D=l(4458),q=l(8326),E=l(1663),h=l(1973),k=l(926),_=l(6611),W=l(2146),V=l(9984),Z=l.n(V);const C=(0,b.Z)(g,[["render",d]]),I=C;Z()(g,"components",{QPage:x.Z,QBtn:f.Z,QTable:v.Z,QTd:w.Z,QDialog:y.Z,QCard:D.Z,QForm:q.Z,QToolbar:E.Z,QToolbarTitle:h.Z,QSeparator:k.Z,QInput:_.Z}),Z()(g,"directives",{ClosePopup:W.Z})}}]);