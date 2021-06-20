<template>
  <div class="header">
    <div class="header-left">
      <div class="header-left-text">Nhà hàng Biển Đông</div>
      <div class="header-left-icon"><i class="fas fa-chevron-down"></i></div>
    </div>

    <div class="header-right">
      <div class="header-right-avatar"></div>
      <div class="header-right-name">Đinh Ngọc Định</div>
      <div class="header-right-option icon-option-16"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    varPr: {
      type: String,
      default: "1",
    },
  },
};
</script>

<style scoped>
@import url("../../css/header.css");
</style>