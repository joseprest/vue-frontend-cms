<template>
  <section class="section advantages">
    <div class="container">
      <ws-title :title="cmsData.title" align="left" class="advantages" />
      <ws-link
        :link="cmsData.button.Text"
        :url="cmsData.button.Link"
        target="_blank"
        class="bacs"
      />
      <div class="columns is-multiline">
        <template v-for="(advantage, key) in cmsData.advantages">
          <div
            v-if="key !== 'title'"
            :key="`advantage_${key}`"
            class="column is-4-desktop is-6-tablet"
          >
            <advantage
              :icon="$getImageUrlFromCms(advantage.image)"
              :title="advantage.title"
              :description="$md.render(advantage.text)"
              :link="''"
              :url="''"
            />
          </div>
        </template>
      </div>

      <!-- CTA -->
      <div class="cta mt-10">
        <div v-if="this.product == 'box'" class="buttons mt-35 mb-35">
          <ws-button class="mr-10" @click="requestDemo('box')">
            {{ $t('urls.getdemo.label') }}
          </ws-button>
          <a
            class="button is-success is-inverted has-text-weight-semibold has-shadow btn-big is-uppercase"
            :href="$t('urls.pricing.box.url')"
            v-html="$t('urls.pricing.box.cta')"
          />
        </div>
        <div v-else class="buttons mt-35 mb-35">
          <ws-button class="mr-10" @click="requestDemo('hub')">
            {{ $t('urls.getdemo.label') }}
          </ws-button>
          <a
            class="button is-success is-inverted has-text-weight-semibold has-shadow btn-big is-uppercase"
            :href="$t('urls.pricing.hub.url')"
            v-html="$t('urls.pricing.hub.cta')"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Advantage from '../components/advantage'

export default {
  components: {
    Advantage,
  },
  props: {
    cmsData: {
      type: Object,
      default: null,
    },
  },

  data() {
    return {
      showDemo: false,
    }
  },

  methods: {
    requestDemo(product) {
      // this.$gtm.trackEvent({
      //   event: 'uaevent',
      //   category: 'navigation',
      //   action: 'get a demo',
      //   label: 'body',
      // })
      //
      // EventBus.$emit('openRequestDemo', product)
    },
  },
}
</script>

<style lang="scss">
.advantages {
  margin: 0;
  padding-top: 1em;
  padding-bottom: 1em;
}
.ws-title.advantages {
  margin-top: 1.5em;
  margin-bottom: 1.5em;
}
.bacs {
  margin-top: -20px;
  margin-bottom: 60px;
}
.cta {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
}
</style>
