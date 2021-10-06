<template>
  <page-container
    v-if="Object.keys(cmsData).length > 0"
    :cms-data="cmsData.page_title"
    :navbar-data="navbarData"
  >
    <section class="section main">
      <div class="container">
        <div class="columns">
          <div class="column is-6-tablet is-4-widescreen">
            <ws-title :title="cmsData.title" align="left" class="mb-35" />
            <div v-html="$md.render(cmsData.text)" />
            <div class="buttons is-flex align-center mt-25">
              <ws-button class="mt-20" :cms-data="cmsData.button" />
            </div>
          </div>
          <div class="column is-6-tablet is-8-widescreen">
            <div class="columns is-multiline">
              <div
                v-for="integration in cmsData.integrations"
                :key="`integration${integration.id}`"
                class="column is-12-tablet is-6-desktop is-4-widescreen"
              >
                <div class="card resources">
                  <span
                    v-if="integration.is_new"
                    class="tag is-primary card-new"
                  >
                    NEW
                  </span>
                  <a :href="integration.url" target="_blank">
                    <span class="card-image">
                      <ws-image
                        class="card-image"
                        :src="$getImageUrlFromCms(integration.image)"
                        :alt="integration.url"
                      />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </page-container>
</template>

<script>
export default {
  name: 'Integrations',
  nuxtI18n: {
    paths: {
      en: '/resources/integrations',
      fr: '/ressources/integrations',
      de: '/ressourcen/integrationen',
    },
  },
  async asyncData({ i18n, $axios, $getUrlFromCms }) {
    const content = await Promise.all([
      $axios.get(
        $getUrlFromCms(
          '/page-integrations?_locale=' + i18n.localeProperties.iso
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
.card {
  box-shadow: none;
  width: 100%;
  height: 100%;
  position: relative;
  transition: all 0.4s ease-in-out;
  &-new {
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
    font-weight: 500;
    height: 1.8em;
    padding-top: 3px;
    padding-left: 0.6em;
    padding-right: 0.6em;
  }
  &-image {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    img {
      width: auto;
      height: auto;
    }
  }

  &.home {
    .card-image {
      img {
        max-width: 45%;
        max-height: 120px;
        @include mobile {
          max-width: 60%;
          max-height: auto;
        }
      }
    }
  }

  &.resources {
    border: 1px solid #ecf2fc;
    box-shadow: 0px 3px 15px rgba(113, 150, 193, 0.07);
    border-radius: 5px;
    .card-image {
      width: 100%;
      height: 155px;
      margin-bottom: 0;
      img {
        max-width: 70%;
        max-height: 85px;
        height: auto;
        width: auto;
      }
    }
  }

  &.benefits {
    border: 1px solid #ecf2fc;
    box-shadow: 0px 3px 15px rgba(113, 150, 193, 0.07);
    border-radius: 5px;
    .card-image {
      width: 100%;
      height: 181px;
      margin-bottom: 0;
      img {
        max-width: 70%;
        max-height: 85px;
        height: auto;
        width: auto;
      }
    }
  }
}
</style>
