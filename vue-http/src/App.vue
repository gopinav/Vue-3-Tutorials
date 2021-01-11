<template>
  <CreatePost />
  <PostList />
</template>

<script>
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
export default {
  name: "App",
  components: {
    PostList,
    CreatePost,
  },
};
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
