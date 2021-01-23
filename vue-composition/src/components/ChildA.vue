<template>
  <h2>Child Component A</h2>
  <ChildB />
</template>

<script>
import ChildB from './ChildB'
export default {
  name: 'ChildA',
  components: {
    ChildB,
  },
}
</script>

<style scoped>
</style>