<template lang="">
    <div class="popup">
        <div class="popup-inner">
            <slot/>
            <button class="popup-close" @click="closePopup"> Đóng thông tin</button>
        </div>
    </div>
</template>
<script>
// window.location.reload();
import {ref} from 'vue'
export default {
    methods: {
        closePopup() {
            this.$emit('close-popup')
        }
    }
    , props: {
        showPopup:Boolean
    }
   
}
</script>
<style lang="scss" scoped>
    .popup{
        position:fixed;
        top :0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 99;
        background-color: rgba(0,0,0,0.2);
        display: flex;
        align-items: center;
        justify-content: center;
        .popup-inner{
            background: #FFF;
            padding: 32px;
        }
}
</style>