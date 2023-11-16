<template>
  <div class="container">
    <header-mini />
    <div class="d-flex justify-content-center align-content-center">
      <h1>Đơn Hàng</h1>
    </div>
    <div>
      <div v-if="userIsAdmin" >
        <div v-for="(user, index) in data" :key="index">
          <div><h3>{{ user.email }}</h3></div>
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
                  <div class="icon_under" v-on:click="showTable = !showTable">
                    <i class="fa-solid fa-square-caret-left fa-xl"></i>
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
      <div v-else >
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
              <td class="d-flex">
                <div class="icon_under" v-on:click="showTable = !showTable">
                  <i class="fa-solid fa-square-caret-left fa-xl"></i>
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
};
</script>
<style>
.icon_under {
  margin: 0 5px;
  transform: rotate(270deg);
  cursor: pointer;
}
</style>
