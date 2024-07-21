<template>
  <div class="container">
    <p :class="{ 'text': isTrue }">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea cupiditate iusto illo nesciunt,
      magnam sint exercitationem! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Facilis, reiciendis. Deserunt enim eos ab autem.
    </p>
  </div>
  <input v-if="showButton" type="button" :value="isTrue ? 'Show more' : 'Show less'" @click="hide()">
</template>

<script lang="ts">
import { ref, onMounted } from 'vue'

export default {
  setup() {
    const isTrue = ref(true)
    const showButton = ref(false)

    onMounted(() => {
      const getElement = document.querySelector('p')
      getElement?.textContent?.length < 120 ? showButton.value = false : showButton.value = true
    })

    const hide = () => isTrue.value = !isTrue.value

    return {
      hide,
      isTrue,
      showButton
    }
  }
}

</script>

<style scoped>
.container {
  margin: 3rem;
  width: 200px;
}
.text {
  height: 100px;
  overflow: hidden;
}
input {
  background-color: darkred;
  padding: 1rem;
  margin-left: 3rem;
}
</style>