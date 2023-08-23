<template>
  <div class="flex flex-col p-8">
    <input type="text" class="rounded border-2 border-gray-200 w-full" placeholder="Search for meals...">


    <div class="flex justify-center gap-2 mt-4">
      <router-link :to="{name:'byLetter', params:{letter}}" v-for="letter of letters.split('')" key="letter">
        {{ letter }}
      </router-link>
    </div>

  </div>
</template>

<script setup>

import {computed, onMounted, ref} from "vue";
import store from "../store/index.js";
import axiosClient from "../axiosClient.js";

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const ingrediants = ref([]);

onMounted(async () => {
  const response = await axiosClient.get('/list.php?i=list');
})
</script>