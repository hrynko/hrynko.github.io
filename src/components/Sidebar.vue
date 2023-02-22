<template>
  <aside class="sidebar">
    <IconAuthor width="6em" height="7.5em" />

    <SidebarNavigation />

    <SidebarControls />
  </aside>
</template>

<script>
import IconAuthor from './icons/AuthorIcon.vue'
import SidebarControls from './SidebarControls.vue'
import SidebarNavigation from './SidebarNavigation.vue'

export default {
  components: {
    IconAuthor,
    SidebarControls,
    SidebarNavigation,
  },
}
</script>

<style lang="scss">
@import '@/styles/mixins';

.sidebar {
  @include media-breakpoint-up($lg) {
    text-align: center;
  }

  @include media-breakpoint-only($sm) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > * {
      &:nth-child(1) {
        order: 1;
      }

      &:nth-child(2) {
        order: 0;
      }

      &:nth-child(3) {
        order: 2;
      }
    }
  }

  @include media-breakpoint-down($sm) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
