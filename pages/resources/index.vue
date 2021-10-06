<template>
  <page-container
    v-if="Object.keys(cmsData).length > 0"
    :cms-data="cmsData.page_title"
    :navbar-data="navbarData"
  >
    <section class="section main" style="min-height: 80vh">
      <div class="container">
        <ws-title
          :title="cmsData.title"
          :description="cmsData.text"
          align="left"
        />
        <div
          v-for="section in cmsData.resources"
          :key="`resources${section.id}`"
        >
          <p class="title">{{ section.title }}</p>
          <div class="columns is-multiline mb-25 integration">
            <div
              v-for="btn in section.button"
              :key="`res${section.id}-${btn.id}`"
              class="column is-4-widescreen is-6-desktop is-6-tablet is-12-mobile"
            >
              <button-extended :cms-data="btn" :color="section.color" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </page-container>
</template>

<script>
import ButtonExtended from '@/components/button-extended.vue'
export default {
  name: 'Resources',
  nuxtI18n: {
    paths: {
      en: '/resources',
      fr: '/ressources',
      de: '/ressourcen',
    },
  },
  components: {
    ButtonExtended,
  },
  async asyncData({ i18n, $axios, $getUrlFromCms }) {
    const content = await Promise.all([
      $axios.get(
        $getUrlFromCms('/page-resources?_locale=' + i18n.localeProperties.iso)
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
}

.title {
  width: 100%;
  max-width: 100%;
  font-size: $size-4;
  line-height: 1.75em;
  margin-bottom: 15px;
  font-weight: $weight-medium;
  color: rgba($gray-dark, 0.8);

  @include mobile {
    font-size: $size-4;
  }
}
</style>
