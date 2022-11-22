<template>
<div class="recherche">
  <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
  <input type="text" placeholder="Titre ou auteur"/>
  <button>Rechercher</button>
</div>
</template>

<style scoped>
.recherche{
background: #FFFCFC;
border-radius: 10px;
display:flex;
justify-content: end;
margin-right: 8%;
margin-top: 3%;
padding: 20px;
}

input{
border: none;
background: #FFFCFC;
font-weight: 600;
font-size: 15px;
line-height: 22px;
color: rgba(0, 0, 0, 0.68);
display: flex;
justify-content: center;
align-items: center;
}

button {
width: 125px;
height: 55px;
background: rgba(11, 5, 82, 0.89);
border-radius: 5px;
font-weight: 600;
font-size: 18px;
line-height: 27px;
color: #F0F0F5;
border: none;
}

i{
display: flex;
justify-content: center;
align-items: center;
}
</style>