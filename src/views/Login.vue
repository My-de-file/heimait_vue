<template>
  <div id="login">
    <div class="container">
      <div class="close">
        <span class="iconfont iconicon-test"></span>
      </div>
      <div class="logo">
        <span class="iconfont iconnew"></span>
      </div>
      <div class="inputs">
        <myinput text='text' placeholder='请输入用户名' v-model="user.username" @input="inp" :zhen='/^1\d{10}$/' tex = '请输入11位手机号'></myinput>
        <myinput text='password' v-model="user.password"></myinput>
      </div>
      <p class="tips">
        没有账号？
        <a href="#/register" class>去注册</a>
      </p>
      <mybutton @click="onc">登陆按钮</mybutton>
    </div>
  </div>
</template>

<script>
// 引入按钮路由
import mybutton from "@/components/mybutton.vue"
import myinput from "@/components/myinput.vue"
import {userLogin} from '@/api/users.js'
export default {
  components: {
    mybutton,myinput
  },
  data () {
    return {
      user:{
        username:'',
        password:'123'
      }
    }
  },
  methods: {
    onc(){
      window.console.log(this.user.password)
      userLogin(this.user)
      .then(res=>{
        // window.console.log(res)
        if(res.data.message === '登录成功'){
          // 登录成功实现路由跳转
          this.$router.push({path : `/personal/${res.data.data.user.id}`})
          // 将登录成功的token值存到浏览器的本地存储里面
          localStorage.setItem('token',res.data.data.token)
          localStorage.setItem('genren_id',res.data.data.user.id)
        } else {
          this.$toast.fail('登录失败请重试')
        }
      })
      .catch(err=>{
        window.console.log(err)
      })
    },
    inp(){
      window.console.log(this.user.name);
      
    }
  }
};
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

.inputs {
  input {
    margin-bottom: 20px;
  }
}

.tips {
  text-align: right;
  margin-bottom: 20px;

  a {
    color: #3385ff;
  }
}
</style>