<template>
  <div class="toast-detail">
    <div class="toast-detail-left">
      <div class="toast-icon">
        <i
          :style="{color: color}"
          :class="[icon]"
        ></i>
      </div>
      <div class="toast-content">{{content}}</div>
    </div>

    <div class="toast-detail-right">
      <div class="toast-close"><i :style="{color: color}" class="fas fa-times"></i></div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            icon: "fas fa-info-circle",
            content: "Đây là thông báo",
            color: "#0075FF"
        }
    },
};
</script>

<style scoped>
@import url("../../css/toast.css");
</style>