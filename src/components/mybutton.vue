<template>
  <div id="btn"><slot></slot></div>
</template>

<script>
export default {
}
</script>

<style lang='less'>
#btn{
    width: 314*100/360vw;
    height: 40*100/360vw;
    color: #fff;
    background: #f00;
    font-size: 18*100/360vw;
    border-radius: 40*100/360vw;
    line-height: 40*100/360vw;
    text-align: center;
}
</style>