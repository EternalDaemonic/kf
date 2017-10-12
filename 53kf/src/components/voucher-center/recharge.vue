<template>
  <div id="recharge">
    <div class="recharge-top">
      <dt>余额</dt>
      <dd>￥1000.00</dd>
    </div>
    <div class="invoice" :class="{'to':isA,'comm':!isA}" @click="to">网上银行充值</div>
    <div class="invoice have" :class="{'to':!isA,'comm':isA}" @click="have">银行汇款充值</div>
    <hr />
    <component :is='currentView'></component>
  </div>
</template>

<script>
import eBank from '@/components/voucher-center/recharge/E-Bank'
import bank from '@/components/voucher-center/recharge/bank'
export default {
  data() {
    return {
      currentView: 'eBank',
      isA: true
    }
  },
  methods: {
    to() {
      this.currentView = 'eBank';
      this.isA = true;
    },
    have() {
      this.currentView = 'bank';
      this.isA = false;
    }
  },
  components: {
    eBank,
    bank
  }
}

</script>

<style lang="less">
#recharge {
  margin-top: 10px;
   font-family: MicrosoftYaHei;
    font-size: 14px;
    color: #2c2c2c;
    letter-spacing: 1px;
    line-height: 15px;
  .recharge-top {
    margin-bottom: 40px;
    margin-left: 30px;
    dt,dd{
      display: inline-block;
    }
    dd{
      font-weight:bolder;
    }
  }
  .invoice {
    display: inline-block;
    width: 150px;
    line-height: 32px;
    text-align: center;
    height: 32px; // background: #fff;
    border: none;
    margin-left: 30px;
  }
  .to {
    background: #fff;
    border: none;
    border-left: 1px solid #ddd;
    border-top: 1px solid #2C87EA;
  }
  .have {
    margin-left: -5px;
    border-left: none;
    border-right: 1px solid #ddd;
    border-top: 1px solid #2C87EA;
  }
  .comm {
    background: #fbfaf8;
    color: #929292;
    border: 1px solid #ddd;
  }
  hr {
    margin-top: -2px;
  }
}
</style>
