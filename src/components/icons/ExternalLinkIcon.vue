<template>
  <IconBase v-bind="$props" v-on="$listeners">
    <path
      d="M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48M336 64h112v112M224 288L440 72"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="40"
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
      default: 'External Link',
    },
  },
}
</script>
