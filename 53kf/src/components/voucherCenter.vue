<template>
	<div class="nav">
		<ul>
			<li v-for='(item,index,key) in items' :key='item.title' @click="change(index)">
				<router-link :to="item.name" :style="{color:sub ==index?'#4d6e82':'black'}">{{item.title}}</router-link>
			</li>
		</ul>
		<hr />
		<div class="box" :style="{left:distance +'px'}"></div>
		<router-view></router-view>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		name: 'voucher-center',
		data() {
			return {
				key: '',
				items: [{
						title: '我要充值',
						name: {
							name: 'recharge'
						}
					},
					{
						title: '我要提现',
						name: {
							name: 'withdraw'
						}
					}, {
						title: '我的账单',
						name: {
							name: 'bill'
						}
					},
					{
						title: '我的返利',
						name: {
							name: 'rebate'
						}
					},
					{
						title: '我的优惠卷',
						name: {
							name: 'coupon'
						}
					}
				]
			}
		},
    computed: {
      ...mapState({
		distance: state => state.line.distance,
		sub:state => state.line.sub
      })
    },
		methods: {
			change: function(index) {
				let distance;
				if(index == 4) {
					distance = 65 + index * 114;
				} else {
					distance = 58 + index * 114;
				}
				let sub = index;
				this.$store.commit('MOVE',{
			distance:distance,
			sub:sub
		})
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>