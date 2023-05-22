<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
import AppHeader from "@/components/AppHeader.vue";
</script>

<template>
  <AppHeader/>
  <RouterView/>

  <footer>Footer</footer>
</template>

<style scoped>

</style>
