<template>
  <div class="dialog-detail" :class="{ 'm-hidden': isHide }">
    <div class="dialog-modal"></div>
    <div class="dialog-content">
      <div class="dialog-content-header">
        <div class="dialog-content-header-text">THÔNG TIN NHÂN VIÊN</div>
        <button
          @click="closeDialog()"
          class="dialog-close dialog-content-header-icon icon-close"
        ></button>
      </div>

      <div class="dialog-content-body">
        <div class="dialog-body-left">
          <div class="dialog-body-avatar"></div>
          <div class="dialog-body-text">
            (Vui lòng chọn ảnh có định dạng .jpg, .jpeg, .png, .gif.)
          </div>
        </div>

        <div class="dialog-body-right">
          <div class="dialog-body-header">A. THÔNG TIN CHUNG:</div>
          <div class="dialog-body-row">
            <div class="dialog-body-row-left">
              <div class="dialog-label">
                Mã nhân viên (<span style="color: red">*</span>)
              </div>
              <div class="wrap-input-dialog">
                <input
                  fieldName="EmployeeCode"
                  id="txtID"
                  class="input-dialog input-required"
                  type="text"
                />
              </div>
            </div>

            <div class="dialog-body-row-right">
              <div class="dialog-label">
                Họ và tên (<span style="color: red">*</span>)
              </div>
              <div class="wrap-input-dialog">
                <input
                  fieldName="FullName"
                  id="txtFullName"
                  class="input-dialog input-required"
                  type="text"
                />
              </div>
            </div>
          </div>

          <div class="dialog-body-row">
            <div class="dialog-body-row-left">
              <div class="dialog-label">Ngày sinh</div>
              <div class="wrap-input-dialog">
                <input
                  fieldName="DateOfBirth"
                  id="dtDateOfBirth"
                  class="input-dialog"
                  type="date"
                />
              </div>
            </div>

            <div class="dialog-body-row-right">
              <div class="dialog-label">Giới tính</div>
              <div class="wrap-input-dialog">
                <select
                  fieldName="GenderName"
                  id="cbxGender"
                  class="select-gender"
                  value=""
                >
                  <option name="" id="">Nam</option>
                  <option name="" id="">Nữ</option>
                  <option name="" id="">Không xác định</option>
                </select>
              </div>
            </div>
          </div>

          <div class="dialog-body-row">
            <div class="dialog-body-row-left">
              <div class="dialog-label">Số CMTND/ Căn cước</div>
              <div class="wrap-input-dialog">
                <input class="input-dialog" type="text" disabled />
              </div>
            </div>

            <div class="dialog-body-row-right">
              <div class="dialog-label">Ngày cấp</div>
              <div class="wrap-input-dialog">
                <input class="input-dialog" type="date" disabled />
              </div>
            </div>
          </div>

          <div class="dialog-body-row">
            <div class="dialog-body-row-left">
              <div class="dialog-label">Nơi cấp</div>
              <div class="wrap-input-dialog">
                <input class="input-dialog" type="text" disabled />
              </div>
            </div>
          </div>

          <div class="dialog-body-row">
            <div class="dialog-body-row-left">
              <div class="dialog-label">
                Email (<span style="color: red">*</span>)
              </div>
              <div class="wrap-input-dialog">
                <input
                  fieldName="Email"
                  id="txtEmail"
                  class="input-dialog"
                  placeholder="example@domain.com"
                  type="email"
                />
              </div>
            </div>

            <div class="dialog-body-row-right">
              <div class="dialog-label">
                Số điện thoại (<span style="color: red">*</span>)
              </div>
              <div class="wrap-input-dialog">
                <input
                  fieldName="PhoneNumber"
                  id="txtPhoneNumber"
                  class="input-dialog input-required"
                  type="text"
                />
              </div>
            </div>
          </div>

          <div class="dialog-body-header dialog-body-header-two">
            B. THÔNG TIN CÔNG VIỆC:
          </div>
          <div class="dialog-body-row">
            <div class="dialog-body-row-left">
              <div class="dialog-label">Vị trí</div>
              <div class="wrap-input-dialog">
                <input
                  fieldName="PositionName"
                  id="txtPosition"
                  class="input-dialog"
                  type="text"
                />
              </div>
            </div>

            <div class="dialog-body-row-right">
              <div class="dialog-label">Phòng ban</div>
              <div class="wrap-input-dialog">
                <input
                  fieldName="DepartmentName"
                  id="txtDepartment"
                  class="input-dialog"
                  type="text"
                />
              </div>
            </div>
          </div>

          <div class="dialog-body-row">
            <div class="dialog-body-row-left">
              <div class="dialog-label">Mức lương cơ bản</div>
              <div class="wrap-input-dialog">
                <input
                  fieldName="Salary"
                  id="txtSalary"
                  class="input-dialog"
                  type="text"
                />
              </div>
            </div>

            <div class="dialog-body-row-right">
              <div class="dialog-label">Tình trạng công việc</div>
              <div class="wrap-input-dialog">
                <input
                  fieldName="WorkStatus"
                  id="txtStatus"
                  class="input-dialog"
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="dialog-content-footer">
        <button
          @click="closeDialog()"
          class="dialog-close m-btn-icon btn-dialog-no-icon"
        >
          <div class="btn-text btn-dialog">Hủy</div>
        </button>
        <button id="btn-save" class="m-btn-icon btn-dialog-icon">
          <i class="far fa-save"></i>
          <div class="btn-dialog">Lưu</div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// Import eventBus để sử dụng
import { eventBus } from "../../main.js";
export default {
  data() {
    return {
      isHide: true,
    };
  },
  // Ngay khi được khởi tạo, component DialogDetail sẽ thực hiện các nhiệm vụ bên trong hàm created()
  created() {
    /**
     * Lắng nghe sự kiện được gửi sang từ component ContentHeader khi click nút thêm mới
     * DNDINH 21.06.2021
     */
    eventBus.$on("showDialog", () => {
      this.isHide = false;
    });
  },
  methods: {
    /**
     * Sự kiện đóng dialog detail khi ấn nút "x" hoặc nút "Hủy"
     * DNDINH 21.06.2021
     */
    closeDialog() {
      this.isHide = true;
    },
  },
};
</script>

<style  scoped>
@import url("../../css/dialog.css");
</style>