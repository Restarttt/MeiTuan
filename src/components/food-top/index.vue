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
          <van-stepper v-model="value" disable-plus input-width="60px" />
        </div>
        <div class="price">
          <span>总价 :</span>
          <span class="sum">{{order.sum}}元</span>
        </div>
        <div class="commit_btn">
          <button type="bottom">提交订单</button>
        </div>
        <p class="login">请登录后进行购买，去</p>
        <span class="login_btn">登录</span>
      </div>
    </div>
  </div>
</template>
<script>
import { Stepper, Form } from "vant";
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
      value: 1
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
  background-color: #fff;
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
.order {
  width: 100%;
  height: 450px;
  margin: 40px 0;
}
.order p {
  color: #333;
  font-size: 17px;
  margin: 15px;
  margin-right: 5px;
}
.price {
  border-bottom: 1px solid #ddd8ce;
  background-color: #fff;
  padding: 15px 10px;
  display: flex;
  justify-content: space-between;
}
.order span {
  columns: #333;
  font-size: 15px;
}
.order .sum {
  color: #ff9712;
  font-weight: 600;
}
.order .login {
  color: #333;
  font-size: 14px;
  display: inline-block;
}
.order span.login_btn {
  color: #06c1ae;
  font-size: 14px;
}
// 提交订单
.commit_btn {
  width: 100%;
}
button {
  display: block;
  width: 90%;
  height: 47px;
  margin: 20px auto;
  border-radius: 5px;
  color: #999;
  font-size: 18px;
}
</style>
