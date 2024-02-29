<template>
    <h2>{{ number }}</h2>
</template>

<script lang="ts">
    export default {
        props: {
            number: {
                type: Number,
                required: false
            }
        }
    }
</script>