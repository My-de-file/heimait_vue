<template>
  <input :type="text" class="inp"
   :placeholder="placeholder" 
   :class="{red:!color , green:color}"
   :value='value'
   @input="Tex"
   @blur="bui">
</template>

<script>
export default {
props:['text','placeholder','zhen','value','tex'],
data () {
    return {
        color:false
    }
},
methods: {
    Tex(event){
        // window.console.log(event.target.value);
        let value = event.target.value
        this.$emit('input',value)
        // window.console.log(this.zhen.test(value))
        if(this.zhen){
            if(this.zhen.test(value)){
            this.color = true
        }else{
            this.color = false
        }
        }else{
            this.color = !!value
        }
    },
    bui(event){
        if (this.zhen && !this.zhen.test(event.target.value)) {
            window.console.log(this.tex)
            // this.$Button(this.tex)
            this.$toast.fail(this.tex)
        }
    }
},
mounted () {
    this.color = !!this.value
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