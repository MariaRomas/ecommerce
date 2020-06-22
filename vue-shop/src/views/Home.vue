<template>
  <div class="home">
       <Navbar></Navbar>
    <Hero/>
 
    <div class="container h-100 ">
        <div class="row p-5 h-100 justify-content-center align-items-center">
          <div class="col-md-6">
            <img src="/img/about.jpg" alt="" width="500">
          </div>
          <div class="col-md-6">
            <h3>О нас</h3>
            <p>
             Мы выращиваем растения для настоящих ценителей своего сада. Большинство сортов наших растений коллекционные и очень редкие. Как правило, их не встретишь в саду вашего соседа.
            </p>
             <router-link to='/about' class="btn custom-btn btn-success mr-4">Узнать больше</router-link>
          </div>
        </div>
      </div>
    <products-list></products-list>
    <div class="container-fluid  text-center">
     <router-link to='/products' class="btn custom-btn text-align btn-success mr-4">Все товары</router-link>
    </div>
    <div class="row p-5 h-100 justify-content-center align-items-center">
          <div class="col-md-3">
         
    <router-link to='/delivery' class="btn custom-btn text-align btn-success mr-4">Узнайте о доставке</router-link>
  
          </div>
          <div class="col-md-6">
             <img src="/img/delivery.jpg" alt="" width="500">  </div>
        </div>
    

    <Login></Login>
   <mini-cart></mini-cart>
   <footer-el></footer-el>
     </div>
 
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue";
import Products from "@/sections/Products.vue";
import Login from "@/components/Login.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Home",
  components: {
    Hero, Products, Login, Footer
  }
};
</script>
