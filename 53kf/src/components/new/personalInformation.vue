<template>
	<form action="" method="post">
		<ul class="person">
			<li>
				<dt>我的账号</dt>
				<dd>15757157003@163.com</dd>
			</li>
			<li>
				<dt>我的公司</dt>
				<dd>金华快服有限公司</dd>
			</li>
			<li>
				<label for="name">我的姓名</label>
				<input type="" name="" id="name" value="张三" />
			</li>
			<li>
				<label for="duty">我的职务</label>
				<input type="" name="" id="duty" value="总经理" />
			</li>
			<li>
				<label for="qq">我的QQ</label>
				<input type="" name="" id="qq" value="112334445" />
			</li>
			<li>
				<label for="msn">我的MSN</label>
				<input type="" name="" id="msn" placeholder="MSN号" />
			</li>
			<li>
				<label for="">公司地区</label>
				<city></city>
			</li>
			<li>
				<label for="site">公司地址</label>
				<input class="location" type="" name="" id="" value="西城博司9栋四楼" />
			</li>
			<li>
				<label for="phone">我的手机</label>
				<input type="" name="" id="phone" value="132344555" />
				<div class="btn change">修改</div>
			</li>
			<li>
				<div>
					<div class="radio">
						<Icon type="ios-checkmark-empty" size='30' color='#fff'></Icon>
					</div>
					<span>邮件接受53KF最新产品、活动信息及职务相关学习知识</span>
				</div>
			</li>
		</ul>

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
	components: {
		city
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
form {
	font-size: 14px;
	font-family: MicrosoftYaHei;
	color: #2c2c2c;
	letter-spacing: 1px;
	line-height: 15px;
	.person {
		list-style-type: none;
		padding: 0;
		li {
			font-size: 14px;
			height: 32px;
			letter-spacing: 1px;
			line-height: 32px;
			margin-bottom: 15px;
			margin-left: 30px;
			dt,
			dd {
				display: inline-block;
			}
			dd {
				margin-left: 25px;
			}
			input {
				width: 250px;
				height: 32px;
				border: 1px solid #bcbcbc;
				border-radius: 2px;
				text-indent: 4px;
			}
			label {
				display: inline-block;
				margin: 0;
				width: 70px;
				margin-right: 17px;
				font-family: MicrosoftYaHei;
				font-size: 14px;
				color: #2c2c2c;
				text-align: left;
			}
		}
	}
	.location {
		width: 320px;
	}
	#phone {
		margin-right: 4px;
	}
	.btn {
		width: 64px;
		height: 32px;
		background: #2c87ea;
		margin: 50px 0 0 115px;
		border: none;
		color: #ffffff;
		font-size: 14px;
		font-family: MicrosoftYaHei;
	}
	.change {
		display: inline-block;
		text-align: center;
		line-height: 32px;
		margin: 0;
	}
	.radio {
		display: inline-block;
		background: #2c87ea;
		margin-left: 90px;
		margin-top: 20px;
		text-align: center;
		border-radius: 2px;
		width: 16px;
		height: 16px;
		&+span {
			display: inline-block;
			margin-top: 20px;
			vertical-align: top;
			font-family: MicrosoftYaHei;
			font-size: 12px;
			color: #2c2c2c;
			letter-spacing: 0.86px;
			line-height: 15px;
			text-align: left;
		}
	}
}
</style>