<template>
  <div class="rebate">
    <Row class='one'>
      <Col span="4">购物网站</Col>
      <Col span="4">订单号</Col>
      <Col span="4">跟单时间</Col>
      <Col span="4">订单金额</Col>
      <Col span="4">预计/确认返利金额</Col>
      <Col span="4">
      <Select v-model="select" style="width:160px">
        <Option v-for="option in options" :value='option.key' :key="option.value">{{option.key}}</Option>
      </Select>
      </Col>
    </Row>
    <div class='retabe-table'>
    <Row v-for="item in data" :key='item.set' v-if='select == "订单状态" ? true : select == item.set'>
      <Col  v-for="col in item" :key='col' span="4">{{col}}</Col>
    </Row>
    </div>
    <Page :total="dataCount" :page-size="pageSize" show-total @on-change="changepage" show-elevator></Page>
  </div>
</template>

<script>
export default {
  data() {
    return {
      select: '订单状态',
      key: '',
      options: [
        {
          value: '0',
          key: '订单状态'
        },
        {
          value: '1',
          key: '等待返利'
        },
        {
          value: '2',
          key: '已经返利'
        },
        {
          value: '3',
          key: '无效订单'
        },
        {
          value: '4',
          key: '等待系统确认'
        },
      ],
      data:[],
      ajaxData:[],
      dataCount:'0',
      pageSize:10
    }
  },
  methods: {
    handData(){
      this.ajaxData = data;
      this.dataCount = data.length;
      if (data.length < this.pageSize){
        this.data = this.ajaxData;
      }else{
        this.data = this.ajaxData.slice(0,this.pageSize);
      }
    },
    changepage(index){
      let _start = (index -1)* this.pageSize;
      let _end = index* this.pageSize;
      this.data = this.ajaxData.slice(_start,_end);
    }
  },
  created(){
    this.handData();
  }
}
let data = [
        {
          account: 1442800,
          balance:188892.00,
          type:'不可提现',
          money: -600.00,
          time: '2017/09/10 13:10:10',
          set: '等待返利',
        },
        {
          account: 1442800,
          balance:188892.00,
          type:'不可提现',
          money: +600.00,
          time: '2017/09/10 13:10:10',
          set: '已经返利',
        },
        {
          account: 1442800,
          balance:188892.00,
          type:'不可提现',
          money: -600.00,
          time: '2017/09/10 13:10:10',
          set: '无效订单',
        },
        {
          account: 1442800,
          balance:188892.00,
          type:'不可提现',
          money: +600.00,
          time: '2017/09/10 13:10:10',
          set: '等待系统确认',
        },
        {
          account: 1442800,
          balance:188892.00,
          type:'不可提现',
          money: -600.00,
          time: '2017/09/10 13:10:10',
          set: '等待返利',
        },
        {
          account: 1442800,
          balance:188892.00,
          type:'不可提现',
          money: +600.00,
          time: '2017/09/10 13:10:10',
          set: '已经返利',
        },
        {
          account: 1442800,
          balance:188892.00,
          type:'不可提现',
          money: -600.00,
          time: '2017/09/10 13:10:10',
          set: '无效订单',
        },
        {
          account: 1442800,
          balance:188892.00,
          type:'不可提现',
          money: +600.00,
          time: '2017/09/10 13:10:10',
          set: '等待系统确认',
        },
        {
          account: 1442800,
          balance:188892.00,
          type:'不可提现',
          money: -600.00,
          time: '2017/09/10 13:10:10',
          set: '等待返利',
        },
        {
          account: 1442800,
          balance:188892.00,
          type:'不可提现',
          money: +600.00,
          time: '2017/09/10 13:10:10',
          set: '已经返利',
        },
        {
          account: 1442800,
          balance:188892.00,
          type:'不可提现',
          money: -600.00,
          time: '2017/09/10 13:10:10',
          set: '无效订单',
        },
        {
          account: 1442800,
          balance:188892.00,
          type:'不可提现',
          money: +600.00,
          time: '2017/09/10 13:10:10',
          set: '等待系统确认',
        },
      ]
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.rebate {
  margin-top: 10px;
  margin-left: 30px;
  &>hr {
    margin-left: 0;
    margin-top: 10px;
    margin-bottom: 20px;
  }
  .retabe-table{
    height:550px;
  }
  .ivu-select-selection {
    background: #ffffff;
    border: 1px solid #bcbcbc;
    border-radius: 2px;
    width: 158px;
    height: 30px;
  }
 
  .ivu-row{
    padding-left: 50px;
    font-family:MicrosoftYaHei;
    font-size:14px;
    height:50px;
    color:#4b4b4b;
    letter-spacing:0;
    line-height:50px;
    border-bottom:1px solid #ddd;
    &:hover{
      background:#f0fbff;
    }
  }
   .one:hover{
    background:#fff;
    padding-bottom:20px;
  }
}
</style>
