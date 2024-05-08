<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{ data }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {}
    }
  },
  mounted() {
    //載入環境變數的方式：
    // 以下將網址替換成「環境變數」(通用：.env)
    // console.log(import.meta.env.VITE_PATH)
    const url = import.meta.env.VITE_PATH
    // 以下將網址替換成「開發變數」(開發：.env.devlopment)
    console.log(import.meta.env.VITE_TEXT)

    this.$http.get(url).then((res) => {
      console.log(res)
      this.data = res.data.results[0]
    })
  }
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
