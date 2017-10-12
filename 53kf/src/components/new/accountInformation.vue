<template>
  <div id="account">
    <div class="account">
      <img src="./../../assets/img/head-portrait.svg" alt="">
      <ul>
        <li>登录账号：
          <span>15757157003@163.com</span>
          <span>（主账号）</span>
          <span>专属客户经理：未分配</span>
          <span>联系电话：400-611-2183</span>
        </li>
        <li>注册时间：2016-04-27 11:45:47</li>
        <li>
          <img src="./../../assets/img/new/green.svg" alt="">
          <span>已实名认证</span>
          <img src="./../../assets/img/new/yellow.svg" alt="">
          <span>账号已激活</span>
        </li>
      </ul>
    </div>
    <span>修改头像</span>
    <div class="account-new">
      <figure>
        <img src="./../../assets/img/new/gold.svg" alt="">
        <span>金卡会员</span>
      </figure>
      <ul>
        <li>
          <dt>账户余额:</dt>
          <dd>10000元</dd>
          <dt>优惠卷：</dt>
          <dd>0元</dd>
          <dt>免开令：</dt>
          <dd>22枚</dd>
        </li>
        <li>
          <dt>冻结金额:</dt>
          <dd>55元</dd>
        </li>
        <li>
          <dt>可提现金额:</dt>
          <dd>0元</dd>
        </li>
      </ul>
    </div>
    <button>马上充值</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
#account {
  margin-top: 25px;
  font-family: MicrosoftYaHei;
  font-size: 14px;
  color: #2c2c2c;
  letter-spacing: 1px;
  line-height: 15px;
  .account {
    &>img {
      width: 97px;
      margin-left: 30px;
    }
    ul {
      list-style-type: none;
      display: inline-block;
      vertical-align: top;
      margin-top: 15px;
      margin-left: 52px;
      li {
        margin-bottom: 15px;
        &:nth-child(1) {
          &>span {
            &:nth-child(1) {
              color: #2c2c2c;
              font-weight: bolder;
              margin-right: 0;
            }
            &:nth-child(2) {
              color: #4D6E82;
              margin-right: 50px;
            }
            &:nth-child(n + 3) {
              color: #ff7b2b;
              margin-right: 30px;
            }
          }
        }
        &:nth-child(3) {
          span {
            display: inline-block;
            margin-right: 21px;
            letter-spacing:1.17px;
            &:nth-of-type(1) {
              color: #00a645;
            }
            &:nth-of-type(2) {
              color: #ffb75e;
            }
          }
        }
      }
    }
  }
  &>span {
    font-size: 12px;
    color: #177ce9;
    letter-spacing: 0.86px;
    display: inline-block;
    margin: 7px 0 31px 51px;
  }
  .account-new {
    figure {
      display: inline-block;
      width: 52px;
      margin-left: 51px;
      margin-right: 72px;
      img {
        margin-left: 13px;
      }
      span {
        font-size: 12px;
        color: #9d9d9d;
        letter-spacing: 0.86px;
      }
    }
    ul {
      display: inline-block;
      list-style-type: none;
      vertical-align: top;
      li {
        font-size: 14px;
        color: #2c2c2c;
        letter-spacing: 1px;
        margin-bottom: 15px;
        dt,
        dd {
          display: inline-block;
        }
        &:nth-child(1) {
          dd {
            color: #FA782C;
            font-weight: bold;
            margin-right: 30px;
          }
        }
        &:nth-child(n+1) {
          dd {
            color: #9d9d9d;
            font-weight: bold;
          }
        }
        &:first-child{
          dd{
            color: #FA782C;
          }
        }
      }
    }
  }
  &>button {
    background: #ffa51e;
    width: 96px;
    height: 32px;
    border: none;    
    margin: 50px 0 0 176px;
    color:#fff;
  }
}
</style>
 