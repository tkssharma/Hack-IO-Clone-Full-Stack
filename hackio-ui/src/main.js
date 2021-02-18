import Vue from "vue";
// @ts-ignore
const App = () => import("./app");
import router from './router/router';
import 'vuetify/dist/vuetify.min.css';
import vuetify from '@/plugin/vuetify';// path to vuetify export
Vue.config.productionTip = false
import store from './store/index';
import  firebase from 'firebase/app';
import firebaseConfig from './firebaseConfig';

new Vue({
  el: "#app",
  vuetify,
  router,
  store,
  render: function(createElement) {
    return createElement(App);
  },
  components: { App },
  async created(){
    firebase.initializeApp(firebaseConfig)
  }
});
