import Vue from 'vue'
import App from './App.vue'

// 引用路由
import router from '@/router/index.js'
import { Uploader } from 'vant';

import { Toast } from 'vant';

import { Dialog } from 'vant';

import { Field } from 'vant';


Vue.use(Toast)

Vue.use(Uploader);

Vue.use(Dialog);

Vue.use(Field);

// 引进css样式
import '@/styles/reset.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
