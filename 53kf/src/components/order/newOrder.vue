<template>
  <div class="order">
    <p >新订单为当前一年的订单情况</p>
    <div class="order-top">
      <label for="">订单编号:</label>
      <input type="text">
      <label for="">产品名称:</label>
      <input type="text">
      <label for="">起止时间:</label>
      <DatePicker type="date" placeholder="2017-07-05" style="width: 118px;height: 30px;border-radius:2px;"></DatePicker>
      -
      <DatePicker type="daterange" placement="bottom-end" placeholder="2017-07-05" style="width: 118px;height: 30px;border-radius:2px;"></DatePicker>
      <button>查询</button>
    </div>
    <table-page :columns='columns' :data1='data1'></table-page>
  </div>
</template>
<script>
import tablePage from '@/components/table'
let data1 = [
  {
    fuck: "1.000",
    account: '0000148464',
    bank: '客服系统私有云',
    money: '￥10000',
    state: '600.00',
    time_star: '2017-08-17',
    time_end: '2017-08-18',
    set: '自动续费',
  },
  {
    fuck: "1.000",
    account: '0000148464',
    bank: '客服系统私有云',
    money: '￥10000',
    state: '600.00',
    time_star: '2017-08-17',
    time_end: '2017-08-18',
    set: '自动续费',
  },
  {
    fuck: "1.000",
    account: '0000148464',
    bank: '客服系统私有云',
    money: '￥10000',
    state: '600.00',
    time_star: '2017-08-17',
    time_end: '2017-08-18',
    set: '自动续费',
  },
  {
    fuck: "1.000",
    account: '0000148464',
    bank: '客服系统私有云',
    money: '￥10000',
    state: '600.00',
    time_star: '2017-08-17',
    time_end: '2017-08-18',
    set: '自动续费',
  },
  {
    fuck: "1.000",
    account: '0000148464',
    bank: '客服系统私有云',
    money: '￥10000',
    state: '600.00',
    time_star: '2017-08-17',
    time_end: '2017-08-18',
    set: '自动续费',
  },
  {
    fuck: "1.000",
    account: '0000148464',
    bank: '客服系统私有云',
    money: '￥10000',
    state: '600.00',
    time_star: '2017-08-17',
    time_end: '2017-08-18',
    set: '自动续费',
  },
  {
    fuck: "1.000",
    account: '0000148464',
    bank: '客服系统私有云',
    money: '￥10000',
    state: '600.00',
    time_star: '2017-08-17',
    time_end: '2017-08-18',
    set: '自动续费',
  },
],
  columns = [
    {
      title: '订单编号',
      align: 'center',
      key: "account"
    },
    {
      title: '开通金额',
      align: 'center',
      key: 'money',
      className: 'info-column'
    },
    {
      title: '产品名称',
      align: 'center',
      key: 'bank',
      className:'weight'
    },
    {
      title: '产品数量',
      align: 'center',
      key: 'fuck'
    },
    {
      title: '产品单价',
      align: 'center',
      key: 'state'
    },
    {
      title: '开通时间',
      align: 'center',
      key: 'time_star'
    },
    {
      title: '到期时间',
      align: 'center',
      key: 'time_end'
    },
    {
      title: '备注',
      align: 'center',
      key: 'set'
    }
  ];
export default {
  data() {
    return {
      state: '',
      columns,
      data1
    }
  },
  methods: {
  },
  components: {
    tablePage
  }
}
</script>
!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' >
@import './../../assets/less/order.less';
</style>
