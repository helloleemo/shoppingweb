<template>
  <LoadingPage :active="isLoading"></LoadingPage>

  <!-- Banner -->
  <div class="imgbox">
    <img
      class="img"
      src="../assets/img/banner/pixlr-image-generator-87d1b6de-6b51-419a-9c0c-8924b1b86cf0.png"
      alt=""
    />
  </div>

  <!-- Breadcrumb -->
  <div class="container">
    <div class="row justify-content-between">
      <div class="col-md-5">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb my-4">
            <li class="breadcrumb-item"><a href="#/user/view">首頁</a></li>
            <li class="breadcrumb-item">產品</li>
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

  <!-- container -->
  <div class="container">
    <div class="row justify-content-around">
      <!-- sideNav -->
      <div class="sideNav col-xl-2 col-md-12">
        <div class="list-group sticky-top pb-2">
          <button
            type="button"
            class="bg-secondary border-secondary list-group-item list-group-item-action active"
            aria-current="true"
          >
            <p class="h5">選你所愛</p>
          </button>
          <button
            @click="selectAllTag"
            type="button"
            class="list-group-item list-group-item-action"
          >
            所有產品
          </button>
          <button
            @click="selectTag(item)"
            v-for="item in tags"
            :key="item"
            type="button"
            class="list-group-item list-group-item-action"
          >
            {{ item }}
          </button>
        </div>
      </div>
      <!-- cards -->
      <div class="cards col-xl-10 col-md-12">
        <div class="row">
          <!-- 搜尋情況 -->
          <div v-if="search !== ''" class="wrapper-search row">
            <div v-for="item in filterProducts" :key="item.id" class="col-xl-4 col-md-6">
              <div class="card mb-5">
                <div class="card-img-top">
                  <img
                    :src="`../src/assets/products/${item.title}.png`"
                    class="rounded-top"
                    alt=""
                  />
                </div>
                <div class="card-body">
                  <p class="tag border px-2 py-0 rounded fs-6 d-inline-block">
                    {{ item.category }}
                  </p>
                  <h4>
                    <div class="card-title fw-bold">{{ item.title }}</div>
                  </h4>
                  <p>
                    <span class="card-text">{{ item.description }}</span>
                  </p>
                  <p class="text-secondary text-end">$ {{ $filters.currency(item.price) }}</p>
                  <div class="btn w-100">
                    <button
                      btn-addcart
                      :disabled="this.status.loadingItem === item.id"
                      @click="addCart(item.id)"
                      type="button"
                      class="btn btn-dark border border-secondary btn-xl w-100 mt-2"
                    >
                      <div
                        v-if="this.status.loadingItem === item.id"
                        class="spinner-grow spinner-grow-sm"
                        role="status"
                      >
                        <span class="visually-hidden">Loading...</span>
                      </div>
                      加入購物車
                    </button>
                    <button
                      @click="getProduct(item.id)"
                      type="button"
                      class="btn btn-outline-secondary border border-secondary btn-xl w-100 mt-2"
                    >
                      查看更多
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 點選tag的情況 -->
          <div v-else-if="tagSelected !== ''" class="row wrapper-search">
            <div
              v-for="item in products"
              :key="item.id"
              v-show="item.category == tagSelected"
              class="col-xl-4 col-md-6"
            >
              <div class="card mb-5">
                <div class="card-img-top">
                  <img
                    :src="`../src/assets/products/${item.title}.png`"
                    class="rounded-top"
                    alt=""
                  />
                </div>
                <div class="card-body">
                  <p class="tag border px-2 py-0 rounded fs-6 d-inline-block">
                    {{ item.category }}
                  </p>
                  <h4>
                    <div class="card-title fw-bold">{{ item.title }}</div>
                  </h4>
                  <p>
                    <span class="card-text">{{ item.description }}</span>
                  </p>
                  <p class="text-secondary text-end">$ {{ $filters.currency(item.price) }}</p>
                  <div class="btn w-100">
                    <button
                      btn-addcart
                      :disabled="this.status.loadingItem === item.id"
                      @click="addCart(item.id)"
                      type="button"
                      class="btn btn-dark border border-secondary btn-xl w-100 mt-2"
                    >
                      <div
                        v-if="this.status.loadingItem === item.id"
                        class="spinner-grow spinner-grow-sm"
                        role="status"
                      >
                        <span class="visually-hidden">Loading...</span>
                      </div>
                      加入購物車
                    </button>
                    <button
                      @click="getProduct(item.id)"
                      type="button"
                      class="btn btn-outline-secondary border border-secondary btn-xl w-100 mt-2"
                    >
                      查看更多
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 全部情況 -->
          <div v-else class="row">
            <div v-for="item in products" :key="item.id" class="col-xl-4 col-md-6">
              <div class="card mb-5">
                <div class="card-img-top">
                  <!-- :src="`../src/assets/products/${item.title}.png`" -->
                  <img :src="getImageSrc(item.title)" class="rounded-top" alt="" />
                </div>
                <div class="card-body">
                  <p class="tag border px-2 py-0 rounded fs-6 d-inline-block">
                    {{ item.category }}
                  </p>
                  <h4>
                    <div class="card-title fw-bold">{{ item.title }}</div>
                  </h4>
                  <p>
                    <span class="card-text">{{ item.description }}</span>
                  </p>
                  <p class="text-secondary text-end">$ {{ $filters.currency(item.price) }}</p>
                  <div class="btn w-100">
                    <button
                      btn-addcart
                      :disabled="this.status.loadingItem === item.id"
                      @click="addCart(item.id)"
                      type="button"
                      class="btn btn-dark border border-secondary btn-xl w-100 mt-2"
                    >
                      <div
                        v-if="this.status.loadingItem === item.id"
                        class="spinner-grow spinner-grow-sm"
                        role="status"
                      >
                        <span class="visually-hidden">Loading...</span>
                      </div>
                      加入購物車
                    </button>
                    <button
                      @click="getProduct(item.id)"
                      type="button"
                      class="btn btn-outline-secondary border border-secondary btn-xl w-100 mt-2"
                    >
                      查看更多
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emitter from '../methods/emitter.js'

