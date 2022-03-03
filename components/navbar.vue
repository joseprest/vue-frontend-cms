<template>
  <div>
    <template v-for="comp of extraComponents">
      <component
        :is="$getComponentFromCms(comp.__component)"
        :key="`navigation-extra-${comp.__component}-${comp.id}`"
        :cms-data="comp"
      />
    </template>
    <nav
      class="navbar is-transparent"
      role="navigation"
      aria-label="main navigation"
      :class="{ home: home }"
    >
      <div class="container" style="padding-top: 20px; padding-bottom: 10px">
        <div class="navbar-brand header-logo">
          <nuxt-link class="navbar-item" :to="localePath('/')">
            <img :src="getLogoImg" alt="Wattsense" />
          </nuxt-link>

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
          v-if="dropdownsNavigation && dropdownsNavigation.length"
          class="navbar-menu has-text-weight-semibold"
          :class="{ 'is-active': showMenu }"
        >
          <div class="navbar-end">
            <div
              v-for="item in dropdownsNavigation"
              :key="`navitem${item.id}`"
              class="navbar-item"
              :class="{
                'has-dropdown is-hoverable': item.subs && item.subs.length > 0,
              }"
            >
              <component
                :is="
                  item.main_link
                    ? $isExternalUrl(item.main_link)
                      ? 'a'
                      : 'nuxt-link'
                    : 'span'
                "
                v-bind="setProps(item.main_link)"
                class="navbar-item"
                :class="{
                  'is-active':
                    item.title &&
                    $route.path.includes(item.title.toLowerCase()),
                }"
              >
                {{ item.title }}
              </component>
              <div
                v-if="item.subs && item.subs.length > 0"
                class="navbar-dropdown"
              >
                <template v-for="sub in item.subs">
                  <a
                    v-if="sub.file"
                    :key="`sub${sub.id}`"
                    :href="$getUrlFromCms(sub.file.url)"
                    class="navbar-item"
                  >
                    {{ sub.title }}
                  </a>
                  <a
                    v-else-if="$isExternalUrl(sub.link)"
                    :key="`sub${sub.id}`"
                    :href="sub.link"
                    class="navbar-item"
                  >
                    {{ sub.title }}
                  </a>
                  <nuxt-link
                    v-else-if="sub.link"
                    :key="`sub${sub.id}`"
                    :to="sub.link ? localePath(sub.link) : ''"
                    class="navbar-item"
                  >
                    {{ sub.title }}
                    <div class="subtitle">
                      {{ sub.subtitle }}
                    </div>
                  </nuxt-link>
                  <div v-else :key="sub.id" class="nested navbar-item dropdown">
                    <div class="dropdown-trigger">
                      <button
                        class="button"
                        aria-haspopup="true"
                        aria-controls="dropdown-menu"
                      >
                        <span>{{ sub.title }}</span>
                        <span class="icon is-small">
                          <i class="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                      </button>
                    </div>
                    <div id="dropdown-menu" class="dropdown-menu" role="menu">
                      <div class="dropdown-content">
                        <template v-for="link in sub.links">
                          <a
                            v-if="link.file"
                            :key="`link${link.id}`"
                            :href="link.file.url"
                            class="navbar-item"
                            target="_blank"
                          >
                            {{ link.title }}
                          </a>
                          <a
                            v-else-if="$isExternalUrl(link.link)"
                            :key="`link${link.id}`"
                            :href="link.link"
                            target="_blank"
                            class="navbar-item"
                          >
                            {{ link.title }}
                          </a>
                          <nuxt-link
                            v-else
                            :key="`link${link.id}`"
                            :to="link.link ? localePath(link.link) : ''"
                            class="navbar-item"
                          >
                            {{ link.title }}
                          </nuxt-link>
                        </template>
                      </div>
                    </div>
                  </div>
                </template>
              </div>
            </div>
            <div class="field">
              <div class="control has-icons-left ml-3">
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
                      {{ loc.code | capitalize }}
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
                    <img
                      src="@/assets/imgs/worlwide.svg"
                      alt="Select language"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import normalLogo from '@/assets/imgs/site-header-logo.svg'
import greenLogo from '@/assets/imgs/logo.svg'

export default {
  name: 'Navbar',

  filters: {
    capitalize(s) {
      return s ? s.charAt(0).toUpperCase() + s.slice(1) : ''
    },
  },

  props: {
    home: {
      type: Boolean,
      default: false,
    },
    cmsData: {
      type: Object,
      default: () => ({}), // { dropdown: [], extras: [] }
    },
  },

  data() {
    return {
      showMenu: false,
      locale: 'en',
      buttonData: {
        url: 'https://blog.site.com',
        title: 'READ MORE',
        inverted: true,
        color: 'dark_blue',
        size: 'normal',
      },
    }
  },

  computed: {
    dropdownsNavigation() {
      return this.cmsData?.dropdown
    },
    extraComponents() {
      return this.cmsData?.extras || []
    },
    getLogoImg() {
      return this.home ? greenLogo : normalLogo
    },
  },

  created() {
    this.locale = this.$i18n.locale
  },

  methods: {
    setProps(element) {
      if (this.$isExternalUrl(element)) {
        return {
          target: '_blank',
          href: element,
        }
      }
      return {
        to: element ? this.localePath(element) : '',
      }
    },

    toggleMenu() {
      this.showMenu = !this.showMenu
    },

    changedLanguage() {
      this.$i18n.setLocale(this.locale)
    },
  },
}
</script>

<style lang="scss" scoped>
.navbar {
  background: none !important;
  // flex-direction: column;

  .navbar-item {
    cursor: pointer;
  }

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
