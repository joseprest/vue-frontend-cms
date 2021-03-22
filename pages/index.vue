<template>
  <div>
    <index-header v-if="cmsData.header" :cms-data="cmsData.header" />
    <index-upgrade-bms v-if="cmsData.upgrade" :cms-data="cmsData.upgrade" />
    <index-collect-unify-bms-data
      v-if="cmsData.unify"
      :cms-data="cmsData.unify"
    />
    <index-plug-and-play
      v-if="cmsData.plug_play"
      :cms-data="cmsData.plug_play"
    />
    <index-connect-all v-if="cmsData.connect" :cms-data="cmsData.connect" />
    <customer-stories
      v-if="cmsData.customer_stories"
      :cms-data="cmsData.customer_stories"
    />
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
