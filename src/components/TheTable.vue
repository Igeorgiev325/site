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
      <tr v-for="item in dist" :key="item.name">
        <td>{{ item.name }}</td>
        <td>{{ item.item?.join(', ') }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script lang="ts">
import dist from '@/data/district.json'

export default {
  setup() {
    
    return {
      dist
    }
  }
}
</script>

<style scoped>
.table {
  background-color: rgb(123, 83, 83);
}
</style>