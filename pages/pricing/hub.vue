<template>
  <page-container :cms-data="cmsData.page_title" :navbar-data="navbarData">
    <section
      v-for="comp in cmsData.body"
      :key="`body-${comp.__component}-${comp.id}`"
      class="pricing-hub section"
      :class="
        comp.__component.replace(/page-(global|pricing)\./gi, '') +
        (comp.background === 'light-gray' ? ' bg-accent' : '')
      "
    >
      <div class="container">
        <component
          :is="$getComponentFromCms(comp.__component)"
          :cms-data="comp"
        />
      </div>
    </section>
  </page-container>
</template>

<script>
export default {
  name: 'PricingHub',
  nuxtI18n: {
    paths: {
      en: '/pricing/hub',
      fr: '/tarifs/hub',
      de: '/preise/hub',
    },
  },
  async asyncData({ i18n, $axios, $getUrlFromCms }) {
    const content = await Promise.all([
      $axios.get(
        $getUrlFromCms('/page-pricing-hub?_locale=' + i18n.localeProperties.iso)
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
}
</script>
<style lang="scss" scoped>
section.table-pricing {
  padding-top: 0;
}
section.subscription {
  padding-top: 0;
  padding-bottom: 1em;
  @include touch {
    padding-top: 40px;
  }
}
section.table {
  padding-bottom: 4rem;

  @include desktop {
    padding-bottom: 0;
  }
}
</style>
