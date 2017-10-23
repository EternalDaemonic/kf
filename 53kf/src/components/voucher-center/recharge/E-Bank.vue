<template>
    <div class="e-bank">
        <p>！网上银行充值实时到账；银行汇款凭汇款单于一个工作日内处理。(充值金额在充值当天起一个月内开具发票有效)</p>
        <div>
            <label for="">充值金额：</label>
            <input type="text" placeholder="1000">
            <span>元</span>
            <span>首次充值至少满1000元才能开通产品及服务呦</span>
        </div>
        <button class="btn1" @click="next">下一步</button>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    next() {
      this.$emit("child", true);
    }
  }
};
</script>
<style lang="less">
.e-bank {
  margin-top: 24px;
  & > p {
    font-size: 12px;
    margin-bottom: 32px;
    color: #ff7b2b;
    letter-spacing: 0.86px;
  }
  & > div {
    font-size: 14px;
    color: #2c2c2c;
    input {
      border: 1px solid #bcbcbc;
      border-radius: 2px;
      width: 148px;
      height: 30px;
      text-indent: 5px;
    }
    span:nth-of-type(2) {
      font-size: 12px;
      color: #ff3d3d;
      letter-spacing: 0.86px;
      margin-left: 20px;
    }
  }
  .btn1 {
    width: 64px;
    height: 32px;
    background: #2c87ea;
    margin: 50px 0 0 80px;
    border: none;
    color: #ffffff;
  }
}
</style>


