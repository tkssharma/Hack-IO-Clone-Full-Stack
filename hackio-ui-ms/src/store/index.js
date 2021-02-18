import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';
Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production';
import UserModule from './modules/user';
import AdminModule from './modules/admin/admin';

const store = new Vuex.Store({
    modules: {
       // userModule
       UserModule,
       AdminModule
    },
    strict: debug,
    plugins:  [new VuexPersistence().plugin]
});

export default store;