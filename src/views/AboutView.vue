<template>
<div>
  {{ getProfile() }}
</div>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  setup() {
    const name = ref("Proful")

    const getProfile = () => name.value
    
    const setProfile = (newName: string) => {
      name.value = newName
    }
   
    setProfile("New")
    
    return {
      getProfile,
      setProfile
    }
  }
}
</script>

<style scoped>

</style>
