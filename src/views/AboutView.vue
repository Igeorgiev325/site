<template>
<div>
  {{ getProfile() }}
</div>
</template>

<script lang="ts">
import { useLocation } from '@/composables/useLocation'
import { ref } from 'vue'

export default {
  setup() {

    const halle = ref<string>("C3")
    const booth = ref<string>("88")
    const { getLocation } = useLocation(halle.value, booth.value)

    console.log("About", getLocation())

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
