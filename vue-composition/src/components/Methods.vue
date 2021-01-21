<template>
  <!-- Options API -->
  <h2>{{ name }}</h2>
  <button @click="setName">Set Name</button>

  <!-- ref -->
  <h2>{{ count }}</h2>
  <button @click="incrementCount">Increment Count</button>

  <!-- reactive -->
  <h2>{{ first }} {{ last }}</h2>
  <button @click="changeHero">Change Hero</button>
</template>

<script>
import { ref, reactive, toRefs } from 'vue'
export default {
  name: 'Methods',
  setup() {
    const count = ref(0)
    function incrementCount() {
      count.value++
    }

    const state = reactive({
      first: 'Bruce',
      last: 'Wayne',
    })
    function changeHero() {
      state.first = 'Clark'
      state.last = 'Kent'
    }

    return {
      count,
      incrementCount,
      ...toRefs(state),
      changeHero,
    }
  },
  data() {
    return {
      name: 'Vishwas',
    }
  },
  methods: {
    setName() {
      this.name = 'Codevolution'
    },
  },
}
</script>

<style scoped>
</style>