<template>
  <div class='register'>
     <div class="container">
        <div class="close">
        <span class="iconfont iconicon-test"></span>
      </div>
      <div class="logo">
        <span class="iconfont iconnew"></span>
      </div>
      <myinput class="inp" text ='text' placeholder = '请输入手机号码' v-model="user.username" :zhen='/^1\d{10}$/' tex = '请输入11位手机号'></myinput>
      <myinput class="inp" text ='password' placeholder = '请输入密码' v-model="user.password"></myinput>
      <myinput class="inp" placeholder = '请输入用户名' v-model="user.nickname"></myinput>
      <mybutton class="btn" @click="addregister">注册</mybutton>
     </div>
  </div>
</template>

<script>
import myinput from '@/components/myinput.vue'
import mybutton from '@/components/mybutton.vue'
import {useradd} from '@/api/users.js'
export default {
components: {
    myinput,mybutton
},
data () {
    return {
        user:{
        username:'',
        password:'',
        nickname:''
        }
    }
},
methods: {
   async addregister(){
        // window.console.log(this.user)
        if(/^1\d{10}$/.test(this.user.username) ){
        let res = await useradd(this.user)
        // window.console.log(res)
        if(res.data.message==="注册成功"){
            this.$toast.success("注册成功");
            window.location.href = '#/login'
        }
        }
    }
}
}
</script>

<style lang='less'>
.container {
  padding: 20px;
}

.close {
  span {
    font-size: 27 / 360 * 100vw;
  }
}

.logo {
  display: flex;
  justify-content: center;

  span {
    display: block;
    font-size: 126 / 360 * 100vw;
    color: #d81e06;
  }
}
.inp{
    margin-top: 20/360 *100vw ;
}
.btn{
    margin-top: 40/360*100vw;
}
</style>