<template>
  <div class="home-container">
    <left-swabook />
    <right-swabook />
  </div>
</template>

<script setup lang="ts">
import LeftSwabook from "../components/LeftSwabook.vue";
import RightSwabook from "../components/RightSwabook.vue";
</script>

<style>
html:has(.home-container) {
  overflow: hidden;
}
</style>
