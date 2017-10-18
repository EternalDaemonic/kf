<template>
  <div class="attr-static">
    <div class="attr-static-top">
      <label for="">按月查询:</label>
      <DatePicker type="month" confirm placeholder="选择日期" style="width: 120px"></DatePicker>
      <label for="">子账号:</label>
      <input type="text" placeholder="zhaozh@53kf.com">
      <button>查询</button>
    </div>
    <div class="commis-content">
      <Table height="550" :columns="columns1" :data="data" style="border:none"></Table>
      <Page :total="dataCount" :page-size="pageSize" show-total @on-change="changepage" show-elevator v-show='flag'></Page>
    </div>
  </div>
</template>

<script>
let data = [
  {
    time:'2017-08-15 11:14:27',
    account: '金华53快服',
    num:10,
    rzkh:5,
    zsyk: 4,
   zsjk:3,
  },
  {
    time:'2017-08-15 11:14:27',
    account: '金华53快服',
    num:10,
    rzkh:5,
    zsyk: 4,
   zsjk:3,
  },
  {
    time:'2017-08-15 11:14:27',
    account: '金华53快服',
    num:10,
    rzkh:5,
    zsyk: 4,
   zsjk:3,
  },
  {
    time:'2017-08-15 11:14:27',
    account: '金华53快服',
    num:10,
    rzkh:5,
    zsyk: 4,
   zsjk:3,
  }
]
export default {
  data() {
    return {
      flag:true,
        columns1: [
        {
          type: 'index',
          title: '序号'
        },
        {
          title:'统计日期',
          key:'time'
        },
        {
          title: '推广子账号',
          key: 'account',
        },
        {
          title: '开户数',
          key: 'num'
        },
        {
          title: '认证开户数',
          key: 'rzkh'
        },
        {
          title: '直升银卡数',
          key: 'zsyk'
        },
        {
          title: '直升金卡数',
          key: 'zsjk'
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
        this.flag = false;
      } else {
        this.flag = true;
        this.data = this.ajaxData.slice(0, this.pageSize);
      }
    },
    changepage(index) {
      let _start = (index - 1) * this.pageSize;
      let _end = index * this.pageSize;
      this.data = this.ajaxData.slice(_start, _end);
    }
   },
   created(){
     this.handData()
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.attr-static {
  margin: 10px 0 0 30px;
  font-family: MicrosoftYaHei;
  font-size: 14px;
  color: #2c2c2c;
  letter-spacing: 1px;
  .attr-static-top {
    margin-bottom: 40px;
    label {
      margin-right: 10px;
      &:nth-of-type(2) {
        margin-left: 40px;
      }
    }
    input {
      background: #ffffff;
      border: 1px solid #bcbcbc;
      border-radius: 2px;
      width: 148px;
      letter-spacing: 0px;
      height: 32px;
      text-indent: 7px;
    }
    button {
      background: #2c87ea;
      width: 64px;
      height: 32px;
      margin-left: 40px;
      color: #fff;
      border: none;
      outline: none;
    }
  }
}
</style>
