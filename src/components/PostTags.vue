<template>
  <div class="post-tags">
    <g-link v-for="tag in post.tags" :key="tag.id" :to="tag.path">
      #{{ tag.title }}
    </g-link>
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
.post-tags {
  a {
    display: inline-block;
    margin-right: 0.5rem;
    font-family: 'Merriweather Sans', sans-serif;
    font-size: 0.8em;
  }
}
</style>
