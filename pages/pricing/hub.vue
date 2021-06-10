<template>
  <page-container :cms-data="cmsData.page_title">
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
        {{ $getComponentFromCms(comp.__component) }}
        <component
          :is="$getComponentFromCms(comp.__component)"
          v-if="
            $getComponentFromCms(comp.__component) !==
            'page-pricing-pricing-table'
          "
          :cms-data="comp"
        />
        <page-pricing-pricing-table :cms-data="comp" />
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
    const { data } = await $axios.get(
      $getUrlFromCms('/page-pricing-hub?_locale=' + i18n.localeProperties.iso)
    )
    return {
      cmsData: { ...data },
    }
  },

  head() {
    return {
      title: this.cmsData.meta.title,
      meta: [
        {
          vmid: 'description',
          name: 'description',
          content: this.cmsData.meta.description,
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
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
