<template>
  <div class="seach-page">
    <div class="logo">
      <img src="https://p0.meituan.net/travelcube/7c71ecc4b44d0e17447076cd23e501cb31967.png" alt />
    </div>
    <!-- 登录 -->
    <div class="register">
      <div class="reg">
        <div class="location">
          <span>中国</span>
          <span>+86</span>
          <i></i>
        </div>
        <input type="text" value="请输入手机号" />
      </div>
      <div class="reg">
        <input type="text" value="请输入手机验证码" />
        <span class="code">获取验证码</span>
      </div>
      <!-- 登录按钮 -->
      <div class="login_btn">
        <span>登录</span>
      </div>
      <!-- 注册 -->
      <div class="note">
        <p class="note_1">未注册的手机号验证后自动创建美团账户</p>
        <p>账号密码登录</p>
      </div>
    </div>

    <!--  协议-->
    <div class="protocol">
      <p>登录即代表您已经同意</p>
      <span>
        <a href="https://rules-center.meituan.com/m/detail/4">《美团点评用户服务协议》</a>
      </span>
      <span>
        <a href="https://rules-center.meituan.com/m/detail/2">《隐私政策》</a>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>
<style lang="less" scoped>
.search-page {
  width: 100%;
}
.logo {
  width: 100%;
  height: 135px;
  padding-top: 20px;
  text-align: center;
}
.logo img {
  width: 80px;
  height: 80px;
}
// 登录
.register {
  padding: 20px 25px;
  height: 620px;
}
.reg {
  padding: 8px 0;
  border-bottom: 1px solid #eee;
  margin-bottom: 20px;
  display: flex;
}
.reg_1{
    padding: 8px 0;
  border-bottom: 1px solid #ef8c00;
  margin-bottom: 20px;
  display: flex;

}
i {
  display: inline-block;
  width: 6px;
  height: 6px;
  border-right: 1px solid #646464;
  border-top: 1px solid #646464;
  transform: rotate(45deg);
  margin: 0 15px 0 5px;
}
.location {
  display: flex;
  align-items: center;
}
input {
  border-color: #ffbd00;
  width: 75%;
  color: #999;
  font-weight: 500;
}
// 验证码
.code {
  margin-left: 9px;
  font-size: 12px;
  color: #666;
}
.code::before {
  display: inline-block;
  content: "";
  width: 1px;
  height: 12px;
  background-color: #eee;
  /* padding-right: 5px; */
  margin-right: 5px;
}
// 登录条
.login_btn {
  margin: 0 auto;
  text-align: center;
  width: 95%;
  height: 45px;
  line-height: 45px;
  border-radius: 8px;
  opacity: 0.4;
  margin-top: 30px;
  background-color: #fe8c00;
  background-image: linear-gradient(-133deg, #ffbd00 0%, #ffd000 100%);
}
// 注册
.note {
  width: 100%;
  text-align: center;
}

.note .note_1 {
  padding: 10px 0 16px;
  color: #999;
  font-size: 12px;
}
// 协议
.protocol {
  width: 100%;
  text-align: center;
  letter-spacing: 1px;
}
.protocol p {
  color: #999;
  font-size: 12px;
}
.protocol a {
  font-size: 12px;
  color: #fe8c00;
  margin-right: 5px;
}
</style>