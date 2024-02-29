<template>
  <header>
    <TheHeader></TheHeader>
  </header>

  <RouterView />
</template>

<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TheHeader from '@/components/TheHeader.vue'

export default {
  components: {
    TheHeader
  }
}
</script>


<style scoped>

</style>
