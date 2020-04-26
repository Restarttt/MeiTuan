<template>
  <div class="search">
    <search-top></search-top>
    <home-app></home-app>
    <search-bar></search-bar>
    <home-link></home-link>
  </div>
</template>
<script>
import SearchTop from "../../components/search-top";
import HomeApp from "../../components/home-app";
import SearchBar from "../../components/search-bar";
import HomeLink from "../../components/home-link";
export default {
  name: "",
  components: {
    SearchTop,
    HomeApp,
    SearchBar,
    HomeLink
  },
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>
<style lang="less" scoped>
.search{
  width: 100%;
  height: 812px;
  background-color: #f0efed;
}
</style>