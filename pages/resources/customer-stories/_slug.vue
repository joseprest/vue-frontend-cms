<template>
  <div>
    <header class="=pt-0">
      <navbar :cms-data="navbarData" :home="false" />
    </header>
    <customer-story-header :cms-data="cmsData" />
    <section class="section main">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-8 is-12-touch">
            <component
              :is="$getComponentFromCms(comp.__component)"
              v-for="comp in cmsData.body"
              :key="`body-${comp.__component}-${comp.id}`"
              :class="
                comp.__component.replace('customer-stories-components.', '')
              "
              :cms-data="comp"
            />
          </div>
          <div class="column is-4 is-12-touch" style="position: relative">
            <widget-company :cms-data="cmsData.side_card" />
            <widget-get-demo
              :cms-data="{
                widget: cmsData.globals.get_demo_widget,
                button: cmsData.globals.get_demo_button,
              }"
            />
          </div>
        </div>
      </div>
    </section>
    <app-footer />
  </div>
</template>

<script>
import WidgetCompany from '@/components/customer-stories-components/widget-company.vue'
import WidgetGetDemo from '@/components/customer-stories-components/widget-get-demo.vue'

export default {
  name: 'CustomerStory',
  nuxtI18n: {
    paths: {
      en: '/resources/customer-stories/:slug',
      fr: '/ressources/experiences-client/:slug',
      de: '/ressourcen/kundengeschichten/:slug',
    },
  },

  components: {
    WidgetCompany,
    WidgetGetDemo,
  },

  async asyncData({ i18n, $axios, params, $getUrlFromCms }) {
    const content = await Promise.all([
      $axios.get(
        $getUrlFromCms(
          '/customer-stories?slug=' +
            params.slug +
            '&_locale=' +
            i18n.localeProperties.iso
        )
      ),
      $axios.get(
        $getUrlFromCms(
          '/page-customer-stories?_locale=' + i18n.localeProperties.iso
        )
      ),
      $axios.get(
        $getUrlFromCms('/navbar?_locale=' + i18n.localeProperties.iso)
      ),
    ])

    return {
      cmsData: { ...content[0].data[0], globals: content[1].data?.globals },
      navbarData: { ...content[2].data },
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
}
</script>

<style lang="scss" scoped>
.section.main {
  min-height: 80vh;
  padding-top: 3rem;

  .scrollable-widget {
    position: absolute;
    top: 0px;

    @include touch {
      position: relative;
      top: unset;
    }
  }
}
</style>
