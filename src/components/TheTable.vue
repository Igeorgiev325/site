<script setup lang="ts">
import dist from '@/data/district.json'
</script>

<template>
  <v-table class="table">
    <!-- <thead>
      <tr>
        <th class="text-left">
          Name
        </th>
        <th class="text-left">
          District
        </th>
      </tr>
    </thead> -->
    <tbody>
      <tr
        v-for="item in dist"
        :key="item.name"
        >
        <td>{{ item.name }}</td>
        <td>{{ item.item?.join(', ') }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<style scoped>
.table {
  background-color: rgb(123, 83, 83);
}
</style>