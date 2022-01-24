<template>
  <div class="sidebar-controls">
    <ThemeToggle />

    <a
      aria-label="GitHub"
      href="https://github.com/hrynko"
      target="_blank"
      rel="nofollow noopener noreferrer"
    >
      <IconGitHub width="24" height="24" />
    </a>

    <a
      aria-label="LinkedIn"
      href="https://linkedin.com/in/aliaksei-hrynko/"
      target="_blank"
      rel="nofollow noopener noreferrer"
    >
      <IconLinkedIn width="24" height="24" />
    </a>
  </div>
</template>

<script>
import IconGitHub from './icons/GitHubIcon.vue'
import IconLinkedIn from './icons/LinkedInIcon.vue'
import ThemeToggle from './ThemeToggle.vue'

export default {
  components: {
    IconGitHub,
    IconLinkedIn,
    ThemeToggle,
  },
}
</script>

<style lang="scss">
.sidebar-controls {
  & > * {
    &:not(:last-child) {
      margin-right: 4px;
    }
  }
}
</style>
