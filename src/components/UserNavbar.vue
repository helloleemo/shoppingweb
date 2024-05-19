<template>
  <Loading :active="isLoading"></Loading>

  <nav class="navbar navbarMain navbar-expand-lg fixed-top navbar-light py-3" id="mainNav">
    <div class="container px-4 px-lg-5">
      <div class="imgboxLogo">
        <img @click="getToView" src="../assets/img/logo1.png" alt="" />
      </div>
      <button
        class="navbar-toggler navbar-toggler-right"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ms-auto my-2 my-lg-0">
          <li class="nav-item"><a class="nav-link" href="#/user/cart">產品</a></li>

          <li class="nav-item">
            <button @click="getToCart" type="button" class="btn cart-icon me-3 px-2">
              <i class="bag-tag text-primary bi-cart-fill me-1 position-relative">
                <span
                  v-show="cartCount !== 0"
                  class="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle"
                ></span
              ></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import emitter from '../methods/emitter.js'

export default {
  data() {
    return {
      cartCount: 0,
      isLoading: false
    }
  },
  watch: {
    cartCount() {
      emitter.on('emitter-cartCount', (data) => {
        this.cartCount = data
        console.log(data)
      })
      this.getCart()
    }
  },
  methods: {
    getToView() {
      this.$router.push(`/user/view`)
    },
    getToCart() {
      //進入購物車
      this.$router.push(`/user/cartview`)
    },
    getCart() {
      const url = `${import.meta.env.VITE_PATH_API}api/${import.meta.env.VITE_PATH_APP}/cart`
      this.isLoading = true
      this.$http.get(url).then((res) => {
        // console.log(res)
        // console.log(res.data.data.total)
        this.isLoading = false
        this.cartCount = res.data.data.total
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
        this.isLoading = true
        this.getCart()
      })
    }
  },
  created() {
    this.getCart()
  }
}
</script>

<style lang="scss">
.imgboxLogo {
  width: 150px;
  height: 50px;
  cursor: pointer;
  img {
    object-fit: contain;
    width: 100%;
  }
}
</style>
