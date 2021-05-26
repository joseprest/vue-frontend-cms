<template>
  <page-container :cms-data="cmsData.page_title">
    <section
      v-for="comp in cmsData.body"
      :key="`body-${comp.__component}-${comp.id}`"
      class="section"
      :class="
        comp.__component.replace('page-global.', '') +
        (comp.background === 'light-gray' ? ' bg-accent' : '')
      "
    >
      <div v-if="comp.__component === 'control'" class="gradiant">
        <img src="@/assets/imgs/gradiant-bg-blue.svg" alt="bg" />
      </div>
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
  name: 'PricingBox',
  nuxtI18n: {
    paths: {
      en: '/pricing/box',
      fr: '/tarifs/box',
      de: '/preise/box',
    },
  },
  async asyncData({ i18n, $axios, $getUrlFromCms }) {
    const { data } = await $axios.get(
      $getUrlFromCms('/page-pricing-box?_locale=' + i18n.localeProperties.iso)
    )
    console.log(data)
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
.section.box-subscription {
  padding-top: 0;
  padding-bottom: 1em;
  @include touch {
    padding-top: 40px;
  }
}
</style>
