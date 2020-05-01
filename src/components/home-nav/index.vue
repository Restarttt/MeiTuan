<template>
  <div class="home-nav">
    <!-- 顶部搜索 -->
    <div class="nav_search">
      <div class="location">
        <span @click="skip()">{{chage}}</span>
      </div>
      <div class="search" @click="go()">
        <img src="https://p0.meituan.net/travelcube/99c29829cf1b85d5cdbc76a1bd0b7329814.png" alt />
        <span>请输入商家名、品类或者商圈...</span>
      </div>
      <div class="login" @click="go_in()">
        <img src="https://p0.meituan.net/travelcube/641521461179df7cfb88738dd1ea11ec1031.png" alt />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {
    chage() {
      console.log(this.$store.state.name);
      return this.$store.state.name;
    }
  },
  methods: {
    go() {
      this.$router.push("/search");
    },
    go_in() {
      this.$router.push("/login");
    },
    skip() {
      this.$router.push("/location");
    }
  }
};
</script>
<style scoped>
.home-nav {
  width: 100%;
}
/* 导航栏 */
.nav_search {
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background-image: linear-gradient(135deg, #ffd000 0%, #ffbd00 100%);
}
/* 左边地理位置 */
.location span::after {
  display: inline-block;
  content: "";
  width: 16px;
  height: 9px;
  background: url(https://p0.meituan.net/travelcube/45c79a92755b54adc9dc1c4682b123b3201.png)
    no-repeat;
  background-size: 9px;
  position: relative;
  left: 5px;
  top: 1px;
}
/* 中间搜 */
.search {
  width: 250px;
  height: 30px;
  line-height: 30px;
  border-radius: 7px;
  padding-left: 15px;
  background-color: #fff;
  opacity: 0.8;
}
.search img {
  width: 22px;
  height: 15px;
  padding-right: 8px;
  vertical-align: middle;
}
.search span {
  color: #999;
}
/* 右边登录 */
.login img {
  width: 25px;
  height: 25px;
  vertical-align: middle;
}

/* 菜单栏 */
.menu_bar {
  height: 200px;
}
</style>
