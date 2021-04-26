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
import axios from 'axios'

export default {
  name: 'Index',

  data() {
    return {
      cmsData: {},
      isLoading: false,
    }
  },

  async created() {
    this.isLoading = true
    const content = await axios.all([
      axios.get(this.$getUrlFromCms('/homepage')),
      axios.get(this.$getUrlFromCms('/clients-logos')),
    ])
    this.cmsData = {
      ...content[0].data,
      clients_logos: content[1].data.logos,
    }
    this.isLoading = false
  },

  head() {
    return {
      title: this.isLoading ? 'Wattsense' : this.cmsData.meta.title,
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
