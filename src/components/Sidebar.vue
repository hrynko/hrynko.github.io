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
.sidebar {
  @media screen and (max-width: 768px) and (min-width: 577px) {
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

  @media screen and (max-width: 576px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
