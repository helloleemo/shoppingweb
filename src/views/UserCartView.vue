<template>
  <LoadingPage :active="isLoading"></LoadingPage>
  <div class="banner">
    <div class="imgbox">
      <img
        class="img"
        src="../assets/img/banner/pixlr-image-generator-f52d878e-1507-4286-b72e-57dbeb3cad0a.png"
        alt=""
      />
    </div>
  </div>
  <div class="cartBg">
    <div class="container d-flex justify-content-center mx-auto">
      <div class="cart border bg-white rounded-3 p-5 my-5">
        <h3 class="text-center pd-2">購物車清單</h3>
        <hr />
        <table class="table table-hover align-middle">
          <thead>
            <tr>
              <th>品項</th>
              <th>數量</th>
              <th>單價</th>
              <th></th>
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
                  <div class="qty input-group input-group-sm">
                    <input
                      :disabled="item.id === status.loadingItem"
                      v-model.number="item.qty"
                      min="1"
                      @change="updateCart(item)"
                      type="number"
                      class="form-control itemQty"
                    />
                    {{ item.product.unit }}
                  </div>
                </td>
                <td>
                  {{ $filters.currency(item.product.price) }}
                </td>
                <td>
                  <button
                    :disabled="status.loadingItem === item.id"
                    @click="delCart(item.id)"
                    type="button"
                    class="btn btn-sm"
                  >
                    <i class="bi bi-trash3"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td colspan="4" class="text-end">{{ $filters.currency(cart.final_total) }}</td>
              </tr>
            </template>
          </tbody>
        </table>
        <div class="btnSet d-flex">
          <button @click="getToProduct" class="btn btn-outline-primary w-50 mx-5">
            返回繼續購物
          </button>
          <button @click="getToCartOrder" class="btn btn-primary w-50 mx-5">結帳</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import emitter from '../methods/emitter.js'
// import UserOrder from '../components/UserOrder.vue'

export default {
  component: {
    // UserOrder
  },
  data() {
    return {
      cart: {},
      status: {
        loadingItem: '' //對應品項的ID:當選取後，加入特定品項，則按鈕disable
      },
      cartCount: 0
    }
  },
  methods: {
    getToProduct() {
      this.$router.push(`/user/cart`)
    },
    getToCartOrder() {
      this.$router.push(`/user/cartorder`)
    },
    getCart() {
      const url = `${import.meta.env.VITE_PATH_API}api/${import.meta.env.VITE_PATH_APP}/cart`
      this.isLoading = true
      this.$http.get(url).then((res) => {
        this.cart = res.data.data //薑res.data.data的東西存起來
        // console.log(res.data.data.total)
        this.isLoading = false
      })
    },
    delCart(id) {
      this.status.loadingItem = id
      const url = `${import.meta.env.VITE_PATH_API}api/${import.meta.env.VITE_PATH_APP}/cart/${id}`
      this.isloading = true
      this.$http.delete(url).then((res) => {
        this.$httpMessageState(res, '移除購物車品項')
        this.status.loadingItem = ''
        this.getCart()
        this.isloading = false
      })
    },
    updateCart(item) {
      const url = `${import.meta.env.VITE_PATH_API}api/${import.meta.env.VITE_PATH_APP}/cart/${item.id}`
      this.isLoading = true
      this.status.loadingItem = item.id

      const cart = {
        product_id: item.product_id,
        qty: item.qty
      }

      this.$http.put(url, { data: cart }).then((res) => {
        console.log(res)
        this.status.loadingItem = ''

        this.isLoading = false

        this.getCart()
      })
    },
    createOrder() {
      const url = `${import.meta.env.VITE_PATH_API}api/${import.meta.env.VITE_PATH_APP}/order`
      const order = this.form
      this.$http.post(url, { data: order }).then((res) => {
        console.log(res)
      })
    }
  },
  created() {
    this.getCart()
  }
}
</script>

<style lang="scss">
.cartBg {
  background-color: #f1f1f1;
  height: 100vh;
}
.imgbox {
  img {
    object-fit: cover;
    width: 100%;
    height: 300px;
  }
}
.cart {
  width: 900px;
  .itemQty {
    width: 100px;
  }
}
.step {
  background-color: #eeeeee;
  .bg-num {
    background-color: #949494;
  }
}
</style>
