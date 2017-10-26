<template>
  <div class="withdraw">
    <ul>
      <li>
        <dt>余额：</dt>
        <dd>{{balance.balance}}</dd>
        <dt>可提现余额：</dt>
        <dd>{{balance.balance1}}</dd>
        <dt>最大可提现余额:</dt>
        <dd>{{balance.balance2}}</dd>
      </li>
      <li class="with-money">
        <label for="">提现金额：</label><input type="text" placeholder="1000" v-model="input1">
        <span>元</span>
        <span>提现金额不能少于100元，每周三为结算日，结算金额为上周一至周日代理商所提现的全部金额。</span>
      </li>
      <li>
        <label for="">账户名称：</label><input type="text" v-model="input2"></li>
      <li>
        <label for="">公司账户：</label><input type="text" v-model="input3"></li>
      <li>
        <label for="">开户银行：</label><input type="text" v-model="input4"></li>
      <li class="withdraw-deposit">
        <button>我要提现</button>
        <span>自2017年5月1日起，个人代理提现手续费调整为50%</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      balance: {
        balance: '10000.00元',
        balance1: '500.00元',
        balance2: '500.00元'
      },
      input1: '',
      input2: '',
      input3: '',
      input4: ''
    }
  }
}
</script>
<style lang='less' scoped>
.withdraw {
  margin-top: 10px;
  ul {
    font-family: MicrosoftYaHei;
    font-size: 14px;
    color: #2c2c2c;
    letter-spacing: 1px;
    list-style-type: none;
    li {
      height: 32px;
      margin-bottom: 15px;
      dt,
      dd {
        display: inline-block;
      }
      dd {
        color: #FA782C;
        font-weight: bolder;
        margin-right: 50px;
      }
      label {
        margin-right: 15px;
      }
      input {
        background: #ffffff;
        border: 1px solid #bcbcbc;
        border-radius: 2px;
        width: 228px;
        height: 30px;
      }
    }
    .with-money {
      input {
        width: 148px;
      }
      span:nth-of-type(2) {
        display: inline-block;
        font-size: 12px;
        color: #ff3d3d;
        letter-spacing: 0.86px;
        margin-left: 20px;
      }
    }
    .withdraw-deposit {
      button {
        background: #ffa51e;
        width: 96px;
        height: 32px;
        border: none;
        color: #fff;
        margin-right: 20px;
        margin-left: 90px;
      }
      span {
        font-family: MicrosoftYaHei-Bold;
        font-size: 12px;
        color: #ff7b2b;
        letter-spacing: 0.86px;
        font-weight: bolder;
      }
    }
  }
}
</style>
