<template>
  <div class="food-menu">
    <div class="menu">
      <div class="menu_l">
        <img :src="menu.img" alt />
        <span v-if="menu.time === 1">5.1畅快吃</span>
      </div>
      <div class="menu_r">
        <p>{{menu.name}}</p>
        <div class="grade">
          <div class="grade_l">
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <span>￥{{menu.price}}/人</span>
          </div>
          <div class="grade_r">
            <span>{{menu.locaiton}}</span>
            <span>{{menu.distance}}</span>
          </div>
        </div>
        <div class="type">
          <span>{{menu.catename}}</span>
          <span class="sort">{{menu.sort}}</span>
          <p v-if="menu.take_out">支持外卖</p>
        </div>
      </div>
    </div>
    <div class="menu_down">
      <div class="down_t">
        <span v-show="menu.reduce ===1" class="reduce">立减10.99</span>
        <img src="http://p1.meituan.net/codeman/93231059874052e97c0976c8a6e30dbe910.png" alt />
        <p>{{menu.summary}}</p>
      </div>
      <div class="down_t" v-if="menu.coupon">
        <img src="http://p1.meituan.net/codeman/5b202af2ecf82c69a433a246296ca4791278.png" alt />
        <p>{{ menu.coupon}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  props: {
    menu: {
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
.food-menu {
  width: 100%;
  background-color: #fff;
  padding: 15px 0 13px 15px;
  border-bottom: 1px solid #e5e5e5;
}

.menu {
  display: flex;
  justify-content: space-between;
}
span {
  color: #666;
  font-size: 12px;
  margin-right: 5px;
}

// 左边
.menu_l {
  width: 25%;
  margin-right: 10px;
  position: relative;
}
.menu_l span {
  display: inline-block;
  position: absolute;
  background-color: rgb(255, 82, 33);
  color: #fff;
  font-size: 11px;
  top: -3px;
  left: -1px;
}
// 右边
.menu_r {
  width: 75%;
  border-bottom: 1px solid #e5e5e5;
}
p {
  color: #333;
  font-size: 17px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.grade {
  display: flex;
  justify-content: space-between;
  padding: 2px 0;
}
.grade i {
  display: inline-block;
  width: 12px;
  height: 12px;
  background: url(https://s1.meituan.net/bs/file/?f=meis/meishi.mobile:assets/cb45534a7d3737c0.png@f70bb75)
    no-repeat;
  background-size: cover;
  margin-right: 1px;
}

// 类型
.sort {
  color: rgb(190, 158, 77);
  background-color: rgb(251, 244, 228);
}
.type p {
  color: rgb(108, 186, 178);
  font-size: 12px;
  padding: 5px 0;
}

// 最下面优惠选项
.menu_down {
  margin: 5px 10px 10px 20px;

  height: 20px;
}
.down_t {
  display: flex;
  align-items: center;
  padding: 3px 0;
}
.down_t span.reduce {
  width: 50%;
  border: 1px solid #ff8226;
  color: #ff8226;
  border-radius: 3px;
  padding: 2px 3px;
}
.down_t img {
  width: 15px;
  height: 15px;
  vertical-align: middle;
  margin: 0 5px;
}
.down_t p {
  font-size: 12px;
  color: #666;
}
</style>
