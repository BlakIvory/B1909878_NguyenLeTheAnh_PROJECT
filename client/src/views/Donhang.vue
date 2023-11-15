<template >
    <div class="container">
       <header-mini/> 
        <div class=" d-flex justify-content-center  align-content-center "><h1>Đơn Hàng</h1></div>
        <div>
            <table class="table">  
                <thead>
                    <th>STT</th>
                    <th>Đơn Hàng</th>
                    <th>Tổng tiền</th>
                    <th>Số điện thoại</th>
                    <th>Địa chỉ</th>
                    <th>Xử Lí</th>
                </thead>
                <tbody v-for="(order,index) in data" :key="index">
                    <td>{{ index+1 }}</td>
                    <td >
                        <div>Đơn hàng {{ index+1 }}</div></td>
                    <td>{{ order.total }}.000</td>
                    <td>{{ order.phone }}</td>
                    <td>{{ order.address }}</td>
                    <td class="d-flex"> <div class="icon_under" v-on:click="userOrder"><i class="fa-solid fa-square-caret-left fa-xl" ></i></div></td>
                </tbody>

            </table>
        </div>
    </div>
</template>
<script>
import HeaderMini from '../components/HeaderMini.vue';
import UserServices from '../services/user.services';
const auth = JSON.parse(localStorage.getItem("auth"));
const datas = await UserServices.UserOrder(auth.email);
const data = datas.data.data
console.log(data)
const user = auth.email
// console.log(user)
let products 
export default {
    name: "donhang",
    components: {
        HeaderMini,
    },
    methods: {
        async userOrder() {
        }
    },
    data() {
        return {
            data: data
        }     
    },
}
</script>
<style >
.icon_under{
    margin: 0 5px;
    transform: rotate(270deg);
    cursor: pointer;
}

</style>