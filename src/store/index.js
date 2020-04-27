import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        name: {}
    },
    mutations: {
        ADD(state, name) {
            state.name = name
            console.log(name)

        }

    },
    actions: {},
    modules: {}
})