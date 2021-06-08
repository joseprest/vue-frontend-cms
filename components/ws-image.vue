<template>
  <img v-bind="$attrs" :src="src" :alt="alt" :class="imgClass" />
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
