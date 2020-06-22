<template>
    <div class="hero">
        <div class="container h-100">
          <div class="row h-100 justify-content-center align-items-center">
            <div class="col-md-5">
              <div class="hero-content">
                <h1 class="hero-title">
                  Интернет-магазин хвойных растений
                </h1>
                <p>
         100% приживаемость на вашем участке       </p>
                <div class="hero-btn mt-5">
                  
                  <router-link to='/products' class="btn custom-btn btn-success mr-4">К покупкам</router-link>
       
                </div>
              </div>
            </div>
            <div class="col-md-7">
                <div class="graphic">
                    <img src="/img/home2.png"  alt="">
                </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Hero",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .hero{
    padding-top: 7rem;
    width: 100%;
    height: 500px;
    text-align: left;
  }
  img{
    text-align:center;
    max-width:763px;
  margin-top:-25%}
</style>