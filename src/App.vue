<script setup lang="ts">
//import { RouterLink, RouterView } from "vue-router";
import HeaderSwabook from "@/components/HeaderSwabook.vue";
import LeftSwabook from "@/components/LeftSwabook.vue";
import RightSwabook from "@/components/RightSwabook.vue";
</script>

<template>
  <header-swabook />
  <left-swabook />
  <right-swabook />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;500&family=Roboto+Condensed:ital,wght@0,400;1,700&display=swap");

html,
body {
  background-color: #f8f7ff;
  width: 100%;
  overflow: hidden;
  font-family: "Poppins", serif;
}
</style>
