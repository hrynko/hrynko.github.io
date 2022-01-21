<template>
  <IconBase v-bind="$props" v-on="$listeners">
    <path
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="48"
      d="M244 400L100 256l144-144M120 256h292"
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
      default: 'Arrow left',
    },
  },
}
</script>
