import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        name: '吉安'
    },
    mutations: {
        ADD(state, name) {
            state.name = name
            console.log(state.name)

        }

    },
    actions: {},
    modules: {}
})