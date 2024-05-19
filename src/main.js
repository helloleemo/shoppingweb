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
// import Loading2 from './components/Loading.vue'

//引入BS樣式
import './assets/all.scss'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'

//引入表單驗證vee-validation
import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate'
import * as AllRules from '@vee-validate/rules'
//多國語系
import { localize, setLocale } from '@vee-validate/i18n'
//繁中
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

//引入fontawsome樣式
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '../node_modules/@fortawesome/vue-fontawesome'
/* import specific icons */
library.add()

//引入千分號
import { currency, date } from './methods/filters'

//錯誤訊息
import $httpMessageState from './methods/pushMessageState.js'

const app = createApp(App)

app.config.globalProperties.$httpMessageState = $httpMessageState

//表單驗證部分
//加入全部規則
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule])
})
configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true // 當輸入任何內容直接進行驗證
})
// 設定預設語系
setLocale('zh_TW')

app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)

//全域註冊(元件名稱,對應import的名稱)
app.component('LoadingPage', Loading)
app.component('font-awesome-icon', FontAwesomeIcon)
// app.component('Loading2', Loading2)
app.component('VForm', Form)
app.component('VField', Field)
app.component('ErrorMessage', ErrorMessage)

app.config.globalProperties.$filters = {
  //加入$避免和其他變數混淆
  date,
  currency
}

app.mount('#app')
