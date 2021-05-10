<template>
  <div v-if="cmsData">
    <header class="section">
      <navbar :home="false" />
    </header>
    <customer-story-header v-if="customer" v-bind="$props">
      <template #right>
        <h1>asdfasdf asdf</h1>
      </template>
    </customer-story-header>
    <page-header v-else v-bind="$props" />
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
    customer: {
      type: String,
      default: '',
    },
    customerResults: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped>
header {
  padding-top: 0;
}
</style>
