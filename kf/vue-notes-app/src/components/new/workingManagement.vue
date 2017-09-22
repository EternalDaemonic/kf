<template>
  <div>
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
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
	.work-header{
		font-size: 14px;
		height: 800px;
		font-family:MicrosoftYaHei;
			color:#2c2c2c;
			label {
				margin: 0;
			&:first-child{
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
		#date{
			display: inline-block;
			input{
				width: 120px;
				height: 30px;
				margin-top: 0;
			}
		}
		.btn{
			width: 62px;
			height: 30px;
			border: 1px solid #ddd;
			background: #f7f7f7;
			margin: 0 15px 0 50px;
			&+.btn{
				margin-left: 0;
				width: 94px;
			}
		}
		.add{
			width: 96px;
			height: 32px;
			background: #2C87EA;
			margin-right: 15px;
			border: none;
		}
		.delete{
			border: none;
			width: 64px;
			height: 32px;
			background: #ff7979;
		}
	}
	
</style>
