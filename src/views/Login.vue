<template>
  <div id="log">
      <van-icon name="cross" class="scop" />
    <div id='login'>
      <van-icon name="warn-o" />
    </div>
    <!-- 将登录用户名进行动态绑定-->
    <deinput text='请输入用户名' v-model="user.username"></deinput>
    <!-- 将登录密码进行动态绑定 -->
    <deinput type="password" text='请输入密码' v-model="user.password"></deinput>
    <!-- 添加登录事件 -->
    <xwbuttom @click="register">登录</xwbuttom>
  </div>
</template>

<script>
// 引入input组件
import deinput from '@/components/xw_input.vue'
// 引入按钮组件
import xwbuttom from '@/components/xw_buttom.vue'
// 引入登录接口
import {login} from '@/api/user.js'
export default {
    // 将引入的组件进行注册
    components: {
        deinput,xwbuttom
    },
    data () {
        return {
            // 定义一个对象接收用户名密码的值
            user:{
                username:'',
                password:''
            }
        }
    },
    methods: {
        // 接收子组件传来的函数事件
       async register(){
            window.console.log(this.user.username)
           // 当触发点击事件就调用登录函数
           let res = await login(this.user)
           // 接收后台返回的数据
        //    window.console.log(res)
        // 将返回数据作为一个判断是否有登录成功或者失败
        if(res.data.message==='登录成功'){
            // 如果登录成功给出提示并且跳转页面
            this.$toast.success('登录成功')
        } else{
            // 如果登录不成功则提示原因让用户知道
            this.$toast.fail(res.data.message)
        }
        }
    }
};
</script>

<style lang='less' scoped>
.scop {
  font-size: 30 * 100vw/360;
  margin: 20px;
}
#login{
    text-align: center;
    margin: 60vw*100/360 auto;
    color: #f00;
    font-size: 80 * 100vw/360
}
</style>