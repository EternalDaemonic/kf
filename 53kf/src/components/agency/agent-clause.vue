<template>
    <div class="agent-clause">
        <div class="clause-top">
            <button v-for="(btn,index) in btns" :key="btn" @click="change(index)" :class="{'btn':sub == index,'color':color(index)}">
                <Icon type="ios-checkmark-empty" size='40' class="checkmark" color='#ffa066' v-show="sub == index+1 || sub == index+2"></Icon>{{btn}}</button>
            <hr>
        </div>
        <div class="one" v-show="sub == 0">
            <div class="article" :style="{height:clientHeight+'px'}">
                <h2>53快服普通代理协议</h2>
                <p>
                    <b>第一条【合作原则】</b>为充分利用双方的资源和优势开展53快服企业云软件产品的推广，双方同意依照中国法律及行业之相关规定，本着自愿、互惠互利、优势互补、共同发展的原则达成本协议。</p>
                <p>
                    <b>第二条【术语定义】</b>
                </p>
                <p>
                    <b>1.有效会员：</b>注册后通过资料审核，且在账户内预存1000元开户成功的会员。有效会员包含直接会员和非区域会员。</p>
                <p>
                    <b>2.直接会员：</b>在授权区域内，由甲方发展的有效会员，不包含非区域会员。</p>
                <p>
                    <b>3.CPS会员：</b>凡通过CPS推广链接带来的有效会员和“我的代理”添加的有效会员。</p>
                <p>
                    <b>4.非区域会员：</b>发展授权区域以外的有效会员。</p>
                <p>
                    <b>5.可提现资金：</b>通过在线/官方为账户充值的金额、基于推广链接成为有效会员的CPS提成金额。</p>
                <p>
                    <b>6.不可提现资金：</b>基于甲方业绩，乙方给予甲方帐号充值的各类奖励和提成（除CPS）金额。</p>
                <p>
                    <b>7.消化资金：</b>账户资金转为优惠券、产品、升级（普通卡到银卡，银卡到金卡）的过程定义为消化过程，这部分转化的资金称为消化资金。</p>
                <p>
                    <b>8.知识产权权利：</b>指的是所有财产权及知识产权权利，包括但不限于任何实用新型专利、外观设计、工业产权、版权、商标、商业信息、道德权利、特有权利、发行出版权、隐私权、商品包装以及任何其他与知识产权有关的有形或无形的权利（包括但不限于任何与知识产权有关的未授权的登记、申请、分割、续展、衍生、重新发行、再检验的权利）。</p>
                <p>
                    <b>9.商业信息：</b>包含且不限于客户资料、产品信息、财务信息、技术信息、经营信息及其他商业秘密等。</p>
                <p>
                    <b>第三条【普通代理资格确认】</b>
                </p>
                <p>1.甲方通过乙方官方网站资格认证并已开户，拥有“我要代理”的权限。</p>
                <p>2.没有经营其他对乙方有竞争有冲击的同类产品；</p>
                <p>3.熟悉乙方代理制度、产品服务内容、具体业务流程等相关信息；</p>
                <p>
                    <b>第四条【授权区域、期限、产品范围与权限】</b>
                </p>
                <p>1.授权区域：以乙方认证授权区域为准。</p>
                <p>2.授权期限：自审核通过之日至甲方主动放弃代理当月月底止。</p>
                <p>3.授权产品范围：www.53kf.com企业云软件产品。</p>
                <p>4.授权权限：甲方可在授权区域内和非授权区域发展有效会员。</p>
                <p>
                    <b>第四条【产品价格、充值、提成及提现】</b>
                </p>
                <p>1.
                    <b>产品价格：</b>以乙方官方网站（www.53kf.com）公布价格为准。</p>
                <p>2.
                    <b>充值：</b>
                </p>
                <p>1)
                    <b>充值方式：</b>
                </p>
                <p>a、通过官方网站在线充值；</p>
                <p>b、直接到银行柜台或ATM机转账充值。</p>
                <p>2)
                    <b>充值相关说明：</b>
                </p>
                <p>a、
                    <b>针对直接会员。</b>发展的直接会员，若提交的资料已通过审核，可使用不可提现资金为其充值；若提交资料尚未通过审核，则只能使用可提现资金部分为其充值，充值后资料通过审核，则可返还充值金额至可提现账户，并在不可提现账户中，扣除相应金额。</p>
                <p>b、
                    <b>针对非区域会员。</b>发展的非区域会员，只能使用可提现资金部分为其充值。</p>
                <p>3.
                    <b>提成：</b>
                </p>
                <p>1)
                    <b>提成时间：</b>所有提成均于次月1日结算返还。</p>
                <p>2)
                    <b>提成相关说明：</b>
                </p>
                <p>a、
                    <b>开户提成。</b>有效会员开通即享400元/户的一次性开户提成。</p>
                <p>b、
                    <b>CPS提成。</b>发展有效会员即享100元/户的一次性CPS提成。消化资金提成。消化资金提成的享受前提必须当月达标。普通代理每月从自己可提现资金账户消化累计达500元或每年从自己可提现资金账户消费累计达8000元即为达标。</p>
                <p>- 直接会员（逐月累计总数）当月消化资金总额的20%作为消化资金提成。</p>
                <p>- 由普通代理发展的非区域会员，只享开户、CPS提成，不享受消化资金提成。</p>
                <p>4.
                    <b>提现：</b>每月15日前提交提现申请。</p>
                <p>
                    <b>第六条【指标及保证金】</b>
                </p>
                <p>1.货款充值指标：月货款充值任务为500元。</p>
                <p>2.为保障普通代理利益，至每月最后一天，系统将自动从甲方可提现资金账户扣款剩余达标金额至不可提现账户。若可提现资金账户余额不足，则当月不达标，不享受消化资金提成。</p>
                <p>3.保证金：本协议代理保证金为￥2000元。</p>
                <p>
                    <b>第七条【双方承诺】</b>
                </p>
                <p>
                    <b>1、乙方承诺</b>
                </p>
                <p>1) 乙方为甲方提供规范的产品和服务体系，并为甲方提供有效的产品购买、管理和售后支持；</p>
                <p>2) 乙方尽力向甲方提供业务范围内的技术支持和技术培训，帮助甲方提高技术能力，拓宽业务范围；</p>
                <p>3) 乙方向甲方及授权区域内的客户提供完整的售后服务，各项产品的售后服务由相应产品的服务条款规定。</p>
                <p>4) 乙方根据市场情况调整产品服务体系、价格体系和代理制度，调整信息以网站公布或电子邮件等方式通知甲方。</p>
                <p>5) 乙方应对甲方的帐号和密码及其它甲方明确提示为保密资料的信息给予保密。</p>
                <p>6) 必要时乙方为甲方及其发展的客户提供培训, 发生费用时视情况予以商定。</p>
                <p>7) 乙方应提供自动查询功能，使甲方能在乙方网站上查询其业务信息和账款信息。</p>
                <p>8) 因乙方过失造成甲方的损失，乙方应承担责任，该责任范围以甲、乙双方之间发生具体业务金额为限。对于甲方与其客户之间基于交易产生的纠纷和争议由甲方与客户自行解决，乙方不承担由此造成的任何赔偿责任。</p>
                <p>9) 乙方通过IP识别、人工审核等方式保障甲方所辖区域内的注册会员均为甲方或其下属会员的客户资源，识别误差保证在1%以内。</p>

                <p>
                    <b>2、甲方承诺</b>
                </p>
                <p>1) 甲方在合作期间保证向其客户提供良好的服务，不得以欺诈、胁迫等不正当手段损害客户或乙方的利益及声誉。</p>
                <p>2) 甲方保证所有经营活动完全符合中国有关法律、法规、行政规章等的规定。如因甲方违反上述规定的行为给乙方带来任何损害，甲方应承担所有法律责任并赔偿现有和预期损失。</p>
                <p>3) 甲方应执行乙方规定的统一资费及服务标准（资费及服务标准以乙方网站上公布的信息为准），不得擅自进行变更或向准会员作出违反标准的承诺。</p>
                <p>4) 甲方有义务严格保密并妥善管理自己的运营商帐号和密码。因甲方保管不当导致帐号和密码泄露或被盗用等原因造成客户流失或其它损失或纠纷的，由甲方自行负责。</p>
                <p>5) 甲方应积极参加乙方组织的代理商年会、产品发布会、研讨会和培训等活动。</p>
                <p>6) 甲方不得同时经营或代理跟乙方有竞争关系的产品。</p>
                <p>
                    <b>第八条【所有权及保密约定】</b>
                </p>
                <p>1. 甲方在此承认，乙方对其授权产品拥有知识产权权利。</p>
                <p>2. 本协议有效期内及本协议终止或者解除后，双方对商业信息应予保密。</p>
                <p>
                    <b>第九条【协议生效、终止】</b>
                </p>
                <p>1. 协议生效。本协议由双方代表签字盖章（或甲方通过网站提交代理申请并经乙方审核通过后）生效，任何更改均需双方协商一致并以书面形式确认。</p>
                <p>2. 协议终止。</p>
                <p>1) 本协议在下述情形下可以解除：</p>
                <p>- 甲方主动申请放弃代理资格的；</p>
                <p>- 由于不可抗力或意外事件使合同无法继续履行或没有继续履行必要的；</p>
                <p>- 因本协议一方经营情况发生重大困难、濒临破产进入法定整顿期或者被清算的；</p>
                <p>- 订立本协议所依据的客观情况发生重大变化，致使本协议无法履行的，经甲乙双方协商同意，可以变更或者终止协议的履行。</p>
                <p>- 一方未履行或违反约定义务，经另一方给予一定期限仍不履行义务或不予采取补救措施，致使另一方依据本合同的预期利益无法实现或没有继续履行必要的；</p>
                <p>2) 合同解除后：</p>
                <p>- 双方依据本合同的权利义务终止，但双方在合同解除前应履行的义务仍需履行。</p>
                <p>- 保证金退还。合作期间如无违规操作，合同解除后30天内，乙方将保证金退回至甲方不可提现资金账户。</p>
                <p>- 账户资金的使用。合同解除后，甲方的普通代理资格自动降级为有效会员，但不影响甲方账户资金继续使用。</p>
                <p>- 客户资源及提成。合同解除后，甲方不在享有合作期间发展的直接会员及相应的提成政策，相应客户资源由乙方收回。</p>
                <p>
                    <b>第十条【违约责任】</b>
                </p>
                <p>1. 一方违反国家有关政策法规，本合同立即终止，并由违约方承担相应的责任；</p>
                <p>2. 一方泄露商业信息导致另一方受损，侵权方应承担无限连带责任并保留刑事追溯权利；</p>
                <p>3. 甲方承诺所递交证书及相关资料真实、合法、有效，如有虚假，乙方有权解除本合同，保证金不予退还。</p>
                <p>4. 除乙方认可或授予信用额度外，乙方不接受甲方任何形式的欠款。如甲方未能按时交纳欠款，乙方可不予受理甲方委托的业务并有权取消甲方代理资格；</p>
                <p>5. 如甲方未达成月度指标，视为放弃当月消化资金提成，乙方有权收回甲方代理权限并降级为有效会员。</p>
                <p>6. 一方因联系人或联系方式等变更，应自变更之日起十日内书面通知另一方，否则变更方应对此造成的一切后果承担责任。</p>
                <p>
                    <b>第十一条【免责条款】</b>
                </p>
                <p>1. 因国家政策法规调整、自然灾害等不可抗力或意外事件而影响甲方正常的服务和技术支持时。</p>
                <p>2. 因电信部门检修或甲方在进行系统升级或者维护时，有时需要短时间中断服务，或因Internet上的通路的偶然阻塞造成访问速度下降的。</p>
                <p>
                    <b>第十二条【争议解决】</b>因本协议发生争议，双方可协商解决；协商不成，同意将争议提交至乙方住所地有管辖权的人民法院通过诉讼的方式解决。</p>
                <p>
                    <b>第十三条【其他】</b>
                </p>
                <p>1. 本协议一式两份，双方各执一份；</p>
                <p></p>2. 本协议同时得到甲乙双方的完全理解和认同，并替代此前的所有协议，不论是口头的还是书面的；
                <p></p>
                <p></p>3. 网站服务条款、基于本协议的补充协议及协议附件等均为本协议不可分割的部分，协议的理解与解释应依据协议目的和文本原义进行。
                <p></p>

            </div>
            <hr>
            <div class="clause-bottom">
                <li>
                    <span @click="flag = !flag">我同意53快服普通代理协议</span>
                    <div class="check" @click="flag = !flag" :class="{'check-u':!flag}">
                        <Icon type="ios-checkmark-empty" size='30' v-show="flag" color='#fff'></Icon>
                    </div>
                </li>
                <li>
                    <button @click="cancal">上一步</button>
                    <button @click="next" class="btn2" :class="{'uactive':!flag}">下一步</button>
                </li>
            </div>
        </div>
        <ul class="two" v-show="sub == 1">
            <li>
                <dt>您的账户余额：</dt>
                <dd>
                    <b>17888.62元</b>
                </dd>
            </li>
            <li>
                <dt>保证金：</dt>
                <dd>
                    <b>2000.00元</b>
                </dd>
            </li>
            <li>
                <button @click="sub++">确认缴纳</button>
            </li>
        </ul>
        <div class="three" v-show="sub == 2">
            <p>您已成功获得代理资格</p>
            <button @click="submit">确定</button>
        </div>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      clientHeight: state => 563 / 940 * state.size.height
    })
  },
  data() {
    return {
      sub: 0,
      btns: ["第一步:代理商条款", "第二步:缴纳保证金", "第三步:代理成功"],
      flag: true
    };
  },
  methods: {
    cancal() {
      this.$store.commit("SUB", 0);
    },
    next() {
      if (this.flag) {
        this.sub = 1;
      } else {
        return;
      }
    },
    color(index) {
      if (index == this.sub - 1) {
        return true;
      } else if (index == this.sub - 2) {
        return true;
      } else if (this.sub == 2) {
        return true;
      } else {
        return false;
      }
    },
    change(index) {
      if (this.sub == 1) {
        if (index == 0) {
          this.sub = 0;
          return;
        }
        return;
      }
    },
    submit() {
      this.$store.commit("SUB", 2);
      this.$store.commit("STATE", true);
    }
  }
};
</script>
<style lang='less' scoped>
.agent-clause {
  margin-top: 10px;
  .clause-top {
    font-size: 0;
    margin-left: 3px;
    margin-bottom: 30px;
    .checkmark {
      height: 11px;
      width: 17px;
      position: relative;
      z-index: 2;
      &::before {
        position: absolute;
        left: -5px;
        top: -6px;
        z-index: 2;
      }
    }
    button {
      background: #ffffff;
      width: 199px;
      height: 42px;
      color: #929292;
      font-size: 14px;
      margin-left: 0px;
    }
    hr {
      margin: 0;
      margin-top: -1px;
      position: relative;
    }
    .btn {
      border-width: 1px 1px 1px 1px;
      border-style: solid;
      border-color: #ddd #ddd #fff;
      position: relative;
      z-index: 1;
    }
    .color {
      color: #ff7b2b;
    }
  }
  .one {
    .article {
      font-family: MicrosoftYaHei-Bold;
      font-size: 14px;
      color: #2c2c2c;
      letter-spacing: 1px;
      overflow: auto;
      h2 {
        margin-top: 5px;
      }
      p {
        line-height: 30px;
      }
    }
    & > hr {
      margin-left: 0;
    }
    .clause-bottom {
      margin-top: 30px;
      li {
        width: 225px;
        margin: 0 auto;
        list-style-type: none;
        margin-bottom: 30px;
        span {
          color: #5a5a5a;
        }
        button {
          width: 96px;
          height: 32px;
          &:nth-child(1) {
            background: #2c87ea;
          }
        }
        .btn2 {
          margin-left: 18px;
          background: #ffa51e;
        }
        .uactive {
          background: rgb(188, 188, 188);
          color: #fff;
          border: none;
        }
      }
      .check {
        vertical-align: middle;
        display: inline-block;
        text-align: center;
        background: #2c87ea;
        border-radius: 2px;
        margin-left: 6px;
        width: 16px;
        height: 16px;
      }
      .check-u {
        background: #fff;
        border: 1px solid rgb(188, 188, 188);
      }
    }
  }
  .two {
    li {
      dd,
      dt {
        display: inline-block;
      }
      dt {
        width: 108px;
        color: #2c2c2c;
        text-align: right;
      }
      &:first-child {
        margin-bottom: 30px;
        dd {
          color: #fa782c;
        }
      }
      &:nth-child(2) {
        color: #589ce1;
      }
      button {
        background: #ffa51e;
        width: 96px;
        height: 32px;
        margin: 50px 0 0 45px;
      }
    }
  }
  .three {
    button {
      background: #2c87ea;
      width: 64px;
      height: 32px;
      margin-top: 30px;
    }
  }
}
</style>


