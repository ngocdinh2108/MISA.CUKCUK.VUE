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
                  v-model="employee.EmployeeCode"
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
                  v-model="employee.FullName"
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
                  v-model="employee.DateOfBirth"
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
                  v-model="employee.Gender"
                >
                  <option name="" id="" value="1">Nam</option>
                  <option name="" id="" value="0">Nữ</option>
                  <option name="" id="" value="2">Không xác định</option>
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
                  v-model="employee.Email"
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
                  v-model="employee.PhoneNumber"
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
                  v-model="employee.PositionName"
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
                  v-model="employee.Salary"
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
                  v-model="employee.WorkStatus"
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
        <button
          @click="btnSaveOnClick()"
          id="btn-save"
          class="m-btn-icon btn-dialog-icon"
        >
          <i class="far fa-save"></i>
          <div class="btn-dialog">Lưu</div>
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
  data() {
    return {
      isHide: true,
      employee: {},
      dialogMode: "",
      colorToast: "#019160",
      contentToast: "Thêm mới thành công",
      iconToast: "fas fa-check-circle",
    };
  },
  // Ngay khi được khởi tạo, component DialogDetail sẽ thực hiện các nhiệm vụ bên trong hàm created()
  created() {
    /**
     * Lắng nghe sự kiện được gửi sang từ component ContentHeader khi click nút thêm mới
     * DNDINH 21.06.2021
     */
    eventBus.$on("showDialog", (dialogModeEventBus) => {
      // Nhận dialog mode
      this.dialogMode = dialogModeEventBus;
      // Xóa hết dữ liệu trong dialog
      this.employee = {};
      // Gọi API tự sinh mã mới
      axios
        .get("http://cukcuk.manhnv.net/v1/Employees/NewEmployeeCode")
        .then((res) => {
          // Gán mã nhân viên mới vào ô input Mã nhân viên
          this.employee.EmployeeCode = res.data;
          alert(this.employee.EmployeeCode);
        })
        .catch((res) => {
          console.log(res);
        });
      // Hiển thị form
      this.isHide = false;
    });

    /**
     * Lắng nghe sự kiện được gửi sang từ component ContentGrid khi double click 1 dòng
     * DNDINH 23.06.2021
     */
    eventBus.$on("getCustomer", (employeeEventBus) => {
      // Gán biến employee đc truyển sang cho data this.employee để sử dụng
      this.employee = employeeEventBus;
      // Biding dữ liệu vào dialog-detail bằng v-model và hiển thị dialog lên
      this.isHide = false;
    });

    /**
     * Lắng nghe sự kiện được gửi sang từ component ContentGrid khi double click 1 dòng
     * DNDINH 23.06.2021
     */
    eventBus.$on("getDialogMode", (dialogModeEventBus) => {
      this.dialogMode = dialogModeEventBus;
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
    /**
     * Sự kiện đóng ấn nút "Lưu"
     * DNDINH 24.06.2021
     */
    btnSaveOnClick() {
      // Khi ấn nút thêm nhân viên => trạng thái của dialog là "add"
      if (this.dialogMode == "add") {
        axios
          .post("http://cukcuk.manhnv.net/v1/Employees", this.employee)
          .then((res) => {
            console.log(res);
            // Nếu như thêm thành công, gửi sự kiện cho component ToastMessenger để hiển thị thông báo
            eventBus.$emit(
              "showToastMessenger",
              this.iconToast,
              this.contentToast,
              this.colorToast
            );
            // Gửi sự kiện Load lại dữ liệu cho component Content Grid
            eventBus.$emit("reloadData");
            // Đóng dialog-detail
            this.isHide = true;
          })
          .catch((res) => {
            console.log(res);
            this.iconToast = "fas fa-exclamation-triangle";
            this.contentToast = "Thêm dữ liệu thất bại";
            this.colorToast = "#F65454";
            // Nếu như thêm thất bại, gửi sự kiện cho component ToastMessenger để hiển thị thông báo
            eventBus.$emit(
              "showToastMessenger",
              this.iconToast,
              this.contentToast,
              this.colorToast
            );
            // Gửi sự kiện Load lại dữ liệu cho component Content Grid
            eventBus.$emit("reloadData");
            // Đóng dialog-detail
            this.isHide = true;
          });
        // Khi ấn dblclick vào 1 dòng => trạng thái của dialog là "edit"
      } else {
        axios
          .put(
            `http://cukcuk.manhnv.net/v1/Employees/${this.employee.EmployeeId}`,
            this.employee
          )
          .then((res) => {
            console.log(res);
            // Nếu như thêm thành công, gửi sự kiện cho component ToastMessenger để hiển thị thông báo
            this.contentToast = "Cập nhật thành công";
            eventBus.$emit(
              "showToastMessenger",
              this.iconToast,
              this.contentToast,
              this.colorToast
            );
            // Gửi sự kiện Load lại dữ liệu cho component Content Grid
            eventBus.$emit("reloadData");
            // Đóng dialog-detail
            this.isHide = true;
          })
          .catch((res) => {
            console.log(res);
            this.iconToast = "fas fa-exclamation-triangle";
            this.contentToast = "Cập nhật thất bại";
            this.colorToast = "#F65454";
            // Nếu như thêm thất bại, gửi sự kiện cho component ToastMessenger để hiển thị thông báo
            eventBus.$emit(
              "showToastMessenger",
              this.iconToast,
              this.contentToast,
              this.colorToast
            );
            // Gửi sự kiện Load lại dữ liệu cho component Content Grid
            eventBus.$emit("reloadData");
            // Đóng dialog-detail
            this.isHide = true;
          });
      }
    },
  },
};
</script>

<style  scoped>
@import url("../../css/dialog.css");
</style>