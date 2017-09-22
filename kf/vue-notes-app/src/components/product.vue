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
  import {
    mapState
  } from 'vuex'
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
          {
            title: '已开通产品',
            name: {
              name: 'launched-products'
            }
          },
          {
            title: '未开通产品',
            name: {
              name: 'unopened-produc'
            }
          },
          {
            title: '设置中心',
            name: {
              name: 'network-center'
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
        let distance, sub;
        if (index == 0) {
          distance = 58;
        } else if (index == 1) {
          distance = 58 + index * 121;
        } else if (index == 2) {
          distance = 58 + index * 128;
        } else {
          distance = 179 + --index * 125
        }
        sub = index;
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
