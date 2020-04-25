<template>
  <div class="home-app">
    <div class="go_app">
      <div class="app_l">
        <img src="https://p1.meituan.net/travelcube/7264ce9c25de2e464e3acd996fe8ad362803.png" alt />
        <div class="text">
          <p class="app_tit">省钱利器 购物超划算</p>
          <p class="app_sub">吃喝玩乐尽在美团</p>
        </div>
      </div>
      <div class="app_r">
        <span>去APP</span>
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
  computed: {},
  methods: {}
};
</script>
<style lang="less" scoped>
.home-app {
  width: 100%;
}
/* 下载app */
.go_app {
  padding: 0 15px;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
}
/* 左边 */
.app_l {
  display: flex;
}
.app_l img {
  width: 40px;
  height: 40px;
  padding-right: 10px;
}
.text {
  padding-top: 1px;
}
.app_l p {
  color: #fff;
}
.app_sub {
  font-size: 12px;
  font-weight: 300;
  padding-top: 2px;
}
/* 右边 */
.app_r {
  width: 16%;
  height: 30px;
  line-height: 30px;
  background-image: linear-gradient(135deg, #ffd000 0%, #ffbd00 100%);
  border-radius: 4px;
  text-align: center;
}
span {
  font-size: 12px;
}
</style>
