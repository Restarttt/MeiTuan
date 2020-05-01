<template>
  <!-- 顶部导航 -->
  <div class="detail-top">
    <div class="nav">
      <div class="nav_l" @click="go()">
        <img src="../../assets/left.png" alt />
      </div>
      <div class="nav_m">
        <span>团购详情</span>
      </div>
      <div class="nav_r">
        <div class="collect">
          <img src="../../assets/collect.png" alt />
          <p >收藏</p>
          <!-- <el-button :plain="true" @click="open2">收藏</el-button> -->
        </div>
        <div class="collect" @click="hit_h()">
          <img src="../../assets/nav.png" alt />
          <p>导航</p>
          <!-- 首页 -->
          <div class="subnav" v-show="hit">
            <div class="subnav_t" @click="go()">
              <img src="../../assets/index.png" alt />
              <span>首页</span>
            </div>
            <div class="subnav_b" @click="go_login()">
              <img src="../../assets/me.png" alt />
              <span>我的</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 顶部图片 -->
    <img
      src="https://s1.meituan.net/bs/file?f=meis/meishi.mobile:img/app_download_banner.png@f70bb75"
      alt
    />
  </div>
</template>
<script>
import { Message } from "element-ui";
import { Form, Toast } from "vant";
export default {
  name: "detail-top",
  props: {},
  data() {
    return {
      hit: false
    };
  },
  computed: {},
  mounted() {
    this.$toast("提示文案");
  },
  methods: {
    go() {
      this.$router.push("/");
    },
    go_login() {
      this.$router.push("/login");
    },
    hit_h() {
      this.hit = true;
    }
    // open2() {
    //   this.$message("收藏成功");
    // }
  }
};
</script>
<style lang="less" scoped>
img {
  width: 100%;
  height: 110px;
}
.detail-top {
  width: 100%;
  height: 163px;
  background: #06c1ae;
  border-bottom: 1px solid #21897d;
}
.nav {
  padding: 0 15px;
  height: 53px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav_l img {
  width: 28px;
  height: 28px;
}
.nav_m span {
  color: #fff;
  font-size: 19px;
  font-weight: 300;
}
.nav_r img {
  width: 20px;
  height: 20px;
}
.nav_r {
  display: flex;
}
.collect:nth-child(2) {
  margin-left: 25px;
  margin-right: 5px;
  position: relative;
}
.collect p {
  color: #fff;
  font-size: 10px;
}
// 导航
.subnav {
  position: absolute;
  width: 100px;
  height: 83px;
  background-color: #06c1ae;
  right: -18px;
  top: 46px;
  text-align: center;
  line-height: 41px;
}
.subnav_t {
  height: 41px;
  border-bottom: 1px solid #ccc;
}
.subnav span {
  color: #fff;
  font-size: 12px;
}
.subnav img {
  vertical-align: middle;
  margin-right: 8px;
}
</style>
