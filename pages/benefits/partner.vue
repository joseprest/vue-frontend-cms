<template>
  <page-container
    v-if="Object.keys(cmsData).length > 0"
    :cms-data="cmsData.page_title"
    :navbar-data="navbarData"
  >
    <template v-for="comp in cmsData.body">
      <component
        :is="$getComponentFromCms(comp.__component)"
        :key="`body-${comp.__component}-${comp.id}`"
        :cms-data="comp"
      />
    </template>
  </page-container>
</template>

<script>
export default {
  name: 'PagePartner',
  nuxtI18n: {
    paths: {
      en: '/benefits/partner',
      fr: '/benefices/partenaire',
      de: '/benefits/partner',
    },
  },
  async asyncData({ i18n, $axios, $getUrlFromCms }) {
    const content = await Promise.all([
      $axios.get(
        $getUrlFromCms('/page-partner?_locale=' + i18n.localeProperties.iso)
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

<style lang="scss" scoped></style>
