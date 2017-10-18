<template>
  <ul class="begin-promotion">
    <li>“邀好友”拿现金，推荐一个有效开户会员，可获得100元的CPS提成</li>
    <li>地址推广方式</li>
    <li class="promotion">我的推广地址：
      <input type="text" name="" id="" v-model="site">
      <button>复制地址</button>
    </li>
    <li>邮件推广方式</li>
    <li class="promotion promotion-type">
      <label for="">电子邮箱:</label>
      <div>
        <input type="text" placeholder="ABC@tom.com、123@qq.com等">
        <span>删除</span>
        <input type="text" placeholder="ABC@tom.com、123@qq.com等">
        <span>删除</span>
        <input type="text" placeholder="ABC@tom.com、123@qq.com等">
        <span>删除</span>
        <div class="add">添加</div>
        <button>确认添加</button>
      </div>
    </li>
    <li class="advertising">图文广告推广方式
      <div>
        <span>共1页 跳转页数</span>
        <Select v-model="select" style="width:50px">
          <Option value="1">1</Option>
        </Select>
        <button>添加广告</button>
      </div>
    </li>
    <li>
      <Table height="220" :columns="columns1" :data="data" style="border:none"></Table>
    </li>
    <li>通过QQ、旺旺等推荐好友</li>
    <li class="promotion">
      <label for="">发送推广链接:</label>
      <input type="text" placeholder="http://www.53kf.com/?controller=reg&proxy=38748&yx_from=38748" v-model="promotion">
      <span>到QQ或旺旺等聊天工具上告诉你的好友</span>
    </li>
    <li>在QQ空间、新浪微博上分享</li>
    <li>
      <img src="./../../assets/img/money/money.png" alt="">
    </li>
    <li>在自己常去的论坛上挂签名</li>
    <li class="share promotion">
      <label for="">UBB代码:</label>
      <input type="text" v-model="ubb">
      <span>如果支持HTML代码，可直接复制下面的代码</span>
    </li>
    <li>在自己的博客上加友情链接或任何支持HTML的地方</li>
    <li>
      <input type="text" v-model="share">
      <button class="btn">复制</button>
    </li>
    <li>
      <span>网站推广页面模板</span>
      <button class="btn btn1">下载</button>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      select: '1',
      site: 'http://www.53kf.com/?controller=reg&proxy=38748&yx_from=38748',
      promotion: 'http://www.53kf.com/?controller=reg&proxy=38748&yx_from=38748',
      ubb: "[url='http://www.53kf.com/?controller=reg&proxy=38748&yx_from=38748']53快服在线客服系统[/url]",
      share: "<a href='http://www.53kf.com/?controller=reg&proxy=38748&yx_from=38748' target='_blank'>在线客服系统</a>",
      columns1: [
        {
          type: 'index',
          title: '序号'
        },
        {
          title: '名称',
          key: 'name'
        },
        {
          title: '类型',
          key: 'type'
        },
        {
          title: '编辑时间',
          key: 'time'
        },
        {
          title: '操作',
          key: 'set'
        }
      ],
      data: [
        {
          name: '图片模板1号',
          type: '图片广告',
          time: '编辑时间',
          set: '预览/复制代码/编辑/克隆/获取二维码'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.begin-promotion {
  margin: 10px 0 115px 30px;
  font-family: MicrosoftYaHei;
  font-size: 14px;
  color: #2c2c2c;
  letter-spacing: 1px;
  li {
    button {
      background: #2c87ea;
      height: 32px;
      border: none;
      outline: none;
      color: #fff;
      line-height: 32px;
      vertical-align: middle;
    }
    &:nth-child(even) {
      background: #f6f6f6;
      width: 100%;
      height: 42px;
      line-height: 42px;
      padding-left: 15px;
      margin: 30px 0 15px 0;
    }
    &:first-child {
      color: #ff7b2b;
    }
    &:nth-child(10) {
      margin-bottom: 20px;
    }
    &:nth-child(15) {
      margin-bottom: 20px;
      input {
        width: 791px;
        height: 30px;
        text-indent: 7px;
        margin-left: 20px;
        letter-spacing: 0;
        margin-right: 15px;
      }
    }
  }
  .promotion {
    label {
      display: inline-block;
      width: 95px;
      text-align: right;
      margin-right: 15px;
    }
    input {
      background: #ffffff;
      border: 1px solid #bcbcbc;
      border-radius: 2px;
      width: 498px;
      height: 30px;
      text-indent: 7px;
      letter-spacing: 0;
    }
    button {
      width: 96px;
      margin-left: 18px;
    }
  }
  .promotion-type {
    label {
      vertical-align: top;
      margin-top: 5px;
    }
    &>div {
      display: inline-block;
      width: 610px;
      input {
        margin-bottom: 15px;
        margin-right: 20px;
      }
      span {
        color: #ff7979;
      }
      button {
        margin-left: 0;
      }
      .add {
        display: inline-block;
        color: #2c87ea;
        margin-left: 15px;
      }
    }
  }
  .advertising {
    overflow: hidden;
    &>div {
      width: 310px;
      display: inline-block;
      float: right;
      margin-right: 15px;
      button {
        width: 96px;
        margin-left: 40px;
      }
      .ivu-select-selection {
        width: 50px;
        background: #f6f6f6;
      }
    }
  }
  .share {
    input {
      width: 698px;
      margin-right: 15px;
    }
  }
  .btn {
    width: 64px;
  }
  .btn1 {
    margin-left: 30px;
  }
}
</style>
