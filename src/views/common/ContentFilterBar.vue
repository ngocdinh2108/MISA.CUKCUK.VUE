<template>
  <div class="content-filter-bar">
    <div class="content-filter-left">
      <input
        style="width: 260px"
        class="icon-search-16 search-bar field-input-icon"
        type="text"
        placeholder="Tìm kiếm theo Mã, Tên hoặc Số điện thoại"
      />

      <div class="content-filter-department">
        <div class="content-filter-text">Tất cả phòng ban</div>
        <div class="content-filter-icon">
          <i class="fas fa-chevron-down"></i>
        </div>

        <ul class="content-filter-department-list">
          <li class="content-filter-department-item content-filter-has-checked">
            <i style="padding: 0 10px" class="fas fa-check"></i>Khối nền tảng
            giáo dục
          </li>
          <li class="content-filter-department-item content-filter-no-checked">
            Khối hành chính sự nghiệp
          </li>
          <li class="content-filter-department-item content-filter-no-checked">
            Khối giải pháp bán lẻ
          </li>
        </ul>
      </div>

      <div class="content-filter-position">
        <div class="content-filter-text">Tất cả vị trí</div>
        <div class="content-filter-icon">
          <i class="fas fa-chevron-down"></i>
        </div>

        <ul class="content-filter-position-list">
          <li class="content-filter-position-item content-filter-has-checked">
            <i style="padding: 0 10px" class="fas fa-check"></i>Fresher
          </li>
          <li class="content-filter-position-item content-filter-no-checked">
            Senior
          </li>
        </ul>
      </div>
    </div>

    <div class="content-filter-right">
      <div
        @click="btnReload()"
        title="Nạp lại"
        id="btn-reload"
        class="icon-refresh"
      ></div>
    </div>
  </div>
</template>

<script>
// Import eventBus để sử dụng
import { eventBus } from "../../main.js";
export default {
  methods: {
    /**
     * Hàm load lại dữ liệu của grid
     * DNDINH 26.06.2021
     */
    btnReload() {
      eventBus.$emit("reloadData");
    },
  },
};
</script>

<style scoped>
/* Import css dùng cho component filter bar */
@import url("../../css/toolbar.css");
</style>