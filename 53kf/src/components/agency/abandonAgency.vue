<template>
  <div class="abandon">
    <div class="agency-true" v-show="flag" @click="flag = !flag">
      <p>是否确定放弃代理？<br>如确定放弃，次月1号生效，保证金在放弃代理30天后，如无特殊情况，自动转入会员身份的不可提现账户。本月您依旧是代理商~</p>
      <span>（点击按钮后将直接放弃代理）</span>
      <button>放弃代理</button>
    </div>
    <div class="agency-false" v-show="!flag">
      <p>保证金在放弃代理30天后，如无特殊情况，自动转入会员身份的不可提现账户。本月您依旧是代理商~</p>
      <button>已放弃代理</button>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: true
    }
  }
}
</script>

<style lang='less' scoped>
.abandon {
  font-family: MicrosoftYaHei;
  font-size: 14px;
  color: #2c2c2c;
  letter-spacing: 1px;
  margin: 10px 0 0 30px;
  .btn() {
    width: 96px;
    height: 32px;
    border: none;
    outline: none;
  }
  .agency-true {
    p {
      line-height: 27px;
    }
    span {
      display: block;
      font-size: 12px;
      color: #ff6868;
      letter-spacing: 0.86px;
      margin-bottom: 35px;
      line-height: 15px;
    }
    &>button {
      .btn;
      background: #ff7979;
      color: #fff;
    }
  }
  .agency-false {
    button {
      .btn;
      margin-top: 50px;
      background: #a8a8a8;
      color: #fff;
    }
  }
}
</style>
