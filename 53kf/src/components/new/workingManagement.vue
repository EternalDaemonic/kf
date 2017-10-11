<template>
	<div id="work">
		<div class="work-header">
			<label for="zh">账号:</label>
			<input type="text" name="" id="zh" value="" />
			<label for="name">姓名:</label>
			<input type="text" name="" id="name" value="" />
			<label for="date">添加时间:</label>
			<div id="date">
				<DatePicker type="date" confirm placeholder="选择日期" style="width:120px"></DatePicker>&nbsp;-
				<DatePicker type="date" confirm placeholder="选择日期" style="width: 120px"></DatePicker>
			</div>
			<button class="btn">查询</button>
			<button class="btn">批量开通</button>
			<button class="add">添加工号</button>
			<button class="delete">删除</button>
		</div>
		<div>
			<Table highlight-row ref="currentRowTable" :columns="columns3" :data="data1" ></Table>
			<Button @click="handleClearCurrentRow">Clear</Button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			columns3: [
				{
					type: 'selection',
					width: 60,
					align: 'center'
				},
				{
					type: 'index',
					title:'序号',
					width: 60,
					align: 'center'
				},
					{
					title:'账号',
					key: 'account',
					align:'center'
				},
					{
					title:'工号',
					key: 'work'
				},
				{
					title: '姓名',
					key: 'name'
				},
				{
					title: '状态',
					key: 'state'
				},
				{
					title: '添加时间',
					key: 'time'
				},
				{
					title: '操作',
					key: 'operation'
				},
				{
					title: '工号设置',
					key: 'set'
				}
			],
			data1: [
				{
					name: '王小明',
					age: 18,
					address: '北京市朝阳区芍药居'
				},
				{
					name: '张小刚',
					age: 25,
					address: '北京市海淀区西二旗'
				},
				{
					name: '李小红',
					age: 30,
					address: '上海市浦东新区世纪大道'
				},
				{
					name: '周小伟',
					age: 26,
					address: '深圳市南山区深南大道'
				}
			]
		}
	},
	methods: {
		handleClearCurrentRow() {
			this.$refs.currentRowTable.clearCurrentRow();
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
#work {
	width: 100%;
	min-width: 1470px;
	.work-header {
		font-size: 14px;
		font-family: MicrosoftYaHei;
		color: #2c2c2c;
		margin-bottom: 40px;
		label {
			margin: 0;
			&:first-child {
				display: inline-block;
				margin-left: 30px;
				margin-top: 5px;
			}
		}
		input {
			margin-right: 30px;
			margin-top: 5px;
			height: 30px;
			width: 148px;
			border: 1px solid #bcbcbc;
			border-radius: 2px;
		}
		#date {
			display: inline-block;
			input {
				width: 120px;
				height: 30px;
				margin-top: 0;
			}
		}
		.btn {
			width: 62px;
			height: 30px;
			border: 1px solid #ddd;
			background: #f7f7f7;
			margin: 0 15px 0 50px;
			&+.btn {
				margin-left: 0;
				width: 94px;
			}
		}
		.add {
			width: 96px;
			height: 32px;
			background: #2C87EA;
			margin-right: 15px;
			border: none;
		}
		.delete {
			border: none;
			width: 64px;
			height: 32px;
			background: #ff7979;
		}
	}
	.ivu-table-wrapper{
		border: none;
	}
}
</style>
