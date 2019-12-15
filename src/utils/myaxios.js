// 引入axios
import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:3000'

// 存储服务器基地址  用于加载服务器的图片
localStorage.setItem('hema_img',axios.defaults.baseURL)

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // window.console.log(config)
  // 添加加浏览器的token值到变量
  let token = localStorage.getItem('token')
  // 如果token值不为空就进入
  if(token){
    // 添加到请求体发到后台
    config.headers.Authorization = token
  }
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // window.console.log(response)
  if(response.data.message === "用户信息验证失败" || response.data.message === "用户信息验证失败!"){
    window.location.href = '#/login'
  }
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

export default axios