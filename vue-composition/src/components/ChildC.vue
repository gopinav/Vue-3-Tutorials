<template>
  <h2>Child Component C</h2>
  <h3>Child Component C username - {{ userName }}</h3>
  <h3>Child Component C composition username - {{ childUserName }}</h3>
  <h3>Child Component C count - {{ childCount }}</h3>
  <h3>Child Component C hero - {{ firstName }} {{ lastName }}</h3>
  <button @click="incrementCount">Increment count from child</button>
</template>

<script>
import { inject, toRefs } from 'vue'
export default {
  name: 'ChildC',
  setup() {
    const childUserName = inject('c_userName', 'Default username')
    const childCount = inject('c_count', 0)
    const childHero = inject('c_hero', {})
    const incrementCount = inject('incrementCount')

    return {
      childUserName,
      childCount,
      ...toRefs(childHero),
      incrementCount,
    }
  },
  inject: ['userName'],
}
</script>

<style scoped>
</style>