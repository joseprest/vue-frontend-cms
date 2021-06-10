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
      this.$getUrlFromCms('/footer?_locale=' + this.$i18n.localeProperties.iso)
    )
    this.cmsData = content.data
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
