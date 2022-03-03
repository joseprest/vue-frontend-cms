<template>
  <div>
    <template v-for="comp of extrasNavbar">
      <component
        :is="$getComponentFromCms(comp.__component)"
        :key="`navigation-extra-${comp.__component}-${comp.id}`"
        :cms-data="comp"
      />
    </template>
    <section v-if="cmsData" class="header">
      <div class="container">
        <nuxt-link class="logo" :to="localePath('/')">
          <img width="181" height="35" :src="getLogoImg" alt="Wattsense" />
        </nuxt-link>
        <div class="actions">
          <a :class="buttonClass" href="mailto:contact@site.com">
            <span>{{ cmsData.contact_us }}</span>
          </a>
          <!-- Language -->
          <div class="field">
            <div class="control has-icons-left">
              <div class="select is-small">
                <select
                  v-model="locale"
                  class="language-selector is-borderless is-transparent"
                  @change="changedLanguage($event.target.value)"
                >
                  <option value="en">En</option>
                  <option value="fr">Fr</option>
                </select>
              </div>
              <div class="icon is-small is-left">
                <figure class="image is-16x16">
                  <img
                    src="@/assets/imgs/worlwide.svg"
                    alt="Select language"
                    width="16"
                    height="16"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a :class="mobileButtonClass" href="mailto:contact@site.com">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              fill="#2BC47C"
              d="M0 1.25C0 .56.56 0 1.25 0h2.691a1.25 1.25 0 011.233 1.044l.924 5.545a1.25 1.25 0 01-.674 1.324L3.49 8.88a13.796 13.796 0 007.63 7.63l.968-1.934a1.25 1.25 0 011.324-.674l5.545.924A1.25 1.25 0 0120 16.059v2.691c0 .69-.56 1.25-1.25 1.25h-2.5C7.275 20 0 12.725 0 3.75v-2.5z"
            />
          </svg>
        </span>
        <span>{{ cmsData.contact_us }}</span>
      </a>
    </section>
  </div>
</template>

<script>
import normalLogo from '@/assets/imgs/site-header-logo.svg'
export default {
  name: 'LorawanBacnetGatewayNavbar',

  props: {
    cmsData: {
      type: Object,
      default: null,
    },
    extrasNavbar: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      locale: this.$i18n.locale,
    }
  },

  computed: {
    getLogoImg() {
      return normalLogo
    },

    buttonClass() {
      return 'button is-success is-inverted has-text-weight-semibold has-shadow btn-big is-uppercase is-hidden-mobile'
    },

    mobileButtonClass() {
      return 'button is-success is-inverted has-text-weight-semibold has-shadow btn-big is-uppercase is-hidden-tablet'
    },
  },

  methods: {
    changedLanguage(locale) {
      this.$emit('changed-language', locale)
    },
  },
}
</script>

<style lang="scss" scoped>
$header-height: 92px;

.header {
  width: 100%;
  background: $green;
  height: $header-height;
  display: flex;
  align-items: center;
  @include touch {
    padding-left: 20px;
    padding-right: 20px;
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @include touch {
      width: 100%;
    }
  }
  .logo {
    display: flex;
    align-items: center;
    width: 210px;
    img {
      max-height: 2.25rem;
    }
  }
  .actions {
    display: flex;
    align-items: center;
  }
  a.button {
    margin-left: 1em;
    margin-right: 1em;
    @include mobile {
      position: absolute;
      margin-top: 10em;
      right: 0;
    }
    span {
      display: inline-flex;
      align-items: center;
      color: $blue-dark;
      svg {
        margin-right: 10px;
      }
    }
  }
  a.button:not(*:root) {
    @include mobile {
      margin-top: 11em;
    }
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
