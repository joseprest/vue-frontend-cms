<template>
  <div v-if="cmsData">
    <header class="section">
      <navbar :cms-data="navbarData" :home="false" />
    </header>
    <page-header v-bind="$props" />
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
    navbarData: {
      type: Object,
      default: () => ({}), // {dropdown: [], extras: []}
    },
  },
}
</script>

<style scoped>
header {
  padding-top: 0;
}
</style>
