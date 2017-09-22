<template>
  <!-- 头部 -->
  <div id="app">
    <div class="header">
      <div class="logo">
        <img src="./assets/img/logo.png" alt="图片未加载">
      </div>
      <span>
        进入工作平台
      </span>
      <img src="./assets/img/right.png" alt="图片未加载" class="header_right">
    </div>

    <div class="content">
      <!-- 侧边菜单 -->
      <ul class="menu">
        <li v-for='(item,index) in items' :key="item.title" @click="change(index,item.href)" :style="{background:index1 == index?color2:color1}">
          <router-link :to="item.href">{{item.title}}</router-link>
        </li>
      </ul>
      <!-- 显示模块 -->
      <div class="view">
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
      margin: 15px 50px 15px 0;
      float: right;
    }
  }

  .content {
    width: 1920px;
  }

  .menu {
    width: 220px;
    height: 890px;
    background-color: #3a4952;
    float: left;
    height: 890px;
    li {
      height: 55px;
      line-height: 55px;
      &:first-child {
        background: #2c3c46;
      }
      a {
        font-family: MicrosoftYaHei;
        letter-spacing: 2px;
        font-size: 14px;
        color: white;
        margin-left: 60px;
      }
    }
  }

  .view {
    width: 980px;
    clear: both;
    display: inline-block;
  }

</style>
<script>
  export default {
    data() {
      return {
        items: [{
            title: "我的信息",
            href: {
              name: "account-information"
            }
          },
          {
            title: "充值中心",
            href: {
              name: "recharge"
            }
          },
          {
            title: "我的产品",
            href: {
              name: "all-products"
            }
          },
          {
            title: "我的订单",
            href: {
              name: "new-order"
            }
          },
          {
            title: "我的代理",
            href: {
              name: "member-add"
            }
          },
          {
            title: "我要赚钱",
            href: {
              name: "begin-promotion"
            }
          }
        ],
        color1: '#3a4952',
        color2: '#2c3c46',
        index1: 0,
        key: ''
      }
    },
    methods: {
      change: function (index, name) {
        this.index1 = index;
        this.$store.commit('MOVE', {
          distance: 58,
          sub: 0
        })
        this.$router.push({
          path: name.path
        });
      }
    }
  }

</script>
