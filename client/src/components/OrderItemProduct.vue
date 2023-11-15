<template>
  <td class="d-flex justify-content-start align-content-center">
    {{ product.product.name }}
  </td>
  <td>
    <img :src="product.product.img.srcImg" :alt="product.product.img.nameImg" />
  </td>
  <td>{{ product.product.price }}.000</td>
  <td>{{ product.quantity }}</td>
  <td>{{ product.product.price * product.quantity }}.000</td>
  <td class=" ">
    <div class="d-flex">
      <div>
        <i class="fa-solid fa-pen-to-square text-primary"></i>
      </div>
      <div class="ml-2">
        <i
          class="fa-solid fa-trash text-danger"
          v-on:click="deleteOrder(product)"
        ></i>
      </div>
    </div>
  </td>
</template>
<script>
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

import UserServices from "../services/user.services";
const auth = JSON.parse(localStorage.getItem("auth"));
export default {
  name: "OrderItemproduct",
  props: {
    product: { type: Object },
  },
  methods: {
    async deleteOrder(data) {
    
  // console.log(data.product._id)
      const inputdata = {
        user: auth.email,
        product: {
          product: data.product,
          quantity: data.quantity,
        } 
      };
      // console.log(inputdata);
      const resutl = await UserServices.deleteOrder(inputdata);
      // console.log(resutl.data.message);
      if (resutl) {
        Swal.fire("Thông Báo", resutl.data.message, "success");
        // window.location.reload();
      }
    },
  },
};
</script>
<style></style>
