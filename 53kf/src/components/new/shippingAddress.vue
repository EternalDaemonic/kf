<template>
  <div class="shipping">
    <div v-for="(data,index) in items" :key="data.account">
      <h3>{{data.account}}
        <span @click="remove(index)">删除</span>
      </h3>
      <li>
        <dt>收货人：</dt>
        <dd>{{data.name}}</dd>
      </li>
      <li>
        <dt>所在地区：</dt>
        <dd>{{data.region}}</dd>
      </li>
      <li>
        <dt>详细地址：</dt>
        <dd>{{data.site}}</dd>
      </li>
      <li>
        <dt>邮政编码：</dt>
        <dd>{{data.code}}</dd>
      </li>
      <li>
        <dt>手机号码：</dt>
        <dd>{{data.phone}}</dd>
      </li>
      <li>
        <dt>固定电话：</dt>
        <dd>{{data.tel}}</dd>
      </li>
      <li>
        <dt>电子邮箱：</dt>
        <dd>{{data.email}}</dd>
      </li>
      <li class="shipping-change">
        <span>设置为默认收货地址</span>
        <span>编辑</span>
      </li>
    </div>
      <button class="button" @click="flag = true">新增收货地址</button>
    <div class="shade" v-show="flag" :style="{width:width+'px',height:height+'px'}">
    </div>
    <div class="shipping-form" v-show="flag">
      <div>
        <h4>新增收货地址</h4>
        <span @click="flag = false">
        <Icon type="ios-close-empty" size="30" color='#d8d8d8' ></Icon>
        </span>
        <hr>
      </div>
      <form action="">
        <ul>
          <li>
            <label for="">地址名称：</label><input type="text" v-model="data.account" placeholder="家，公司"></li>
          <li>
            <label for="">收件人名称：</label><input type="text" v-model="data.name"></li>
          <li>
            <label for="" >所在地区：</label>
            <city @child='region'></city>
          </li>
          <li class="shipping-site">
            <label for="">详细地址：</label>
            <textarea name="" id="" cols="30" rows="10" v-model="data.site"></textarea>
          </li>
          <li>
            <label for="">邮政编码：</label><input type="text" v-model="data.code"></li>
          <li>
            <label for="">手机号码：</label><input type="text" v-model="data.phone"></li>
          <li>
            <label for="">固定电话：</label><input type="text" v-model="data.tel"></li>
          <li>
            <label for="">电子邮箱：</label><input type="text" v-model="data.email"></li>
          <li class="shipping-radio">
            <div>
              <Icon type="ios-checkmark-empty" size='30' v-show="flag1" @click="flag1 = !flag1"></Icon>
            </div>
            <span @click="flag1 = !flag1">设为默认地址</span>
          </li>
          <li class="shipping-btn">
            <div class="btn1" @click="submit">保存</div>
            <div class="btn2" @click="flag = false">取消</div>
          </li>
        </ul>
      </form>
    </div>
  </div>
</template>

<script>
import city from "@/components/city";
import { mapState } from "vuex";
let data = [
  {
    account: "总公司",
    name: "张三",
    region: "浙江省杭州市西湖区",
    site: "紫萱路西城博司9幢4楼",
    code: "310012",
    phone: "12345678901",
    tel: "0510-46726584",
    email: "12178886@qq.com"
  },
  {
    account: "分公司",
    name: "张三",
    region: "浙江省杭州市西湖区",
    site: "紫萱路西城博司9幢4楼",
    code: "310012",
    phone: "12345678901",
    tel: "0510-46726584",
    email: "12178886@qq.com"
  }
];
export default {
  computed: {
    ...mapState({
      width: state => state.size.width,
      height: state => state.size.height
    })
  },
  data() {
    return {
      items: data,
      flag: false,
      flag1: false,
      data: {
        account: "",
        name: "",
        region: "",
        site: "",
        code: "",
        phone: "",
        tel: "",
        email: ""
      }
    };
  },
  methods: {
    region(data) {
      this.data.region = data.prov + data.city + data.district;
    },
    submit() {
      let obj = {};
      for (let i in this.data) {
        obj[i] = this.data[i];
        this.data[i] = "";
      }
      this.items.push(obj);
      this.flag = false;
    },
    remove(index) {
      // this.items.slice(index, index + 1);
    }
  },
  components: {
    city
  }
};
</script>

