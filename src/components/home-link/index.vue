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
          <span class="city">城市：</span>
          <img src="https://p1.meituan.net/travelcube/c6c04160817d530ecddf9f86b158106e2032.png" alt />
          <span class="area">吉安</span>
        </div>
      </div>
      <!-- 美团相关 -->
      <div class="user_serve">
        <ul>
          <li v-for="(item,index) of serve_data" :key="index">
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
          url: "https://i.meituan.com/account/"
        },
        {
          name: "美团下载",
          url: "https://i.meituan.com/client"
        },
        {
          name: "首页",
          url: "https://www.meituan.com/?pcstyle=1"
        },
        {
          name: "电脑版",
          url: "https://i.meituan.com/help/"
        },
        {
          name: "帮助",
          url: ""
        }
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
  border-left: 1px solid #f3f4f5;
}
.user_serve ul li a {
  font-size: 12px;
  color: #fe8c00;
  font-weight: 400;
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
.copyright-1{
  display: inline-block;
  background-color: #fff;
  z-index: 10;
}
.copyright span {
  font-size: 12px;
  color: #999;

}
.copyright::after {
  content: "";
  display: inline-block;
  width: 375px;
  height: 2px;
  background-color: #f3f4f5;
  position: absolute;
  top: 10px;
  left: -16px;
}
</style>
