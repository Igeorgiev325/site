<template>
  <div>
    <TheChild :number="number" @add-number="addToArray"></TheChild>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import TheChild from '@/components/TheChild.vue'

export default {
  components: {
    TheChild
  },
  setup() {
    const number = ref<number>(0)
    const addToArray = (n: number) => number.value += n

    return {
      number,
      addToArray
    }
  }
}
</script>