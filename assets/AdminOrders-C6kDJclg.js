import{m as k,D as x}from"./DelModal-SS1ss8Kd.js";import{_ as f,o as l,c as n,b as t,t as o,i as g,F as u,h as b,r as p,d as _,n as C,f as P,j as w}from"./index-CybjTFcM.js";import{P as L}from"./PaginationProduct-D4IVQYzL.js";import"./component-functions-CUoJew-O.js";const D={name:"orderModal",props:{order:{type:Object,default(){return{}}}},data(){return{status:{},modal:"",tempOrder:{},isPaid:!1}},emits:["update-product"],mixins:[k],inject:["emitter"],watch:{order(){this.tempOrder=this.order,this.isPaid=this.tempOrder.is_paid}}},N={class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},E={class:"modal-dialog modal-xl",role:"document"},V={class:"modal-content border-0"},S=t("div",{class:"modal-header bg-dark text-white"},[t("h5",{class:"modal-title",id:"exampleModalLabel"},[t("span",null,"訂單細節")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),U={class:"modal-body"},j={class:"row"},B={class:"col-md-4"},q=t("h3",null,"用戶資料",-1),F={class:"table"},I={key:0},z=t("th",{style:{width:"100px"}},"姓名",-1),A=t("th",null,"Email",-1),G=t("th",null,"電話",-1),H=t("th",null,"地址",-1),J={class:"col-md-8"},K=t("h3",null,"訂單細節",-1),Q={class:"table"},R=t("th",{style:{width:"100px"}},"訂單編號",-1),T=t("th",null,"下單時間",-1),W=t("th",null,"付款時間",-1),X={key:0},Y={key:1},Z=t("th",null,"付款狀態",-1),tt={key:0,class:"text-success"},et={key:1,class:"text-muted"},st=t("th",null,"總金額",-1),ot=t("h3",null,"選購商品",-1),lt={class:"table"},nt=t("thead",null,[t("tr")],-1),dt={class:"text-end"},rt={class:"modal-footer"},it=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function at(s,r,i,m,e,h){return l(),n("div",N,[t("div",E,[t("div",V,[S,t("div",U,[t("div",j,[t("div",B,[q,t("table",F,[e.tempOrder.user?(l(),n("tbody",I,[t("tr",null,[z,t("td",null,o(e.tempOrder.user.name),1)]),t("tr",null,[A,t("td",null,o(e.tempOrder.user.email),1)]),t("tr",null,[G,t("td",null,o(e.tempOrder.user.tel),1)]),t("tr",null,[H,t("td",null,o(e.tempOrder.user.address),1)])])):g("",!0)])]),t("div",J,[K,t("table",Q,[t("tbody",null,[t("tr",null,[R,t("td",null,o(e.tempOrder.id),1)]),t("tr",null,[T,t("td",null,o(s.$filters.date(e.tempOrder.create_at)),1)]),t("tr",null,[W,t("td",null,[e.tempOrder.paid_date?(l(),n("span",X,o(s.$filters.date(e.tempOrder.paid_date)),1)):(l(),n("span",Y,"時間不正確"))])]),t("tr",null,[Z,t("td",null,[e.tempOrder.is_paid?(l(),n("strong",tt,"已付款")):(l(),n("span",et,"尚未付款"))])]),t("tr",null,[st,t("td",null,o(s.$filters.currency(e.tempOrder.total)),1)])])]),ot,t("table",lt,[nt,t("tbody",null,[(l(!0),n(u,null,b(e.tempOrder.products,a=>(l(),n("tr",{key:a.id},[t("th",null,o(a.product.title),1),t("td",null,o(a.qty)+" / "+o(a.product.unit),1),t("td",dt,o(s.$filters.currency(a.final_total)),1)]))),128))])])])])]),t("div",rt,[it,t("button",{type:"button",class:"btn btn-primary",onClick:r[0]||(r[0]=a=>s.$emit("update-order",e.tempOrder))}," 確認 ")])])])],512)}const ct=f(D,[["render",at]]),ht={data(){return{orders:{},isNew:!1,pagination:{},isLoading:!1,tempOrder:{},currentPage:1}},components:{Pagination:L,DelModal:x,OrderModal:ct},methods:{getOrders(s=1){this.currentPage=s;const r=`https://vue3-course-api.hexschool.io/api/leemotseng-api/admin/orders?page=${s}`;this.isLoading=!0,this.$http.get(r,this.tempProduct).then(i=>{this.orders=i.data.orders,this.pagination=i.data.pagination,this.isLoading=!1,console.log(i)})},openModal(s,r){this.tempOrder={...r},this.isNew=!1,this.$refs.orderModal.showModal()},openDelOrderModal(s){this.tempOrder={...s},this.$refs.delModal.showModal()},updatePaid(s){this.isLoading=!0;const r=`https://vue3-course-api.hexschool.io/api/leemotseng-api/admin/order/${s.id}`,i={is_paid:s.is_paid};this.$http.put(r,{data:i}).then(m=>{this.isLoading=!1,this.getOrders(this.currentPage),this.$httpMessageState(m,"更新付款狀態")})},delOrder(){const s=`https://vue3-course-api.hexschool.io/api/leemotseng-api/admin/order/${this.tempOrder.id}`;this.isLoading=!0,this.$http.delete(s).then(r=>{console.log(r),this.$refs.delModal.hideModal(),this.getOrders(this.currentPage)})}},created(){this.getOrders(),console.log("https://vue3-course-api.hexschool.io/")}},ut={class:"container"},pt=t("h3",{class:"text-start pt-3"},"訂單管理",-1),_t={class:"table mt-4"},mt=t("thead",null,[t("tr",null,[t("th",null,"購買時間"),t("th",null,"Email"),t("th",null,"購買款項"),t("th",null,"應付金額"),t("th",null,"是否付款"),t("th",null,"編輯")])],-1),gt=["textContent"],bt={class:"list-unstyled"},ft={class:"text-right"},Ot={class:"form-check form-switch"},yt=["id","onUpdate:modelValue","onChange"],$t=["for"],vt={key:0},Mt={key:1},kt={class:"btn-group"},xt=["onClick"],Ct=["onClick"];function Pt(s,r,i,m,e,h){const a=p("LoadingPage"),O=p("OrderModal"),y=p("DelModal"),$=p("Pagination");return l(),n(u,null,[_(a,{active:e.isLoading},null,8,["active"]),t("div",ut,[pt,t("table",_t,[mt,t("tbody",null,[(l(!0),n(u,null,b(e.orders,(d,v)=>(l(),n(u,{key:v},[e.orders.length?(l(),n("tr",{key:0,class:C({"text-secondary":!d.is_paid})},[t("td",null,o(s.$filters.date(d.create_at)),1),t("td",null,[d.user?(l(),n("span",{key:0,textContent:o(d.user.email)},null,8,gt)):g("",!0)]),t("td",null,[t("ul",bt,[(l(!0),n(u,null,b(d.products,(c,M)=>(l(),n("li",{key:M},o(c.product.title)+" 數量："+o(c.qty)+" "+o(c.product.unit),1))),128))])]),t("td",ft,o(d.total),1),t("td",null,[t("div",Ot,[P(t("input",{class:"form-check-input",type:"checkbox",id:`paidSwitch${d.id}`,"onUpdate:modelValue":c=>d.is_paid=c,onChange:c=>h.updatePaid(d)},null,40,yt),[[w,d.is_paid]]),t("label",{class:"form-check-label",for:`paidSwitch${d.id}`},[d.is_paid?(l(),n("span",vt,"已付款")):(l(),n("span",Mt,"未付款"))],8,$t)])]),t("td",null,[t("div",kt,[t("button",{class:"btn btn-outline-primary btn-sm",onClick:c=>h.openModal(!1,d)}," 檢視 ",8,xt),t("button",{class:"btn btn-outline-danger btn-sm",onClick:c=>h.openDelOrderModal(d)}," 刪除 ",8,Ct)])])],2)):g("",!0)],64))),128))])])]),_(O,{order:e.tempOrder,ref:"orderModal",onUpdatePaid:h.updatePaid},null,8,["order","onUpdatePaid"]),_(y,{item:e.tempOrder,ref:"delModal",onDelItem:h.delOrder},null,8,["item","onDelItem"]),_($,{pages:e.pagination,onEmitPages:h.getOrders},null,8,["pages","onEmitPages"])],64)}const Et=f(ht,[["render",Pt]]);export{Et as default};
