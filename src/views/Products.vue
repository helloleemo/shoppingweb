<template>
  <Loading :active="isLoading" :can-cancel="true"></Loading>
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
      <tr v-for="item in products" :key="item.id">
        <td>{{ item.category }}</td>
        <td>{{ item.title }}</td>
        <td class="text-right">{{ $filter.currency(item.origin_price) }}</td>
        <td class="text-right">{{ $filter.currency(item.price) }}</td>
        <td>
          <span v-if="item.is_enabled" class="text-success">啟用</span>
          <span class="text-muted" v-else>未啟用</span>
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
  <Pagination :pages="pagination" @emit-pages="getProducts"></Pagination>
  <ProductModal
    ref="productModal"
    :product="tempProduct"
    @update-product="updateProｚduct;"
  ></ProductModal>
  <DelModal :item="tempProduct" ref="delModal" @del-item="delProduct" />
</template>

<script>
//載入ProductModal
import ProductModal from '../components/ProductModal.vue'
import DelModal from '../components/DelModal.vue'
import Pagination from '../components/Pagination.vue'

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
    DelModal,
    Pagination
  },
  methods: {
    getProducts(page = 1) {
      //取得遠端資料
      // const api = `${import.meta.env.VITE_PATH_API}api/${import.meta.env.VITE_PATH_APP}/products`
      // const api = `https://vue3-course-api.hexschool.io/api/${import.meta.env.VITE_PATH_APP}/products/?page=${page}`
      const api = `https://vue3-course-api.hexschool.io/api/${import.meta.env.VITE_PATH_APP}/products/?page=${page}`

      this.isLoading = true //讀取前的效果

      //取得api
      this.$http.get(api).then((res) => {
        // this.isLoading = false //讀取完成後關閉
        if (res.data.success) {
          //儲存產品和分頁資訊
          console.log(res.data)
          this.products = res.data.products
          this.pagination = res.data.pagination //存取pagination的資訊，:pages="pagination" @emit-pages="getProducts"
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
      // let api = `${import.meta.env.VITE_PATH_API}api/${import.meta.env.VITE_PATH_APP}/admin/products`
      let api = `${import.meta.env.VITE_PATH_API}api/${import.meta.env.VITE_PATH_APP}/products`

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
        if (res.data.success) {
          this.getProducts()
          this.emitter.emit('push-message', {
            style: 'success',
            title: '更新成功'
          })
        } else {
          this.emitter.emit('push-message', {
            style: 'danger',
            title: '更新失敗',
            content: res.data.message.join('、') //後端內容
          })
        }
      })
    },
    //開啟刪除modal
    openDelProductModal(item) {
      this.tempProduct = { ...item }
      const delComponent = this.$refs.delModal
      delComponent.showModal()
    },
    delProduct() {
      const url = `${import.meta.env.VITE_PATH_API}api/${import.meta.env.VITE_PATH_APP}/admin/product/${this.tempProduct.id}`
      this.$http.delete(url).then((res) => {
        console.log(res.data)
        const delComponent = this.$refs.delModal
        delComponent.hideModal()
        this.getProducts()
      })
    },
    created() {
      this.getProducts()
    }
  }
}
</script>
