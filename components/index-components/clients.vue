<template>
  <div>
    <ws-paragraph class="has-text-centered">
      <ws-title align="center">
        {{ cmsData.title }}
        <template #description>
          {{ cmsData.subtitle }}
        </template>
      </ws-title>
    </ws-paragraph>

    <clients-logos v-if="clients" :clients="clients" />
  </div>
</template>

<script>
import ClientsLogos from '~/components/clients-logos.vue'

export default {
  name: 'IndexClients',

  components: {
    ClientsLogos,
  },

  props: {
    cmsData: {
      type: Object,
      default: null,
    },
  },

  data() {
    return {
      clients: [],
    }
  },

  async fetch() {
    const { data } = await this.$axios.get(
      this.$getUrlFromCms('/clients-logos')
    )
    this.clients = data
  },

  activated() {
    // Call fetch again if last fetch more than 120 sec ago // 2 min
    if (this.$fetchState.timestamp <= Date.now() - 1200000) {
      this.$fetch()
    }
  },
  // call fetch only on client-side
  fetchOnServer: false,
}
</script>

<style lang="scss" scoped></style>
