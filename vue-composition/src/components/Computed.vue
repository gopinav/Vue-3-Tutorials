<template>
  <div>
    <!-- Options API -->
    <input type="text" placeholder="First Name" v-model="fName" />
    <input type="text" placeholder="Last Name" v-model="lName" />
    <h2>Options Fullname is {{ fullName }}</h2>

    <!-- ref -->
    <input type="text" placeholder="First Name" v-model="refFirstName" />
    <input type="text" placeholder="Last Name" v-model="refLastName" />
    <h2>ref Fullname is {{ refFullName }}</h2>

    <!-- reactive -->
    <input type="text" placeholder="First Name" v-model="reactiveFirstName" />
    <input type="text" placeholder="Last Name" v-model="reactiveLastName" />
    <h2>reactive Fullname is {{ reactiveFullName }}</h2>
  </div>
</template>

<script>
import { ref, reactive, toRefs, computed } from 'vue'
export default {
  name: 'Computed',
  setup() {
    const refFirstName = ref('')
    const refLastName = ref('')

    const state = reactive({
      reactiveFirstName: '',
      reactiveLastName: '',
    })

    const refFullName = computed(function () {
      return `${refFirstName.value} ${refLastName.value}`
    })

    const reactiveFullName = computed(function () {
      return `${state.reactiveFirstName} ${state.reactiveLastName}`
    })

    return {
      refFirstName,
      refLastName,
      refFullName,
      ...toRefs(state),
      reactiveFullName,
    }
  },
  data() {
    return {
      fName: '',
      lName: '',
    }
  },
  computed: {
    fullName() {
      return `${this.fName} ${this.lName}`
    },
  },
}
</script>

<style scoped>
</style>