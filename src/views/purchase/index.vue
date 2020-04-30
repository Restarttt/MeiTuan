<template>
  <div class="purchase">
    <food-top></food-top>
    <detail-link></detail-link>
  </div>
</template>
<script>
import FoodTop from "../../components/food-top";
import DetailLink from "../../components/detail-link";
export default {
  name: "",
  components: {
    FoodTop,
    DetailLink
  },
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>
<style lang="less" scoped>
.purchase {
  width: 100%;
  height: 812px;
  background-color: #f0f0f0;
}
</style>
