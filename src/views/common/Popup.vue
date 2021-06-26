<template>
  <div class="popup-detail" :class="{ 'm-hidden': isHide }">
    <div class="popup-modal"></div>
    <div class="popup">
      <div class="popup-header">
        <div class="popup-header-text">Xóa bản ghi</div>
        <button class="popup-close popup-header-icon icon-close"></button>
      </div>

      <div class="popup-body">
        <div class="popup-body-icon">
          <i class="fas fa-exclamation-circle"></i>
        </div>

        <div class="popup-body-text">
          Bạn có chắc chắn muốn xóa bản ghi này hay không?
        </div>
      </div>

      <div class="popup-footer">
        <button class="popup-close m-btn-icon btn-dialog-no-icon">
          <div class="btn-text btn-dialog">Hủy</div>
        </button>
        <button id="btn-remove" class="m-btn-icon btn-dialog-icon btn-remove">
          <div class="btn-dialog">Xóa</div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// Import eventBus để sử dụng
import { eventBus } from "../../main.js";
export default {
  created() {
      eventBus.$on("showPopup",()=>{
          this.isHide = false
      })
  },
  data() {
      return {
          isHide: true
      }
  },
};
</script>

<style scoped>
/* Import css dùng cho component popup */
@import url("../../css/popup.css");
</style>