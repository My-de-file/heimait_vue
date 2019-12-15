import axios from '@/utils/myaxios.js'



export const upload = (data)=>{
    return axios ({
        method:'post',
        url:'/upload',
        data
    })
    }