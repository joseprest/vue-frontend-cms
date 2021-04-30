<template>
  <section class="section clients">
    <div class="container">
      <ws-paragraph class="has-text-centered">
        <ws-title align="center">
          {{ cmsData.title }}
          <template #description>
            {{ cmsData.subtitle }}
          </template>
        </ws-title>
        <!-- color="inverted" /> -->
      </ws-paragraph>
      <clients-logos :clients="clients" />
    </div>
  </section>
</template>

<script>
import ClientsLogos from '~/components/clients-logos'

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
    clients: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
.section.clients {
  padding-top: 6rem;
  padding-bottom: 0;
}
</style>
