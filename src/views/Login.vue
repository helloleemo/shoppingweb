<template>
  <!-- 登入頁面的模板 -->
  <Loading :active="isLoading"></Loading>
  <ToastMessages></ToastMessages>
  <div class="container mt-5">
    <form @submit.prevent="signIn" class="row justify-content-center">
      <div class="col-md-6">
        <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
        <div class="mb-2">
          <label for="inputEmail" class="sr-only">Email address</label>
          <!-- v-model新增在此input -->
          <input
            type="email"
            id="inputEmail"
            class="form-control"
            placeholder="Email address"
            required
            autofocus
            v-model="user.username"
          />
        </div>
        <div class="mb-2">
          <label for="inputPassword" class="sr-only">Password</label>
          <input
            type="password"
            id="inputPassword"
            class="form-control"
            placeholder="Password"
            required
            v-model="user.password"
          />
        </div>

        <div class="text-end" mt-4>
          <button @click.prevent="signIn" class="btn btn-lg btn-primary btn-block" type="submit">
            登入
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import ToastMessages from '../components/ToastMessages.vue'
import emitter from '../methods/emitter.js'

export default {
  components: {
    ToastMessages
  },
  provide() {
    return {
      emitter
    }
  },
  data() {
    return {
      //資料須完全對應文件:https://github.com/hexschool/vue3-course-api-wiki/wiki/%E7%99%BB%E5%85%A5%E5%8F%8A%E9%A9%97%E8%AD%89
      user: {
        username: '',
        password: ''
      },
      isLoading: false
    }
  },
  // inject: ['emitter'],
  methods: {
    signIn() {
      //登入方式
      console.log('login!')
      //插入api（用.env的檔案）
      const api = `${import.meta.env.VITE_PATH_API}admin/signin`

      this.isLoading = true

      //console.log(api) //確認api正確導入
      //axios套件使用
      //POST方法，取得裡面的資料(api是路徑，this.user是夾帶資料)
      this.$http.post(api, this.user).then((res) => {
        this.isLoading = false

        //如果登入成功／失敗的狀態
        if (res.data.success) {
          //儲存cookie的方法：
          //（儲存是為了維持登入狀態）
          const token = res.data.token //取得資料
          const expired = res.data.expired //取得資料
          // console.log(token, expired) //確定有存取到
          //將token資料儲存到cookie
          //(寫法參考：https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie)
          document.cookie = `defToken=${token}; expires=${new Date(expired)}`

          //登入成功，轉到dashboard/products頁面
          this.$router.push('/dashboard/products')
        }
      })
    }
  }
}
</script>
