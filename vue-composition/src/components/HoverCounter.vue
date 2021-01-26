<template>
  <div>
    <h2 @mouseover="incrementCount">Hovered {{ count }} times</h2>
  </div>
</template>

<script>
import useCounter from '../composables/useCounter'

// import CounterMixin from '../mixins/counter'
export default {
  name: 'HoverCounter',
  setup() {
    const { count, incrementCount } = useCounter()
    return {
      count,
      incrementCount,
    }
  },
  // mixins: [CounterMixin],
}
</script>

<style scoped>
</style>