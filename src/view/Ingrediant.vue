<template>
  <h1 class="text-4xl font-bold mb-4 px-8 pt-8">Ingredients</h1>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
    <router-link :to="{name:'byIngrediant' , params:{ingrediant:ingredient.strIngredient}}"
                 v-for="ingredient of ingredients" :key="ingredient.idIngredient"
                 class="block bg-white rounded p-6 mb-6 shadow">
      <h3 class="text-2xl font-bold mb-3">{{ ingredient.strIngredient}}</h3>
    </router-link>
  </div>

  <Pagination :items="ingredients.value"/>
</template>

<script setup>

import {onMounted, ref} from "vue";
import axiosClient from "../axiosClient.js";
import Pagination from "../components/Pagination.vue";

const ingredients = ref([]);

onMounted(()=>{
  axiosClient.get('/list.php?i=list')
      .then(({data})=>{
        ingredients.value = data.meals;
      })
})

</script>