import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import jQuery from 'jquery';
import fb from './firebase';
import VueFirestore from 'vue-firestore';
window.$ = window.jQuery = jQuery;
import 'popper.js';
import 'bootstrap';
import './assets/app.scss';

Vue.component('Navbar', require('./components/Navbar.vue').default);
Vue.config.productionTip = false;
Vue.use(VueFirestore);

let app = '';

if(!app){
  new Vue({
    router,
    render: h => h(App)
  }).$mount("#app");
  
}