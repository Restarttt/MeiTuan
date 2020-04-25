<template>
  <div class="home-nav">
    <!-- 顶部搜索 -->
    <div class="nav_search">
      <div class="location">
        <span>吉安</span>
      </div>
      <div class="search">
        <img src="https://p0.meituan.net/travelcube/99c29829cf1b85d5cdbc76a1bd0b7329814.png" alt />
        <span>请输入商家名、品类或者商圈...</span>
      </div>
      <div class="login">
        <img src="https://p0.meituan.net/travelcube/641521461179df7cfb88738dd1ea11ec1031.png" alt />
      </div>
    </div>
    <!-- 去app -->
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
    <!--  菜单栏-->
    <div class="menu_bar">
        <ul>
            <li>
                <span></span>
            </li>
        </ul>

    </div>
  </div>
</template>
<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
        list_data:[
            {
                img:'',
                title:''
            },
        ]
    };
  },
  computed: {},
  methods: {}
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
  width: 15px;
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
.text{
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
.app_r{
    width: 16%;
    height: 30px;
    line-height: 30px;
    background-image: linear-gradient(135deg, #FFD000 0%, #FFBD00 100%);
    border-radius: 4px;
    text-align: center;
}
span{
    font-size: 12px;
}
/* 菜单栏 */
.menu_bar{
    height: 200px;
}
</style>
