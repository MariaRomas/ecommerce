<template>
  <div class="about">
       <Navbar></Navbar>
    

<ol class="breadcrumb">
    <li class="breadcrumb-item"> 
      <router-link to="/" >Главная</router-link>
      </li>
  <li class="breadcrumb-item active" aria-current="page">Доставка и оплата</li>
   
  </ol>
</nav>
  
                <h1 class="hero-title ">
                  Доставка и оплата
                </h1>
               <ul class="list-unstyled">
  <li class="media">
   <img src="/img/ab.png" class="mr-3" alt="...">
    <div class="media-body">
      <h5 class="mt-0 mb-1">Выбор растения</h5>
     Можно приехать к нам на торговую площадку в питомник  </div>
  </li>
  <li class="media my-4">
    <img src="/img/ab.png" class="mr-3" alt="...">
    <div class="media-body">
      <h5 class="mt-0 mb-1">Доставка</h5>
      <ol>
      <li>      Можно приехать к нам на торговую площадку в питомник</li>
      <li>Договориться о встрече</li>
      <li>Курьерская доставка </li>

      </ol>
        </div>
  </li>
  <li class="media">
  <img src="/img/ab.png" class="mr-3" alt="...">
    <div class="media-body">
      <h5 class="mt-0 mb-1">Оплата</h5>
     <ol>
      <li>      Вы можете оплатить заказ наличными при личной встрече с нами</li>
      <li>Можем выставить счет на оплату по банковским реквизитам</li>
      <li>Оплата через сайт в данный момент недоступна </li>

      </ol>  </div>
  </li>
</ul>

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
  name: "Delivery",
  components: {
    Login, Footer
  }
};
</script>

<style scoped lang="scss">
ul{max-width:80%;
margin-left:5%;
margin-top:3%}
h1{margin-left: 3%;}
</style>