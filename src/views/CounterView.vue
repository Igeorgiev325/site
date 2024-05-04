<template>
  <div class="container">
    <p> {{ store.count }} </p>
  </div>
  <div class="count">
    <button @click="store.increment">+</button>
    <button @click="store.decrement">-</button>
  </div>
</template>

<script lang="ts">
import { ref, watch } from 'vue'
import { useCounterStore } from '@/stores/counter'

export default {
  setup() {
    const store = useCounterStore()

    return {
      store
    }
  }
}

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
button {
  border: 0.3rem solid #41b883;
  border-radius: 3rem;
  padding: 1rem;
  color:#41b883
}
.red {
  color: red;
}
.blue {
  color: blue;
}
</style>