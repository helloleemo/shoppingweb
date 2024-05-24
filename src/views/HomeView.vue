<template></template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    getToIndex() {
      this.$router.push('/user/view')
    }
  },
  //載入元件
  components: {
    // TheWelcome
  },
  //確定環境變數已經加載
  created() {
    this.getToIndex()
    // console.log(import.meta.env.VITE_PATH_API, import.meta.env.VITE_PATH_APP)
  }
}
</script>

<style lang="scss"></style>
