<template>
  <CreatePost />
  <PostList />

  <!-- Lifecycle Hooks -->
  <Parent />
</template>

<script>
import CreatePost from './components/CreatePost'
import Parent from './components/Parent.vue'
import PostList from './components/PostList'
export default {
  name: 'App',
  components: {
    PostList,
    CreatePost,
    Parent,
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
