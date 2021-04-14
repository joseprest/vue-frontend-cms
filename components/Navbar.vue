<template>
  <nav
    class="navbar is-transparent"
    role="navigation"
    aria-label="main navigation"
    :class="{ home: home }"
  >
    <div class="container" style="padding-top: 20px; padding-bottom: 10px">
      <div class="navbar-brand header-logo">
        <router-link class="navbar-item" to="$t('urls.home.url')">
          <img :src="getLogoImg" alt="Wattsense" />
        </router-link>

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          :class="{ 'is-active': showMenu }"
          @click="toggleMenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        class="navbar-menu has-text-weight-semibold"
        :class="{ 'is-active': showMenu }"
      >
        <!-- is-active shows in mobile -->
        <div class="navbar-end">
          <a class="navbar-item has-dropdown is-hoverable" @click="linkClick">
            <a
              class="navbar-item"
              :class="{ 'is-active': $route.name.includes('products') }"
              >{{ $t('urls.products.label') }}</a
            >
            <div class="navbar-dropdown">
              <router-link
                :to="$t('urls.products.box.url')"
                class="navbar-item"
                @click="linkClick"
              >
                {{ $t('urls.products.box.label') }}
                <div class="subtitle">
                  {{ $t('urls.products.box.subtitle') }}
                </div>
              </router-link>
              <router-link
                :to="$t('urls.products.hub.url')"
                class="navbar-item"
                @click="linkClick"
              >
                {{ $t('urls.products.hub.label') }}
                <div class="subtitle">
                  {{ $t('urls.products.hub.subtitle') }}
                </div>
              </router-link>
            </div>
          </a>
          <a class="navbar-item has-dropdown is-hoverable" @click="linkClick">
            <a
              class="navbar-item"
              :class="{ 'is-active': $route.name.includes('benefits') }"
              >{{ $t('urls.benefits.label') }}</a
            >
            <div class="navbar-dropdown">
              <router-link
                :to="$t('urls.benefits.property-owner.url')"
                class="navbar-item"
                @click="linkClick"
              >
                {{ $t('urls.benefits.property-owner.label') }}
              </router-link>
              <router-link
                :to="$t('urls.benefits.proptech.url')"
                class="navbar-item"
                @click="linkClick"
              >
                {{ $t('urls.benefits.proptech.label') }}
              </router-link>
              <router-link
                :to="$t('urls.benefits.integrator.url')"
                class="navbar-item"
                @click="linkClick"
              >
                {{ $t('urls.benefits.integrator.label') }}
              </router-link>
              <router-link
                :to="$t('urls.benefits.facility-manager.url')"
                class="navbar-item"
                @click="linkClick"
              >
                {{ $t('urls.benefits.facility-manager.label') }}
              </router-link>
            </div>
          </a>
          <a class="navbar-item has-dropdown is-hoverable" @click="linkClick">
            <a
              class="navbar-item"
              :class="{ 'is-active': $route.name.includes('resources') }"
              :href="$t('urls.resources.url')"
              >{{ $t('urls.resources.label') }}</a
            >
            <div class="navbar-dropdown">
              <div class="nested navbar-item dropdown">
                <div class="dropdown-trigger">
                  <button
                    class="button"
                    aria-haspopup="true"
                    aria-controls="dropdown-menu"
                  >
                    <span>{{ $t('resources.main-section.section1') }}</span>
                    <span class="icon is-small">
                      <i class="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                  </button>
                </div>
                <div id="dropdown-menu" class="dropdown-menu" role="menu">
                  <div class="dropdown-content">
                    <a
                      :href="$t('urls.installation-guide-box.url')"
                      class="navbar-item"
                      target="_blank"
                      @click="linkClick"
                    >
                      {{ $t('urls.installation-guide-box.label') }}
                    </a>
                    <a
                      :href="$t('urls.installation-guide-hub.url')"
                      class="navbar-item"
                      target="_blank"
                      @click="linkClick"
                    >
                      {{ $t('urls.installation-guide-hub.label') }}
                    </a>
                    <router-link
                      :to="$t('urls.compatibility.url')"
                      class="navbar-item"
                      @click="linkClick"
                    >
                      {{ $t('urls.compatibility.label') }}
                    </router-link>
                    <a
                      :href="$t('urls.datasheet-box.url')"
                      class="navbar-item"
                      target="_blank"
                      @click="linkClick"
                    >
                      {{ $t('urls.datasheet-box.label') }}
                    </a>
                    <a
                      :href="$t('urls.datasheet-hub.url')"
                      class="navbar-item"
                      target="_blank"
                      @click="linkClick"
                    >
                      {{ $t('urls.datasheet-hub.label') }}
                    </a>
                    <a
                      :href="$t('urls.lorawan-signal.url')"
                      class="navbar-item"
                      target="_blank"
                      @click="linkClick"
                    >
                      {{ $t('urls.lorawan-signal.label') }}
                    </a>
                    <router-link
                      :to="$t('urls.integrations.url')"
                      class="navbar-item"
                      @click="linkClick"
                    >
                      {{ $t('urls.integrations.label') }}
                    </router-link>
                    <a
                      :href="$t('urls.support.url')"
                      class="navbar-item"
                      target="_blank"
                      @click="linkClick"
                    >
                      {{ $t('urls.support.label') }}
                    </a>
                  </div>
                </div>
              </div>

              <div class="nested navbar-item dropdown">
                <div class="dropdown-trigger">
                  <button
                    class="button"
                    aria-haspopup="true"
                    aria-controls="dropdown-menu"
                  >
                    <span>{{ $t('resources.main-section.section2') }}</span>
                    <span class="icon is-small">
                      <i class="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                  </button>
                </div>
                <div id="dropdown-menu" class="dropdown-menu" role="menu">
                  <div class="dropdown-content">
                    <router-link
                      :to="$t('urls.customer-stories.url')"
                      class="navbar-item"
                      @click="linkClick"
                    >
                      {{ $t('urls.customer-stories.label') }}
                    </router-link>
                    <a
                      :href="$t('urls.blog.url')"
                      class="navbar-item"
                      target="_blank"
                      @click="linkClick"
                    >
                      {{ $t('urls.blog.label') }}
                    </a>
                  </div>
                </div>
              </div>

              <div class="nested navbar-item dropdown">
                <div class="dropdown-trigger">
                  <button
                    class="button"
                    aria-haspopup="true"
                    aria-controls="dropdown-menu"
                  >
                    <span>{{ $t('resources.main-section.section3') }}</span>
                    <span class="icon is-small">
                      <i class="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                  </button>
                </div>
                <div id="dropdown-menu" class="dropdown-menu" role="menu">
                  <div class="dropdown-content">
                    <router-link
                      :to="$t('urls.iot-security.url')"
                      class="navbar-item"
                      @click="linkClick"
                    >
                      {{ $t('urls.iot-security.label') }}
                    </router-link>
                    <a
                      :href="$t('urls.api.url')"
                      class="navbar-item"
                      target="_blank"
                      @click="linkClick"
                    >
                      {{ $t('urls.api.label') }}
                    </a>
                    <a
                      :href="$t('urls.status-api.url')"
                      class="navbar-item"
                      target="_blank"
                      @click="linkClick"
                    >
                      {{ $t('urls.status-api.label') }}
                    </a>
                  </div>
                </div>
              </div>

              <router-link
                :to="$t('urls.partners.url')"
                class="navbar-item"
                @click="linkClick"
              >
                {{ $t('urls.partners.title') }}
              </router-link>
            </div>
          </a>
          <a class="navbar-item has-dropdown is-hoverable" @click="linkClick">
            <a
              class="navbar-item"
              :class="{ 'is-active': $route.name.includes('pricing') }"
              >{{ $t('urls.pricing.label') }}</a
            >
            <div class="navbar-dropdown">
              <router-link
                :to="$t('urls.pricing.box.url')"
                class="navbar-item"
                @click="linkClick"
              >
                {{ $t('urls.pricing.box.label') }}
                <div class="subtitle">
                  {{ $t('urls.pricing.box.subtitle') }}
                </div>
              </router-link>
              <router-link
                :to="$t('urls.pricing.hub.url')"
                class="navbar-item"
                @click="linkClick"
              >
                {{ $t('urls.pricing.hub.label') }}
                <div class="subtitle">
                  {{ $t('urls.pricing.hub.subtitle') }}
                </div>
              </router-link>
            </div>
          </a>
          <router-link
            :to="$t('urls.about.url')"
            class="navbar-item"
            :class="{ 'is-active': $route.name.includes('about') }"
            @click="linkClick"
          >
            {{ $t('urls.about.label') }}
          </router-link>
          <a
            :href="$t('urls.login.url')"
            class="navbar-item login"
            target="_blank"
            noref="noref"
            rel="noopener"
            @click="goToConsoleClick"
          >
            <span>{{ $t('urls.login.label') }}</span>
            <span class="icon">
              <ico-arrow />
            </span>
          </a>
          <!-- Language -->
          <div class="field">
            <div class="control has-icons-left">
              <div class="select is-small">
                <select
                  v-model="locale"
                  class="language-selector is-borderless is-transparent"
                  :class="{ 'is-black': home }"
                  @change="changedLanguage"
                >
                  <option
                    v-for="loc in $i18n.locales"
                    :key="loc.code"
                    :value="loc.code"
                  >
                    {{ loc.name }}
                  </option>
                </select>
              </div>
              <div class="icon is-small is-left">
                <figure class="image is-16x16 is-hidden-touch">
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
                <figure class="image is-16x16 is-hidden-desktop">
                  <img src="@/assets/imgs/worlwide.svg" alt="Select language" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import normalLogo from '@/assets/imgs/wattsense-header-logo.svg'
