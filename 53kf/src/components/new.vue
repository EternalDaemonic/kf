<template>
<div>
	<div class="nav">
		<!-- 主账号 -->
		<linec :items='items' v-show="state"></linec>
		<!-- 子账号 -->
		<linec :items='items1' v-show="!state"></linec>
		<!--<input type="text" name="" id="" v-model="distance" />-->
	</div>
		<router-view></router-view>
</div>

</template>

<script>
	import linec from '@/components/linec'
	import {mapState} from 'vuex'
	export default {
		computed:{
			...mapState({
				state:state=>state.state.value
			})
		},
		data() {
			return {
				items: [{
						title: '账号信息',
						name: {
							name: 'account-information'
						}
					},
					{
						title: '个人信息',
						name: {
							name: 'personal-information'
						}
					},
					{
						title: '密码修改',
						name: {
							name: 'password-modification'
						}
					},
					{
						title: '工号管理',
						name: {
							name: 'working-management'
						}
					},
					{
						title: '发票管理',
						name: {
							name: 'invoice-management'
						}
					},
					{
						title: '登录模板',
						name: {
							name: 'login-template'
						}
					},
					{
						title: '我的认证',
						name: {
							name: 'certification'
						}
					},
					{
						title: '收货地址',
						name: {
							name: 'shipping-address'
						}
					}
				],
				items1:[
					{
						title: '个人信息',
						name: {
							name: 'personal-information'
						}
					},
					{
						title: '密码修改',
						name: {
							name: 'password-modification'
						}
					}
				]
			}
		},
		methods:{
			
		},
		components:{
			'linec':linec
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
	@import '../assets/less/common.less';
	
</style>