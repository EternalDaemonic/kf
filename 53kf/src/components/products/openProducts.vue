<template>
  <div class="open-products">
    <div class="top">
      <button class="btn" :class="{'btn1':flag}" @click="flag = true">按产品开通</button>
		  <button class="btn" :class="{'btn1':!flag}" @click="flag = false">按工号开通</button>
      <input type="text" placeholder="请输入工号" v-show="!flag">
      <button class="btn3" v-show="!flag">添加工号</button>
      <hr>
    </div>
    <!-- 按产品开通 -->
    <div class="open-content" v-show="flag">
      <Row>
        <Col span='3' class-name='product-name'>产品名称</Col>
        <Col span='3'>使用周期</Col>
        <Col span='3'>价格(元)</Col>
        <Col span='12'>价格说明</Col>
        <Col span='3'>操作</Col>
      </Row>
       <Row v-for="(item,index) in data" :key="item.name">
        <Col span='3' class-name='first'><img :src="item.src" alt=""><span>{{item.name}}</span></Col>
        <Col span='3'>{{item.time}}</Col>
        <Col span='3' class-name='money'>{{item.money}}</Col>
        <Col span='11' offset='1' class-name='description'>{{item.description}}</Col>
        <Col span='3'><button class="btn3"  v-show="item.name != '企业通讯'" @click="open">开通</button><button v-show="item.name == '企业通讯'" class='qytx'>免费</button></Col>
      </Row>
    </div>
    <!-- 按工号开通 -->
     <div class="open-content" v-show="!flag">
      <Row>
        <Col span='3' class-name='product-name'>账号</Col>
        <Col span='3'>姓名</Col>
        <Col span='11' offset='1' >已开通产品</Col>
        <Col span='3'>操作</Col>
      </Row>
       <Row v-for="(item,index) in workData" :key="item.name">
        <Col span='3'>{{item.account}}</Col>
        <Col span='3'>{{item.name}}</Col>
        <Col span='11' offset='1' class-name='have-open'>
          <img :src="src.src" v-for="src in item.img" :key="src.src">
        </Col>
        <Col span='3'><button class="btn3">开通</button></Col>
      </Row>
	  <!-- 遮罩 -->
    </div>
	  <div class="mask" v-show="openUp" :style="{width:width+'px',height:height+'px'}">
	</div>
    <!-- 客服系统弹框 -->
    <div class="kf-pop-up" v-show="kf">
      <h4>开通产品-功能
        	<span @click="kf = false">
                <Icon type="ios-close-empty" size="30" color='#d8d8d8' ></Icon>
          </span>
      </h4>
      <hr>
      <div><input type="text" placeholder="请输入搜索姓名"><button class="btn2" @click="addWork">添加工号</button><span>离职工号请单独开通</span></div>
      <hr>
      <div class="up-table">
          <div class="up-table-top">
            <span>姓名</span>
            <span>套餐</span>
            <span>价格</span>
            <span>到期时间</span>
            <span>操作</span>
          </div>
		  <hr>
          <div class="up-table-content" v-for="item in upData" :key="item.name" >
            <div>{{item.name}}</div>
            <div> 
				<Select style="width:150px" v-model="select">
           			 <Option v-for="sub in item.option" :key='sub' :value="0">{{sub}}</Option>
            	</Select>
            </div>
			<div class="up-money">
				{{item.money}}
			</div>
			<div :class="{'red':item.time > time}">
				{{item.time | formatDate}}<span class="time-state">{{item.time | text}}</span>
			</div>
			<div>
				<Tooltip content="自动续费" placement="left">
					<button class="btn2" v-show="item.value == 0" @click="openPopUp(item.option[0] ,item.value)">开通</button>
					<div class="swipe" v-show="item.value != 0" :class="{'open-swipe':item.value == 2}" @click="openPopUp(item.option[0] ,item.value)">
						<div></div>
					</div>
           		 </Tooltip>
			</div>
          </div>
      </div>
    </div>
	<!-- 二次弹框 -->
	<div class="open-up" v-show="openUp">
		<h4>{{alert}}
			<span>
				<Icon type="ios-close-empty" size="30" color='#d8d8d8' ></Icon>
			</span>
		</h4>
		<hr>
		<p  v-show="!addW">{{text}}</p>
    <!-- 添加工号 -->
      	<div v-show="addW">
				<label for="">工号账号：</label>
				<input type="text" v-model="data.account">
			</div>
			<div  v-show="addW">
				<label for="">姓名：</label>
				<input type="text" v-model="data.name">
			</div>
		<div class="up-bottom">
			<button class="btn1">确定</button>
			<button class="btn2" @click="openUp = false">取消</button>
		</div>
	</div>
  </div>
</template>

