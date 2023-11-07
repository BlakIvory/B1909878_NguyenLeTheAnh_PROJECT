<template>
  <div class="card border m-2 p-2">
    <div>
      <img :src="product.img.srcImg" :alt="product.img.nameImg" />
    </div>
    <div>{{ product.name }}</div>
    <div>{{ product.price }} vnđ/Quyển</div>
    <div class="oder-card flex">
      <form @submit.prevent="orderProduct" class="row">
        <div>
          <input
            type="number"
            min="0"
            step="1"
            placeholder="0"
            v-model="formData.quantity"
          />
        </div>
        <div class="iconcard">
          <button type="submit">
            <i class="fa-solid fa-cart-shopping" style="font-size: 24px"></i>
          </button>
        </div>
      </form>
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
  border: 10px solid 5px rgb(11, 11, 12);
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
.iconcard {
  cursor: pointer;
  color: rgb(71, 100, 100);
}
</style>
<script>
import Swal from "sweetalert2";

import UserService from "../services/user.services";

export default {
  name: "cardProduct",
  props: {
    product: { type: Object, required: true },
  },
  data() {
    return {
      formData: {
        quantity: "0",
      },
    };
  },
  methods: {
    async orderProduct(e) {
      // console.log(this.formData.quantity);
      if (this.formData.quantity == 0) {
        Swal.fire("thông báo ", "Vui lòng nhập số lượng hàng ", "warning");
      } else {
        const user = JSON.parse(localStorage.getItem("auth"));
        const emailuser = user[0].email;
        // console.log(this.formData.quantity);
        // console.log(emailuser)
        const productdata = {
          _id: this.product._id,
          name: this.product.name,
          description: this.product.description,
          img: {
            nameImg: this.product.img.nameImg,
            srcImg: this.product.img.srcImg,
          },
          note: this.product.note,
          price: this.product.price,
        };
        // console.log(productdata)
        const inputdata = {
          user: emailuser,
          product: productdata,
          quantity: this.formData.quantity,
        };
        // console.log(inputdata)

        const resutl = await UserService.orderProducts(inputdata);
        Swal.fire("thông báo thành công ", resutl.data.message, "success");
        // console.log(resutl);
      }
    },
  },
};
</script>
