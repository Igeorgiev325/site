<template>
  <h2>{{ number }}</h2>
  <TheButton @click="$emit('addNumber', 8)"></TheButton>
</template>

<script lang="ts">
import { ref, watch } from 'vue'
import TheButton from './TheButton.vue';

export default {
  components: {
    TheButton
  },
  props: {
    number: {
      type: Number,
      required: false
    },
  },
  emits: ['addNumber'],
  setup(props, { emit }) {
    // emit('addNumber', 2)
    console.log("Props initial: ", props.number)
    watch(props, (newNumber) => {
      console.log("Props updated: ", newNumber.number)
    })

    return {
    }
  }
}
</script>