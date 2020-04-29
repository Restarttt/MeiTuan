<template>
  <div class="business_service">
    <!-- 商家信息 -->
    <div class="message">
      <!-- <h3>{{message.title}}</h3> -->
      <div class="message_location">
        <div class="location_l">
          <p>{{message.name}}</p>
          <p>{{message.subname}}</p>
          <p>
            <i></i>
            <span>离我最近</span>
          </p>
        </div>
        <div class="location_r">
          <i></i>
        </div>
      </div>
    </div>
    <!-- 套餐 -->
    <div class="set_meal">
      <h3>{{set_meal.title}}</h3>
      <div class="meal">
        <span class="menl-l">{{set_meal.name}}</span>
        <span class="menl-m">{{set_meal.num}}位</span>
        <span class="menl-r">{{set_meal.price}}</span>
      </div>
    </div>
    <!-- 备注 -->
    <div class="remark">
      <span>备注</span>
    </div>
    <div class="package-details">
      <ul>
        <li v-for="(item,index) of package" :key="index">{{item.name}}</li>
      </ul>
    </div>
    <!-- 查看图文 -->
    <div class="group">
      <span>{{home_detail.title}}</span>
    </div>
    <!-- 购买须知 -->
    <div class="buy">
      <h3>{{buy.title}}</h3>
      <div class="buy_1" v-for="(item,index) of buy.list" :key="index">
        <div class="buy_time">{{item.name}}</div>
        <ul>
          <li>{{item.summary}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  props: {
    home_detail: {
      type: Object,
      default: a => {
        return {};
      }
    }
  },
  components: {},
  data() {
    return {
      message: {
        title: "商家信息",
        name: "豪德亨牛排自助餐厅（城南天虹店）",
        subname: "吉州区吉安南大道铜锣湾广场天虹商场2楼"
      },
      set_meal: {
        title: "套餐",
        name: "主厨牛排＋自助餐",
        num: "1 ",
        price: "78元"
      },
      package: [
        { name: "主厨牛排＋自助餐：11:00-14:00,16:00-21:00" },
        { name: "最多可用餐 2 小时" },
        {
          name:
            "300多种无限量自助美食。包含海鲜，刺身，铁板烧，西点，小吃，中式小炒，精美凉菜，新鲜水果，麻辣烫，烤肠，养生汤，滋补粥，海鲜大咖，生蚝，鱿鱼，扇贝，羊肉串等等。还有小朋友喜爱的日本寿司，布丁果冻，水果沙拉，披萨，蛋 挞，爆米花，冰淇淋,酸奶，薯条，五星鸡块，卡通包等，解决了小朋友不吃饭的困难哦"
        }
      ],
      buy: {
        title: "购买须知",
        list: [
          {
            name: "有效期",
            summary: "2019.6.28 至 2020.5.27 23:59"
          },
          {
            name: "不可用日期",
            summary: "2020年1月25日~1月27日"
          },
          {
            name: "使用规则",
            summary: "团购用户不可同时享受商家其他优惠"
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

.business_service {
  width: 100%;
}
h3 {
  width: 100%;
  display: inline-block;
  font-size: 17px;
  color: #333;
  padding: 10px;
  border-bottom: 1px solid #ddd8ce;
}
// 商家信息
.message {
  background-color: #fff;
  width: 100%;
  margin-bottom: 10px;
}
.message_location {
  display: flex;
  align-items: center;
  padding: 0 10px;
}
.location_l {
  width: 80%;
  padding: 15px 0;
}
.location_l i {
  display: inline-block;
  width: 14px;
  height: 14px;
  background: url(https://s1.meituan.net/bs/file/?f=meis/meishi.mobile:assets/94a35bd5a3c8b11f.png@f70bb75) -131px -127px
    no-repeat;
}
.location_r i {
  display: inline-block;
  width: 14px;
  height: 14px;
  background: url(https://s1.meituan.net/bs/file/?f=meis/meishi.mobile:assets/94a35bd5a3c8b11f.png@f70bb75) -93px -48px;
}
.location_l p {
  color: #000;
  font-size: 16px;
  font-weight: 600;
}
.location_l p:nth-child(2) {
  font-size: 14px;
  color: #666;
  font-weight: 400;
  padding: 3px 0;
}
.location_l span {
  color: #eb8706;
  margin-left: 10px;
}
.location_r {
  width: 20%;
  height: 60px;
  line-height: 60px;
  text-align: center;
  position: relative;
  border-left: 1px solid #ddd8ce;
}
// 套餐
.set_meal {
  background-color: #fff;
}
.meal {
  text-align: left;

  display: flex;
}
.meal span {
  color: #333;
  font-size: 15px;
  padding: 15px 10px;
}
.meal span:first-child {
  width: 45%;
}
.meal span:nth-child(2) {
  width: 30%;
  border-left: 1px solid #ddd8ce;
  border-right: 1px solid #ddd8ce;
}
// 备注
.remark {
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.remark span {
  font-size: 15px;
}
.package-details {
  border-top: 1px solid #ddd8ce;
  background-color: #fff;
  padding: 15px 25px;
}
ul li {
  font-size: 15px;
  padding: 3px 0;
  list-style-type: disc;
}
// 购买须知
.buy {
  background-color: #fff;
}
.buy_1 {
  padding: 3px 10px;
}
.buy_time {
  color: #ff9900;
  font-size: 15px;
}
ul li {
  padding-left: 10px;
}
</style>
