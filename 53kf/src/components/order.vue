<template>
<div>

  <div class="nav">
    <ul>
      <li v-for='(item,index,key) in items' :key='item.title' @click="change(index)">
        <router-link :to="item.name" :style="{color:sub ==index?'#4d6e82':'black'}">{{item.title}}</router-link>
      </li>
    </ul>
    <hr />
    <div class="box" :style="{left:distance +'px'}"></div>
  </div>
    <router-view></router-view>
</div>
</template>

<script>
  import {
    mapState
  } from 'vuex'
  export default {
    data() {
      return {
        key: '',
        items: [{
            title: '新订单详情',
            name: {
              name: 'new-order'
            }
          },
          {
            title: '老订单详情',
            name: {
              name: 'old-order'
            }
          }
        ]
      }
    },
    computed: {
      ...mapState({
        distance: state => state.line.distance,
        sub: state => state.line.sub
      })
    },
    methods: {
      change: function (index) {
        let distance = 66 + index * 129;
        let sub = index;
        this.$store.commit('MOVE', {
          distance: distance,
          sub: sub
        })
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
