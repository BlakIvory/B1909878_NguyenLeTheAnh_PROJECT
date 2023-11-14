<template>
  <div>
    <section class="">
      <table class="table_order table">
        <thead class="w-full thead-dark">
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Tên Sản Phẩm</th>
            <th scope="col">Hình ảnh</th>

            <th scope="col">Đơn Giá</th>
            <th scope="col">Số lượng</th>
            <th scope="col">Thành Tiền</th>
            <th scope="col">Xử Lí</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in products" :key="index">
            <th scope="row">{{ index + 1 }}</th>
            <OrderItemProduct :product="product" />
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>
<script>
import OrderItemProduct from "../components/OrderItemProduct.vue";
export default {
  name: "TableOrder",
  props: {
    products : {type :Object}
  },
  components: {
    OrderItemProduct,
  },
  
};
</script>
<style lang=""></style>
