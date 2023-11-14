<template >
    <div class="container">

       <header-mini/> 
    </div>
</template>
<script>
import HeaderMini from '../components/HeaderMini.vue';
const auth = JSON.parse(localStorage.getItem("auth"));
const user = auth[0].email
export default {
    name: "donhang",
    components: {
        HeaderMini,
    }
}
</script>
<style >
    
</style>