import IcoArrow from '@/assets/imgs/icons/link-arrow-white.svg?inline'
import greenLogo from '@/assets/imgs/logo.svg'

export default {
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
      showMenu: false,
      locale: this.$i18n.locale,
    }
  },

  computed: {
    getLogoImg() {
      return this.home ? greenLogo : normalLogo
    },
  },

  created() {
    // EventBus.$on('changedLanguage', (newLanguage) => {
    //   this.locale = newLanguage
    // })
  },

  mounted() {
    this.locale = localStorage.getItem('locale') || this.$i18n.locale
  },

  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
    },

    linkClick(htmlElem) {
      this.$gtm.trackEvent({
        event: 'uaevent',
        category: 'navigation',
        action: 'main menu',
        label: htmlElem.target.textContent,
      })
    },

    goToConsoleClick() {
      this.linkClick({
        target: {
          innerText: this.$t('urls.login.label'),
        },
      })
    },

    changedLanguage() {
      // EventBus.$emit('changedLanguage', this.locale)
      this.linkClick({
        target: {
          innerText: 'changed language to ' + this.locale,
        },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.navbar {
  background: none !important;

  &.home {
    .navbar-burger,
    .navbar-item {
      color: $black !important;
      &:hover {
        color: $green !important;
      }
    }
    a.login {
      background: rgba($white, 0.15);
      &:hover {
        background: rgba($white, 0.15) !important;
        .icon {
          svg {
            fill: $green;
            stroke: $green;
          }
        }
      }
      .icon {
        svg {
          fill: $black;
          stroke: $black;
        }
      }
    }
    .field {
      select {
        color: $black !important;
      }
      .select {
        &:not(.is-multiple):not(.is-loading)::after {
          border-color: $black !important;
        }
      }
    }
    .container {
      max-width: 90vw;
    }
    @include touch {
      .navbar-item.has-dropdown {
        .navbar-item {
          color: $white !important;
          background: $green;
        }
        .navbar-dropdown {
          .navbar-item {
            color: $dark !important;
            background: #14b875 !important;
          }
        }
      }
      .navbar-end {
        background: $green;
      }
      .navbar-item {
        color: $white !important;
      }
      .navbar-item.login {
        color: $white !important;
        .icon {
          svg {
            fill: $white;
            stroke: $white;
          }
        }
      }
      .field {
        select {
          color: $white !important;
        }
        .select {
          &:not(.is-multiple):not(.is-loading)::after {
            border-color: $white !important;
          }
        }
      }
    }
  }

  @include touch {
    .navbar-item {
      &:hover {
        background: transparent;
      }
    }
  }

  a.login {
    display: inline-flex;
    align-items: center;
    border-radius: 5px;
    background: rgba($white, 0.2);
    padding: 3px 15px;
    transition: all linear 0.02s;
    margin: 0.5rem 0.75rem;
    @include touch {
      display: inline-block;
    }
    &:hover {
      background: rgba($white, 0.15) !important;
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

  .navbar-dropdown {
    background: $white;
    border-radius: 0;
    border-top: 0;
    @include touch {
      background: #14b875;
      &:hover {
        background: #14b875;
        .navbar-item.has-dropdown {
          color: $dark !important;
        }
      }
    }
    .navbar-item {
      display: flex;
      flex-direction: column;
      align-items: inherit;
      color: $blue-dark;
      &:hover {
        color: $green !important;
        .navbar-dropdown {
          background: none !important;
        }
      }
      @include touch {
        color: $dark;
        &:hover {
          color: inherit !important;
          background: none !important;
        }
      }
      .subtitle {
        font-size: 0.8em;
        color: $blue-medium;
        @include touch {
          color: $white;
        }
      }
    }
    .navbar-item.is-active {
      &:hover {
        color: $black !important;
      }
    }
  }

  .navbar-dropdown a.navbar-item {
    padding-right: 1rem;
  }

  .field {
    display: inline-flex;
    align-items: center;
    select {
      border-color: unset;
      background: transparent;
      color: $white;
      option {
        color: $black;
      }
    }
    @include touch {
      display: block;
      margin-left: 5px;
    }
    .has-icons-left {
      padding-left: 0.05em;
    }
    .is-black {
      select {
        color: $black;
      }
    }
    .select {
      &:not(.is-multiple):not(.is-loading)::after {
        padding-right: 0 !important;
        border-color: $white;
      }
      img {
        width: 20px;
        height: 20px;
      }
      border-color: unset;
      background: transparent !important;
      option {
        background: transparent !important;
      }
    }
  }
}
</style>
