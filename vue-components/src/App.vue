<template>
  <!-- Props -->
  <Greet :name="name" :hero-name="channel" />
  <Greet name="Bruce" hero-name="Batman" />
  <Greet name="Clark" hero-name="Superman" />
  <Greet name="Diana" hero-name="Wonder Woman" />

  <Article id="my-article" :likes="50" :isPublished="true" />

  <!-- Provide/ Inject -->
  <h3>App component {{ name }}</h3>
  <ComponentC />

  <!-- Events -->
  <button @click="showPopup = true">Show Popup</button>
  <Popup v-show="showPopup" @close="showPopup = false" />
</template>

<script>
import Article from './components/Article.vue'
import Greet from './components/Greet.vue'
import ComponentC from './components/ComponentC.vue'
import Popup from './components/Popup.vue'

export default {
  name: 'App',
  components: {
    Greet,
    Article,
    ComponentC,
    Popup,
  },
  data() {
    return {
      name: 'Vishwas',
      channel: 'Codevolution',
      showPopup: false,
    }
  },
  provide() {
    return {
      userName: this.name,
    }
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
