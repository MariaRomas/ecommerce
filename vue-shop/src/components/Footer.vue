<template>
  <div class="hello">
  <!-- Footer -->
<footer class="page-footer  bg  bg-dark font-small pt-4">

  <!-- Footer Links -->
  <div class="container-fluid   text-center text-md-left">

    <!-- Grid row -->
    <div class="row">

      <!-- Grid column -->
      <div class="col-md-6 mt-md-0 mt-3">

        <!-- Content -->
        <h5 class="text-uppercase">Хвойник - интернет-магазин хвойных растений</h5>
        <p>Инженерное проектирование - 171-332 - Федосеева Мария</p>

      </div>
      <!-- Grid column -->

      <hr class="clearfix w-200 d-md-none pb-3">

      <!-- Grid column -->
      <div class="col-md-5 mb-md-0 mb-3">

        <!-- Links -->

        <ul class="list-unstyled">
          <li>
                 <router-link to="/" class="nav-link">Главная</router-link>
            </li>
     <li>
          <router-link to="/about" class="nav-link" >О нас</router-link>
   
     </li>
       <li>
        <router-link to="/products" class="nav-link">Ассортимент</router-link>
      </li>
       <li >
        <router-link to="/delivery" class="nav-link">Оплата и доставка</router-link>
      </li>
      <li >
        <router-link to="/contacts" class="nav-link">Контакты</router-link>
           
          </li>
        </ul>

      </div>
      <!-- Grid column -->

      <!-- Grid column -->
      
      <!-- Grid column -->

    </div>
    <!-- Grid row -->

  </div>
  <!-- Footer Links -->

  <!-- Copyright -->
  <div class="footer-copyright text-center py-3">© 2020 Copyright: Хвойник
    
  </div>
  <!-- Copyright -->

</footer>
<!-- Footer -->
  </div>
</template>

<script>

export default {
  name: "Footer",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
li {margin-bottom:-2.5%;
margin-left: 50%;}
footer, footer a{color: white}
footer{padding:-5%}
footer{margin-top:5%}
.footer-copyright {margin-top: -2%;}
</style>
