<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>

  <div v-if="!meals.length" class="flex justify-center text-gray-700 font-bold">
    There are no meals
  </div>
</template>
<script setup>
import MealItem from "./MealItem.vue";

const props = defineProps({
  meals : Array
})
</script>