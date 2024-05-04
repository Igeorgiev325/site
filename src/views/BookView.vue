<template>
  <TheBook :title="bookTitle" :pages="88" :description="describe"></TheBook>
  <TheBook :title="bookTitle"></TheBook>
</template>

<script lang="ts">
import { ref } from 'vue'
import TheBook from '@/components/TheBook.vue'
import bookDescription from '@/data/bookDescriptions.json'

export default {
  components: {
    TheBook
  },
  setup() {
    const bookTitle = <string>("Book 1")
    const describe = ref<string>(bookDescription.description)

    return {
      bookTitle,
      describe
    }
  }
}

</script>