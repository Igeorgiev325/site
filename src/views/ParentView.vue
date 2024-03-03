<template>
    <div>
        <TheChild :number="number" @add-number="addToArray()"></TheChild>
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
        const number = ref<number>(1)
        const secondNumber = ref<number>(1)

        const addToArray = () => number.value++
        return {
            number,
            secondNumber,
            addToArray
        }
    }
}
</script>