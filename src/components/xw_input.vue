<template>
  <!-- 这是一个imput组件 -->
  <!-- 1.在input标签里面添加input事件
       2.将值传到父组件里面 -->
  <input :type="type" :placeholder="text" class="input" :value='value' @input="value1">
</template>

<script>
export default {
// 发送成员到父组件那里 让父组件给值
props: ['type','text','value'],
methods: {
  value1(event){
    // window.console.log(event.target.value)
    // 通过默认值event.target.value可以获取到input输入框的值
    let value = event.target.value
    // 通过input事件把值发送到父组件里面
    this.$emit('input',value)
  }
}
}
</script>

<style lang='less' scoped>
.input{
    border: none;
    border-bottom: 2px solid red;
    // color: red;
    width: 320 * 100vw /360;
    margin:20vw * 100 / 360 0 0 20vw * 100 / 360;
    height: 30 * 100vw / 360;
}
</style>