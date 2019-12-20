// 引入axios
import axios from '@/api/myaxios.js'


// 暴露方法接口  这是登录的接口
export const login = (data)=>{
    return axios ({
        method :'post',
        url:'/login',
        data
    })
}