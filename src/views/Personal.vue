<template>
  <div class="Personal">
      个人中心
  </div>
</template>

<script>
import {userPersonal} from '@/api/users.js'
export default {
    data () {
        return {
        }
    },
    mounted () {
        window.console.log(this.$route.params.id)
    userPersonal(this.$route.params.id)
    .then(res=>{
        window.console.log(res)
    })
    .catch(err=>{
        window.console.log(err)
    })
    }

}
</script>

<style>

</style>