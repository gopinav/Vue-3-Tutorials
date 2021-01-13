<template>
  <div>Child component</div>
</template>

<script>
export default {
  name: 'Child',
  beforeCreate() {
    console.log('Child beforeCreate()')
  },
  created() {
    console.log('Child created()')
  },
  beforeMount() {
    console.log('Child beforeMount()')
  },
  mounted() {
    console.log('Child mounted()')
  },
  beforeUpdate() {
    console.log('Child beforeUpdate()')
  },
  updated() {
    console.log('Child updated()')
  },
  beforeUnmount() {
    console.log('Child beforeUnmount()')
  },
  unmounted() {
    console.log('Child unmounted()')
  },
}
</script>

<style scoped>
</style>