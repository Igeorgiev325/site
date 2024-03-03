<template>
    <div class="container">
        <h2>{{ title }}</h2>
        <img :src="cover">
        <div>{{ description }}</div>
        <div>{{ date }}</div>
        <div>{{ pages }}</div>
    </div>
</template>

<script lang="ts">

let defaultImg 

export default {
    props: {
        title: {
            type: String,
            required: false,
            default: "Title"
        },
        cover: {
            type: String || undefined,
            required: false,
            default: "IMG Placeholder"
        },
        description: {
            type: String,
            required: false,
            default: "..."
        },
        date: {
            type: Date,
            required: false,
            default: new Date
        },
        pages: {
            type: Number,
            required: false
        }
    }
}
</script>
