<template>
  <div :class="[toastDetail, { 'm-hidden': isHide }]">
    <div class="toast-detail-left">
      <div class="toast-icon">
        <i :style="{ color: color }" :class="[icon, iconToast]"></i>
      </div>
      <div class="toast-content">{{ content }}</div>
    </div>

    <div class="toast-detail-right">
      <div class="toast-close">
        <i :style="{ color: color }" class="icon-toast fas fa-times"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from '../../main';
export default {
  data() {
    return {
      isHide: true,
      toastDetail: "toast-detail",
      iconToast: "icon-toast",
      icon: "fas fa-info-circle",
      content: "Đây là thông báo",
      color: "#0075FF",
    };
  },
  created(){
    /**
     * Lắng nghe sự kiện hiển thị ToastMessenger được gửi từ component DialogDetail
     * DNDINH 25.06.2021
     */
    eventBus.$on("showToastMessenger", (iconToast, contentToast, colorToast) => {
      this.icon = iconToast,
      this.content = contentToast,
      this.color = colorToast,
      this.isHide = false
    })
  }
};
</script>

<style scoped>
@import url("../../css/toast.css");
</style>