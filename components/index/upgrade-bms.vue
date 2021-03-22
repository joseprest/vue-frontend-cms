<template>
  <section class="section upgrade-bms">
    <div class="container">
      <ws-title :title="cmsData.title" align="left" />
      <div class="animation">
        <ws-image
          :src="$getImageUrlFromCms(cmsData.image)"
          class="building"
          :delay="200"
          :reset="false"
          :alt="cmsData.title"
        />
      </div>
      <div class="notification is-danger">Missing button dropdown here</div>
      <!-- CTA -->
      <!-- TODO: To implement this, create a global component button-discover-our-products and add this to strapi -->
      <!-- <div class="cta">
        <div class="dropdown is-hoverable mt-35">
          <div class="dropdown-trigger">
            <button
              class="button is-success inverted has-text-weight-semibold has-shadow btn-big is-uppercase"
            >
              <span>{{ $t('benefits.howitworks.cta.box.title') }}</span>
            </button>
          </div>
          <div id="dropdown-menu" class="dropdown-menu" role="menu">
            <div class="dropdown-content">
              <div class="dropdown-item">
                <router-link
                  :to="$t('urls.products.box.url')"
                  class="title"
                  @click.native="action"
                >
                  {{ $t('urls.products.box.label') }}
                  <div class="subtitle">
                    {{ $t('urls.products.box.subtitle') }}
                  </div>
                </router-link>
                <router-link
                  :to="$t('urls.products.hub.url')"
                  class="title"
                  @click.native="action"
                >
                  {{ $t('urls.products.hub.label') }}
                  <div class="subtitle">
                    {{ $t('urls.products.hub.subtitle') }}
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </section>
</template>

<script>
export default {
  name: 'IndexUpgradeBms',

  props: {
    cmsData: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
section {
  padding-top: 4rem;
  padding-bottom: 0rem;
  position: relative;
  @include touch {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
  &::after {
    content: ' ';
    position: absolute;
    display: block;
    width: 100%;
    height: 200px;
    bottom: -70px;
    left: 0;
    z-index: 1;
    background: $white;
    transform: skewY(-5deg);
    @include touch {
      display: none;
    }
  }
}
.ws-title {
  margin-right: 14em;
  @include mobile {
    margin-right: 0;
  }
}
.animation {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  img.building {
    width: 100%;
    max-width: 650px;
    height: auto;
    @include mobile {
      max-width: 100%;
    }
  }
  img.bullet {
    position: absolute;
    animation: hideshow 1.5s ease infinite;
  }
}
.cta {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 35px;
  a,
  span {
    display: inline-flex;
    align-items: center;
    font-weight: 600;
  }
  button.inverted {
    background-color: rgba($white, 0.08);
    &:hover {
      background-color: rgba($white, 0.1);
    }
  }

  button.inverted.button {
    background-color: rgba($white, 1);
    span {
      color: $green !important;
    }
  }
  .dropdown-menu {
    width: 100%;
  }
  .dropdown-content {
    a {
      width: 100%;
      display: block;
      border-bottom: 1px solid rgba($gray-light, 0.3);
      padding-bottom: 0.6em;
      margin-bottom: 0.6em;
      &:hover {
        color: $green;
      }
      &:last-child {
        border-bottom: 0;
        padding-bottom: 0;
        margin-bottom: 0;
      }
    }
    .title {
      font-size: 1.2em;
    }
    .subtitle {
      font-size: 0.8em;
      opacity: 0.6;
    }
  }
}
</style>
