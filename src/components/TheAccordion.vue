<script setup lang="ts">
const props = defineProps({
    title:String,
    text:String
})


</script>

<template>
    <v-expansion-panels variant="accordion">
        <v-expansion-panel
        :title="title"
        :text="text"
        ></v-expansion-panel>
    </v-expansion-panels>
</template>

