<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark mb-4">
    <div class="mr-auto navbar-nav container-fluid">
     
        <router-link :to="{ name: 'home' }"> Home</router-link>
  
      <div>
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <router-link :to="{ name: 'login' }" class="nav-link">
              Đăng Nhập
              <i class="fas fa-address-book"></i>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'register' }" class="nav-link">
              Đăng kí
              <i class="fas fa-address-book"></i>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
