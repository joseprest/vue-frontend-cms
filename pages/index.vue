<template>
  <div v-if="Object.keys(cmsData).length > 0">
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

  async asyncData({ $axios, $getUrlFromCms }) {
    const content = await Promise.all([
      $axios.get($getUrlFromCms('/homepage')),
      $axios.get($getUrlFromCms('/clients-logos')),
    ])
    return {
      cmsData: {
        ...content[0].data,
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
