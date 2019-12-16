<template>
  <div class="editPersonal">
    <headers title="编辑个人信息">
      <span class="iconfont iconjiantou2" slot="left" @click="$router.back()" ></span>
      <span slot='right' @click="quit">退出</span>
    </headers>
    <div class="head">
      <img :src="currentUser.head_img" alt />
      <van-uploader :after-read="afterRead" />
    </div>
    <hmcell title="呢称" :desc="currentUser.nickname" @click="show=!show" ref="dat"></hmcell>
    <van-dialog v-model="show" title="标题" show-cancel-button @confirm="updateNickname">
      <van-field
        v-model="currentUser.nickname"
        required
        clearable
        label="呢称"
        right-icon="question-o"
        placeholder="请输入呢称"
        @click-right-icon="$toast('question')"
      />
    </van-dialog>
    <hmcell title="密码" :desc="currentUser.password" @click="pass=!pass" type="password"></hmcell>
    <van-dialog
      v-model="pass"
      title="标题"
      show-cancel-button
      @confirm="updatePassword"
      :before-close="beforeClose"
    >
      <van-field
        v-model="oldpass"
        required
        clearable
        label="原密码"
        right-icon="question-o"
        placeholder="请输入源密码"
        @click-right-icon="$toast('question')"
        ref="oldprice"
      />
      <van-field
        v-model="newpass"
        required
        clearable
        label="新密码"
        right-icon="question-o"
        placeholder="请输入新密码"
        @click-right-icon="$toast('question')"
        ref="newprice"
      />
    </van-dialog>
    <hmcell title="性别" :desc="currentUser.gender===1?'男':'女'" @click="ablo=!ablo"></hmcell>
    <van-dialog
    v-model="ablo">
      <van-picker :columns="columns" :default-index="1" @change="onChange" />
    </van-dialog>
  </div>
</template>

<script>
import headers from "@/components/hm_header.vue";
import hmcell from "@/components/hm_cell.vue";
import { userPersonal } from "@/api/users.js";
import { userupdate } from "@/api/users.js";
import { upload } from "@/api/upload.js";
export default {
  components: {
    headers,
    hmcell
  },
  data() {
    return {
      currentUser: {
        head_img: "",
        nickname: "",
        password: "",
        gender: ""
      },
      show: false,
      pass: false,
      newpass: "",
      oldpass: "",
      columns: ["女",'男'],
      ablo: false
    };
  },
  mounted() {
    userPersonal(this.$route.params.id)
      .then(res => {
        // window.console.log(res.data.data);
        this.currentUser = res.data.data;
        if (this.currentUser) {
          // window.console.log(this.currentUser.head_img)
          this.currentUser.head_img =
            localStorage.getItem("hema_img") + this.currentUser.head_img;
        }
      })
      .catch(err => {
        window.console.log(err);
        this.$toast.fail("请求失败");
      });
  },
  methods: {
    async afterRead(file) {
      // 此时可以自行将文件上传至服务器
      window.console.log(file);
      if (file) {
        let formdata = new FormData();
        formdata.append("file", file.file);
        let res = await upload(formdata);
        // window.console.log(res)
        let res1 = await userupdate(this.$route.params.id, {
          head_img: res.data.data.url
        });
        if (res1.data.message === "修改成功") {
          this.$toast.success("修改成功");
          this.currentUser.head_img =
            localStorage.getItem("hema_img") + res.data.data.url;
        }
        // window.console.log(res1)
      } else {
        this.$toast.fail("文件上传失败");
      }
    },
    async updateNickname() {
      // window.console.log(this.$refs.dat.desc)
      let res = await userupdate(this.$route.params.id, {
        nickname: this.$refs.dat.desc
      });
      //   window.console.log(res)
      if (res.data.message === "修改成功") {
        this.$toast.success("修改呢称成功");
        this.currentUser.nickname = this.$refs.dat.desc;
      } else {
        this.$toast.fail("修改呢称失败");
      }
    },
    async updatePassword() {
      // window.console.log(this.$refs.oldprice.value)
      // window.console.log(this.$refs.newprice.value)
      if (this.$refs.oldprice.value === this.currentUser.password) {
        let password = this.$refs.newprice.value;
        if (!/^\w{3,16}$/.test(password)) {
          return;
        }
        let res = await userupdate(this.$route.params.id, {
          password: this.$refs.newprice.value
        });
        if (res.data.message === "修改成功") {
          this.$toast.success("修改密码成功");
          localStorage.removeItem("token");
          localStorage.removeItem("hema_img");
          this.$router.push({ name: "Login" });
        } else {
          this.$toast.fail("修改密码请求失败");
        }
      } else {
        this.$toast.fail("修改密码请求失败");
      }
    },

    beforeClose(atr, done) {
      // window.console.log(this.$refs.oldprice.value)
      // window.console.log(this.currentUser.password)
      // window.console.log(atr)
      let password = this.$refs.newprice.value;
      if (
        atr === "confirm" &&
        this.$refs.oldprice.value !== this.currentUser.password
      ) {
        this.$toast.fail("原密码错误");
        done(false);
      } else if (atr === "confirm" && !/^\w{3,16}$/.test(password)) {
        this.$toast.fail("请输入3-16位的密码");
        done(false);
      } else {
        done();
      }
    },
  async  onChange(picker, value, index) {
    //   this.$toast.fail(`当前值：${value}, 当前索引：${index}`);
      let res = await userupdate(this.$route.params.id, {
      gender: index
        });
      if(res.data.message==='修改成功'){
          this.currentUser.gender = index
          this.$toast.success('修改成功');
      }else{
          this.$toast.fail("失败");
      }
    },
    quit(){
        localStorage.removeItem('hema_img')
        localStorage.removeItem('token')
        this.$router.push({name:'Login'})
    }    

  }
};
</script>

<style lang='less' scoped>
.head {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  position: relative;

  img {
    display: block;
    width: 100 / 360 * 100vw;
    height: 100 / 360 * 100vw;
    border-radius: 50%;
  }
  // 修改元素的大小
  /deep/.van-uploader__upload {
    width: 100 / 360 * 100vw;
    height: 100 / 360 * 100vw;
  }
  // 设置元素的对齐方式
  /deep/.van-uploader {
    // 实现任意元素居中
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }
}
</style>