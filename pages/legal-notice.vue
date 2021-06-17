<template>
  <page-container
    v-if="Object.keys(cmsData).length > 0"
    :cms-data="cmsData.page_title"
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
    const content = await $axios.get(
      $getUrlFromCms('/page-legal-notice?_locale=' + i18n.localeProperties.iso)
    )
    return {
      cmsData: { ...content.data },
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
