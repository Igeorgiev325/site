<template>
    <h1> {{ store.count }} </h1>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()

</script>