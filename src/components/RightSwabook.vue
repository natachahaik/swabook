<template>
<section class="search">
  
<span class="title">
    <h1>Penser. Lire. Vivre.</h1>
    <p>Un livre vous attend.</p>
</span>

<form-swabook/>

</section>

</template>

<script setup lang="ts">
import FormSwabook from "@/components/FormSwabook.vue";
</script>
<style scoped>


.search {
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  line-height: 2px;

}

.title{
display: flex;
flex-direction: column;
margin-top: 13%;
margin-right: 5%;
line-height: 2%;

}
h1{
display: flex;
justify-content: end;
font-family: 'Poppins';
font-style: bold;
font-weight: 600;
font-size: 70px;
color: #000000;
}

p{
display: flex;
justify-content: end;
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 23px;
color: rgba(0, 0, 0, 0.8);
margin-right: 15%;
}


</style>