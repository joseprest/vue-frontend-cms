<template>
  <div>
    <img
      v-lazy-load
      v-bind="$attrs"
      :data-src="src"
      :src-placeholder="placeholder"
      :alt="alt"
      :class="imgClass"
    />
    <!-- {{ $attrs }}   -->
  </div>
</template>

<script>
export default {
  name: 'WsImage',
  props: {
    src: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: '',
    },
    imgClass: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: require('~/assets/imgs/empty.gif'),
    },
  },
}
</script>
<style lang="scss" scoped>
.is-bordered {
  border: 1px solid $grey-lighter;
}
</style>
