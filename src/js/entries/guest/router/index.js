import Vue from 'vue'
import Router from 'vue-router'

//** import Guest components */
import Auth from '../routes/auth'

const routes = [
    { path: '/', name: 'Auth', component: Auth }
];

//** init router */
const router = new Router({routes});

export default router