<template>
  <div class="actionList">
    <div class="actionList-top">
      <label for="">操作栏目:</label>
      <Select v-model="select" style="width:150px">
        <Option value="0">--请选择--</Option>
        <OptionGroup label="我的代理">
          <Option value="add_member">添加会员</Option>
          <Option value="member_recharGe">会员充值</Option>
          <Option value="drop_aGent">放弃代理</Option>
          <Option value="next_aGent_recharGe">下级代理充值</Option>
          <Option value="batch_add_member">批量添加会员</Option>
          <Option value="add_email_tpl">添加邮件模板</Option>
          <Option value="edit_email_tpl">修改邮件模板</Option>
          <Option value="del_email_tpl">删除邮件模板</Option>
          <Option value="edit_email">已添加会员列表编辑邮箱</Option>
          <Option value="del_email">已添加会员列表删除邮箱</Option>
          <Option value="set_worker_permission">设置工号权限</Option>
          <Option value="add_aGent_tpl">添加代理商模板</Option>
        </OptionGroup>
        <OptionGroup label="工号管理">
          <Option value="send_activate_email">发送激活邮件</Option>
          <Option value="add_worker">添加工号</Option>
          <Option value="edit_worker">编辑工号</Option>
          <Option value="activate_worker">激活工号</Option>
          <Option value="delete_worker">删除工号</Option>
          <Option value="master_chanGe">改子账号密码</Option>
        </OptionGroup>
        <OptionGroup label="开功能操作">
          <Option value="open_module">开通功能</Option>
          <Option value="open_auto_xufei">开启自动续费开关</Option>
          <Option value="close_auto_xufei">关闭自动续费开关</Option>
        </OptionGroup>
        <OptionGroup label="我的快服">
          <Option value="up_Grade">等级升级</Option>
          <Option value="inner_user_Give_coupons">客户经理可送优惠券</Option>
        </OptionGroup>
        <OptionGroup label="我的认证">
          <Option value="authentication_apply_modify">认证申请信息修改</Option>
          <Option value="mobile_modify">手机号修改</Option>
          <Option value="related">关联认证</Option>
        </OptionGroup>
        <OptionGroup label="个人信息">
          <Option value="myinfo_modify">个人信息修改</Option>
        </OptionGroup>
        <OptionGroup label="密码修改">
          <Option value="password_modify">密码修改</Option>
        </OptionGroup>
        <OptionGroup label="收货地址">
          <Option value="add_address">新增收货地址</Option>
          <Option value="edit_address">修改收货地址</Option>
          <Option value="delete_address">删除收货地址</Option>
          <Option value="set_default_address">设置默认收货地址</Option>
        </OptionGroup>
        <OptionGroup label="工号收货地址">
          <Option value="add_address">新增工号收货地址</Option>
          <Option value="edit_address">修改工号收货地址</Option>
          <Option value="delete_address">删除工号收货地址</Option>
          <Option value="set_default_address">设置默认工号收货地址</Option>
        </OptionGroup>
        <OptionGroup label="cps推广活动操作">
          <Option value="Get_award">领取活动奖品</Option>
          <Option value="join_activity">接受任务</Option>
          <Option value="Get_continue">继续挑战</Option>
        </OptionGroup>
        <OptionGroup label="发票管理">
          <Option value="add_invoice">新建发票</Option>
          <Option value="edit_invoice">编缉发票</Option>
          <Option value="cancel_invoice">取消发票</Option>
        </OptionGroup>
        <OptionGroup label="我要充值/充值中心">
          <Option value="online_recharGe">在线充值</Option>
        </OptionGroup>
        <OptionGroup label="我要提现">
          <Option value="withdraw_apply">提现申请</Option>
        </OptionGroup>
        <OptionGroup label="我要赚钱">
          <Option value="cps_promote">CPS推广</Option>
          <Option value="cps_link_add">推广链接添加</Option>
          <Option value="cps_link_edit">推广链接编辑</Option>
          <Option value="cps_link_del">推广链接删除</Option>
          <Option value="cps_link_clone">推广链接克隆</Option>
        </OptionGroup>
        <OptionGroup label="登录记录">
          <Option value="loGin_record">登录</Option>
        </OptionGroup>
        <OptionGroup label="老用户升级">
          <Option value="auto_trans">程序自动转移</Option>
        </OptionGroup>
        <OptionGroup label="注册">
          <Option value="send_email">第一步:发送邮件</Option>
          <Option value="email_link">第二步:邮件链接</Option>
          <Option value="input_password">第三步:填写密码</Option>
          <Option value="reG_info">第四步:注册完成</Option>
          <Option value="reG_start">新注册开始</Option>
          <Option value="reG_complete">新注册完成</Option>
          <Option value="reG_product_sendmail">新注册产品页发送邮件</Option>
          <Option value="send_activate_mail">发送激活邮件</Option>
          <Option value="activate_record">激活记录</Option>
          <Option value="Get_activate_Gift">领取激活试用</Option>
          <Option value="activate_renGonG_audit">激活邮箱人工审核状态判定</Option>
        </OptionGroup>
        <OptionGroup label="忘记密码">
          <Option value="pwd_email">邮箱找回密码-发送</Option>
          <Option value="email_chanGe">邮箱找回密码-改密码</Option>
          <Option value="pwd_mobile">手机找回密码-发送</Option>
          <Option value="mobile_chanGe">手机找回密码-改密码</Option>
          <Option value="backstaGe_chanGe">后台找回密码-改密码</Option>
        </OptionGroup>
        <OptionGroup label="客户推荐明细">
          <Option value="chanGe_sub_yx_from">修改归属</Option>
        </OptionGroup>
        <OptionGroup label="论坛操作">
          <Option value="coupons_transfer">积分转优惠券</Option>
        </OptionGroup>
        <OptionGroup label="砸金蛋">
          <Option value="hit_eGGs">砸金蛋活动</Option>
        </OptionGroup>
        <OptionGroup label="挂码兼容">
          <Option value="code_true">挂码兼容</Option>
        </OptionGroup>
        <OptionGroup label="挂码兼容">
          <Option value="code_false">取消兼容</Option>
        </OptionGroup>
        <OptionGroup label="我要代理">
          <Option value="aGent_success">申请代理商成功</Option>
        </OptionGroup>
        <OptionGroup label="解绑账号">
          <Option value="unbind">解绑第三方账号</Option>
        </OptionGroup>
      </Select>
      <label for="">工作账号:</label>
      <input type="text" placeholder="zhaozh@53kf.com">
      <label for="">操作时间:</label>
      <div class="date">
        <DatePicker type="date" confirm placeholder="选择日期" style="width:120px"></DatePicker>&nbsp;-
        <DatePicker type="date" confirm placeholder="选择日期" style="width: 120px"></DatePicker>
      </div>
      <button>查询</button>
    </div>
    <div class="action-content">
      <Table height="550" :columns="columns1" :data="data" style="border:none"></Table>
      <Page :total="dataCount" :page-size="pageSize" show-total @on-change="changepage" show-elevator v-show="flag"></Page>
    </div>
  </div>
