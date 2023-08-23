<template>
    <div class="p-8">
      <input type="text"
             v-model="keyWord"
             class="rounded border-2 border-gray-200 w-full"
             placeholder="Search for meals..."
             @change="searchMeal"
      >
    </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
    <div v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow rounded-lg">
      <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-lg w-full h-48 object-cover">
      <div class="p-4 flex justify-between items-center">
        <h3 class="font-semibold">{{meal.strMeal}}</h3>
        <span class="bg-blue-400 rounded-lg p-1 px-2 text-white">{{meal.strArea}}</span>
      </div>
      <p class="p-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis error, et itaque laboriosam magni ratione! Ab aspernatur eum illo, ipsam magni ut? Accusantium adipisci iure maxime molestiae perferendis quidem repudiandae?</p>
      <div class="p-4">
        <a class="px-6 py-2 rounded-lg hover:bg-blue-200 hover:text-white transition-all border border-gray-200 mr-2"
           :href="meal.strYoutube">YouTube</a>
        <router-link class="px-6 py-2 rounded-lg hover:bg-blue-200 hover:text-white  transition-all border border-gray-200" to="/">View</router-link>
      </div>
    </div>
  </div>

  <pre>{{ meals }}</pre>
</template>

<script setup>

import {computed, onMounted, ref} from "vue";
import axiosClient from "../axiosClient.js";
import store from "../store/index.js";
import {useRoute} from "vue-router";


const route = useRoute();
const keyWord = ref('');
const meals = computed(()=> store.state.searchedMeals);
function searchMeal(){
  store.dispatch('searchMeals', keyWord.value);
}

onMounted(() => {
  keyWord.value = route.params.name;
  if (keyWord.value){
    searchMeal();
  }
})
</script>