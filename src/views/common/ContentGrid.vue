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
          v-for="employee in employees"
          :key="employee.EmployeeId"
          @dblclick="trOnDblClick(employee.EmployeeId)"
          :class="{ 'row-selected': isSelected }"
          @click="changeBackGroundColor()"
        >
          <td>{{ employee.EmployeeCode }}</td>
          <td>{{ employee.FullName }}</td>
          <td>{{ employee.GenderName }}</td>
          <td>{{ employee.DateOfBirth }}</td>
          <td>{{ employee.PhoneNumber }}</td>
          <td>{{ employee.Email }}</td>
          <td>{{ employee.PositionName }}</td>
          <td>{{ employee.DepartmentName }}</td>
          <td>{{ employee.Salary }}</td>
          <td>{{ employee.WorkStatus }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// Import axios để sử dụng cho component ContentGrid.vue
import axios from "axios";
export default {
  // Ngay khi được khởi tạo, component ContentGrid sẽ thực hiện các nhiệm vụ bên trong hàm created()
  created() {
    /**
     * Sử dụng axios để get dữ liệu từ API nếu thành công sẽ thực hiện các câu lệnh trong then, ngc lại nếu lỗi sẽ thực hiện các câu lệnh trong catch
     * DNDINH 21.06.2021
     */
    axios
      .get("http://cukcuk.manhnv.net/v1/Employees")
      .then((res) => {
        this.employees = res.data;
      })
      .catch((res) => {
        console.log(res);
        console.log("error");
      });
  },
  data() {
    return {
      // Mảng employees để lưu trữ dữ liệu được get từ API
      employees: [],
      isSelected: false
    };
  },
  methods: {
    changeBackGroundColor() {
      this.isSelected = true;
    },
  },
};
</script>

<style scoped>
/* Import css dùng cho component ContentGrid */
@import url("../../css/grid.css");
</style>