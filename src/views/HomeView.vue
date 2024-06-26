<template>
  <div :class="['class-name', events ? 'class-active' : 'class-active__inactive']">
    <p class="class-name__el">A</p>
  </div>
</template>

<script lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import type { PropType } from 'vue'

interface Book {
  name: string
  isTrue: boolean
}

export default {
  props: {
    events: {
      type: Boolean,
      required: false
    }
  },
  setup(props) {

      console.log(props.events)

    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
.class-name {
  padding: 30px;

  &__el {
    border: 3px solid red;
    background-color: white;
    color: black;
    margin: 10px 0;
  }
}
.class-active {
  background-color: lightgray;

  &__inactive {
    background-color: darkseagreen;
  }
}
</style>