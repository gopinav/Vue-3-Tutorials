<template>
  <div>
    <h2>{{ title }}</h2>
    <h2>Likes - {{ likes }}</h2>
    <h2>Published - {{ isPublished ? 'Yes' : 'No' }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Article',
  props: {
    title: String,
    likes: Number,
    isPublished: Boolean,
  },
}
</script>

<style scoped>
</style>