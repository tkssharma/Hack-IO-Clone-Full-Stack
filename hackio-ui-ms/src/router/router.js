import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/home.vue';
import Login from '../views/user/signin.vue';
import Register from '../views/user/signup.vue';

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        name: 'Home',
        component: Home
    }, {
        path: '/login',
        name: 'login',
        component: Login
    }, {
        path: '/register',
        name: 'register',
        component: Register
    }]
});