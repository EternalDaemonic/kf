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
        title: '开始推广',
        name: {
          name: 'begin-promotion'
        }
      },
      {
        title: '已推广会员',
        name: {
          name: 'extended-member'
        }
      },
      {
        title: '开户统计',
        name: {
          name: 'opening-statistics'
        }
      },
      {
        title: '开户明细',
        name: {
          name: 'opening-detail'
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
    change: function(index) {
      let distance, sub;
      if (index == 0) {
        distance = 58;
      } else if (index == 1) {
        distance = 58 + index * 121;
      } else {
        distance = 72 + index * 114;
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
