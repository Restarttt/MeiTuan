<template>
  <div class="detail">
    <detail-top></detail-top>
    <detail-relate></detail-relate>
    <detail-keyword></detail-keyword>
    <detail-title :message="message_title"></detail-title>
    <detail-service></detail-service>
    <home-detail :home_detail="home_detail"></home-detail>
    <detail-title :message="evalute_title"></detail-title>
    <detail-evaluate :data="evaluate_data" ></detail-evaluate>
    <home-detail :home_detail="evalute_detail"></home-detail>
    <detail-title :message="menu_title"></detail-title>
    <detail-menu :menu_data="item" v-for="(item,index) of menu_data" :key="index"></detail-menu>
    <detail-link></detail-link>
    <div class="arrows"><span></span></div>
  </div>
</template>
<script>
import DetailTop from "../../components/detail-top";
import DetailService from "../../components/detail-service";
import DetailKeyword from "../../components/detail-keyword";
import DetailTitle from "../../components/detail-title";
import DetailMenu from "../../components/detail-menu";
import DetailEvaluate from "../../components/detail-evaluate";
import HomeDetail from "../../components/home-detail";
import DetailRelate from "../../components/detail-relate";
import DetailLink from "../../components/detail-link";
export default {
  name: "detail",
  components: {
    DetailTop,
    DetailService,
    DetailKeyword,
    DetailTitle,
    DetailMenu,
    DetailEvaluate,
    DetailRelate,
    HomeDetail,
    DetailLink
  },
  data() {
    return {
      home_detail: {
        title: "查看图文详情"
      },
      evalute_detail: {
        title: "查看全部1551条评论"
      },
      message_title: {
        title: "商家信息"
      },
      evalute_title: {
        title: "评价"
      },
      menu_title: {
        title: "豪德亨牛排自助餐厅"
      },
      evaluate_data: [
        {
          head_img: "http://www.dpfile.com/ugc/user/anonymous.png",
          name: "匿名用户",
          time: "2020-04-26",
          comment: "一如既往的让人满足",
          img1:
            "https://p0.meituan.net/shaitu/f5939f968e0c7e3d391e8c0ebe4f4ccf5298478.jpg@220w_220h_1e_1c",
          img2:
            "https://p1.meituan.net/shaitu/8feb4f7a0330592ee2baa3ecfa2a45e34611064.jpg@220w_220h_1e_1c",
          reply: ""
        },       
      ],
      menu_data: [
        {
          title: "[城南天虹]特惠西冷牛排",
          money: 78,
          price: 48.8,
          count: 177
        },
        {
          title: "[城南天虹]迪士尼儿童牛排（含自助）1份",
          money: 42,
          price: 59,
          count: 1042
        },
        {
          title: "[城南天虹]三人家庭牛排套餐",
          money: 168,
          price: 225,
          count: 452
        },
        {
          title: "[城南天虹]双人牛排自助套餐",
          money: 128,
          price: 166,
          count: 861
        },
        {
          title: "[莱斯百货及周边]牛排套餐2选1，提供免费WiFi",
          money: 59.8,
          price: 65,
          count: 730
        }
      ]
    };
  },
  computed: {},
  methods: {}
};
</script>
<style lang="less" scoped>
.detail {
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
}
.arrows {
  width: 43px;
  height: 43px;
  position: fixed;
  right: 10%;
    bottom: 8%;
}
.arrows span {
  display: inline-block;
  width: 43px;
  height: 43px;
  background: url(https://s1.meituan.net/bs/file/?f=meis/meishi.mobile:assets/cbcd00b445480e50.png@f70bb75)
    no-repeat;
  background-size: cover;
}
</style>
