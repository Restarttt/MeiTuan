<template>
  <div class="location">
    <location-top></location-top>
    <div class="loction-city">
      <location-present></location-present>
      <location-visit-hot :table="visit_data"></location-visit-hot>
      <location-visit-hot :table="hot_city"></location-visit-hot>
      <location-all></location-all>
      <location-city :city_data="city"></location-city>
      <location-city :city_data="city"></location-city>
      <location-city :city_data="city"></location-city>
    </div>
  </div>
</template>
<script>
import LocationTop from "../../components/location-top";
import LocationPresent from "../../components/location-present";
import LocationVisitHot from "../../components/location-visit-hot";
import LocationAll from "../../components/location-all";
import LocationCity from "../../components/location-city";
export default {
  name: "",
  components: {
    LocationTop,
    LocationPresent,
    LocationVisitHot,
    LocationAll,
    LocationCity
  },
  data() {
    return {
      // visit_data: {
      //   title: "最近访问",
      //   list: [
      //     {
      //       name: "扎兰屯市",
      //       url: "https://i.meituan.com/zhalantunshi/"
      //     },
      //     {
      //       name: "扎兰屯市",
      //       url: "https://i.meituan.com/zhalantunshi/"
      //     },
      //     {
      //       name: "扎兰屯市",
      //       url: "https://i.meituan.com/zhalantunshi/"
      //     }
      //   ]
      // },
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
        list: [
          { name: "A", url: "" },
          { name: "鞍山", url: "" },
          { name: "安庆", url: "" },
          { name: "鞍山", url: "" },
          { name: "安阳", url: "" },
          { name: "安顺", url: "" },
          { name: "安康", url: "" },
          { name: "安丘", url: "" },
          { name: "安平", url: "" },
          { name: "安溪", url: "" },
          { name: "安抚", url: "" },
          { name: "澳门", url: "" }
        ]
      }
    };
  },
  computed: {
    visit_data() {
      this.$store.state.name;
      console.log(this.$store.state.name);
    }
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.location {
  width: 100%;
  height: 812px;
  background-color: #f0efed;
}
.location-city {
  padding: 0 15px;
}
</style>
