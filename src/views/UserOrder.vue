<template>
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
          <h5 class="border rounded-pill bg-num bg-secondary text-white p-3">完成訂單資料</h5>
        </div>
      </div>
      <div class="col text-center">
        <div class="step-num py-3">
          <h2 class="h5 border rounded-pill bg-white text-secondary p-3">確認訂單</h2>
        </div>
      </div>
      <div class="col text-center">
        <div class="step-num py-3">
          <h2 class="h5 border rounded-pill bg-white text-secondary p-3">付款完成</h2>
        </div>
      </div>
    </div>
  </div>
  <!-- Cart -->
  <div class="container d-flex justify-content-center mx-auto">
    <div class="cart border bg-white rounded-3 p-5 my-5">
      <div class="tableCart">
        <h3 class="text-center pd-2">您的訂單</h3>
        <hr />
        <table class="table table-hover align-middle">
          <thead>
            <tr>
              <th>品項</th>
              <th>數量</th>
              <th>單價</th>
            </tr>
          </thead>
          <tbody>
            <template v-if="cart.carts">
              <tr v-for="item in cart.carts" :key="item.id">
                <td>
                  {{ item.product.title }}
                  <!-- <div class="text-success">已套用優惠券</div> -->
                </td>
                <td>
                  <div class="qty">
                    {{ item.qty }}
                    {{ item.product.unit }}
                  </div>
                </td>
                <td>
                  {{ $filters.currency(item.product.price) }}
                  <!-- <small class="text-success">{{
                  `折扣價：${$filters.currency(item.product.price)}`
                }}</small> -->
                </td>
              </tr>
              <tr>
                <td colspan="4" class="text-end">{{ $filters.currency(cart.final_total) }}</td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
      <!--   -->
      <!-- From -->
      <!--   -->
      <div class="tableForm">
        <div class="contentForm my-5">
          <VForm class="" v-slot="{ errors }" @submit="createOrder">
            <div class="mb-3">
              <h3 class="text-center pd-2">訂購人資料</h3>
              <hr />
              <label for="email" class="form-label">Email</label>
              <VField
                id="email"
                name="email"
                type="email"
                class="form-control"
                :class="{ 'is-invalid': errors['email'] }"
                placeholder="請輸入 Email"
                rules="email|required"
                v-model="form.user.email"
              ></VField>
              <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
            </div>
            <div class="mb-3">
              <label for="name" class="form-label">收件人姓名</label>
              <VField
                id="name"
                name="姓名"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['姓名'] }"
                placeholder="請輸入姓名"
                rules="required"
                v-model="form.user.name"
              ></VField>
              <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
            </div>
            <div class="mb-3">
              <label for="tel" class="form-label">收件人電話</label>
              <VField
                id="tel"
                name="電話"
                type="tel"
                class="form-control"
                :class="{ 'is-invalid': errors['電話'] }"
                placeholder="請輸入電話"
                rules="required"
                v-model="form.user.tel"
              ></VField>
              <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
            </div>
            <div class="mb-3">
              <label for="address" class="form-label">收件人地址</label>
              <VField
                id="address"
                name="地址"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['地址'] }"
                placeholder="請輸入地址"
                rules="required"
                v-model="form.user.address"
              ></VField>
              <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">留言</label>
              <textarea
                name=""
                id="message"
                class="form-control"
                cols="30"
                rows="10"
                v-model="form.message"
              ></textarea>
            </div>
            <div class="text-center">
              <button class="btn w-50 btn-outline-dark">送出訂單</button>
            </div>
          </VForm>
        </div>
      </div>
    </div>
  </div>
  <!-- Footer -->
  <UserFooter></UserFooter>
</template>

<script>
import UserFooter from '../components/UserFooter.vue'
export default {
  component: {
    UserFooter
  },
  data() {
    return {
      cart: {},
      status: {
        loadingItem: '' //對應品項的ID:當選取後，加入特定品項，則按鈕disable
      },
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      },
      orderId: '',
      isLoading: false,
      cartCount: 0
    }
  },

  methods: {
    createOrder() {
      const url = `${import.meta.env.VITE_PATH_API}api/${import.meta.env.VITE_PATH_APP}/order`
      const order = this.form
      this.$http.post(url, { data: order }).then((res) => {
        this.orderId = res.data.orderId
        console.log(res.data.orderId)
        this.$router.push(`/user/checkout/${this.orderId}`)
      })
    },
    getCart() {
      const url = `${import.meta.env.VITE_PATH_API}api/${import.meta.env.VITE_PATH_APP}/cart`
      this.isLoading = true
      this.$http.get(url).then((res) => {
        this.cart = res.data.data //薑res.data.data的東西存起來
        // console.log(res.data.data.total)
        this.isLoading = false
      })
    }
  },
  created() {
    this.getCart()
  }
}
</script>

<style>
.step .cart {
  background-color: #dddddd;
}
</style>
