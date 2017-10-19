<template>
  <div>
    <ul>
      <li v-for='(item,index,key) in items' :key='item.title' @click="change(index)">
        <router-link :to="item.name" :style="{color:sub ==index?'#4d6e82':'black'}">{{item.title}}</router-link>
      </li>
      <slot></slot>
    </ul>
    <hr />
    <div class="box" :style="{left:distance +'px'}"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      key: ''
    }
  },
  computed: {
    ...mapState({
      distance: state => state.line.distance,
      sub: state => state.line.sub
    })
  },
  props: ['items'],
  methods: {
    change: function(index) {
      console.log(localStorage.getItem('data'));
      let distance = 58 + index * 114;
      let sub = index;
      this.$store.commit('MOVE', {
        distance: distance,
        sub: sub
      })
    }
  }
}

</script>

<style lang="less">
.nav-right {
  float: right;
  font-size: 12px;
  color: #ff7b2b;
  letter-spacing: 0.86px;
  
}
</style>
