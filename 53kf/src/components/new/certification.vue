<template>
  <div>
   <div class="certification-top">
     <span>我的认证</span>
     <span>></span>
     <span>修改默认信息</span>
   </div>
   <hr>
   <form action="">
     
   </form>
   <city></city>
  </div>
</template>

<script>
import city from '@/components/city'
export default {
  data () {
    return {
    }
  },
  components:{
    city
  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .certification-top{
    font-family:MicrosoftYaHei;
    font-size:14px;
    color:#9f9f9f;
    letter-spacing:1px;
    line-height:15px;
    margin-left: 30px;
    span{
      &:nth-child(1){
        color:#2c87ea;
      }
    }
  }
  hr{
    width: 100%;
  }
</style>
