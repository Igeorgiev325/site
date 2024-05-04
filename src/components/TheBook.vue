<template>
  <div class="container">
    <h2>{{ title }}</h2>
    <div>{{ cover }}</div>
    <div>{{ description }}</div>
    <div>{{ date }}</div>
    <div>Pages: {{ pages }}</div>
  </div>
</template>

<script lang="ts">

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    cover: {
      type: String || undefined,
      required: false,
      default: "IMG Placeholder"
    },
    description: {
      type: String,
      required: false,
      default: "..."
    },
    date: {
      type: Date,
      required: false,
      default: new Date
    },
    pages: {
      type: Number,
      required: false,
      default: 0
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  border: 0.3rem solid red;
  border-radius: 1rem;
  margin: 1rem;
  padding: 1rem;
}
</style>
