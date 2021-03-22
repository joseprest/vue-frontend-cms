<template>
  <img
    v-lazy-load
    :v-scroll-reveal="{ delay, reset, distance, origin, easing }"
    :data-src="src"
    :src-placeholder="placeholder"
    :alt="alt"
  />
</template>

<script>
export default {
  name: 'WsImage',
  props: {
    src: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: require('~/assets/imgs/empty.gif'),
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
