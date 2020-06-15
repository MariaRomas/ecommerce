<template>
  <div class="products" id="products">
      <div class="container">
          <h1 class="text-center p-5">Новинки</h1>
          <div class="row">
              
              <div class="col-md-4">
                  <div class="card product-item">
                    <img src="/img/products/product1.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Тис ягодный</h5>
                            <p class="card-text">
                                Тис ягодный – вечнозеленое хвойное растение, обладающее не только изящным внешним видом, но и лечебными свойствами. 
                            </p>
                            <a href="#" class="btn btn-success">Добавить в корзину</a>
                        </div>
                    </div>
              </div>

              <div class="col-md-4">
                  <div class="card product-item">
                    <img src="/img/products/product2.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Можжевельник Скайрокет</h5>
                            <p class="card-text">
                               Растение отлично смотрится среди садовых культур. Выделяя фитонциды, растение очищает воздух от вредных примесей.
                            </p>
                            <a href="#" class="btn btn-success">Добавить в корзину</a>
                        </div>
                    </div>
              </div>

              <div class="col-md-4">
                  <div class="card product-item">
                    <img src="/img/products/product3.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Туя Брабант</h5>
                            <p class="card-text">
                                   Брабант – искусственно выведенный сорт, отличающийся зимостойкостью и устойчивостью к неблагоприятному воздействию городской среды.


                            </p>
                            <a href="#" class="btn btn-success">Добавить в корзину</a>
                        </div>
                    </div>
              </div>
          </div>
      </div>
    
  </div>
</template>

<script>
export default {
  name: "Products",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .products{
        margin-top: 7rem;
        background: #f2f2f2;
        padding-bottom: 3rem;
    }
    img{
        height:230px
    }
    .card-text{height:10%}
    .product-item {height:370px}
</style>