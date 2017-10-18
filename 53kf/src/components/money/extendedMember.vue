<template>
  <div class="extend">
    <div class="extend-top">
      <div>
        您有
        <span>22</span>枚免开令<br> 最近到期时间为
        <span>2017-08-31</span>
      </div>
      <Tooltip placement="right-end">
        <Button>什么是免开令</Button>
        <div slot="content">
          <p>使用免开令，免预存1000元即可直接</p>
          <p>开户。仅限赠予本账户推广的用户。</p>
        </div>
      </Tooltip>
    </div>
    <div>
      <Table :columns="columns" :data="data" style="border:none;height:500px"></Table>
      <Page :total="dataCount" :page-size="pageSize" show-total @on-change="changepage" show-elevator v-show="flag"></Page>
    </div>
  </div>
</template>

<script>
let data = [
  {
    account: 'zhangyl@53kf.com',
    time: '2017-10-10 10:10:10',
    open: '已开户'
  },
  {
    account: 'zhangyl@53kf.com',
    time: '2017-10-10 10:10:10',
    open: '已开户'
  },
  {
    account: 'zhangyl@53kf.com',
    time: '2017-10-10 10:10:10',
    open: '已开户'
  }
]
export default {
  data() {
    return {
      columns: [
        {
          type: 'index',
          title: '序号'
        },
        {
          title: '用户账号',
          key: 'account'
        },
        {
          title: '注册时间',
          key: 'time'
        },
        {
          title: '是否开户',
          key: 'open'
        }
      ],
      pageSize: 10,
      dataCount: '0',
      ajaxData: [],
      data: [],
      flag: false
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
        this.data = this.ajaxData.slice(0, this.pageSize);
        this.flag = true;
      }
    },
    changepage(index) {
      let _start = (index - 1) * this.pageSize;
      let _end = index * this.pageSize;
      this.data = this.ajaxData.slice(_start, _end);
    }
  },
  created() {
    this.handData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.extend {
  margin-left: 30px;
  margin-top: 10px;
  font-family: MicrosoftYaHei;
  font-size: 14px;
  color: #2c2c2c;
  letter-spacing: 1px;
  .extend-top {
    margin-bottom: 40px;
    &>div {
      display: inline-block;
      margin-right: 50px;
      &>span:nth-of-type(1) {
        color: #ff7979;
        font-weight: bolder;
      }
      span:nth-of-type(2) {
        font-weight: bolder;
      }
    }
    .ivu-btn {
      background: #2c87ea;
      width: 128px;
      height: 32px;
      color: #fff;
      border-radius: 0;
    }
  }
}

.ivu-tooltip-popper[x-placement^=right] .ivu-tooltip-arrow {
  border-right-color: #fbfaf8;
}
</style>
