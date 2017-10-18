<template>
  <div class="commis-detail">
    <div class="commis-top">
      <div class="date">
        <DatePicker type="date" confirm placeholder="选择日期" style="width:120px"></DatePicker>&nbsp;-
        <DatePicker type="date" confirm placeholder="选择日期" style="width: 120px"></DatePicker>
      </div>
      <label for="">账号:</label>
      <input type="text" placeholder="zhaozh@53kf.com">
      <label for="">结算状态:</label>
      <Select v-model="state" style="width:100px;height:32px;">
        <Option value='请选择' disabled style="display:none">请选择</Option>
        <Option value='全部'>全部</Option>
        <Option value="未结算">未结算</Option>
        <Option value='已结算'>已结算</Option>
        <Option value='不结算'>不结算</Option>
      </Select>
      <button @click="changeTable">查询</button>
    </div>
    <div class="commis-content">
      <Table height="550" :columns="columns1" :data="data" style="border:none"></Table>
      <Page :total="dataCount" :page-size="pageSize" show-total @on-change="changepage" show-elevator></Page>
    </div>
  </div>
</template>

<script>
let data = [
  {
    account: 14421800,
    money: 188892.00,
    time: '2017/09/10 13:10:10',
    coupon: '不可提现',
    payment: '1110。00',
    state: '未结算',
    tc: 600.00,
    set: '开通功能OA全功能版3.68元,6折,优惠券抵扣0.00元, 扣除不可提现3.68元',
  },
  {
    account: 14421800,
    money: 188892.00,
    time: '2017/09/10 13:10:10',
    coupon: '不可提现',
    payment: '1110。00',
    state: '已结算',
    tc: 600.00,
    set: '开通功能OA全功能版3.68元,6折,优惠券抵扣0.00元, 扣除不可提现3.68元',
  },
  {
    account: 14421800,
    money: 188892.00,
    time: '2017/09/10 13:10:10',
    coupon: '不可提现',
    payment: '1110。00',
    state: '已结算',
    tc: 600.00,
    set: '开通功能OA全功能版3.68元,6折,优惠券抵扣0.00元, 扣除不可提现3.68元',
  },
  {
    account: 14421800,
    money: 188892.00,
    time: '2017/09/10 13:10:10',
    coupon: '不可提现',
    payment: '1110。00',
    state: '已结算',
    tc: 600.00,
    set: '开通功能OA全功能版3.68元,6折,优惠券抵扣0.00元, 扣除不可提现3.68元',
  },
  {
    account: 14421800,
    money: 188892.00,
    time: '2017/09/10 13:10:10',
    coupon: '不可提现',
    payment: '1110。00',
    state: '已结算',
    tc: 600.00,
    set: '开通功能OA全功能版3.68元,6折,优惠券抵扣0.00元, 扣除不可提现3.68元',
  },
  {
    account: 14421800,
    money: 188892.00,
    time: '2017/09/10 13:10:10',
    coupon: '不可提现',
    payment: '1110。00',
    state: '不结算',
    tc: 600.00,
    set: '开通功能OA全功能版3.68元,6折,优惠券抵扣0.00元, 扣除不可提现3.68元',
  },
  {
    account: 14421800,
    money: 188892.00,
    time: '2017/09/10 13:10:10',
    coupon: '不可提现',
    payment: '1110。00',
    state: '已结算',
    tc: 600.00,
    set: '开通功能OA全功能版3.68元,6折,优惠券抵扣0.00元, 扣除不可提现3.68元',
  },
  {
    account: 14421800,
    money: 188892.00,
    time: '2017/09/10 13:10:10',
    coupon: '不可提现',
    payment: '1110。00',
    state: '已结算',
    tc: 600.00,
    set: '开通功能OA全功能版3.68元,6折,优惠券抵扣0.00元, 扣除不可提现3.68元',
  },
  {
    account: 14421800,
    money: 188892.00,
    time: '2017/09/10 13:10:10',
    coupon: '不可提现',
    payment: '1110。00',
    state: '不结算',
    tc: 600.00,
    set: '开通功能OA全功能版3.68元,6折,优惠券抵扣0.00元, 扣除不可提现3.68元',
  },
  {
    account: 14421800,
    money: 188892.00,
    time: '2017/09/10 13:10:10',
    coupon: '不可提现',
    payment: '1110。00',
    state: '已结算',
    tc: 600.00,
    set: '开通功能OA全功能版3.68元,6折,优惠券抵扣0.00元, 扣除不可提现3.68元',
  },
  {
    account: 14421800,
    money: 188892.00,
    time: '2017/09/10 13:10:10',
    coupon: '不可提现',
    payment: '1110。00',
    state: '已结算',
    tc: 600.00,
    set: '开通功能OA全功能版3.68元,6折,优惠券抵扣0.00元, 扣除不可提现3.68元',
  },
  {
    account: 14421800,
    money: 188892.00,
    time: '2017/09/10 13:10:10',
    coupon: '不可提现',
    payment: '1110。00',
    state: '不结算',
    tc: 600.00,
    set: '开通功能OA全功能版3.68元,6折,优惠券抵扣0.00元, 扣除不可提现3.68元',
  },
  {
    account: 14421800,
    money: 188892.00,
    time: '2017/09/10 13:10:10',
    coupon: '不可提现',
    payment: '1110。00',
    state: '已结算',
    tc: 600.00,
    set: '开通功能OA全功能版3.68元,6折,优惠券抵扣0.00元, 扣除不可提现3.68元',
  },
  {
    account: 14421800,
    money: 188892.00,
    time: '2017/09/10 13:10:10',
    coupon: '不可提现',
    payment: '1110。00',
    state: '已结算',
    tc: 600.00,
    set: '开通功能OA全功能版3.68元,6折,优惠券抵扣0.00元, 扣除不可提现3.68元',
  },
  {
    account: 14421800,
    money: 188892.00,
    time: '2017/09/10 13:10:10',
    coupon: '不可提现',
    payment: '1110。00',
    state: '不结算',
    tc: 600.00,
    set: '开通功能OA全功能版3.68元,6折,优惠券抵扣0.00元, 扣除不可提现3.68元',
  },
  {
    account: 14421800,
    money: 188892.00,
    time: '2017/09/10 13:10:10',
    coupon: '不可提现',
    payment: '1110。00',
    state: '已结算',
    tc: 600.00,
    set: '开通功能OA全功能版3.68元,6折,优惠券抵扣0.00元, 扣除不可提现3.68元',
  },
  {
    account: 14421800,
    money: 188892.00,
    time: '2017/09/10 13:10:10',
    coupon: '不可提现',
    payment: '1110。00',
    state: '不结算',
    tc: 600.00,
    set: '开通功能OA全功能版3.68元,6折,优惠券抵扣0.00元, 扣除不可提现3.68元',
  },
  {
    account: 14421800,
    money: 188892.00,
    time: '2017/09/10 13:10:10',
    coupon: '不可提现',
    payment: '1110。00',
    state: '已结算',
    tc: 600.00,
    set: '开通功能OA全功能版3.68元,6折,优惠券抵扣0.00元, 扣除不可提现3.68元',
  },
  {
    account: 14421800,
    money: 188892.00,
    time: '2017/09/10 13:10:10',
    coupon: '不可提现',
    payment: '1110。00',
    state: '已结算',
    tc: 600.00,
    set: '开通功能OA全功能版3.68元,6折,优惠券抵扣0.00元, 扣除不可提现3.68元',
  },
  {
    account: 14421800,
    money: 188892.00,
    time: '2017/09/10 13:10:10',
    coupon: '不可提现',
    payment: '1110。00',
    state: '不结算',
    tc: 600.00,
    set: '开通功能OA全功能版3.68元,6折,优惠券抵扣0.00元, 扣除不可提现3.68元',
  },
  {
    account: 14421800,
    money: 188892.00,
    time: '2017/09/10 13:10:10',
    coupon: '不可提现',
    payment: '1110。00',
    state: '已结算',
    tc: 600.00,
    set: '开通功能OA全功能版3.68元,6折,优惠券抵扣0.00元, 扣除不可提现3.68元',
  },
  {
    account: 14421800,
    money: 188892.00,
    time: '2017/09/10 13:10:10',
    coupon: '不可提现',
    payment: '1110。00',
    state: '已结算',
    tc: 600.00,
    set: '开通功能OA全功能版3.68元,6折,优惠券抵扣0.00元, 扣除不可提现3.68元',
  },
  {
    account: 14421800,
    money: 188892.00,
    time: '2017/09/10 13:10:10',
    coupon: '不可提现',
    payment: '1110。00',
    state: '不结算',
    tc: 600.00,
    set: '开通功能OA全功能版3.68元,6折,优惠券抵扣0.00元, 扣除不可提现3.68元',
  },
  {
    account: 14421800,
    money: 188892.00,
    time: '2017/09/10 13:10:10',
    coupon: '不可提现',
    payment: '1110。00',
    state: '已结算',
    tc: 600.00,
    set: '开通功能OA全功能版3.68元,6折,优惠券抵扣0.00元, 扣除不可提现3.68元',
  }
]
export default {
  data() {
    return {
      state: '请选择',
      columns1: [
        {
          type: 'index',
          title: '序号'
        },
        {
          title: '账号',
          key: 'account',
        },
        {
          title: '总支付金额',
          key: 'money'
        },
        {
          title: '支付时间',
          key: 'time'
        },
        {
          title: '优惠卷金额',
          key: 'coupon'
        },
        {
          title: "实际支付金额",
          key: 'payment'
        },
        {
          title: '结算状态',
          key: 'state'
        },
        {
          title: '提成',
          key: 'tc'
        },
        {
          title: '备注',
          key: 'set',
          width:'15%'
        }
      ],
      pageSize: 10,
      dataCount: '0',
      ajaxData: [],
      data: []
    }
  },
  methods: {
    handData() {
      this.ajaxData = data;
      this.dataCount = data.length;
      if (data.length < this.pageSize) {
        this.data = this.ajaxData;
      } else {
        this.data = this.ajaxData.slice(0, this.pageSize);
      }
    },
    changepage(index) {
      let _start = (index - 1) * this.pageSize;
      let _end = index * this.pageSize;
      this.data = this.ajaxData.slice(_start, _end);
    },
    changeTable() {
      this.ajaxData = [];
      for (let i = 0; i < data.length; i++) {
        if (this.state == '全部') {
          this.ajaxData.push(data[i]);
        }else if (data[i].state == this.state && this.state != '全部') {
          this.ajaxData.push(data[i]);
        }
      }
       this.dataCount = this.ajaxData.length;
       if (this.ajaxData.length < this.pageSize) {
        this.data = this.ajaxData;
      } else {
        this.data = this.ajaxData.slice(0, this.pageSize);
      }

    }
  },
  created() {
    this.handData();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.commis-detail {
  font-family: MicrosoftYaHei;
  font-size: 14px;
  color: #2c2c2c;
  letter-spacing: 1px;
  line-height: 15px;
  margin-left: 30px;
  margin-top: 10px;
  min-width: 1080px;
  .commis-top {
    .date {
      display: inline-block;
    }
    label {
      margin-left: 40px;
      margin-right: 5px;
    }
    &>input {
      background: #ffffff;
      border: 1px solid #bcbcbc;
      border-radius: 2px;
      width: 148px;
      height: 30px;
      text-indent: 8px;
    }
     ::-webkit-input-placeholder {
      color: #c6c6c6;
    }
     :-moz-placeholder {
      color: #c6c6c6;
    }
     ::-moz-placeholder {
      color: #c6c6c6;
    }
     :-ms-input-placeholder {
      color: #c6c6c6;
    }
    button {
      background: #2c87ea;
      width: 64px;
      height: 32px;
      border: none;
      color: #fff;
      margin-left: 45px;
    }
  }
  .commis-content {
    margin-top: 40px;
  }
}
</style>
