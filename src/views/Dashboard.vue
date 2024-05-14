<template>
  <Navbar></Navbar>
  <div class="container-fluid mt-3 position-relative">
    <ToastMessages></ToastMessages>
    <router-view />
  </div>
</template>

<script>
//元件加進來的方式
import emitter from '../methods/emitter.js'
import ToastMessages from '../components/ToastMessages.vue'
import Navbar from '../components/Navbar.vue'

export default {
  //區域註冊元件的方式
  components: {
    Navbar,
    ToastMessages
  },
  provide() {
    return {
      emitter
    }
  },

  //登入頁面後要維持登入狀態的寫法
  created() {
    //cookie中取得token（參考：https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie）
    const token = document.cookie.replace(/(?:(?:^|.*\s*)defToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    // console.log(token)
    this.$http.defaults.headers.common.Authorization = token //薑token加到header中

    //將api再轉成可讀取的寫法
    //改寫api路徑，變成驗證登入的路徑api/user/check
    const api = `${import.meta.env.VITE_PATH_API}api/user/check`

    this.$http.post(api, this.user).then((res) => {
      // console.log(res)
      if (!res.data.success) {
        this.$router.push('/login') //登入失敗轉回登入頁面
      }
    })
  }
}
</script>
