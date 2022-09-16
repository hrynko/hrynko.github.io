<template>
  <button
    type="button"
    aria-label="Toggle dark/light theme"
    class="theme-toggle"
    @click.prevent="handleToggle"
  >
    <IconSun v-if="isDarkTheme" title="Light theme" width="24" height="24" />

    <IconMoon v-else title="Dark theme" width="24" height="24" />
  </button>
</template>

<script>
import IconMoon from './icons/MoonIcon.vue'
import IconSun from './icons/SunIcon.vue'

export default {
  components: {
    IconMoon,
    IconSun,
  },
  data() {
    return {
      isDarkTheme: false,
    }
  },
  mounted() {
    const themeMediaQuery = window.matchMedia?.('(prefers-color-scheme: dark)')

    if (document.documentElement.getAttribute('data-theme') === 'dark') {
      this.isDarkTheme = true
    } else if (themeMediaQuery?.matches) {
      this.handleToggle()
    }

    themeMediaQuery?.addEventListener('change', this.handleToggle)
  },
  methods: {
    handleToggle() {
      this.isDarkTheme = !this.isDarkTheme

      document.documentElement.setAttribute(
        'data-theme',
        this.isDarkTheme ? 'dark' : 'light'
      )
    },
  },
}
</script>

<style lang="scss">
.theme-toggle {
  padding: 0;
  border: none;
  background-color: transparent;
  color: var(--color-text);
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
}
</style>
