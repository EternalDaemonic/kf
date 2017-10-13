<template>
  <div class="hello">

    <p class="hello_P">新订单为当前一年的订单情况</p>
    <div id="input">
      <span>订单编号:</span>
      <input type="text">
      <span>产品名称:</span>
      <input type="text">
      <span>起止时间:</span>
      <DatePicker type="date" placeholder="2017-07-05" style="width: 118px;height: 30px;border-radius:2px;"></DatePicker>
      -
      <DatePicker type="daterange" placement="bottom-end" placeholder="2017-07-05" style="width: 118px;height: 30px;border-radius:2px;"></DatePicker>
      <input type="button" value="查询" class="cx">
    </div>
    <Table height="600" :columns="columns1" :data="data2" style="border:none"></Table>
  </div>
</template>

666 2017/10/12 16:00:28
<script>
export default {
  data() {
    return {
      state: '',
      columns1: [
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
          key: 'bank'
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
      ],
      data2: [
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

      ]
    }
  },
  methods: {
  }
}
</script>
!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.hello_P {
  font-size: 14px;
  color: #2c2c2c;
  letter-spacing: 1px;
  line-height: 15px;
  text-align: left;
  margin-left: 30px;
  margin-top: 1px;
}
.info-column{
  font-size:14px;
color:#ff7b2b;
letter-spacing:0;
}

#input {
  width: 100%;
  /*min-width:1360px;*/
  margin-left: 30px;
  height: 40px;
  margin-top: 37px;
}

#input span {
  font-size: 14px;
  color: #2c2c2c;
  letter-spacing: 1px;
  line-height: 40px;
  text-align: left;
}

#input>input {
  background: #ffffff;
  border: 1px solid #bcbcbc;
  border-radius: 2px;
  width: 148px;
  height: 30px;
}

#input>span:nth-of-type(2),
#input>span:nth-of-type(3) {
  display: inline-block;
  margin-left: 40px;
}

#input>input:nth-of-type(3) {
  width: 64px;
  height: 32px;
  background: #2c87ea;
  margin-left: 50px;
  border: none;
}

.ivu-table-header .ivu-table-column-center {
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
</style>
