<template>
  <div class="home">
    <home-nav></home-nav>
    <home-app></home-app>
    <home-list></home-list>
    <home-list-one></home-list-one>
    <home-link></home-link>
  </div>
</template>
<script>
import HomeNav from "../../components/home-nav";
import HomeApp from "../../components/home-app";
import HomeList from "../../components/home-list";
import HomeListOne from "../../components/home-list-one";
import HomeLink from "../../components/home-link";
export default {
  name: "",
  components: {
    HomeNav,
    HomeApp,
    HomeList,
    HomeLink,
    HomeListOne
  },
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>
<style lang="less" scoped>
</style>
