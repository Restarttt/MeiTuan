<template>
  <div class="food">
    <food-search></food-search>
    <food-menu :menu="item" v-for="(item,index) of menu_data" :key="index"></food-menu>
    <detail-link></detail-link>
  </div>
</template>
<script>
import FoodSearch from "../../components/food-search";
import FoodMenu from "../../components/food-menu";
import DetailLink from "../../components/detail-link";

export default {
  name: "",
  components: {
    FoodSearch,
    FoodMenu,
    DetailLink
  },
  data() {
    return {
      menu_data: [
        {
          name: "华莱士·全鸡汉堡（安福金岸广场店）",
          img:
            "https://p0.meituan.net/bbia/b82d26dce4f7fa793b5a0d616c26aa2f131773.jpg@320w_320h_1e_1c",
          locaiton: "安福县中心城区",
          price: 14,
          distance: "4.4km",
          catename: "西式快餐/汉堡",
          sort: "广播电视大楼美食第6名",
          take_out: 1,
          summary:
            "9.5元单人餐，10元单人餐，11元单人餐，15元鸡肉卷套餐，20元小食套餐，21元鸡肉卷套餐2，25元双人餐，28元双人餐",
          coupon: "",
          time: 1,
          reduce: 1
        },
        {
          name: "源川婆婆",
          img:
            "https://p1.meituan.net/deal/69f1cad57f518acf7350f25ae914204859880.jpg@320w_320h_1e_1c",
          locaiton: "安福县中心城区",
          price: 15,
          distance: "4.2km",
          catename: "快餐简餐",
          sort: "广播电视大楼美食第4名",
          take_out: 1,
          summary: "快餐简餐",
          coupon: "",
          time: "",
          reduce: ""
        },
        {
          name: "纸上风情·烤鱼·现炒家常菜（国光店）",
          img:
            "https://img.meituan.net/msmerchant/edbdec43b4db987da4bb0d893984391638827.jpg@320w_320h_1e_1c",
          locaiton: "安福县中心城区",
          price: 41,
          distance: "4.4km",
          catename: "西式快餐/汉堡",
          sort: "广播电视大楼美食第6名",
          take_out: 1,
          summary: "双人餐68元，2-3人餐88元起，5-6人餐188元",
          coupon: "79代100元",
          time: 1,
          reduce: ""
        }
      ]
    };
  },
  computed: {},
  methods: {}
};
</script>
<style lang="less" scoped>
.food {
  width: 100%;
  background-color: #f0efed;
}
</style>
