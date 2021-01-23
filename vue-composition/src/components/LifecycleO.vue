<template>
  <div>Options API Lifecycle Hooks</div>
</template>

<script>
export default {
  name: 'LifeCycleO',
  beforeCreate() {
    console.log('LifeCycleO beforeCreate()')
  },
  created() {
    console.log('LifeCycleO created()')
  },
  beforeMount() {
    console.log('LifeCycleO beforeMount()')
  },
  mounted() {
    console.log('LifeCycleO mounted()')
  },
  beforeUpdate() {
    console.log('LifeCycleO beforeUpdate()')
  },
  updated() {
    console.log('LifeCycleO updated()')
  },
  beforeUnmount() {
    console.log('LifeCycleO beforeUnmount()')
  },
  unmounted() {
    console.log('LifeCycleO unmounted()')
  },
}
</script>

<style scoped>
</style>