<script>
import src from "./../../assets/img/product/logo.png";
import phone from "./../../assets/img/product/400.png";
import CRM from "./../../assets/img/product/CRM.png";
import jzl from "./../../assets/img/product/jzl.png";
import kf from "./../../assets/img/product/kf.png";
import kkq from "./../../assets/img/product/kkq.png";
import OA from "./../../assets/img/product/OA.png";
import qytx from "./../../assets/img/product/qytx.png";
import szgl from "./../../assets/img/product/szgl.png";
import WiseCRM from "./../../assets/img/product/WiseCRM.png";
import yjpt from "./../../assets/img/product/yjpt.png";
import { formatDate } from "./../../assets/js/date.js";
import { mapState } from "vuex";
let data = [
    {
      src: kf,
      name: "客服系统",
      time: "一个月",
      money: "50.00",
      description: "每月1日，按实际开通坐席数自动收费；月内任意天开通，按实际使用天数，开通坐席数即时收费"
    },
    {
      src: CRM,
      name: "回头客",
      time: "一个月",
      money: "50.00",
      description: "每月1日，按实际开通坐席数自动收费；月内任意天开通，按实际使用天数，开通坐席数即时收费"
    },
    {
      src: OA,
      name: "蓝源OA",
      time: "一个月",
      money: "10.00",
      description: "每月1日，按实际开通坐席数自动收费；月内任意天开通，按实际使用天数，开通坐席数即时收费"
    },
    {
      src: szgl,
      name: "收支管理",
      time: "一个月",
      money: "50.00",
      description: "每月1日，按实际开通坐席数自动收费；月内任意天开通，按实际使用天数，开通坐席数即时收费"
    },
    {
      src,
      name: "高防服务",
      time: "一个月",
      money: "500.00",
      description: "每月1日，按实际开通坐席数自动收费；月内任意天开通，按实际使用天数，套餐类型即时收费"
    },
    {
      src: phone,
      name: "400电话",
      time: "一个月",
      money: "1200.00起",
      description: "按实际开通套餐价格即时收费，该套餐账户金额自购买日起一年内有效"
    },
    {
      src: yjpt,
      name: "邮件平台",
      time: "--",
      money: "400.00起",
      description: "按实际开通套餐价格即时收费"
    },
    {
      src,
      name: "访客管理",
      time: "一个月",
      money: "50.00起",
      description: "起始值为500条，每增加500条收费50元"
    },
    {
      src,
      name: "界面定制",
      time: "--",
      money: "2000.00起",
      description: "按定制内容收费"
    },
    {
      src: jzl,
      name: "九枝兰助手",
      time: "一年",
      money: "5000.00起",
      description: "按实际开通套餐价格即时收费，改套餐自购买日起一年内有效"
    },
    {
      src: kf,
      name: "独立主机",
      time: "一个月",
      money: "6000.00起",
      description: "	按实际开通套餐价格即时收费。"
    },
    {
      src: kf,
      name: "服务器版",
      time: "一年",
      money: "10000.00起",
      description: "服务器版"
    },
    {
      src: WiseCRM,
      name: "WiseCRM",
      time: "一个月",
      money: "50.00",
      description: "每月1日，按实际开通坐席数自动收费；月内任意天开通，按实际使用天数、开通座席数即时收费。"
    },
    {
      src: kkq,
      name: "快考勤",
      time: "一个月",
      money: "5.00",
      description: "	按月收费"
    },
    {
      src: qytx,
      name: "企业通讯",
      time: "永久",
      money: "免费",
      description: "免费使用，无需开通"
    }
  ],
  workData = [
    {
      account: "liangxiaojie@163.com",
      name: "梁小姐",
      img: [{ src: OA }, { src: phone }, { src: yjpt }]
    },
    {
      account: "liangxiaojie@163.com",
      name: "梁小姐",
      img: [{ src: OA }, { src: phone }, { src: yjpt }]
    },
    {
      account: "liangxiaojie@163.com",
      name: "梁小姐",
      img: [{ src: OA }, { src: phone }, { src: yjpt }]
    },
    {
      account: "liangxiaojie@163.com",
      name: "梁小姐",
      img: [{ src: OA }, { src: phone }, { src: yjpt }]
    },
    {
      account: "liangxiaojie@163.com",
      name: "梁小姐",
      img: [{ src: OA }, { src: phone }, { src: yjpt }]
    }
  ];
let upData = [
  {
    name: "梁小姐",
    option: ["收回管理功能"],
    money: "20.00元/月",
    time: 1469281964000,
    value: 0
  },
  {
    name: "梁小姐",
    option: ["收回管理功能"],
    money: "20.00元/月",
    time: 1469281964000,
    value: 1
  },
  {
    name: "梁小姐",
    option: ["收回管理功能"],
    money: "20.00元/月",
    time: 2469281964000,
    value: 2
  }
];
//data为数据，flag判断产品开通还是工号开通
export default {
  computed: {
    time: () => new Date().getTime(),
    ...mapState({
      width: state => state.size.width,
      height: state => state.size.height
    })
  },
  data() {
    return {
      flag: true,
      data,
      workData,
      upData,
      select: 0,
      kf: false,
      openUp: false,
      //text二次弹框内容 alert提示
      text: "",
      alert: "",
      //添加工号弹框
      addW:false
    };
  },
  methods: {
    open() {
      this.kf = true;
      this.$store.commit("MASKING", false);
    },
    //二次弹框
    openPopUp(select, val) {
      this.openUp = true;
      this.addW = false;
      if (val != 2) {
        this.alert = "开通产品-功能";
        this.text = select;
      } else {
        this.alert = "提示";
        this.text = "关闭自动续费后，该功能将不再自动续费，到期后需手动开通，您确定要关闭吗？";
      }
    },
    //添加工号
    addWork(){
       this.openUp = true;
       this.addW = true;
        this.alert = "添加工号";
    }
  },
  filters: {
    formatDate(time) {
      var date = new Date(time),
        Y = date.getFullYear(),
        m = date.getMonth() + 1,
        d = date.getDate(),
        H = date.getHours(),
        i = date.getMinutes(),
        s = date.getSeconds();
      if (m < 10) {
        m = "0" + m;
      }
      if (d < 10) {
        d = "0" + d;
      }
      if (H < 10) {
        H = "0" + H;
      }
      var t = Y + "-" + m + "-" + d;
      return t;
    },
    text(time) {
      let date1 = new Date().getTime();
      if (date1 > time) {
        return "使用中";
      } else {
        return "已过期";
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' >
@import "./../../assets/less/openProducts.less";
</style>
