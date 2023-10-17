<template lang="">
  <div v-if="contact" class="page">
    <h4>Thêm Liên hệ</h4>
    <ContactForm :contact="contact" @submit:contact="AddContact"></ContactForm>
    <p>{{ message }}</p>
  </div>
</template>
<script>
import ContactForm from "@/components/ContactForm.vue";
import ContactService from "@/services/contact.service";
import router from "../router";
// import { object } from 'yup/lib/locale';
export default {
  components: {
    ContactForm,
  },
  data() {
            return {
                contact: {
                type: Object,
                required: true
            },
                };
        },
  methods: {
    AddContact() {
      if(confirm("Bạn có chắc chắn thêm !!!" )){
                    this.$router.push({ name: "contactbook" });
                    return ContactService.create(this.contact);
                 }
    }
  },
}

</script>

<style lang="">
  
</style>