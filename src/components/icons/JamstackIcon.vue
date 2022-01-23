<template>
  <IconBase v-bind="$props" v-on="$listeners">
    <path
      d="M 480 32 L 480 256 C 480 379.863 379.863 480 256 480 C 132.137 480 32 379.863 32 256 C 32 132.137 132.137 32 256 32 Z M 415 243.695 L 415 96.6 L 267.9 96.6 L 267.9 243.695 Z M 267.9 415.295 C 347.516 411.927 411.628 347.816 415 268.2 L 267.9 268.2 Z M 96.7 267.9 C 100.068 347.518 164.182 411.637 243.8 415.005 L 243.8 267.9 Z"
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
      default: 'Jamstack',
    },
  },
}
</script>
