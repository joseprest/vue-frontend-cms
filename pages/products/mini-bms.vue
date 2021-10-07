<template>
  <page-container :cms-data="cmsData.page_title" :navbar-data="navbarData">
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
  name: 'PageMiniBMS',
  nuxtI18n: {
    paths: {
      en: '/products/mini-bms',
      fr: '/produits/mini-gtb',
      de: '/produkte/mini-bms',
    },
  },
  async asyncData({ i18n, $axios, $getUrlFromCms }) {
    const content = await Promise.all([
      $axios.get(
        $getUrlFromCms('/page-mini-bms?_locale=' + i18n.localeProperties.iso)
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
