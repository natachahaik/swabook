<template>
  <div class="recherche">
    <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
    <form @submit="handleInputChange">
      <input type="text" placeholder="Titre ou auteur" v-model="search" />
      <button>Rechercher</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const search = ref("");

const router = useRouter();
const handleInputChange = () => {
  router.push({ name: "SearchPageSwabook", params: { search: search.value } });
};
</script>
<style scoped>
.recherche {
  background: #fffcfc;
  border-radius: 10px;
  display: flex;
  justify-content: end;
  margin-right: 8%;
  margin-top: 3%;
  padding: 20px;
}

form {
  display: flex;
}

input {
  border: none;
  background: #fffcfc;
  font-weight: 600;
  font-size: 15px;
  line-height: 22px;
  color: rgba(0, 0, 0, 0.68);
  font-family: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  width: 125px;
  height: 55px;
  background: rgba(11, 5, 82, 0.89);
  font-family: inherit;
  border-radius: 5px;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #f0f0f5;
  border: none;
}

i {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
