<template>
  <div class="row m-1 ">
    <CardProduct
      v-for="product in filteredProducts"
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
    searchText: { type: String, }
  },
  components: {
    CardProduct,
  },
  computed: {
    filteredProducts() {
      
      return this.products.filter((product) => {
        // console.log(product.name.toLowerCase().includes(this.searchText.toLowerCase()))
        return product.name.toLowerCase().includes(this.searchText.toLowerCase());
      });
    },
  }
};
// console.log(this.props.products);
</script>
