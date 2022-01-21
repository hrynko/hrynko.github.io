<template>
  <Layout>
    <ProjectCard>
      <template #title>Lorem ipsum dolor sit</template>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam tempora
        totam culpa sapiente vitae maiores odit est iusto fugiat eveniet.
      </p>
    </ProjectCard>
  </Layout>
</template>

<script>
import ProjectCard from '~/components/ProjectCard.vue'

export default {
  metaInfo: {
    title: 'Projects',
  },
  components: {
    ProjectCard,
  },
}
</script>
