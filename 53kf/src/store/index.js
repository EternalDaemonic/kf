import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
import line from './modules/line'
import size from './modules/size'
import state from './modules/state'
export default new Vuex.Store({
    modules:{
        line,
        size,
        state
    }
})