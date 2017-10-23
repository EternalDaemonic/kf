<template>
<div>  
  <div class="recharge"  v-show="flag">
    <div class="recharge-top">
      <dt>余额</dt>
      <dd>￥1000.00</dd>
    </div>
    <div class="recharge-btn" :class="{'comm':isA}" @click="to">网上银行充值</div>
    <div class="recharge-btn recharge-btn1" :class="{'comm':!isA}" @click="have">银行汇款充值</div>
    <hr />
    <component :is='currentView' v-on:child='change'></component>
  </div>
  <div class="recharge-center" v-show="!flag">
    <p>充值金额:<b>1000.00</b> 元</p>
    <h4>您可以通过以下支付网关进行充值</h4>
    <figure>
      <div v-for="src in imgSrc1" :key="src.val" class="payment" @click="type = src.val" :class="{'active':src.val == type}">
        <img  :src='src.name' alt="">
      </div>
    </figure>
    <h4>
      您也可以使用以下网上银行进行充值
    </h4>
    <figure>
      <div v-for="src in imgSrc2" :key="src.val" class="paybank"  @click="type = src.val" :class="{'active':src.val == type}">
        <img  :src='src.name' alt="">
      </div>
    </figure>
    <button class="btn1" @click="flag = true">上一步</button>
    <button class="btn2">立即充值</button>
  </div>
</div>

</template>

<script>
import eBank from "@/components/voucher-center/recharge/E-Bank";
import bank from "@/components/voucher-center/recharge/bank";
//引入图片
import alipay from "./../../assets/img/voucher-center/alipay.png";
import wx from "./../../assets/img/voucher-center/wx.png";
import cft from "./../../assets/img/voucher-center/cft.png";
import kq from "./../../assets/img/voucher-center/kq.png";

import ICBC from "./../../assets/img/voucher-center/ICBC.png";
import ZS from "./../../assets/img/voucher-center/zs.png";
import CCB from "./../../assets/img/voucher-center/CCB.png";
import ABC from "./../../assets/img/voucher-center/ABC.png";
import CHINA from "./../../assets/img/voucher-center/china.png";
import BJ from "./../../assets/img/voucher-center/bj.png";
import ZGGD from "./../../assets/img/voucher-center/zggd.png";
import MS from "./../../assets/img/voucher-center/ms.png";
import ZX from "./../../assets/img/voucher-center/zx.png";
import PA from "./../../assets/img/voucher-center/pa.png";
import JT from "./../../assets/img/voucher-center/jt.png";
import PF from "./../../assets/img/voucher-center/pf.png";
import YZ from "./../../assets/img/voucher-center/yz.png";
import XY from "./../../assets/img/voucher-center/xy.png";
import HX from "./../../assets/img/voucher-center/hx.png";
import NB from "./../../assets/img/voucher-center/nb.png";
export default {
  data() {
    return {
      currentView: "eBank",
      isA: true,
      flag: true,
      imgSrc1: [{val:'alipay',name:alipay}, {val:'wx',name:wx},{val:'cft',name:cft}, {val:'kq',name:kq}],
      imgSrc2: [
        {
          val: "ICBC",
          name: ICBC
        },
        {
          val: "CMB",
          name: ZS
        },
        {
          val: "CCB",
          name: CCB
        },
        {
          val: "ABC",
          name: ABC
        },
        {
          val: "CHINA",
          name: CHINA
        },
        {
          val: "BJ",
          name: BJ
        },
        {
          val: "ZGGD",
          name: ZGGD
        },
        {
          val: "MS",
          name: MS
        },
        {
          val: "ZX",
          name: ZX
        },
        {
          val: "PA",
          name: PA
        },
        {
          val: "JT",
          name: JT
        },
        {
          val: "PF",
          name: PF
        },
        {
          val: "YZ",
          name: YZ
        },
        {
          val: "XY",
          name: XY
        },
        {
          val: "HX",
          name: HX
        },
        {
          val: "NB",
          name: NB
        }
      ],
      type:''
    };
  },
  methods: {
    to() {
      this.currentView = "eBank";
      this.isA = true;
    },
    have() {
      this.currentView = "bank";
      this.isA = false;
    },
    //进入充值中心
    change() {
      this.flag = false;
    }
  },
  components: {
    eBank,
    bank
  }
};
</script>

<style lang="less">
.recharge {
  margin-top: 10px;
  font-family: MicrosoftYaHei;
  font-size: 14px;
  color: #2c2c2c;
  letter-spacing: 1px;
  line-height: 15px;
  .recharge-top {
    margin-bottom: 40px;
    dt,
    dd {
      display: inline-block;
    }
    dd {
      font-weight: bolder;
    }
  }
  .recharge-btn {
    display: inline-block;
    width: 150px;
    line-height: 32px;
    text-align: center;
    height: 32px;
    border: 1px solid #ddd;
  }
  .recharge-btn1 {
    margin-left: -6px;
  }
  .comm {
    border-top: 1px solid #2c87ea;
    border-bottom: none;
    background: #fff;
    color: #2c2c2c;
  }
  hr {
    margin-top: -1px;
  }
}
.recharge-center {
  font-family: MicrosoftYaHei;
  font-size: 14px;
  color: #2c2c2c;
  letter-spacing: 1px;
  line-height: 15px;
  margin-top: 10px;
  p {
    margin-bottom: 40px;
    b {
      color: #ff7b2b;
    }
    span {
      float: right;
    }
  }
  h4 {
    color: #a2a2a2;
    letter-spacing: 1px;
    font-weight: normal;
    margin-bottom: 21px;
    margin-top: 40px;
    &:first-child {
      margin-bottom: 30px;
    }
  }
  .pay() {
    display: inline-block;
    text-align: center;
    background: #ffffff;
    width: 198px;
    vertical-align: middle;
    &:before {
      content: "";
      display: inline-block;
      height: 100%;
      vertical-align: middle;
      width: 0;
    }
    img {
      vertical-align: middle;
    }
  }
  figure {
    width: 930px;
    min-width: 810px;
  }
  .payment {
    .pay;
    height: 98px;
    &:hover {
      border: 1px solid #2c87ea;
    }
  }
  .paybank {
    .pay;
    border: 1px solid #cfcfcf;
    margin-right: 30px;
    height: 58px;
    margin-top: 30px;
    &:hover {
      border: 1px solid #2c87ea;
    }
  }
  .active {
    border: 1px solid #2c87ea;
  }
  .btn1 {
    background: #f7f7f7;
    border: 1px solid #dddddd;
    width: 94px;
    height: 32px;
    margin-right: 15px;
    color: #5a5a5a;
  }
  .btn2 {
    background: #2c87ea;
    width: 96px;
    height: 32px;
    margin-top: 50px;
  }
}
</style>
