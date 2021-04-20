<template>
  <div v-if="Object.keys(cmsData).length > 0">
    <index-header :cms-data="cmsData.header" />
    <index-upgrade-bms :cms-data="cmsData.upgrade" />
    <index-collect-unify-bms-data :cms-data="cmsData.unify" />
    <index-plug-and-play :cms-data="cmsData.plug_play" />
    <index-connect-all :cms-data="cmsData.connect" />
    <customer-stories :cms-data="cmsData.customer_stories" />
    <index-how-it-works :cms-data="cmsData.how_it_works" />
    <index-get-demo :cms-data="cmsData.get_demo" />
    <index-clients
      :cms-data="cmsData.clients"
      :clients="cmsData.clients_logos"
    />
    <index-testimonials :cms-data="cmsData.testimonials" />
    <index-integrations :cms-data="cmsData.Integrations" />
    <index-improving-simple :cms-data="cmsData.Improving" />
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
      axios.get(this.$getUrlFromCms('/home?locale.language=en')),
      axios.get(this.$getUrlFromCms('/testimonials')),
      axios.get(this.$getUrlFromCms('/clients-logos')),
    ])
    this.cmsData = {
      ...content[0].data[0],
      testimonials: content[1].data,
      clients_logos: content[2].data.logos,
    }
  },
}
</script>
