<template>
  <div class="wrap-body">
    <!-- Component left sidebar -->
    <the-left-sidebar></the-left-sidebar>

    <!-- Phần nội dung bên phải bao gồm header và content -->
    <div class="wrap-right">
      <!-- Component header -->
      <the-header></the-header>
      <!-- Component content -->
      <the-content :varPr="variable"></the-content>
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
    return {};
  },
};
</script>

<style>
/* Phần thư viện */
/* Thư viện font awesome */
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css");
/* Phần css dùng chung */
@import url("css/main.css");
@import url("css/icon.css");
@import url("css/align.css");
@import url("css/button.css");
</style>
