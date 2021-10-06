<template>
  <page-container
    v-if="Object.keys(cmsData).length > 0"
    :cms-data="cmsData.page_title"
    :navbar-data="navbarData"
  >
    <component
      :is="$getComponentFromCms(comp.__component)"
      v-for="comp in cmsData.body"
      :key="`legal-notice-${comp.__component}-${comp.id}`"
      :class="comp.__component.replace('page-legal-notice.', '')"
      :cms-data="comp"
    />
  </page-container>
</template>

<script>
export default {
  name: 'LegalNotice',
  nuxtI18n: {
    paths: {
      en: '/legal-notice',
      fr: '/mentions-legales',
      de: '/rechtliche-hinweise',
    },
  },
  async asyncData({ i18n, $axios, $getUrlFromCms }) {
    const content = await Promise.all([
      $axios.get(
        $getUrlFromCms(
          '/page-legal-notice?_locale=' + i18n.localeProperties.iso
        )
      ),
      $axios.get(
        $getUrlFromCms('/navbar?_locale=' + i18n.localeProperties.iso)
      ),
    ])
    return {
      cmsData: {
        ...content[0].data,
      },
      navbarData: {
        ...content[1].data,
      },
    }
  },

  head() {
    return {
      title: this.cmsData.meta.title,
      meta: this.$getMeta(this.cmsData.meta),
      script: [
        {
          type: 'application/ld+json',
          json: this.$getStructuredData(),
        },
      ],
    }
  },
}
</script>
