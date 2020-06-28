<template>
  <div class="products" id="products">





      <div class="container">






          <h1 class="text-center p-5">Хвойные растения</h1>
          <div class="row">
              
              <div class="col-md-4" v-for="product in products">
                  <div class="card product-item">

                        <carousel :perPage="1">
                          <slide v-for="(image, index) in product.images">
                                <img :src="image" class="card-img-top" alt="..." width="250px">
                          </slide>
                        </carousel>
                
                        <div class="card-body">
                          <div class="d-flex justify-content-between">
                            <h5 class="card-title">{{ product.name }}</h5>
                            <h5 class="card-priceS">{{ product.price }} ₽</h5>
                           
                          </div>
                            <span class="card-priceS">{{ product.tags[0] }}</span>
                              <span class="card-priceS">{{ product.tags[1] }}</span>
                                <span class="card-priceS">{{ product.tags[2] }}</span>
                            <add-to-cart 
                                :image="getImage(product.images)"
                                :p-id="product.id"
                                :price="product.price"
                                :name="product.name">
                            </add-to-cart>
                        </div>
                       
                      
                        <div class="card-text">
 <p v-html="product.description"></p>
                        </div>
                    </div>
              </div>

          </div>
      </div>
    



  </div>
</template>

<script>

import {db} from '../firebase';
export default {
  name: "Products-catalog",
  props: {
    msg: String
  },
data(){
    return {
        products: [],
     
    }
  },
  methods:{
    getImage(images){
      return images[0];
    }
  },
  firestore(){
      return {
        products: db.collection('products'),
      }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .products{
    
        padding-bottom: 3rem;
    }
        img{
        height:230px
    }
    .product-item:hover .card-text{
      display:block;
      position:absolute;
    top:120px;
    z-index:9999;
    width:400px;
    }
    .card-text{display: none;
    margin-left:-50px;
    padding:10px;
    margin-top:17px;
    background:#f3f3f3;
    height:200px;
    -moz-box-shadow:0 5px 5px rgba(0,0,0,0.3);
    -webkit-box-shadow:0 5px 5px rgba(0,0,0,0.3);
    box-shadow:0 5px 5px rgba(0,0,0,0.3);}
     
  span.card-priceS{text-decoration: underline;
 
  }
    .glyphicon { margin-right:5px; }
.thumbnail {
 margin-bottom: 20px;
 padding: 0px;
 -webkit-border-radius: 0px;
 -moz-border-radius: 0px;
 border-radius: 0px
}

</style>