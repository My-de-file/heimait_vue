import Vue from 'vue'
import App from './App.vue'

// 引用路由
import router from '@/router/index.js'
import { Uploader } from 'vant';

import { Toast } from 'vant';

import { Dialog } from 'vant';

import { Field } from 'vant';
import { Picker } from 'vant';

import { Icon } from 'vant';
import { Tab } from 'vant';

import { Tabs } from 'vant';
import { List } from 'vant';
import { PullRefresh } from 'vant';

Vue.use(PullRefresh);

Vue.use(List);

Vue.use(Tab)

Vue.use(Tabs);

Vue.use(Icon);

Vue.use(Toast)

Vue.use(Uploader);

Vue.use(Dialog);

Vue.use(Field);

Vue.use(Picker);

// 引进css样式
import '@/styles/reset.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
