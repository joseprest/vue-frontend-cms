<template>
  <div v-if="cmsData">
    <lorawan-bacnet-gateway-navbar
      :cms-data="cmsData.navbar"
      :extras-navbar="navbarData.extras"
      @changed-language="changedLocale"
    />
    <section class="section">
      <div class="container">
        <div class="columns is-variable is-6">
          <div class="column is-6-widescreen is-12-desktop">
            <lorawan-bacnet-gateway-header :cms-data="cmsData.header" />
            <lorawan-bacnet-gateway-advantages :cms-data="cmsData.advantages" />
          </div>

          <div class="column is-6-widescreen is-12-desktop">
            <lorawan-bacnet-gateway-form :cms-data="cmsData.form" />
            <lorawan-bacnet-gateway-testimonials
              :cms-data="cmsData.testimonials"
            />
            <lorawan-bacnet-gateway-lorawan
              :cms-data="cmsData.lorawan_gateway"
            />
          </div>
        </div>
      </div>
    </section>
    <footer class="footer" />
  </div>
</template>

<script>
import Lorawan from '@/components/lorawan-bacnet-gateway/lorawan.vue'

export default {
  name: 'LorawanBacnetGateway',
  nuxtI18n: {
    paths: {
      en: '/lorawan-bacnet-gateway',
      fr: '/passerelle-lorawan-bacnet',
      de: '/lorawan-bacnet-gateway',
    },
  },

  components: {
    'lorawan-bacnet-gateway-lorawan': Lorawan,
  },

  async asyncData({ i18n, $axios, $getUrlFromCms }) {
    const content = await Promise.all([
      $axios.get(
        $getUrlFromCms(
          '/landing-page-lorawan-bacnet-gateway?_locale=' +
            i18n.localeProperties.iso
        )
      ),
      $axios.get(
        $getUrlFromCms('/navbar?_locale=' + i18n.localeProperties.iso)
      ),
    ])
    return {
      cmsData: {
        ...content[0].data,
      },
      navbarData: {
        ...content[1].data,
      },
    }
  },

  head() {
    return {
      title: this.cmsData.meta.title,
      meta: this.$getMeta(this.cmsData.meta),
      script: [
        {
          type: 'application/ld+json',
          json: this.$getStructuredData(),
        },
      ],
    }
  },

  methods: {
    changedLocale(locale) {
      this.$i18n.setLocale(locale)
    },
  },
}
</script>

<style lang="scss" scoped>
section {
  @include mobile {
    padding-top: 7em;
    padding-bottom: 3em;
  }
}

footer.footer {
  width: 100%;
  height: 15px;
  background: $blue-dark;
  padding: 0 !important;
}
</style>
