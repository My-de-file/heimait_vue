// 引入vue
import Vue from 'vue'

// 引入axios
import axios from 'axios'

// 挂载axios基地址
axios.defaults.baseURL = 'http://127.0.0.1:3000'

// 将axios挂载到vue实列里面
Vue.use(axios)


// 暴露axios请求
export default axios