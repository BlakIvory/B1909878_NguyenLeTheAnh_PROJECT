<template>
  <div className="container ">
    <HeaderMini />
    <div class="mt-2 ml-5 inputHeader">
      <input
        type="text"
        v-model="searchText"
        placeholder="Nhập sách cần tìm kiếm ..."
        
      />
      <button >
        <i class="fa-solid fa-magnifying-glass cursor-pointer"></i>
      </button>
    </div>
    <div class="w-full">
      <ProductList :products="products" :searchText="searchText" />
    </div>
  </div>
</template>
<script>
import CardProduct from "../components/CardProduct.vue";
import ProductList from "../components/ProductList.vue";
import ProductService from "../services/product.services";
import HeaderMini from "../components/HeaderMini.vue";
const products = await ProductService.getProducts();
console.log(products)
export default {
  name: "Home",

  data() {
    return {
      products: products,
      searchText: "",
    };
  },
  components: {
    ProductList,
    CardProduct,
    HeaderMini,
  },
  methods: {
  },
  
}
</script>
<style>
.primarynavigation:hover {
  color: red;
}
.inputHeader {
  /* border: 1px gray solid; */
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5px;
  width: 250px;
  /* background-color: aqua; */
}
.inputHeader input{
  width: 200px;
}
</style>
