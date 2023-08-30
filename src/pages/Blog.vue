<template>
  <Layout>
    <PostCard
      v-for="edge in $page.posts.edges"
      :key="edge.node.id"
      :post="edge.node"
    />
  </Layout>
</template>

<page-query>
query {
  posts: allPost {
    edges {
      node {
        id
        title
        path
        date (format: "MMM D, YYYY")
        timeToRead
        tags {
          id
          title
          path
        }
        description
      }
    }
  }
}
</page-query>

<script>
import PostCard from '~/components/PostCard.vue'

export default {
  metaInfo: {
    title: 'Blog',
  },
  components: {
    PostCard,
  },
}
</script>
