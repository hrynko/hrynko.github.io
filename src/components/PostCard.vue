<template>
  <section class="post-card content-box">
    <h2 class="post-card__title">
      <g-link :to="post.path">{{ post.title }}</g-link>
    </h2>

    <PostMeta :post="post" />

    <p v-html="post.description" />

    <PostTags :post="post" />
  </section>
</template>

<script>
import PostMeta from './PostMeta.vue'
import PostTags from './PostTags.vue'

export default {
  components: {
    PostMeta,
    PostTags,
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.post-card {
  position: relative;
  display: block;
  color: var(--color-text);
  text-decoration: none;

  & + & {
    margin-top: 1.5rem;
  }

  &__title {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
}
</style>
