<script setup lang="ts">
import { defineProps, computed } from "vue";
import Monlogo from "@/images/Monlogo.png";

const props = defineProps<{
  title: string;
  srcImg: string;
  author: string;
}>();

const imageCard = computed(() =>
  props.srcImg.length > 0 ? props.srcImg : Monlogo
);
</script>

<template>
  <section class="card">
    <div class="rm-image__container">
      <img class="card__avatar__image" :src="imageCard" alt="card" />
    </div>

    <div class="title">
      {{ title }}
    </div>
    <div class="author">
      {{ author }}
    </div>
  </section>
</template>

<style scoped>
.card {
  cursor: pointer;
  background-color: #f8f7ff;
  margin: 20px;
  display: flex;
  flex-direction: column;
}

.rm-image__container {
  width: 304px;
  height: 250px;
  padding: 15px;
  background-color: #f8f7ff;
}

img {
  box-shadow: 0 7px 14px rgb(0 0 0 / 4%);
  width: 100%;
  height: 100%;
  border-radius: 15%;
  background-color: #f8f7ff;
}

.title {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding: 15px 10px;
  font-weight: 600;
  max-width: 280px;
}

.author {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
