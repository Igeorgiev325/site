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

    First()
    Second()
    Third()

    return {
        
    }
  }
}
</script>