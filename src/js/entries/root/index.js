import Vue from 'vue'
import App  from './App.vue'
import todoProfile from '../../components/todo-profile/index.vue'
import todoPanel from '../../components/todo-panel/index.vue'
import todoList from '../../components/todo-list/index.vue'
import todoItem from '../../components/todo-item/index.vue'
import userSesseion from '../../components/user-session/index.vue'
import store from './store'

export default function(...options) {
    const [payload] = options;
    /** Load user in state */
    let user = payload.user;
    user.sessions = payload.sessions;
    store.commit('SET_USER', user);
    /** Load todos in state */
    store.commit('SET_TODOS', payload.todos);
    /** Load components in app */
    Vue.component('todo-item', todoItem);
    Vue.component('todo-list', todoList);
    Vue.component('todo-panel', todoPanel);
    Vue.component('todo-profile', todoProfile);
    Vue.component('user-session', userSesseion);
    /** Main Application core */
    new Vue({
        el: '#app',
        // router,
        store,
        template: '<App/>',
        components: { App }
    });
}