<script>
import CardProduct from "./CardProduct.vue";

export default {
  props: {
    products: { type: Array, default: [] },
  
  },
  components: {
    CardProduct,
    CardProduct
},
  emits: ["update:activeIndex"],
 
};
</script>
<template>
  <!-- <div
    v-for="(product, index) in products"
    key="product._id"
  >
    <CardProduct />
  </div> -->
  <div></div>
</template>
