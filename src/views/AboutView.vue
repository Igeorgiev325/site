<template>
  <div class="about">
    <h1>{{ text }}</h1>
    <p>{{ testRegex }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const text = ref('This is an about page')
const someText = 'This is an about page'
const regex = /[is]+/

const testRegex = someText.match(regex)

</script>

<style scoped>

</style>
