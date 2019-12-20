<template>
  <div id="btn">
      <!-- 这是一个按钮组件 -->
      <div class="but" @click="deng"><slot></slot></div>
  </div>
</template>

<script>
export default {
methods: {
    deng(e){
        // 告诉父组件有人点击了自己
        this.$emit('click',e)
    }
}
}
</script>

<style lang='less' scoped>
    .but{
        background-color: #f00;
        width: 320 * 100vw /360;
        margin:40vw * 100 / 360 0 0 20vw * 100 / 360;
        height: 40 * 100vw / 360;
        border-radius:50px;
        line-height: 40 * 100vw / 360;
        text-align: center;
        font-size: 18px;
        color: #fff;
    }
</style>