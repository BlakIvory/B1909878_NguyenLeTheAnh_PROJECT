<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark ">
    <div class="mr-auto navbar-nav container-fluid">
      <router-link :to="{ name: 'home' }">Home</router-link>

      <div>
        <div id="apptest" v-if="isLogin">
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item" v-on:click="Logout">
              <div class="nav-link">
                Đăng Xuất <i class="fa-solid fa-right-from-bracket"></i>
              </div>
            </li>
          </ul>
        </div>

        <div v-else>
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item">
              <router-link :to="{ name: 'login' }" class="nav-link">
                Đăng Nhập
                <i class="fa-solid fa-right-to-bracket"></i>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'register' }" class="nav-link">
                Đăng kí
                <i class="fa-solid fa-address-card"></i>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import router from "../router";

export default {
  data() {
    return {
      isLogin: true,
    };
  },
  Mounted() {
    if (localStorage.getItem("auth")) {
      this.isLogin = true;
    }
  },
  methods: {
    Logout() {
      localStorage.clear();
      this.isLogin = false;
      router.push("/login");
    },
  },
};
</script>
