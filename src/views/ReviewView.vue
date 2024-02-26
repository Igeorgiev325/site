<template>
    <div class="container">
        <div class="inner_container">
            <input class="input_field" type="text" v-model="inputText">
            <TheButton class="button" @click="sendText" title="Submit"></TheButton>
        </div>
        <div class="result_field">
            <p class="text_field" v-show="showText">{{ someText }}</p>
            <TheButton class="the_button" @click="del">
                <h2>X</h2>
            </TheButton>
        </div>
    </div>
</template>

<script lang="ts">
import { ref, watch } from 'vue'
import TheButton from '../components/TheButton.vue'

let someText = ref<string[]>([])
let inputText = ref()
let showText = ref<boolean>(true)

watch(someText.value, (newSomeText) => {
    console.log(newSomeText)
})

const sendText = () => {
    inputText.value ? someText.value.push(inputText.value) : ''
    inputText.value = ''
}
const del = () => someText.value.pop()
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
.result_field {
    display:flex;
    flex-direction:column;
}
.the_button {
    width:fit-content
}

</style>