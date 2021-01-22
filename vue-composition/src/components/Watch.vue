<template>
  <div>
    <!-- Options API -->
    <input type="text" placeholder="Name" v-model="name" />

    <!-- ref -->
    <input type="text" placeholder="First Name" v-model="firstName" />
    <input type="text" placeholder="Last Name" v-model="lastName" />

    <!-- reactive -->
    <input type="text" placeholder="First Name" v-model="fName" />
    <input type="text" placeholder="Last Name" v-model="lName" />
    <input type="text" placeholder="Hero Name" v-model="options.heroName" />
  </div>
</template>

<script>
import { ref, reactive, toRefs, watch } from 'vue'
import _ from 'lodash'

export default {
  name: 'Watch',
  setup() {
    const firstName = ref('')
    const lastName = ref('')

    const state = reactive({
      fName: '',
      lName: '',
      options: {
        heroName: '',
      },
    })

    watch(
      [firstName, lastName],
      function (newValues, oldValues) {
        console.log('FirstName Old value ', oldValues[0])
        console.log('FirstName New value ', newValues[0])

        console.log('LastName Old value ', oldValues[1])
        console.log('LastName New value ', newValues[1])
      },
      {
        immediate: true,
      }
    )

    watch(
      () => {
        return { ...state }
      },
      (newValue, oldValue) => {
        console.log('fname Old value ', oldValue.fName)
        console.log('fname New value ', newValue.fName)

        console.log('lName Old value ', oldValue.lName)
        console.log('lName New value ', newValue.lName)
      }
    )

    watch(
      () => state.fName,
      (newValue, oldValue) => {
        console.log('fname Old value ', oldValue)
        console.log('fname New value ', newValue)
      }
    )

    watch(
      () => _.cloneDeep(state.options),
      (newValue, oldValue) => {
        console.log('fname Old value ', oldValue.heroName)
        console.log('fname New value ', newValue.heroName)
      },
      {
        deep: true,
      }
    )

    return {
      firstName,
      lastName,
      ...toRefs(state),
    }
  },
  data() {
    return {
      name: '',
    }
  },
  watch: {
    name(newValue, oldValue) {
      console.log('Old value ', oldValue)
      console.log('New value ', newValue)
    },
  },
}
</script>

<style scoped>
</style>