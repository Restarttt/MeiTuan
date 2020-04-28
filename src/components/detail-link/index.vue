<template>
  <div class="home-link">
    <!-- 用户服务 -->
    <div class="service">
      <!-- 登录 -->
      <div class="now">
        <span>当前位置：</span>
        <span>吉安</span>
        <span>团购</span>
        <span>></span>
        <span>豪德亨牛排自助餐厅</span>
        <span>团购</span>
      </div>
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
          <span class="city">城市：</span>
          <span class="area">{{chage}}</span>
        </div>
      </div>
      <!-- 美团相关 -->
      <div class="user_serve">
        <ul>
          <li v-for="(item,index) of serve_data" :key="index">
            <i class="line" v-if="item.type === 1"></i>
            <a :herf="item.url">{{item.name}}</a>
          </li>
        </ul>
      </div>
      <!-- 友情链接 -->
      <div class="p_link">
        <span>友情链接：</span>
        <a v-for="(item,index) of link" :key="index" :href="item.url">{{item.name}}</a>
      </div>
      <!-- 版权 -->
      <div class="copyright">
        <div class="copyright-1">
          <span>©2016 美团网</span>
          <span>京ICP证070791号</span>
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
        }
      ],
      serve_data: [
        {
          name: "首页",
          url: "https://i.meituan.com/"
        },
        {
          name: "订单",
          url: "https://i.meituan.com/account/",
          type: 1
        },
        {
          name: "客户端",
          url: "https://i.meituan.com/client",
          type: 1
        },
        {
          name: "电脑版",
          url: "https://www.meituan.com/?pcstyle=1",
          type: 1
        },
        {
          name: "帮助",
          url: "https://i.meituan.com/help/",
          type: 1
        }
      ]
    };
  },
  computed: {
    chage() {
      console.log(this.$store.state.name);
      return this.$store.state.name;
    }
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.home-link {
  width: 100%;
}

// 用户服务
.service {
  width: 100%;
  padding: 10px 10px;
}
.now {
  padding: 6px 0;
}
.now span {
  color: #06c1ae;
  font-size: 12px;
}
// 登录条
.loginbar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0 25px;
}
.loginbar_l {
  width: 50%;
}
.login {
  display: inline-block;
  margin-right: 15px;
  width: 34%;
  height: 32px;
  border: 1px solid #06c1ae;
  text-align: center;
  line-height: 32px;
  border-radius: 5px;
}
.login span {
  font-size: 14px;
  color: #06c1ae;
}
.city {
  color: #999;
}
.area {
  color: #06c1ae;
  padding: 3px 30px;
  border: 1px solid #06c1ae;
  border-radius: 5px;
}
// 美团相关
.user_serve {
  width: 100%;
  padding-bottom: 20px;
}
ul {
  display: flex;
  justify-content: space-between;
  position: relative;
}
ul li {
  text-align: center;
  width: 20%;
  position: relative;
  border-left: 1px solid #f3f4f5;
}
.user_serve ul li a {
  font-size: 12px;
  color: #06c1ae;
  font-weight: 400;
}
.line {
  position: absolute;
  display: inline-block;
  width: 1px;
  height: 10px;
  background-color: #999;
  left: 0;
  top: 6px;
}
// 友情链接
.p_link {
  text-align: center;
  width: 100%;
  padding-bottom: 5px;
}
.p_link span {
  font-size: 12px;
  color: #646464;
}
.p_link a {
  text-align: center;
  display: inline-block;
  color: #06c1ae;
  font-size: 12px;
  padding: 0 11px 10px 3px;
}
// 版权
.copyright {
  width: 100%;
  height: 20px;
  text-align: center;
  position: relative;
}
.copyright-1 {

  position: relative;
  width: 50%;
  height: 20px;
  display: inline-block;
  background-color: #f0f0f0;
  z-index: 1000;
}
.copyright span {
  font-size: 10px;
  color: #999;
}
.copyright::before {
  content: "";
  display: inline-block;
  width: 100%;
  height: 1px;
  background-color: #999;
  position: absolute;
  top: 10px;
  left: 0;
}
</style>
