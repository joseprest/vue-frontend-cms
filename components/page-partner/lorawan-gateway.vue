<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-half is-full-mobile">
          <ws-paragraph class="has-text-left">
            <ws-title align="left">
              {{ cmsData.title }}
              <template #description>
                {{ cmsData.description }}
              </template>
            </ws-title>
          </ws-paragraph>
          <ws-link :url="cmsData.moreinfo_url" class="mt-25">
            {{ cmsData.moreinfo_text }}
          </ws-link>
        </div>
        <div class="column is-half is-full-mobile">
          <div class="lorawan">
            <div id="lorawan-gateway">
              <div
                class="lorawan-gateway"
                v-html="$md.render(cmsData.youtube)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PagePartnerLorawanGateway',
  props: {
    cmsData: {
      type: Object,
      default: null,
    },
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.ws-title {
  margin-bottom: 0;
}

.button {
  white-space: inherit;
  @include desktop-only {
    display: contents;
  }
  @include touch {
    display: contents;
  }
}
.section {
  background: #f9f9fa;
  .container {
    @include touch {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
    .columns {
      @include mobile {
        flex-direction: column-reverse;
        display: flex;
      }
    }
  }
}
</style>
