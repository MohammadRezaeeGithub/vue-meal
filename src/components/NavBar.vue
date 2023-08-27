<template>
  <header class="bg-white shadow h-16 flex justify-between items-center px-24">
    <router-link :to="{name:'home'}">Home</router-link>
    <div class="h-full">
      <router-link :to="{name:'byName'}" class="px-2 h-full inline-flex items-center hover:bg-gray-100 transition-all">
        Search Meals
      </router-link>
      <router-link :to="{name:'byLetter'}" class="px-2 h-full inline-flex items-center hover:bg-gray-100 transition-all">
        Meals by Letter
      </router-link>
      <router-link :to="{name:'ingrediant'}" class="px-2 h-full inline-flex items-center hover:bg-gray-100 transition-all">
        Meals by Ingrediants
      </router-link>
    </div>
  </header>
</template>