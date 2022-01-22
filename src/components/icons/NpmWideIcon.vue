<template>
  <IconBase v-bind="$props" v-on="$listeners">
    <rect x="458.75" y="175.063" width="53.25" height="107.062" />

    <path
      d="M 32 68 L 32 389.375 L 298.625 389.375 L 298.625 443 L 512 443 L 512 389.375 L 992 389.375 L 992 68 Z M 298.625 335.938 L 245.375 335.938 L 245.375 175.25 L 191.938 175.25 L 191.938 335.938 L 85.25 335.938 L 85.25 121.625 L 298.625 121.625 Z M 565.25 335.938 L 458.563 335.938 L 458.563 389.563 L 351.875 389.563 L 351.875 121.625 L 565.25 121.625 Z M 938.75 335.938 L 885.5 335.938 L 885.5 175.25 L 832.25 175.25 L 832.25 335.938 L 779 335.938 L 779 175.25 L 725.75 175.25 L 725.75 335.938 L 619.063 335.938 L 619.063 121.625 L 939.125 121.625 L 939.125 335.938 Z"
    />
  </IconBase>
</template>

<script>
import IconBase from '../IconBase.vue'

export default {
  components: {
    IconBase,
  },
  props: {
    title: {
      type: String,
      default: 'npm',
    },
    viewBox: {
      type: String,
      default: '0 0 1024 512',
    },
  },
}
</script>
