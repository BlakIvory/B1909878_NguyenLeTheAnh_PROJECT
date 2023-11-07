<template lang="">
  <div>
    {{product.product.name}}
  </div>
</template>
<script>
export default {
  name: "itemProduct",
  props: {
    product: { type: Object, required: true },
  },
};

</script>
<style lang=""></style>
