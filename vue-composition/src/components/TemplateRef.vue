<template>
  <div>
    <input type="text" ref="inputRef" />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
export default {
  name: 'TemplateRef',
  setup() {
    const inputRef = ref(null)

    onMounted(() => {
      inputRef.value.focus()
    })

    return {
      inputRef,
    }
  },
  //   mounted() {
  //     this.$refs.inputRef.focus()
  //   },
}
</script>

<style scoped>
</style>