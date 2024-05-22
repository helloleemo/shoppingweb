<template>
  PorHome
  <router-view />
</template>

<script>
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createApp } from 'vue'

const vuetify = createVuetify({
  components,
  directives
})

export default {
  name: 'PortHome',
  created() {
    const app = createApp({})
    app.use(vuetify)
  }
}
</script>

<style>
@import 'vuetify/styles';
</style>
