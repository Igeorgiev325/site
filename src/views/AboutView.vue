<template>
<div>
  {{ getProfile() }}
</div>
<div>
  {{ human }}
</div>
</template>

<script lang="ts">
import { useLocation } from '@/composables/useLocation'
import { ref } from 'vue'
import type Person from '@/types/Person'

export default {
  setup() {

    const halle = ref<string>("D3")
    const booth = ref<string>("77")
    const { getLocation } = useLocation(halle.value, booth.value)

    console.log("About", getLocation())

    const name = ref("Proful")

    const getProfile = () => name.value
    
    const setProfile = (newName: string) => {
      name.value = newName
    }
   
    setProfile("New")

    const human = ref<Person>({
      name: 'John',
      age: 20
    })
    
    return {
      getProfile,
      setProfile,
      human
    }
  }
}
</script>

<style scoped>

</style>@/interface/Person@/types/Person
