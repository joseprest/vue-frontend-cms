<template>
  <h4 class="has-text-weight-semibold is-uppercase">
    {{ cmsData.title }}
  </h4>
</template>

<script>
export default {
  name: 'FooterTitle',
  props: {
    cmsData: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
