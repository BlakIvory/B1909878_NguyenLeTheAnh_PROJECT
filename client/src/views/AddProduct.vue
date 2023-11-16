<template>
  <div class="container">
    <header-mini />
    <div class="d-flex justify-content-center mt-2">
      <h1>Thêm Sản Phẩm Mới</h1>
    </div>
    <div class="d-flex justify-content-center">
      <form @submit.prevent="submitForm">
        <div class="form_addproduct">
          <label for="">Tên sản phẩm :</label>
          <input
            type="text"
            name=""
            id=""
            v-model="product.name"
            placeholder="Tên sản phẩm"
            required
          />
        </div>
        <div class="form_addproduct">
          <label for="">Giá sản phẩm :</label>
          <input
            type="number"
            min="0"
            step="10"
            v-model="product.price"
            placeholder="giá sản phẩm"
            required
          />
        </div>
        <div class="form_addproduct">
          <label for="">Số lượng sản phẩm :</label>
          <input
            type="number"
            placeholder="0"
            v-model="product.quantity"
            min="0"
            required
          />
        </div>
        <div class="form_addproduct">
          <label for="">Giải thích/Nhà xuất bản :</label>
          <input
            type="text"
            placeholder="Nhà xuất bản"
            v-model="product.description"
          />
        </div>
        <div class="form_addproduct">
          <label for="">Hình ảnh :</label>
          <input type="file" required @change="handleFileUpload" />
        </div>
        <div class="form_addproduct">
          <label for="">Ghi chú :</label>
          <input type="text" placeholder="Ghi chú" v-model="product.note" />
        </div>
        <div class="d-flex justify-content-center">
          <input type="submit" v-on:click="submitadd" value="Thêm Sản Phẩm" />
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import HeaderMini from "../components/HeaderMini.vue";
import ProductService from '../services/product.services';

export default {
  components: { HeaderMini },
  data() {
    return {
      product: {
        name: "",
        description: "",
        note: "",
        price: "",
        quantity: "",
        img: null,
      },
    };
  },
    methods: {
        handleFileUpload(event) {
            this.product.img = event.target.files[0];
        },
        async submitForm() {
            const formData = new FormData();
      formData.append('name', this.product.name);
      formData.append('description', this.product.description);
      formData.append('price', this.product.price);
      formData.append('quantity', this.product.quantity);
      formData.append('img', this.product.img);
            // console.log(formData)
          const result = await ProductService.createProduct(formData);
            console.log(result)
        },
    }
}
</script>
<style>
.form_addproduct {
  display: grid;
  grid-template-columns: 300px 200px;
  margin: 10px;
}
</style>