export default {
  components: {},
  data() {
    return {
      products: [], //產品內容（陣列[]）：回傳所有的產品資料
      product: {}, //某個產品本人
      isLoading: false,
      search: '', //搜尋功能
      tags: ['極簡', '現代', '華麗', '科技', '古典'],
      tagSelected: '', //標籤被選擇了

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
      cart: {},
      coupon_code: '',
      cartCount: 0
    }
  },
  methods: {
    getProducts() {
      const api = `${import.meta.env.VITE_PATH_API}api/${import.meta.env.VITE_PATH_APP}/products/all`
      this.isLoading = true

      this.$http.get(api).then((res) => {
        // console.log(res)

        this.products = res.data.products
        this.isLoading = false
      })
    },
    getImageSrc(title) {
      try {
        return new URL(`../assets/products/${title}.png`, import.meta.url).href
      } catch (error) {
        console.error(`Image not found for ${title}:`, error)
        return ''
      }
    },
    getProduct(id) {
      //進入單一商品列表
      this.$router.push(`/user/product/${id}`)
    },
    addCart(id) {
      //加入購物車
      // console.log(id)
      const url = `${import.meta.env.VITE_PATH_API}api/${import.meta.env.VITE_PATH_APP}/cart`
      this.status.loadingItem = id //有東西

      const cart = {
        product_id: id,
        qty: 1
      }
      this.$http.post(url, { data: cart }).then((res) => {
        console.log(res)
        ;(this.status.loadingItem = ''), //清空
          // this.cartCount=
          this.getCart()
      })
    },
    getCart() {
      const url = `${import.meta.env.VITE_PATH_API}api/${import.meta.env.VITE_PATH_APP}/cart`
      this.isLoading = true
      this.$http.get(url).then((res) => {
        // console.log(res)
        this.cart = res.data.data //薑res.data.data的東西存起來
        // console.log(res.data.data.total)
        this.cartCount = res.data.data.total
        emitter.emit('emitter-cartCount', this.cartCount)

        this.isLoading = false
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

        this.cartCount = this.getCart()
      })
    },
    // addCouponCode() {
    //   const url = `${import.meta.env.VITE_PATH_API}api/${import.meta.env.VITE_PATH_APP}/coupon`
    //   const coupon = {
    //     code: this.coupon_code
    //   }
    //   this.$http.post(url, { data: coupon }).then((res) => {
    //     console.log(res)
    //   })
    // },
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
    selectTag(item) {
      this.tagSelected = item
      // console.log(item)
    },
    selectAllTag() {
      this.tagSelected = ''
      this.getCart()
    },
    createOrder() {
      const url = `${import.meta.env.VITE_PATH_API}api/${import.meta.env.VITE_PATH_APP}/order`
      const order = this.form
      this.$http.post(url, { data: order }).then((res) => {
        console.log(res)
      })
    },
    getToCart() {
      //進入購物車
      this.$router.push(`/user/cartview`)
    }
  },
  computed: {
    filterProducts() {
      return this.products.filter((item) => {
        return item.title.match(this.search)
      })
    }
  },
  created() {
    this.getProducts()
    this.getCart()
  },
  mounted() {}
}
</script>

<style lang="scss">
.qty {
  width: 100px;
}
.sideNav {
  sticky-top {
    top: 20%;
  }
}
.imgbox {
  height: 300px;
  img {
    object-fit: cover;
    width: 100%;
    height: 300px;
  }
}
.btn-addcart {
  &:hover {
    background: rgb(60, 60, 60);
  }
}
.card {
  // height: 500px;
  cursor: default !important;
  .card-img-top {
    cursor: default;

    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
