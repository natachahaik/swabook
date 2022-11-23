<template>
  <section class="card">
   
    <div class="card__avatar">
      <div class="rm-image__container">
        <img class="card__avatar__image" :src="imageCard" alt="card" />
      </div>
    </div>

    <div class="title">
      {{ title }}
    </div>
    <div class="author">
      {{ author }}
    </div>
  </section>
</template>
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

<style scoped>
.card {
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  box-shadow: 0 7px 14px rgb(0 0 0 / 4%);
  width: 150px;
  height: 300px;
  cursor: pointer;
  background-color:white;
  display: flex;
}

.card__avatar {
  width: 100%;
  height: 100%;
  background-color: white;
}

.rm-image__container {
  width: 100%;
}
img {
  width: 100%;
}

.title {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 30px;
  font-family: poppins;
  background-color: white;
  color: black;
}

.author {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 10px;
  background-color: bisque;
}
</style>
