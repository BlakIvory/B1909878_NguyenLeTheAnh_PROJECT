<template>
  <div class="m-2 p-3 box">
    <div>
      <img
        v-on:click="handelShowPopup"
        :src="product.img.srcImg"
        :alt="product.img.nameImg"
      />
    </div>
    <div>{{ product.name }}</div>
    <div>{{ product.price }}.000 vnđ/Quyển</div>
    <div class="">
      <form @submit.prevent="orderProduct" class="row justify-content-around">
        <div>
          <input
            type="number"
            min="0"
            step="1"
            placeholder="0"
            v-model="formData.quantity"
          />
        </div>
        <div class="">
          <button type="submit">
            <i class="fa-solid fa-cart-shopping" style="font-size: 24px"></i>
          </button>
        </div>
      </form>
    </div>
    <Popup v-if="showPopup" @close-popup="showPopup = false">
      <h1><div>THÔNG TIN CHI TIẾT</div></h1>
      <div class="popup-box">
        
        <div>
          <img :src="this.product.img.srcImg" alt="" />
        </div>
        <div class="container popup-box-content">
          <div class="popup-info">Tên :{{ this.product.name }}</div>
          <div class="popup-info">Nhà sản xuất : {{ this.product.description  }}</div>
           <div class="popup-info">Giá sản phẩm : {{ this.product.price }}.000 vnđ/sản phẩm</div>
          <div class="popup-info">Hàng tồn kho : {{ this.product.quantity  }}</div>
        </div>
      </div>
    </Popup>
  </div>
</template>
<style>
img {
  width: 150px;
  height: 130px;
  background: fixed;
}
.box input {
  width: 50px;
}

.box {
  width: 200px;
  height: 250px;
  background: aliceblue;
  border: 2px solid rgb(223, 189, 189);
  border-radius: 5px;
  text-align: center;
  justify-content: center;
  color: black;
}
.order-card {
  margin: 5px 0 0 0;
  display: flex;
  text-align: center;
  justify-content: space-around;
}
.iconcard {
  margin: 0 10px;
  cursor: pointer;
  color: rgb(71, 100, 100);
}

.popup-box{
  display:  flex;
  margin: 10px;
}

.popup-box-content{
    margin-left: 10px;
  width: 400px;
  border: 2px solid gray;
  display: grid;
  align-items: center;
  justify-content: space-between;
}

.popup-info{ 
  margin-left: 10px;
    width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

</style>
<script>
import Popup from "./Popup.vue";
import Swal from "sweetalert2";

import UserService from "../services/user.services";

export default {
  name: "cardProduct",
  props: {
    product: { type: Object, required: true },
    
  },
  components: {
    Popup,
  },
  data() {
    return {
      formData: {
        quantity: "0",
      },
      showPopup: false,
    };
  },
  methods: {
    async orderProduct(e) {
      // console.log(this.formData.quantity);
      if (this.formData.quantity == 0) {
        Swal.fire("thông báo ", "Vui lòng nhập số lượng hàng ", "warning");
      } else {
        const user = JSON.parse(localStorage.getItem("auth"));
        const emailuser = user.email;
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
        if (this.formData.quantity > this.product.quantity) {
          Swal.fire(
            "thông báo",
            "Lượng hàng tồn không đủ !! hàng tồn :" + this.product.quantity,
            "warning"
          );
        } else {
          const resutl = await UserService.orderProducts(inputdata);
          Swal.fire("thông báo thành công ", resutl.data.message, "success");
        }
        // console.log(this.product)

        // window.location.reload();
      }
    },

    handelShowPopup() {
      this.showPopup = !this.showPopup;
      // console.log(this.showPopup)
    },
  },
};
</script>
