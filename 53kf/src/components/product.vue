<template>
<div>

  <div class="nav">
    <ul>
      <li>
        <router-link :to="{name:'open-products'}" :style="{color:'#4d6e82'}">产品开通</router-link>
      </li>
    </ul>
    <hr />
    <div class="box" :style="{left:'28px'}"></div>
  </div>
    <router-view></router-view>
</div>
</template>

<script>
  export default {
    name: 'product',
    data() {
      return {
        key: '',
        items: [{
            title: '全部产品',
            name: {
              name: 'all-products'
            }
          },
        ]
      }
    },
    methods: {
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
