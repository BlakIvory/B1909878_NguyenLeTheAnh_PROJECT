<template>
  <div className="flex border  ">
    <nav class="primary-navigation navbar navbar-expand">
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li class="nav-item primarynavigation">
          <router-link class="nav-link" :to="{ name: 'home' }"
            >Trang Chủ |</router-link
          >
        </li>
        <li class="nav-item primarynavigation">
          <router-link class="nav-link" :to="{ path: '/home' }"
            >Giới thiệu |</router-link
          >
        </li>
        <li class="nav-item primarynavigation">
          <router-link class="nav-link" :to="{ path: '/giohang' }"
            >Giỏ Hàng |</router-link
          >
        </li>
        <li class="nav-item primarynavigation">
          <router-link class="nav-link" :to="{ name: 'donhang' }"
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
</template>
<script>
export default {
  name: "headermini",
};
</script>
<style></style>
