<template>
	<div class="work">
		<div class="work-header">
			<label for="zh">账号:</label>
			<input type="text" name="" id="zh" value="" />
			<label for="name">姓名:</label>
			<input type="text" name="" id="name" value="" />
			<label for="date">添加时间:</label>
			<div class="date">
				<DatePicker type="date" confirm placeholder="选择日期" style="width:120px"></DatePicker>&nbsp;-
				<DatePicker type="date" confirm placeholder="选择日期" style="width: 120px"></DatePicker>
			</div>
			<button class="btn">查询</button>
			<button class="add" @click="uIAlertController('addUp')">添加工号</button>
			<button class="delete">删除</button>
		</div>
		<div>
			<Row class="one">
				<Col span="1" class="first">
				<div class="check" @click="flag = !flag" :class="{'check-u':!flag}">
					<Icon type="ios-checkmark-empty" size='30' v-show="flag" color='#fff'></Icon>
				</div>
				</Col>
				<Col span="1">序号</Col>
				<Col span="5">账号</Col>
				<Col span="3">工号</Col>
				<Col span="2">姓名</Col>
				<Col span="2">状态</Col>
				<Col span="3">添加时间</Col>
				<Col span="3">
				<div class="open">操作</div>
				</Col>
				<Col span="3">
				<div class="open">工号设置</div>
				</Col>
			</Row>
			<Row v-for="(item,index) in data" :key="item.account">
				<Col span="1" class="first">
				<div class="check" @click="flag = !flag" :class="{'check-u':!flag}">
					<Icon type="ios-checkmark-empty" size='30' v-show="flag" color='#fff'></Icon>
				</div>
				</Col>
				<Col span="1">{{index}}</Col>
				<Col span="5">{{item.account}}</Col>
				<Col span="3">{{item.work}}</Col>
				<Col span="2">{{item.name}}</Col>
				<Col span="2" class="state">{{item.state}}</Col>
				<Col span="3">{{item.time}}</Col>
				<Col span="3" class="set compile">
				<div @mouseover="over(index)" @mouseout="out(index)" class="open">开通
					<Icon type="ios-arrow-down" color='#2c87ea' size='15' :class="{'down':icon}" v-show="index != 0"></Icon>
				</div>
				<ul v-show="index == sub && index != 0" class="list" @mouseover="over(index)" @mouseout="out(index)">
					<li>开通</li>
					<li @click="uIAlertController('changeUp')">编辑</li>
					<li @click="uIAlertController('deleteUp')">删除</li>
				</ul>
				</Col>
				<Col span="3" class="set" v-show="index != 1">
				<div class="open">资料完善</div>
				</Col>
				<Col span="3" class="set" v-show="index == 1">
				<div @mouseover="overSet(index)" @mouseout="outSet(index)" class="open">工号设置
					<Icon type="ios-arrow-down" color='#2c87ea' size='15' :class="{'down':icon1}" v-show="index != 0"></Icon>
				</div>
				<ul v-show="index == sub1" class="list" @mouseover="overSet(index)" @mouseout="outSet(index)">
					<li @click="uIAlertController('jurisdictionUp')">工号权限</li>
					<li @click="uIAlertController('resetUp')">密码重置</li>
					<li>资料完善</li>
				</ul>
				</Col>
			</Row>
		</div>
		<!-- 弹框 -->
		<div class="add-up" v-show="popUp == 'addUp'">
			<h4>添加工号
				<span @click="cancal">
                <Icon type="ios-close-empty" size="30" color='#d8d8d8' ></Icon>
           		 </span>
			</h4>
			<hr>
			<div>
				<label for="">工号账号：</label>
				<input type="text" v-model="data.account">
			</div>
			<div>
				<label for="">姓名：</label>
				<input type="text" v-model="data.name">
			</div>
			<div>
				<button class="btn1">添加</button>
				<button class="btn2" @click="cancal">取消</button>
			</div>
		</div>
		<div class="change-up" v-show="popUp == 'changeUp'">
			<h4>编辑工号
				<span @click="cancal" >
                <Icon type="ios-close-empty" size="30" color='#d8d8d8' ></Icon>
            </span>
			</h4>
			<hr>
			<div>工号账号：123456789@qq.com</div>
			<div>
				<label for="">姓名：</label>
				<input type="text" v-model="data.name">
			</div>
			<div>
				<button class="btn1">添加</button>
				<button class="btn2" @click="cancal">取消</button>
			</div>
		</div>
		<div class="delete-up" v-show="popUp == 'deleteUp'">
			<h4>删除提示
				<span @click="cancal">
                <Icon type="ios-close-empty" size="30" color='#d8d8d8' ></Icon>
            </span>
			</h4>
			<hr>
			<p>确认删除后，该工号所开通的全部功能将一并取消</p>
			<div>
				<button class="btn1">删除</button>
				<button class="btn2" @click="cancal">取消</button>
			</div>
		</div>
		<div class="reset-up" v-show="popUp == 'resetUp'">
			<h4>重置工号密码
				<span @click="cancal">
                <Icon type="ios-close-empty" size="30" color='#d8d8d8' ></Icon>
            </span>
			</h4>
			<hr>
			<div>工号账号：123456789@qq.com</div>
			<div>
				<label for="">密码：</label>
				<input type="text" v-model="data.password">
				<span>请输入6-20位的密码，不能有空格和纯数字</span>
			</div>
			<div>
				<button class="btn1">保存</button>
				<button class="btn2" @click="cancal">取消</button>
			</div>
		</div>
			<div class="jurisdiction-up" v-show="popUp == 'jurisdictionUp'">
			<h4>工号权限设置
				<span @click="cancal">
                <Icon type="ios-close-empty" size="30" color='#d8d8d8' ></Icon>
            </span>
			</h4>
			<hr>
			<div>工号账号：123456789@qq.com</div>
			<div>
				<label for="">权限设置：</label>
				<span class="check" @click="flag = !flag" :class="{'check-u':!flag}">
					<Icon type="ios-checkmark-empty" size='30' v-show="true" color='#fff'></Icon>
				</span>
				<span>我要赚钱（cps推广）</span>
			</div>
			<div>
				<button class="btn1">添加</button>
				<button class="btn2" @click="cancal">取消</button>
			</div>
		</div>
	</div>
