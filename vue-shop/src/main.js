import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import jQuery from 'jquery';
import fb from './firebase';
import VueFirestore from 'vue-firestore';
require('firebase/firestore')


Vue.use(VueFirestore, {
  key: 'id',         // the name of the property. Default is '.key'.
  enumerable: true  //  whether it is enumerable or not. Default is true.
})
window.$ = window.jQuery = jQuery;
import 'popper.js';
import 'bootstrap';
import './assets/app.scss';
import Swal from 'sweetalert2';

window.Swal = Swal;

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);
window.Toast = Toast;
Vue.component('Navbar', require('./components/Navbar.vue').default);
Vue.component('products-list', require('./sections/ProductList.vue').default);
Vue.config.productionTip = false;
Vue.use(VueFirestore);
import Vue2Filters from 'vue2-filters'
Vue.use(Vue2Filters)
let app = '';

if(!app){
  new Vue({
    router,
    render: h => h(App)
  }).$mount("#app");
  
}