<template>
  <div class="index">
    <div class="haer">
      <span class="iconfont iconnew"></span>
      <div class="title">
        <van-icon name="search" />&nbsp;&nbsp;&nbsp;搜索商品
      </div>
      <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" class="icon" @click="login" />
    </div>
    <van-tabs v-model="active" swipeable>
      <van-tab v-for="index in titledata" :key="index.id" :title="index.name">
        <van-pull-refresh v-model="index.isLoading" @refresh="onRefresh">
          <datadiv v-for="post in index.postList" :key="post.id" :post="post" @click="$router.push({path:`/details/${post.id}`})"></datadiv>
        </van-pull-refresh>
        <van-list
          :immediate-check="false"
          v-model="index.loading"
          :offset="10"
          :finished="index.finished"
          finished-text="没有更多了"
          @load="onLoad"
        ></van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import datadiv from "@/components/hm_articleBlock.vue";
import { articleTitle } from "@/api/article.js";
import { addpost } from "@/api/article.js";
export default {
  data() {
    return {
      count: "",
      titledata: [],
      active: localStorage.getItem("token") ? 1 : 0
    };
  },
  components: {
    datadiv
  },
  async mounted() {
    let res = await articleTitle();
    if (res.status === 200) {
      this.titledata = res.data.data;
      this.titledata = this.titledata.map(value => {
        return {
          ...value,
          postList: [],
          pageIndex: 1,
          pageSize: 6,
          loading: false,
          finished: false,
          isLoading: false
        };
      });
      this.mydata();
      //    window.console.log(this.titledata[this.active].isLoading)
    }
  },
  methods: {
    async mydata() {
      let res1 = await addpost({
        pageIndex: this.titledata[this.active].pageIndex,
        pageSize: this.titledata[this.active].pageSize,
        category: this.titledata[this.active].id
      });
      if (res1.data.data.length < this.titledata[this.active].pageSize) {
        this.titledata[this.active].finished = true;
      }
    //   this.titledata[this.active].loading = false;
      this.titledata[this.active].isLoading = false;
      this.titledata[this.active].postList.push(...res1.data.data);
       window.console.log(this.titledata[this.active].postList)
      // if(res.data.data)
    },
    onLoad() {
      setTimeout(() => {
        this.titledata[this.active].pageIndex++;
        this.mydata();
      }, 3000);
      // this.finished = true
      // this.loading = true
    },
    onRefresh() {
      this.titledata[this.active].loading = false;
      this.titledata[this.active].pageIndex = 1;
      this.titledata[this.active].postList.length = 0;
    //   window.console.log(this.titledata[this.active].postList.length)
      // setTimeout(() =>{
      this.$toast("刷新成功");
      // this.titledata[this.active].isLoading = false;
      this.mydata();
      // },3000)
      this.titledata[this.active].finished = false;
    },
    login(){
    //    let id = localStorage.getItem('genren_id')
        // alert(id)
       this.$router.push({path : `/personal/${localStorage.getItem('genren_id')}`})
    }
    // Details(){
    //     // alert(1)
    //     for (let index = 0; index < this.titledata[this.active].postList.length; index++) {
    //         // const element = this.titledata[this.active].postList[index];
    //         window.console.log(index.id)
            
    //     }
    //     // for(var i = 0; i>this.titledata[this.active].postList.length;i++){
    //     //    window.console.log(this.titledata[this.active].postList[this.active].id)
    //     // }
    //     // this.$router.push({path:'details'})
    // }
  },
  watch: {
    async active() {
      //    window.console.log(this.active)
      if (this.titledata[this.active].postList.length === 0) {
        this.mydata();
      }
    }
  }
};
</script>

<style lang='less' scoped>
.haer {
  display: flex;
  justify-content: space-between;
  height: 50 * 100vw/360;
  background-color: #f00;
  align-items: center;
  color: #fff;
  .title {
    flex: 1;
    height: 40px;
    line-height: 40px;
    background-color: rgba(255, 255, 255, 0.5);
    text-align: center;
    border-radius: 20px;
  }
  .icon {
    font-size: 25px;
    padding: 0 10px;
  }
  .iconnew {
    font-size: 60px;
  }
}
</style>