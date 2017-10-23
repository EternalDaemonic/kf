<template>
  <div>
    <div class="nav">
      <!-- 主账号已代理 -->
      <linec :items='items' v-show="flag">
        <span class="nav-right">恭喜您已成为53快服代理商</span>
      </linec>
       <!-- 主账号未代理 -->
      <div class="new-agency" v-show="!flag">
        <router-link :to="{name:'member-add'}">我的代理</router-link>
        <hr />
        <div class="box" style="left:58px"></div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import linec from '@/components/linec'
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      flag: state => state.state.flag
    })
  },
  data() {
    return {
      items: [
        {
          title: '会员添加',
          name: { name: 'member-add' }
        },
        {
          title: '会员查看',
          name: { name: 'member-view' }
        },
        {
          title: '模块管理',
          name: { name: 'module-manage' }
        },
        {
          title: '提成明细',
          name: { name: 'commission-detail' }
        },
        {
          title: '操作列表',
          name: { name: 'action-list' }
        },
        {
          title: '归属统计',
          name: { name: 'attribution-statistics' }
        },
        {
          title: '放弃代理',
          name: { name: 'abandon-agency' }
        }
      ]
    }
  },
  components: {
    'linec': linec
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.new-agency {
  overflow: hidden;
  a {
    margin-left: 30px;
    font-family: MicrosoftYaHei;
    font-size: 14px;
    color: #4d6e82;
    letter-spacing: 2px;
    line-height: 15px;
  }

}
</style>
