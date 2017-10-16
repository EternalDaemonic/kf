<template>
  <div id="mbrAdd">
    <ul>
      <li>
        <dt>我的代理区域：</dt>
        <dd>浙江省&nbsp;杭州市</dd>
      </li>
      <li>请输入会员邮箱</li>
      <li><input type="text" placeholder="ABC@tom.com">
        <span>删除</span>
      </li>
      <li><input type="text" placeholder="ABC@tom.com">
        <span>删除</span>
      </li>
      <li><input type="text" placeholder="ABC@tom.com">
        <span>删除</span>
        <span>添加</span>
      </li>
      <li>
        <button>确认添加</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style scoped lang='less' scoped>
#mbrAdd {
  font-family: MicrosoftYaHei;
  font-size: 14px;
  color: #2c2c2c;
  letter-spacing: 1px;
  line-height: 15px;
  margin-left: 30px;
  li {
    height: 32px;
    &:nth-child(1) {
      height: 15px;
      margin: 10px 0 30px 0;
    }
    &:nth-child(2) {
      height: 15px;
      margin-bottom: 10px;
    }
    &:nth-child(n+3) {
      margin-bottom: 15px;
      input {
        border: 1px solid #bcbcbc;
        border-radius: 2px;
        width: 248px;
        height: 30px;
        margin-right: 15px;
        text-indent: 6px;
      }
      &:nth-child(5) {
        span:nth-of-type(2) {
          color: #2c87ea;
          display: inline-block;
          margin-left: 15px;
        }
      }
      span {
        color: #ff7979;
      }
    }
    dd,
    dt {
      display: inline-block;
    }
    &>button {
      background: #2c87ea;
      width: 96px;
      height: 32px;
      border: none;
      margin-top: 35px;
      color:#fff;
    }
  }
}
</style>
