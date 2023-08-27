<template>
  <Meals :meals="meals"/>
</template>


<script setup>
import {computed, onMounted} from "vue";
import store from "../store/index.js";
import {useRoute} from "vue-router";
import MealItem from "../components/MealItem.vue";
import Meals from "../components/Meals.vue";

const route = useRoute();

const meals = computed(() => store.state.mealsByIngredient);

onMounted(()=>{
    store.dispatch('searchMealsByIngredient',route.params.ingrediant);
})

</script>