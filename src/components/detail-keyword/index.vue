<template>
  <div class="key_word">
    <div class="star">
      <div class="star_l">
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i class="half"></i>
        <span>{{key_word.grade}}</span>
      </div>
      <div class="star_r">
        <span>{{key_word.number}}人评价</span>
        <i></i>
      </div>
    </div>
    <!-- 关键字 -->
    <div class="word">
      <ul>
        <li v-for="(item,index) of key_word.list" :key="index" :class="{frist:item.type ===2}">
          <span :class="{gray:item.type ===2}">{{item.key}}</span>
          <span :class="{gray:item.type ===2}">{{item.max}}</span>
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
      key_word: {
        grade: 4.4,
        number: 1550,
        list: [
          {
            key: "服务热情",
            max: 477
          },
          {
            key: "海鲜差",
            max: 11,
            type: 2
          },
          {
            key: "  味道赞",
            max: 420
          },
          {
            key: "牛肉赞",
            max: 308
          },
          {
            key: "菜品不错",
            max: 296
          },
          {
            key: "上菜快",
            max: 248
          },
          {
            key: "点心差",
            max: 17,
            type: 2
          },
          {
            key: "回头客",
            max: 14
          }
        ]
      }
    };
  },
  computed: {},
  methods: {}
};
</script>
<style lang="less" scoped>
.key_word {
  background-color: #fff;
  width: 100%;
}
.star {
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f3f4f5;
}
span {
  font-size: 15px;
}
.star_l i {
  display: inline-block;
  margin-right: 5px;
  width: 18px;
  height: 18px;
  background: url(https://s1.meituan.net/bs/file/?f=meis/meishi.mobile:assets/cb45534a7d3737c0.png@f70bb75)
    no-repeat;
  background-size: cover;
}
.star_l span {
  color: #fa952f;
  vertical-align: top;
  margin-left: 5px;
}
i.half {
  display: inline-block;
  margin-right: 5px;
  width: 18px;
  height: 18px;
  background: url(https://s1.meituan.net/bs/file/?f=meis/meishi.mobile:assets/f906908262f9b786.png@f70bb75)
    no-repeat;
  background-size: cover;
}
.star_r span {
  color: #999;
}
.star_r span::after {
  content: "";
  display: inline-block;
  width: 9px;
  height: 9px;
  border-left: 1.5px solid #999;
  border-bottom: 1.5px solid #999;
  transform: rotate(-135deg);
  margin: 0 5px;
}
// 评价关键字
.word {
  padding: 10px;
  width: 100%;
  padding: 15px 10px;
}
ul li {
  display: inline-block;
  border: 1px solid #fdb338;
  margin: 0 5px 10px 0;
  border-radius: 5px;
  padding: 5px 5px;
  text-align: center;
}
.frist {
  display: inline-block;
  border: 1px solid #acacac;
  margin: 0 5px 10px 0;
  border-radius: 5px;
  padding: 5px 5px;
  text-align: center;
}
.gray {
  color: #999;
}
li span {
  color: #fdb338;
}
</style>
