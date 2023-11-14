<template>
  <div className="container ">
    <HeaderMini/>
    <!-- <router-view></router-view> -->
    <div class="w-full">
      <ProductList :products="products" />
    </div>
  </div>
</template>
<script>

import CardProduct from "../components/CardProduct.vue";
import ProductList from "../components/ProductList.vue";
import ProductService from "../services/product.service";
import HeaderMini from "../components/HeaderMini.vue";
const products = await ProductService.getProducts();
export default {
  name: "Home",

  data() {
    // console.log(products)
    return { products: products };
  },
  components: {
    ProductList,
    CardProduct,
    HeaderMini,
},
};
</script>
<style>
.primarynavigation:hover {
  color: red;
}
</style>
