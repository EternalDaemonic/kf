<template>
  <div class="open-detail">
    <ul class="open-detail-top">
      <li>
        <label for="">是否开户:</label>
        <Select style="width:100px" v-model="open">
          <Option value="0" disabled>请选择</Option>
          <Option value="1">开户</Option>
          <Option value="2">未开户</Option>
        </Select>
        <label for="">开户时间:</label>
        <DatePicker type="date" confirm placeholder="选择日期" style="width:120px"></DatePicker>&nbsp;-
        <DatePicker type="date" confirm placeholder="选择日期" style="width: 120px"></DatePicker>
        <label for="">推广者:</label>
        <Select style="width:100px" v-model="people">
          <Option value="0">请选择</Option>
        </Select>
      </li>
      <li>
        <label for="">认证状态:</label>
        <Select style="width:100px" v-model="state">
          <Option value="0" disabled>请选择</Option>
          <Option value="1">未申请</Option>
          <Option value="2">认证通过</Option>
          <Option value="3">正在审核</Option>
          <Option value="4">认证未通过</Option>
        </Select>
        <label for="">认证时间:</label>
        <DatePicker type="date" confirm placeholder="选择日期" style="width:120px"></DatePicker>&nbsp;-
        <DatePicker type="date" confirm placeholder="选择日期" style="width: 120px"></DatePicker>
        <label for="">新增账号:</label>
        <input type="text">
        <button v-show="!flag" @click="flag = true">高级筛选</button>
        <button v-show="!flag">查询</button>
      </li>
    </ul>
    <ul class="detail-filter" v-show="flag">
      <li>
        <label for="">链接至:</label>
        <Select v-model="share" style="width:100px">
          <Option value="0" disabled>请选择</Option>
          <Option value="1">S首页</Option>
        </Select>
        <label for="">推广链接别名:</label>
        <Select v-model="name" style="width:100px">
          <Option value="0">请选择</Option>
        </Select>
        <label for="">地区:</label>
        <city></city>
      </li>
      <li>
        <label>会员等级:</label>
        <Select style="width:100px" v-model="level">
          <Option value="0" disabled>请选择</Option>
          <Option value="1">未付费会员</Option>
          <Option value="2">普通会员</Option>
          <Option value="3">银卡会员</Option>
          <Option value="4">金卡会员</Option>
        </Select>
        <label for="">子账号推广信息:</label>
        <Select style="width:100px" v-model="show">
          <Option value="0">显示</Option>
          <Option value="1">未付费会员</Option>
        </Select>
        <label for="">是否代理:</label>
        <Select style="width:100px" v-model="agency">
          <Option value="0" disabled>请选择</Option>
          <Option value="1">不是代理</Option>
          <Option value="2">代理</Option>
        </Select>
      </li>
      <li>
        <label for="">注册时间:</label>
        <DatePicker type="date" confirm placeholder="选择日期" style="width:120px"></DatePicker>&nbsp;-
        <DatePicker type="date" confirm placeholder="选择日期" style="width: 120px"></DatePicker>
        <button class="btn1" @click="flag = false">基本筛选</button>
        <button class="btn2">查询</button>
      </li>
    </ul>
    <div class="detail-content">
     <table-page :data='data' :columns='columns'></table-page>
    </div>
  </div>
</template>

<script>
import city from '@/components/city'
import tablePage from '@/components/table'

let columns = [
  {
    type:'index',
    title:'序号'
  },
  {
    title:'添加者',
    key:'add'
  },
  {
    title:'新增账号',
    key:'account'
  },
  {
    title:'添加时间',
    key:'addTime'
  },
  {
    title:'注册时间',
    key:'registerTime'
  },
  {
    title:'开户时间',
    key:'open'
  },
  {
    title:'是否认证',
    key:'certif'
  },
  {
    title:'链接推广',
    key:'share'
  },
  {
    title:'操作',
    key:'set'
  }
],
data = [
  {
    add:'zhangs@53ks.com',
    account:'zhangs@53ks.com',
    addTime:'2017-10-10 10:10 :10',
    registerTime:'2017-10-10 10:10 :10',
    open:'2017-10-10 10:10 :10',
    certif:'已认证',
    share:"。。。。。。。。。。。。。。。。",
    set:'凄凄切切群群群群群群群群群群群群群群群群群群群群'
  }
];

export default {
  data() {
    return {
      open: '0',
      state: '0',
      people: '0',
      share: '0',
      name: '0',
      level: '0',
      show: '0',
      agency: '0',
      flag: false,
      columns,
      data
    }
  },
  components: {
    city,
    tablePage
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.open-detail {
  margin: 10px 0 0 30px;
  font-family: MicrosoftYaHei;
  font-size: 14px;
  color: #2c2c2c;
  letter-spacing: 1px;
  .label() {
    display: inline-block;
    margin-right: 10px;
    text-align: right;
  }
  .open-detail-top {
    margin-bottom: 40px;
    &>li {
      margin-bottom: 15px;
      &>input {
        background: #ffffff;
        border: 1px solid #bcbcbc;
        border-radius: 2px;
        width: 148px;
        height: 30px;
      }
      button:nth-of-type(1) {
        background: #f7f7f7;
        color: #5a5a5a;
        border: 1px solid #dddddd;
        width: 94px;
        height: 30px;
        margin-left: 50px;
        margin-right: 20px;
      }
      button:nth-of-type(2) {
        background: #2c87ea;
        width: 64px;
        height: 32px;
      }
    }
    label {
      .label;
      width: 65px;
      margin-left: 40px;
      &:first-child {
        margin-left: 0;
      }
    }
  }
  .detail-filter {
    &>li {
      margin-bottom: 15px;
      label {
        .label;
        &:nth-of-type(1),
        &:nth-of-type(3) {
          width: 65px;
        }
        &:nth-of-type(2) {
          margin-left: 25px;
          width: 110px;
        }
        &:nth-of-type(3) {
          margin-left: 13px;
        }
      }
      .btn1 {
        background: #f7f7f7;
        border: 1px solid #dddddd;
        width: 94px;
        height: 30px;
        color: #5a5a5a;
        margin-left: 550px;
        margin-right: 20px;
      }
      .btn2 {
        background: #2c87ea;
        width: 64px;
        height: 32px;
      }
    }
  }
}
</style>
