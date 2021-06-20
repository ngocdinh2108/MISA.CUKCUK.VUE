<template>
  <div class="content-paging-bar">
    <div class="paging-bar-left">Hiển thị <b>1-10/1000</b> nhân viên</div>
    <div class="paging-bar paging-bar-center">
      <div class="paging-item-icon paging-bar-item icon-first-page"></div>

      <div class="paging-item-icon paging-bar-item icon-prev-page"></div>

      <div
        style="background-color: #019160"
        class="paging-item-number paging-bar-item"
      >
        1
      </div>

      <div class="paging-item-number paging-bar-item">2</div>

      <div class="paging-item-number paging-bar-item">3</div>

      <div class="paging-item-number paging-bar-item">4</div>

      <div class="paging-item-icon paging-bar-item icon-next-page"></div>

      <div class="paging-item-icon paging-bar-item icon-last-page"></div>
    </div>
    <div><b>10</b> nhân viên/trang</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("../../css/paging.css");
</style>