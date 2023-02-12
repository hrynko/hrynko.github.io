<template>
  <g-link :to="post.path" class="post-card content-box">
    <div class="post-card__cover">
      <g-image
        v-if="post.cover_image"
        :alt="post.title + ' (cover image)'"
        :src="post.cover_image"
      />
    </div>

    <h2 class="post-card__title" v-html="post.title" />

    <PostMeta class="post-card__meta" :post="post" />

    <p v-html="post.description" />

    <PostTags :post="post" />

    <IconArrowRight class="post-card__arrow" width="1.5em" height="1.5em" />
  </g-link>
</template>

<script>
import PostMeta from './PostMeta.vue'
import PostTags from './PostTags.vue'
import IconArrowRight from './icons/ArrowRightIcon.vue'

export default {
  components: {
    IconArrowRight,
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
  $self: &;
  position: relative;
  display: block;
  color: var(--color-text);
  text-decoration: none;

  &:hover {
    opacity: 1;

    #{$self}__arrow {
      color: var(--color-link);
    }
  }

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

  &__arrow {
    position: absolute;
    right: var(--gap);
    bottom: var(--gap);
    margin: 0.25em !important;
    opacity: 0.8;
  }

  .post-tags {
    margin-right: 2rem;
  }

  @media print {
    &__cover {
      margin: 0 0 1rem;
      border-radius: 0;
    }

    &__arrow {
      opacity: 0;
    }
  }
}
</style>
