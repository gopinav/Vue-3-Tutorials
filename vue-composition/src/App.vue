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
  <TemplateRef />
  <Person />
  <ClickCounter />
  <HoverCounter />
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
import TemplateRef from './components/TemplateRef.vue'
import Person from './components/Person.vue'
import ClickCounter from './components/ClickCounter.vue'
import HoverCounter from './components/HoverCounter.vue'

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
    TemplateRef,
    Person,
    ClickCounter,
    HoverCounter,
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