</template>

<script>
let data = [
  {
    account: '登录记录',
    name: '登录',
    time: '2017-08-15 11:14:27',
    people: 'zhaozh@53kf.com',
    payment: '1111111111',
    say: '用户whl19911314@126.com登录成功(从工作平台)',
  },
  {
    account: '登录记录',
    name: '登录',
    time: '2017-08-15 11:14:27',
    people: 'zhaozh@53kf.com',
    payment: '1111111111',
    say: '用户whl19911314@126.com登录成功(从工作平台)',
  },
  {
    account: '登录记录',
    name: '登录',
    time: '2017-08-15 11:14:27',
    people: 'zhaozh@53kf.com',
    payment: '1111111111',
    say: '用户whl19911314@126.com登录成功(从工作平台)',
  },
  {
    account: '登录记录',
    name: '登录',
    time: '2017-08-15 11:14:27',
    people: 'zhaozh@53kf.com',
    payment: '1111111111',
    say: '用户whl19911314@126.com登录成功(从工作平台)',
  },
]
export default {
  data() {
    return {
      select: '请选择',
      columns1: [
        {
          type: 'index',
          title: '序号'
        },
        {
          title: '栏目名',
          key: 'account',
        },
        {
          title: '操作名称',
          key: 'name'
        },
        {
          title: '支付时间',
          key: 'time'
        },
        {
          title: '操作人员',
          key: 'people'
        },
        {
          title: "操作对象",
          key: 'payment'
        },
        {
          title: '说明',
          key: 'say',
          width: '15%'
        }
      ],
      pageSize: 10,
      dataCount: '0',
      ajaxData: [],
      data: [],
      falg: false
    }
  },
  methods: {
    handData() {
      this.ajaxData = data;
      this.dataCount = data.length;
      if (data.length < this.pageSize) {
        this.data = this.ajaxData;
        this.flag = false;
      } else {
        this.data = this.ajaxData.slice(0, this.pageSize);
        this.flag = true;
      }
    },
    changepage(index) {
      let _start = (index - 1) * this.pageSize;
      let _end = index * this.pageSize;
      this.data = this.ajaxData.slice(_start, _end);
    }
  },
  created() {
    this.handData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.ivu-select-selection {
  width: 150px;
}

.actionList {
  font-family: MicrosoftYaHei;
  font-size: 14px;
  color: #2c2c2c;
  letter-spacing: 1px;
  margin-left: 30px;
  margin-top: 10px;
  .actionList-top {
    margin-bottom: 40px;
    .date {
      display: inline-block;
    }
    label {
      margin-left: 40px;
      margin-right: 5px;
      &:first-child {
        margin-left: 0;
      }
    }
    &>input {
      background: #ffffff;
      border: 1px solid #bcbcbc;
      border-radius: 2px;
      width: 148px;
      height: 30px;
      text-indent: 8px;
    }
     ::-webkit-input-placeholder {
      color: #c6c6c6;
    }
     :-moz-placeholder {
      color: #c6c6c6;
    }
     ::-moz-placeholder {
      color: #c6c6c6;
    }
     :-ms-input-placeholder {
      color: #c6c6c6;
    }
    button {
      background: #2c87ea;
      width: 64px;
      height: 32px;
      border: none;
      color: #fff;
      margin-left: 45px;
    }
  }
}
</style>
