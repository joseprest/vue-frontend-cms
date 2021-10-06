<template>
  <page-container :cms-data="cmsData.page_title" :navbar-data="navbarData">
    <section class="section main">
      <div class="container">
        <div class="columns is-centered is-multiline">
          <div
            v-for="story in cmsData.customer_stories"
            :key="`story${story.id}`"
            class="column is-4 is-12-mobile"
          >
            <customer-story
              :cms-data="story"
              :continue-reading="cmsData.continue_reading_text"
            />
          </div>
        </div>
      </div>
    </section>
  </page-container>
</template>

<script>
import CustomerStory from '@/components/customer-stories-components/customer-story.vue'

export default {
  name: 'CustomerStories',
  nuxtI18n: {
    paths: {
      en: '/resources/customer-stories',
      fr: '/ressources/experiences-client',
      de: '/ressourcen/kundengeschichten',
    },
  },

  components: {
    CustomerStory,
  },

  async asyncData({ i18n, $axios, $getUrlFromCms }) {
    const content = await Promise.all([
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
.section.main {
  background-image: linear-gradient(to bottom, white, #f0f5f7);
  .is-multiline {
    justify-content: flex-start;
  }
}
</style>
