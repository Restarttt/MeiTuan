<template>
  <div class="home-list-one" @click="go()">
    <div class="food">
      <img :src="list.img" alt />
      <div class="detail">
        <p class="detail_tit">{{list.name}}</p>
        <p class="detail_sub">{{list.summary}}</p>
        <div class="detail-bottom">
          <span>{{list.money}}</span>
          <span>元</span>
          <span>门市价:{{list.price}}元</span>
          <span>已售{{list.count}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  props: {
    list: {
      type: Object,
      default: {}
    }
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    go(){
      this.$router.push('/detail')
    }
  }
};
</script>
<style lang="less" scoped>
.home-list-one {
  width: 100%;
  padding: 0 15px;
}
// 列表
.food {
  width: 100%;
  border-top: 1px solid #f3f4f5;
  padding: 10px 0;
  display: flex;
  overflow: hidden;
  position: relative;
}
// 左边
img {
  width: 30%;
  height: 90px;
  margin-right: 10px;
}
// 右边
.detail {
  width: 80%;
  display: inline-block;
}
.detail_tit {
  color: #333;
  font-size: 15px;
}
.detail_sub {
  display: block;
  color: #666;
  font-size: 12px;
  font-weight: 300;
  margin: 5px 0 30px 0;
  white-space: nowrap;
}
span:first-child {
  color: #f60;
  font-size: 18px;
}
span:nth-child(2) {
  color: #f60;
  margin-right: 3px;
}
span {
  color: #666;
  font-size: 12px;
}
span:nth-child(4) {
  text-align: right;
  position: absolute;
  right: 0;
  text-align: center;
  bottom: 12px;
}
</style>