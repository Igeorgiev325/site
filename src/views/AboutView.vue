<template>
  <home-view v-for="item in items" :events="items"></home-view>
</template>

<script lang="ts">
import { ref } from 'vue'
import HomeView from './HomeView.vue';


export default {
  components: {
    HomeView
  },
  setup() {
    const items = ref<any>([true, false, false, false])

    return {
      items
    }
  }
}
</script>

<style scoped>

</style>
