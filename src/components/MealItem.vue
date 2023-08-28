<template>
  <div  class="bg-white shadow rounded-lg hover:scale-105 transition-all">
    <router-link :to="{name:'mealDetails',params:{id:meal.idMeal}}">
      <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-lg w-full h-60  object-cover">
    </router-link>
    <div class="p-4 flex justify-between items-center">
      <h3 class="font-semibold">{{meal.strMeal}}</h3>
      <span class="bg-blue-400 rounded-lg p-1 px-2 text-white">{{meal.strArea}}</span>
    </div>
    <p class="p-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis error, et itaque laboriosam magni ratione! Ab aspernatur eum illo, ipsam magni ut? Accusantium adipisci iure maxime molestiae perferendis quidem repudiandae?</p>
    <div class="p-4">
      <YouTube :href="meal.strYoutube">Watch on YouTube</YouTube>
    </div>
  </div>
</template>
<script setup>
import YouTube from "./YouTube.vue";


const { meal } = defineProps({
  meal : Object
})
</script>