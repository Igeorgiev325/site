<template>
    <v-expansion-panels variant="accordion">
        <v-expansion-panel
        :title="title"
        :text="text"
        ></v-expansion-panel>
    </v-expansion-panels>
</template>

<script lang="ts">
export default {
    props: {
        title: {
            type: String,
            required: false
        },
        text: {
            type: String,
            required: false
        }

    }
}
</script>


