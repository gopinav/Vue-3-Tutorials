<template>
  <CreatePost />
  <PostList />

  <!-- Lifecycle Hooks -->
  <Parent />

  <!-- Template Refs -->
  <TemplateRef />

  <!-- mixinx -->
  <ClickCounter />
  <HoverCounter />
</template>

<script>
import CreatePost from './components/CreatePost'
import PostList from './components/PostList'
import Parent from './components/Parent.vue'
import TemplateRef from './components/TemplateRef.vue'
import ClickCounter from './components/ClickCounter.vue'
import HoverCounter from './components/HoverCounter.vue'
export default {
  name: 'App',
  components: {
    PostList,
    CreatePost,
    Parent,
    TemplateRef,
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
