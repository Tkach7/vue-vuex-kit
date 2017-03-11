import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'

/** Init Vuex*/
Vue.use(Vuex);

/** App state */
const state = {
    user: {},
    todos: []
};

export default new Vuex.Store({
    state,
    mutations
});
