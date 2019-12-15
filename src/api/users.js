import axios from '@/utils/myaxios.js'

export const userLogin = (data)=>{
    return axios ({
        method:'post',
        url:'/login',
        data
    })
}
export const userPersonal = (id)=>{
    return axios ({
        url:`/user/${id}`,
    })
}
export const userupdate = (id,data)=>{
    return axios ({
        method:'post',
        url:`/user_update/${id}`,
        data
    })
}
