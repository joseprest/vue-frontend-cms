<template>
  <ws-link :title="cmsData.title" :url="cmsData.url" />
</template>

<script>
export default {
  name: 'ButtonSimple',
  props: {
    cmsData: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.button {
  white-space: inherit;
  @include desktop-only {
    display: contents;
  }
  @include touch {
    display: contents;
  }
}
</style>
