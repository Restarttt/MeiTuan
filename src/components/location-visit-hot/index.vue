<template>
  <div class="visit">
    <p>{{table.title}}</p>
    <div class="table">
      <ul>
        <li v-for="(item,index) of table.list" :key="index">
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
  data() {
    return {
      table: {
        title: "最近访问",
        list: [
          { name: "扎兰屯市", url: "https://i.meituan.com/zhalantunshi/" },
          { name: "扎兰屯市", url: "https://i.meituan.com/zhalantunshi/" },
          { name: "扎兰屯市", url: "https://i.meituan.com/zhalantunshi/" }
        ]
      }
    };
  },
  computed: {},
  methods: {}
};
</script>
<style lang="less" scoped>
.vistit {
  width: 100%;
}
</style>
