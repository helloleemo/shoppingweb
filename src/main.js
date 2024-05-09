import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//安裝axios
import axios from 'axios'
import VueAxios from 'vue-axios'

//loding effect components
import Loading from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'

//引入BS樣式
import './assets/all.scss'

//引入千分號
import { currency } from './methods/filters'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)
//全域註冊(元件名稱,對應import的名稱)
app.component('Loading', Loading)
app.config.globalProperties.$filters = {
  //加入$避免和其他變數混淆
  currency
}

app.mount('#app')
