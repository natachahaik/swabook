<template>
  <header>
    <div class="titre-header">
      <h1>Swabook</h1>
    </div>

    <div class="icone-header">
      <img src="@/images/malette.png" alt="l'icone" />
    </div>

    <span class="user-header">
      <h1 class="name">Natacha Haïk</h1>
      <img src="@/images/natacha.jpeg" alt="image de natacha" />
    </span>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.titre-header {
  display: flex;
  justify-content: flex-start;
  padding: 28px 75px;
}

.titre-header h1 {
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 38px;
}
.icone-header {
  display: flex;
  justify-content: center;
  width: 27px;
  height: 25px;
  padding: 45px;
}

.user-header {
  display: flex;
  margin-right: 70px;
}

.user-header .name {
  display: flex;
  justify-content: end;
  font-style: normal;
  font-size: 15px;
  line-height: 22px;
  padding: 40px 10px;
}

.user-header img {
  width: 37px;
  height: 37px;
  border-radius: 50%;
  padding: 40px 10px;
  margin-right: 12Opx;
}
</style>
