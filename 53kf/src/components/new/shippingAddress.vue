<template>
  <div id="shipping">
    <div>
      <h3>总公司</h3>
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
    <div>
      <h3>分公司</h3>
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
    <div class="shipping-form">
      <div>
        <h4>新增收货地址</h4>
        <Icon type="ios-close-empty" size="30" color='#d8d8d8'></Icon>
        <hr>
      </div>
      <form action="">
        <ul>
          <li>
            <label for="">地址名称：</label><input type="text"></li>
          <li>
            <label for="">收件人名称：</label><input type="text"></li>
          <li>
            <label for="">所在地区：</label>
            <city></city>
          </li>
          <li class="shipping-site">
            <label for="">详细地址：</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </li>
          <li>
            <label for="">邮政编码：</label><input type="text"></li>
          <li>
            <label for="">手机号码：</label><input type="text"></li>
          <li>
            <label for="">固定电话：</label><input type="text"></li>
          <li>
            <label for="">电子邮箱：</label><input type="text"></li>
          <li class="shipping-radio">
            <div>
              <Icon type="ios-checkmark-empty" size='30'></Icon>
            </div>
            <span>设为默认地址</span>
          </li>
          <li class="shipping-btn">
            <button class="btn1">保存</button>
            <button class="btn2">取消</button>
          </li>
        </ul>
      </form>
    </div>
  </div>
</template>

<script>
import city from '@/components/city'
let data = {
  name: '张三',
  region: '浙江省杭州市西湖区',
  site: '紫萱路西城博司9幢4楼',
  code: '310012',
  phone: '12345678901',
  tel: '0510-46726584',
  email: '12178886@qq.com'
}
export default {
  data() {
    return {
      data
    }
  },
  components: {
    city
  }
}
</script>

<style lang="less">
#shipping {
  &>div {
    display: inline-block;
    background: #ffffff;
    border: 1px solid #c3c3c3;
    width: 808px;
    &:hover {
      border: 1px solid #2c87ea;
    }
    width: 808px;
    height: 298px;
    margin-left: 30px;
    margin-bottom: 20px;
    h3 {
      margin: 20px 0 20px 20px;
      font-family: MicrosoftYaHei-Bold;
      font-size: 16px;
      color: #686868;
      letter-spacing: 1.14px;
      line-height: 15px;
    }
    li {
      list-style: none;
      margin-left: 40px;
      height: 15px;
      margin-bottom: 15px;
      dt,
      dd {
        display: inline-block;
        width: 75px;
        height: 15px;
        font-family: MicrosoftYaHei;
        font-size: 14px;
        color: #b0b0b0;
        letter-spacing: 1px;
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
        letter-spacing: 1px;
        line-height: 15px;
        border: none;
        font-size: 14px;
        background: #fff;
        margin-right: 20px;
        float: right;
      }
    }
  }
  .shipping-form {
    background: #ffffff;
    width: 600px;
    height: 579px;
    box-shadow: 0 4px 15px #b8b7b7;
    border: none;
    font-family: MicrosoftYaHei;
    font-size: 14px;
    color: #5a5a5a;
    letter-spacing: 1px;
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
    ul {
      width: 100%;
      list-style-type: none;
      li {
        vertical-align: top;
        margin-bottom: 15px;
        height: 32px;
        line-height: 32px;
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
        margin-left: 135px;
        margin-bottom: 25px;
        height: 15px;
        &>div {
          display: inline-block;
          border: 1px solid #979797;
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
          background: #2c87ea;
          width: 64px;
          height: 32px;
          color: #fff;
          border: none;
          margin:0 15px 0 395px;
        }
        .btn2 {
          background: #f7f7f7;
          border: 1px solid #dddddd;
          color:#5a5a5a;
          width: 62px;
          height: 30px;
        }
      }
    }
  }
}
</style>
