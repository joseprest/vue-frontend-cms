<template>
  <div>
    <header class="section">
      <navbar :home="false" />
    </header>
    <page-header :cms-data="headerData" />
    <slot />
    <app-footer />
  </div>
</template>
<script>
export default {
  name: 'PageContainer',
  props: {
    headerData: {
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
