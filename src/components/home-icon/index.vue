<template>
  <div class="icon">
    <ul>
      <li v-for="(item,index) of icon" :key="index" @click="go()">
        <img :src="item.img" alt />
        <p>{{item.name}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "",
  props: {
    icon: {
      type: Array,
      default: []
    }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    go(){
      this.$router.push('/food')
    }
  }
};
</script>
<style lang="less" scoped>
.icon {
  width: 100%;
  padding: 10px 0 0 0;
  margin-bottom: 10px;
  background-color: #fff;
}
img {
  width: 40px;
  height: 40px;
}
ul li {
  margin-bottom: 10px;
  text-align: center;
  width: 20%;
  display: inline-block;
}
p {
  color: #666;
  font-size: 12px;
  margin: 5px;
}
</style>
