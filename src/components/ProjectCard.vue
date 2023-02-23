<template>
  <section class="project-card content-box">
    <h2 class="project-card__title">
      <slot name="title" />
    </h2>

    <slot />

    <div class="project-card__meta">
      <slot name="meta" />
    </div>
  </section>
</template>

<style lang="scss">
.project-card {
  position: relative;

  & + & {
    margin-top: 1.5rem;
  }

  &__title {
    margin-top: 0;
  }

  &__meta {
    font-size: 0.8em;
  }
}
</style>
