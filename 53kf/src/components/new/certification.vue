<template>
  <div class="certif">
    <div class="certification-top">
      <span>我的认证</span>
      <span>></span>
      <span>修改默认信息</span>
    </div>
    <hr>
    <form action="">
      <!-- 左侧认证信息 -->
      <ul>
        <li>
          <span>公司地区</span>
          <city></city>
        </li>
        <li class="certif-name">
          <span>联系人姓名</span><input type="text" v-model="name"></li>
        <li class="certif-phone">
          <span>我的手机</span><input type="text" v-model="phone">
          <button>修改</button>
        </li>
        <li>
          <span>经营范围</span>
          <Select v-model="model1" style="width:207px;height:32px">
            <OptionGroup label="服务型行业">
              <Option v-for="item in group.group1" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </OptionGroup>
            <OptionGroup label="高新技术">
              <Option v-for="item in group.group2" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </OptionGroup>
            <OptionGroup label="教育培训">
              <Option v-for="item in group.group3" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </OptionGroup>
            <OptionGroup label="法律金融财务">
              <Option v-for="item in group.group4" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </OptionGroup>
            <OptionGroup label="文化艺术媒体">
              <Option v-for="item in group.group5" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </OptionGroup>
            <OptionGroup label="企业服务">
              <Option v-for="item in group.group6" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </OptionGroup>
            <OptionGroup label="建筑房产">
              <Option v-for="item in group.group7" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </OptionGroup>
            <OptionGroup label="生产型企业">
              <Option v-for="item in group.group8" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </OptionGroup>
            <OptionGroup label="非营利机构">
              <Option v-for="item in group.group9" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </OptionGroup>
          </Select>
        </li>
        <li>
          <span>企业全称</span>
          <input type="text" v-model="companyName">
        </li>
        <li class="certif-license">
          <span>营业执照注册号</span>
          <input type="text" v-model="license">
          <span>每个企业最多可认证5个快服帐号</span>
        </li>
        <li>
          <span>挂码网址</span>
          <input type="text" v-model="code">
        </li>
        <li>
          <span>企业规模</span>
          <Select v-model="group2" style="width:207px;height:32px">
            <Option value="9">十人以下</Option>
            <Option value="10">10-50人</Option>
            <Option value="50">50-100人</Option>
            <Option value="100">100-500人</Option>
            <Option value="500">500人以上</Option>
          </Select>
        </li>
        <li>
          <span>公司电话</span>
          <input type="text" v-model="tel">
        </li>
        <li>
          <span>公司传真</span>
          <input type="text" v-model="fax">
        </li>
      </ul>
      <!-- 上传营业执照 -->
      <div class="business-license">
        <div>
          <span>营业执照</span><img src="./../../assets/img/new/green.svg" alt="">
          <span>已完成文字</span>
          <span>未完成认证</span>
        </div>
        <div class="certif-img"></div>
        <button>更换</button>
      </div>
      <!-- 提交表单 -->
      <button>提交企业认证</button>
    </form>
  </div>
</template>

<script>
import city from '@/components/city'
export default {
  data() {
    return {
      model1: '',
      group,
      group2: '',
      name: '张三',
      tel: '1322111312',
      companyName: '乌拉拉有限公司',
      license: '12345678901',
      code: 'http://www.666kkk.com',
      phone: 13456782345,
      fax: 12345678901
    }
  },
  components: {
    city
  }
}

