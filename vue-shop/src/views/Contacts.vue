<template>
  <div class="about">
       <Navbar></Navbar>
    

<ol class="breadcrumb">
    <li class="breadcrumb-item"> 
      <router-link to="/" >Главная</router-link>
      </li>
  <li class="breadcrumb-item active" aria-current="page">Контакты</li>
   
  </ol>
  
                <h1 class="hero-title">
                  Контакты
                </h1>
                <p>+7 (495) 111-22-33</p>
                <p>xvoya@mail.ru</p>
                <p>г. Волжский Нагорный пр-д, д.7, стр. 5</p>
   <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A0ff6830528121c769742f78c885fbdfa337fba395bff7e6ab6aad750e9544898&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe>
    <Login></Login>
   <mini-cart></mini-cart>
   <footer-el></footer-el>
     </div>
 
</template>

<script>
// @ is an alias to /src
import Login from "@/components/Login.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Contacts",
  components: {
    Login, Footer
  }
};
</script>

<style scoped lang="scss">
ul{max-width:80%;
margin-left:5%}
h1{margin-left: 3%;}
p{margin-left: 5%;}
</style>