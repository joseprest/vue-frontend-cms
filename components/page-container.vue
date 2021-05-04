<template>
  <div v-if="cmsData">
    <header class="section">
      <navbar :home="false" />
    </header>
    <page-header :cms-data="cmsData" />
    <slot />
    <app-footer />
  </div>
</template>
<script>
export default {
  name: 'PageContainer',
  props: {
    cmsData: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style scoped>
header {
  padding-top: 0;
}
</style>
