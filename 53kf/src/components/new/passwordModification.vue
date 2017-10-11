<template>
	<form action="" method="post">
		<label for="oldpasswoed">原密码</label>
		<input type="password" name="" id="" value="" /><br />
		<label for="newpassword1">新密码</label>
		<input type="password" id="newpassword1" /> <br />
		<label for="newpassword2">确认密码</label>
		<input type="password" id="newpassword2" /><br />
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
<style lang="less">
	form {
		font-size: 14px;
		font-family: MicrosoftYaHei;
		input {
			margin-right: 30px;
			width: 250px;
			height: 32px;
			border: 1px solid #bcbcbc;
			border-radius: 2px;
			&:first-child{
				margin-top: 5px;
			}
		}
		label {
			display: inline-block;
			width: 70px;
			margin: 32px 12px 0 30px;
			&:first-child{
				margin-top: 10px;
			}
		}
		#save {
			width: 64px;
			height: 32px;
			background: #2c87ea;
			margin: 50px 0 0 115px;
			color: #fff;
			border: none;
		}
	}
</style>