// 添加vue模块
import Vue from 'vue'

// 添加路由模块
import VueRouter from 'vue-router'

// 注入路由
import Login from '@/views/Login.vue'

import Personal from '@/views/Personal.vue'

// 将路由模块挂载到vue实列里面
Vue.use(VueRouter)

// 创建路由
var router = new VueRouter({
    routes:[
        {
            name:'Login',
            path:'/login',
            component:Login
        },
        {
            name:'Personal',
            path:'/personal',
            component:Personal
        }
    ]
})


// 暴露路由接口
export default router