<template>
  <Layout>
    <h1 class="tag-title"># {{ $page.tag.title }}</h1>

    <PostCard
      v-for="edge in $page.tag.belongsTo.edges"
      :key="edge.node.id"
      :post="edge.node"
    />
  </Layout>
</template>

<page-query>
query Tag ($id: ID!) {
  tag (id: $id) {
    title
    belongsTo {
      edges {
        node {
          ...on Post {
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
          }
        }
      }
    }
  }
}
</page-query>

<script>
import PostCard from '~/components/PostCard.vue'

export default {
  metaInfo() {
    return {
      title: `#${this.$page.tag.title}`,
    }
  },
  components: {
    PostCard,
  },
}
</script>

<style lang="scss">
.tag-title {
  margin: calc(var(--gap) - 1.5rem) 0 var(--gap);
  text-align: center;
}
</style>
