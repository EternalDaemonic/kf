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
				<input type="" name="" id="name" v-model="data.name" />
			</li>
			<li>
				<label for="duty">我的职务</label>
				<input type="" name="" id="duty" v-model="data.level" />
			</li>
			<li>
				<label for="qq">我的QQ</label>
				<input type="" name="" id="qq" v-model="data.qq" />
			</li>
			<li>
				<label for="msn">我的MSN</label>
				<input type="" name="" id="msn" placeholder="MSN号" v-model="data.msn" />
			</li>
			<li>
				<label for="">公司地区</label>
				<city></city>
			</li>
			<li>
				<label for="site">公司地址</label>
				<input class="location" type="" name="" id=""  v-model="data.site" />
			</li>
			<li>
				<label for="phone">我的手机</label>
				<input type="" name="" id="phone" v-model="data.phone" />
				<div class="btn change">修改</div>
			</li>
			<li>
				<div class="radio" @click="flag =!flag" :class="{'uactive':!flag}">
					<Icon type="ios-checkmark-empty" size='30' color='#fff' v-show="flag"></Icon>
				</div>
				<span @click="flag = !flag">邮件接受53KF最新产品、活动信息及职务相关学习知识</span>
			</li>
		</ul>
		<input type="submit" value="保存" class="btn" :class="{'btn2':!flag}" />
	</form>
</template>

<script>
import city from "@/components/city";
export default {
  data() {
    return {
      data: {
        name: "张三",
        level: "总经理",
        qq: 1231231231,
        msn: "",
        site: "西城博司9栋四楼",
        phone: 12345678901
	  },
	  flag:true
    };
  },
  components: {
    city
  }
};
</script>
<style lang='less'>
form {
  font-family: MicrosoftYaHei;
  font-size: 14px;
  color: #2c2c2c;
  letter-spacing: 1px;
  line-height: 15px;
  .person {
    list-style-type: none;
    padding: 0;
    li {
      height: 32px;
      line-height: 32px;
      margin-bottom: 15px;
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
    margin: 50px 0 0 85px;
    border: none;
    color: #ffffff;
    font-size: 14px;
    font-family: MicrosoftYaHei;
  }
  .change {
    display: inline-block;
    text-align: center;
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
    & + span {
      display: inline-block;
      margin-top: 10px;
      font-size: 12px;
      vertical-align: top;
      letter-spacing: 0.86px;
    }
  }
  .uactive{
	  border:1px solid rgb(188, 188, 188);
	  background: #fff;
  }
  .btn2 {
    background: rgb(188, 188, 188);
    color: #fff;
    border: none;
  }
}
</style>