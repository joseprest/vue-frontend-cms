<template>
  <div class="why-wattsense">
    <div class="hero has-text-centered">
      <span>
        {{ cmsData.portal_text_1 }}
        <ws-link
          :url="cmsData.portal_url"
          isTransparent
          class="explore-link mt-25"
        >
          {{ cmsData.portal_text_2 }}
        </ws-link>
      </span>
    </div>
    <div class="container py-6">
      <ws-title
        :title="cmsData.title"
        align="center"
        class="why-wattsense__title pt-4"
      />
      <div class="columns is-multiline steps">
        <div class="is-flex-tablet">
          <div
            v-for="step in cmsData.steps"
            :key="`wattsense-step-index-${step.id}`"
            class="column is-4 is-12-mobile"
          >
            <div class="align-top is-flex-column">
              <figure class="image">
                <ws-image
                  :src="$getImageUrlFromCms(step.image)"
                  :alt="step.tip"
                  width="61"
                  height="61"
                />
              </figure>
              <div class="has-text-left">
                <p class="step-title has-text-weight-bold mb-3">
                  {{ step.tip }}
                </p>
                <p class="subtitle">
                  {{ step.description }}
                </p>
              </div>
              <div class="links-wrapper">
                <ws-link
                  v-if="step.link_1_url"
                  :url="step.link_1_url"
                  class="mt-25"
                >
                  {{ step.link_1_text }}
                </ws-link>
                <ws-link
                  v-if="step.link_2_url"
                  :url="step.link_2_url"
                  class="mt-25"
                >
                  {{ step.link_2_text }}
                </ws-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PagePartnerWhyWattsense',
  props: {
    cmsData: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.steps {
  background: inherit;
  box-shadow: none;
  padding: 0;
  .column {
    figure {
      justify-content: left;
    }
  }
}
</style>
