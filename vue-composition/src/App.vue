<template>
  <Data />
  <DemoOne />
  <DemoTwo />
  <Methods />
  <VModel />
  <Computed />
  <Watch />
  <ProvideInject />
  <LifecycleO />
  <LifecycleC />
</template>

<script>
import Data from './components/Data.vue'
import DemoOne from './components/DemoOne.vue'
import DemoTwo from './components/DemoTwo.vue'
import Methods from './components/Methods.vue'
import VModel from './components/VModel.vue'
import Computed from './components/Computed.vue'
import Watch from './components/Watch.vue'
import ProvideInject from './components/ProvideInject.vue'
import LifecycleO from './components/LifecycleO.vue'
import LifecycleC from './components/LifecycleC.vue'

export default {
  name: 'App',
  components: {
    Data,
    DemoOne,
    DemoTwo,
    Methods,
    VModel,
    Computed,
    Watch,
    ProvideInject,
    LifecycleO,
    LifecycleC,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