</template>

<script>
	let data = [{
			account: "506488765@qq.com(主账号)",
			work: "000001",
			name: "小语子",
			state: "已激活",
			time: "2016-04-27"
		},
		{
			account: "506488765@qq.com(主账号)",
			work: "000002",
			name: "lisi",
			state: "已激活",
			time: "2016-04-27"
		}
	];
	//flag 判断复选框 columns标题 sub,icon操作 sub1，icon1工号设置 length 数据的长度
	export default {
		data() {
			return {
				flag: true,
				columns3: [{
						title: "账号",
						key: "account"
					},
					{
						title: "工号",
						key: "work"
					},
					{
						title: "姓名",
						key: "name"
					},
					{
						title: "状态",
						key: "state"
					},
					{
						title: "添加时间",
						key: "time"
					},
					{
						title: "操作",
						key: "operation"
					},
					{
						title: "工号设置",
						key: "set"
					}
				],
				data,
				sub: 3,
				length: 0,
				icon: false,
				sub1: 1,
				icon1: false,
				flag1: false,
				data1: {
					account: "",
					name: "",
					work: ""
				},
				popUp:''
			};
		},
		methods: {
			over(index) {
				this.sub = index;
				this.icon = true;
			},
			out(index) {
				this.sub = this.length + 1;
				this.icon = false;
			},
			overSet(index) {
				this.sub1 = index;
				this.icon1 = true;
			},
			outSet(index) {
				this.sub1 = this.length + 1;
				this.icon1 = false;
			},
			cancal() {
				this.flag1 = false;
				this.$store.commit("MASKING", false);
			},
			uIAlertController(str){
				this.popUp = str;
				this.$store.commit('MASKING',true);
			},
			cancal(){
				this.popUp = '';
				this.$store.commit('MASKING',false);
			}
		},
		created() {
			this.length = data.length;
			this.sub = data.length + 1;
			this.sub1 = data.length + 1;
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
	@import "./../../assets/less/work.less";
</style>