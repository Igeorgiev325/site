<template>
    <div class="container">
        <div>{{ cover }}</div>
        <div>{{ title }}</div>
        <div>{{ description }}</div>
    </div>
</template>

<script lang="ts">
export default {
    props: {
        title: {
            type: String,
            required: true,
            default: "Title"
        },
        description: {
            type: Object,
            required: false,
            default: new Date
        },
        cover: {
            type: String || undefined,
            required: false,
            default: "IMG Placeholder"
        },
        pages: {
            type: Number,
            required: false
        }
    }
}
</script>
