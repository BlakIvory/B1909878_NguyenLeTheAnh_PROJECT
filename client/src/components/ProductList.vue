<template>
  <div class="row m-1 ">
    <CardProduct
      v-for="product in products"
      :key="product._id"
      :product="product"
    ></CardProduct> 
  </div>
</template>

<script>
import CardProduct from "./CardProduct.vue";

export default {
  props: {
    products: { type: Array },
  },
  components: {
    CardProduct,
  },

};
// console.log(this.props.products);
</script>
