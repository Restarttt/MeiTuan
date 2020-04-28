<template>
  <div class="home_datail">
    <div class="group">
      <span>{{home_detail.title}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  props: {
    home_detail:{
      type:Object,
      default:{}
    }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>
<style lang="less" scoped>
//  查看图文信息
.group {
  background-color: #fff;
  width: 100%;
  border-top: 1px solid #ddd8ce;
  border-bottom: 1.5px solid #ddd8ce;
  padding: 10px 15px;
  position: relative;
  margin-bottom: 10px;
}
.group span {
  color: #06c1ae;
  font-size: 16px;
}
.group span::after {
  content: "";
  display: inline-block;
  width: 8px;
  height: 8px;
  border: 1.5px solid #06c1ae;
  border-bottom: 0;
  border-left: 0;
  transform: rotate(45deg);
  position: absolute;
  right: 5%;
  top: 40%;
}

</style>
