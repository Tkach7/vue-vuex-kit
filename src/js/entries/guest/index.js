import Vue from 'vue'
import App  from './App.vue'
import router from './router'
import Router from 'vue-router'

/** Load routes in App */
Vue.use(Router);

export default function(...data) {
    const [payload] = data;
    //* Main Application core */
    new Vue({
        el: '#app',
        router,
        template: '<App/>',
        components: { App }
    });
}
