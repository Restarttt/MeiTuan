<template>
  <div class="all">
    <p>{{letter.title}}</p>
    <div class="letter">
      <ul>
        <li v-for="(item,index) of letter.list" :key="index">
          <a :href="item.url">{{item.name}}</a>
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
      letter: {
        title: "全部城市",
        list: [
          {
            name: "A",
            url: "https://i.meituan.com/zhalantunshi/"
          },
          {
            name: "B",
            url: "https://i.meituan.com/zhalantunshi/"
          },
          {
            name: "C",
            url: "https://i.meituan.com/zhalantunshi/"
          },
          {
            name: "D",
            url: "https://i.meituan.com/zhalantunshi/"
          },
          {
            name: "E",
            url: "https://i.meituan.com/zhalantunshi/"
          },
          {
            name: "F",
            url: "https://i.meituan.com/zhalantunshi/"
          },
          {
            name: "G",
            url: "https://i.meituan.com/zhalantunshi/"
          },
          {
            name: "F",
            url: "https://i.meituan.com/zhalantunshi/"
          },
          {
            name: "H",
            url: "https://i.meituan.com/zhalantunshi/"
          },
          {
            name: "J",
            url: "https://i.meituan.com/zhalantunshi/"
          },
          {
            name: "K",
            url: "https://i.meituan.com/zhalantunshi/"
          },
          {
            name: "L",
            url: "https://i.meituan.com/zhalantunshi/"
          },
          {
            name: "M",
            url: "https://i.meituan.com/zhalantunshi/"
          },
          {
            name: "N",
            url: "https://i.meituan.com/zhalantunshi/"
          },
          {
            name: "P",
            url: "https://i.meituan.com/zhalantunshi/"
          },
          {
            name: "Q",
            url: "https://i.meituan.com/zhalantunshi/"
          },
          {
            name: "R",
            url: "https://i.meituan.com/zhalantunshi/"
          }, {
            name: "S",
            url: "https://i.meituan.com/zhalantunshi/"
          },
           {
            name: "T",
            url: "https://i.meituan.com/zhalantunshi/"
          },
           {
            name: "W",
            url: "https://i.meituan.com/zhalantunshi/"
          },
           {
            name: "X",
            url: "https://i.meituan.com/zhalantunshi/"
          },
           {
            name: "Y",
            url: "https://i.meituan.com/zhalantunshi/"
          },
           {
            name: "Z",
            url: "https://i.meituan.com/zhalantunshi/"
          },


        ]
      }
    };
  },
  computed: {},
  methods: {
    
  }
};
</script>
<style lang="less" scoped>
.all {
  width: 100%;
}
p {
  font-size: 16px;
  margin-bottom: 10px;
}
.letter {
  border: 1px solid #ddd8ce;
  border-top: 0;
  background-color: #fff;
  border-radius: 5px;
}
ul li {
  width: 20%;
  height: 42px;
  display: inline-block;
  text-align: center;
  line-height: 42px;
  margin-bottom: -1px;
}
ul li a {
  color: #fe8c00;
}
</style>
