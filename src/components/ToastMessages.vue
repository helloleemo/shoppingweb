<template>
  <!-- 定位使用 -->
  <div class="toast-container position-absolute pe-3 top-0 end-0">
    <!-- 列表呈現 -->
    <Toast v-for="(msg, key) in messages" :key="key" :msg="msg" />
  </div>
</template>

<script>
import Toast from '../components/InfoToast.vue'

export default {
  components: { Toast },
  data() {
    return {
      messages: []
    }
  },
  inject: ['emitter'],
  mounted() {
    // 加入push-message事件到emitter，(message)是外部傳來的資訊
    this.emitter.on('push-message', (message) => {
      //每次觸發，將message加入this.messages
      const { style = 'success', title, content } = message
      this.messages.push({ style, title, content })
    })
  }
}
</script>
