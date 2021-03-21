<template>
  <div>
    <index-header v-if="cmsData.header" :cms-data="cmsData.header" />
    <index-upgrade-bms v-if="cmsData.upgrade" :cms-data="cmsData.upgrade" />
    <index-collect-unify-bms-data
      v-if="cmsData.unify"
      :cms-data="cmsData.unify"
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
