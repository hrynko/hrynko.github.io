<template>
  <Layout>
    <article class="post content-box">
      <h1 class="post__title">{{ $page.post.title }}</h1>

      <PostMeta :post="$page.post" />

      <div class="post__content" v-html="$page.post.content" />

      <PostTags :post="$page.post" />
    </article>
  </Layout>
</template>

<script>
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
    dateRaw: date (format: "YYYY-MM-DD")
    timeToRead
    tags {
      id
      title
      path
    }
    description
    content
  }
}
</page-query>

<style lang="scss">
.post {
  &__title {
    margin-bottom: 0.5rem;
  }

  &__content {
    h2:first-child {
      margin-top: 0;
    }

    p:first-child {
      font-size: 1.125em;
      color: var(--color-title);
    }

    img {
      display: block;
      margin-left: calc(var(--gap) * -1);
      width: calc(100% + var(--gap) * 2);
      max-width: none;
    }
  }
}
</style>
