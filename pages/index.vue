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
    }
  },

  async created() {
    const content = await axios.all([
      axios.get(this.$getUrlFromCms('/homepage')),
      axios.get(this.$getUrlFromCms('/clients-logos')),
    ])
    this.cmsData = {
      ...content[0].data,
      clients_logos: content[1].data.logos,
    }
  },
}
</script>
