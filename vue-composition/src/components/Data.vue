<template>
  <h2>Options - {{ o_name }}</h2>
  <h2>Composition - {{ c_name }}</h2>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'Data',
  setup() {
    const c_name = ref('Codevolution')
    setTimeout(() => {
      c_name.value = 'Updated Codevolution'
    }, 2000)
    return {
      c_name,
    }
  },
  data() {
    return {
      o_name: 'Vishwas',
    }
  },
}
</script>

<style scoped>
</style>