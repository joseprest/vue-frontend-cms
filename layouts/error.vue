<template>
  <page-container v-if="cmsData" :cms-data="cmsData.page_title">
    <section class="section">
      <div
        v-if="error.statusCode === 404"
        class="container"
        v-html="$md.render(cmsData.text)"
      ></div>
    </section>
  </page-container>
</template>

<script>
export default {
  layout: 'error',
  props: {
    error: {
      type: Object,
      default: () => ({}),
    },
  },

  data: () => ({
    cmsData: null,
  }),

  async fetch() {
    const { data } = await this.$axios.get(
      this.$getUrlFromCms(
        '/page-404?_locale=' + this.$i18n.localeProperties.iso
      )
    )
    this.cmsData = { ...data }
  },
}
</script>
<style lang="scss" scoped>
.section {
  min-height: 50vh;
}
</style>
