<template>
	<div id="invoice-manage">
		<button class="invoice" @click="currentView='toInvoice'">可开发票</button>
		<button class="invoice have" @click="currentView='haveInvoice'">已开发票</button>
		<hr />
		<component :is='currentView'></component>
	</div>
</template>

<script>
	import toInvoice from '@/components/new/invoice/toInvoice'
	import haveInvoice from '@/components/new/invoice/haveInvoice'
	export default {
		data() {
			return {
				currentView: 'toInvoice'
			}
		},
		components: {
			toInvoice: toInvoice,
			haveInvoice: haveInvoice
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
	#invoice-manage {
		.invoice {
			width: 150px;
			height: 32px;
			background: #fff;
			border: none;
			border-left: 1px solid #ddd;
			border-top: 1px solid #2C87EA;
			margin-left: 30px;
		}
		.have {
			background: #fbaf8;
			border: 1px solid #ddd;
			margin-left: -3px;
		}
		hr {
			margin-top: -1px;
		}
	}
</style>