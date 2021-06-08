<template>
  <page-container
    v-if="Object.keys(cmsData).length > 0"
    :cms-data="cmsData.page_title"
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
  name: 'BMS',
  nuxtI18n: {
    paths: {
      en: '/bms',
      fr: '/gtb',
      de: '/bms',
    },
  },
  async asyncData({ i18n, $axios, $getUrlFromCms }) {
    const content = await $axios.get(
      $getUrlFromCms('/page-bms?_locale=' + i18n.localeProperties.iso)
      // 'http://localhost:1337/page-bms?_locale=' + i18n.localeProperties.iso
    )
    return {
      cmsData: { ...content.data },
    }
  },

  head() {
    return {
      title: this.cmsData.meta.title,
      meta: [
        {
          vmid: 'description',
          name: 'description',
          content: this.cmsData.meta.description,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
