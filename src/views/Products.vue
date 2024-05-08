<template>
  <Loading
    :active="isLoading"
    :can-cancel="true"
    :on-cancel="onCancel"
    :is-full-page="fullPage"
  ></Loading>
  <div class="text-end">
    <button @click="openModal" class="btn btn-primary" type="button">增加產品</button>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="120">分類</th>
        <th>產品名稱</th>
        <th width="120">原價</th>
        <th width="120">售價</th>
        <th width="100">是否啟用</th>
        <th width="200">編輯</th>
      </tr>
    </thead>
    <tbody>
      <!-- v-for="item in products" :key="item.id" -->
      <tr>
        <!-- {{ item.category }} -->
        <td>分類</td>
        <td>標題</td>
        <!-- {{ item.origin_price }} -->
        <td class="text-right">原價</td>
        <!-- {{ item.price }} -->
        <td class="text-right">價格</td>
        <td>
          <!-- v-if="item.is_enabled" -->
          <span class="text-success">啟用</span>
          <!-- <span class="text-muted" v-else>未啟用</span> -->
        </td>
        <td>
          <div class="btn-group">
            <button @click="openModal(false)" class="btn btn-outline-primary btn-sm">編輯</button>
            <button class="btn btn-outline-danger btn-sm">刪除</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <router-view />
  <ProductModal
    ref="productModal"
    :product="tempProduct"
    @update-product="updateProduct"
  ></ProductModal>
</template>

<script>
//載入ProductModal
import ProductModal from '../components/productModal.vue'
import DelModal from '../components/DelModal.vue'

export default {
  data() {
    return {
      products: [], //產品內容（陣列[]）
      pagination: {}, //分頁資訊（物件{}）
      tempProduct: {}, //外層的tempProduct
      isNew: false,
      isLoading: false
    }
  },
  components: {
    //區域註冊ProductModal元件
    ProductModal,
    DelModal
  },
  methods: {
    getProducts() {
      //取得遠端資料
      const api = `${import.meta.env.VITE_PATH_API}api/${import.meta.env.VITE_PATH_APP}/admin/products`
      this.isLoading = true //讀取前的效果

      //取得api
      this.$http.get(api).then((res) => {
        this.isLoading = false //讀取完成後關閉

        if (res.data.success) {
          //儲存產品和分頁資訊
          console.log(res.data)
          this.products = res.data.products
          this.pagination = res.data.pagination
        }
      })
    },
    openModal(isNew, item) {
      this.isLoading = true
      if (isNew) {
        this.tempProduct = {}
        // this.isLoading = false
      } else {
        this.tempProduct = {
          ...item
        }
        // this.isLoading = false
      }
      this.isNew = isNew

      const productComponent = this.$refs.productModal
      productComponent.showModal()
      this.isLoading = false
    },
    updateProduct(item) {
      this.tempProduct = item
      //取得資料(新增的狀態)：宣告api
      //不做判斷時，會走新增這個路線（預設）
      //新增商品方式是post
      let api = `${import.meta.env.VITE_PATH_API}api/${import.meta.env.VITE_PATH_APP}/admin/products`
      let httpMethod = 'post'

      //更新的方法是put：如果不是新增品項，重新調整api和httpMethod
      if (!this.isNew) {
        api = `${import.meta.env.VITE_PATH_API}api/${import.meta.env.VITE_PATH_APP}/admin/products/${item.id}`
        httpMethod = 'put'
      }

      const productComponent = this.$refs.productModal
      this.$http[httpMethod](api, { data: this.tempProduct }).then((res) => {
        console.log(res)
        productComponent.hideModal()
        this.getProducts()
      })
    },
    created() {
      this.getProducts()
    }
  }
}
</script>
