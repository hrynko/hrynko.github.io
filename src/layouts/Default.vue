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
@import '@/styles/mixins';

$layout-width: 1140px;
$layout-padding: 1.5rem;

.default-layout {
  margin: 0 auto;
  width: 100%;
  max-width: $layout-width;

  .sidebar {
    position: fixed;
    padding: ($layout-padding * 2) $layout-padding;
    width: 25%;
    max-width: $layout-width * 0.25;
    height: 100%;
    overflow-y: auto;
  }

  .main {
    position: relative;
    margin: 0 0 0 25%;
    padding: $layout-padding;
  }

  @include media-breakpoint-down($lg) {
    .sidebar {
      position: relative;
      padding-top: $layout-padding;
      padding-bottom: 0;
      width: 100%;
      max-width: 100%;
      overflow-y: hidden;
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
