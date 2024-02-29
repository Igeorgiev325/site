<template>
    <div>{{ numbers }}</div>
    <div>{{ even }}</div>
    <div>{{ arr }}</div>
    <div>{{ masiv }}</div>
    <div>{{ rest }}</div>
</template>

<script lang="ts">
import { ref } from 'vue'
import random from '../data/random.json'

export default {
    setup() {
        const numbers = ref<number[] | string>()
        const even = ref<string>()
        let arr = ref<string[]>(['filter', 'sort', 'map', 'slice', 'splice', 'reduce'])
        
        numbers.value = random.filter((ran => ran > 500)).sort((a, b) => b - a).join(', ')
        even.value = random.filter((val => val % 2 === 0)).sort((a, b) => a - b).join(', ')
        
        const masiv = arr.value.map(varr => varr + "&").toString().replace(/,/g, " ")
        
        const iterator = ['filter', 'sort', 'map', 'slice', 'splice', 'reduce']
        
        const [first, second, , ...rest] = iterator
        console.log("first: ", first)
        console.log("second: ", second)
        console.log("rest: ", rest)

        return {
            numbers,
            even,
            arr,
            masiv,
            rest
        }
    }
}

</script>