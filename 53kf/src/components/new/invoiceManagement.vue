<template>
	<div id="invoice-manage">
		<button class="invoice" :class="{'to':isA,'comm':!isA}" @click="to">可开发票</button>
		<button class="invoice have" :class="{'to':!isA,'comm':isA}" @click="have">已开发票</button>
		<hr />
		<component :is='currentView'></component>
		<div class="invoice-text">
			<hr>
			<span>特别说明</span>
			<ul>
				<li>1、开具增值税专用发票需提供营业执照副本、银行开户许可证（或开票资料）、一般纳税人资格认定文件。</li>
				<li>2、如果税务登记证上无“一般纳税人”字样，请再上传一般纳税人资格认定书。
					<span>一般纳税人资格认定书样板</span>
				</li>
				<li>3、付款账户名称与购货单位名称（发票抬头）不一致时，需提供委托付款证明。
					<span>委托付款证明-下载</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import toInvoice from '@/components/new/invoice/toInvoice'
import haveInvoice from '@/components/new/invoice/haveInvoice'
export default {
	data() {
		return {
			currentView: 'toInvoice',
			isA: true
		}
	},
	methods: {
		to() {
			this.currentView = 'toInvoice';
			this.isA = true;
		},
		have() {
			this.currentView = 'haveInvoice';
			this.isA = false;
		}
	},
	components: {
		toInvoice: toInvoice,
		haveInvoice: haveInvoice
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
#invoice-manage {
	.invoice {
		width: 150px;
		height: 32px; // background: #fff;
		border: none;
		margin-left: 30px;
		color:#2c2c2c;
	}
	.to {
		background: #fff;
		border: none;
		border-left: 1px solid #ddd;
		border-top: 1px solid #2C87EA;
	}
	.have {
		margin-left: -3px;
		border-left: none;
		border-right: 1px solid #ddd;
		border-top: 1px solid #2C87EA;
	}
	.comm {
		color:#929292;
		background: #fbfaf8;
		border: 1px solid #ddd;
	}
	hr {
		margin-top: -1px;
	}
	.invoice-text {
		margin-left: 30px;
		margin-top: 400px;
		font-family: MicrosoftYaHei;
		font-size: 14px;
		color: #2c2c2c;
		letter-spacing: 1px;
		line-height: 15px;
		&>hr {
			margin-left: 0;
		}
		&>span {
			display: inline-block;
			margin-top: 15px;
		}
		li {
			color: #6c6c6c;
			letter-spacing: 1px;
			margin-top: 10px;
			span {
				color: #2c87ea;
			}
		}
	}
}
</style>