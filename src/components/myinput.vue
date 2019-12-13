<template>
  <input :type="text" class="inp"
   :placeholder="placeholder" 
   :class="{red:!color , green:color}"
   :value='value'
   @input="Tex">
</template>

<script>
export default {
props:['text','placeholder','zhen','value'],
data () {
    return {
        color:false
    }
},
methods: {
    Tex(event){
        window.console.log(event.target.value);
        let value = event.target.value
        this.$emit('input',value)
    }
}
}
</script>

<style lang='less'>
.inp{
    border: none;
    border-bottom: 2px solid rgb(117,117,117);
    width: 314*100/360vw;
    height: 40*100/360vw;
    outline: none;
    background-color: transparent;
}
.red{
    border-bottom-color: red;
}
.green{
    border-bottom-color: green;
}
</style>