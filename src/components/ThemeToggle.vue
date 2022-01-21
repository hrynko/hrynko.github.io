<template>
  <button
    type="button"
    aria-label="Toggle dark/light theme"
    class="theme-toggle"
    @click.prevent="handleThemeToggle"
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
    if (window.__theme == 'dark') {
      this.isDarkTheme = true
    }
  },
  methods: {
    handleThemeToggle() {
      this.isDarkTheme = !this.isDarkTheme
      window.__setPreferredTheme(this.isDarkTheme ? 'dark' : 'light')
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
