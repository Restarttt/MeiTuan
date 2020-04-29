<template>
  <div class="evaluate">
    <div class="user_mssage">
      <img :src=" data.head_img" alt />
      <!-- 头像信息 -->
      <div class="uesr_r">
        <p>{{data.name}}</p>
        <div class="time">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <span>{{data.time}}</span>
        </div>
      </div>
      <!-- 评价内容 -->
      <div class="eva">
        <p>{{data.comment}}</p>
        <div class="eva_img">
          <img :src=" data.img1" alt />
          <img :src=" data.img2" alt />
          <img :src=" data.img3" v-if="data.img3">
          <img :src=" data.img4"  v-if="data.img4" >
        </div>
        <p class="eva_1">豪德亨牛排自助餐厅（城南天虹店）</p>
      </div>
      <!-- 商家回复 -->
      <div class="merchant">
        <p></p>
        <p></p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>
<style lang="less" scoped>
.evaluate {
  padding: 10px 15px;
  background-color: #fff;
  width: 100%;
  border-bottom: 1px solid #f3f4f5;
}
img {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 6px;
  vertical-align: top;
}
.uesr_r {
  display: inline-block;
}
.uesr_r p {
  color: #666;
  font-size: 12px;
}
.time{
  margin-top: 3px;
}
.uesr_r i {
  display: inline-block;
  width: 14px;
  height: 14px;
  margin-right: 2px;
  background: url(https://s1.meituan.net/bs/file/?f=meis/meishi.mobile:assets/cb45534a7d3737c0.png@f70bb75)
    no-repeat;
  background-size: cover;
}
.uesr_r span {
  color: #999;
  font-size: 12px;
  margin-left: 10px;
}
// 评论
.eva{
  margin-top: 10px;
}
.eva p{
  color: #333;
  font-size: 15px;

}
.eva img{
  width: 55px;
  height: 55px;
  border-radius: 0;
  margin: 10px 5px  20px 0;
}
span.eva_1{
  font-size: 14px;
  color: #666;
}
</style>
