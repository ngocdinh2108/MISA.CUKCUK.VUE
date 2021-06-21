<template>
  <div class="content-header">
    <div class="content-header-text">Danh sách nhân viên</div>
    <div class="content-header-feature">
      <button class="m-btn-icon" id="m-btn-remove">
        <i class="far fa-trash-alt"></i>
        <div class="btn-text">Xóa nhân viên</div>
      </button>
      <!-- Khi ấn nút "Thêm nhân viên sẽ kích hoạt sự kiên showDialogDetail" -->
      <button @click="showDialogDetail()" class="m-btn-icon" id="m-btn-add">
        <div class="icon-add-16"></div>
        <div class="btn-text">Thêm nhân viên</div>
      </button>
    </div>
  </div>
</template>

<script>
// Import eventBus để sử dụng
import { eventBus } from "../../main.js";
export default {
  methods: {
    /**
     * Sự kiện "showDialogDetail" sẽ gửi sự kiện "showDialog" đến component khác khi click vào nút "Thêm nhân viên"
     * DNDINH 21.06.2021
     */
    showDialogDetail() {
      eventBus.$emit("showDialog");
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>