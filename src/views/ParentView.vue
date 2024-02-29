<template>
    <div>
        <ChildView :number="number"></ChildView>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import ChildView from './ChildView.vue'

export default {
    components: {
        ChildView
    },
    setup() {
        const number = ref<number>(8)

        return {
            number
        }
    }
}
</script>