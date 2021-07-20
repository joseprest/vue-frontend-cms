<template>
  <client-only>
    <v-lazy-image :src="src" :src-placeholder="srcPlaceholder" :alt="alt" />
  </client-only>
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
    placeholder: {
      type: String,
      default: null,
    },
  },

  computed: {
    srcPlaceholder() {
      return this.placeholder || require('@/assets/imgs/empty.gif')
    },
  },
}
</script>
<style lang="scss" scoped>
.is-bordered {
  border: 1px solid $grey-lighter;
}
.v-lazy-image {
  filter: blur(10px);
  transition: filter 0.5s;
}
.v-lazy-image-loaded {
  filter: blur(0);
}
</style>
