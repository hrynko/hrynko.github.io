<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :viewBox="viewBox"
    :aria-label="title"
    role="presentation"
    v-on="$listeners"
  >
    <title>{{ title }}</title>

    <g :fill="color">
      <slot />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: 'currentColor',
    },
    viewBox: {
      type: String,
      default: '0 0 512 512',
    },
    width: {
      type: [Number, String],
      default: '1em',
    },
    height: {
      type: [Number, String],
      default: '1em',
    },
  },
}
</script>

<style lang="scss" scoped>
svg {
  display: inline-block;
  margin-bottom: -2px;
  vertical-align: baseline;
}
</style>
