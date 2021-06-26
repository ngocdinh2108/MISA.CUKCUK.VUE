<template>
  <div class="content-grid employee-grid">
    <table border="0" cellspacing="0" width="100%">
      <thead>
        <tr>
          <th fieldName="EmployeeCode">Mã nhân viên</th>
          <th fieldName="FullName">Họ và tên</th>
          <th fieldName="GenderName">Giới tính</th>
          <th fieldName="DateOfBirth" dataType="Date" class="m-align-center">
            Ngày sinh
          </th>
          <th fieldName="PhoneNumber">Điện thoại</th>
          <th fieldName="Email">Email</th>
          <th fieldName="PositionName">Chức vụ</th>
          <th fieldName="DepartmentName">Phòng ban</th>
          <th fieldName="Salary" dataType="Money" class="m-align-right">
            Mức lương cơ bản
          </th>
          <th fieldName="WorkStatus">Tình trạng công việc</th>
        </tr>
      </thead>

      <tbody>
        <!-- Sau khi đã get được dữ liệu từ API và đổ vào trong mảng employees => dùng v-for để lặp mảng và bind dữ liệu vào content grid -->
        <tr
          v-for="(employee, index) in employees"
          :key="employee.EmployeeId"
          @dblclick="trOnDblClick(employee.EmployeeId)"
          :class="{ 'row-selected': index == rowSelected }"
          @click="[(rowSelected = index), selectRow(employee.EmployeeId)]"
        >
          <td>{{ employee.EmployeeCode }}</td>
          <td>{{ employee.FullName }}</td>
          <td>{{ employee.GenderName }}</td>
          <td class="m-align-center">{{ employee.DateOfBirth }}</td>
          <td>{{ employee.PhoneNumber }}</td>
          <td>{{ employee.Email }}</td>
          <td>{{ employee.PositionName }}</td>
          <td>{{ employee.DepartmentName }}</td>
          <td class="m-align-right">{{ employee.Salary }}</td>
          <td>{{ employee.WorkStatus }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// Import file common.js để sử dụng các hàm dùng chung
import commonJS from "../../js/common/common.js";
// Import axios để sử dụng cho component ContentGrid.vue
import axios from "axios";
// Import eventBus để sử dụng
import { eventBus } from "../../main.js";
export default {
  // Ngay khi được khởi tạo, component ContentGrid sẽ thực hiện các nhiệm vụ bên trong hàm created()
  created() {
    /**
     * Sử dụng axios để get dữ liệu từ API nếu thành công sẽ thực hiện các câu lệnh trong then, ngc lại nếu lỗi sẽ thực hiện các câu lệnh trong catch
     * DNDINH 21.06.2021
     */
    this.getDataTable();

    /**
     * Lắng nghe sự kiện reload lại trang được gửi từ component DialogDetail khi thêm mới dữ liệu hoặc cập nhật dữ liệu thành công
     */
    eventBus.$on("reloadData", () => {
      eventBus.$emit("showLoader");
      this.getDataTable();
    });
  },
  data() {
    return {
      // Mảng employees để lưu trữ dữ liệu được get từ API
      employees: [],
      // Biến để lưu trạng thái của dialog-detail
      dialogMode: "",
      rowSelected: null,
    };
  },
  methods: {
    /**
     * Sự kiện khi click chọn 1 bản ghi
     * DNDINH 26.06.2021
     */
    selectRow(employeeId) {
      eventBus.$emit("getRowIsSelected", employeeId);
    },

    /**
     * Sự kiện binding dữ liệu vào trong content grid
     * DNDINH 23.06.2021
     */
    getDataTable() {
      axios
        .get("http://cukcuk.manhnv.net/v1/Employees")
        .then((res) => {
          for (let index = 0; index < res.data.length; index++) {
            // Format ngày sinh
            res.data[index].DateOfBirth = commonJS.formatDate(
              res.data[index].DateOfBirth
            );
            // Format tiền
            res.data[index].Salary = commonJS.formatMoney(
              res.data[index].Salary
            );
            // Chuyển đổi giới tính (kiểu số) và trạng thái công việc (kiểu số) về kiểu chuỗi hiển thị
          }
          // Đổ dữ liệu lấy được vào mảng this.employees đc khai báo trong data
          this.employees = res.data;
        })
        .catch((res) => {
          console.log(res);
          console.log("error");
        });
    },
    /**
     * Sự kiện double click 1 dòng
     * DNDINH 23.06.2021
     */
    trOnDblClick(employeeId) {
      // Cập nhật lại trạng thái của dialog
      this.dialogMode = "edit";
      // Lấy id của bản ghi được chọn

      // Gọi API lấy thông tin khách hàng
      axios
        .get(`http://cukcuk.manhnv.net/v1/Employees/${employeeId}`)
        .then((res) => {
          var employee = res.data;
          // Gửi sự kiện và customer lấy được cho component DialogDetail
          eventBus.$emit("getCustomer", employee);
          // Gửi sự kiện dialogMode lấy được cho component DialogDetail
          eventBus.$emit("getDialogMode", this.dialogMode);
        })
        .catch((res) => {
          console.log(res);
        });
    },
  },
};
</script>

<style scoped>
/* Import css dùng cho component ContentGrid */
@import url("../../css/grid.css");
</style>