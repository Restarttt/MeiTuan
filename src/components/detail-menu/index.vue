<template>
  <div class="menu">
    <i></i>
    <div class="menu_title">
      <p>{{menu_data.title}}</p>
      <div class="subtitle">
        <span>{{menu_data.money}}</span>
        <span>元</span>
        <span>门市价:{{menu_data.price}}元</span>
        <span>已售{{menu_data.count}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  props: {
    menu_data: {
      type: Object,
      default: {}
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
.menu {
  width: 100%;
  background-color: #fff;
  padding: 10px;
  border-bottom: 1px solid #ddd8ce;
}
i {
  vertical-align: top;
  display: inline-block;
  width: 14px;
  height: 14px;
  background: url(https://s1.meituan.net/bs/file/?f=meis/meishi.mobile:assets/94a35bd5a3c8b11f.png@f70bb75) -93px -48px;
}

//
.menu_title {
  width: 90%;
  display: inline-block;
  margin-left: 6px;
}
.menu_title p {
  color: #666;
  font-size: 15px;
  padding-bottom: 10px;
}
span:first-child {
  color: #06c1ae;
  font-size: 18px;
}
span:nth-child(2) {
  color: #06c1ae;
  margin-right: 5px;
}
span {
  color: #666;
  font-size: 12px;
}
span:nth-child(4) {
  text-align: right;
  position: absolute;
  right: 0;
  font-size: 11px;
}
.subtitle {
  width: 100%;
  position: relative;
  line-height: 24px;
}
</style>
