<template>
  <div class="detail">
    <detail-top></detail-top>
    <detail-relate></detail-relate>
    <detail-keyword></detail-keyword>
    <detail-title :message="message_title"></detail-title>
    <detail-service></detail-service>
    <detail-menu></detail-menu>
    <detail-evaluate></detail-evaluate>
    <detail-link></detail-link>
  </div>
</template>
<script>
import DetailTop from "../../components/detail-top";
import DetailService from "../../components/detail-service";
import DetailKeyword from "../../components/detail-keyword";
import DetailTitle from "../../components/detail-title";
import DetailMenu from "../../components/detail-menu";
import DetailEvaluate from "../../components/detail-evaluate";
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
    DetailLink
  },
  data() {
    return {
      message_title: {
        title: "商家信息"
      },
      evalute_data: [
        {
          head_img: "http://www.dpfile.com/ugc/user/anonymous.png",
          name: "匿名用户",
          time: "2020-04-26",
          img1:
            "https://p0.meituan.net/shaitu/f5939f968e0c7e3d391e8c0ebe4f4ccf5298478.jpg@220w_220h_1e_1c",
          img2:
            "https://p1.meituan.net/shaitu/8feb4f7a0330592ee2baa3ecfa2a45e34611064.jpg@220w_220h_1e_1c",
          reply: ""
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
</style>
