<template>
  <div class="home-link">
    <div class="group">
      <span>查看团购</span>
    </div>
    <!-- 用户服务 -->
    <div class="service">
      <!-- 登录 -->
      <div class="loginbar">
        <div class="loginbar_l">
          <div class="login"> <span>登录</span>
          </div>
          <div class="register"><span>注册</span>
          </div>
        </div>
        <div class="loginbar_r">
          <span>城市</span>
          <img src alt />
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
            <a href='http://www.beian.miit.gov.cn/'>京ICP证070791号</a>
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
          name:'猫眼电影',
          url:'https://m.maoyan.com/?channel=touch_group'
        },
          {
          name:'猫眼电影',
          url:'https://m.maoyan.com/?channel=touch_group'
        },
          {
          name:'猫眼电影',
          url:'https://m.maoyan.com/?channel=touch_group'
        },
          {
          name:'猫眼电影',
          url:'https://m.maoyan.com/?channel=touch_group'
        },
          {
          name:'猫眼电影',
          url:'https://m.maoyan.com/?channel=touch_group'
        },
          {
          name:'猫眼电影',
          url:'https://m.maoyan.com/?channel=touch_group'
        },
          {
          name:'猫眼电影',
          url:'https://m.maoyan.com/?channel=touch_group'
        },
          {
          name:'猫眼电影',
          url:'https://m.maoyan.com/?channel=touch_group'
        },
          {
          name:'猫眼电影',
          url:'https://m.maoyan.com/?channel=touch_group'
        },
          {
          name:'猫眼电影',
          url:'https://m.maoyan.com/?channel=touch_group'
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
</style>
