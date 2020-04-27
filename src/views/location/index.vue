<template>
  <div class="location">
    <location-top></location-top>
    <location-present></location-present>
    <location-visit-hot></location-visit-hot>
    <location-all></location-all>
    <location-city></location-city>
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
    return {};
  },
  computed: {},
  methods: {}
};
</script>
<style lang="less" scoped>
.location {
  width: 100%;
  height: 812px;
  background-color: #f0efed;
  padding: 0 15px;
}
</style>
