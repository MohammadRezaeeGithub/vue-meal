<template>
    <div class="p-8">
      <input type="text"
             v-model="keyWord"
             class="rounded border-2 border-gray-200 w-full"
             placeholder="Search for meals..."
             @change="searchMeal"
      >
    </div>
    <Meals :meals="meals"/>
</template>

<script setup>

import {computed, onMounted, ref} from "vue";
import axiosClient from "../axiosClient.js";
import store from "../store/index.js";
import {useRoute} from "vue-router";
import YouTube from "../components/YouTube.vue";
import MealItem from "../components/MealItem.vue";
import Meals from "../components/Meals.vue";


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