<template>
  <div v-if="Object.keys(cmsData).length > 0">
    <index-header :cms-data="cmsData.header" />
    <index-upgrade-bms :cms-data="cmsData.upgrade" />
    <index-collect-unify-bms-data :cms-data="cmsData.unify" />
    <index-plug-and-play :cms-data="cmsData.plug_play" />
    <index-connect-all :cms-data="cmsData.connect" />
    <customer-stories :cms-data="cmsData.customer_stories" />
    <index-how-it-works :cms-data="cmsData.how_it_works" />
    <index-get-demo />
    <index-clients :cms-data="cmsData.clients" />
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
    const content = await axios.get(
      this.$getUrlFromCms('/home?locale.language=en')
    )
    this.cmsData = content.data[0]
  },
}
</script>
