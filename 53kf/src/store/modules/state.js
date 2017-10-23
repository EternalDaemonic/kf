//判断是否为子账户
//flag为是否代理

const state = {
    val:0,
    flag:false,
    sub:0,
    masking:false
}
const  mutations = {
    STATE(state,payload){
        state.flag = payload;
    },
    SUB(state,payload){
        state.sub = payload;
    },
    MASKING(state,payload){
        state.masking = payload;
    }
}
export default{
    state,
    mutations
}