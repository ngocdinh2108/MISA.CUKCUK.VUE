<template>
  <div class="wrap-body">
    <!-- Phần menu bên tay trái -->
    <the-left-sidebar></the-left-sidebar>

    <!-- Phần nội dung bên phải -->
    <div class="wrap-right">
      <!-- Header -->
      <the-header :varPr="variable"></the-header>
      <!-- Content -->
      <the-content></the-content>
    </div>
  </div>
</template>

<script>
// Import component
import TheContent from "./components/layout/TheContent.vue";
import TheHeader from "./components/layout/TheHeader.vue";
import TheLeftSidebar from "./components/layout/TheLeftSidebar.vue";

export default {
  name: "App",
  components: {
    TheLeftSidebar,
    TheHeader,
    TheContent,
  },
  data: function () {
    return {
      variable: "alo",
    };
  },
};
</script>

<style>
/* Phần thư viện */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');
/* Phần css dùng chung */
@import url('css/main.css');
@import url('css/icon.css');
@import url('css/align.css');
@import url('css/button.css');
</style>
