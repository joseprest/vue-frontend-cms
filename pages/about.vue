<template>
  <div v-if="Object.keys(cmsData).length > 0">
    <page-header :cms-data="cmsData.header" />
    <template v-for="comp in cmsData.body">
      <component
        :is="$getComponentFromCms(comp.__component)"
        :key="`body-${comp.__component}-${comp.id}`"
        :clients="cmsData.clients_logos"
        :cms-data="comp"
      />
    </template>
    <app-footer />
  </div>
</template>

<script>
export default {
  name: 'Index',
  nuxtI18n: {
    paths: {
      en: '/about',
      fr: '/entreprise',
      de: '/uber',
    },
  },
  async asyncData({ $axios, $getUrlFromCms }) {
    const content = await Promise.all([
      $axios.get($getUrlFromCms('/pages?name=About')),
      $axios.get($getUrlFromCms('/clients-logos')),
    ])
    return {
      cmsData: {
        ...content[0].data[0],
        clients_logos: content[1].data.logos,
      },
    }
  },

  head() {
    return {
      title: this.cmsData.meta.title,
      meta: this.isLoading
        ? []
        : [
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
