<template>
  <page-container
    :cms-data="cmsData.page_title"
    :customer-results="cmsData.results"
    :customer="cmsData.customer"
  >
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
            <h4>xxx</h4>
          </div>
        </div>
      </div>
    </section>
  </page-container>
</template>

<script>
export default {
  name: 'CustomerStory',

  async asyncData({ i18n, $axios, params, $getUrlFromCms }) {
    const { data } = await $axios.get(
      $getUrlFromCms(
        '/customer-stories?slug=' +
          params.slug +
          '&_locale=' +
          i18n.localeProperties.iso
      )
    )
    return {
      cmsData: { ...data[0] },
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
