<template>
    <div>{{ numbers }}</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import random from '../data/random.json'

const numbers = ref<number[]>([])

numbers.value = random.filter((ran => ran > 500)).sort((a, b) => b - a)

</script>