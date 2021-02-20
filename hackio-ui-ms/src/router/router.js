import Vue from 'vue'
import Router from 'vue-router'
const  Home = () =>   import(`@/views/home/home.vue`)
const  Login = () =>   import(`@/views/user/signin.vue`)
const  Register = () =>   import(`@/views/user/signup.vue`)

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        name: 'Home',
        component: Home
    },{
        path: '/login',
        name: 'login',
        component: Login
    }, {
        path: '/register',
        name: 'register',
        component: Register
    }]
});