import Vue from 'vue'
import App from './App.vue'

// 引用路由
import router from '@/router/index.js'

// 引进css样式
import '@/styles/reset.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
