<template>
  <footer class="footer">
    <div class="container">
      <div
        v-if="cmsData && cmsData.column1"
        class="columns is-mobile is-multiline"
      >
        <div
          v-for="colIndex in [1, 2, 3, 4, 5]"
          :key="`col${colIndex}`"
          :class="
            colIndex === 1
              ? 'column is-6-mobile is-flex-column'
              : colIndex === 5
              ? 'column is-12-touch'
              : 'column is-6-mobile'
          "
        >
          <template
            v-if="
              cmsData[`column${colIndex}`] &&
              cmsData[`column${colIndex}`].length
            "
          >
            <template v-for="comp in cmsData[`column${colIndex}`]">
              <h4
                v-if="comp.__component === 'footer.title'"
                :key="`comp${comp.id}`"
                class="has-text-weight-semibold is-uppercase"
              >
                {{ comp.title }}
              </h4>
              <footer-list
                v-if="comp.__component === 'footer.links'"
                :key="`footer-list${comp.id}`"
                :cms-data="comp.links"
                class="mt-25"
              />
              <div
                v-else-if="comp.__component === 'footer.company'"
                :key="`footer-company${comp.id}`"
                class="mt-25"
              >
                <figure class="image is-128x128">
                  <img
                    :src="$getUrlFromCms(comp.image.url)"
                    alt="Wattsense"
                    height="50%"
                  />
                </figure>
                <!-- Contacts -->
                <nuxt-link
                  class="mt-10 small has-text-weight-semibold"
                  :to="comp.Link.link"
                >
                  {{ comp.Link.text }}
                </nuxt-link>
                <a
                  class="small has-text-weight-semibold"
                  style="opacity: 0.8"
                  :href="`tel:${comp.phone}`"
                  target="_blank"
                  @click="linkClick"
                >
                  {{ comp.phone }}
                </a>
                <!-- TODO: language selector -->
              </div>
              <footer-social
                v-else-if="comp.__component === 'footer.social'"
                :key="`footer-social${comp.id}`"
                :cms-data="comp.socialnetwork"
              />
              <footer-newsletter
                v-else-if="comp.__component === 'footer.newsletter'"
                :key="`footer-newsletter${comp.id}`"
                :cms-data="comp.newsletter"
              />
              <footer-login
                v-else-if="comp.__component === 'footer.login'"
                :key="`footer-login${comp.id}`"
                :cms-data="comp"
              />
            </template>
          </template>
        </div>
      </div>

      <hr style="margin-bottom: 1rem" />

      <div class="level">
        <div class="level-left">
          <div class="level-item">
            <p class="bottom">Wattsense © {{ date }}</p>
          </div>
        </div>

        <div class="level-right">
          <div class="level-item">
            <p class="bottom">
              <nuxt-link
                v-for="link in cmsData.bottom_links"
                :key="`bottom-link${link.id}`"
                class="has-text-weight-light is-7 ml-10"
                :to="link.link"
              >
                {{ link.text }}
              </nuxt-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AppFooter',
  props: {
    home: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      cmsData: {},
      showDemo: false,
      showSales: false,
      showPartner: false,
      showPrices: false,
      showHub: false,
    }
  },

  computed: {
    date() {
      const _date = new Date()
      return _date.getFullYear()
    },
  },

  async created() {
    // eslint-disable-next-line no-console
    if (this.$route.query.demo) {
      this.showDemo = true
    }
    if (this.$route.query.sales) {
      this.showSales = true
    }
    if (this.$route.query.prices) {
      this.showPrices = true
    }
    if (this.$route.query.partner) {
      this.showPartner = true
    }
    const content = await axios.get(
      this.$getUrlFromCms('/footers?locale.language=en')
    )
    this.cmsData = content.data[0]
  },

  methods: {
    linkClick(htmlElem) {
      this.$gtm.trackEvent({
        event: 'uaevent',
        category: 'navigation',
        action: 'footer',
        label: htmlElem.target.textContent,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.language {
  select {
    border-color: unset;
    background-color: unset;

    &:not(.is-multiple):not(.is-loading)::after {
      border-color: unset;
    }
  }
}

ul.links {
  margin-top: 2em;
  li {
    font-size: 0.9em;
    line-height: 1.2em;
    margin-bottom: 1.5em;
  }
}
.small {
  font-size: 0.95em;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
p.bottom {
  font-size: 0.9em;
}
</style>