<style lang="less">
.shipping {
  overflow: hidden;
  font-family: MicrosoftYaHei;
  font-size: 14px;
  letter-spacing: 1px;
  line-height: 15px;
  & > div {
    display: inline-block;
    background: #ffffff;
    border: 1px solid #c3c3c3;
    &:hover {
      border: 1px solid #2c87ea;
    }
    width: 808px;
    height: 298px;
    margin-bottom: 20px;
    h3 {
      margin: 20px 0 20px 20px;
      font-size: 16px;
      color: #686868;
      letter-spacing: 1.14px;
      line-height: 15px;
      span {
        font-size: 14px;
        font-weight: normal;
        color: #ff7979;
        display: inline-block;
        margin-right: 15px;
        float: right;
      }
    }
    & > li {
      list-style: none;
      margin-left: 40px;
      height: 15px;
      margin-bottom: 15px;
      dt,
      dd {
        display: inline-block;
        width: 75px;
        height: 15px;
        color: #b0b0b0;
        line-height: 15px;
      }
      dd {
        width: 200px;
        color: #7d7d7d;
      }
    }
    .shipping-change {
      margin-bottom: 0;
      overflow: hidden;
      span {
        display: inline-block;
        color: #2c87ea;
        border: none;
        background: #fff;
        margin-right: 20px;
        float: right;
      }
    }
  }
  //新增按钮
  .button {
    background: #2c87ea;
    width: 128px;
    margin-top: 300px;
    height: 32px;
    float: right;
  }
  .btn() {
    display: inline-block;
    width: 64px;
    height: 32px;
    line-height: 32px;
    text-align: center;
  }
  //弹框
  .shipping-form {
    width: 600px;
    height: 579px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-190px, -275px);
    background: #ffffff;
    box-shadow: 0 4px 15px #b8b7b7;
    border: none;
    color: #5a5a5a;
    line-height: 15px;
    h4 {
      display: inline-block;
      font-weight: normal;
      margin: 17px 462px 18px 20px;
    }
    hr {
      margin: 0;
      margin-bottom: 13px;
    }
    form {
      & > ul {
        width: 100%;
        list-style-type: none;
        & > li {
          vertical-align: top;
          margin-bottom: 15px;
          height: 32px;
          line-height: 32px;
          margin-left: 30px;
          label {
            display: inline-block;
            width: 90px;
            text-align: right;
            margin: 0;
          }
          input {
            border: 1px solid #bcbcbc;
            border-radius: 2px;
            width: 148px;
            height: 30px;
            margin: 0;
            margin-left: 5px;
            text-indent: 7px;
          }
          textarea {
            background: #ffffff;
            border: 1px solid #bcbcbc;
            border-radius: 2px;
            width: 316px;
            height: 62px;
          }
        }
        .shipping-site {
          height: 64px;
          label {
            vertical-align: top;
            margin-top: 10px;
          }
        }
        .shipping-radio {
          margin-left: 125px;
          margin-bottom: 25px;
          height: 15px;
          & > div {
            display: inline-block;
            border: 1px solid #979797;
            vertical-align: top;
            width: 13px;
            height: 13px;
            .ivu-icon-ios-checkmark-empty {
              transform: translate(0, -9px);
            }
          }
          span {
            display: inline-block;
            vertical-align: top;
            height: 15px;
            line-height: 15px;
          }
        }
        .shipping-btn {
          .btn1 {
            .btn;
            background: #2c87ea;
            color: #fff;
            margin: 0 15px 0 395px;
          }
          .btn2 {
            .btn;
            background: #f7f7f7;
            border: 1px solid #dddddd;
            color: #5a5a5a;
          }
        }
      }
    }
  }
  //遮罩
  .shade {
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0.5;
  }
}
</style>
