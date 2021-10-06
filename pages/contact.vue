<template>
  <page-container
    v-if="Object.keys(cmsData).length > 0"
    :cms-data="cmsData.page_title"
    :navbar-data="navbarData"
  >
    <section class="section contact">
      <div class="container">
        <ws-title :title="cmsData.title" />

        <div class="columns is-flex-mobile is-reversed-mobile is-mobile">
          <div
            class="column is-5-desktop is-6-tablet is-12-mobile is-flex-column"
          >
            <form-contact :cms-data="cmsData" />
          </div>

          <div
            class="column is-hidden-mobile is-1-desktop"
            style="border-right: 1px solid #ddeaf3"
          ></div>
          <div class="column is-hidden-mobile is-1-desktop"></div>

          <div class="column is-5-desktop is-5-tablet is-12-mobile address">
            <p>
              <a :href="`mailto:${cmsData.email}`" class="has-text-grey">
                {{ cmsData.email }}
              </a>
            </p>
            <p>{{ cmsData.address }}</p>
            <p>
              <a :href="`tel:${cmsData.phone}`" class="has-text-grey">
                <strong>{{ cmsData.phone }}</strong>
              </a>
            </p>

            <p class="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5617438.060675247!2d-0.3603218221548235!3d46.8715407999741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f493ee64c39ac3%3A0xe6a64b04b6427704!2sWattsense!5e0!3m2!1sfr!2sfr!4v1548769867831"
                width="100%"
                height="100%"
                frameborder="0"
                style="border: 0"
                allowfullscreen
              />
            </p>
          </div>
        </div>
      </div>
    </section>
  </page-container>
</template>

<script>
import FormContact from '@/components/form-contact.vue'

export default {
  name: 'Contact',

  components: {
    FormContact,
  },

  nuxtI18n: {
    paths: {
      en: '/contact',
      fr: '/contact',
      de: '/kontakt',
    },
  },

  async asyncData({ i18n, $axios, $getUrlFromCms }) {
    const content = await Promise.all([
      $axios.get(
        $getUrlFromCms('/page-contact?_locale=' + i18n.localeProperties.iso)
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
.section.contact {
  padding-bottom: 7rem;
}

.address {
  p {
    margin: 1.25rem 0;

    & + .map {
      height: 70%;
      margin-top: 20px;
    }
  }
}
</style>
