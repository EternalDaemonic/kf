const state = {
        width:0,
        height:0
    }
// data = JSON.stringify(state)

const mutations = {
    SIZE(state,payload){
        state.width = payload.width;
        state.height = payload.height;
    }
};
export default {
    state,
    mutations
}