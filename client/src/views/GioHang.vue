<template>
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

    <div class="mt-3">
      <section class="intro">
        <div class="bg-image h-100">
          <div class="mask d-flex align-items-center h-100">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-12">
                  <div class="card">
                    <div class="card-body">
                      <div class="table-responsive">
                        <table class="table table-borderless mb-0">
                          <thead>
                            <tr>
                              <th scope="col">STT</th>
                              <th scope="col">Tên Sản Phẩm</th>
                              <th scope="col">Hình ảnh</th>

                              <th scope="col">Đơn Giá</th>
                              <th scope="col">Số lượng</th>
                              <th scope="col">Thành Tiền</th>
                              <th scope="col">Xử  Lí</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr
                              v-for="(product, index) in products"
                              :key="index"
                            >
                              <th scope="row">{{ index + 1 }}</th>
                              <td>{{ product.product.name }}</td>
                              <td>
                                <img
                                  :src="product.product.img.srcImg"
                                  :alt="product.product.img.nameImg"
                                />
                              </td>
                              <td>{{ product.product.price }}.000</td>
                              <td>{{ product.quantity }}</td>
                              <td>
                                {{
                                  product.product.price * product.quantity
                                }}.000
                              </td>
                              <td class="d-flex justify-content-between w-75"><i class="fa-solid fa-pen-to-square text-primary"></i> <i class="fa-solid fa-trash text-danger"></i></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="m-3 row w-[500px]">
        <div class="box p-2 flex items-center justify-content-center">
          <div>THÔNG TIN ĐƠN HÀNG</div>
          <div></div>
          <div class="box-info">
            <div>Số điện thoại :</div>
            <div>
              <input v-model="phone" class="m-1" type="text" name="" id="" />
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
import ItemProduct from "../components/ItemProduct.vue";
import UserServices from "../services/user.services";
const auth = JSON.parse(localStorage.getItem("auth"));
// console.log(auth[0].email)
const productOrderData = await UserServices.getAllOrderProducts(auth[0].email);
const products = productOrderData.data.products;
// console.log(products);
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
    ItemProduct,
  },
  methods: {
    async order() {
      if (!this.phone || !this.address || this.phone.length != 10) {
        Swal.fire(
          "Cảnh báo",
          "Số điện thoại hoặc địa chỉ không hợp lệ !",
          "warning"
        );
      } else {
        const dataInputOrder = {
          user: auth[0].email,
          products: products,
          total: this.total,
          phone: this.phone,
          address: this.address,
        };
        const resutl = await UserServices.Order(dataInputOrder);
        console.log(resutl);
      }
      // console.log(this.address);
    },
  },
  mounted() {
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
  width: 100px;
  height: 100px;
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
