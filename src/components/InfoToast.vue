<template>
  <div class="toast" role="alert" aria-live="assertive" aria-atomic="true" ref="toast">
    <div class="toast-header">
      <span :class="`bg-${msg.style}`" class="p-2 rounded me-2 d-inline-block"></span>
      <strong class="me-auto">{{ msg.title }}</strong>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body" v-if="msg.content">
      {{ msg.content }}
    </div>
  </div>
</template>

<script>
import Toast from 'bootstrap/js/dist/toast'

export default {
  name: 'infoToast',
  props: ['msg'],
  mounted() {
    //開啟生命週期後會歷時五秒
    const toastEl = this.$refs.toast
    const infoToast = new Toast(toastEl, {
      delay: 5000
    })
    infoToast.show()
  }
}
</script>
