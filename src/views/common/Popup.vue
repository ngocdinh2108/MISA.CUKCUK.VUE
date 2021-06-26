<template>
  <div class="popup-detail" :class="{ 'm-hidden': isHide }">
    <div class="popup-modal"></div>
    <div class="popup">
      <div class="popup-header">
        <div class="popup-header-text">Xóa bản ghi</div>
        <button @click="closePopup()" class="popup-close popup-header-icon icon-close"></button>
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
        <button @click="closePopup()" class="popup-close m-btn-icon btn-dialog-no-icon">
          <div class="btn-text btn-dialog">Hủy</div>
        </button>
        <button
          @click="confirmDelete()"
          id="btn-remove"
          class="m-btn-icon btn-dialog-icon btn-remove"
        >
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
    // Lắng nghe sự kiện hiển thị popup từ các component khác
    eventBus.$on("showPopup", (employeeId) => {
      this.isHide = false;
      this.employeeId = employeeId;
    });
  },
  data() {
    return {
      isHide: true,
      employeeId: "",
      iconToast: "",
      contentToast: "",
      colorToast: "",
    };
  },
  methods: {
    /**
     * Sự kiện xác nhận xóa
     * DNDINH 26.06.2021
     */
    confirmDelete() {
      // Gọi api xóa nhân viên theo mã
      axios
        .delete(`http://cukcuk.manhnv.net/v1/Employees/${this.employeeId}`)
        .then((res) => {
          // Nếu thành công, truyền các tham số cho toast message
          (this.iconToast = "fas fa-check-circle"),
            (this.colorToast = "#019160"),
            (this.contentToast = "Xóa bản ghi thành công");
          // Hiển thị thông báo xóa thành công
          eventBus.$emit(
            "showToastMessenger",
            this.iconToast,
            this.contentToast,
            this.colorToast
          );
          // Gửi sự kiện Load lại dữ liệu cho component Content Grid
          eventBus.$emit("reloadData");
          // Đóng popup
          this.isHide = true;
        })
        // Nếu chưa chọn bản ghi nào để xóa => truyền các tham số cho toast message
        .catch((res) => {
          (this.iconToast = "fas fa-exclamation-triangle"),
            (this.colorToast = "#F65454"),
            (this.contentToast = "Bạn chưa chọn bản ghi nào để xóa");
          // Hiển thị thông báo xóa k thành công
          eventBus.$emit(
            "showToastMessenger",
            this.iconToast,
            this.contentToast,
            this.colorToast
          );
          // Đóng popup
          this.isHide = true;
        });
    },

    /**
     * Hàm để đóng popup
     * DNDINH 26.06.2021
     */
    closePopup(){
      this.isHide = true;
    }
  },
};
</script>

<style scoped>
/* Import css dùng cho component popup */
@import url("../../css/popup.css");
</style>