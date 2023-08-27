<template>
  <div class="flex flex-col p-8">
    <div class="flex justify-center gap-2 mt-4">
      <router-link :to="{name:'byLetter', params:{letter}}" v-for="letter of letters.split('')" key="letter">
        {{ letter }}
      </router-link>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>
</template>

<script setup>

import {computed, onMounted, watch} from "vue";
import store from "../store/index.js";
import {useRoute} from "vue-router";
import MealItem from "../components/MealItem.vue";



const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const meals = computed(() => store.state.mealsByLetter);

const route = useRoute();

watch(route,()=>{
  store.dispatch('searchMealsByLetter', route.params.letter);
})

onMounted(()=> {
  store.dispatch('searchMealsByLetter', route.params.letter);
})

</script>