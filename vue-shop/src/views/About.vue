<template>
  <div class="about">
       <Navbar></Navbar>
       <nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"> 
      <router-link to="/" >Главная</router-link>
      </li>
  <li class="breadcrumb-item active" aria-current="page">О нас</li>
   
  </ol>
</nav>
    <div  style="margin-top:5%" class="container h-100">
          <div class="row h-100 justify-content-center align-items-center">
            <div class="col-md-5">
              <div class="hero-content">
                <h1 class="hero-title">
                  О нас
                </h1>
                <p>
           Хвойные растения занимают важное место в озеленении и благоустройстве городских и частных территорий. Они придают участку оригинальность и привлекательность, являются прекрасным фоном для любых композиций и всех построек. Вы можете недорого купить саженцы хвойных растений на любой вкус.
                </p>
                <p>  Мы выращиваем растения для настоящих ценителей своего сада. Большинство сортов наших растений коллекционные и очень редкие. Как правило, их не встретишь в саду вашего соседа.
         </p>
               
              </div>
            </div>
            <div class="col-md-7">
                <div class="graphic">
                    <img src="/img/abouts.jpg"  width="500px" alt="">
                </div>
            </div>
          </div>
        </div>
 
<div class="row col-12">
<div class="card col-sm-3" style="width: 18rem;">
  <img src="/img/about2.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Семейный питомник</p>
  </div>
</div>
<div class="card col-sm-3" style="width: 18rem;">
  <img src="/img/about3.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Закрытая корневая система</p>
  </div>
</div>
<div class="card col-sm-3" style="width: 18rem;">
  <img src="/img/about4.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Коллекционные растения</p>
  </div>
</div>

  </div>

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
  name: "About",
  components: {
    Login, Footer
  }
};
</script>

<style scoped lang="scss">
.col-sm-3 {margin-left: 5%;}
.col-12{margin:0 auto;
margin-top:5%}
</style>