<template>
  <a class="px-6 py-2 rounded-lg hover:bg-blue-200 hover:text-white transition-all border border-gray-200 mr-2"
     :href="href">
    <slot></slot>
  </a>
</template>


<script setup>
const props = defineProps({
  href : String
})
</script>