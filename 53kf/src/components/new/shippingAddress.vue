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
  </div>
</template>

<script>
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
  }
}
</script>

<style lang="less">
#shipping {
  div {
    display: inline-block;
    background: #ffffff;
    border:1px solid #c3c3c3;
    width:808px;
    &:hover{
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
        font-size:14px;
        background:#fff;
        margin-right: 20px;
        float: right;
      }
    }
  }
}
</style>
