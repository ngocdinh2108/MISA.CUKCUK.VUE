<template>
  <div class="sidebar">
    <!-- Phần logo -->
    <div class="sidebar-logo">
      <div class="sidebar-logo-toggle"></div>

      <div class="sidebar-logo-cukcuk"></div>
    </div>

    <!-- Phần danh sách chức năng -->
    <div class="sidebar-content">
      <!-- Router đến trang tổng quan (HelloWorld.vue) -->
      <router-link class="sidebar-content-item" to="/">
        <div class="sidebar-item-icon icon-overview-20"></div>
        <div class="sidebar-item-text">Tổng quan</div>
      </router-link>

      <div class="sidebar-content-item">
        <div class="sidebar-item-icon icon-report-20"></div>
        <div class="sidebar-item-text">Báo cáo</div>
      </div>

      <div class="sidebar-content-item">
        <div class="sidebar-item-icon icon-purchase-20"></div>
        <div class="sidebar-item-text">Mua hàng</div>
      </div>

      <!-- Router đến trang danh mục nhân viên (EmployeeList.vue) -->
      <router-link class="sidebar-content-item" to="/employee-list">
        <div class="sidebar-item-icon icon-employee-list-20"></div>
        <div class="sidebar-item-text">Danh mục nhân viên</div>
      </router-link>

      <div class="sidebar-content-item">
        <div class="sidebar-item-icon icon-setting-20"></div>
        <div class="sidebar-item-text">Thiết lập hệ thống</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* Import css dùng cho component sidebar */
@import url("../../css/sidebar.css");
</style>