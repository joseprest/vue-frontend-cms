<template>
  <page-container
    v-if="cmsData"
    :cms-data="cmsData.page_title"
    :navbar-data="navbarData"
  >
    <section class="section">
      <div class="container" v-html="$md.render(cmsData.text)" />
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
    navbarData: null,
  }),

  async fetch() {
    const { data } = await this.$axios.get(
      this.$getUrlFromCms(
        '/page-404?_locale=' + this.$i18n.localeProperties.iso
      )
    )

    const { data: navbarData } = await this.$axios.get(
      this.$getUrlFromCms('/navbar?_locale=' + this.$i18n.localeProperties.iso)
    )

    this.cmsData = { ...data }
    this.navbarData = { ...navbarData }
  },
}
</script>
<style lang="scss" scoped>
.section {
  min-height: 50vh;
}
</style>
