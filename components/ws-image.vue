<template>
  <v-lazy-image
    :v-scroll-reveal="{ delay, reset, distance, origin, easing }"
    :src="src"
    :src-placeholder="require('@/assets/imgs/empty.gif')"
    :alt="alt"
  />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: '',
    },
    delay: {
      type: Number,
      default: 0,
    },
    reset: {
      type: Boolean,
      default: false,
    },
    distance: {
      type: String,
      default: null,
    },
    origin: {
      type: String,
      default: null,
    },
    easing: {
      type: String,
      default: null,
    },
  },
}
</script>
<style lang="scss" scoped>
.is-bordered {
  border: 1px solid $grey-lighter;
}
</style>
