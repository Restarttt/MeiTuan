<template>
  <div class="location-top">
    <div class="top_l" @click="go()">
      <img src="https://p1.meituan.net/travelcube/53361fd0bb6b333e779377789a8d669e531.png" alt />
    </div>
    <div class="top_c">
      <span>选择城市</span>
    </div>
    <div class="top_r">
      <img
        src="https://p1.meituan.net/travelcube/142ba119b889881105236ef57446e6bf866.png"
        @click="go()"
      />
      <img
        src="https://p0.meituan.net/travelcube/4b45dc09c35f9175498345f8672d08991022.png"
        @click="go_on()"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    go() {
      this.$router.push("/");
    },
    go_on() {
      this.$router.push("/search");
    }
  }
};
</script>
<style lang="less" scoped>
.location-top {
  width: 100%;
  height: 50px;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: linear-gradient(135deg, #ffd000 0%, #ffbd00 100%);
}
.top_l {
  width: 30%;
}
.top_l img {
  width: 10px;
  height: 18px;
}
.top_c {
  width: 24%;
}
.top_c span {
  font-size: 16px;
}
.top_r {
  width: 30%;
  text-align: end;
}
.top_r img {
  width: 24px;
  height: 24px;
  margin-left: 15px;
  vertical-align: middle;
}
</style>
