<template>
  <!-- 头部 -->
  <div id="app">
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
      <ul class="menu" :style="{height:clientHeight+'px'}">
        <li v-for='(item,index) in items' :key="item.title" @click="change(index,item.href)" :style="{background:index1 == index?color2:color1}">
          <img :src="item.src" alt="">
          <router-link :to="item.href">{{item.title}}</router-link>
        </li>
      </ul>
      <!-- 显示模块 -->
      <div class="view" :style="{width:clientWidth - 30+'px',height:clientHeight+'px'}">
        <router-view></router-view>
      </div>
    </div>
     <div class="masking" v-show="masking" :style="{'width':clientWidth+270+'px','height':clientHeight+50 + 'px'}"></div>
  </div>
</template>
<style lang="less">
@import "./assets/less/common.less";
body {
  overflow: hidden;
}
#app {
  width: 100%;
  // height: 940px;
  overflow: hidden;
  // min-height: 800px;
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
    color: #ffffff;
  }
  img {
    width: 25px;
    margin-top: 12.5px;
  }
  .logo {
    width: 88px;
    .a;
  }
  span {
    width: 128px;
    .a;
  }
  &_right {
    margin: 5px 50px 15px 0;
    float: right;
  }
}

.content {
  width: 100%;
  min-width: 1366px;
  overflow: hidden;
}

.menu {
  width: 220px;
  background-color: #3a4952;
  float: left;
  height: 890px;
  margin-right: 30px;
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
  overflow: auto;
  clear: both;
  display: inline-block;
}
.masking {
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0.5;
  background: #ffffff;
  z-index: 1;
}
</style>
<script>
import logo from "./assets/img/new.svg";
import agency from "./assets/img/agency.svg";
import product from "./assets/img/voucher.svg";
import order from "./assets/img/order.svg";
import memberAdd from "./assets/img/member-add.svg";
import money from "./assets/img/money.svg";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      clientHeight: function(state) {
        // if(state.size.height < 680){
        //   return 680
        // }
        return state.size.height - 50;
        // let height = document.getElementsByClassName('view')[0].clientHeight;
        // if (state.size.height < height){
        //   return height
        // }else{
        //   return state.size.height - 50
        // }
      },
      clientWidth: state => state.size.width - 250,
      masking:state => state.state.masking
    })
  },
  data() {
    return {
      items: [
        {
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
          title: "产品开通",
          href: {
            name: "open-products"
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
      color1: "#3a4952",
      color2: "#2c3c46",
      index1: 0,
      key: ""
    };
  },
  methods: {
    change: function(index, name) {
      this.index1 = index;
      this.$store.commit("MOVE", {
        distance: 28,
        sub: 0
      });
      this.$router.push({
        path: name.path
      });
    }
  },
  mounted() {
    const that = this;
    window.onresize = function temp() {
      that.$store.commit("SIZE", {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      });
    };
  },
  created() {
    const that = this;
    window.onload = function temp() {
      that.$store.commit("SIZE", {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      });
    };
  }
};
</script>