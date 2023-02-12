<template>
  <Layout>
    <ProjectCard>
      <template #title>vue-pdf-embed</template>

      <p>
        PDF embedding component for Vue. It was designed to solve certain
        problems of the existing PDF libraries for Vue, as well as to provide
        support for Vue 3 (while remaining compatible with Vue 2). This library
        was later mentioned in the Awesome Vue list.
      </p>

      <p>Tech stack: JavaScript, Vue, PDF.js, Jest, Webpack</p>

      <template #meta>
        <a
          href="https://github.com/hrynko/vue-pdf-embed"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <IconGitHub width="2em" height="2em" />
        </a>

        <a
          href="https://npmjs.com/package/vue-pdf-embed"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <IconNpmWide width="4em" height="2em" />
        </a>
      </template>
    </ProjectCard>
  </Layout>
</template>

<script>
import IconGitHub from '~/components/icons/GitHubIcon.vue'
import IconNpmWide from '~/components/icons/NpmWideIcon.vue'
import ProjectCard from '~/components/ProjectCard.vue'

export default {
  metaInfo: {
    title: 'Projects',
  },
  components: {
    IconGitHub,
    IconNpmWide,
    ProjectCard,
  },
}
</script>

<style lang="scss" scoped>
a + a {
  margin-left: 8px;
}
</style>
