<template>
<TheBook :title="bookTitle" :pages="88"></TheBook>
<TheBook :title="bookTitle"></TheBook>
</template>

<script lang="ts">
import TheBook from '@/components/TheBook.vue'

export default {
components: {
    TheBook
},
setup() {
    const bookTitle = <string>("Book 1")

    return {
        bookTitle
    }
}

}

</script>