<template>
  <div className="container ">
    <HeaderMini />
    <div class="mt-2 ml-5 inputHeader">
      <input
        type="text"
        v-model="searchText"
        placeholder="Nhập sách cần tìm kiếm ..."
        
      />
      <button v-on:click="performSearch" >
        <i class="fa-solid fa-magnifying-glass cursor-pointer"></i>
      </button>
    </div>
    <div class="w-full">
      <ProductList :products="products" />
    </div>
  </div>
</template>
<script>
import CardProduct from "../components/CardProduct.vue";
import ProductList from "../components/ProductList.vue";
import ProductService from "../services/product.services";
import HeaderMini from "../components/HeaderMini.vue";
const products = await ProductService.getProducts();
export default {
  name: "Home",

  data() {
    return {
      products: products,
      searchText:"",
    };
  },
  components: {
    ProductList,
    CardProduct,
    HeaderMini,
  },
  methods: {
    // performSearch() {
    //   // console.log(this.products)
    //   // Thực hiện tìm kiếm trong array
    //   const filteredItems = this.products.filter(product =>{
    //       product.toLowerCase().includes(this.searchText.toLowerCase())
    //     console.log(product)
    //   }
      
    //   );
    //   // console.log(filteredItems); // In kết quả tìm kiếm
    // }
  },
  computed: {
    // filteredItems() {
    //   console.log(this.searchText)
    //   return this.products.filter((product) => {
    //     console.log(product.toLowerCase().includes(this.searchText.toLowerCase())) 
    //   });
    // },
  },
};
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
