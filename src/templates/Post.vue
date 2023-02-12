<template>
  <Layout>
    <g-link to="/blog/" class="post__back-link">
      <IconArrowLeft />
      Back to the list of posts
    </g-link>

    <article class="post content-box">
      <div class="post__header">
        <g-image
          v-if="$page.post.cover_image"
          :alt="$page.post.title + ' (cover image)'"
          :src="$page.post.cover_image"
        />
      </div>

      <h1>{{ $page.post.title }}</h1>

      <PostMeta :post="$page.post" />

      <div class="post__content" v-html="$page.post.content" />

      <PostTags :post="$page.post" />
    </article>
  </Layout>
</template>

<script>
import IconArrowLeft from '~/components/icons/ArrowLeftIcon'
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'

export default {
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: 'description',
          content: this.$page.post.description,
        },
      ],
    }
  },
  components: {
    IconArrowLeft,
    PostMeta,
    PostTags,
  },
}
</script>

<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    title
    path
    date (format: "MMM D, YYYY")
    timeToRead
    tags {
      id
      title
      path
    }
    # cover_image (width: 800, blur: 10)
    description
    content
  }
}
</page-query>

<style lang="scss">
.post {
  &__header {
    margin-top: calc(var(--gap) * -1);
    margin-bottom: calc(var(--gap) / 2);
    margin-left: calc(var(--gap) * -1);
    width: calc(100% + var(--gap) * 2);
    border-radius: var(--border-radius) var(--border-radius) 0 0;
    overflow: hidden;

    &:empty {
      display: none;
    }

    img {
      width: 100%;
    }
  }

  &__content {
    h2:first-child {
      margin-top: 0;
    }

    p:first-child {
      font-size: 1.2em;
      color: var(--color-title);
    }

    img {
      display: block;
      margin-left: calc(var(--gap) * -1);
      width: calc(100% + var(--gap) * 2);
      max-width: none;
    }
  }

  &__back-link {
    display: block;
    margin-right: var(--gap);
    margin-bottom: 1.5rem;
    margin-left: var(--gap);
    font-family: 'Merriweather Sans', sans-serif;
    text-decoration: none;
  }

  .post-meta {
    margin-bottom: 1.5rem;
  }

  @media print {
    &__back-link {
      display: none;
    }
  }
}
</style>
