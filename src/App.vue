<script setup lang="ts">
import { RouterView } from "vue-router";
import HeaderSwabook from "@/components/HeaderSwabook.vue";
</script>

<template>
  <header-swabook />
  <Suspense>
    <!-- component with nested async dependencies -->
    <div class="suspense">
      <router-view />
    </div>

    <!-- loading state via #fallback slot -->
    <template #fallback> Loading... </template>
  </Suspense>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

html,
body {
  overflow: hidden;
  background-color: #f8f7ff;
  width: 100%;
  font-family: "Poppins", serif;
}

input {
  outline: none;
}
</style>
