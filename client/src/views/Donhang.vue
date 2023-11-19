<template>
  <div class="container">
    <header-mini />
    <div class="d-flex justify-content-center align-content-center">
      <h1>Đơn Hàng</h1>
    </div>
    <div>
      <div v-if="userIsAdmin">
        <div v-for="(user, index) in data" :key="index">
          <div>
            <h3>{{ user.email }}</h3>
          </div>
          <table class="table">
            <thead class="thead-dark">
              <th>STT</th>
              <th>Đơn Hàng</th>
              <th>Tổng tiền</th>
              <th>Số điện thoại</th>
              <th>Địa chỉ</th>
              <th>Trạng Thái</th>
              <th>Xử Lí</th>
            </thead>
            <tbody v-for="(order, index) in user.order" :key="index">
              <tr>
                <td>{{ index + 1 }}</td>
                <td>
                  <div>Đơn hàng {{ index + 1 }}</div>
                </td>
                <td>{{ order.total }}.000</td>
                <td>{{ order.phone }}</td>
                <td>{{ order.address }}</td>
                <td>
                  <p v-if="order.status === 1">Chưa Xác nhận</p>
                  <p v-if="order.status === 2">Đã Xác nhận</p>
                </td>
                <td class="d-flex">
                  <div class="" v-on:click="showTable = !showTable">
                    <i
                      class="icon_under fa-solid fa-square-caret-left fa-xl"
                    ></i>
                  </div>
                  <div class="" v-on:click="confirm(order, user.email)">
                    <i class="icon-under fa-solid fa-circle-check fa-lg"></i>
                  </div>
                </td>
              </tr>
              <tr v-if="showTable">
                <td class="m-5" colspan="7">
                  <table-order :products="order.products" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div v-else>
        <table class="table">
          <thead class="thead-dark">
            <th>STT</th>
            <th>Đơn Hàng</th>
            <th>Tổng tiền</th>
            <th>Số điện thoại</th>
            <th>Địa chỉ</th>
            <th>Trạng Thái</th>
            <th>Xử Lí</th>
          </thead>
          <tbody v-for="(order, index) in data" :key="index">
            <tr>
              <td>{{ index + 1 }}</td>
              <td>
                <div>Đơn hàng {{ index + 1 }}</div>
              </td>
              <td>{{ order.total }}.000</td>
              <td>{{ order.phone }}</td>
              <td>{{ order.address }}</td>
              <td>
                <p v-if="order.status === 1">Chưa Xác nhận</p>
                <p v-if="order.status === 2">Đã Xác nhận</p>
              </td>
              <td class="div_icon">
                <div class="icon_under" v-on:click="showTable = !showTable">
                  <i class="fa-solid fa-square-caret-left fa-lg"></i>
                </div>
              </td>
            </tr>
            <tr v-if="showTable">
              <td class="m-5" colspan="7">
                <table-order :products="order.products" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderMini from "../components/HeaderMini.vue";
import TableOrder from "@/components/TableOrder.vue";
import UserServices from "../services/user.services";
import Swal from 'sweetalert2';
const auth = JSON.parse(localStorage.getItem("auth"));

// console.log(data);
const user = auth.email;
const userIsAdmin = auth.isAdmin;
console.log(userIsAdmin);
let data;
if (userIsAdmin === true) {
  const datas2 = await UserServices.AllUserOrder();
  data = datas2.data;
  console.log(data);
} else {
  const datas = await UserServices.UserOrder(auth.email);
  data = datas.data.data;
  console.log(data);
}
// let products;
export default {
  name: "donhang",
  components: {
    HeaderMini,
    TableOrder,
  },
  data() {
    return {
      data: data,
      showTable: false,
      userIsAdmin: auth.isAdmin,
    };
  },
  methods: {
    async confirm(order, email) {
      // console.log(order)
      const inputData = {
        email: email,
        order: [
          {
            products: order.products,
            total: order.total,
            phone: order.phone,
            address: order.address,
            status: order.status,
          },
        ],
      };
      console.log(inputData);
      const result  = await UserServices.confirmUserOrder(inputData)
      console.log(result);
      if (result.data.status === "1") {
        Swal.fire("Thành Công" ,result.data.message,"success");
      } else {
        Swal.fire("Không Thành Công" ,result.data.message,"warning");
      }
    },
  },
};
</script>
<style>
.icon_under {
  margin: 0 5px;
  transform: rotate(270deg);
  cursor: pointer;
}
.div_icon {
  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>
