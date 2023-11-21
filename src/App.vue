<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TheHeader from '@/components/TheHeader.vue'
</script>

<template>
  <header>
    <TheHeader></TheHeader>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
