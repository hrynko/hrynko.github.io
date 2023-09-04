<template>
  <Layout>
    <PostCard
      v-for="edge in $page.posts.edges"
      :key="edge.node.id"
      :post="edge.node"
    />
  </Layout>
</template>

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

<page-query>
query {
  posts: allPost {
    edges {
      node {
        date (format: "MMM D, YYYY")
        dateRaw: date (format: "YYYY-MM-DD")
        description
        id
        path
        tags {
          id
          path
          title
        }
        timeToRead
        title
      }
    }
  }
}
</page-query>
