<template>
  <div class="post-tags">
    <g-link v-for="tag in post.tags" :key="tag.id" :to="tag.path">
      <span>#</span> {{ tag.title }}
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
  margin: 1em 0 0;

  a {
    display: inline-block;
    margin: 2px 0.7em 2px 0;
    padding: 0.5em;
    border: 2px solid var(--color-border);
    border-radius: calc(var(--border-radius) / 2);
    font-family: 'Merriweather Sans', sans-serif;
    font-size: 0.8em;
    color: var(--color-text);
    text-decoration: none;

    &:hover {
      color: var(--color-link);
      opacity: 1;
    }
  }

  @media print {
    display: none;
  }
}
</style>
