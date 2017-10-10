<template>
   <div class="nav">
		<linec :items='items'></linec>
		<router-view></router-view>
   </div>
</template>

<script>
	import linec from '@/components/linec'
export default {
  data () {
    return {
      items:[
      {
      	title:'会员添加',
      	name:{name:'member-add'}
      },
      {
      	title:'会员查看',
      	name:{name:'member-view'}
      },
      {
      	title:'模块管理',
      	name:{name:'module-manage'}
      },
      {
      	title:'提成明细',
      	name:{name:'commission-detail'}
      },
      {
      	title:'操作列表',
      	name:{name:'action-list'}
      },
      {
      	title:'归属统计',
      	name:{name:'attribution-statistics'}
      },
      {
      	title:'放弃代理',
      	name:{name:'abandon-agency'}
      }
      ]
    }
  },
  components:{
			'linec':linec
		}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