let group = {
  group1: [
    {
      value: 1010000,
      label: '旅游餐饮休闲'
    },
    {
      value: 1020000,
      label: '医疗保健'
    },
    {
      value: 1030000,
      label: '家政家教搬家'
    },
    {
      value: 1040000,
      label: '房产中介'
    },
    {
      value: 1050000,
      label: '留学中介'
    },
    {
      value: 1060000,
      label: '零售批发'
    },
    {
      value: 1070000,
      label: '交通运输物流快递'
    }],
  group2: [
    {
      value: 2010000,
      label: '计算机软件'
    },
    {
      value: 2020000,
      label: '计算机硬件/网络'
    },
    {
      value: 2030000,
      label: '互联网/电子商务'
    },
    {
      value: 2040000,
      label: '游戏'
    },
    {
      value: 2050000,
      label: '通讯/电信'
    },
    {
      value: 2060000,
      label: '电信增值业务'
    },
    {
      value: 2070000,
      label: 'IT咨询系统集成'
    },
    {
      value: 2080000,
      label: '半导体'
    },
    {
      value: 2090000,
      label: '纳米科技'
    },
    {
      value: 2100000,
      label: '生物科技'
    },
    {
      value: 2110000,
      label: '国防航天'
    }],
  group3: [
    {
      value: 3010000,
      label: '幼儿'
    },
    {
      value: 3020000,
      label: '正规学校'
    },
    {
      value: 3030000,
      label: '成人教育'
    },
    {
      value: 3040000,
      label: '培训机构'
    }
  ],
  group4: [
    {
      value: 4010000,
      label: '律师'
    },
    {
      value: 4020000,
      label: '公检法/交警'
    },
    {
      value: 4030000,
      label: '银行'
    },
    {
      value: 4040000,
      label: '风险投资/私募投资'
    },
    {
      value: 4050000,
      label: '证券/基金/投资银行'
    },
    {
      value: 4060000,
      label: '保险'
    },
    {
      value: 4070000,
      label: '会计/审计/税务'
    },
    {
      value: 4080000,
      label: '经济学'
    }
  ],
  group5: [
    {
      value: 5010000,
      label: '广播电影电视'
    },
    {
      value: 5020000,
      label: '报纸杂志'
    },
    {
      value: 5030000,
      label: '出版印刷'
    },
    {
      value: 5040000,
      label: '广告公关'
    },
    {
      value: 5050000,
      label: '文学'
    },
    {
      value: 5060000,
      label: '音乐'
    },
    {
      value: 5070000,
      label: '服装设计'
    },
    {
      value: 5080000,
      label: '摄影美术'
    }
  ],
  group6: [
    {
      value: 6010000,
      label: '企业人事/招聘'
    },
    {
      value: 6020000,
      label: '猎头'
    },
    {
      value: 6030000,
      label: '市场调研'
    },
    {
      value: 6040000,
      label: '展览展示'
    },
    {
      value: 6050000,
      label: '翻译'
    },
    {
      value: 6060000,
      label: '企业管理咨询'
    },
    {
      value: 6070000,
      label: '贸易/进出口'
    }
  ],
  group7: [
    {
      value: 7010000,
      label: '公路桥梁建设'
    },
    {
      value: 7020000,
      label: '房地产开发'
    },
    {
      value: 7030000,
      label: '室内设计/装潢'
    },
    {
      value: 7040000,
      label: '园林'
    }
  ],
  group8: [
    {
      value: 8010000,
      label: '汽车/摩托车(制造/维修)'
    },
    {
      value: 8020000,
      label: '能源/化工'
    },
    {
      value: 8030000,
      label: '仪器仪表'
    },
    {
      value: 8040000,
      label: '机械/机电/重工业制造'
    },
    {
      value: 8050000,
      label: '食品'
    },
    {
      value: 8060000,
      label: '日用品'
    },
    {
      value: 8070000,
      label: '服装'
    },
    {
      value: 8080000,
      label: '电器'
    },
    {
      value: 8090000,
      label: '农林牧渔业'
    }
  ],
  group9: [
    {
      value: 9010000,
      label: '政府'
    },
    {
      value: 9020000,
      label: '社区'
    },
    {
      value: 9030000,
      label: '公关事业'
    },
    {
      value: 9040000,
      label: '协会'
    },
    {
      value: 9050000,
      label: '商会'
    },
    {
      value: 9060000,
      label: '社团'
    }
  ]

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.certif {
  margin-top: 10px;
  .certification-top {
    font-family: MicrosoftYaHei;
    font-size: 14px;
    color: #9f9f9f;
    letter-spacing: 1px;
    line-height: 15px;
    span {
      &:nth-child(1) {
        color: #2c87ea;
      }
    }
  }

  hr {
    width: 100%;
  }

  &>form {
    font-family: MicrosoftYaHei;
    font-size: 14px;
    color: #2c2c2c;
    letter-spacing: 1px;
    line-height: 15px;
    margin-top: 20px;
    display: inline-block;
    ul {
      display: inline-block;
      list-style-type: none;
      li {
        vertical-align: top;
        height: 32px;
        line-height: 32px;
        margin-bottom: 25px;
        span {
          margin-right: 25px;
        }
        .ivu-select-single .ivu-select-selection .ivu-select-placeholder,
        .ivu-select-single .ivu-select-selection .ivu-select-selected-value {
          padding-right: 10px;
          font-family: MicrosoftYaHei;
          font-size: 14px;
          color: #2c2c2c;
          letter-spacing: 1px;
        }
        .ivu-select-item:hover {
          background: #ecf6fd;
        }
        input {
          border: 1px solid #bcbcbc;
          border-radius: 2px;
          width: 205px;
          height: 30px;
          text-indent: 7px;
        }
      }
      .certif-name {
        span {
          margin-right: 15px;
        }
      }
      .certif-phone {
        span {
          margin-right: 30px;
        }
        button {
          background: #2c87ea;
          width: 64px;
          height: 32px;
          border: none;
          color: #fff;
        }
      }
      .certif-license {
        input {
          width: 172px;
        }
        span {
          margin-right: 15px;
          &:nth-of-type(2) {
            font-size: 14px;
            color: #ff7979;
            letter-spacing: 1px;
            margin-left: 10px;
          }
        }
      }
    }
    .business-license {
      display: inline-block;
      vertical-align: top;
      margin-left: 200px;
      margin-top: 10px;
      span {
        &:nth-of-type(1) {
          margin-right: 15px;
        }
        &:nth-of-type(n+2) {
          margin-right: 30px;
          font-family: MicrosoftYaHei;
          font-size: 14px;
          color: #00a645;
          letter-spacing: 1.17px;
        }
        &:nth-of-type(n+3) {
          color: #ff7979;
        }
      }
      .certif-img {
        margin-left: 74px;
        margin-top: 10px;
        background: #f5f5f5;
        border: 1px solid #cdcdcd;
        width: 370px;
        height: 261px;
      }
      button {
        background: #2c87ea;
        width: 64px;
        height: 32px;
        margin-left: 383px;
        margin-top: 10px;
        color: #fff;
        border: none;
      }
    }
    &>button {
      background: #2c87ea;
      width: 128px;
      height: 32px;
      display: block;
      margin-left: 1100px;
      color: #fff;
      border: none;
      margin-right: 0;
    }
  }
}
</style>
