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
		<input type="" name="" id="" value="15757157003@163.com" /><br />
		<label for="site">公司地址</label>
		<input type="" name="" id="site" value="紫萱路西城博司9栋四层" /><br />
		<label for="phone">我的手机</label>
		<input type="" name="" id="phone" value="132344555" /><br />
		<input type="submit" value="保存" id="save" />
	</form>
</template>

<script>
	export default {
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
	form {
		font-size: 14px;
		font-family: MicrosoftYaHei;
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
		}
		#save {
			width: 64px;
			height: 32px;
			background: #2c87ea;
			margin: 50px 0 0 115px;
			border: none;
		}
	}
</style>