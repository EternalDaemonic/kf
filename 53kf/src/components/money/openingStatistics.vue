<template>
  <div class="open-statisttics">
    <div class="statisttics-top">
      <label for="">统计方式:</label>
      <Select v-model="type" style="width:100px" @on-change='toggle'>
        <Option value="0">开户统计</Option>
        <Option value="1">推广效果</Option>
      </Select>
      <div class="sta-toggle" v-show="flag1">
        <label for=""> 时间搜索方式:</label>
        <Select v-model="time" style="width:100px">
          <Option value="0">添加时间</Option>
          <Option value="1">激活时间</Option>
          <Option value="2">开户时间</Option>
        </Select>
      </div>
      <div class="sta-toggle" v-show="!flag1">
        <label for="">链接至:</label>
        <Select v-model="share" style="width:100px">
          <Option value="0">请选择</Option>
          <Option value="1">S首页</Option>
        </Select>
        <label for="">推广链接别名:</label>
        <Select v-model="name" style="width:100px">
          <Option value="0">请选择</Option>
        </Select>
      </div>

      <label for="">时间:</label>
      <DatePicker type="date" confirm placeholder="选择日期" :options='options1' style="width:120px"></DatePicker>&nbsp;-
      <DatePicker type="date" confirm placeholder="选择日期" style="width: 120px"></DatePicker>
      <button @click="change">查询</button>
    </div>
    <div class="statisttics-content">
      <Table :columns="columns" height='550' style="border:none" :data='data'></Table>
      <Page :total="dataCount" :page-size="pageSize" show-total @on-change="changepage" show-elevator v-show="flag" class="page"></Page>
    </div>
  </div>
</template>

<script>
let columns = [
  {
    type: 'index',
    title: '序号'
  },
  {
    title: '账号',
    key: 'account'
  },
  {
    title: '已添加账号',
    key: 'add'
  },
  {
    title: '已激活账号',
    key: 'active'
  },
  {
    title: '认证且开户',
    key: 'certif'
  },
  {
    title: '认证未开户',
    key: 'ucertif'
  },
  {
    title: '开户未认证',
    key: 'khwrz'
  }
],
  columns1 = [
    {
      type: 'index',
      title: '序号'
    },
    {
      title: '推广链接',
      key: 'share'
    },
    {
      title: '展现量',
      key: 'show'
    },
    {
      title: '点击量',
      key: 'active'
    },
    {
      title: '注册量',
      key: 'register'
    },
    {
      title: '开户量',
      key: 'open'
    },
    {
      title: '认证开户量',
      key: 'openctif'
    },
    {
      title: '银卡会员数',
      key: 'sliver'
    },
    {
      title: '金卡会员数',
      key: 'gold'
    }
  ],
  data = [
    {
      account: 'zhangyl@53kf.com',
      add: 'zhaozh@53kf.com',
      active: 'zhangyl@53kf.com',
      certif: 'zhangyl@53kf.com',
      ucertif: 'zhangyl@53kf.com',
      khwrz: 'zhangyl@53kf.com',
    },
    {
      account: 'zhangyl@53kf.com',
      add: 'zhaozh@53kf.com',
      active: 'zhangyl@53kf.com',
      certif: 'zhangyl@53kf.com',
      ucertif: 'zhangyl@53kf.com',
      khwrz: 'zhangyl@53kf.com',
    },
    {
      account: 'zhangyl@53kf.com',
      add: 'zhaozh@53kf.com',
      active: 'zhangyl@53kf.com',
      certif: 'zhangyl@53kf.com',
      ucertif: 'zhangyl@53kf.com',
      khwrz: 'zhangyl@53kf.com',
    }
  ],
  data1 = [
    {
      share: 'http://www.53kf.com/?controller=reg&proxy=38748&yx_from=38748',
      show: '10000',
      active: '500',
      register: '9000',
      open: '1000',
      openctif: '900',
      sliver: '100',
      gold: '50'
    }
  ]
export default {
  data() {
    return {
      type: '0',
      time: '0',
      share: '0',
      name: '0',
      options1: {
        shortcuts: [
          {
            text: '今天',
            value() {
              return new Date();
            },
            onClick: (picker) => {
              this.$Message.info('点击了今天');
            }
          },
          {
            text: '昨天',
            value() {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              return date;
            },
            onClick: (picker) => {
              this.$Message.info('点击了昨天');
            }
          },
          {
            text: '一周前',
            value() {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              return date;
            },
            onClick: (picker) => {
              this.$Message.info('点击了一周前');
            }
          }
        ]
      },
      columns,
      flag1: true,
      pageSize: 10,
      dataCount: '0',
      ajaxData: [],
      data: [],
      flag: false
    }
  },
  methods: {
    toggle() {
      if (this.type == '0') {
        this.flag1 = true;
      } else {
        this.flag1 = false;
      }
    },
    handData() {
      if (this.type == '0') {
        this.columns = columns;
        this.ajaxData = data;
      } else {
        this.columns = columns1;
        this.ajaxData = data1;
      } 
      this.dataCount = this.ajaxData.length;
      if (this.dataCount < this.pageSize) {
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
    },
    change() {
      this.handData();
    }
  },
  created() {
    this.handData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.open-statisttics {
  font-family: MicrosoftYaHei;
  font-size: 14px;
  color: #2c2c2c;
  letter-spacing: 1px;
  margin-left: 30px;
  margin-top: 10px;
  .statisttics-top {
    margin-bottom: 20px;
    .sta-toggle {
      display: inline-block;
      margin-left: 40px;
    }
    label {
      margin-right: 15px;
      margin-left: 40px;
      &:first-child {
        margin-left: 0;
      }
    }
    button {
      background: #2c87ea;
      width: 64px;
      height: 32px;
      margin-left: 50px;
    }
  }
}
</style>
