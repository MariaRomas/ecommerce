<template>
  <div class="products">
        <div class="overview">
      <div class="container h-100">
          <div class="intro h-100">
            <div class="row h-100 justify-content-center align-items-center">
              <div class="col-md-6">
                 <h3 >Ассортимент</h3>
            
                 <p>
                   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, ducimus.
                 </p>
              </div>
              <div class="col-md-6">
                  <img src="/img/svg/products.svg" alt="" class="img-fluid">
              </div>
            </div>
          </div>
     <hr>

  <div class="product-test">
 

  </div> 
    <h3 class="d-inline-block">Products List</h3>
         <button @click="addNew()" class="btn btn-primary float-right">Добавить продукт</button>
    <div class="table-responsive">
    <table class="table">
      <thead>
       <tr>
         <th>Name</th>
         <th>Price</th>
          <th>Modify</th>
       </tr>
      </thead>
      <tbody>
      <tr v-for="product in products">
                        <td>
                          {{product.name}}
                        </td>

                        <td>
                          {{product.price}}
                        </td>

                        <td>

                          <button class="btn btn-primary" @click="editProduct(product)">Edit</button>
                          <button class="btn btn-danger" @click="deleteProduct(product)">Delete</button>
                        </td>

                      </tr>
    
      </tbody>
      </table>
    </div>
  </div>
        </div>
        <div class="modal fade" id="product" tabindex="-1" role="dialog" aria-labelledby="editLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="editLabel">Edit Product</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">

                <div class="row">
                  <!-- main product -->
                  <div class="col-md-8">
                    <div class="form-group">
                      <input type="text" placeholder="Product Name" v-model="product.name" class="form-control">
                    </div>

                    <div class="form-group">
                   <textarea name="description" class="form-control" v-model="product.description"  placeholder="product_description"/>
                    </div>
                  </div>
                  <!-- product sidebar -->
                  <div class="col-md-4">
                    <h4 class="display-6">Product Details</h4>
                    <hr>

                    <div class="form-group">
                      <input type="text" placeholder="Product price" v-model="product.price" class="form-control">
                    </div>

                    <div class="form-group">
                      <input type="text" @keyup.188="addTag" placeholder="Product tags" v-model="product.tag" class="form-control">
                      
                      <div  class="d-flex">
                        <p v-for="tag in product.tags">
                            <span class="p-1">{{tag}}</span>
                        </p>

                      </div>
                    </div>


                    <div class="form-group">
                      <label for="product_image">Product Images</label>
                      <input type="file" @change="uploadImage" class="form-control">
                    </div>

                    <div class="form-group d-flex">
                      <div class="p-1" v-for="(image, index) in product.images">
                          <div class="img-wrapp">
                              <img :src="image" alt="" width="80px">
                              <span class="delete-img" @click="deleteImage(image,index)">X</span>
                          </div>
                      </div>
                    </div>

                  </div>
                </div>




            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button @click="addProduct()" type="button" class="btn btn-primary" >Save changes</button>
              <button @click="updateProduct()" type="button" class="btn btn-primary">Apply changes</button>
            </div>
          </div>
        </div>
      </div>

  </div>
</template>

<script>

import {fb, db} from '../firebase';
export default {
  name: "Products",
  props: {
    msg: String
  },
  data(){
    return{
      products:[],
      product:{
       name:null,
          description:null,
          price:null,
          tags:null,
          images:null
      },
      activeItem:null
    }
  },
  firestore(){
return {
  products:db.collection('products'),
}
  },
  methods:{
    addNew(){
$('#product').modal('show');
    },
    watcher(){/*
db.collection("products").onSnapshot((querySnapshot)=> {
        this.products = [];
        querySnapshot.forEach((doc)=>{
            this.products.push(doc);
        });
      
    });
   */ },
    updateProduct(){
/* 
db.collection("products").doc(this.activeItem).update(this.product)
.then(()=> {
  $('#edit').modal('hide');
  this.watcher();
    console.log("Document successfully updated!");
})
.catch(function(error) {
    // The document probably doesn't exist.
    console.error("Error updating document: ", error);
});
*/
    },
    editProduct(product){
/*$('#edit').modal('show');
this.product=product.data();
this.activeItem = product.id;
   */ },
    deleteProduct(doc){
/*   if(confirm('Are you sure?')){
db.collection("products").doc("doc").delete().then(function() {
    console.log("Document successfully deleted!");
}).catch(function(error) {
    console.error("Error removing document: ", error);
});
   }else{

   }
  */
   Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          this.$firestore.products.doc(doc['.key']).delete()
          Toast.fire({
            type: 'success',
            title: 'Deleted  successfully'
          })
        
        }
      })  },
    readData(){
      /* db.collection("products").get().then((querySnapshot)=> {
   // this.products = querySnapshot;
    querySnapshot.forEach((doc)=> {
     this.products.push(doc);
    });
});*/
    },
    addProduct(){
     /* db.collection("products").add(this.product)
      .then((docRef)=> {
          console.log("Document written with ID: ", docRef.id);
          this.readData();
      })
      .catch(function(error) {
          console.error("Error adding document: ", error);
      });*/
      this.$firestore.products.add(this.product);
      
         $('#product').modal('hide');
    
    },
    reset(){
     // Object.assign(this.$data, this.$options.data.apply(this));
    }
  },
    created(){
 //this.readData();
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.img-wrapp{
  position: relative;
}
.img-wrapp span.delete-img{
    position: absolute;
    top: -14px;
    left: -2px;
}
.img-wrapp span.delete-img:hover{
  cursor: pointer;
}
</style>
