<template>
  <router-link :to="{ name: 'HomePage' }">Retour</router-link>
  <div class="bookitem-list">
    <book-item
      v-for="book in books"
      :title="book.title"
      :author="book.author"
      :src-img="book.image"
      :key="book.title"
    >
    </book-item>
  </div>

</template>

<script setup lang="ts">
import { getBooks } from "@/services";
import { ref } from "vue";
import { defineProps } from "vue";
import BookItem from "@/components/BookItem.vue"

const props = defineProps<{
  search: string;
}>();

//récupérer la réponse
const books = ref(await getBooks(props.search));
</script>

<style scoped>
.bookitem-list {
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  padding: 35px;
}
.title {
  justify-content: center;
  align-items: center;
}
.subtitle {
  font-size: 16px;
  font-weight: bolder;
}

.description {
  font-size: 12px;
}
</style>
