<script setup lang="ts">
import dist from '@/data/district.json'
</script>

<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">
          Name
        </th>
        <th class="text-left">
          District
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in dist"
        :key="item.name"
        >
        <td>{{ item.name }}</td>
        <td>{{ item.item }}</td>
      </tr>
    </tbody>
  </v-table>
</template>