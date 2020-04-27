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
          <p>收藏</p>
        </div>
        <div class="collect">
          <img src="../../assets/nav.png" alt />
          <p>导航</p>
          <div class="subnav">
            <div class="subnav_t" @click="go()">
              <img src alt />
              <span></span>
            </div>
            <div class="subnav_b" @click="go_login()">
              <img src alt />
              <span></span>
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
export default {
  name: "detail-top",
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    go(){
      this.$router.push('/')
    },
    go_login(){
      this.$router.push('/login')
    }
  }
};
</script>
<style lang="less" scoped>
.detail-top {
  width: 100%;
  height: 53px;
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
}
.subnav_t{
  border-bottom: 1px solid #ccc;
}
</style>
