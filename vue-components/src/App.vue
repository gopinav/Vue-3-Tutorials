<template>
  <Greet :name="name" :hero-name="channel" />
  <Greet name="Bruce" hero-name="Batman" />
  <Greet name="Clark" hero-name="Superman" />
  <Greet name="Diana" hero-name="Wonder Woman" />

  <Article id="my-article" :likes="50" :isPublished="true" />
</template>

<script>
import Article from './components/Article.vue'
import Greet from './components/Greet.vue'

export default {
  name: 'App',
  components: {
    Greet,
    Article,
  },
  data() {
    return {
      name: 'Vishwas',
      channel: 'Codevolution',
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
