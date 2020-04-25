<template>
  <div class="home">
    <home-nav></home-nav>
    <home-list></home-list>
    <home-link></home-link>
  </div>
</template>
<script>
import HomeNav from '../../components/home-nav'
import HomeList from '../../components/home-list'
import HomeLink from '../../components/home-link'
export default {
  name: "",
  components: {
    HomeNav,
    HomeList,
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
</style>
