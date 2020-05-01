<template>
  <div class="search-bar">
    <div class="search">
      <div class="search-1">
        <i class="glass"></i>
        <!-- <img src='../../assets/glass.png' alt /> -->
        <input type="text" value="输入商家名、品类或商圈" />
      </div>
      <div class="bar">
        <span>搜索</span>
      </div>
    </div>
    <!-- 列表 -->
    <div class="list">
      <ul>
        <li v-for="(item,index) of list_data" :key="index">
          <i class="line" v-if="item.type === 1"></i>
          <a :href="item.url" :class="{frist:index === 0}">{{item.name}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      list_data: [
        {
          name: "周边热门",
          url: ""
        },
        {
          name: "自助餐",
          url: "https://i.meituan.com/s/jian-zizhucan2",
          type: 1
        },
        {
          name: "酒店",
          url: "https://i.meituan.com/s/jian-jiudian",
          type: 1
        },
        {
          name: "电影",
          url: "https://i.meituan.com/s/jian-dianying",
          type: 1
        },
        {
          name: "火锅",
          url: "https://i.meituan.com/s/jian-huoguo"
        },
        {
          name: "烤肉",
          url: "https://i.meituan.com/s/jian-kaorou",
          type: 1
        },
        {
          name: "KTV",
          url: "https://i.meituan.com/s/jian-KTV",
          type: 1
        },
        {
          name: "运动健身",
          url: "https://i.meituan.com/s/jian-youyong",
          type: 1
        },
        {
          name: "游泳",
          url: "https://i.meituan.com/s/jian-youyong"
        },
        {
          name: "西餐",
          url: "https://i.meituan.com/s/jian-xican",
          type: 1
        },
        {
          name: "美容美体",
          url: "https://i.meituan.com/s/jian-meirongmeiti",
          type: 1
        },
        {
          name: "日韩料理",
          url: "https://i.meituan.com/s/jian-rihanliaoli",
          type: 1
        }
      ]
    };
  },
  computed: {},
  methods: {}
};
</script>
<style lang="less" scoped>
// 搜搜
.search-bar {
  width: 100%;
}
.search {
  padding: 0 15px;
  display: flex;
  width: 100%;
  height: 38px;
  margin: 10px 0;
}
.search .glass {
  display: inline-block;
  width: 24px;
  height: 24px;
  background: url("../../assets/glass.png") no-repeat;
  background-size: 26px;
  color: #999;
  vertical-align: text-bottom;
  margin-left: 10px;
}
.search-1 {
  width: 78%;
  border: 1px #ccc solid;
  width: 80%;
  //   height: 40px;
  line-height: 40px;
  background-color: #fff;
  border-radius: 3px;
  margin-right: 15px;
}
input {
  padding-left: 10px;
  color: #999;
  height: 20px;
}
.bar {
  display: inline-block;
  width: 20%;
  background-color: #dcdcdc;
  text-align: center;
  line-height: 40px;
  border-radius: 3px;
}
.bar span {
  color: #999;
}
// 列表
.list {
  width: 100%;
  height: 180px;
  background-color: #fff;
  margin-bottom: 10px;
}
ul {
  padding-top: 10px;
}
ul li {
  text-align: center;
  display: inline-block;
  width: 25%;
  padding: 10px 5px;
  border-bottom: 1px solid #f3f4f5;
  position: relative;
}
.frist {
  color: #fdb338;
}
.line {
  position: absolute;
  display: inline-block;
  width: 1px;
  height: 10px;
  background-color: #eee;
  left: 0;
  top: 16px;
}
</style>