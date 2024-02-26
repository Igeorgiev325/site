<template>
  <div class="about">
    <h1>{{ text }}</h1>
    <p>{{ testRegex }}</p>
  </div>

    <div class="first">Hiii
      <div class="second">Hii
        <div class="third">Hi</div>
      </div>
    </div>
    <div class="fourth">H</div>
</template>

<script lang="ts">
import { ref } from 'vue'

const text = ref('This is an about page')
const someText = 'This is an about page'
const regex = /[is]+/

const testRegex = someText.match(regex)

</script>

<style scoped>
  .first {
    color:red;
    border: 1rem solid blue;
    width: 20%;
    background-color:bisque;
  }
  .second {
    color: green;
  }
</style>
