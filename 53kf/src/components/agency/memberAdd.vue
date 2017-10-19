<template>
  <div class="mbrAdd">
    <div class="my-agency" v-show="sub == 0">
      <div>
        <h4>和我们一起，共赢未来</h4>
        <span>支付2000元保证金轻松获得国内客服系统一线品牌的代理权</span>
        <span>53快服企业云软件使用客户已超过70万，在业界具有较高知名度，在客户中拥有良好口碑，这些都是您在最短时间内成交客户的有利前提。</span>
      </div>
      <h4>低投入，低风险</h4>
      <p>53快服的代理伙伴拥有巨大的利润空间，53快服的高速发展，保证代理商拥有更多收益。</p>
      <h4>长期的利润回报</h4>
      <p>客户和代理商采+取终身绑定制，保护代理商利益。每年可以持续收取客户的消费提成。</p>
      <h4>完善的支持体系</h4>
      <p>为代理商提供专业的客服、技术支持、培训等一系列服务，让代理商可以全身心投入到产品的推广工作中。</p>
      <h4>完善的代理平台</h4>
      <p>提供代理商管理平台，资金管理、客户管理方便快捷，提升销售效率。</p>
      <h4>极具特色和竞争力的产品</h4>
      <p>53KF客服系统，客服系统一线品牌;回头客CRM 客户关系管理,全面提升企业赢利能力和竞争力。</p>
      <h4>持续增加产品线</h4>
      <p>53快服凭借自身的技术优势，持续开发新产品，同时大力引进第三方开发团队的优秀产品，打造完整的企业管理、营销产品线。</p>
      <button class="btn" @click="change">我要代理</button>
    </div>
    <agent-clause  v-show="sub == 1"></agent-clause>
    <ul  v-show="sub == 2">
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
import agentClause from '@/components/agency/agent-clause'
import {mapState} from 'vuex'
export default {
  computed :{
    ...mapState({
      sub:state=> state.state.sub
    })
  },
  data() {
    return {
    }
  },
  methods: {
    change(){
      this.$store.commit('SUB',1);
    }
  },
  components: {
    agentClause
  }
}
</script>

<style scoped lang='less' scoped>
.mbrAdd {
  font-family: MicrosoftYaHei;
  font-size: 14px;
  color: #2c2c2c;
  letter-spacing: 1px;
  line-height: 15px;
  margin-left: 30px;
  .my-agency {
    div {
      margin-bottom: 60px;
      span {
        &:nth-of-type(1) {
          display: block;
          color: #ff3d3d;
          margin: 10px 0 10px;
        }
      }
    }
    &>h4 {
      font-family: MicrosoftYaHei-Bold;
      color: #72a8e1;
      letter-spacing: 1px;
      margin: 30px 0 10px;
    }
    .btn {
      background: #ffa51e;
      width: 96px;
      height: 32px;
      margin-top: 50px;
    }
  }
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
      color: #fff;
    }
  }
}
</style>
