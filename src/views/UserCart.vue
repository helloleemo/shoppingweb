<template>
  <Loading :active="isLoading"></Loading>
  <!-- Banner -->
  <div class="banner">
    <div class="img"><img src="https://picsum.photos/1200/200" alt="" /></div>
  </div>

  <!-- Breadcrumb -->
  <div class="row justify-content-between">
    <div class="col-md-5">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb my-4">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item"><a href="#">Library</a></li>
          <li class="breadcrumb-item active" aria-current="page">Data</li>
        </ol>
      </nav>
    </div>
    <div class="col-md-3">
      <form class="d-flex my-4" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>

  <!-- container -->
  <div class="container">
    <div class="row justify-content-around">
      <div class="sideNav col-xl-2 col-md-12">
        <div class="list-group sticky-top">
          <button
            type="button"
            class="list-group-item list-group-item-action active"
            aria-current="true"
          >
            <p class="h5">Title</p>
          </button>
          <button type="button" class="list-group-item list-group-item-action">
            A second button item
          </button>
          <button type="button" class="list-group-item list-group-item-action">
            A second button item
          </button>
          <button type="button" class="list-group-item list-group-item-action">
            A second button item
          </button>
          <button type="button" class="list-group-item list-group-item-action">
            A second button item
          </button>
        </div>
      </div>
      <div class="cards col-xl-10 col-md-12">
        <div class="row">
          <div v-for="item in products" :key="item.id" class="col-xl-4 col-md-6">
            <div class="card mb-5">
              <div class="card-img-top">
                <!-- <img :src="item.imageUrl" class="rounded-top" alt="" /> -->
                <img src="https://picsum.photos/600/400" class="rounded-top" alt="" />
                <!-- <img :src="item.imageUrl" class="rounded-top" alt="" /> -->
              </div>
              <div class="card-body">
                <p class="tag border px-2 py-0 rounded fs-6 d-inline-block">{{ item.category }}</p>
                <h4>
                  <div class="card-title fw-bold">{{ item.title }}</div>
                </h4>
                <p>
                  <span class="card-text">{{ item.description }}</span>
                </p>
                <p class="text-secondary text-end">{{ item.price }}</p>
                <div class="btn w-100">
                  <button
                    :disabled="this.status.loadingItem === item.id"
                    @click="addCart(item.id)"
                    type="button"
                    class="p-2 mt-2 w-100"
                  >
                    <div
                      v-if="this.status.loadingItem === item.id"
                      class="spinner-grow text-secondary spinner-grow-sm"
                      role="status"
                    >
                      <span class="visually-hidden">Loading...</span>
                    </div>
                    加入購物車
                  </button>
                  <button @click="getProduct(item.id)" type="button" class="p-2 mt-2 w-100">
                    更多資訊
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cart">
        購物車列表
        <table class="table table-hover align-middle">
          <thead>
            <tr>
              <th></th>
              <th>品項</th>
              <th>數量</th>
              <th>單價</th>
            </tr>
          </thead>
          <tbody>
            <template v-if="cart.carts">
              <tr v-for="item in cart.carts" :key="item.id">
                <td>
                  <button type="button" class="btn btn-sm">
                    <i class="bi bi-trash3"></i>
                  </button>
                </td>
                <td>
                  {{ item.product.title }}
                  <!-- <div class="text-success">已套用優惠券</div> -->
                </td>
                <td>
                  <div class="qty input-group input-group-sm">
                    <input
                      v-modal.number="item.qty"
                      min="1"
                      :disabled="item.id === status.loadingItem"
                      @change="updateCart(item)"
                      type="number"
                      class="form-control"
                    />
                    {{ item.product.unit }}
                  </div>
                </td>
                <td>
                  {{ item.product.origin_price }}
                  <!-- <small class="text-success">{{ `折扣價：${item.product.price}` }}</small> -->
                </td>
              </tr>
            </template>
          </tbody>
        </table>
        <div class="input-group mb-3 input-group-sm">
          <input
            type="text"
            class="form-control"
            v-model="coupon_code"
            placeholder="請輸入優惠碼"
          />
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button" @click="addCouponCode">
              套用優惠碼
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      products: [], //產品內容（陣列[]）：回傳所有的產品資料
      product: {}, //某個產品本人
      isLoading: false,
      cart: {},
      coupon_code: '',

      status: {
        loadingItem: '' //對應品項的ID:當選取後，加入特定品項，則按鈕disable
      }
    }
  },
  methods: {
    getProducts() {
      const api = `${import.meta.env.VITE_PATH_API}api/${import.meta.env.VITE_PATH_APP}/products`
      this.isLoading = true

      this.$http.get(api).then((res) => {
        console.log(res)

        this.products = res.data.products
        this.isLoading = false
      })
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
        this.status.loadingItem = '' //清空

        console.log(res) //有加成功？
      })
    },
    getCart() {
      const url = `${import.meta.env.VITE_PATH_API}api/${import.meta.env.VITE_PATH_APP}/cart`
      this.isLoading = true
      this.$http.get(url).then((res) => {
        console.log(res)
        this.cart = res.data.data //薑res.data.data的東西存起來
        this.isLoading = false
      })
    },
    updateCart(item) {
      const url = `${import.meta.env.VITE_PATH_API}api/${import.meta.env.VITE_PATH_APP}/cart/${id}`
      this.isLoading = true

      const cart = {
        product_id: item.product_id,
        qty: item.qty
      }

      this.$http.put(url).then((res) => {
        console.log(res)
        this.getCart()
      })
    }
  },
  created() {
    this.getProducts()
    this.getCart()
  }
}
</script>

<style lang="scss">
.qty {
  width: 100px;
}
.banner {
  img {
    object-fit: cover;
    width: 100%;
    height: 150px;
  }
}
.card {
  height: 500px;
  cursor: none;

  // transition: all 0.2s ease;
  // &:hover {
  //   box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  //   transform: scale(1.02);
  // }
  .card-img-top {
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  button {
    border: none;
    cursor: pointer;
  }
}
</style>
