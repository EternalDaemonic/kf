// var data = localStorage.getItem('data') ? {
//     distance:58,
//     sub:0
// } : JSON.parse(localStorage.getItem('data'));
const state = {
        distance:58,
        sub:0
    }
// data = JSON.stringify(state)

const mutations = {
    MOVE(state,payload){
        state.distance = payload.distance;
        state.sub = payload.sub;
        // let data = JSON.stringify(payload);
        // localStorage.setItem('data',data);
    }
};
export default {
    state,
    mutations
}