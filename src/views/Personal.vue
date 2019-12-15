<template>
  
  <div class="personal">
    <router-link :to='"/edit_profile/"+currentUser.id'>
      <div class="profile">
        <!-- $axios.defaults.baseURL读取axios的服务器路径 -->
        <img :src="currentUser.head_img" alt />
        <div class="profile-center">
          <div class="name">
            <span class="iconfont iconxingbienan"></span>{{currentUser.name}}
          </div>
          <div class="time">2019-9-24</div>
        </div>
        <span class="iconfont iconjiantou1"></span>
      </div>
    </router-link>
    <hmcell title="我的关注" desc="关注的用户"></hmcell>
    <hmcell title="我的跟帖" desc="跟帖/回复"></hmcell>
    <hmcell title="我的收藏" desc="文章/视频"></hmcell>
    <hmcell title="设置" ></hmcell>
  </div>
</template>

<script>
import {userPersonal} from '@/api/users.js'
import hmcell from '@/components/hm_cell.vue'
export default {
    data () {
        return {
            currentUser:{
                head_img :'1',
                name:''
            }
        }
    },
        components: {
            hmcell
        },
    mounted () {
        // window.console.log(this.$route.params.id)
    userPersonal(this.$route.params.id)
    .then(res=>{
        window.console.log(res)
        this.currentUser = res.data.data
        if(this.currentUser.head_img){
            this.currentUser.head_img = localStorage.getItem('hema_img')+this.currentUser.head_img
            this.currentUser.name = res.data.data.nickname
        } else {
            this.currentUser.head_img = localStorage.getItem('hema_img')+'/uploads/image/default.png'
        }
    })
    .catch(err=>{
        this.$toast.fail('添加数据失败')
        window.console.log(err)
    })
    }

}
</script>

<style lang='less' scoped>
.personal{
    width: 100vw;
    height: 100vh;
    background-color: #eee;
}
a{
    color: #666;
}
.profile {
  display: flex;
  padding: 20px 10px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 5px #ddd solid;

  img {
    width: 70 / 360 * 100vw;
    height: 70 / 360 * 100vw;
    border-radius: 50%;
  }

  .profile-center {
    flex: 1;
    padding: 0 10px;
  }

  .name {
    span {
      color: #75b9eb;
    }
  }

  .time {
    color: #666;
    font-size: 14px;
    margin-top: 5px;
  }
}
</style>