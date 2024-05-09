<script>
import TheWelcome from '../components/TheWelcome.vue'

export default {
  data() {
    return {}
  },
  //載入元件
  components: {
    TheWelcome
  },
  //確定環境變數已經加載
  created() {
    console.log(import.meta.env.VITE_PATH_API, import.meta.env.VITE_PATH_APP)
  }
}
</script>

<template>
  <main><TheWelcome /></main>
</template>
