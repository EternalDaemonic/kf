<template>
	<form action="" method="post">
		<ul class="person">
			<li>我的账号</li>
			<li>15757157003@163.com</li><br />
			<li>我的公司</li>
			<li>金华快服有限公司</li>
		</ul>
		<label for="name">我的姓名</label>
		<input type="" name="" id="name" value="张三" /><br />
		<label for="duty">我的职务</label>
		<input type="" name="" id="duty" value="总经理" /><br />
		<label for="qq">我的QQ</label>
		<input type="" name="" id="qq" value="112334445" /><br />
		<label for="msn">我的MSN</label>
		<input type="" name="" id="msn" placeholder="MSN号" /><br />
		<label for="">公司地区</label>
			<city></city><br>
		<label for="site">公司地址</label>
		<input class="location" type="" name="" id="" value="西城博司9栋四楼" /><br />
		<label for="phone">我的手机</label>
		<input type="" name="" id="phone" value="132344555" />
		<div class="btn change">修改</div><br />
		<div>
			<div class="radio">
            <img src="./../../assets/img/true-bottom.png" alt=""></div> <span>邮件接受53KF最新产品、活动信息及职务相关学习知识</span>
			</div>
			</div>
		<input type="submit" value="保存" class="btn" />
	</form>
</template>

<script>
	import city from '@/components/city'
	export default {
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		},
		components:{
			city
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
	form {
		font-size: 14px;
		font-family: MicrosoftYaHei;
		color:#2c2c2c;
		letter-spacing:1px;
		line-height:15px;
		.person {
			list-style-type: none;
			padding: 0;
			li {
				display: inline-block;
				width: 70px;
				font-size: 14px;
				margin: 0 12px 32px 30px;
				&:nth-of-type(2n) {
					width: 200px;
					margin-left: 0;
				}
				;
				&:nth-of-type(n+2) {
					margin-bottom: 0;
				}
			}
		}
		input {
			margin: 32px 30px 0 0;
			width: 250px;
			height: 32px;
			border: 1px solid #bcbcbc;
			border-radius: 2px;
			text-indent: 4px;
		}
		label {
			display: inline-block;
			width: 70px;
			margin: 32px 12px 0 30px;
			font-family:MicrosoftYaHei;
			font-size:14px;
			color:#2c2c2c;
			letter-spacing:1px;
			line-height:15px;
			text-align:left;
		}
		.location{
			width: 320px;
		}
		#phone{
			margin-right: 4px;
		}
		.btn{
			width: 64px;
			height: 32px;
			background: #2c87ea;
			margin: 50px 0 0 115px;
			border: none;
			color:#ffffff;
			font-size: 14px;
			font-family:MicrosoftYaHei;
		}
		.change{
			display: inline-block;
			text-align: center;
			line-height:32px; 
			margin:0;
		}
		.radio{
			display: inline-block;
			background:#2c87ea;
			width:15px;
			height:14px;
			margin-left: 115px;
			margin-top: 20px;
			img{
				vertical-align: top;
				padding-top: 2px;
			}
			&+span{
				display: inline-block;
				margin-top: 20px;
				vertical-align: top;
				font-family:MicrosoftYaHei;
				font-size:12px;
				color:#2c2c2c;
				letter-spacing:0.86px;
				line-height:15px;
				text-align:left;
			}
		}

	}
</style>