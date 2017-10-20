<template>
	<div class="have-invoice">
		<table-page :columns='columns' :data1='data1'></table-page>
	</div>
</template>

<script>
import tablePage from "@/components/table";
let columns = [
	{
      title: "时间",
      key: "time"
	},
	{
      title: "金额(元)",
      key: "money"
    },
    {
      title: "账单号",
      key: "account",
    },
    {
      title: "充值方式",
      key: "type"
    },
    {
      title: "开票逾期时间",
      key: "kpyqsj"
    },
    {
      title: "操作",
      key: "set",
	  align: "left",
	  className:'table-td'
    }
  ],
  data1 = [
    {
      account: "11111111111",
      type: "支付宝",
      money: "10000000",
      time: "2017-10-10 10:10:10",
      kpyqsj: "2017-10-10 10:10:10",
      set: "查看"
    }
  ];
export default {
  data() {
    return {
      columns,
      data1
    };
  },
  components: {
    tablePage
  }
};
</script>

<style lang="less">
.have-invoice {
  .ivu-table {
    .table-td {
      text-align: left;
    }
  }
}
</style>