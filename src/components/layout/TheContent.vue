<template>
  <div class="content">
    <content-header></content-header>
    <content-filter-bar></content-filter-bar>
    <content-grid></content-grid>
    <content-paging></content-paging>
  </div>
</template>

<script>
import ContentHeader from "../../views/employee/ContentHeader.vue";
import ContentFilterBar from "../../views/employee/ContentFilterBar.vue";
import ContentGrid from "../../views/employee/ContentGrid.vue";
import ContentPaging from "../../views/employee/ContentPaging.vue";
export default {
  components: {
    ContentHeader,
    ContentFilterBar,
    ContentGrid,
    ContentPaging,
  },
};
</script>

<style scoped>
@import url('../../css/content.css');
</style>