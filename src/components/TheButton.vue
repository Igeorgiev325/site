<template>
  <button class="button">{{ title }}</button>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      default: "Button"
    }
  }
}
</script>

<style>
.button {
  background-color:blueviolet;
  padding: 0.5rem;
  margin: 0.5rem;
  border-radius: 1rem;
}
</style>