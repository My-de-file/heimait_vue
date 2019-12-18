// 添加vue模块
import Vue from 'vue'

// 添加路由模块
import VueRouter from 'vue-router'

// 注入路由
import Login from '@/views/Login.vue'

import Personal from '@/views/Personal.vue'

import edit_profile from '@/views/edit_profile.vue'

import Register from '@/views/Register.vue'

import index from '@/views/index.vue'

import Details from '@/views/Details.vue'
// export const Details = ()


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
            path:'/personal/:id',
            component:Personal
        },
        {
            name:'edit_profile',
            path:'/edit_profile/:id',
            component:edit_profile
        },
        {
            name:'Register',
            path:'/register',
            component:Register
        },
        {
            name:'index',
            path:'/',
            component:index
        },
        {
            name:'Details',
            path:'/details/:id',
            component:Details
        }
    ]
})
router.beforeEach((to, from, next) => {
    // window.console.log(to)
    // window.console.log(from)
    // window.console.log(next)
    // 判断用户访问的是不是这个页面
    if(to.path.indexOf('/personal/')===0){
        // 取出浏览器的token值来判断用户是否有登录过
        let token = localStorage.getItem('token')
        // 有token值代表登录过了 就让它访问下一个页面
        if(token){
            next()
        }else{
            // 没有token值代表没有访问过就跳转到登录页面让他重新登陆
            next({name:'Login'})
        }
    }else{
        // 如果用户访问不需要验证的页面就让它访问
        next()
    }

    
  })

// 暴露路由接口
export default router