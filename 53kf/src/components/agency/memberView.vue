<template>
  <div class="mbr-view">
    <ul class="mbr-view-top">
      <li>
        <dt>我的代理区域：</dt>
        <dd>浙江省&nbsp;杭州市</dd>
      </li>
      <li><input type="text" placeholder="ABC@tom.com、123@qq.com">
        <button>查询</button>
      </li>
      <li>
        <button class="btn" v-for='(item,index) in items' :key='item.val' :class="{'btn-active':isA == item.val}" @click='toggle(index)'>{{item.name}}</button>
        <hr>
      </li>
    </ul>
    <div class="mbr-view-content">
      <Row class="one">
        <Col span="3">全称</Col>
        <Col span="3">账号</Col>
        <Col span="3">联系人</Col>
        <Col span="3">手机号</Col>
        <Col span="3">网址</Col>
        <Col span="3">注册时间</Col>
        <Col span="3">认证状态</Col>
        <Col span="3">操作</Col>
      </Row>
      <!-- v-if='select == "订单状态" ? true : select == item.set' -->
      <div class='mbr-view-table'>
        <Row v-for="item in data" :key='item.set'>
          <Col v-for="col in item" :key='col' span="3">{{col}}</Col>
        </Row>
      </div>
      <Page :total="dataCount" :page-size="pageSize" show-total @on-change="changepage" show-elevator class="page"></Page>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          val: 0,
          name: '已添加会员'
        },
        {
          val: 1,
          name: '直属会员'
        },
        {
          val: 2,
          name: '非区域会员'
        }
      ],
      isA: 0,
      data: [],
      ajaxData: [],
      dataCount: '0',
      pageSize: 10
    }
  },
  methods: {
    toggle(index) {
      this.isA = index;
    },
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
    }
  },
  created() {
    this.handData();
  }
}
let data = [
  {
    name: '全称',
    account: 1442800,
    phone: '12345678901',
    lxr: '张三',
    wz: 'www.sohu.com',
    time: '2017/09/10 13:10:10',
    state: '已认证',
    set: '等待返利',
  },
  {
    name: '全称',
    account: 1442800,
    phone: '12345678901',
    lxr: '张三',
    wz: 'www.sohu.com',
    time: '2017/09/10 13:10:10',
    state: '已认证',
    set: '等待返利',
  },
  {
    name: '全称',
    account: 1442800,
    phone: '12345678901',
    lxr: '张三',
    wz: 'www.sohu.com',
    time: '2017/09/10 13:10:10',
    state: '已认证',
    set: '等待返利',
  },
  {
    name: '全称',
    account: 1442800,
    phone: '12345678901',
    lxr: '张三',
    wz: 'www.sohu.com',
    time: '2017/09/10 13:10:10',
    state: '已认证',
    set: '等待返利',
  },
  {
    name: '全称',
    account: 1442800,
    phone: '12345678901',
    lxr: '张三',
    wz: 'www.sohu.com',
    time: '2017/09/10 13:10:10',
    state: '已认证',
    set: '等待返利',
  },
  {
    name: '全称',
    account: 1442800,
    phone: '12345678901',
    lxr: '张三',
    wz: 'www.sohu.com',
    time: '2017/09/10 13:10:10',
    state: '已认证',
    set: '等待返利',
  },
  {
    name: '全称',
    account: 1442800,
    phone: '12345678901',
    lxr: '张三',
    wz: 'www.sohu.com',
    time: '2017/09/10 13:10:10',
    state: '已认证',
    set: '等待返利',
  },
  {
    name: '全称',
    account: 1442800,
    phone: '12345678901',
    lxr: '张三',
    wz: 'www.sohu.com',
    time: '2017/09/10 13:10:10',
    state: '已认证',
    set: '等待返利',
  },
  {
    name: '全称',
    account: 1442800,
    phone: '12345678901',
    lxr: '张三',
    wz: 'www.sohu.com',
    time: '2017/09/10 13:10:10',
    state: '已认证',
    set: '等待返利',
  },
  {
    name: '全称',
    account: 1442800,
    phone: '12345678901',
    lxr: '张三',
    wz: 'www.sohu.com',
    time: '2017/09/10 13:10:10',
    state: '已认证',
    set: '等待返利',
  },
  {
    name: '全称',
    account: 1442800,
    phone: '12345678901',
    lxr: '张三',
    wz: 'www.sohu.com',
    time: '2017/09/10 13:10:10',
    state: '已认证',
    set: '等待返利',
  },
  {
    name: '全称',
    account: 1442800,
    phone: '12345678901',
    lxr: '张三',
    wz: 'www.sohu.com',
    time: '2017/09/10 13:10:10',
    state: '已认证',
    set: '等待返利',
  },
  {
    name: '全称',
    account: 1442800,
    phone: '12345678901',
    lxr: '张三',
    wz: 'www.sohu.com',
    time: '2017/09/10 13:10:10',
    state: '已认证',
    set: '等待返利',
  },
  {
    name: '全称',
    account: 1442800,
    phone: '12345678901',
    lxr: '张三',
    wz: 'www.sohu.com',
    time: '2017/09/10 13:10:10',
    state: '已认证',
    set: '等待返利',
  },
  {
    name: '全称',
    account: 1442800,
    phone: '12345678901',
    lxr: '张三',
    wz: 'www.sohu.com',
    time: '2017/09/10 13:10:10',
    state: '已认证',
    set: '等待返利',
  },
  {
    name: '全称',
    account: 1442800,
    phone: '12345678901',
    lxr: '张三',
    wz: 'www.sohu.com',
    time: '2017/09/10 13:10:10',
    state: '已认证',
    set: '等待返利',
  },
  {
    name: '全称',
    account: 1442800,
    phone: '12345678901',
    lxr: '张三',
    wz: 'www.sohu.com',
    time: '2017/09/10 13:10:10',
    state: '已认证',
    set: '等待返利',
  },
  {
    name: '全称',
    account: 1442800,
    phone: '12345678901',
    lxr: '张三',
    wz: 'www.sohu.com',
    time: '2017/09/10 13:10:10',
    state: '已认证',
    set: '等待返利',
  },
  {
    name: '全称',
    account: 1442800,
    phone: '12345678901',
    lxr: '张三',
    wz: 'www.sohu.com',
    time: '2017/09/10 13:10:10',
    state: '已认证',
    set: '等待返利',
  },
  {
    name: '全称',
    account: 1442800,
    phone: '12345678901',
    lxr: '张三',
    wz: 'www.sohu.com',
    time: '2017/09/10 13:10:10',
    state: '已认证',
    set: '等待返利',
  },
  {
    name: '全称',
    account: 1442800,
    phone: '12345678901',
    lxr: '张三',
    wz: 'www.sohu.com',
    time: '2017/09/10 13:10:10',
    state: '已认证',
    set: '等待返利',
  },
  {
    name: '全称',
    account: 1442800,
    phone: '12345678901',
    lxr: '张三',
    wz: 'www.sohu.com',
    time: '2017/09/10 13:10:10',
    state: '已认证',
    set: '等待返利',
  },
  {
    name: '全称',
    account: 1442800,
    phone: '12345678901',
    lxr: '张三',
    wz: 'www.sohu.com',
    time: '2017/09/10 13:10:10',
    state: '已认证',
    set: '等待返利',
  },
  {
    name: '全称',
    account: 1442800,
    phone: '12345678901',
    lxr: '张三',
    wz: 'www.sohu.com',
    time: '2017/09/10 13:10:10',
    state: '已认证',
    set: '等待返利',
  },
  {
    name: '全称',
    account: 1442800,
    phone: '12345678901',
    lxr: '张三',
    wz: 'www.sohu.com',
    time: '2017/09/10 13:10:10',
    state: '已认证',
    set: '等待返利',
  },
  {
    name: '全称',
    account: 1442800,
    phone: '12345678901',
    lxr: '张三',
    wz: 'www.sohu.com',
    time: '2017/09/10 13:10:10',
    state: '已认证',
    set: '等待返利',
  },
  {
    name: '全称',
    account: 1442800,
    phone: '12345678901',
    lxr: '张三',
    wz: 'www.sohu.com',
    time: '2017/09/10 13:10:10',
    state: '已认证',
    set: '等待返利',
  },
  {
    name: '全称',
    account: 1442800,
    phone: '12345678901',
    lxr: '张三',
    wz: 'www.sohu.com',
    time: '2017/09/10 13:10:10',
    state: '已认证',
    set: '等待返利',
  },
  {
    name: '全称',
    account: 1442800,
    phone: '12345678901',
    lxr: '张三',
    wz: 'www.sohu.com',
    time: '2017/09/10 13:10:10',
    state: '已认证',
    set: '等待返利',
  },
  {
    name: '全称',
    account: 1442800,
    phone: '12345678901',
    lxr: '张三',
    wz: 'www.sohu.com',
    time: '2017/09/10 13:10:10',
    state: '已认证',
    set: '等待返利',
  },
  {
    name: '全称',
    account: 1442800,
    phone: '12345678901',
    lxr: '张三',
    wz: 'www.sohu.com',
    time: '2017/09/10 13:10:10',
    state: '已认证',
    set: '等待返利',
  },
  {
    name: '全称',
    account: 1442800,
    phone: '12345678901',
    lxr: '张三',
    wz: 'www.sohu.com',
    time: '2017/09/10 13:10:10',
    state: '已认证',
    set: '等待返利',
  },
  {
    name: '全称',
    account: 1442800,
    phone: '12345678901',
    lxr: '张三',
    wz: 'www.sohu.com',
    time: '2017/09/10 13:10:10',
    state: '已认证',
    set: '等待返利',
  },
  {
    name: '全称',
    account: 1442800,
    phone: '12345678901',
    lxr: '张三',
    wz: 'www.sohu.com',
    time: '2017/09/10 13:10:10',
    state: '已认证',
    set: '等待返利',
  },
  {
    name: '全称',
    account: 1442800,
    phone: '12345678901',
    lxr: '张三',
    wz: 'www.sohu.com',
    time: '2017/09/10 13:10:10',
    state: '已认证',
    set: '等待返利',
  },
  {
    name: '全称',
    account: 1442800,
    phone: '12345678901',
    lxr: '张三',
    wz: 'www.sohu.com',
    time: '2017/09/10 13:10:10',
    state: '已认证',
    set: '等待返利',
  },
]
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
button {
  outline: none;
}

