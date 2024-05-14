<template>
  <Loading :active="isLoading"></Loading>

  <div class="text-end">
    <button @click="openModal(true)" class="btn btn-primary mt-2" type="button">增加產品</button>
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
        <td class="text-right">{{ $filters.currency(item.origin_price) }}</td>
        <td class="text-right">{{ $filters.currency(item.price) }}</td>
        <td>
          <span v-if="item.is_enabled" class="text-success">啟用</span>
          <span class="text-muted" v-else>未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button @click="openModal(false, item)" class="btn btn-outline-primary btn-sm">
              編輯
            </button>
            <button class="btn btn-outline-danger btn-sm" @click="openDelProductModal(item)">
              刪除
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <Pagination :pages="pagination" @emit-pages="getProducts"></Pagination>
  <ProductModal
    ref="productModal"
    :product="tempProduct"
    @update-product="updateProduct"
  ></ProductModal>
  <DelModal :item="tempProduct" ref="delModal" @del-item="delProduct" />
</template>

<script>
//載入ProductModal
import ProductModal from '../components/ProductModal.vue'
import DelModal from '../components/DelModal.vue'
import Pagination from '../components/Pagination.vue'

export default {
  components: {
    //區域註冊ProductModal元件
    ProductModal,
    DelModal,
    Pagination
  },
  data() {
    return {
      products: [], //產品內容（陣列[]）：回傳所有的產品資料
      pagination: {}, //分頁資訊（物件{}）：回傳產品同時有分頁資訊
      tempProduct: {}, //外層的tempProduct
      isNew: false, //是否是新增的狀態

      isLoading: false
    }
  },
  inject: ['emitter'],
  methods: {
    getProducts(page = 1) {
      //取得遠端資料
      this.isLoading = true //的時候出現轉圈圈

      const api = `${import.meta.env.VITE_PATH_API}api/${import.meta.env.VITE_PATH_APP}/admin/products/?page=${page}`

      //讀取前載入loading畫面

      //取得該api
      this.$http.get(api).then((res) => {
        this.isLoading = false //讀取完成後關閉

        if (res.data.success) {
          //儲存產品和分頁資訊
          console.log(res.data)
          this.products = res.data.products
          this.pagination = res.data.pagination //存取pagination的資訊，:pages="pagination" @emit-pages="getProducts"
        }
      })
    },
    openModal(isNew, item) {
      // console.log(isNew, item)
      if (isNew) {
        this.tempProduct = {}
      } else {
        this.tempProduct = {
          ...item
        }
      }
      this.isNew = isNew

      const productComponent = this.$refs.productModal
      productComponent.showModal()
    },
    updateProduct(item) {
      this.tempProduct = item

      //不做判斷時，會走「新增」這個路線（預設）
      let api = `${import.meta.env.VITE_PATH_API}api/${import.meta.env.VITE_PATH_APP}/admin/product`
      let httpMethod = 'post'

      //如果不是新的物件，則將方法改為put(編輯)
      if (!this.isNew) {
        api = `${import.meta.env.VITE_PATH_API}api/${import.meta.env.VITE_PATH_APP}/admin/product/${item.id}`
        httpMethod = 'put'
      }

      const productComponent = this.$refs.productModal
      //將http方法用[httpMethod]參數方式帶入
      this.$http[httpMethod](api, { data: this.tempProduct }).then((res) => {
        console.log(res)
        productComponent.hideModal()

        //根據成功或失敗，推送不同的訊息
        if (res.data.success) {
          this.getProducts()
          this.emitter.emit('push-message', {
            //ToastMasseges裡面的push-message方法
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
    }
  },
  created() {
    this.getProducts()
  }
}
</script>
