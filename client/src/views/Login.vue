<template>
  <div>
    <section class="vh-100">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-6 text-black">
            <div
              class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5"
            >
              <form style="width: 23rem" @submit.prevent="submit" method="POST">
                <h3 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px">
                  Đăng nhập
                </h3>

                <div class="form-outline mb-4">
                  <label class="form-label" for="form2Example18"
                    >Tài Khoản :
                  </label>
                  <input
                    v-model="data.email"
                    type="email"
                    id="form2Example18"
                    class="form-control form-control-lg"
                  />
                </div>

                <div class="form-outline mb-4">
                  <label class="form-label" for="form2Example28"
                    >Mật Khẩu :
                  </label>
                  <input
                    v-model="data.password"
                    type="password"
                    id="form2Example28"
                    class="form-control form-control-lg"
                  />
                </div>

                <div class="pt-1 mb-4">
                  <input
                    type="submit"
                    class="btn btn-info btn-lg btn-block"
                    value="Đăng nhập"
                  />
                </div>
                <p>
                  Don't have an account?
                  <router-link to="/register">Register here</router-link>
                </p>
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
    </section>
  </div>
</template>
<script lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";
import UserService from "../services/user.services";

import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

export default {
  name: "Login",
  setup() {
    const data = reactive({
      email: "",
      password: "",
    });
    let message = "tai khoan khong co";
    const router = useRouter();

    const submit = async () => {
      const user = await UserService.login(data);

      localStorage.setItem('auth', JSON.stringify(user.data))
      //  console.log(user)
      if (user) {
        router.push("/home");
        Swal.fire({
          title: "Thông báo",
          text: "dang nhap thanh cong",
          icon: "success",
          confirmButtonText: "OK",
        });
     
      } else {
        //  message = user.data.message
        console.log(user);
      }
      //  await router.push('/');
    };
    return {
      data,
      submit,
    };
  },
};
</script>
<style>
.bg-image-vertical {
  position: relative;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: right center;
  background-size: auto 100%;
}

@media (min-width: 1025px) {
  .h-custom-2 {
    height: 100%;
  }
}
</style>
