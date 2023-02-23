<template>
  <section class="post-card content-box">
    <div v-if="post.cover_image" class="post-card__cover">
      <g-image :alt="post.title + ' (cover image)'" :src="post.cover_image" />
    </div>

    <h2 class="post-card__title">
      <g-link :to="post.path">{{ post.title }}</g-link>
    </h2>

    <PostMeta class="post-card__meta" :post="post" />

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

  &__cover {
    margin-left: calc(var(--gap) * -1);
    margin-right: calc(var(--gap) * -1);
    margin-bottom: calc(var(--gap) / 2);
    margin-top: calc(var(--gap) * -1);
    border-radius: var(--border-radius) var(--border-radius) 0 0;
    overflow: hidden;

    &:empty {
      display: none;
    }

    img {
      min-width: 100%;
    }
  }

  &__title {
    margin: 0;
  }

  &__meta {
    margin: 0.5rem 0 1rem;
  }

  @media print {
    &__cover {
      margin: 0 0 1rem;
      border-radius: 0;
    }
  }
}
</style>