.mbr-view {
  font-family: MicrosoftYaHei;
  font-size: 14px;
  color: #2c2c2c;
  letter-spacing: 1px;
  margin-top: 10px;
  margin-left: 30px;
  .mbr-view-top {
    list-style-type: none;
    li {
      margin-bottom: 30px;
      dd,
      dt {
        display: inline-block;
      }
      &:nth-child(2) {
        margin-bottom: 20px;
        input {
          border: 1px solid #bcbcbc;
          border-radius: 2px;
          width: 248px;
          height: 30px;
          margin-right: 18px;
          text-indent: 7px;
        }
        &>button {
          background: #2c87ea;
          width: 64px;
          height: 32px;
          border: none;
          color: #fff;
        }
      }
      .btn {
        background: #fbfaf8;
        border: 1px solid #dddddd;
        width: 149px;
        height: 41px;
        color: #929292;
        margin-left: -6px;
        &:first-child {
          margin-left: 0;
        }
      }
      .btn+hr{
        margin-top: -1px;
        margin-bottom: 0;
      }
      .btn-active {
        border-top: 1px solid #2C87EA;
        border-bottom: none;
        background: #fff;
        color: #2c2c2c;
      }
    }
  }

  .ivu-row {
    text-align: center;
    min-width: 1200px;
    font-family: MicrosoftYaHei;
    font-size: 14px;
    height: 50px;
    color: #4b4b4b;
    letter-spacing: 0;
    line-height: 50px;
    border-bottom: 1px solid #ddd;
    overflow: hidden;
    &:hover {
      background: #f0fbff;
    }
  }
  .mbr-view-table {
    height: 510px;
    margin-bottom: 20px;
  }
  .page{
    float: right;
  }
  .one:hover {
    background: #fff;
    padding-bottom: 20px;
  }
}
</style>
