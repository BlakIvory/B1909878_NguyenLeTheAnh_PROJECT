<template lang="">
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
              >Gioi thieu |</router-link
            >
          </li>
          <li class="nav-item primarynavigation">
            <router-link class="nav-link" :to="{ name: 'home' }"
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

    <div class="row">
      <CardProduct /><CardProduct /><CardProduct /><CardProduct />
      <CardProduct /> <CardProduct /><CardProduct /><CardProduct />
      <!-- <ProductList/> -->
    </div>
  </div>
</template>
<script lang="ts">
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import ProductList from "../components/ProductList.vue";
import CardProduct from "../components/CardProduct.vue";
export default {
  name: "Home",
  mounted() {
    // const user = localStorage.getItem("auth");
    // // console.log(user);
  },
  data() {
    const auth = JSON.parse(localStorage.getItem("auth"));
     console.log(auth[0].email)
    const useremail   = auth[0].email
    return {
      user:auth,
      useremail: useremail
    }
  },
  components: {
    CardProduct,
    ProductList,
  },
};
</script>
<style>
.primarynavigation :hover {
  color: red;
  /* border:2px solid  */
}
</style>
