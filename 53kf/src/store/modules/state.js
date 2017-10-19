const state = {
    flag:false,
    sub:0
}
const  mutations = {
    STATE(state,payload){
        state.flag = payload;
    },
    SUB(state,payload){
        state.sub = payload;
    }
}
export default{
    state,
    mutations
}