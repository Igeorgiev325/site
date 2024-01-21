<template>
    <div class="container">
        <div class="inner_container">
            <input class="input_field" type="text" v-model="inputText">
            <button class="button" @click="sendText">Submit</button>
            <button class="button" @click="del"><h2>X</h2></button>
        </div>
            <p class="text_field" v-show="someText">{{ someText }}</p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

let someText = ref([])
let inputText = ref('')
let transfer = ref('hello')

 defineProps({
    transfer: String
 })

const sendText = () => someText.value.push(inputText.value)
const del = () => someText.value = []
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
}
.inner_container {
    display: flex;
    flex-direction: row;
}
.button {
    background-color:blueviolet;
    padding: 0.5rem;
    margin: 0.5rem;
    border-radius: 1rem;
}
.input_field {
    background-color:whitesmoke;
    margin: 1rem;
}
.text_field {
    background-color:greenyellow;
    color:black;
    width: fit-content;
    margin: 1rem;
}

</style>