<template>
    <div class="container">
        <div>{{ img }}</div>
        <div>{{ title }}</div>
        <div>{{ hour }}</div>
    </div>
</template>

<script lang="ts">
export default {
    props: {
        title: {
            type: String,
            required: false,
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
    }
}
</script>
