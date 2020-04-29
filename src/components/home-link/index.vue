<template>
  <div class="home-link">
    <!-- 右边固定 -->
    <div class="arrows">
      <span></span>
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
          <span class="city">城市：</span>
          <img src="https://p1.meituan.net/travelcube/c6c04160817d530ecddf9f86b158106e2032.png" alt />
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
          <span>©2020 美团网</span>
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
        },
        {
          name: "大众点评",
          url: "https://m.dianping.com/"
        },
        {
          name: "美团旅行",
          url:
            "https://i.meituan.com/awp/hfe/hotel-fe-itower_awp/journey/guide-download/index.html?refer_source=yqlj"
        },
        {
          name: "榛果民宿",
          url: "https://i.zhenguo.com/"
        },
        {
          name: "大众点评下载",
          url: "https://shouyin.meituan.com/?utm_source=inner&utm_medium=mti"
        },
        {
          name: "美团收银官网",
          url: "https://shouyin.meituan.com/?utm_source=inner&utm_medium=mti"
        },
        {
          name: "美团点评餐饮学院",
          url: "hhttps://xue.meituan.com/?from=mt0"
        },
        {
          name: "快驴进货商家合作",
          url: "https://www.kuailvzaixian.com/"
        }
      ],
      serve_data: [
        {
          name: "首页",
          url: "https://i.meituan.com/"
        },
        {
          name: "我的",
          url: "https://i.meituan.com/account/",
          type: 1
        },
        {
          name: "美团下载",
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
// 固定箭头


.home-link {
  width: 100%;
  background-color: #fff;
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
  padding: 5px 0 25px;
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
.city {
  color: #999;
}
.loginbar_r img {
  width: 12px;
  height: 14px;
  padding: 0 5px;
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
  position: relative;
  border-left: 1px solid #f3f4f5;
}
.user_serve ul li a {
  font-size: 12px;
  color: #fe8c00;
  font-weight: 400;
}
.line {
  position: absolute;
  display: inline-block;
  width: 1px;
  height: 10px;
  background-color: #999;
  left: -16px;
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
  color: #646464;
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
  width: 62%;
  height: 20px;
  display: inline-block;
  background-color: #fff;
  z-index: 1000;
}
.copyright span {
  font-size: 12px;
  color: #999;
}
.copyright::before {
  content: "";
  display: inline-block;
  width: 350px;
  height: 1px;
  background-color: #f3f4f5;
  position: absolute;
  top: 10px;
  left: -16px;
}
</style>
