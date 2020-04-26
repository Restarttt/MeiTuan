<template>
  <div class="home-list">
    <!--  菜单栏-->
    <div class="menu_bar">
      <ul>
        <li>
          <span></span>
        </li>
      </ul>
    </div>
    <div class="food_list">
      <p class="tit">{{food_data.title}}</p>
      <div class="food">
        <ul>
          <li v-for="(item,index) of food_data.list" :key="index">
            <img :src="item.img" alt />
            <div class="detail">
              <p class="detail_tit">{{item.name}}</p>
              <p class="detail_sub">{{item.summary}}</p>
              <div class="detail-bottom">
                <span>{{item.money}}</span>
                <span>元</span>
                <span>门市价:{{item.price}}元</span>
                <span>已售{{item.count}}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="group">
      <span>查看全部团购</span>
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
      food_data: {
        title: "猜你喜欢",
        list: [
          {
            img:
              "https://p0.meituan.net/200.0/deal/5a916ac8ccc2fde7c9a20f53a8d2831f413705.png@75_0_450_450a%7C267h_267w_2e_90Q",
            name: "鱼你在一起",
            summary: "[吉安等]单人用餐，提供免费WiFi",
            money: "25.8",
            price: "36",
            count: 397
          },
          {
            img:
              "https://p1.meituan.net/200.0/deal/81ad57fc9cc1da0dbb3344f448024130748191.png@177_0_396_396a%7C267h_267w_2e_90Q",
            name: "纸上风情·烤鱼·现炒家常菜",
            summary: "[吉安等]纸上烤草鱼2～3人，可免费使用包间",
            money: "88",
            price: "135",
            count: 2014
          },
          {
            img:
              "https://p0.meituan.net/200.0/deal/ee0dcddbed46ca022e7855aa3e6bcba9104076.jpg@142_0_850_850a%7C267h_267w_2e_90Q",
            name: "华莱士·全鸡汉堡",
            summary: "[吉安等]2个香辣鸡腿堡+大薯条+2杯中可+黑椒鸡块1份",
            money: "28",
            price: "44",
            count: 6180
          },
          {
            img:
              "https://p0.meituan.net/200.0/deal/35a393b9030d3644c4eca5a973de39fe76211.jpg@161_0_518_518a%7C267h_267w_2e_90Q",
            name: "大拇指蛋糕",
            summary: "[吉安等]水果蛋糕1个，约8英寸，圆形",
            money: "38",
            price: "68",
            count: 85
          },
          {
            img:
              "https://p1.meituan.net/200.0/deal/ca9ccb510b729200dc81d8c2b5f46ce130532.jpg",
            name: "杨排风自助餐厅",
            summary: "[吉安等]晚餐跟周六日全天",
            money: "63",
            price: "78",
            count: 108385
          },
          {
            img:
              "//p0.meituan.net/200.0/dpdeal/9062a944918bae8f95ced35be19fff03123277.jpg",
            name: "奥克恒温游泳运动中心",
            summary: "[青原区]恒温运动中心成人票",
            money: "59.8",
            price: "88",
            count: 6014
          },
          {
            img:
              "https://p1.meituan.net/200.0/deal/657fa4c49b0eeff348a073eebb6450a772157.jpg@125_0_392_392a%7C267h_267w_2e_90Q",
            name: "亚马逊环球美食百汇",
            summary: "[天虹周边]平日单人自助午餐",
            money: "83",
            price: "88",
            count: 22254
          },
          {
            img:
              "https://p1.meituan.net/200.0/deal/e9f9993c4def7fda63a60632893663f354756.jpg@126_0_388_388a%7C267h_267w_2e_100Q",
            name: "渝味晓宇火锅",
            summary: "[2店通用]3人套餐，提供免费WiFi",
            money: "148",
            price: "238",
            count: 3348
          },
          {
            img:
              "https://p0.meituan.net/200.0/deal/8ecc44f5583f1318a1da5537f6dcde9424280.jpg@90_0_521_521a%7C267h_267w_2e_100Q",
            name: "贡茶",
            summary: "[吉安县中心城区]茶饮4选1，提供免费WiFi",
            money: "6.98",
            price: "11",
            count: 209
          },
          {
            img:
              "https://p1.meituan.net/200.0/deal/b9ae909ff865687753b70a22a75dbf3d158934.jpg@267h_267w_2e_90Q",
            name: "麦博工坊时尚蛋糕",
            summary: "[吉安等]10英寸经典巧克力生日蛋糕1个",
            money: "148",
            price: "228",
            count: 221
          }
        ]
      }
    };
  },
  computed: {},
  methods: {}
};
</script>
<style lang="less" scoped>
.home-list {
  width: 100%;
}
.food_list {
  border-top: 15px solid #ddd8ce;
  padding: 0 15px;
}
.tit {
  font-size: 18px;
  padding: 10px 0;
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
</style>
