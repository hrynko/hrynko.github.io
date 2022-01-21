<template>
  <IconBase v-bind="$props" v-on="$listeners">
    <path
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="48"
      d="M268 112l144 144-144 144M392 256H100"
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
      default: 'Arrow right',
    },
  },
}
</script>
