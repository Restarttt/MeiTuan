<template>
  <div class="city">
    <div class="table">
      <ul>
        <h4 class="first">{{city_data.h4}}</h4>
        <li
          v-for="(item,index) of city_data.list"
          :key="index"
          @click="change(item.name,visit_data.list)"
        >{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  props: {
    city_data: {
      type: Object,
      default: {}
    },
    visit_data: {
      type: Object,
      default: a => {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    change(name,list) {
      // console.log(name);
      this.$store.commit("ADD", name)
      list.push({name});
      console.log(list)
    }
  }
};
</script>
<style lang="less" scoped>
.city {
  clear: both;
  width: 100%;
}
.table {
  border: 1px solid #ddd8ce;
  background-color: #fff;
  border-radius: 5px;
  margin-top: -1px;
}
ul {
  background-color: #fff;
  overflow: hidden;
}
ul li {
  width: 25%;
  height: 42px;
  border-bottom: 1px solid #ddd8ce;
  display: inline-block;
  text-align: center;
  line-height: 42px;
  float: left;
}
.first {
  width: 25%;
  height: 84px;
  line-height: 84px;
  border-bottom: 1px solid #ddd8ce;
  display: inline-block;
  text-align: center;
  margin-bottom: -1px;
  float: left;
}
h4 {
  color: #b7b7b7;
  font-size: 40px;
  line-height: 84px;
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
