import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
import line from './modules/line'
import size from './modules/size'
export default new Vuex.Store({
    modules:{
        line,
        size
    }
})