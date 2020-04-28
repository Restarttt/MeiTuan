<template>
  <div class="relate">
    <div class="logo">
      <img src="https://p1.meituan.net/deal/3c73be70afb06f6f243a3d2d8bd35bc855756.jpg" alt />
      <div class="title">
        <h1>豪德亨牛排自助餐厅</h1>
        <p>主厨牛排＋自助餐</p>
      </div>
    </div>

    <div class="price_message">
      <div class="price">
        <div class="price_l">
          <h4>56</h4>
          <span>元</span>
          <span class="money">门市价:78元</span>
        </div>
        <div class="price_r">
          <span>立即抢购</span>
        </div>
      </div>
      <div class="support">
        <div class="support_1">
          <img src="../../assets/return.png" alt />
          <span>支持随时退款</span>
        </div>
        <div class="support_1">
          <img src="../../assets/support.png" alt />
          <span>支持过期自动退</span>
        </div>
        <div class="support_1">
          <img src="../../assets/gray-me.png" alt />
          <span class="sold">已售 12430</span>
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
    return {};
  },
  computed: {},
  methods: {}
};
</script>
<style lang="less" scoped>
.relate {
  width: 100%;
}

.logo {
  position: relative;
  height: 250px;
}
.title {
  width: 100%;
  bottom: 20px;
  position: absolute;
  margin-left: 15px;
}
.title h1 {
  font-size: 19px;
  color: #fff;
  font-weight: 600;
  margin-bottom: 5px;
}
.title p {
  color: #fff;
}
// 价格
.price {
  background-color: #fff;
  padding: 8px 10px;
  display: flex;
  border-bottom: 1px solid #f3f4f5;
  justify-content: space-between;
}
.price h4 {
  display: inline-block;
  color: #06c1ae;
  font-size: 33px;
  margin-right: 2px;
  font-weight: 600;
}
.price_l span {
  color: #06c1ae;
  margin-right: 5px;
}
span.money {
  color: #999;
}
// 立即抢购
.price_r {
  width: 38%;
  text-align: center;
  line-height: 44px;
  background-color: #f90;
  border-radius: 6px;
}
.price_r span {
  color: #fff;
  font-size: 20px;
}
// 服务
.support {
  background-color: #fff;
  width: 100%;
  margin-bottom: 10px;
  padding: 10px 10px;
  border-bottom: 0;
}

.support img {
  width: 25px;
  height: 25px;
  vertical-align: middle;
  margin-right: 5px;
}
.support_1 {
  padding: 3px;
  display: inline-block;
  width: 50%;
}
.support span {
  color: #6bbd00;
}
.support .sold {
  color: #999;
}
</style>
