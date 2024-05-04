<template>

</template>

<script>
export default {
  setup() {
    const First = () => {
      console.log("First")
    }
    const Second = () => {
      console.log("Second")
    }
    const Third = () => {
      console.log("Third")
    }

    setTimeout(() => First(), 3000)
    setTimeout(() => Second(), 2000)
    setTimeout(() => Third(), 1000)

    return {
        
    }
  }
}
</script>