<template>
  <div class="home">
    <home-nav></home-nav>
    <home-app></home-app>
    <home-icon :icon="icon_data"></home-icon>
    <home-list-one v-for="(item,index) of list" :key="index" :list="item"></home-list-one>
    <home-detail :home_detail="all_data"></home-detail>
    <home-link></home-link>
  </div>
</template>
<script>
import HomeNav from "../../components/home-nav";
import HomeApp from "../../components/home-app";
import HomeIcon from "../../components/home-icon";
import HomeListOne from "../../components/home-list-one";
import HomeDetail from "../../components/home-detail";
import HomeLink from "../../components/home-link";
export default {
  name: "",
  components: {
    HomeNav,
    HomeApp,
    HomeIcon,
    HomeLink,
    HomeListOne,
    HomeDetail
  },
  data() {
    return {
      all_data: {
        title: "查看全部团购",
        type: 1
      },
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
      ],
      icon_data: [
        {
          img: "../../assets/app/food.png",
          name: "美食"
        },
        {
          img: "../../assets/app/food.png",
          name: "猫眼电影"
        },
        {
          img: "../../assets/app/hotel.png",
          name: "酒店"
        },
        {
          img: "../../assets/app/food.png",
          name: "休闲娱乐"
        },
        {
          img: "../../assets/app/food.png",
          name: "外卖"
        },
        {
          img: "../../assets/app/food.png",
          name: "KTV"
        },
        {
          img: "../../assets/app/food.png",
          name: "周边游"
        },
        {
          img: "../../assets/app/food.png",
          name: "丽人"
        },
        {
          img: "../../assets/app/food.png",
          name: "小吃快餐"
        },
        {
          img: "../../assets/app/food.png",
          name: "全部分类"
        }
      ]
    };
  },
  computed: {},
  methods: {}
};
</script>
<style lang="less" scoped>
.home {
  width: 100%;
  background-color: #f0efed;
}
</style>
