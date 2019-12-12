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
        <myinput type='text' placeholder='请输入用户名'></myinput>
        <myinput type='password' placeholder='123'></myinput>
      </div>
      <p class="tips">
        没有账号？
        <a href="#/register" class>去注册</a>
      </p>
      <mybutton>登陆按钮</mybutton>
    </div>
  </div>
</template>

<script>
// 引入按钮路由
import mybutton from "@/components/mybutton.vue"
import myinput from "@/components/myinput.vue"
export default {
  components: {
    mybutton,myinput
  },
  data () {
    return {
      user:{
        name:''
      }
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