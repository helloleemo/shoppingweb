<template>
  <Loading :active="isLoading"></Loading>
  <Loading :active="isLoading"></Loading>
  <!-- banner -->
  <div class="banner">
    <div class="">
      <img
        class="img"
        src="../assets/img/banner/pixlr-image-generator-f52d878e-1507-4286-b72e-57dbeb3cad0a.png"
        alt=""
      />
    </div>
  </div>
  <!-- Breadcrumb -->
  <div class="container">
    <div class="row justify-content-between">
      <div class="col-md-5">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb my-4">
            <li class="breadcrumb-item"><a href="#/user/view">首頁</a></li>
            <li class="breadcrumb-item"><a href="#/user/cart">產品</a></li>
            <li class="breadcrumb-item"><a href="#/user/cartview">購物車</a></li>

            <li class="breadcrumb-item active" aria-current="page">確認訂單</li>
          </ol>
        </nav>
      </div>
      <div class="col-md-3">
        <form class="d-flex my-4" role="search">
          <!-- cart-icon -->

          <input
            v-model="search"
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-secondary" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
  <!-- step -->
  <div class="step d-flex justify-content-center">
    <div class="row container mx-5 py-5">
      <div class="col mt-3 text-center">
        <div class="step-num">
          <h5 class="border rounded-pill bg-secondary text-white p-3">完成訂單資料</h5>
        </div>
      </div>
      <div class="col text-center">
        <div class="step-num py-3">
          <h2 v-if="!order.is_paid" class="h5 border rounded-pill bg-secondary text-white p-3">
            確認訂單
          </h2>
          <h2 v-else class="h5 border rounded-pill bg-secondary text-white p-3">確認訂單</h2>
        </div>
      </div>
      <div class="col text-center">
        <div class="step-num py-3">
          <h2 v-if="!order.is_paid" class="h5 border rounded-pill bg-white text-secondary p-3">
            付款完成
          </h2>
          <h2 v-else class="h5 border rounded-pill bg-secondary text-white p-3">付款完成</h2>
        </div>
      </div>
    </div>
  </div>
  <!-- checkout -->
  <div class="my-5 row justify-content-center">
    <form class="col-md-6 mb-5" @submit.prevent="payOrder">
      <h4 v-if="order.is_paid" class="text-center pb-3">已成功付款！</h4>
      <h4 class="text-center pb-3">訂單內容</h4>
      <hr />
      <table class="table align-middle">
        <thead>
          <th>品名</th>
          <th>數量</th>
          <th class="text-end">單價</th>
        </thead>
        <tbody>
          <tr v-for="item in order.products" :key="item.id">
            <td>{{ item.product.title }}</td>
            <td>{{ item.qty }} {{ item.product.unit }}</td>
            <td class="text-end">{{ item.final_total }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="2" class="text-end">總計</td>
            <td class="text-end">{{ order.total }}</td>
          </tr>
        </tfoot>
      </table>

      <h4 class="text-center pb-3">訂購人資料</h4>
      <table class="table">
        <tbody>
          <tr>
            <th width="100">Email</th>
            <td>{{ order.user.email }}</td>
          </tr>
          <tr>
            <th>姓名</th>
            <td>{{ order.user.name }}</td>
          </tr>
          <tr>
            <th>收件人電話</th>
            <td>{{ order.user.tel }}</td>
          </tr>
          <tr>
            <th>收件人地址</th>
            <td>{{ order.user.address }}</td>
          </tr>
          <tr>
            <th>付款狀態</th>
            <td>
              <span v-if="!order.is_paid">尚未付款</span>
              <span v-else class="text-success">付款完成</span>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="d-flex justify-content-between" v-if="order.is_paid === false">
        <button @click="getToView" class="btn mt-4 btn-outline-dark">修改訂單</button>
        <button class="btn mt-4 btn-dark w-50">確認付款</button>
      </div>
      <div class="text-center">
        <button @click="getToView" v-if="order.is_paid" class="btn btn-outline-dark mt-4 w-50">
          返回首頁
        </button>
      </div>
    </form>
  </div>
</template>
<!-- -NyDYnTkChdJR-2j2DgU -->

<script>
export default {
  data() {
    return {
      order: {
        user: {}
      },
      orderId: '',
      isLoading: false
    }
  },
  methods: {
    getOrder() {
      //取得特定訂單
      const url = `${import.meta.env.VITE_PATH_API}api/${import.meta.env.VITE_PATH_APP}/order/${this.orderId}`

      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.order = res.data.order
          console.log(this.order)
        }
      })
    },
    payOrder() {
      //送出表單後就付款（後端處理：將is_paid改為true）
      const url = `${import.meta.env.VITE_PATH_API}api/${import.meta.env.VITE_PATH_APP}/pay/${this.orderId}`

      this.$http.post(url).then((res) => {
        console.log(res)
        if (res.data.success) {
          this.getOrder()
        }
      })
    },
    getToView() {
      this.$router.push(`/user/view`)
    }
  },
  created() {
    this.orderId = this.$route.params.orderId //從路由取得哀低
    console.log(this.orderId)
    this.getOrder() //獲得訂單
  }
}
</script>
