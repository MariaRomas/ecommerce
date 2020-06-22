<template>
  <div class="home">
       <Navbar></Navbar>
       <ol class="breadcrumb">
    <li class="breadcrumb-item"> 
      <router-link to="/" >Главная</router-link>
      </li>
  <li class="breadcrumb-item active" aria-current="page">Ассортимент</li>
   
  </ol>
    <products-catalog></products-catalog>
    <Login></Login>
   <mini-cart></mini-cart> <footer-el></footer-el>
     </div>

</template>

<script>
// @ is an alias to /src
import Login from "@/components/Login.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Catalog",
  components: {
    Login, Footer
  }
};
</script>
