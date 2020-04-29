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
  props: {
    table: {
      type: Object,
      default: a => {
        return {}
      }
    },

  },
  data() {
    return {};
  },
  computed: {

  },
  methods: {}
};
</script>
<style lang="less" scoped>
.visit {
  width: 100%;
  margin-bottom: 10px;
}
p {
  font-size: 16px;
  margin-bottom: 10px;
}
.table {
  border: 1px solid #ddd8ce;
  background-color: #fff;
  border-radius: 5px;
}
ul li {
  width: 25%;
  height: 42px;
  border-bottom: 1px solid #ddd8ce;
  display: inline-block;
  text-align: center;
  line-height: 42px;
  margin-bottom: -1px;
}
ul {
  position: relative;
  // padding: 10px 0;
}
ul::before {
  content: "";
  position: absolute;
  width: 25%;
  left: 25%;
  height: 100%;
  border-left: 1px solid #ddd8ce;
  border-right: 1px solid #ddd8ce;
  top: 1%;
}
ul::after {
  content: "";
  position: absolute;
  width: 10%;
  left: 75%;
  top: 1%;
  height: 100%;
  border-left: 1px solid #ddd8ce;
  border-right: none;
}
</style>
