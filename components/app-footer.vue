<template>
  <footer class="footer">
    <section class="section">
      <div id="footer-bg">
        <span></span>
      </div>
    </section>

    <div class="container">
      <div class="columns is-mobile is-multiline">
        <div class="column is-6-mobile is-flex-column">
          <h4 class="has-text-weight-semibold mb-25">WATTSENSE</h4>
          <!-- Logo -->
          <figure class="image is-128x128">
            <img
              src="@/assets/imgs/logo-draw.svg"
              alt="Wattsense"
              height="50%"
            />
          </figure>

          <!-- Contacts -->
          <router-link
            class="mt-10 small has-text-weight-semibold"
            :to="$t('urls.contact.url')"
            @click.native="linkClick"
          >
            contact@wattsense.com
          </router-link>
          <a
            class="small has-text-weight-semibold"
            style="opacity: 0.8"
            href="tel:+33428298349"
            target="_blank"
            @click="linkClick"
          >
            +33 4 28 29 83 49
          </a>

          <!-- Language -->
          <div class="mt-20 field">
            <div class="control has-icons-left">
              <div class="select is-small language-selector">
                <select v-model="locale" @change="changedLanguage">
                  <option value="en">English</option>
                  <option value="fr">Français</option>
                  <option value="de">Deutsche</option>
                </select>
              </div>
              <div class="icon is-small is-left">
                <figure class="image is-16x16">
                  <img
                    v-if="home"
                    src="@/assets/imgs/worlwide-gray.svg"
                    alt="Select language"
                  />
                  <img
                    v-else
                    src="@/assets/imgs/worlwide.svg"
                    alt="Select language"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>

        <div class="column is-6-mobile">
          <h4 class="has-text-weight-semibold">{{ $t('footer.offer') }}</h4>
          <ul class="links">
            <li>
              <router-link
                :to="$t('urls.products.box.url')"
                @click.native="linkClick"
              >
                {{ $t('urls.products.box.label') }} -
                {{ $t('urls.products.box.subtitle') }}
              </router-link>
            </li>
            <li>
              <router-link
                :to="$t('urls.products.hub.url')"
                @click.native="linkClick"
              >
                {{ $t('urls.products.hub.label') }} -
                {{ $t('urls.products.hub.subtitle') }}
              </router-link>
            </li>
            <li>
              <router-link
                :to="$t('urls.pricing.url')"
                @click.native="linkClick"
              >
                {{ $t('urls.pricing.label') }}
              </router-link>
            </li>
            <li>
              <router-link :to="$t('urls.bms.url')" @click.native="linkClick">
                {{ $t('urls.bms.label') }}
              </router-link>
            </li>
            <li>
              <router-link
                :to="$t('urls.resources.url')"
                @click.native="linkClick"
              >
                {{ $t('urls.resources.label') }}
              </router-link>
            </li>
            <li>
              <router-link
                :to="$t('urls.compatibility.url')"
                @click.native="linkClick"
              >
                {{ $t('urls.compatibility.label') }}
              </router-link>
            </li>
          </ul>
        </div>

        <div class="column is-6-mobile">
          <h4 class="has-text-weight-semibold">{{ $t('footer.company') }}</h4>
          <ul class="links">
            <li>
              <router-link :to="$t('urls.about.url')" @click.native="linkClick">
                {{ $t('urls.about.label') }}
              </router-link>
            </li>
            <li>
              <router-link
                :to="$t('urls.contact.url')"
                @click.native="linkClick"
              >
                {{ $t('urls.contact.label') }}
              </router-link>
            </li>
            <li>
              <a
                :href="$t('urls.blog.url')"
                noref="noref"
                rel="noopener"
                @click.native="linkClick"
              >
                {{ $t('urls.blog.label') }}
              </a>
            </li>
            <li @click="showModalPartner">
              <a @click.native="linkClick">
                {{ $t('urls.become-partner.label') }}
              </a>
            </li>
          </ul>
        </div>

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

        <div class="column is-12-touch">
          <h4 class="has-text-weight-semibold">{{ $t('footer.follow-us') }}</h4>
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
import IcoArrow from '@/assets/imgs/icons/link-arrow-white.svg?inline'

export default {
  name: 'AppFooter',

  components: {
    IcoArrow,
  },

  props: {
    home: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
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

  created() {
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

    socialMediaClick(socialMedia) {
      this.linkClick({
        target: {
          innerText: socialMedia,
        },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.footer {
  section {
    margin: -40px !important;
    @include touch {
      margin-left: 0 !important;
      margin-right: 0 !important;
    }
  }
}
.footer:before {
  content: '';
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 50%;
  top: 0;
  left: 0;
  // transform: skewY(-2deg);
  background: $green;
  z-index: 9;
}

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
