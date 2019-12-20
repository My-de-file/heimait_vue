import Vue from 'vue'
import App from './App.vue'

// 引进css样式
import '@/styles/reset.css'

// 引入路由 将其添加到Vue里面
import router from '@/router/index.js'
// 添加Vant图标组件
import { Icon } from 'vant';
// 添加提示功能模块
import { Toast } from 'vant';
// 将提示功能模块挂载到vue实列上面
Vue.use(Toast);


// 挂载到vue的成员里面
Vue.use(Icon);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
