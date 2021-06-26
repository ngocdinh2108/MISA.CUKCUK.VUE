<template>
  <div class="loading" :class="{ 'm-hidden': isHide }">
    <div class="loading-modal"></div>
    <div class="loader"></div>
  </div>
</template>

<script>
// Import eventBus để sử dụng
import { eventBus } from "../../main.js";
export default {
  created() {
    eventBus.$on("showLoader", () => {
      this.isHide = false;
      setTimeout(() => {
        this.isHide = true;
      }, 1000);
    });
  },
  data() {
    return {
      isHide: true,
    };
  },
};
</script>

<style scoped>
@import url("../../css/loader.css");
</style>