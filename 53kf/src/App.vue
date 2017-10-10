<template>
  <!-- 头部 -->
  <div id="app" :style="{height:clientHeight}">
    <div class="header">
      <div class="logo">
        <img src="./assets/img/logo.svg" alt="图片未加载">
      </div>
      <span>
        进入工作平台
      </span>
      <img src="./assets/img/head-portrait.svg" alt="图片未加载" class="header_right">
    </div>

    <div class="content">
      <!-- 侧边菜单 -->
      <ul class="menu" :style="{height:clientHeight}">
        <li v-for='(item,index) in items' :key="item.title" @click="change(index,item.href)" :style="{background:index1 == index?color2:color1}">
          <img :src="item.src" alt="">
          <router-link :to="item.href">{{item.title}}</router-link>
        </li>
      </ul>
      <!-- 显示模块 -->
      <div class="view" :style="{width:clientWidth}">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<style lang="less">
@import './assets/less/common.less';

#app {
  width: 100%;
  height: 940px;
  overflow: hidden;
}

.header {
  width: 100%;
  background-color: #373d41;
  height: 50px;
  color: white;
  font-size: 14px;
  line-height: 50px;
  vertical-align: middle;
  overflow: hidden;
  .a {
    display: inline-block;
    text-align: center;
    border-right: 1px solid#1e252a;
  }
  img {
    vertical-align: middle;
  }
  .logo {
    width: 88px;
    .a
  }
  span {
    width: 128px;
    .a
  }
  &_right {
    margin: 5px 50px 15px 0;
    float: right;
  }
}

.content {
  width: 100%;
  min-width: 1366px;
}

.menu {
  width: 220px;
  background-color: #3a4952;
  float: left;
  height: 890px;
  li {
    width: 220px;
    height: 55px;
    line-height: 55px;
    &:first-child {
      background: #2c3c46;
    }
    img {
      margin-left: 31px;
      margin-right: 25px;
    }
    a {
      font-family: MicrosoftYaHei;
      letter-spacing: 2px;
      font-size: 14px;
      color: white;
    }
  }
}

.view {
  width: 100%;
  margin-left: 0;
  overflow: hidden;
  clear: both;
  display: inline-block;
}
</style>
<script>
import logo from './assets/img/new.svg'
import agency from './assets/img/agency.svg'
import product from './assets/img/voucher.svg'
import order from './assets/img/order.svg'
import memberAdd from './assets/img/member-add.svg'
import money from './assets/img/money.svg'
export default {
  data() {
    return {
      items: [{
        title: "我的信息",
        href: {
          name: "account-information"
        },
        src: logo
      },
      {
        title: "充值中心",
        href: {
          name: "recharge"
        },
        src: agency
      },
      {
        title: "我的产品",
        href: {
          name: "all-products"
        },
        src: product
      },
      {
        title: "我的订单",
        href: {
          name: "new-order"
        },
        src: order
      },
      {
        title: "我的代理",
        href: {
          name: "member-add"
        },
        src: memberAdd
      },
      {
        title: "我要赚钱",
        href: {
          name: "begin-promotion"
        },
        src: money
      }
      ],
      color1: '#3a4952',
      color2: '#2c3c46',
      index1: 0,
      key: '',
      clientHeight: '600px',
      clientWidth: '600px'
    }
  },
  methods: {
    change: function(index, name) {
      this.index1 = index;
      this.$store.commit('MOVE', {
        distance: 58,
        sub: 0
      })
      this.$router.push({
        path: name.path
      });
    }
  },
  mounted() {
    this.clientHeight = `${document.documentElement.clientHeight}px`;
    this.clientWidth = `${document.documentElement.clientWidth}px`;
    const that = this;
    window.onresize = function temp() {
      that.clientHeight = `${document.documentElement.clientHeight}px`;
      that.clientWidth = `${document.documentElement.clientWidth - 250}px`;
    };
  },
  created(){
    console.log(this.clientWidth)
    this.clientHeight = `${document.documentElement.clientHeight}px`;
    this.clientWidth = `${document.documentElement.clientWidth - 250}px`;
    const that = this;
     window.onload = function temp() {
      that.clientHeight = `${document.documentElement.clientHeight}px`;
      that.clientWidth = `${document.documentElement.clientWidth - 250}px`;
    };
  }
}

</script>