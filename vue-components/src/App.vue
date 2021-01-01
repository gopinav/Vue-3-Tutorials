<template>
  <Greet :name="name" :hero-name="channel" />
  <Greet name="Bruce" hero-name="Batman" />
  <Greet name="Clark" hero-name="Superman" />
  <Greet name="Diana" hero-name="Wonder Woman" />

  <Article id="my-article" :likes="50" :isPublished="true" />
  <h3>App component {{ name }}</h3>
  <ComponentC />
</template>

<script>
import Article from './components/Article.vue'
import Greet from './components/Greet.vue'
import ComponentC from './components/ComponentC.vue'

export default {
  name: 'App',
  components: {
    Greet,
    Article,
    ComponentC,
  },
  data() {
    return {
      name: 'Vishwas',
      channel: 'Codevolution',
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
