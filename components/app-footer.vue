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
              <component
                :is="$getComponentFromCms(comp.__component)"
                :key="`${colIndex}-footer-${comp.__component}-${comp.id}`"
                :cms-data="comp"
                class="mt-25"
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
        <div v-if="formToShow">
          <ws-button :cms-data="{ popup: formToShow, forceForm: true }" />
        </div>
        <div class="level-right">
          <div class="level-item">
            <p class="bottom">
              <template v-for="link in cmsData.bottom_links">
                <nuxt-link
                  v-if="$isExternalUrl(link.link)"
                  :key="`bottom-link${link.id}`"
                  class="has-text-weight-light is-7 ml-10"
                  :to="link.link"
                >
                  {{ link.text }}
                </nuxt-link>
                <a
                  v-else
                  :key="`bottom-link${link.id}`"
                  class="has-text-weight-light is-7 ml-10"
                  :href="link.link"
                >
                  {{ link.text }}
                </a>
              </template>
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

  async fetch() {
    const content = await axios.get(
      this.$getUrlFromCms('/footer?_locale=' + this.$i18n.localeProperties.iso)
    )
    this.cmsData = content.data
  },

  computed: {
    date() {
      const _date = new Date()
      return _date.getFullYear()
    },
    formToShow() {
      if (this.$route.query.demo) return 'get_demo'
      else if (this.$route.query.sales) return 'request_sales'
      else if (this.$route.query.prices) return 'request_pricing'
      else if (this.$route.query.partner) return 'partner'
      return null
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
