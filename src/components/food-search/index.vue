<template>
  <div class="food-search">
    <!-- 搜索 -->
    <div class="bg">
      <img
        src="https://s1.meituan.net/bs/file?f=meis/meishi.mobile:img/app_download_banner.png@f70bb75"
        alt
      />
    </div>
    <div class="search_btn">
      <div class="search" @click="go_search()">
        <i></i>
        <span>输入商家名、品类或商圈</span>
      </div>
      <img src="../../assets/home.png" @click="go()" />
    </div>
    <!-- icon -->
    <div class="icon">
      <ul>
        <li v-for="(item,index) of icon" :key="index">
          <img :src="item.img" alt />
          <p>{{item.name}}</p>
        </li>
      </ul>
    </div>
    <!-- 选择栏目 -->
    <van-dropdown-menu active-color="#06c1ae">
      <van-dropdown-item v-model="value" :options="all" />
      <van-dropdown-item title="附近商家" v-model="value" :options="nearby"></van-dropdown-item>
      <van-dropdown-item title="智能排序" v-model="value" :options="sort"></van-dropdown-item>
      <van-dropdown-item title="筛选" v-model="value">
        <van-cell center title="只看免预约">
          <template #right-icon>
            <van-switch v-model="checked" size="24" inactive-color="#ddd" active-color="#06c1ae" />
          </template>
        </van-cell>
        <van-cell center title="节假日可用">
          <template #right-icon>
            <van-switch v-model="check" size="24" inactive-color="#ddd" active-color="#06c1ae" />
          </template>
        </van-cell>
        <div class="time">
          <p>用餐时段</p>
          <ul>
            <li v-for="(item,index) of time_data" :key="index" :class="{frist:index === 0}">
              <span>{{item.name}}</span>
            </li>
          </ul>
        </div>
        <div class="star">
          <div class="star_l">
            <el-button size="mini">重置</el-button>
          </div>
          <div class="star_r">
            <el-button size="mini" type="primary" plain>完成</el-button>
          </div>
        </div>
      </van-dropdown-item>
    </van-dropdown-menu>
  </div>
</template>
<script>
import { DropdownMenu, DropdownItem, Switch} from "vant";
import { Button } from "element-ui";
export default {
  name: "",
  components: {},
  data() {
    return {
      icon: [
        {
          img:
            "https://p0.meituan.net/codeman/050ce6754d32482c75273e292407f2b312356.png",
          name: "火锅"
        },
        {
          img:
            "https://p0.meituan.net/codeman/e5277d18a450c1fe51c6cda9cff6a9e016621.png",
          name: "甜点饮品"
        },
        {
          img:
            "https://p1.meituan.net/codeman/962b082a549e88f2939dbee2ac3d235613019.png",
          name: "自助餐"
        },
        {
          img:
            "https://p0.meituan.net/codeman/12ff749bd7fdf473abd59e2651a9ee1913684.png",
          name: "小吃快餐"
        },
        {
          img:
            "https://p0.meituan.net/codeman/0fe84029cc6cf6ccf12838ce6546734a16488.png",
          name: "西餐"
        },
        {
          img:
            "https://p0.meituan.net/codeman/2ae734d26259e6138ea61f2dcdac8fa115018.png",
          name: "烧烤烤肉"
        },
        {
          img:
            "https://p1.meituan.net/codeman/a7c360a9aeca1f972a1819465154c6b414043.png",
          name: "香锅烤鱼"
        },
        {
          img:
            "https://p1.meituan.net/codeman/13a0d1537d45b237a07b665eb5a7845e17141.png",
          name: "海鲜"
        }
      ],
      value: 0,
      all: [
        { text: "全部美食", value: 0 },
        { text: "面包甜点", value: 1 },
        { text: "生日蛋糕", value: 2 },
        { text: "小吃快餐", value: 3 },
        { text: "其他美食", value: 4 },
        { text: "火锅", value: 5 },
        { text: "江西菜", value: 6 }
      ],
      nearby: [
        { text: "全城", value: 0 },
        { text: "吉州区", value: 1 },
        { text: "青原区", value: 2 },
        { text: "井冈山市", value: 3 },
        { text: "吉安县", value: 4 },
        { text: "吉水县", value: 5 },
        { text: "安福县", value: 6 }
      ],
      sort: [
        { text: "离我最近", value: 0 },
        { text: "好评最优", value: 1 },
        { text: "人气最高", value: 2 }
      ],
      checked: false,
      check: false,
      time_data: [
        { name: "不限" },
        { name: "早餐" },
        { name: "午餐" },
        { name: "下去茶" },
        { name: "晚餐" },
        { name: "夜宵" }
      ]
    };
  },
  computed: {},
  methods: {
    onConfirm() {
      this.$refs.item.toggle();
    },
    go() {
      this.$router.push("/login");
    },
    go_search() {
      this.$router.push("/search");
    }
  }
};
</script>
<style lang="less" scoped>
.food-search {
  width: 100%;
  background-color: #fff;
  margin-bottom: 10px;
}
.search {
  width: 70%;
  height: 30px;
  line-height: 30px;
  border-radius: 20px;
  background-color: #fff;
  text-align: center;
  margin: 10px auto;
}
.search_btn {
  width: 100%;
  top: 0;
  position: fixed;
}
.search i {
  margin-right: 5px;
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid #8e8e94;
  position: relative;
}
.search i::before {
  position: absolute;
  display: inline-block;
  content: "";
  width: 7px;
  height: 2px;
  background-color: #8e8e94;
  transform: rotate(45deg);
  top: 10px;
  left: 8px;
}
.search span {
  color: #999;
  font-size: 13px;
}
.search_btn img {
  width: 24px;
  height: 24px;
  position: absolute;
  top: 12px;
  right: 16px;
}

// 很多小图标
.icon {
  width: 100%;
  padding: 20px 0;
  border-top: 1px solid #f3f4f5;
}
ul li {
  text-align: center;
  width: 25%;
  display: inline-block;
  margin-bottom: 15px;
}
ul li img {
  width: 45px;
  height: 45px;
}
ul li p {
  color: #666;
  font-size: 12px;
  margin-top: 3px;
}
.time ul .frist {
  background: #eafcfa;
  border: 1px solid #06c1ae;
}
.time ul .frist span {
  color: #06c1ae;
}
//
.time {
  width: 100%;
  border-bottom: 1px solid #f3f4f5;
}
.time p {
  padding: 0 15px;
  padding-top: 10px;
}
.time ul {
  padding: 15px 10px;
}
.time ul li {
  width: 22%;
  height: 33px;
  line-height: 33px;
  border: 1px solid #bfbfbf;
  border-radius: 5px;
  margin: 10px 5px;
}
.time ul li span {
  color: #666;
  font-size: 13px;
}
// 按钮
.star {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
</style>