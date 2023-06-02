<template>
  <div class="post-meta">
    Posted on {{ post.date }}
    <template v-if="post.timeToRead">
      • {{ post.timeToRead }} min read
    </template>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.post-meta {
  margin-bottom: 1.25rem;
  font-family: 'Merriweather Sans', sans-serif;
  font-size: 0.8em;
  opacity: 0.8;
}
</style>
