<template>
    <div class="container">
        <div>{{ img }}</div>
        <div>{{ title }}</div>
        <div>{{ hour }}</div>
    </div>
</template>
<script lang="ts">
defineProps({
    title: {
        type: String,
        default: "Title"
    },
    hour: {
        type: Object,
        required: true,
        default: new Date
    },
    img: {
        type: String || undefined,
        default: "IMG Placeholder"
    }
})
</script>
