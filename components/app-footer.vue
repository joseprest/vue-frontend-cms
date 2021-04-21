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
                class="has-text-weight-semibold is-uppercase mb-25"
              >
                {{ comp.title }}
              </h4>
              <footer-list
                v-if="comp.__component === 'footer.links'"
                :key="`comp${comp.id}`"
                :cms-data="comp.links"
              />
              <div
                v-else-if="comp.__component === 'footer.company'"
                :key="`comp${comp.id}`"
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
            </template>
          </template>
        </div>
        <!--
        <div class="column is-6-mobile">
          <h4 class="has-text-weight-semibold">{{ $t('footer.connect') }}</h4>
          <ul class="mt-30">
            <li>
              <a
                class="login"
                :href="$t('urls.login.url')"
                target="_blank"
                noref="noref"
                rel="noopener"
                @click="linkClick"
              >
                <span>{{ $t('urls.login.label') }}</span>
                <span class="icon">
                  <ico-arrow />
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div class="column">
          <ul
            class="list-follow-us"
            style="line-height: 2rem; margin-top: 1rem"
          >
            <li>
              <a
                href="https://www.linkedin.com/company/wattsense"
                alt="https://www.linkedin.com/company/wattsense"
                target="_blank"
                title="LinkedIn"
                rel="noopener"
                @click="socialMediaClick('linkedin')"
              >
                <figure class="image is-48x48">
                  <img
                    src="@/assets/imgs/linkedin.svg"
                    alt="https://www.linkedin.com/company/wattsense"
                  />
                </figure>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/wattsense"
                alt="https://twitter.com/wattsense"
                target="_blank"
                title="Twitter"
                rel="noopener"
                @click="socialMediaClick('twitter')"
              >
                <figure class="image is-48x48">
                  <img
                    src="@/assets/imgs/twitter.svg"
                    alt="https://twitter.com/wattsense"
                  />
                </figure>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCf37c9D1hUA0rJzTgefWyAw/videos"
                alt="https://www.youtube.com/channel/UCf37c9D1hUA0rJzTgefWyAw/videos"
                target="_blank"
                title="Youtube"
                rel="noopener"
                @click="socialMediaClick('youtube')"
              >
                <figure class="image is-48x48">
                  <img
                    src="@/assets/imgs/youtube.svg"
                    alt="https://www.youtube.com/channel/UCf37c9D1hUA0rJzTgefWyAw/videos"
                  />
                </figure>
              </a>
            </li>
            <li>
              <a
                href="https://discuss.wattsense.com/"
                alt="https://discuss.wattsense.com/"
                target="_blank"
                title="Discuss"
                rel="noopener"
                @click="socialMediaClick('discuss')"
              >
                <figure class="image is-48x48">
                  <img
                    src="@/assets/imgs/discuss.svg"
                    alt="https://discuss.wattsense.com/"
                  />
                </figure>
              </a>
            </li>
          </ul>
        </div>
        -->
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
              <router-link
                class="has-text-weight-light is-7"
                :to="$t('urls.legal-notice.url')"
              >
                {{ $t('urls.legal-notice.label') }}
              </router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import axios from 'axios'
import FooterList from './footer/footer-list'
// import IcoArrow from '@/assets/imgs/icons/link-arrow-white.svg?inline'

export default {
  name: 'AppFooter',

  components: {
    // IcoArrow,
    FooterList,
  },

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

ul.links,
ul.list-auth {
  margin-top: 2em;
  li {
    font-size: 0.9em;
    line-height: 1.2em;
    margin-bottom: 1.5em;
  }
}
ul.list-auth {
  margin-right: 5px;
  margin-top: 25px;
  li:first-child {
    margin-bottom: 25px;
  }
  @include mobile {
    margin-top: 0px;
  }
}
a.login {
  display: inline-flex;
  align-items: center;
  border-radius: 5px;
  background: rgba($white, 0.2);
  padding: 5px 15px;
  transition: all linear 0.02s;
  margin-right: 1rem;
  font-size: 0.9em;
  line-height: 1.2em;
  &:hover {
    .icon {
      svg {
        fill: $dark;
        stroke: $dark;
      }
    }
  }
  span {
    display: inline-flex;
    align-items: center;
    font-weight: 500;
  }
  .icon {
    margin-left: 10px;
    width: 12px;
    svg {
      width: 12px;
      height: auto;
      fill: $white;
      stroke: $white;
      stroke-width: 0.5px;
    }
  }
}
@include mobile {
  p > ul.list-auth {
    margin-top: -1rem;
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
ul.list-follow-us {
  margin-top: 0.5em;
  figure {
    margin-right: 5px;
  }
}
</style>
