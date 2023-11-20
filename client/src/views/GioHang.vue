<template>
  <div className="container ">
    <header-mini/>

    <div class="m-3">
      <section>
        <TableOrder :products="products"/>
      </section>
 
      <section class="m-3 row w-[500px]">
        <div class="box p-2 items-center justify-content-center">
          <div>THÔNG TIN ĐƠN HÀNG</div>
          <div></div>
          <div class="box-info">
            <div>Số điện thoại :</div>
            <div>
              <input v-model="phone" class="m-1" type="text" name="" id="" placeholder=" *gồm 10 số*"/>
            </div>
          </div>
          <div class="box-info">
            <div>Địa chỉ :</div>
            <div>
              <input v-model="address" class="m-1" type="text" name="" id="" />
            </div>
          </div>
        </div>

        <div class="box p-2 flex items-center justify-content-center">
          <div>THÔNG TIN GIỎ HÀNG</div>
          <div>
            <div>Tổng số lượng mặt hàng : {{ products.length }}</div>
            <!-- <div><input type="text" name="" id="" /></div> -->
          </div>
          <div class="">
            <div>Tổng tiền : {{ this.total }}.000 vnđ</div>
            <!-- <div><input type="text" name="" id="" /></div> -->
          </div>
          <div>
            <input
              v-on:click="order"
              class="button"
              type="button"
              value="Đặt Hàng"
            />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import Swal from "sweetalert2";
import OrderItemProduct from "@/components/OrderItemProduct.vue";
import TableOrder from "@/components/TableOrder.vue";
import UserServices from "../services/user.services";
import HeaderMini from "../components/HeaderMini.vue";
const auth = JSON.parse(localStorage.getItem("auth"));
console.log(auth.email)
const productOrderData = await UserServices.getAllOrderProducts(auth.email);
// console.log(productOrderData)
const products = productOrderData.data.products;
console.log(products);
export default {
  name: "giohang",
  data() {
    return {
      products: products,
      total: 0,
      phone: "",
      address: "",
    };
  },
  components: {
    OrderItemProduct,
    TableOrder,
    HeaderMini
  },
  methods: {
    async order() {
      if (!this.phone || !this.address ) {
        Swal.fire(
          "Cảnh báo",
          "Số điện thoại hoặc địa chỉ không hợp lệ !",
          "warning"
        );
      } else {
        const dataInputOrder = {
          user: auth.email,
          products: products,
          total: this.total,
          phone: this.phone,
          address: this.address,
        };
        const resutl = await UserServices.Order(dataInputOrder);
        if (!resutl.data) {
          Swal.fire("Thông báo ", resutl.data.message,"warning");
        }
        else {
          Swal.fire("Thành Công" , resutl.data.message,"success");
        }
        const deleteOrder = await UserServices.deleteAllOrder({"email":auth.email});
        // console.log(deleteOrder)
        // console.log({"email" :auth[0].email})
      }
      // console.log(this.address);
    },
  },
  mounted() {
    // window.location.reload();
    for (var i = 0; i < products.length; i++) {
      this.total =
        this.total + products[i].product.price * products[i].quantity;
    }
    // console.log(this.total);
  },
};
</script>
<style>
img {
  width: 60px;
  height: 60px;
}
td {
  height: 80px;
}
input {
  width: 150px;
}
.box {
  width: 50%;
  border: 2px solid gray;
  display: grid;
  align-items: center;
  justify-content: space-between;
}
.box-info {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.button {
  border: 1px solid gray;
  border-radius: 20px;
  width: 100px;
  color: blue;
  background: aqua;
}
.button:hover {
  background: greenyellow;
}

</style>
