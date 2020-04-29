<template>
  <div class="evaluate">
    <div class="user_mssage">
      <img :src=" evaluate_data.head_img" alt />
      <!-- 头像信息 -->
      <div class="uesr_r">
        <p>{{evaluate_data.name}}</p>
        <p>
          <i></i>
          <span>{{evaluate_data.time}}</span>
        </p>
      </div>
      <!-- 评价内容 -->
      <div class="eva">
        <p>{{evaluate_data.comment}}</p>
        <div class="eva_img">
          <img :src=" evaluate_data.img1" alt />
          <img :src=" evaluate_data.img2" alt />
        </div>
        <p>豪德亨牛排自助餐厅（城南天虹店）</p>
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
   evaluate_data: {
      type: Array,
      default:a =>{
        return []
      } 
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
  width: 100%;
}
</style>
