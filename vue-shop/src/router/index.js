import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Admin from "../views/Admin.vue";
import Overview from "../views/Overview.vue";
import Products from "../views/Products.vue";
import Profile from "../views/Profile.vue";
import Orders from "../views/Orders.vue";
import Delivery from "../views/Delivery.vue";
import Contacts from "../views/Contacts.vue";
import Checkout from "../views/Checkout.vue";
import Catalog from "../views/Catalog.vue";

import {fb} from "../firebase";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    meta: { requiresAuth: true },
    children:[
      {
        path: "overview",
        name: "Overview",
        component: Overview
      },
      {
        path: "products",
        name: "Products",
        component: Products
      },
      {
        path: "profile",
        name: "Profile",
        component: Profile
      },
      {
        path: "orders",
        name: "Orders",
        component: Orders
      }
    ]
  },
  {
    path: "/checkout",
    name: "checkout",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Checkout.vue")
  },
  {
    path: "/products",
    name: "Catalog",
    component: Catalog
  },
 
  {
    path: "/delivery",
    name: "Delivery",
    component: Delivery
  },
  
  {
    path: "/contacts",
    name: "Contacts",
    component: Contacts
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
router.beforeEach((to, from, next) => {

  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = fb.auth().currentUser

  if (requiresAuth && !currentUser) {
      next('/')
  } else if (requiresAuth && currentUser) {
      next()
  } else {
      next()
  }
})
export default router;
