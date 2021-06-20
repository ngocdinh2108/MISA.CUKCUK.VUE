<template>
  <div class="content-grid employee-grid">
    <table border="0" cellspacing="0" width="100%">
      <thead>
        <tr>
          <!-- <th fieldName="CheckBox" class="m-align-center"><input type="checkbox" /></th> -->
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

      <tbody></tbody>
    </table>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("../../css/grid.css");
</style>