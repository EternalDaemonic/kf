<template>
	<div id="coupon">
		<div class="coupon-top">
			<dt>支出：</dt>
			<dd>0.00元</dd>
			<dt>收入：</dt>
			<dd>0.00元</dd>
		</div>
		<div class="coupon-fill">
			<div class="check">
				<Icon type="ios-checkmark-empty" size='30' color='#fff'></Icon>
			</div>
			<label for="">收入</label>
			<div class="coupon-check">
				<Icon type="ios-checkmark-empty" size='30' color='#fff'></Icon>
			</div>
			<label for="">支出</label>
			<label for="">消费时间：</label>
			<div>
				<DatePicker type="date" confirm placeholder="选择日期" style="width:120px"></DatePicker>&nbsp;-
				<DatePicker type="date" confirm placeholder="选择日期" style="width: 120px"></DatePicker>
			</div>
			<button class="btn1">查询</button>
		</div>
		<div class="bank-content">
			<Table height="550" :columns="columns1" :data="historyData" style="border:none"></Table>
			<Page :total="dataCount" :page-size="pageSize" show-total @on-change="changepage" show-elevator></Page>
		</div>
	</div>
</template>

<script>
let data1 = [
	{
		account: 1442800,
		balance: 188892.00,
		type: '不可提现',
		money: -600.00,
		time: '2017/09/10 13:10:10',
		set: '优惠券抵扣0.00元, 扣除不可提现3.68元',
	},
	{
		account: 1442800,
		balance: 188892.00,
		type: '不可提现',
		money: -600.00,
		time: '2017/09/10 13:10:10',
		set: '优惠券抵扣0.00元, 扣除不可提现3.68元',
	},
	{
		account: 1442800,
		balance: 188892.00,
		type: '不可提现',
		money: -600.00,
		time: '2017/09/10 13:10:10',
		set: '优惠券抵扣0.00元, 扣除不可提现3.68元',
	},
	{
		account: 1442800,
		balance: 188892.00,
		type: '不可提现',
		money: -600.00,
		time: '2017/09/10 13:10:10',
		set: '优惠券抵扣0.00元, 扣除不可提现3.68元',
	},
	{
		account: 1442800,
		balance: 188892.00,
		type: '不可提现',
		money: -600.00,
		time: '2017/09/10 13:10:10',
		set: '优惠券抵扣0.00元, 扣除不可提现3.68元',
	},
	{
		account: 1442800,
		balance: 188892.00,
		type: '不可提现',
		money: -600.00,
		time: '2017/09/10 13:10:10',
		set: '优惠券抵扣0.00元, 扣除不可提现3.68元',
	},
	{
		account: 1442800,
		balance: 188892.00,
		type: '不可提现',
		money: -600.00,
		time: '2017/09/10 13:10:10',
		set: '优惠券抵扣0.00元, 扣除不可提现3.68元',
	},
	{
		account: 1442800,
		balance: 188892.00,
		type: '不可提现',
		money: -600.00,
		time: '2017/09/10 13:10:10',
		set: '优惠券抵扣0.00元, 扣除不可提现3.68元',
	},
	{
		account: 1442800,
		balance: 188892.00,
		type: '不可提现',
		money: -600.00,
		time: '2017/09/10 13:10:10',
		set: '优惠券抵扣0.00元, 扣除不可提现3.68元',
	},
	{
		account: 1442800,
		balance: 188892.00,
		type: '不可提现',
		money: -600.00,
		time: '2017/09/10 13:10:10',
		set: '优惠券抵扣0.00元, 扣除不可提现3.68元',
	},
	{
		account: 1442800,
		balance: 188892.00,
		type: '不可提现',
		money: -600.00,
		time: '2017/09/10 13:10:10',
		set: '优惠券抵扣0.00元, 扣除不可提现3.68元',
	},
	{
		account: 1442800,
		balance: 188892.00,
		type: '不可提现',
		money: -600.00,
		time: '2017/09/10 13:10:10',
		set: '优惠券抵扣0.00元, 扣除不可提现3.68元',
	},
	{
		account: 1442800,
		balance: 188892.00,
		type: '不可提现',
		money: -600.00,
		time: '2017/09/10 13:10:10',
		set: '优惠券抵扣0.00元, 扣除不可提现3.68元',
	},
	{
		account: 1442800,
		balance: 188892.00,
		type: '不可提现',
		money: -600.00,
		time: '2017/09/10 13:10:10',
		set: '优惠券抵扣0.00元, 扣除不可提现3.68元',
	}
]
export default {
	data() {
		return {
			// 初始化信息总条数
			dataCount: 0,
			// 每页显示多少条
			pageSize: 10,
			columns1: [
				{
					type: 'index',
					title: '序号'
				},
				{
					title: '优惠卷编号',
					key: 'account',
				},
				{
					title: '金额',
					key: 'money'
				},
				{
					title: '余额',
					key: 'balance'
				},
				{
					title: '资金流向',
					key: 'type'
				},
				{
					title: '日期',
					key: 'time'
				},
				{
					title: '备注',
					key: 'set'
				}
			],
			historyData: [],
			ajaxData: [],
			ajaxHistoryData:[],
		}
	},
	methods: {
		handleListApproveHistory(){
                // 保存取到的所有数据
                this.ajaxData = data1;
                this.dataCount = data1.length;
                // 初始化显示，小于每页显示条数，全显，大于每页显示条数，取前每页条数显示
               if(data1.length < this.pageSize){
                    this.historyData = this.ajaxData;
                }else{
                    this.historyData = this.ajaxData.slice(0,this.pageSize);
                }
				
            },
		changepage(index) {
			var _start = (index - 1) * this.pageSize;
			var _end = index * this.pageSize;
			this.historyData = this.ajaxData.slice(_start, _end);
		}
	},
	 created(){
             this.handleListApproveHistory();
        }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.coupon {
	font-family: MicrosoftYaHei;
	font-size: 14px;
	color: #5a5a5a;
	letter-spacing: 1px;
	margin-top: 10px;
	.coupon-top {
		dt,
		dd {
			display: inline-block;
			color: #2c2c2c;
		}
		dd:nth-of-type(1) {
			color: #FF7B2B;
			font-weight: bolder;
			margin-right: 50px;
		}
		dd:nth-of-type(2) {
			color: #00A645;
			font-weight: bolder;
		}
	}
	.coupon-fill {
		margin-top: 30px;
		margin-bottom: 40px;
		height: 32px;
		&>div {
			vertical-align: middle;
			display: inline-block;
		}
		.check {
			text-align: center;
			background: #2c87ea;
			border-radius: 2px;
			width: 16px;
			height: 16px;
		}
		label {
			margin-right: 40px;
			&:nth-of-type(3) {
				margin-right: 15px;
			}
		}
		.btn1 {
			background: #2c87ea;
			width: 64px;
			height: 32px;
			border: none;
			color: #fff;
			margin: 0 30px 0 20px;
		}
		.ivu-input {
			border: 1px solid #bcbcbc;
			border-radius: 2px;
			width: 118px;
			height: 32px;
		}
	}

	.ivu-icon-ios-checkmark-empty {
		transform: translate(0, -7px);
	}
	.ivu-table th {
		font-family: MicrosoftYaHei;
		font-size: 14px;
		color: #9f9f9f;
		background: #fff;
		letter-spacing: 1px;
	}
	.ivu-table:after,
	.ivu-table:before {
		width: 0;
		height: 0;
	}
}
</style>
