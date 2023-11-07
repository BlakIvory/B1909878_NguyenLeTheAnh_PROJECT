<template >
  <div className="container ">
    <div className="flex border  ">
      <nav class="primary-navigation navbar navbar-expand">
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item primarynavigation">
            <router-link class="nav-link" :to="{ name: 'home' }"
              >Trang Chủ |</router-link
            >
          </li>
          <li class="nav-item primarynavigation">
            <router-link class="nav-link" :to="{ name: 'home' }"
              >Giới thiệu |</router-link
            >
          </li>
          <li class="nav-item primarynavigation">
            <router-link class="nav-link" :to="{ name: 'giohang' }"
              >Giỏ hàng |</router-link
            >
          </li>
          <li class="nav-item primarynavigation">
            <router-link class="nav-link" :to="{ name: 'home' }"
              >Đơn Hàng |</router-link
            >
          </li>
          <li class="nav-item primarynavigation">
            <router-link class="nav-link" :to="{ name: 'home' }"
              >Cá Nhân |</router-link
            >
          </li>
        </ul>
      </nav>
    </div>

    <div class="w-full " >
      <!-- <CardProduct v-for="product in products" :key="product._id" :product="product"/> -->
      <!-- <div>item.name</div> -->
      <ProductList :products="products"/>
    </div>
  </div>
</template>
<script >
import CardProduct from "../components/CardProduct.vue";
import ProductList from "../components/ProductList.vue";

import ProductService from "../services/product.service"
const products = await ProductService.getProducts()
export default {
  name: "Home",

  data () {
    // console.log(products)
    return { products: products}
  },
  components: {
    ProductList,
    CardProduct
},
};
</script>
<style>
.primarynavigation :hover {
  color: red;

}
</style>
