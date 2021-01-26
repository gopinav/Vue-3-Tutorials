<template>
  <div>
    <button @click="incrementCount">Clicked {{ count }} times</button>
  </div>
</template>

<script>
import useCounter from '../composables/useCounter'
// import CounterMixin from '../mixins/counter'
export default {
  name: 'ClickCounter',
  setup() {
    const { count, incrementCount } = useCounter(100, 10)
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