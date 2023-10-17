<template lang="">
  <div>Home</div>
  {{message}}
</template>
<script lang="ts">
import { onMounted, ref } from 'vue';
import userServices from '../services/user.services';
export default {
    name: "Home",
    setup() {

        const message = ref('you are not logn in')

        onMounted(async () => {
            const response = await userServices.login()
            const content = await response.json();
            message.value = 'Hellô  ${content.name}';
        });
        return {
            message,
        }
    }


}
</script>
<style></style>
