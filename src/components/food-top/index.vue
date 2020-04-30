<template>
  <div class="food-top">
    <!-- 最顶部 -->
    <div class="top">
      <div class="top_l">
        <i @click="go()"></i>
      </div>
      <div class="top_r">
        <span>提交订单</span>
      </div>
    </div>
    <!-- 信息 -->
    <div class="order">
      <p>{{order.name}}</p>
      <div class="order_message">
        <div class="price">
          <span class="text">单价 :</span>
          <span class="text">{{order.unit}}元</span>
        </div>
        <div class="price">
          <span>数量 :</span>
        </div>
        <div class="price">
          <span>总价 :</span>
          <span class="sum">{{order.sum}}元</span>
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
      order: {
        name: "蛙来呱2人餐",
        unit: 98,
        sum: 98
      },
      value:1
    };
  },
  computed: {},
  methods: {
    go() {
      this.$router.push("/detail");
    }
  }
};
</script>
<style lang="less" scoped>
.food-top {
  width: 100%;
}
.top {
  height: 51px;
  background-color: #06c1ae;
  display: flex;
  line-height: 51px;
}
.top i {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-left: 2px solid #fff;
  border-top: 2px solid #fff;
  transform: rotate(-45deg);
  vertical-align: middle;
}
.top_l {
  height: 100%;
  width: 10%;
  margin-left: 20px;
}
.top_r {
  height: 100%;
  width: 90%;
  text-align: center;
}
.top span {
  color: #fff;
  font-size: 18px;
}
// 购买信息
.order{
    width: 100%;
    height: 450px;
    margin:  20px 0;
}
.order p{
    color: #333;
    font-size: 17px;
    margin: 15px;
}
.price{
    border-bottom: 1px solid #ddd8ce;
    background-color: #fff;
    padding: 15px 10px;
    display: flex;
    justify-content: space-between;
}
.order span{
    columns: #333;
    font-size: 15px;

}
.order .sum{
    color: #ff9712;
    font-weight: 600;
}
</style>
