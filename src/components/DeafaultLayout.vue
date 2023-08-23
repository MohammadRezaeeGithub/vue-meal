<template>
  <div class="bg-gray-100 h-full">
    <nav-bar/>
    <main class="h-full">
      <router-view/>
    </main>
  </div>
</template>
<script setup>
import NavBar from "./NavBar.vue";
</script>