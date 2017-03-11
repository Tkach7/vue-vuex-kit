import Vue from 'vue'
import App  from './App'
import todoProfile from '../../components/todo-profile'
import todoPanel from '../../components/todo-panel'
import todoList from '../../components/todo-list'
import todoItem from '../../components/todo-item'
import store from '../../store'


export default function(...options) {
    const [payload] = options;
    /** Load user in state */
    store.commit('SET_USER', payload.user);
    /** Load todos in state */
    store.commit('SET_TODOS', payload.todos);
    /** Load components in app */
    Vue.component('todo-item', todoItem);
    Vue.component('todo-list', todoList);
    Vue.component('todo-panel', todoPanel);
    Vue.component('todo-profile', todoProfile);
    /** Main Application core */
    new Vue({
        el: '#app',
        // router,
        store,
        template: '<App/>',
        components: { App }
    });
}