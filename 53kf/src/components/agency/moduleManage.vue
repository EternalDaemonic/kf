<template>
  <div class="module-manage">
    <div>
      <button class="moudle-btn" :class="{'btn-active':isA}" @click="isA = !isA">邮件模板管理</button>
      <button class="moudle-btn" :class="{'btn-active':!isA}" @click="isA = !isA">代理网站管理</button>
    </div>
    <e-manage v-if="isA"></e-manage>
    <web-proxy v-else></web-proxy>
  </div>
</template>

<script>
import eManage from '@/components/agency/manage/e-manage'
import webProxy from '@/components/agency/manage/webProxy'
export default {
  data() {
    return {
      isA: true,
    }
  },
  methods: {
  },
  components: {
    eManage,
    webProxy
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.module-manage {
  margin-top: 10px;
  margin-left: 30px;
  font-family: MicrosoftYaHei;
  font-size: 14px;
  color: #2c2c2c;
  letter-spacing: 1px;
  .moudle-btn {
    background: #fbfaf8;
    border: 1px solid #dddddd;
    width: 149px;
    height: 41px;
    outline: none;
    color: #929292;
    margin-left: -6px;
    &:first-child {
      margin-left: 0;
    }
  }
  .btn-active {
    border-top: 1px solid #2C87EA;
    border-bottom: none;
    background: #fff;
    color: #2c2c2c;
  }
}
</style>
