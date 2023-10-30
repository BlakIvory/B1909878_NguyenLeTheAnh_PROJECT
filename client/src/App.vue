<script>
import AppHeader from "@/components/AppHeader.vue";

export default {
  components: {
    AppHeader,
  },
};
</script>
<template>
  <div class="" id="app">
    <AppHeader />

     <div class="h-auto w-full">
      <router-view />
    </div> 
  </div>
</template>
<style>
.page {
  max-width: 400px;
  margin: auto;
}
</style>
