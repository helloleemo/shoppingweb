import{_ as y,e as m,r as C,c,d as k,b as t,f as b,v as x,F as u,h as _,m as f,o as a,t as d,i as p,a as g,k as w}from"./index-CybjTFcM.js";import{_ as $}from"./pixlr-image-generator-87d1b6de-6b51-419a-9c0c-8924b1b86cf0-DUo1k0me.js";const L={components:{},data(){return{products:[],product:{},isLoading:!1,search:"",tags:["極簡","現代","華麗","科技","古典"],tagSelected:"",status:{loadingItem:""},form:{user:{name:"",email:"",tel:"",address:""},message:""},cart:{},coupon_code:"",cartCount:0}},methods:{getProducts(){const e="https://vue3-course-api.hexschool.io/api/leemotseng-api/products/all";this.isLoading=!0,this.$http.get(e).then(o=>{this.products=o.data.products,this.isLoading=!1})},getProduct(e){this.$router.push(`/user/product/${e}`)},addCart(e){const o="https://vue3-course-api.hexschool.io/api/leemotseng-api/cart";this.status.loadingItem=e;const n={product_id:e,qty:1};this.$http.post(o,{data:n}).then(h=>{console.log(h),this.status.loadingItem="",this.getCart()})},getCart(){const e="https://vue3-course-api.hexschool.io/api/leemotseng-api/cart";this.isLoading=!0,this.$http.get(e).then(o=>{this.cart=o.data.data,this.cartCount=o.data.data.total,m.emit("emitter-cartCount",this.cartCount),this.isLoading=!1})},updateCart(e){const o=`https://vue3-course-api.hexschool.io/api/leemotseng-api/cart/${e.id}`;this.isLoading=!0,this.status.loadingItem=e.id;const n={product_id:e.product_id,qty:e.qty};this.$http.put(o,{data:n}).then(h=>{console.log(h),this.status.loadingItem="",this.isLoading=!0,this.cartCount=this.getCart()})},delCart(e){this.status.loadingItem=e;const o=`https://vue3-course-api.hexschool.io/api/leemotseng-api/cart/${e}`;this.isloading=!0,this.$http.delete(o).then(n=>{this.$httpMessageState(n,"移除購物車品項"),this.status.loadingItem="",this.getCart(),this.isloading=!1})},selectTag(e){this.tagSelected=e},selectAllTag(){this.tagSelected="",this.getCart()},createOrder(){const e="https://vue3-course-api.hexschool.io/api/leemotseng-api/order",o=this.form;this.$http.post(e,{data:o}).then(n=>{console.log(n)})},getToCart(){this.$router.push("/user/cartview")}},computed:{filterProducts(){return this.products.filter(e=>e.title.match(this.search))}},created(){this.getProducts(),this.getCart()},mounted(){}},I=t("div",{class:"imgbox"},[t("img",{class:"img",src:$,alt:""})],-1),S={class:"container"},P={class:"row justify-content-between"},T=f('<div class="col-md-5"><nav aria-label="breadcrumb"><ol class="breadcrumb my-4"><li class="breadcrumb-item"><a href="#/user/view">首頁</a></li><li class="breadcrumb-item">產品</li></ol></nav></div>',1),N={class:"col-md-3"},V={class:"d-flex my-4",role:"search"},q=t("button",{class:"btn btn-outline-secondary",type:"submit"},"Search",-1),A={class:"container"},B={class:"row justify-content-around"},j={class:"sideNav col-xl-2 col-md-12"},D={class:"list-group sticky-top pb-2"},F=t("button",{type:"button",class:"bg-secondary border-secondary list-group-item list-group-item-action active","aria-current":"true"},[t("p",{class:"h5"},"選你所愛")],-1),M=["onClick"],U={class:"cards col-xl-10 col-md-12"},E={class:"row"},O={key:0,class:"wrapper-search row"},z={class:"card mb-5"},G={class:"card-img-top"},H=["src"],J={class:"card-body"},K={class:"tag border px-2 py-0 rounded fs-6 d-inline-block"},Q={class:"card-title fw-bold"},R={class:"card-text"},W={class:"text-secondary text-end"},X={class:"btn w-100"},Y=["disabled","onClick"],Z={key:0,class:"spinner-grow spinner-grow-sm",role:"status"},tt=t("span",{class:"visually-hidden"},"Loading...",-1),st=[tt],et=["onClick"],ot={key:1,class:"row wrapper-search"},ct={class:"card mb-5"},at={class:"card-img-top"},dt=["src"],it={class:"card-body"},rt={class:"tag border px-2 py-0 rounded fs-6 d-inline-block"},nt={class:"card-title fw-bold"},lt={class:"card-text"},ut={class:"text-secondary text-end"},ht={class:"btn w-100"},_t=["disabled","onClick"],pt={key:0,class:"spinner-grow spinner-grow-sm",role:"status"},gt=t("span",{class:"visually-hidden"},"Loading...",-1),bt=[gt],vt=["onClick"],yt={key:2,class:"row"},mt={class:"card mb-5"},Ct={class:"card-img-top"},kt=["src"],xt={class:"card-body"},ft={class:"tag border px-2 py-0 rounded fs-6 d-inline-block"},wt={class:"card-title fw-bold"},$t={class:"card-text"},Lt={class:"text-secondary text-end"},It={class:"btn w-100"},St=["disabled","onClick"],Pt={key:0,class:"spinner-grow spinner-grow-sm",role:"status"},Tt=t("span",{class:"visually-hidden"},"Loading...",-1),Nt=[Tt],Vt=["onClick"];function qt(e,o,n,h,r,i){const v=C("LoadingPage");return a(),c(u,null,[k(v,{active:r.isLoading},null,8,["active"]),I,t("div",S,[t("div",P,[T,t("div",N,[t("form",V,[b(t("input",{"onUpdate:modelValue":o[0]||(o[0]=s=>r.search=s),class:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"},null,512),[[x,r.search]]),q])])])]),t("div",A,[t("div",B,[t("div",j,[t("div",D,[F,t("button",{onClick:o[1]||(o[1]=(...s)=>i.selectAllTag&&i.selectAllTag(...s)),type:"button",class:"list-group-item list-group-item-action"}," 所有產品 "),(a(!0),c(u,null,_(r.tags,s=>(a(),c("button",{onClick:l=>i.selectTag(s),key:s,type:"button",class:"list-group-item list-group-item-action"},d(s),9,M))),128))])]),t("div",U,[t("div",E,[r.search!==""?(a(),c("div",O,[(a(!0),c(u,null,_(i.filterProducts,s=>(a(),c("div",{key:s.id,class:"col-xl-4 col-md-6"},[t("div",z,[t("div",G,[t("img",{src:`../src/assets/products/${s.title}.png`,class:"rounded-top",alt:""},null,8,H)]),t("div",J,[t("p",K,d(s.category),1),t("h4",null,[t("div",Q,d(s.title),1)]),t("p",null,[t("span",R,d(s.description),1)]),t("p",W,"$ "+d(e.$filters.currency(s.price)),1),t("div",X,[t("button",{"btn-addcart":"",disabled:this.status.loadingItem===s.id,onClick:l=>i.addCart(s.id),type:"button",class:"btn btn-dark border border-secondary btn-xl w-100 mt-2"},[this.status.loadingItem===s.id?(a(),c("div",Z,st)):p("",!0),g(" 加入購物車 ")],8,Y),t("button",{onClick:l=>i.getProduct(s.id),type:"button",class:"btn btn-outline-secondary border border-secondary btn-xl w-100 mt-2"}," 查看更多 ",8,et)])])])]))),128))])):r.tagSelected!==""?(a(),c("div",ot,[(a(!0),c(u,null,_(r.products,s=>b((a(),c("div",{key:s.id,class:"col-xl-4 col-md-6"},[t("div",ct,[t("div",at,[t("img",{src:`../src/assets/products/${s.title}.png`,class:"rounded-top",alt:""},null,8,dt)]),t("div",it,[t("p",rt,d(s.category),1),t("h4",null,[t("div",nt,d(s.title),1)]),t("p",null,[t("span",lt,d(s.description),1)]),t("p",ut,"$ "+d(e.$filters.currency(s.price)),1),t("div",ht,[t("button",{"btn-addcart":"",disabled:this.status.loadingItem===s.id,onClick:l=>i.addCart(s.id),type:"button",class:"btn btn-dark border border-secondary btn-xl w-100 mt-2"},[this.status.loadingItem===s.id?(a(),c("div",pt,bt)):p("",!0),g(" 加入購物車 ")],8,_t),t("button",{onClick:l=>i.getProduct(s.id),type:"button",class:"btn btn-outline-secondary border border-secondary btn-xl w-100 mt-2"}," 查看更多 ",8,vt)])])])])),[[w,s.category==r.tagSelected]])),128))])):(a(),c("div",yt,[(a(!0),c(u,null,_(r.products,s=>(a(),c("div",{key:s.id,class:"col-xl-4 col-md-6"},[t("div",mt,[t("div",Ct,[t("img",{src:`../src/assets/products/${s.title}.png`,class:"rounded-top",alt:""},null,8,kt)]),t("div",xt,[t("p",ft,d(s.category),1),t("h4",null,[t("div",wt,d(s.title),1)]),t("p",null,[t("span",$t,d(s.description),1)]),t("p",Lt,"$ "+d(e.$filters.currency(s.price)),1),t("div",It,[t("button",{"btn-addcart":"",disabled:this.status.loadingItem===s.id,onClick:l=>i.addCart(s.id),type:"button",class:"btn btn-dark border border-secondary btn-xl w-100 mt-2"},[this.status.loadingItem===s.id?(a(),c("div",Pt,Nt)):p("",!0),g(" 加入購物車 ")],8,St),t("button",{onClick:l=>i.getProduct(s.id),type:"button",class:"btn btn-outline-secondary border border-secondary btn-xl w-100 mt-2"}," 查看更多 ",8,Vt)])])])]))),128))]))])])])])],64)}const jt=y(L,[["render",qt]]);export{jt as default};
