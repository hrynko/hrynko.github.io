<template>
  <IconBase v-bind="$props" v-on="$listeners">
    <polygon
      points="256 144.03 200.51 47.92 121.08 47.92 256 281.61 390.92 47.92 311.49 47.92 256 144.03"
    />

    <polygon
      points="409.4 47.92 256 313.61 102.6 47.92 15.74 47.92 256 464.08 496.26 47.92 409.4 47.92"
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
      default: 'Vue',
    },
  },
}
</script>
