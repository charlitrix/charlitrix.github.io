"use strict";(globalThis["webpackChunkaies"]=globalThis["webpackChunkaies"]||[]).push([[2894],{2894:(e,r,s)=>{s.r(r),s.d(r,{default:()=>x});var o=s(9835);const t=(0,o._)("div",{class:"q-py-xl"},null,-1);function a(e,r,s,a,i,n){const l=(0,o.up)("header-component"),m=(0,o.up)("q-separator"),u=(0,o.up)("q-icon"),p=(0,o.up)("q-item-section"),c=(0,o.up)("q-item-label"),d=(0,o.up)("q-item"),w=(0,o.up)("item-link"),v=(0,o.up)("q-list"),g=(0,o.up)("q-scroll-area"),k=(0,o.up)("q-drawer"),q=(0,o.up)("router-view"),f=(0,o.up)("q-page-container"),h=(0,o.up)("floating-menu-component"),y=(0,o.up)("q-layout");return(0,o.wg)(),(0,o.j4)(y,{view:"hHh Lpr lFf"},{default:(0,o.w5)((()=>[(0,o.Wm)(l,{"left-drawer-open":e.leftDrawerOpen,onToggledLeftDrawer:e.toggleLeftDrawer},null,8,["left-drawer-open","onToggledLeftDrawer"]),(0,o.Wm)(k,{"show-if-above":"",bordered:"",width:220,modelValue:e.leftDrawerOpen,"onUpdate:modelValue":r[0]||(r[0]=r=>e.leftDrawerOpen=r),behavior:e.drawerBehaviour},{default:(0,o.w5)((()=>[(0,o.Wm)(g,{class:"fit bg-grey-3 q-pt-lg"},{default:(0,o.w5)((()=>[e.permissionRequired("rooms","view_room")||e.permissionRequired("rooms","view_roomtype")?((0,o.wg)(),(0,o.j4)(v,{key:0},{default:(0,o.w5)((()=>[(0,o.Wm)(m,{class:"q-my-sm"}),(0,o.Wm)(d,{class:"bg-grey-4"},{default:(0,o.w5)((()=>[(0,o.Wm)(p,{side:""},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{color:"dark",name:"bed"})])),_:1}),(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[(0,o.Wm)(c,{class:"text-weight-bold"},{default:(0,o.w5)((()=>[(0,o.Uk)("Rooms")])),_:1})])),_:1})])),_:1}),(0,o.Wm)(m,{class:"q-my-sm"}),e.permissionRequired("rooms","view_roomtype")?((0,o.wg)(),(0,o.j4)(w,{key:0,to:{name:"RoomTypes"},title:"Types"})):(0,o.kq)("",!0),e.permissionRequired("rooms","view_room")?((0,o.wg)(),(0,o.j4)(w,{key:1,to:{name:"BedRooms"},title:"Rooms"})):(0,o.kq)("",!0),e.permissionRequired("rooms","view_expense")?((0,o.wg)(),(0,o.j4)(w,{key:2,to:{name:"RoomsExpensesIndex"},title:"Expenses"})):(0,o.kq)("",!0),e.permissionRequired("rooms","view_expensetrack")?((0,o.wg)(),(0,o.j4)(w,{key:3,to:{name:"RoomsExpensesTracks"},title:"Expenses Tracking"})):(0,o.kq)("",!0)])),_:1})):(0,o.kq)("",!0),e.permissionRequired("otherservices","view_service")||e.permissionRequired("otherservices","view_category")?((0,o.wg)(),(0,o.j4)(v,{key:1},{default:(0,o.w5)((()=>[(0,o.Wm)(m,{class:"q-my-sm"}),(0,o.Wm)(d,{class:"bg-grey-4"},{default:(0,o.w5)((()=>[(0,o.Wm)(p,{side:""},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{color:"dark",name:"spa"})])),_:1}),(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[(0,o.Wm)(c,{class:"text-weight-bold"},{default:(0,o.w5)((()=>[(0,o.Uk)("Other Services")])),_:1})])),_:1})])),_:1}),(0,o.Wm)(m,{class:"q-my-sm"}),e.permissionRequired("otherservices","view_category")?((0,o.wg)(),(0,o.j4)(w,{key:0,to:{name:"OtherServicesCategories"},title:"Categories"})):(0,o.kq)("",!0),e.permissionRequired("otherservices","view_service")?((0,o.wg)(),(0,o.j4)(w,{key:1,to:{name:"OtherServices"},title:"Services"})):(0,o.kq)("",!0),e.permissionRequired("otherservices","view_expense")?((0,o.wg)(),(0,o.j4)(w,{key:2,to:{name:"OtherServicesExpensesIndex"},title:"Expenses"})):(0,o.kq)("",!0),e.permissionRequired("otherservices","view_expensetrack")?((0,o.wg)(),(0,o.j4)(w,{key:3,to:{name:"OtherServicesExpensesTracks"},title:"Expenses Tracking"})):(0,o.kq)("",!0)])),_:1})):(0,o.kq)("",!0),t])),_:1})])),_:1},8,["modelValue","behavior"]),(0,o.Wm)(f,null,{default:(0,o.w5)((()=>[(0,o.Wm)(q)])),_:1}),(0,o.Wm)(h)])),_:1})}s(6727);var i=s(499),n=s(6388),l=s(8339),m=s(925),u=s(3797);const p=(0,o.aZ)({name:"OtherItemsLayout",components:{ItemLink:n.Z,HeaderComponent:m.Z,FloatingMenuComponent:u.Z},setup(){const e=(0,i.iH)(!1),r=(0,l.tv)(),s=["RoomBooking","CreateRestaurantAndBarSales","createOtherServicesSales"],t=(0,i.iH)("desktop");function a(r){e.value=r}return(0,o.m0)((()=>{r.beforeEach(((r,o)=>{s.includes(r.name)?t.value="mobile":s.includes(o.name)&&(t.value="desktop",e.value=!0)}))})),(0,o.bv)((()=>{s.includes(r.currentRoute.value.name)&&(t.value="mobile")})),{leftDrawerOpen:e,drawerBehaviour:t,toggleLeftDrawer:a}}});var c=s(1639),d=s(249),w=s(906),v=s(6663),g=s(3246),k=s(926),q=s(490),f=s(1233),h=s(2857),y=s(3115),_=s(2133),R=s(9984),b=s.n(R);const W=(0,c.Z)(p,[["render",a]]),x=W;b()(p,"components",{QLayout:d.Z,QDrawer:w.Z,QScrollArea:v.Z,QList:g.Z,QSeparator:k.Z,QItem:q.Z,QItemSection:f.Z,QIcon:h.Z,QItemLabel:y.Z,QPageContainer:_.Z})}}]);