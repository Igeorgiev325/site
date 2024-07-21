<template>
  <main>
    <input type="text" v-model="inputText" @keyup.enter="handleClick">
    <input type="button" value="Button" @click="handleClick">
  </main>
    <div class="text">
      <p v-show="isInvalid">Invalid Text</p>
      <div class="items">
        <p v-for="item in resultArray" class="item">{{ item }}</p>
      </div>
    </div>
</template>

<script lang="ts">
import { ref, computed } from 'vue'

export default {
  setup() {
    const inputText = ref<string>()
    const toDoArray = ref<string[]>([])
    const isInvalid = ref<boolean>(false)

    const handleClick = () => {
      if (inputText.value) {
        toDoArray.value.push((inputText.value as string))
        inputText.value = undefined
        isInvalid.value = false
      } else {
        isInvalid.value = true
      }

    }

    const resultArray = computed(() => toDoArray.value)

    return {
      inputText,
      resultArray,
      handleClick,
      isInvalid  
    }
  }
}
</script>

<style>
main {
  display: flex;
  align-items: center;
  margin: 2rem;
}
input[type=button] {
  background-color: #41b883;
  margin-left: 2rem;
  padding: 1rem;
  color: black;
  font-weight: bold;
  border-radius: 15px;
}
input[type=text] {
  background-color: white;
}
.text {
  margin: 2rem;
}
.items {
  display: flex;
  flex-direction: column;
  color: black;
}
.item {
  background-color: bisque;
  margin-bottom: 1rem;
}
</style>