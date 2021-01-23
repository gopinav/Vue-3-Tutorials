<template>
  <h2>Child Component B</h2>
  <ChildC />
</template>

<script>
import ChildC from './ChildC'
export default {
  name: 'ChildB',
  components: {
    ChildC,
  },
}
</script>

<style scoped>
</style>