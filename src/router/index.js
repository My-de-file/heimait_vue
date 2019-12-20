// 创建一个路由, 为了业务跳转各个页面所需
// 1. 引入Vue模块
import Vue from 'vue'

// 2. 引入路由包
import VueRouter from 'vue-router'

// 登陆页面路由
import Login from '@/views/Login.vue'

// 3. 将路由挂载到Vue实列里面
Vue.use(VueRouter)

// 4. 创建路由 配置路由 创建路由实列
const router = new VueRouter({
    routes:[
        {   // 个人登录页的路由
            name:'Login',
            path:'/login',
            component:Login
        }
    ]
})

// 5. 暴露路由接口
export default router