<template>
  <div class="location">
    <location-top></location-top>
    <div class="location-city">
      <location-present></location-present>
      <location-visit-hot :table="visit_data"></location-visit-hot>
      <location-visit-hot :table="hot_city"></location-visit-hot>
      <location-all></location-all>
      <location-city :city_data="city" :visit_data="visit_data"></location-city>
      <location-city :city_data="city_b" :visit_data="visit_data"></location-city>
      <location-city :city_data="city" :visit_data="visit_data"></location-city>
      <home-link></home-link>
    </div>
  </div>
</template>
<script>
import LocationTop from "../../components/location-top";
import LocationPresent from "../../components/location-present";
import LocationVisitHot from "../../components/location-visit-hot";
import LocationAll from "../../components/location-all";
import LocationCity from "../../components/location-city";
import HomeLink from "../../components/home-link";
export default {
  name: "",
  components: {
    LocationTop,
    LocationPresent,
    LocationVisitHot,
    LocationAll,
    LocationCity,
    HomeLink
  },
  data() {
    return {
      visit_data: {
        title: "最近访问",
        list: [
          {
            name: "吉安",
            url: "https://i.meituan.com/zhalantunshi/"
          },
        ]
      },
      hot_city: {
        title: "热门城市",
        list: [
          {
            name: "北京",
            url: "https://i.meituan.com/beijing/"
          },
          {
            name: "上海",
            url: "https://i.meituan.com/shanghai/"
          },
          {
            name: "广州",
            url: "https://i.meituan.com/guangzhou/"
          },
          {
            name: "深圳",
            url: "https://i.meituan.com/shenzhen/"
          },
          {
            name: "杭州",
            url: "https://i.meituan.com/hangzhou/"
          },
          {
            name: "上海",
            url: "https://i.meituan.com/shanghai/"
          },
          {
            name: "上海",
            url: "https://i.meituan.com/shanghai/"
          },
          {
            name: "上海",
            url: "https://i.meituan.com/shanghai/"
          },
          {
            name: "上海",
            url: "https://i.meituan.com/shanghai/"
          }
        ]
      },
      city: {
        h4: "A",
        list: [
          // { name: "A", url: "" },
          { name: "鞍山", url: "" },
          { name: "安庆", url: "" },
          { name: "鞍山", url: "" },
          { name: "安阳", url: "" },
          { name: "安顺", url: "" },
          { name: "安康", url: "" },
          { name: "安丘", url: "" },
          { name: "安平", url: "" },
          { name: "安溪", url: "" },
          { name: "安福", url: "" },
          { name: "澳门", url: "" }
        ]
      },
      city_b: {
        h4: "B",
        list: [
          // { name: "B", url: "" },
          { name: "鞍山", url: "" },
          { name: "安庆", url: "" },
          { name: "鞍山", url: "" },
          { name: "安平", url: "" },
          { name: "安溪", url: "" },
          { name: "安府", url: "" },
          { name: "澳门", url: "" }
        ]
      }
    };
  },
  computed: {},
  methods: {}
};
</script>
<style lang="less" scoped>
.location {
  width: 100%;
  background-color: #f0efed;
}
.location-city {
  padding: 0 15px;
}
</style>
