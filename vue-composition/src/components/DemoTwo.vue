<template>
  <h2>{{ firstName }} {{ lastName }}</h2>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  name: 'DemoTwo',
  setup() {
    const state = reactive({
      firstName: 'Bruce',
      lastName: 'Wayne',
    })

    setTimeout(() => {
      state.firstName = 'Clark'
      state.lastName = 'Kent'
      console.log(state)
    }, 2000)
    return toRefs(state)
  },
}
</script>

<style scoped>
</style>