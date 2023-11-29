<template>
    <div class="container">
        <p> {{ store.count }} </p>
    </div>
    <div class="count">
        <button @click="store.increment">+</button>
        <button @click="store.decrement">-</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()

</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    font-size: 6rem;
}

.count {
    display: flex;
    justify-content: space-evenly;
    font-size: 3rem;
    width: 50%;
    margin: auto;
}
</style>