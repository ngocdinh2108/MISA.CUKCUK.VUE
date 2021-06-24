<template>
  <div class="content">
    <content-header></content-header>
    <content-filter-bar></content-filter-bar>
    <content-grid></content-grid>
    <content-paging></content-paging>
    <dialog-detail></dialog-detail>
    <popup></popup>
    <toast-messenger></toast-messenger>
  </div>
</template>

<script>
import ContentHeader from "../common/ContentHeader.vue";
import ContentFilterBar from "../common/ContentFilterBar.vue";
import ContentGrid from "../common/ContentGrid.vue";
import ContentPaging from "../common/ContentPaging.vue";
import DialogDetail from '../common/DialogDetail.vue';
import Popup from '../common/Popup.vue';
import ToastMessenger from '../common/ToastMessenger.vue';

export default {
  components: {
    ContentHeader,
    ContentFilterBar,
    ContentGrid,
    ContentPaging,
    DialogDetail,
    Popup,
    ToastMessenger,
  },
  data() {
    return {
    }
  },
};
</script>

<style scoped>
/* import css dùng cho component EmployeeList.vue */
@import url('../../css/content.css');
</style>