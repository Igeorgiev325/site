<template>
    <div>
        <ChildView :number="number" @add-number="addToArray()"></ChildView>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import ChildView from '@/components/TheChild.vue'

export default {
    components: {
        ChildView
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