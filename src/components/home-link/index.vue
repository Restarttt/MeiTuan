<template>
  <div class="home-link">
    <div class="group">
      <span>查看全部团购</span>
    </div>
    <!-- 用户服务 -->
    <div class="service">
      <!-- 登录 -->
      <div class="loginbar">
        <div class="loginbar_l">
          <div class="login">
            <span>登录</span>
          </div>
          <div class="login">
            <span>注册</span>
          </div>
        </div>
        <div class="loginbar_r">
          <span>城市</span>
          <img src="https://p1.meituan.net/travelcube/c6c04160817d530ecddf9f86b158106e2032.png" alt />
          <span></span>
        </div>
      </div>
      <!-- 美团相关 -->
      <div class="user_serve">
        <span>首页</span>
        <span>我的</span>
        <span>美团下载</span>
        <span>电脑版</span>
        <span>帮助</span>
      </div>
      <!-- 友情链接 -->
      <div class="p_link">
        <p>友情链接：</p>
        <a :href="item.url" v-for="(item,index) of link" :key="index">{{item.name}}</a>
      </div>
      <!-- 版权 -->
      <div class="copyright">
        <div class="copyright-1">
          <span>©2020 美团网</span>
          <span>
            <a href="http://www.beian.miit.gov.cn/">京ICP证070791号</a>
          </span>
        </div>
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
    return {
      link: [
        {
          name: "猫眼电影",
          url: "https://m.maoyan.com/?channel=touch_group"
        },
        {
          name: "猫眼电影",
          url: "https://m.maoyan.com/?channel=touch_group"
        },
        {
          name: "猫眼电影",
          url: "https://m.maoyan.com/?channel=touch_group"
        },
        {
          name: "猫眼电影",
          url: "https://m.maoyan.com/?channel=touch_group"
        },
        {
          name: "猫眼电影",
          url: "https://m.maoyan.com/?channel=touch_group"
        },
        {
          name: "猫眼电影",
          url: "https://m.maoyan.com/?channel=touch_group"
        },
        {
          name: "猫眼电影",
          url: "https://m.maoyan.com/?channel=touch_group"
        },
        {
          name: "猫眼电影",
          url: "https://m.maoyan.com/?channel=touch_group"
        },
        {
          name: "猫眼电影",
          url: "https://m.maoyan.com/?channel=touch_group"
        },
        {
          name: "猫眼电影",
          url: "https://m.maoyan.com/?channel=touch_group"
        },

        {}
      ]
    };
  },
  computed: {},
  methods: {}
};
</script>
<style lang="less" scoped>
.home-link {
  width: 100%;
}
// 团购
.group {
  width: 100%;
  border-top: 1px solid #f3f4f5;
  border-bottom: 1.5px solid #f3f4f5;
  padding: 10px 15px;
  position: relative;
}
.group span {
  color: #fe8c00;
  font-size: 16px;
}
.group span::after {
  content: "";
  display: inline-block;
  width: 8px;
  height: 8px;
  border: 1.5px solid #fe8c00;
  border-bottom: 0;
  border-left: 0;
  transform: rotate(45deg);
  position: absolute;
  right: 5%;
  top: 40%;
}
// 用户服务
.service {
  width: 100%;
  padding: 10px 30px;
}
// 登录条
.loginbar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.loginbar_l {
  width: 50%;
}
.login {
  display: inline-block;
  margin-right: 15px;
  width: 34%;
  height: 27px;
  background-image: linear-gradient(135deg, #ffd000 0%, #ffbd00 100%);
  text-align: center;
  line-height: 27px;
  border-radius: 5px;
}
.login span {
  font-size: 13px;
}
</style>
