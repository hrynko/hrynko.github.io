<template>
  <div class="default-layout">
    <Sidebar />

    <main class="main">
      <slot />
    </main>
  </div>
</template>

<script>
import Sidebar from '~/components/Sidebar.vue'

export default {
  components: {
    Sidebar,
  },
}
</script>

<style lang="scss">
$layout-width: 1140px;
$layout-padding: 1.5rem;

.default-layout {
  margin: 0 auto;
  width: 100%;
  max-width: $layout-width;

  .sidebar {
    position: fixed;
    padding: $layout-padding;
    width: 25%;
    max-width: calc($layout-width * 0.25);
    height: 100%;

    &::after {
      content: '';
      position: absolute;
      top: $layout-padding;
      right: 0;
      bottom: $layout-padding;
      border-left: 1px solid var(--color-border);
    }
  }

  .main {
    position: relative;
    margin: 0 0 0 25%;
    padding: $layout-padding;
  }

  @media screen and (max-width: 768px) {
    .sidebar {
      position: relative;
      width: 100%;
      max-width: 100%;

      &::after {
        top: 100%;
        right: $layout-padding;
        bottom: 0;
        left: $layout-padding;
        border-top: 1px solid var(--color-border);
        border-left: none;
      }
    }

    .main {
      margin: 0;
    }
  }

  @media print {
    .sidebar {
      display: none;
    }

    .main {
      margin: 0;
    }
  }
}
</style>
