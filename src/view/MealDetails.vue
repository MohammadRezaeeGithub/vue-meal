<template>
    <div class="max-w-[800px] bg-white shadow-lg mx-auto p-8">
      <h1 class="font-bold">{{ meal.strMeal }}</h1>
      <img :src="meal.strMealThumb" :alt="meal.strMeal" >
      <div class="flex justify-between py-3 px-6">
        <div>
          <strong>Category: </strong> {{ meal.strCategory }}
        </div>
        <div>
          <strong>Area: </strong> {{ meal.strArea }}
        </div>
        <div>
          <strong>Tags: </strong> {{ meal.strTags }}
        </div>
      </div>
      <div>
        {{ meal.strInstructions }}
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 mb-6">
        <div>
          <h2 class="text-2xl font-semibold mb-3">Ingredients</h2>
          <ul>
            <template v-for="(el,ind) of new Array(20)">
              <li v-if="meal[`strIngredient${ind + 1}`]">
              {{ ind + 1 }} . {{ meal[`strIngredient${ind + 1}`] }}
              </li>
            </template>
          </ul>
        </div>
        <div>
          <h2 class="text-2xl font-semibold mb-3">Measures</h2>
          <ul>
            <template v-for="(el,ind) of new Array(20)">
              <li v-if="meal[`strMeasure${ind + 1}`]">
                {{ ind + 1 }} . {{ meal[`strMeasure${ind + 1}`] }}
              </li>
            </template>
          </ul>
        </div>
      </div>
      <YouTube :href="meal.strYoutube">Watch on YouTube</YouTube>
    </div>
</template>

<script setup>
import {onMounted, ref} from 'vue'
  import {useRoute} from "vue-router";
import axiosClient from "../axiosClient.js";
import YouTube from "../components/YouTube.vue";

  const route = useRoute();
  const meal = ref({})

  onMounted(()=> {
    axiosClient.get(`lookup.php?i=${route.params.id}`)
        .then(({data}) =>{
          meal.value = data.meals[0] || {};
        })
  })
</script>