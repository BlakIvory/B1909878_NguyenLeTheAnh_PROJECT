<template>
  <div className="mt-5 pt-2">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-6 text-black">
          <div
            class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5"
          >
      
            <form style="width: 23rem" @submit.prevent="submit">
              <h3 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px">
                Đăng kí
              </h3>
              <div class="form-outline mb-4">
                <label class="form-label" for="form2Example18"
                  >Tên Tài Khoản :
                </label>
                <input
                  v-model="data.name"
                  id="form2Example18"
                  class="form-control form-control-lg"
                  required
                />
              </div>
              <div class="form-outline mb-4">
                <label class="form-label" for="form2Example18"
                  >Tài Khoản :
                </label>
                <input
                  v-model="data.email"
                  type="email"
                  id="form2Example18"
                  class="form-control form-control-lg"
                  required
                />
              </div>

              <div class="form-outline mb-4">
                <label class="form-label" for="">Mật Khẩu : </label>
                <input
                  v-model="data.password"
                  type="password"
                  id=""
                  class="form-control form-control-lg"
                  required
                />
              </div>
              <div class="pt-1 mb-4">
                <input
                  type="submit"
                  class="btn btn-info btn-lg btn-block"
                  value="Đăng kí"
                />
              </div>
            </form>
          </div>
        </div>
        <div class="col-sm-6 px-0 d-none d-sm-block">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
            alt="Login image"
            class="w-100 vh-100"
            style="object-fit: cover; object-position: left"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { reactive } from "vue";
import { useRouter } from 'vue-router';
import UserService from "../services/user.services";
import Swal from "sweetalert2";
import 'sweetalert2/src/sweetalert2.scss'

export default {
  name: "Register",
  
  setup() {
    const data = reactive({
      name: "",
      email: "",
      password: "",
      order:[],
    });

    const router = useRouter();
    const submit = async () => {
      // console.log(data);
      const checkuser = await UserService.register(data)
      if (checkuser) {
        await router.push('/login');
        Swal.fire("Success", "Registration Was successful", "success");
      } else {
        Swal.fire("Error", "Something Went Wrong", "error",);
      }

    };
    return {
      data,
      submit,
    };
  },
};
</script>
<style></style>
