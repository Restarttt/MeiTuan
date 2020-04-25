<template>
  <div class="home-list-one">
    <div class="food">
      <ul>
        <li>
          <img :src="list.img" alt />
          <div class="detail">
            <p class="detail_tit">{{list.name}}</p>
            <p class="detail_sub">{{list.summary}}</p>
            <div class="detail-bottom">
              <span>{{list.money}}</span>
              <span>元</span>
              <span>门市价:{{list.price}}元</span>
              <span>已售{{list.count}}</span>
            </div>
          </div>
        </li>
      </ul>
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
      list: {
        img:
          "https://p0.meituan.net/200.0/deal/5a916ac8ccc2fde7c9a20f53a8d2831f413705.png@75_0_450_450a%7C267h_267w_2e_90Q",
        name: "鱼你在一起",
        summary: "[吉安等]单人用餐，提供免费WiFi",
        money: "25.8",
        price: "36",
        count: 397
      }
    };
  },
  computed: {},
  methods: {}
};
</script>
<style lang="less" scoped>
.home-list-one{
    width:100%;
    padding:  0 15px;
}
// 列表
ul li {
  width: 100%;
  border-top: 1px solid #f3f4f5;
  padding: 10px 0;
  display: flex;
  overflow: hidden;
  position: relative;
}
// 左边
ul li img {
  width: 30%;
  height: 90px;
  margin-right: 10px;
}
// 右边
.detail {
  width: 80%;
  display: inline-block;
}
.detail_tit {
  color: #333;
  font-size: 15px;
}
.detail_sub {
  display: block;
  color: #666;
  font-size: 12px;
  font-weight: 300;
  margin: 5px 0 30px 0;
  white-space: nowrap;
}
span:first-child {
  color: #f60;
  font-size: 18px;
}
span:nth-child(2) {
  color: #f60;
  margin-right: 3px;
}
span {
  color: #666;
  font-size: 12px;
}
span:nth-child(4) {
  text-align: right;
  position: absolute;
  right: 0;
  text-align: center;
  bottom: 12px;
}
</style>