<template>
  <div class="search-top">
    <div class="top_l" @click="go()">
      <img src="https://p1.meituan.net/travelcube/53361fd0bb6b333e779377789a8d669e531.png" alt />
    </div>
    <div class="top_c">
      <span>搜索</span>
    </div>
    <div class="top_r" @click="go()">
      <img src="https://p1.meituan.net/travelcube/142ba119b889881105236ef57446e6bf866.png" alt />
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    go() {
      this.$router.push("/");
    }
  }
};
</script>
<style lang="less" scoped>
.search-top {
  width: 100%;
  height: 50px;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: linear-gradient(135deg, #ffd000 0%, #ffbd00 100%);
}
.top_l img {
  width: 10px;
  height: 18px;
}
.top_c span {
  font-size: 16px;
}
.top_r img {
  width: 24px;
  height: 24px;
}
// 
</style>