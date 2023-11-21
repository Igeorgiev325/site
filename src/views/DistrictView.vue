<script setup lang="ts">
import district from '@/data/district.json'
import TheAccordion from '@/components/TheAccordion.vue'
</script>

<template>
    <h3>Varna Districts</h3>
    <TheAccordion
        v-for="dist in district" 
        :title="dist.name"
        :item="dist.item"
    ></TheAccordion>
</template>