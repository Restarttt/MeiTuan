<template>
  <div class="detail-title">
            <h3>{{message.title}}</h3>
  </div>
</template>
<script>
export default {
  name: "",
  props: {
      message:{
          type:Object,
          default:{}
      }
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>
<style lang="less" scoped>
h3 {
  width: 100%;
  display: inline-block;
  font-size: 17px;
  color: #333;
  padding: 10px;
  border-bottom: 1px solid #ddd8ce;
  margin-top: 10px;
  background: #fff;
}
</style>
