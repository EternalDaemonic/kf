<template>
  <div id="bill">
    <div class="bill-top">
      <dt>支出：</dt>
      <dd>36999.38元</dd>
      <dt>收入：</dt>
      <dd>0.00元</dd>
    </div>
    <div class="bill-fill">
      <div class="bill-check">
        <Icon type="ios-checkmark-empty" size='30' color='#fff'></Icon>
      </div>
      <label for="">收入</label>
      <div class="bill-check">
        <Icon type="ios-checkmark-empty" size='30' color='#fff'></Icon>
      </div>
      <label for="">支出</label>
      <div class="bill-check">
        <Icon type="ios-checkmark-empty" size='30' color='#fff'></Icon>
      </div>
      <label for="">可提现</label>
      <div class="bill-check">
        <Icon type="ios-checkmark-empty" size='30' color='#fff'></Icon>
      </div>
      <label for="">不可提现</label>
      <label for="">账单时间：</label>
      <div>
        <DatePicker type="date" confirm placeholder="选择日期" style="width:120px"></DatePicker>&nbsp;-
        <DatePicker type="date" confirm placeholder="选择日期" style="width: 120px"></DatePicker>
      </div>
      <button class="btn1">查询</button>
      <button class="btn2">按月查询</button>
    </div>
    <div class="bank-content">
      <Table height="650" :columns="columns1" :data="data2" style="border:none"></Table>
      <Page :total="dataCount" :page-size="pageSize" show-total @on-change="changepage" show-elevator></Page>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns1: [
        {
          title: '流水号',
          key: 'account',
        },
        {
          title: '金额',
          key: 'money'
        },
        {
          title: '当前余额',
          key: 'balance'
        },
        {
          title: '账户类型',
          key: 'type'
        },
        {
          title:"支付方式",
          key:'payment'
        },
        {
          title:'支付银行',
          key:'bank'
        },
        {
          title:'时间',
          key:'time'
        },
        {
          title: '备注',
          key: 'set'
        }
      ],
      pageSize:10,
      dataCount:'0',
      ajaxData:[],
      data2:[]
    }
  },
  methods:{
    handData(){
      this.ajaxData = data2;
      this.dataCount = data2.length;
      if (data2.length < this.pageSize){
        this.data2 = this.ajaxData;
      }else{
        this.data2 = this.ajaxData.slice(0,this.pageSize);
      }
    },
    changepage(index){
      let _start = (index - 1)*this.pageSize;
      let _end = index * this.pageSize;
      this.data2 = this.ajaxData.slice(_start , _end);
    }
  },
  created(){
    this.handData();
  }
}
let  data2 = [
        {
          account: 1442800,
          balance:188892.00,
          type:'不可提现',
          payment:'支付宝',
          bank: '中国农业银行金华商城支行',
          money: -600.00,
          time: '2017/09/10 13:10:10',
          set: '开通功能OA全功能版3.68元,6折,优惠券抵扣0.00元, 扣除不可提现3.68元',
        },
        {
          account: 1442800,
          balance:188892.00,
          type:'不可提现',
          payment:'支付宝',
          bank: '中国农业银行金华商城支行',
          money: +600.00,
          time: '2017/09/10 13:10:10',
          set: '开通功能OA全功能版3.68元,6折,优惠券抵扣0.00元, 扣除不可提现3.68元',
        },
        {
          account: 1442800,
          balance:188892.00,
          type:'不可提现',
          payment:'支付宝',
          bank: '中国农业银行金华商城支行',
          money: -600.00,
          time: '2017/09/10 13:10:10',
          set: '开通功能OA全功能版3.68元,6折,优惠券抵扣0.00元, 扣除不可提现3.68元',
        },
        {
          account: 1442800,
          balance:188892.00,
          type:'不可提现',
          payment:'支付宝',
          bank: '中国农业银行金华商城支行',
          money: +600.00,
          time: '2017/09/10 13:10:10',
          set: '开通功能OA全功能版3.68元,6折,优惠券抵扣0.00元, 扣除不可提现3.68元',
        },
        {
          account: 1442800,
          balance:188892.00,
          type:'不可提现',
          payment:'支付宝',
          bank: '中国农业银行金华商城支行',
          money: -600.00,
          time: '2017/09/10 13:10:10',
          set: '开通功能OA全功能版3.68元,6折,优惠券抵扣0.00元, 扣除不可提现3.68元',
        },
        {
          account: 1442800,
          balance:188892.00,
          type:'不可提现',
          payment:'支付宝',
          bank: '中国农业银行金华商城支行',
          money: +600.00,
          time: '2017/09/10 13:10:10',
          set: '开通功能OA全功能版3.68元,6折,优惠券抵扣0.00元, 扣除不可提现3.68元',
        },
        {
          account: 1442800,
          balance:188892.00,
          type:'不可提现',
          payment:'支付宝',
          bank: '中国农业银行金华商城支行',
          money: -600.00,
          time: '2017/09/10 13:10:10',
          set: '开通功能OA全功能版3.68元,6折,优惠券抵扣0.00元, 扣除不可提现3.68元',
        },
        {
          account: 1442800,
          balance:188892.00,
          type:'不可提现',
          payment:'支付宝',
          bank: '中国农业银行金华商城支行',
          money: +600.00,
          time: '2017/09/10 13:10:10',
          set: '开通功能OA全功能版3.68元,6折,优惠券抵扣0.00元, 扣除不可提现3.68元',
        },
        {
          account: 1442800,
          balance:188892.00,
          type:'不可提现',
          payment:'支付宝',
          bank: '中国农业银行金华商城支行',
          money: -600.00,
          time: '2017/09/10 13:10:10',
          set: '开通功能OA全功能版3.68元,6折,优惠券抵扣0.00元, 扣除不可提现3.68元',
        },
        {
          account: 1442800,
          balance:188892.00,
          type:'不可提现',
          payment:'支付宝',
          bank: '中国农业银行金华商城支行',
          money: +600.00,
          time: '2017/09/10 13:10:10',
          set: '开通功能OA全功能版3.68元,6折,优惠券抵扣0.00元, 扣除不可提现3.68元',
        },
        {
          account: 1442800,
          balance:188892.00,
          type:'不可提现',
          payment:'支付宝',
          bank: '中国农业银行金华商城支行',
          money: -600.00,
          time: '2017/09/10 13:10:10',
          set: '开通功能OA全功能版3.68元,6折,优惠券抵扣0.00元, 扣除不可提现3.68元',
        },
        {
          account: 1442800,
          balance:188892.00,
          type:'不可提现',
          payment:'支付宝',
          bank: '中国农业银行金华商城支行',
          money: +600.00,
          time: '2017/09/10 13:10:10',
          set: '开通功能OA全功能版3.68元,6折,优惠券抵扣0.00元, 扣除不可提现3.68元',
        },
        {
          account: 1442800,
          balance:188892.00,
          type:'不可提现',
          payment:'支付宝',
          bank: '中国农业银行金华商城支行',
          money: -600.00,
          time: '2017/09/10 13:10:10',
          set: '开通功能OA全功能版3.68元,6折,优惠券抵扣0.00元, 扣除不可提现3.68元',
        },
        {
          account: 1442800,
          balance:188892.00,
          type:'不可提现',
          payment:'支付宝',
          bank: '中国农业银行金华商城支行',
          money: +600.00,
          time: '2017/09/10 13:10:10',
          set: '开通功能OA全功能版3.68元,6折,优惠券抵扣0.00元, 扣除不可提现3.68元',
        },
        {
          account: 1442800,
          balance:188892.00,
          type:'不可提现',
          payment:'支付宝',
          bank: '中国农业银行金华商城支行',
          money: -600.00,
          time: '2017/09/10 13:10:10',
          set: '开通功能OA全功能版3.68元,6折,优惠券抵扣0.00元, 扣除不可提现3.68元',
        },
        {
          account: 1442800,
          balance:188892.00,
          type:'不可提现',
          payment:'支付宝',
          bank: '中国农业银行金华商城支行',
          money: +600.00,
          time: '2017/09/10 13:10:10',
          set: '开通功能OA全功能版3.68元,6折,优惠券抵扣0.00元, 扣除不可提现3.68元',
        },
        {
          account: 1442800,
          balance:188892.00,
          type:'不可提现',
          payment:'支付宝',
          bank: '中国农业银行金华商城支行',
          money: -600.00,
          time: '2017/09/10 13:10:10',
          set: '开通功能OA全功能版3.68元,6折,优惠券抵扣0.00元, 扣除不可提现3.68元',
        },
        {
          account: 1442800,
          balance:188892.00,
          type:'不可提现',
          payment:'支付宝',
          bank: '中国农业银行金华商城支行',
          money: +600.00,
          time: '2017/09/10 13:10:10',
          set: '开通功能OA全功能版3.68元,6折,优惠券抵扣0.00元, 扣除不可提现3.68元',
        },
        {
          account: 1442800,
          balance:188892.00,
          type:'不可提现',
          payment:'支付宝',
          bank: '中国农业银行金华商城支行',
          money: -600.00,
          time: '2017/09/10 13:10:10',
          set: '开通功能OA全功能版3.68元,6折,优惠券抵扣0.00元, 扣除不可提现3.68元',
        },
        {
          account: 1442800,
          balance:188892.00,
          type:'不可提现',
          payment:'支付宝',
          bank: '中国农业银行金华商城支行',
          money: +600.00,
          time: '2017/09/10 13:10:10',
          set: '开通功能OA全功能版3.68元,6折,优惠券抵扣0.00元, 扣除不可提现3.68元',
        }
      ]
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
#bill {
  font-family: MicrosoftYaHei;
  font-size: 14px;
  color: #5a5a5a;
  letter-spacing: 1px;
  margin-top: 10px;
  margin-left: 30px;
  .bill-top {
    dt,
    dd {
      display: inline-block;
      color: #2c2c2c;
    }
    dd:nth-of-type(1) {
      color: #FF7B2B;
      font-weight: bolder;
      margin-right: 50px;
    }
    dd:nth-of-type(2) {
      color: #00A645;
      font-weight: bolder;
    }
  }
  .bill-fill {
    margin-top: 30px;
    margin-bottom: 40px;
    height: 32px;
    &>div {
      vertical-align: middle;
      display: inline-block;
    }
    .bill-check {
      text-align: center;
      background: #2c87ea;
      border-radius: 2px;
      width: 16px;
      height: 16px;
    }
    label {
      margin-right: 40px;
      &:nth-of-type(5) {
        margin-right: 15px;
      }
    }
    .btn1 {
      background: #2c87ea;
      width: 64px;
      height: 32px;
      border: none;
      color: #fff;
      margin: 0 30px 0 20px;
    }
    .btn2 {
      background: #f7f7f7;
      border: 1px solid #dddddd;
      width: 94px;
      height: 30px;
    }
    .ivu-input {
      border: 1px solid #bcbcbc;
      border-radius: 2px;
      width: 118px;
      height: 32px;
    }
  }

  .ivu-icon-ios-checkmark-empty {
    transform: translate(0, -7px);
  }
  .ivu-table th {
    font-family: MicrosoftYaHei;
    font-size: 14px;
    color: #9f9f9f;
    background: #fff;
    letter-spacing: 1px;
  }
  .ivu-table:after,
  .ivu-table:before {
    width: 0;
    height: 0;
  }
}
</style>
