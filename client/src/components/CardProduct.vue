<template>
  <div class="card border m-2 p-2">
    <div>
      <img
        src="https://th.bing.com/th/id/R.3dc5f998e54c345e8fdcb69fbe304051?rik=23kwO9bHYTPS4A&pid=ImgRaw&r=0"
        alt=""
      />
    </div>
    <div>NameProduct</div>
    <div>PriceProduct vnđ/Quyển</div>
    <div class="oder-card">
      <input type="number" min="0" step="1" value="0" />
      <i
        class="fa-solid fa-cart-shopping"
        style="font-size: 24px"
        v-on:click="orderProduct"
      ></i>
    </div>
  </div>
</template>
<style>
img {
  width: 180px;
  height: 150px;
  background: fixed;
}
input {
  width: 50px;
}

.card {
  width: 200px;
  height: 250px;
  border: 10px solid 2px blue;
  border-color: aqua;
  background: aliceblue;
  display: flex;
  text-align: center;
  justify-content: center;
  color: black;
}
.oder-card {
  margin: 5px 0 0 0;
  display: flex;
  text-align: center;
  justify-content: space-around;
}
</style>
<script>
import ProductService from "../services/product.service";
export default {
  // props: {
  //   product: { type: Object, required: true },
  // },

  methods: {
    orderProduct() {
      const user = localStorage.getItem("auth");
      console.log(user);
      // const order = { user: user, product: product };
      // console.log(order);
    },
  },
};
</script>
